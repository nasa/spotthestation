import { Alert, PermissionsAndroid, Platform } from "react-native"
import notifee, {
  AlarmType,
  AndroidImportance,
  AndroidNotificationSetting,
  TimestampTrigger,
  TriggerType,
} from "@notifee/react-native"
import { ISSSighting, LocationType } from "../services/api"
import * as storage from "../utils/storage"
import { formatDate, isDateBetweenHours } from "./datetime"
import { translate } from "../i18n"
import i18n from "i18n-js"

export function initialize() {
  notifee
    .createChannel({
      id: "default-channel-id",
      name: "Default channel",
      lights: false,
      vibration: true,
      sound: "default",
      importance: AndroidImportance.HIGH,
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

export async function getInitialNotification() {
  return notifee.getInitialNotification()
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

const formatedDate = (date: string, timeFormat: string): string => {
  const tf = timeFormat === "24hour" ? "H:mm" : "h:mm aa"
  return formatDate(date, `${i18n.locale === "en" ? "MMM dd, yyyy" : "dd MMM yyyy"}, ${tf}`)
}

export async function setNotifications(
  locations: LocationType[],
  timeFormat: string,
): Promise<void> {
  if (!(await hasExactAlarmPermissions())) return

  const start = new Date((await storage.load(storage.KEYS.MUTE_FROM)) as string)
  const end = new Date((await storage.load(storage.KEYS.MUTE_UNTIL)) as string)
  const privacy = await storage.load(storage.KEYS.PRIVACY)
  const notifyBefore: number = (await storage.load(storage.KEYS.NOTIFY_BEFORE)) || 15

  let notifications: {
    fireDate: Date
    title: string
    body: string
    data: { lat: number; lng: number }
  }[] = []
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
          const units = notifyBefore >= 24 * 60 ? "hours" : "minutes"
          const amount = notifyBefore >= 24 * 60 ? notifyBefore / 60 : notifyBefore

          notifications.push({
            title: translate("notifications.before.title", {
              amount,
              units: translate(`notifications.before.${units}`),
            }),
            body: translate(
              Platform.OS === "ios"
                ? "notifications.before.subTitleIos"
                : "notifications.before.subTitleAndroid",
              {
                amount,
                units: translate(`notifications.before.${units}`),
                location: location.title,
                time: formatedDate(date, timeFormat),
              },
            ),
            data: { ...location.location },
            fireDate: new Date(eventDate.getTime() - notifyBefore * 60000),
          })
        }

        notifications.push({
          title: translate("notifications.push.title"),
          body: `${
            Platform.OS === "ios"
              ? translate("notifications.push.subTitleIos")
              : translate("notifications.push.subTitleAndroid", {
                  time: formatedDate(date, timeFormat),
                })
          } ${location.title}`,
          data: { ...location.location },
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
      alarmManager: {
        type: AlarmType.SET_ALARM_CLOCK,
      },
    }

    await notifee.createTriggerNotification(
      {
        id: notification.fireDate.valueOf().toString(),
        title: notification.title,
        body: notification.body,
        data: notification.data,
        ios: {
          sound: "default",
        },
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
