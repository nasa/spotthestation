/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { flow } from 'mobx-state-tree'
import Snackbar from 'react-native-snackbar'
import { api, ISSSighting } from '../services/api'
import notifications from '../utils/notifications'

const RootStoreActions = (self) => ({
	getISSSightings: flow(function* getISSSightings(params) {
		try {
			const {
			  data, ok,
			} = yield api.getISSSightings(params)

      if (ok) {
        const dataToSave = data.map(item => {
          const sighting = self.sightings.find(el => el.date === item.date)
          if (sighting) return {...item, notify: sighting.notify}
          return item
        })

        self.sightings = [...dataToSave]
        notifications.setNotifications(dataToSave)
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

  setISSSightings: (values: ISSSighting[]) => {
		self.sightings = [...values]
    notifications.setNotifications(values)
	},

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
