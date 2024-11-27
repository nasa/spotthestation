import React from "react"
import { NotificationSettingsScreen } from "../NotificationSettingsScreen"
import { act, render, userEvent, waitFor, within } from "@testing-library/react-native"
import { NavigationContainer } from "@react-navigation/native"
import * as MockDate from "mockdate"
import { RootStoreModel, RootStoreProvider } from "../../../models"
import * as storage from "../../../utils/storage"
import { MeasureInWindowOnSuccessCallback, View } from "react-native"

describe("NotificationSettingsScreen", () => {
  let rootStore: ReturnType<typeof RootStoreModel.create>

  beforeEach(() => {
    rootStore = RootStoreModel.create({
      currentLocation: {
        title: "Houston, TX",
        location: { lat: 29.7751019, lng: -95.3740024 },
        sightings: [
          {
            maxAltitude: 10,
            maxAzimuth: 0,
            minAltitude: 10,
            minAzimuth: 120,
            date: "2024-11-27T12:00:00.000Z",
            dayStage: 1,
            maxHeight: 12,
            notify: false,
            visible: 6,
          },
          {
            maxAltitude: 10,
            maxAzimuth: 0,
            minAltitude: 10,
            minAzimuth: 120,
            date: "2024-11-28T12:00:00.000Z",
            dayStage: 1,
            maxHeight: 12,
            notify: false,
            visible: 6,
          },
        ],
      },
      selectedLocation: {
        title: "Phoenix, AZ",
        location: { lat: 33.5155817, lng: -112.1563736 },
        sightings: [
          {
            maxAltitude: 10,
            maxAzimuth: 0,
            minAltitude: 10,
            minAzimuth: 120,
            date: "2024-11-27T12:00:00.000Z",
            dayStage: 1,
            maxHeight: 12,
            notify: false,
            visible: 6,
          },
          {
            maxAltitude: 10,
            maxAzimuth: 0,
            minAltitude: 10,
            minAzimuth: 120,
            date: "2024-11-28T12:00:00.000Z",
            dayStage: 1,
            maxHeight: 12,
            notify: false,
            visible: 6,
          },
        ],
      },
      savedLocations: [
        {
          title: "Phoenix, AZ",
          location: { lat: 33.5155817, lng: -112.1563736 },
          sightings: [
            {
              maxAltitude: 10,
              maxAzimuth: 0,
              minAltitude: 10,
              minAzimuth: 120,
              date: "2024-11-27T12:00:00.000Z",
              dayStage: 1,
              maxHeight: 12,
              notify: false,
              visible: 6,
            },
            {
              maxAltitude: 10,
              maxAzimuth: 0,
              minAltitude: 10,
              minAzimuth: 120,
              date: "2024-11-28T12:00:00.000Z",
              dayStage: 1,
              maxHeight: 12,
              notify: false,
              visible: 6,
            },
          ],
        },
        {
          title: "Tokyo, Japan",
          location: { lat: 35.6843573, lng: 139.7685425 },
          sightings: [],
        },
      ],
      initLoading: true,
      sightingsLoaded: false,
      issData: [],
    })
    MockDate.set("12-12-2012 10:10:10")
    jest.clearAllMocks()
  })

  afterEach(() => {
    MockDate.reset()
  })

  it("renders correctly", async () => {
    const component = render(
      <NavigationContainer>
        <NotificationSettingsScreen />
      </NavigationContainer>,
    )

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100))
    })

    expect(component.toJSON()).toMatchSnapshot()
  })

  it("toggles notifications globally", async () => {
    const component = render(
      <NavigationContainer>
        <RootStoreProvider value={rootStore}>
          <NotificationSettingsScreen />
        </RootStoreProvider>
      </NavigationContainer>,
    )

    const toggle = await component.findByAccessibilityHint("toggle upcoming events notifications")

    await userEvent.press(toggle)
    await waitFor(async () => {
      expect(rootStore.currentLocation.sightings.filter((s) => s.notify)).toHaveLength(
        rootStore.currentLocation.sightings.length,
      )

      expect(rootStore.selectedLocation.sightings.filter((s) => s.notify)).toHaveLength(
        rootStore.selectedLocation.sightings.length,
      )

      for (const location of rootStore.savedLocations) {
        expect(location.sightings.filter((s) => s.notify)).toHaveLength(location.sightings.length)
      }

      expect(await storage.load(storage.KEYS.UPCOMING)).toBeTruthy()
    })

    await userEvent.press(toggle)
    await waitFor(async () => {
      expect(rootStore.currentLocation.sightings.filter((s) => s.notify)).toHaveLength(0)

      expect(rootStore.selectedLocation.sightings.filter((s) => s.notify)).toHaveLength(0)

      for (const location of rootStore.savedLocations) {
        expect(location.sightings.filter((s) => s.notify)).toHaveLength(0)
      }

      expect(await storage.load(storage.KEYS.UPCOMING)).toBeFalsy()
    })
  })

  it("toggles selected location notifications", async () => {
    const component = render(
      <NavigationContainer>
        <RootStoreProvider value={rootStore}>
          <NotificationSettingsScreen />
        </RootStoreProvider>
      </NavigationContainer>,
    )

    await userEvent.press(
      await component.findByText("settings.notificationSettingsData.customizeLabel", {
        exact: false,
      }),
    )
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    })
    const sightings = within(
      await component.findByAccessibilityHint("Sightings scrollable area"),
    ).queryAllByAccessibilityHint("pressable list item")

    // one sighting
    await userEvent.press(
      await within(sightings[0]).findByAccessibilityHint("toggle location alerts"),
    )
    await waitFor(() => {
      expect(rootStore.selectedLocation.sightings[0].notify).toBeTruthy()
    })

    // all sightings
    await userEvent.press(await component.findByAccessibilityHint("toggle notifications"))
    await waitFor(() => {
      rootStore.selectedLocation.sightings.forEach((sighting) => {
        expect(sighting.notify).toBeTruthy()
      })
    })
  })

  describe("notify before dropdown", () => {
    const originalMeasureInWindow = View.prototype.measureInWindow
    beforeEach(() => {
      View.prototype.measureInWindow = jest.fn((f: MeasureInWindowOnSuccessCallback) => {
        f(1, 2, 3, 4)
      })
    })

    afterEach(() => {
      View.prototype.measureInWindow = originalMeasureInWindow
    })

    it("sets notify before interval", async () => {
      const component = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <NotificationSettingsScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      const dropdown = await component.findByText("15 units.minute", {
        exact: false,
      })

      await userEvent.press(dropdown)
      await userEvent.press(await component.findByText("2 units.minute", { exact: false }))

      await waitFor(async () => {
        expect(await storage.load(storage.KEYS.NOTIFY_BEFORE)).toEqual(2)
      })
    })
  })

  describe("privacy notifications toggle", () => {
    it("disables/enables from/to pickers", async () => {
      const component = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <NotificationSettingsScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      const fromPicker = await component.findByAccessibilityHint("open from time picker")
      const untilPicker = await component.findByAccessibilityHint("open until time picker")

      expect(fromPicker).toBeDisabled()
      expect(untilPicker).toBeDisabled()
      expect(await storage.load(storage.KEYS.PRIVACY)).toBeFalsy()

      await userEvent.press(await component.findByAccessibilityHint("toggle privacy notifications"))
      expect(fromPicker).toBeEnabled()
      expect(untilPicker).toBeEnabled()
      expect(await storage.load(storage.KEYS.PRIVACY)).toBeTruthy()

      await userEvent.press(await component.findByAccessibilityHint("toggle privacy notifications"))
      expect(fromPicker).toBeDisabled()
      expect(untilPicker).toBeDisabled()
      expect(await storage.load(storage.KEYS.PRIVACY)).toBeFalsy()
    })
  })

  describe("time pickers", () => {
    it("sets time when notifications should start", async () => {
      const component = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <NotificationSettingsScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      await userEvent.press(await component.findByAccessibilityHint("toggle privacy notifications"))
      await userEvent.press(await component.findByAccessibilityHint("open from time picker"))
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 100))
      })

      await act(async () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        ;(await component.findByTestId("from picker")).props.onConfirm(
          new Date("1970-01-01T12:00:00.000Z"),
        )
      })

      await waitFor(async () => {
        expect(await storage.load(storage.KEYS.MUTE_FROM)).toEqual("1970-01-01T12:00:00.000Z")
      })
    })

    it("sets time when notifications should end", async () => {
      const component = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <NotificationSettingsScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      await userEvent.press(await component.findByAccessibilityHint("toggle privacy notifications"))
      await userEvent.press(await component.findByAccessibilityHint("open until time picker"))
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 100))
      })

      await act(async () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        ;(await component.findByTestId("until picker")).props.onConfirm(
          new Date("1970-01-01T18:00:00.000Z"),
        )
      })

      await waitFor(async () => {
        expect(await storage.load(storage.KEYS.MUTE_UNTIL)).toEqual("1970-01-01T18:00:00.000Z")
      })
    })
  })
})
