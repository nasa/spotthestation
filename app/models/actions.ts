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

const RootStoreActions = (self) => ({
	getISSSightings: flow(function* getISSSightings(params) {
		try {
			const {
			  data, ok,
			} = yield api.getISSSightings(params)    

      if (ok) {
        const selectedLocation = self.selectedLocation || self.currentLocation
        const isCurrentLocation = selectedLocation.title === self.currentLocation?.title
        const locationSightings = selectedLocation?.sightings || []
        const dataToSave = data.map((item) => {
          const sighting = locationSightings.find((el) => el.date === item.date)
          if (sighting) return { ...item, notify: sighting.notify }
          return item
        })

        const selectedLocationCopy = JSON.parse(JSON.stringify(selectedLocation))

        selectedLocationCopy.sightings = [...dataToSave]
        
        self.selectedLocation = selectedLocationCopy
        let savedLocations = []
        if (!isCurrentLocation) {
          savedLocations = self.savedLocations.filter((location) => location.title !== selectedLocation.title)
          self.savedLocations = [...savedLocations, selectedLocationCopy]
        } else {
          self.currentLocation = selectedLocationCopy
        }

        const notifyFor = [
          ...(
            (isCurrentLocation ? self.savedLocations : [...savedLocations, selectedLocationCopy])
              .reduce((acc, location) => [...acc, ...location.sightings], [])
          ), 
          ...(
            isCurrentLocation ? selectedLocationCopy.sightings : (self.currentLocation?.sightings || [])
          )
        ]
        
        notifications.setNotifications(notifyFor)
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

  setISSSightings: (value: LocationType) => {
    const isCurrentLocation = value.title === self.currentLocation?.title
    const valueCopy = JSON.parse(JSON.stringify(value))
    self.selectedLocation = valueCopy

    let savedLocations = []
    if (!isCurrentLocation) {
      savedLocations = self.savedLocations.filter((location) => location.title !== value.title)
      self.savedLocations = [...savedLocations, valueCopy]
    } else {
      self.currentLocation = valueCopy
    }

    const notifyFor = [
      ...(
        (isCurrentLocation ? self.savedLocations : [...savedLocations, valueCopy])
          .reduce((acc, location) => [...acc, ...location.sightings], [])
      ), 
      ...(
        isCurrentLocation ? valueCopy.sightings : (self.currentLocation?.sightings || [])
      )
    ]
    
    notifications.setNotifications(notifyFor)
	},

  setCurrentLocation: (value: LocationType) => {
		self.currentLocation = JSON.parse(JSON.stringify(value))
	},
  
  setSelectedLocation: (value: LocationType) => {
		self.selectedLocation = JSON.parse(JSON.stringify(value))
	},

  setSavedLocations: (values: LocationType[]) => {
		self.savedLocations = JSON.parse(JSON.stringify(values))
	},

  setNewSavedLocation: flow(function* setNewSavedLocation(value: LocationType) {
    const valueCopy: LocationType = JSON.parse(JSON.stringify(value))
    const { timeZone } = yield getCurrentTimeZome(valueCopy)
    const {
      data, ok,
    } = yield api.getISSSightings({ zone: timeZone, lat: valueCopy.location.lat, lon: valueCopy.location.lng })    

    if (ok) {
      valueCopy.sightings = [...data]
      
      self.savedLocations = [...self.savedLocations, valueCopy]

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
