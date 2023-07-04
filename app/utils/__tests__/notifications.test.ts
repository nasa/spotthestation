/* eslint-disable @typescript-eslint/unbound-method */
import AsyncStorage from "@react-native-async-storage/async-storage"
import notifications from "../../utils/notifications"
import { LocationType } from "../../screens/OnboardingScreen/SignupLocation"
import PushNotification from "react-native-push-notification"

it("call getCurrentTimeZome with selectedLocation", async () => {
  await AsyncStorage.setItem("muteFrom", "12-12-2012 11:11:11")
  await AsyncStorage.setItem("muteUntil", "12-12-2012 13:13:13")
  await AsyncStorage.setItem("upcoming", JSON.stringify(true))
  await AsyncStorage.setItem("privacy", JSON.stringify(true))
  await AsyncStorage.setItem("notifyBefore", JSON.stringify(15))

  jest.useFakeTimers("modern").setSystemTime(new Date("12-12-2012 10:10:10"))

  await notifications.setNotifications([
    {
      title: "Test",
      sightings: [
        {
          notify: true,
          date: "12-12-2012 12:12:12",
        },
      ],
      alert: true,
    },
  ] as LocationType[])

  expect(PushNotification.cancelAllLocalNotifications).toBeCalledTimes(1)
  expect(PushNotification.localNotificationSchedule).toBeCalledTimes(2)
})
