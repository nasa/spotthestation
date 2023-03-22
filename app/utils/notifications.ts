/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Platform } from 'react-native'
import PushNotification from 'react-native-push-notification'
import { ISSSighting } from '../services/api'
import * as storage from "../utils/storage"
import { isDateBetweenHours } from './formatDate'

class Notifications {
  constructor () {
    PushNotification.createChannel({
        channelId: 'default-channel-id',
        channelName: 'Default channel',
        channelDescription: 'A default channel for app notifications',
        soundName: 'default',
        vibrate: true,
      },
      created => console.log(`Channel 'default-channel-id' created: ${created}`)
    )

    PushNotification.configure({
      onNotification: notification => {
        console.log('Notification:', notification)
      },
      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios',
    })
  };

  setNotifications = async (events: ISSSighting[]) => {
    const start = new Date(await storage.load('muteFrom') as string)
    const end = new Date(await storage.load('muteUntil') as string)
    const iisVisible = await storage.load('iisVisible')
    const upcoming = await storage.load('upcoming')
    const inApp = await storage.load('inApp')
    const notifyBefore = await storage.load('notifyBefore')
    const currentLocation = await storage.load('currentLocation')
    
    if (inApp && currentLocation.alert) {
      PushNotification.cancelAllLocalNotifications()
      events.forEach(({ date }) => {
        const eventDate = new Date(date)
        const muted = isDateBetweenHours(eventDate, start, end)
        
        if (!muted && Date.now() <= eventDate.getTime()) {
          if (iisVisible) {
            PushNotification.localNotificationSchedule({
              channelId: 'default-channel-id',
              title: 'Spot the ISS now!',
              message: 'The ISS is passing above you…',
              date: eventDate,
            })
          }
          if (upcoming) {
            PushNotification.localNotificationSchedule({
              channelId: 'default-channel-id',
              title: `Spot the ISS in ${notifyBefore || 15} minutes!`,
              message: `The ISS is passing above you in ${notifyBefore || 15} minutes…`,
              date: new Date(eventDate.getTime() - (notifyBefore || 15) * 1000),
            })
          }
        }
      })
    }
  }
}

export default new Notifications