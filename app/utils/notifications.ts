import { Alert, PermissionsAndroid, Platform } from "react-native"
import notifee, {
  TimestampTrigger,
  TriggerType,
  AndroidImportance,
  AndroidNotificationSetting,
} from "@notifee/react-native"
import { ISSSighting, LocationType } from "../services/api"
import * as storage from "../utils/storage"
import { isDateBetweenHours } from "./formatDate"
import { translate } from "../i18n"

export function initialize() {
  notifee
    .createChannel({
      id: "default-channel-id",
      name: "Default channel",
      lights: false,
      vibration: true,
      sound: "default",
      importance: AndroidImportance.DEFAULT,
    })
    .then((created) => console.log(`Channel 'default-channel-id' created: ${String(created)}`))
    .catch((e) => console.error(e))

  if (Platform.OS === "ios") {
    notifee.requestPermission().catch((e) => console.error(e))
  }

  if (Platform.OS === "android") {
    setTimeout(() => {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS).catch(
        console.error,
      )
    }, 1000)
  }
}

export async function hasInitialNotification() {
  return Boolean(await notifee.getInitialNotification())
}

export async function hasExactAlarmPermissions(): Promise<boolean | null> {
  const settings = await notifee.getNotificationSettings()
  return settings.android.alarm === AndroidNotificationSetting.ENABLED
}

export async function ensureExactAlarmPermissions(): Promise<boolean | null> {
  if (Platform.OS !== "android") return true
  if (await hasExactAlarmPermissions()) {
    return true
  } else {
    return new Promise((resolve) => {
      Alert.alert(
        translate("permissionsAndroid.alarmPermissionTitle"),
        translate("permissionsAndroid.alarmPermissionMessage"),
        [
          {
            text: translate("permissionsAndroid.buttonPositive"),
            onPress: async () => {
              await notifee.openAlarmPermissionSettings()
              resolve(null)
            },
          },
          {
            text: translate("permissionsAndroid.buttonNegative"),
            onPress: () => {
              resolve(false)
            },
          },
        ],
        { cancelable: false },
      )
    })
  }
}

export async function setNotifications(locations: LocationType[]) {
  if (!(await hasExactAlarmPermissions())) return

  const start = new Date((await storage.load("muteFrom")) as string)
  const end = new Date((await storage.load("muteUntil")) as string)
  const privacy = await storage.load("privacy")
  const notifyBefore: number = (await storage.load("notifyBefore")) || 15

  let notifications: { fireDate: Date; title: string; body: string }[] = []
  for await (const location of locations) {
    const events = location?.sightings || []
    const eventsForNotify: ISSSighting[] = events.filter((item) => item.notify)

    eventsForNotify.forEach(({ date }) => {
      const eventDate = new Date(date)
      const muted = isDateBetweenHours(eventDate, start, end)

      if ((!privacy || !muted) && Date.now() <= eventDate.getTime()) {
        if (
          notifyBefore &&
          new Date(eventDate.getTime() - notifyBefore * 60000).valueOf() > Date.now()
        ) {
          notifications.push({
            title: `${translate("notifications.before.titleOne")} ${notifyBefore} ${translate(
              "notifications.before.titleTwo",
            )}`,
            body: `${translate("notifications.before.subTitleOne")} ${notifyBefore} ${translate(
              "notifications.before.subTitleTwo",
            )} ${location.title}`,
            fireDate: new Date(eventDate.getTime() - notifyBefore * 60000),
          })
        }

        notifications.push({
          title: translate("notifications.push.title"),
          body: `${translate("notifications.push.subTitle")} ${location.title}`,
          fireDate: eventDate,
        })
      }
    })
  }

  notifications.sort((a, b) => a.fireDate.valueOf() - b.fireDate.valueOf())
  if (Platform.OS === "ios") {
    notifications = notifications.slice(0, 64)
  }

  await notifee.cancelTriggerNotifications()

  for (const notification of notifications) {
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: notification.fireDate.getTime(),
      alarmManager: true,
    }

    await notifee.createTriggerNotification(
      {
        id: notification.fireDate.valueOf().toString(),
        title: notification.title,
        body: notification.body,
        android: {
          smallIcon: "ic_notification",
          channelId: "default-channel-id",
          pressAction: {
            id: "default",
          },
        },
      },
      trigger,
    )
  }
}
