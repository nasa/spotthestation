/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Platform } from "react-native"
import PushNotification from "react-native-push-notification"
import { LocationType } from "../screens/OnboardingScreen/SignupLocation"
import { ISSSighting } from "../services/api"
import * as storage from "../utils/storage"
import { isDateBetweenHours } from "./formatDate"
import { translate } from "../i18n"

class Notifications {
  constructor() {
    PushNotification.createChannel(
      {
        channelId: "default-channel-id",
        channelName: "Default channel",
        channelDescription: "A default channel for app notifications",
        soundName: "default",
        vibrate: true,
      },
      (created) => console.log(`Channel 'default-channel-id' created: ${created}`),
    )

    PushNotification.configure({
      onNotification: (notification) => {
        console.log("Notification:", notification)
      },
      popInitialNotification: true,
      requestPermissions: Platform.OS === "ios",
    })
  }

  setNotifications = async (locations: LocationType[]) => {
    const start = new Date((await storage.load("muteFrom")) as string)
    const end = new Date((await storage.load("muteUntil")) as string)
    const privacy = await storage.load("privacy")
    const notifyBefore = await storage.load("notifyBefore")
    PushNotification.cancelAllLocalNotifications()
    for await (const location of locations) {
      const events = location?.sightings || []
      const eventsForNotify: ISSSighting[] = events.filter((item) => item.notify)

      eventsForNotify.forEach(({ date }) => {
        const eventDate = new Date(date)
        const muted = isDateBetweenHours(eventDate, start, end)

        if ((!privacy || !muted) && Date.now() <= eventDate.getTime()) {
          PushNotification.localNotificationSchedule({
            channelId: "default-channel-id",
            title: translate("notifications.push.title"),
            message: `${translate("notifications.push.subTitle")} ${location.title}`,
            date: eventDate,
          })
          if (notifyBefore) {
            PushNotification.localNotificationSchedule({
              channelId: "default-channel-id",
              title: `${translate("notifications.before.titleOne")} ${notifyBefore} ${translate(
                "notifications.before.titleTwo",
              )}`,
              message: `${translate(
                "notifications.before.subTitleOne",
              )} ${notifyBefore} ${translate("notifications.before.subTitleTwo")} ${
                location.title
              }`,
              date: new Date(eventDate.getTime() - notifyBefore * 60000),
            })
          }
        }
      })
    }
  }
}

export default new Notifications()
