/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { flow } from 'mobx-state-tree'
import Snackbar from 'react-native-snackbar'
import { api } from '../services/api'
import notifications from '../utils/notifications'

const RootStoreActions = (self) => ({
	getISSSightings: flow(function* getISSSightings(params) {
		try {
			const {
			  data, ok,
			} = yield api.getISSSightings(params)

      if (ok) {
        self.sightings = data
        notifications.setNotifications(data)
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
