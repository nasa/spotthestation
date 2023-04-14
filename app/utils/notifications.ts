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
    const eventsForNotify: ISSSighting[] = events.filter(item => item.notify)
    const start = new Date(await storage.load('muteFrom') as string)
    const end = new Date(await storage.load('muteUntil') as string)
    const upcoming = await storage.load('upcoming')
    const privacy = await storage.load('privacy')
    const notifyBefore = await storage.load('notifyBefore')
    let location = await storage.load('selectedLocation')
    if (!location) location = await storage.load('currentLocation')
   
    const eventsList = eventsForNotify?.length ? eventsForNotify : events

    if (upcoming && location?.alert) {
      PushNotification.cancelAllLocalNotifications()
      eventsList.forEach(({ date }) => {
        const eventDate = new Date(date)
        const muted = isDateBetweenHours(eventDate, start, end)
        
        if ((!privacy || !muted) && Date.now() <= eventDate.getTime()) {
          PushNotification.localNotificationSchedule({
            channelId: 'default-channel-id',
            title: 'Spot the ISS now!',
            message: `The ISS is passing above you at ${location.title}`,
            date: eventDate,
          })
          if (notifyBefore) {
            PushNotification.localNotificationSchedule({
              channelId: 'default-channel-id',
              title: `Spot the ISS in ${notifyBefore || 15} minutes!`,
              message: `The ISS is passing above you in ${notifyBefore || 15} minutes at ${location.title}`,
              date: new Date(eventDate.getTime() - (notifyBefore || 15) * 60000),
            })
          }
        }
      })
    }
  }
}

export default new Notifications
