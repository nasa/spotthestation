/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { flow } from "mobx-state-tree"
import Snackbar from "react-native-snackbar"
import { sub, add } from "date-fns"
import { LocationType } from "../screens/OnboardingScreen/SignupLocation"
import { api, ISSSighting } from "../services/api"
import { getCurrentTimeZome } from "../utils/formatDate"
import notifications from "../utils/notifications"
import { Location } from "./Location"
import { Modal } from "./Modal"
import { translate } from "../i18n"
import { getSatPath, getSightings } from "../utils/astro"
import * as storage from "../utils/storage"

const RootStoreActions = (self) => ({
  calculateSightings: flow(function* calculateSightings(params) {
    const { data, ok } = yield api.getRawISSData({
      from: new Date().toISOString(),
    })

    if (!ok) return { ok: false }
    const sightings = yield getSightings(data, params.lat, params.lon)

    return { ok: true, data: sightings }
  }),

  getISSSightings: flow(function* getISSSightings(params, isCurrent?: boolean) {
    try {
      const location = isCurrent
        ? self.currentLocation
        : self.selectedLocation || self.currentLocation
      const locationCopy = JSON.parse(JSON.stringify(location))
      const { data, ok } = self.isLocalCalculations
        ? yield self.calculateSightings(params)
        : yield api.getISSSightings(params)

      if (ok) {
        const isCurrentLocation = locationCopy.title === self.currentLocation?.title
        const isSelectedLocation = locationCopy.title === self.selectedLocation?.title
        const locationSightings = locationCopy?.sightings ? [...locationCopy?.sightings] : []
        const isNotifyAll = Boolean(yield storage.load("upcoming"))
        const dataToSave = data.sightings.map((item) => {
          const sighting = locationSightings.find(
            ({ date }) =>
              (date as string).substring(0, 17) === (item.date as string).substring(0, 17),
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
        notifications.setNotifications(notifyFor)
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

  setISSSightings: (value: LocationType) => {
    const isCurrentLocation = value.title === self.currentLocation?.title
    const valueCopy = JSON.parse(JSON.stringify(value))
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

    notifications.setNotifications(notifyFor)
    return valueCopy as LocationType
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

    self.currentLocation = Location.create(valueCopy)
    if (!updateSettingsOnly) {
      if (isSelectedLocation) {
        yield storage.remove("selectedLocation")
        self.selectedLocation = null
      }

      const { timeZone } = yield getCurrentTimeZome(valueCopy)
      self.getISSSightings(
        {
          zone: timeZone,
          lat: valueCopy.location.lat,
          lon: valueCopy.location.lng,
        },
        true,
      )
    }
  }),

  setSelectedLocation: flow(function* setSelectedLocation(
    value: LocationType,
    updateSettingsOnly?: boolean,
  ) {
    const valueCopy: LocationType = JSON.parse(JSON.stringify(value))
    const { timeZone } = yield getCurrentTimeZome(valueCopy)
    self.selectedLocation = Location.create(valueCopy)

    if (!updateSettingsOnly) {
      self.getISSSightings({
        zone: timeZone,
        lat: valueCopy.location.lat,
        lon: valueCopy.location.lng,
      })
    }
  }),

  setSavedLocations: (values: LocationType[]) => {
    self.savedLocations = JSON.parse(JSON.stringify(values))
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

    notifications.setNotifications(notifyFor)
  },

  setNewSavedLocation: flow(function* setNewSavedLocation(value: LocationType) {
    const valueCopy: LocationType = JSON.parse(JSON.stringify(value))
    const { timeZone } = yield getCurrentTimeZome(valueCopy)
    self.savedLocations = [...self.savedLocations, valueCopy]
    const { data, ok } = self.isLocalCalculations
      ? yield self.calculateSightings({
          lat: valueCopy.location.lat,
          lon: valueCopy.location.lng,
        })
      : yield api.getISSSightings({
          zone: timeZone,
          lat: valueCopy.location.lat,
          lon: valueCopy.location.lng,
        })

    if (ok) {
      const isNotifyAll = Boolean(yield storage.load("upcoming"))
      const locationSightings = valueCopy.sightings ? [...valueCopy.sightings] : []
      const dataToSave = data.sightings.map((item) => {
        const sighting = locationSightings.find(
          ({ date }) => date.substring(0, 17) === (item.date as string).substring(0, 17),
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

  getISSData: flow(function* getISSData(params) {
    try {
      const { data, ok } = self.isLocalCalculations
        ? yield api.getRawISSData({
            from: sub(new Date(), { minutes: 100 }).toISOString(),
            to: add(new Date(), { minutes: 100 }).toISOString(),
          })
        : yield api.getISSData({ ...params, withoutInterpolation: true })

      if (ok) {
        self.issData = self.isLocalCalculations ? getSatPath(data, params.lat, params.lon) : data
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

  setLocalCalculations: flow(function* setLocalCalculations(value) {
    self.isLocalCalculations = value
    self.setInitLoading(true)

    const location = self.selectedLocation || self.currentLocation
    const { timeZone } = yield getCurrentTimeZome(location)
    self.getISSSightings({
      zone: timeZone,
      lat: location.location.lat,
      lon: location.location.lng,
    })
  }),
})

export default RootStoreActions
