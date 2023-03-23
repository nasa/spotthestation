/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import PushNotification from 'react-native-push-notification'

class Notifications {
  constructor () {
    // Set up the notification channels for Android
    PushNotification.createChannel({
        channelId: 'default-channel-id',
        channelName: 'Default channel',
        channelDescription: 'A default channel for app notifications',
        soundName: 'default',
        vibrate: true,
      },
      created => console.log(`Channel 'default-channel-id' created: ${created}`)
    )

    // Set up the notification listener
    PushNotification.configure({
      onNotification: notification => {
        console.log('Notification:', notification)
      },
      popInitialNotification: true,
      requestPermissions: true,
    })
  };

  scheduleNotification(date: Date) {
    PushNotification.localNotificationSchedule({
      channelId: 'default-channel-id',
      title: 'Spot the ISS now!',
      message: 'The ISS is passing above you…',
      date,
    })
  }

  cancelAllLocalNotifications() {
    PushNotification.cancelAllLocalNotifications()
  }
}

export default new Notifications