/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { flow } from 'mobx-state-tree'
import Snackbar from 'react-native-snackbar'
import { LocationType } from '../screens/OnboardingScreen/SignupLocation'
import { api } from '../services/api'
import { getCurrentTimeZome } from '../utils/formatDate'
import notifications from '../utils/notifications'
import { Location } from './Location'

const RootStoreActions = (self) => ({
	getISSSightings: flow(function* getISSSightings(params) {
		try {
      const location = self.selectedLocation || self.currentLocation
      const locationCopy = JSON.parse(JSON.stringify(location))
			const {
			  data, ok,
			} = yield api.getISSSightings(params)    

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
          isCurrentLocation ? locationCopy : self.currentLocation
        ]
        if (self.initLoading) self.sightingsLoaded = true
        notifications.setNotifications(notifyFor)
      } else {
        if (self.initLoading) self.sightingsLoaded = true
        Snackbar.show({
          text: data as string,
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: 'Dismiss',
            textColor: 'red',
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
      isCurrentLocation ? valueCopy : self.currentLocation
    ]
    
    notifications.setNotifications(notifyFor)
	},

  setCurrentLocation: flow(function* setCurrentLocation(value: LocationType) {
    const valueCopy: LocationType = JSON.parse(JSON.stringify(value))
    const { timeZone } = yield getCurrentTimeZome(valueCopy)
    self.currentLocation = Location.create(valueCopy)
    self.getISSSightings({ zone: timeZone, lat: valueCopy.location.lat, lon: valueCopy.location.lng })
	}),
  
  setSelectedLocation: flow(function* setSelectedLocation(value: LocationType) {
    const valueCopy: LocationType = JSON.parse(JSON.stringify(value))
    const { timeZone } = yield getCurrentTimeZome(valueCopy)
    self.selectedLocation = Location.create(valueCopy)
    self.getISSSightings({ zone: timeZone, lat: valueCopy.location.lat, lon: valueCopy.location.lng })
  }),

  setSavedLocations: (values: LocationType[]) => {
		self.savedLocations = JSON.parse(JSON.stringify(values))
	},

  setInitLoading: (value: boolean) => {
		self.initLoading = value
	},

  setNotifications: () => {
		const notifyFor: LocationType[] = [
      ...self.savedLocations,
      self.currentLocation
    ]
    
    notifications.setNotifications(notifyFor)
	},

  setNewSavedLocation: flow(function* setNewSavedLocation(value: LocationType) {
    const valueCopy: LocationType = JSON.parse(JSON.stringify(value))
    const { timeZone } = yield getCurrentTimeZome(valueCopy)
    self.savedLocations = [...self.savedLocations, valueCopy]
    const {
      data, ok,
    } = yield api.getISSSightings({ zone: timeZone, lat: valueCopy.location.lat, lon: valueCopy.location.lng })    

    if (ok) {
      valueCopy.sightings = [...data]
      
      self.savedLocations = [...self.savedLocations.filter(item => item.title !== valueCopy.title), valueCopy]

      Snackbar.show({
        text: 'Sightings for last saved location loaded!',
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: 'Dismiss',
          textColor: 'green',
          onPress: () => {
            Snackbar.dismiss()
          },
        },
      })
    } else {
      self.savedLocations = [...self.savedLocations, valueCopy]
      Snackbar.show({
        text: data as string,
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: 'Dismiss',
          textColor: 'red',
          onPress: () => {
            Snackbar.dismiss()
          },
        },
      })
    }
	}),

  getISSData: flow(function* getISSData(params) {
    try {
      const {
        data, ok,
      } = yield api.getISSData(params)

      if (ok) {
        self.issData = data
        if (self.initLoading) self.issDataLoaded = true
      } else {
        Snackbar.show({
          text: data as string,
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: 'Dismiss',
            textColor: 'red',
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
})

export default RootStoreActions
