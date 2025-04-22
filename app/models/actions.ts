/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return */
import { flow, toGenerator } from "mobx-state-tree"
import Snackbar from "react-native-snackbar"
import { sub, add, isSameHour } from "date-fns"
import * as Sentry from "@sentry/react-native"
import { api, ISSSighting, LocationType } from "../services/api"
import * as notifications from "../utils/notifications"
import { Location } from "./Location"
import { Modal } from "./Modal"
import { translate } from "../i18n"
import { getSatPath, getSightings } from "../utils/satellite"
import * as storage from "../utils/storage"

const CACHE_DURATION = 24 * 60 * 60 * 1000
const SIGHTINGS_HISTORY_CACHE_DURATION = 60 * 60 * 1000

const RootStoreActions = (self) => ({
  calculateSightings: flow(function* calculateSightings(params: { lat: number; lon: number }) {
    const { data, ok, kind } = yield* toGenerator(
      api.getISSData({
        from: new Date(new Date().setMinutes(new Date().getMinutes() - 30)).toISOString(),
      }),
    )

    if (!ok || typeof data === "string") return { ok: false, data, kind }
    const sightings = yield getSightings(data.points, data.shadowIntervals, params.lat, params.lon)

    if (sightings.sightings.length > 0) {
      const dates: string[] = sightings.sightings.map((s) => s.date)
      const weatherData = yield self.getWeatherForecast(params.lat, params.lon, dates)
      if (weatherData) {
        sightings.sightings.forEach((sighting) => {
          sighting.cloudCover = self.getCloudCoverForDate(weatherData, sighting.date)
        })
      }
    }

    return { ok: true, data: sightings }
  }),

  getISSSightingsHistory: flow(function* getISSSightingsHistory(location: LocationType) {
    const isStaleData =
      !location.sightingsHistoryLastUpdatedAt ||
      Date.now() - new Date(location.sightingsHistoryLastUpdatedAt).getTime() >=
        SIGHTINGS_HISTORY_CACHE_DURATION
    let sightingsHistory: ISSSighting[] = JSON.parse(JSON.stringify(location.sightingsHistory))
    let firstOrbitPointAt = location.firstHistorySightingOrbitPointAt
    let lastUpdatedAt = location.sightingsHistoryLastUpdatedAt

    if (isStaleData) {
      // get fresh history data from api
      self.sightingsHistoryLoading = true
      const { data, ok } = yield* toGenerator(
        api.getISSData({
          from: sub(new Date(), { days: 14 }).toISOString(),
          to: new Date().toISOString(),
        }),
      )

      if (ok && typeof data !== "string") {
        const { sightings: newSightings, firstSightingOrbitPointAt } = yield getSightings(
          data.points,
          data.shadowIntervals,
          location.location.lat,
          location.location.lng,
        )
        firstOrbitPointAt = firstSightingOrbitPointAt
        sightingsHistory = newSightings
        lastUpdatedAt = new Date().toISOString()
      }
    }

    const isCurrentLocation = location.title === self.currentLocation?.title
    const isSelectedLocation = location.title === self.selectedLocation?.title

    // check if current sightings list has past sightings
    location.sightings.forEach((sighting) => {
      if (
        new Date(sighting.date) >
        new Date(new Date().getTime() - Math.max(sighting.visible, 30) * 60 * 1000)
      )
        return
      // account for potential sightings time change because of NASA updating trajectory file
      // if sightings are within 5 minutes from each other - it is the same sighting
      if (
        sightingsHistory.find(
          (s) =>
            Math.abs(new Date(s.date).getTime() - new Date(sighting.date).getTime()) <
            5 * 60 * 1000,
        )
      )
        return

      sightingsHistory.push(sighting)
    })

    if (isSelectedLocation) {
      self.selectedLocation.sightingsHistory = sightingsHistory.map((s) => ({ ...s }))
      self.selectedLocation.firstHistorySightingOrbitPointAt = firstOrbitPointAt
      self.selectedLocation.sightingsHistoryLastUpdatedAt = lastUpdatedAt
    }

    if (isCurrentLocation) {
      self.currentLocation.sightingsHistory = sightingsHistory.map((s) => ({ ...s }))
      self.currentLocation.firstHistorySightingOrbitPointAt = firstOrbitPointAt
      self.currentLocation.sightingsHistoryLastUpdatedAt = lastUpdatedAt
    }

    if (!isCurrentLocation) {
      const savedLocation = self.savedLocations.find(({ title }) => title === location.title)
      if (savedLocation) {
        savedLocation.sightingsHistory = sightingsHistory.map((s) => ({ ...s }))
        savedLocation.firstHistorySightingOrbitPointAt = firstOrbitPointAt
        savedLocation.sightingsHistoryLastUpdatedAt = lastUpdatedAt
      }
    }

    self.sightingsHistoryLoading = false
  }),

  getISSSightings: flow(function* getISSSightings(location: LocationType) {
    try {
      const locationCopy = JSON.parse(JSON.stringify(location)) as LocationType
      const { data, ok, kind } = yield self.calculateSightings({
        lat: location.location.lat,
        lon: location.location.lng,
      })

      if (ok) {
        const isCurrentLocation = locationCopy.title === self.currentLocation?.title
        const isSelectedLocation = locationCopy.title === self.selectedLocation?.title
        const locationSightings = locationCopy?.sightings ? [...locationCopy?.sightings] : []
        const isNotifyAll = Boolean(yield storage.load(storage.KEYS.UPCOMING))
        const dataToSave = data.sightings.map((item: ISSSighting) => {
          const sighting = locationSightings.find(
            ({ date }) => date.substring(0, 17) === item.date.substring(0, 17),
          )
          return { ...item, notify: sighting ? sighting.notify : isNotifyAll }
        })

        locationCopy.sightings = [...dataToSave]
        locationCopy.lastSightingOrbitPointAt = data.lastSightingOrbitPointAt
        locationCopy.lastUpdatedAt = new Date().toISOString()
        if (isSelectedLocation) {
          self.selectedLocation = Location.create(locationCopy)
        }

        let savedLocations = []
        if (!isCurrentLocation) {
          savedLocations = self.savedLocations.filter(({ title }) => title !== locationCopy.title)
          self.savedLocations = [...savedLocations, locationCopy]
        } else {
          self.currentLocation = Location.create(locationCopy)
        }

        const notifyFor = [
          ...(isCurrentLocation ? self.savedLocations : [...savedLocations, locationCopy]),
          isCurrentLocation ? locationCopy : self.currentLocation,
        ]
        if (self.initLoading) self.sightingsLoaded = true
        notifications
          .setNotifications(notifyFor as LocationType[], self.timeFormat as string)
          .catch(console.error)
        self.setIsCurrentLocationUpdating(false)
      } else {
        self.trajectoryError = true
        self.trajectoryErrorKind = kind
        if (self.initLoading) self.sightingsLoaded = true
        self.setIsCurrentLocationUpdating(false)
      }
    } catch (e) {
      self.trajectoryError = true
      self.trajectoryErrorKind = ""
      if (self.initLoading) self.sightingsLoaded = true
      self.setIsCurrentLocationUpdating(false)
      console.error(e)
    }
  }),

  getFilteredSightings: (location: LocationType) => {
    const hasDuration = (item: ISSSighting, duration: string) => {
      if (duration === "longerThan2") return item.visible >= 2
      if (duration === "shorterThan2") return item.visible < 2
      return true
    }

    const hasMaxHeight = (item: ISSSighting, maxHeight: string) => {
      return item.maxHeight >= Number(maxHeight)
    }

    const hasCloudCover = (item: ISSSighting, cloudCover: string) => {
      if (cloudCover === "low") return item.cloudCover !== null && item.cloudCover < 25
      if (cloudCover === "medium")
        return item.cloudCover !== null && item.cloudCover >= 25 && item.cloudCover <= 50
      return true
    }

    return location.sightings.filter((item) => {
      return (
        new Date(item.date) >
          new Date(new Date().getTime() - Math.max(item.visible, 30) * 60 * 1000) &&
        (location.filterTimeOfDay === "" || String(item.dayStage) === location.filterTimeOfDay) &&
        (location.filterDuration === "" || hasDuration(item, location.filterDuration)) &&
        (location.filterMaxHeight === "" || hasMaxHeight(item, location.filterMaxHeight)) &&
        (location.filterCloudCover === "" || hasCloudCover(item, location.filterCloudCover))
      )
    })
  },

  setSightingsTimeOfDay: (location: LocationType, value: string) => {
    location.filterTimeOfDay = value

    const filtered = self.getFilteredSightings(location)
    location.sightings.forEach((sighting) => {
      if (!filtered.includes(sighting) && new Date(sighting.date) > new Date())
        sighting.notify = false
    })

    return self.setISSSightings(location) as LocationType
  },

  setSightingsDuration: (location: LocationType, value: string) => {
    location.filterDuration = value
    const filtered = self.getFilteredSightings(location)
    location.sightings.forEach((sighting) => {
      if (!filtered.includes(sighting) && new Date(sighting.date) > new Date())
        sighting.notify = false
    })

    return self.setISSSightings(location) as LocationType
  },

  setSightingsMaxHeight: (location: LocationType, value: string) => {
    location.filterMaxHeight = value
    const filtered = self.getFilteredSightings(location)
    location.sightings.forEach((sighting) => {
      if (!filtered.includes(sighting) && new Date(sighting.date) > new Date())
        sighting.notify = false
    })

    return self.setISSSightings(location) as LocationType
  },

  setSightingsCloudCover: (location: LocationType, value: string) => {
    location.filterCloudCover = value
    const filtered = self.getFilteredSightings(location)
    location.sightings.forEach((sighting) => {
      if (!filtered.includes(sighting) && new Date(sighting.date) > new Date())
        sighting.notify = false
    })

    return self.setISSSightings(location) as LocationType
  },

  setISSSightings: (value: LocationType): LocationType => {
    const isCurrentLocation = value.title === self.currentLocation?.title
    const isSelectedLocation = value.title === self.selectedLocation?.title
    const valueCopy = JSON.parse(JSON.stringify(value)) as LocationType

    let savedLocations = []
    if (isCurrentLocation) {
      self.currentLocation = Location.create(valueCopy)
    }

    if (isSelectedLocation) {
      self.selectedLocation = Location.create(valueCopy)
    }

    if (!isCurrentLocation) {
      savedLocations = self.savedLocations.filter((location) => location.title !== value.title)
      self.savedLocations = [...savedLocations, valueCopy]
    }

    const notifyFor: LocationType[] = [
      ...(isCurrentLocation ? self.savedLocations : [...savedLocations, valueCopy]),
      isCurrentLocation ? valueCopy : self.currentLocation,
    ]

    notifications.setNotifications(notifyFor, self.timeFormat as string).catch(console.error)
    return valueCopy
  },

  setCurrentLocation: flow(function* setCurrentLocation(
    value: LocationType,
    updateSettingsOnly?: boolean,
  ) {
    const valueCopy: LocationType = JSON.parse(JSON.stringify(value))
    const isSelectedLocation =
      self.selectedLocation &&
      self.currentLocation &&
      self.currentLocation.title === self.selectedLocation.title

    if (!valueCopy.timezone) {
      const { kind, zone } = yield api.getLocationTimeZone(
        valueCopy.location.lat,
        valueCopy.location.lng,
      )
      if (kind === "ok" && zone) valueCopy.timezone = zone
      console.log("tz updated!", valueCopy.timezone)
    }

    self.currentLocation = Location.create(valueCopy)
    if (!updateSettingsOnly) {
      if (isSelectedLocation) {
        self.selectedLocation = null
      }

      self.getISSSightings(valueCopy)
    }
  }),

  setSelectedLocation: flow(function* setSelectedLocation(
    value: LocationType | null,
    updateSettingsOnly?: boolean,
  ) {
    if (value) {
      const valueCopy: LocationType = JSON.parse(JSON.stringify(value))

      if (!valueCopy.timezone) {
        const { kind, zone } = yield api.getLocationTimeZone(
          valueCopy.location.lat,
          valueCopy.location.lng,
        )
        if (kind === "ok" && zone) valueCopy.timezone = zone
        console.log("tz updated!", valueCopy.timezone)
      }

      self.selectedLocation = Location.create(valueCopy)
      if (!updateSettingsOnly) {
        self.getISSSightings(valueCopy)
      }
    } else {
      self.selectedLocation = null
    }
  }),

  setLocationAddress(location: LocationType, name: string, address: string) {
    location.subtitle = address
    if (location === self.currentLocation) location.title = name || address
  },

  updateLocationAddresses: flow(function* updateLocationAddresses() {
    const locations = [self.currentLocation, self.selectedLocation, ...self.savedLocations].filter(
      Boolean,
    )
    yield Promise.all(
      locations.map(async (location: LocationType) => {
        const response = await api.reverseGeocode(location.location.lat, location.location.lng)
        if (response.kind !== "ok" || !response.address) return
        self.setLocationAddress(location, response.name, response.address)
      }),
    )

    self.setNotifications()
  }),

  setSavedLocations: (values: LocationType[]) => {
    self.savedLocations = values.map((location) =>
      Location.create(JSON.parse(JSON.stringify(location)) as LocationType),
    )
  },

  setInitLoading: (value: boolean) => {
    self.initLoading = value
  },

  setTrajectoryError: (value: boolean) => {
    self.trajectoryError = value
    self.trajectoryErrorKind = ""
  },

  setSightingsLoaded: (value: boolean) => {
    self.sightingsLoaded = value
  },

  setIssDataLoaded: (value: boolean) => {
    self.issDataLoaded = value
  },

  setIsCurrentLocationUpdating: (value: boolean) => {
    self.isCurrentLocationUpdating = value
  },

  setNotifications: () => {
    const notifyFor: LocationType[] = [...self.savedLocations, self.currentLocation]

    notifications.setNotifications(notifyFor, self.timeFormat as string).catch(console.error)
  },

  disableAllNotifications: flow(function* updateLocationAddresses() {
    yield storage.save(storage.KEYS.UPCOMING, false)
    yield self.setCurrentLocation(
      {
        ...self.currentLocation,
        sightings: self.currentLocation.sightings.map((s) => ({ ...s, notify: false })),
      },
      true,
    )

    if (self.selectedLocation) {
      yield self
        .setSelectedLocation(
          {
            ...self.selectedLocation,
            sightings: self.selectedLocation.sightings.map((s) => ({ ...s, notify: false })),
          },
          true,
        )
        .catch((e) => console.log(e))
    }

    self.setSavedLocations(
      self.savedLocations.map((item) => ({
        ...item,
        sightings: item.sightings.map((s) => ({ ...s, notify: false })),
      })),
    )
  }),

  setNewSavedLocation: flow(function* setNewSavedLocation(value: LocationType) {
    const valueCopy: LocationType = JSON.parse(JSON.stringify(value))

    if (!valueCopy.timezone) {
      const { kind, zone } = yield api.getLocationTimeZone(
        valueCopy.location.lat,
        valueCopy.location.lng,
      )
      if (kind === "ok" && zone) valueCopy.timezone = zone
      console.log("tz updated!", valueCopy.timezone)
    }

    self.savedLocations = [...self.savedLocations, valueCopy]
    const { data, ok } = yield self.calculateSightings({
      lat: valueCopy.location.lat,
      lon: valueCopy.location.lng,
    })

    if (ok) {
      const isNotifyAll = Boolean(yield storage.load(storage.KEYS.UPCOMING))
      const locationSightings = valueCopy.sightings ? [...valueCopy.sightings] : []
      const dataToSave = data.sightings.map((item: ISSSighting) => {
        const sighting = locationSightings.find(
          ({ date }) => date.substring(0, 17) === item.date.substring(0, 17),
        )
        return { ...item, notify: sighting ? sighting.notify : isNotifyAll }
      })

      self.savedLocations = [
        ...self.savedLocations.filter((item) => item.title !== valueCopy.title),
        {
          ...valueCopy,
          sightings: dataToSave,
          lastSightingOrbitPointAt: data.lastSightingOrbitPointAt,
          lastUpdatedAt: new Date().toISOString(),
        },
      ]

      self.setNotifications()

      Snackbar.show({
        text: translate("snackBar.sightingsSaved"),
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: translate("snackBar.dismiss"),
          textColor: "green",
          onPress: () => {
            Snackbar.dismiss()
          },
        },
      })
    } else {
      Snackbar.show({
        text: data as string,
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: translate("snackBar.dismiss"),
          textColor: "red",
          onPress: () => {
            Snackbar.dismiss()
          },
        },
      })
    }
  }),

  getISSData: flow(function* getISSData(params: { lat: number; lon: number }) {
    try {
      const { data, ok, kind } = yield* toGenerator(
        api.getISSData({
          from: sub(new Date(), { minutes: 100 }).toISOString(),
          to: add(new Date(), { minutes: 100 }).toISOString(),
        }),
      )

      if (ok && typeof data !== "string") {
        self.issData = getSatPath(data.points, params.lat, params.lon)
        if (self.initLoading) self.issDataLoaded = true
      } else {
        self.trajectoryError = true
        self.trajectoryErrorKind = kind
        if (self.initLoading) self.issDataLoaded = true
      }
    } catch (e) {
      self.trajectoryError = true
      self.trajectoryErrorKind = ""
      if (self.initLoading) self.issDataLoaded = true
      console.error(e)
    }
  }),

  requestOpenModal: (name: string) => {
    Sentry.addBreadcrumb({
      category: "ui",
      message: `Request Modal Open: ${name}`,
      data: {
        queue: JSON.stringify(self.modalsQueue),
        currentModal: JSON.stringify(self.currentModal),
      },
      level: "info",
    })

    if (
      self.currentModal &&
      self.currentModal.name === name &&
      self.currentModal.state === "open"
    ) {
      Sentry.addBreadcrumb({
        category: "ui",
        message: `Modal ${name} already open, skipping`,
        data: {
          queue: JSON.stringify(self.modalsQueue),
          currentModal: JSON.stringify(self.currentModal),
        },
        level: "info",
      })

      return
    }

    if (self.currentModal) {
      if (!self.modalsQueue.includes(name)) self.modalsQueue = [...self.modalsQueue, name]
      Sentry.addBreadcrumb({
        category: "ui",
        message: `Modal ${name} added to queue`,
        data: {
          queue: JSON.stringify(self.modalsQueue),
          currentModal: JSON.stringify(self.currentModal),
        },
        level: "info",
      })
    } else {
      self.currentModal = Modal.create({ name, state: "open" })
      Sentry.addBreadcrumb({
        category: "ui",
        message: `Modal ${name} opened`,
        data: {
          queue: JSON.stringify(self.modalsQueue),
          currentModal: JSON.stringify(self.currentModal),
        },
        level: "info",
      })
    }
  },

  requestCloseModal: (name: string) => {
    Sentry.addBreadcrumb({
      category: "ui",
      message: `Request Modal Close: ${name}`,
      data: {
        queue: JSON.stringify(self.modalsQueue),
        currentModal: JSON.stringify(self.currentModal),
      },
      level: "info",
    })

    if (self.currentModal && self.currentModal.name === name) {
      self.currentModal = Modal.create({ name, state: "closing" })
      Sentry.addBreadcrumb({
        category: "ui",
        message: `Modal ${name} closing`,
        data: {
          queue: JSON.stringify(self.modalsQueue),
          currentModal: JSON.stringify(self.currentModal),
        },
        level: "info",
      })
    } else {
      self.modalsQueue = self.modalsQueue.filter((m) => m !== name)
      Sentry.addBreadcrumb({
        category: "ui",
        message: `Modal ${name} removed from queue`,
        data: {
          queue: JSON.stringify(self.modalsQueue),
          currentModal: JSON.stringify(self.currentModal),
        },
        level: "info",
      })
    }
  },

  closeModal: (name: string) => {
    Sentry.addBreadcrumb({
      category: "ui",
      message: `Modal Close: ${name}`,
      data: {
        queue: JSON.stringify(self.modalsQueue),
        currentModal: JSON.stringify(self.currentModal),
      },
      level: "info",
    })

    if (self.currentModal && self.currentModal.name !== name) {
      Sentry.addBreadcrumb({
        category: "ui",
        message: `Modal ${name} is not open, skipping`,
        data: {
          queue: JSON.stringify(self.modalsQueue),
          currentModal: JSON.stringify(self.currentModal),
        },
        level: "info",
      })
      return
    }
    self.currentModal = null
    if (self.modalsQueue.length > 0) {
      self.currentModal = Modal.create({ name: self.modalsQueue[0], state: "open" })
      self.modalsQueue = self.modalsQueue.slice(1)
    }

    Sentry.addBreadcrumb({
      category: "ui",
      message: `Modal ${name} closed`,
      data: {
        queue: JSON.stringify(self.modalsQueue),
        currentModal: JSON.stringify(self.currentModal),
      },
      level: "info",
    })
  },

  getWeatherForecast: flow(function* getWeatherForecast(lat: number, lon: number, dates: string[]) {
    const roundedLat = Math.round(lat * 10000) / 10000
    const roundedLon = Math.round(lon * 10000) / 10000
    const cacheKey = `${roundedLat},${roundedLon}`

    const locationCache = self.weatherCache.get(cacheKey)

    if (locationCache && Date.now() - locationCache.timestamp < CACHE_DURATION) {
      return locationCache.data
    }

    const startDate = new Date(Math.min(...dates.map((d) => new Date(d).getTime())))
    const endDate = new Date(Math.max(...dates.map((d) => new Date(d).getTime())))

    const { ok, data } = yield api.getWeatherForecast({
      lat,
      lon,
      from: startDate,
      to: add(endDate, { hours: 1 }),
    })

    if (ok) {
      self.weatherCache.set(cacheKey, {
        timestamp: Date.now(),
        data,
      })

      return data
    }

    return null
  }),

  getCloudCoverForDate(weatherData: any, date: string) {
    if (!weatherData) return 0

    const targetTime = new Date(date)
    const idx = weatherData.time.findIndex((t: string) => isSameHour(new Date(t), targetTime))
    if (idx === -1) return 0
    if (idx === weatherData.cloudcover.length - 1) return weatherData.cloudcover[idx]

    const diff = weatherData.cloudcover[idx + 1] - weatherData.cloudcover[idx]
    return Math.round(
      (weatherData.cloudcover[idx] as number) + (diff * targetTime.getMinutes()) / 60,
    )
  },

  setTimeFormat(timeFormat: string) {
    self.timeFormat = timeFormat
  },

  setUnits(units: string) {
    self.units = units
  },
})

export default RootStoreActions
