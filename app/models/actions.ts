/* eslint-disable @typescript-eslint/no-unsafe-call */
import { flow, toGenerator } from "mobx-state-tree"
import Snackbar from "react-native-snackbar"
import { sub, add } from "date-fns"
import { api, ISSSighting, LocationType } from "../services/api"
import { getCurrentTimeZone } from "../utils/formatDate"
import notifications from "../utils/notifications"
import { Location } from "./Location"
import { Modal } from "./Modal"
import { translate } from "../i18n"
import { getSatPath, getSightings } from "../utils/astro"
import * as storage from "../utils/storage"

const RootStoreActions = (self) => ({
  calculateSightings: flow(function* calculateSightings(params: { lat: number; lon: number }) {
    const { data, ok } = yield* toGenerator(
      api.getISSData({
        from: new Date(new Date().setMinutes(new Date().getMinutes() - 30)).toISOString(),
      }),
    )

    if (!ok || typeof data === "string") return { ok: false }
    const sightings = yield getSightings(data.points, data.shadowIntervals, params.lat, params.lon)

    return { ok: true, data: sightings }
  }),

  getISSSightings: flow(function* getISSSightings(params, isCurrent?: boolean) {
    try {
      const location = isCurrent
        ? self.currentLocation
        : self.selectedLocation || self.currentLocation
      const locationCopy = JSON.parse(JSON.stringify(location)) as LocationType
      const { data, ok } = yield self.calculateSightings(params)

      if (ok) {
        const isCurrentLocation = locationCopy.title === self.currentLocation?.title
        const isSelectedLocation = locationCopy.title === self.selectedLocation?.title
        const locationSightings = locationCopy?.sightings ? [...locationCopy?.sightings] : []
        const isNotifyAll = Boolean(yield storage.load("upcoming"))
        const dataToSave = data.sightings.map((item: ISSSighting) => {
          const sighting = locationSightings.find(
            ({ date }) => date.substring(0, 17) === item.date.substring(0, 17),
          )
          return { ...item, notify: sighting ? sighting.notify : isNotifyAll }
        })

        locationCopy.sightings = [...dataToSave]
        locationCopy.lastSightingOrbitPointAt = data.lastSightingOrbitPointAt
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
        notifications.setNotifications(notifyFor as LocationType[]).catch(console.error)
        self.setIsCurrentLocationUpdating(false)
      } else {
        self.trajectoryError = true
        if (self.initLoading) self.sightingsLoaded = true
        self.setIsCurrentLocationUpdating(false)
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
    } catch (e) {
      self.trajectoryError = true
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

    return location.sightings.filter((item) => {
      return (
        new Date(item.date) > new Date() &&
        (location.filterTimeOfDay === "" || String(item.dayStage) === location.filterTimeOfDay) &&
        (location.filterDuration === "" || hasDuration(item, location.filterDuration))
      )
    })
  },

  setSightingsTimeOfDay: (location: LocationType, value: string) => {
    const updated = {
      ...location,
      filterTimeOfDay: value,
    }

    const filtered = self.getFilteredSightings(updated)
    updated.sightings.forEach((sighting) => {
      if (!filtered.includes(sighting) && new Date(sighting.date) > new Date())
        sighting.notify = false
    })

    return self.setISSSightings(updated) as LocationType
  },

  setSightingsDuration: (location: LocationType, value: string) => {
    const updated = {
      ...location,
      filterDuration: value,
    }

    const filtered = self.getFilteredSightings(updated)
    updated.sightings.forEach((sighting) => {
      if (!filtered.includes(sighting) && new Date(sighting.date) > new Date())
        sighting.notify = false
    })

    return self.setISSSightings(updated) as LocationType
  },

  setISSSightings: (value: LocationType): LocationType => {
    const isCurrentLocation = value.title === self.currentLocation?.title
    const valueCopy = JSON.parse(JSON.stringify(value)) as LocationType
    self.selectedLocation = Location.create(valueCopy)

    let savedLocations = []
    if (!isCurrentLocation) {
      savedLocations = self.savedLocations.filter((location) => location.title !== value.title)
      self.savedLocations = [...savedLocations, valueCopy]
    } else {
      self.currentLocation = Location.create(valueCopy)
    }

    const notifyFor: LocationType[] = [
      ...(isCurrentLocation ? self.savedLocations : [...savedLocations, valueCopy]),
      isCurrentLocation ? valueCopy : self.currentLocation,
    ]

    notifications.setNotifications(notifyFor).catch(console.error)
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

      self.getISSSightings(
        {
          zone: valueCopy.timezone || getCurrentTimeZone(),
          lat: valueCopy.location.lat,
          lon: valueCopy.location.lng,
        },
        true,
      )
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
        self.getISSSightings({
          zone: valueCopy.timezone || getCurrentTimeZone(),
          lat: valueCopy.location.lat,
          lon: valueCopy.location.lng,
        })
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

    notifications.setNotifications(notifyFor).catch(console.error)
  },

  setNewSavedLocation: flow(function* setNewSavedLocation(value: LocationType) {
    const valueCopy: LocationType = JSON.parse(JSON.stringify(value))
    self.savedLocations = [...self.savedLocations, valueCopy]
    const { data, ok } = yield self.calculateSightings({
      lat: valueCopy.location.lat,
      lon: valueCopy.location.lng,
    })

    if (ok) {
      const isNotifyAll = Boolean(yield storage.load("upcoming"))
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
      const { data, ok } = yield* toGenerator(
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
        if (self.initLoading) self.issDataLoaded = true
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
    } catch (e) {
      self.trajectoryError = true
      if (self.initLoading) self.issDataLoaded = true
      console.error(e)
    }
  }),

  requestOpenModal: (name: string) => {
    if (self.currentModal && self.currentModal.name === name && self.currentModal.state === "open")
      return

    if (self.currentModal) {
      if (!self.modalsQueue.includes(name)) self.modalsQueue = [...self.modalsQueue, name]
    } else {
      self.currentModal = Modal.create({ name, state: "open" })
    }
  },

  requestCloseModal: (name: string) => {
    if (self.currentModal && self.currentModal.name === name) {
      self.currentModal = Modal.create({ name, state: "closing" })
    } else {
      self.modalsQueue = self.modalsQueue.filter((m) => m !== name)
    }
  },

  closeModal: () => {
    self.currentModal = null
    if (self.modalsQueue.length > 0) {
      self.currentModal = Modal.create({ name: self.modalsQueue[0], state: "open" })
      self.modalsQueue = self.modalsQueue.slice(1)
    }
  },
})

export default RootStoreActions
