import AsyncStorage from "@react-native-async-storage/async-storage"
import * as notifications from "../../utils/notifications"
import notifee, { TriggerType } from "@notifee/react-native"
import MockDate from "mockdate"
import { LocationType } from "../../services/api"

describe("setNotifications", () => {
  beforeEach(async () => {
    MockDate.set("2024-11-06T08:00:00Z")
    jest.clearAllMocks()
    await AsyncStorage.clear()
  })

  afterEach(() => {
    MockDate.reset()
  })

  it("should schedule notifications for enabled sightings", async () => {
    await AsyncStorage.setItem("privacy", JSON.stringify(true))
    await notifications.setNotifications([
      {
        title: "Test",
        sightings: [
          {
            notify: false,
            date: "2024-11-06T10:00:00Z",
          },
          {
            notify: true,
            date: "2024-11-07T10:00:00Z",
          },
          {
            notify: false,
            date: "2024-11-08T10:00:00Z",
          },
        ],
      },
    ] as LocationType[])

    expect(notifee.cancelTriggerNotifications).toBeCalledTimes(1)
    expect(notifee.createTriggerNotification).toBeCalledTimes(2)
    expect(notifee.createTriggerNotification).toBeCalledWith(expect.anything(), {
      type: TriggerType.TIMESTAMP,
      timestamp: new Date("2024-11-07T09:45:00Z").getTime(),
      alarmManager: true,
    })
    expect(notifee.createTriggerNotification).toBeCalledWith(expect.anything(), {
      type: TriggerType.TIMESTAMP,
      timestamp: new Date("2024-11-07T10:00:00Z").getTime(),
      alarmManager: true,
    })
  })

  it("should schedule reminder notifications with custom interval", async () => {
    await AsyncStorage.setItem("privacy", JSON.stringify(true))
    await AsyncStorage.setItem("notifyBefore", JSON.stringify(45))
    await notifications.setNotifications([
      {
        title: "Test",
        sightings: [
          {
            notify: false,
            date: "2024-11-06T10:00:00Z",
          },
          {
            notify: true,
            date: "2024-11-07T10:00:00Z",
          },
          {
            notify: false,
            date: "2024-11-08T10:00:00Z",
          },
        ],
      },
    ] as LocationType[])

    expect(notifee.cancelTriggerNotifications).toBeCalledTimes(1)
    expect(notifee.createTriggerNotification).toBeCalledTimes(2)
    expect(notifee.createTriggerNotification).toBeCalledWith(expect.anything(), {
      type: TriggerType.TIMESTAMP,
      timestamp: new Date("2024-11-07T09:15:00Z").getTime(),
      alarmManager: true,
    })
  })

  it("should not schedule notifications during specified interval", async () => {
    await AsyncStorage.setItem("privacy", JSON.stringify(true))

    // 10PM - 3AM
    await AsyncStorage.setItem("muteFrom", JSON.stringify("1970-01-01T22:00:00Z"))
    await AsyncStorage.setItem("muteUntil", JSON.stringify("1970-01-01T03:00:00Z"))

    await notifications.setNotifications([
      {
        title: "Test",
        sightings: [
          {
            notify: true,
            date: "2024-11-06T02:00:00Z",
          },
          {
            notify: true,
            date: "2024-11-07T10:00:00Z",
          },
          {
            notify: true,
            date: "2024-11-08T23:00:00Z",
          },
        ],
      },
    ] as LocationType[])

    expect(notifee.cancelTriggerNotifications).toBeCalledTimes(1)
    expect(notifee.createTriggerNotification).toBeCalledTimes(2)
    expect(notifee.createTriggerNotification).toBeCalledWith(expect.anything(), {
      type: TriggerType.TIMESTAMP,
      timestamp: new Date("2024-11-07T10:00:00Z").getTime(),
      alarmManager: true,
    })
    expect(notifee.createTriggerNotification).toBeCalledWith(expect.anything(), {
      type: TriggerType.TIMESTAMP,
      timestamp: new Date("2024-11-07T09:45:00Z").getTime(),
      alarmManager: true,
    })
  })
})
