/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { flow } from "mobx-state-tree"
import Snackbar from "react-native-snackbar"
import { LocationType } from "../screens/OnboardingScreen/SignupLocation"
import { api } from "../services/api"
import { getCurrentTimeZome } from "../utils/formatDate"
import notifications from "../utils/notifications"
import { Location } from "./Location"
import { Modal } from "./Modal"
import { translate } from "../i18n"

const RootStoreActions = (self) => ({
  getISSSightings: flow(function* getISSSightings(params, isCurrent?: boolean) {
    try {
      const location = isCurrent ? self.currentLocation : self.selectedLocation || self.currentLocation
      const locationCopy = JSON.parse(JSON.stringify(location))
      const { data, ok } = yield api.getISSSightings(params)

      if (ok) {
        const isCurrentLocation = locationCopy.title === self.currentLocation?.title
        const isSelectedLocation = locationCopy.title === self.selectedLocation?.title
        const locationSightings = locationCopy?.sightings ? [...locationCopy?.sightings] : []
        const dataToSave = data.map((item) => {
          const sighting = locationSightings.find(({ date }) => date === item.date)
          return sighting ? { ...item, notify: sighting.notify } : item
        })

        locationCopy.sightings = [...dataToSave]
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
            text: translate('snackBar.dismiss'),
            textColor: "red",
            onPress: () => {
              Snackbar.dismiss()
            },
          },
        })
      }
    } catch (e) {
      self.setIsCurrentLocationUpdating(false)
      console.error(e)
    }
  }),

  setISSSightings: (value: LocationType) => {
    const isCurrentLocation = value.title === self.currentLocation?.title
    const valueCopy = JSON.parse(JSON.stringify(value))
    self.selectedLocation = valueCopy

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
  },

  setCurrentLocation: flow(function* setCurrentLocation(value: LocationType, updateSettingsOnly?: boolean) {
    const valueCopy: LocationType = JSON.parse(JSON.stringify(value))
    if (updateSettingsOnly) {
      self.currentLocation = Location.create(valueCopy)
    } else {
      const { timeZone } = yield getCurrentTimeZome(valueCopy)
      self.currentLocation = Location.create(valueCopy)
      self.getISSSightings({
        zone: timeZone,
        lat: valueCopy.location.lat,
        lon: valueCopy.location.lng,
      }, true)
    }
  }),

  setSelectedLocation: flow(function* setSelectedLocation(value: LocationType) {
    const valueCopy: LocationType = JSON.parse(JSON.stringify(value))
    const { timeZone } = yield getCurrentTimeZome(valueCopy)
    self.selectedLocation = Location.create(valueCopy)
    self.getISSSightings({
      zone: timeZone,
      lat: valueCopy.location.lat,
      lon: valueCopy.location.lng,
    })
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
    const { data, ok } = yield api.getISSSightings({
      zone: timeZone,
      lat: valueCopy.location.lat,
      lon: valueCopy.location.lng,
    })

    if (ok) {
      self.savedLocations = [
        ...self.savedLocations.filter((item) => item.title !== valueCopy.title),
        { ...valueCopy, sightings: [...data] },
      ]

      Snackbar.show({
        text: translate('snackBar.sightingsSaved'),
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: translate('snackBar.dismiss'),
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
          text: translate('snackBar.dismiss'),
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
      const { data, ok } = yield api.getISSData(params)

      if (ok) {
        self.issData = data
        if (self.initLoading) self.issDataLoaded = true
      } else {
        self.trajectoryError = true
        if (self.initLoading) self.issDataLoaded = true
        Snackbar.show({
          text: data as string,
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: translate('snackBar.dismiss'),
            textColor: "red",
            onPress: () => {
              Snackbar.dismiss()
            },
          },
        })
      }
    } catch (e) {
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
