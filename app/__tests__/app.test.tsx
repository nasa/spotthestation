/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return */

import React from "react"
import { act, render, waitFor } from "@testing-library/react-native"
import App from "../app"
import i18n from "i18n-js"
import * as storage from "../utils/storage"
import { api } from "../services/api"
import { Alert, PermissionsAndroid, Platform } from "react-native"
import notifee from "@notifee/react-native"
import MockDate from "mockdate"

jest.mock("../navigators/AppNavigator", () => ({ AppNavigator: () => "" }))

const locations = [
  {
    addresses: { en: "Houston, TX", ru: "Хьюстон, Техас" },
    lat: 29.7751019,
    lng: -95.3740024,
  },
  {
    addresses: { en: "Phoenix, AZ", ru: "Финикс, Аризона" },
    lat: 33.5155817,
    lng: -112.1563736,
  },
  {
    addresses: { en: "NASA Headquarters, DC", ru: "Штаб-квартира НАСА, Округ Колумбия" },
    lat: 38.8830649,
    lng: -77.0188535,
  },
]

describe("App", () => {
  beforeEach(async () => {
    await storage.clear()
    ;(api.reverseGeocode as jest.Mock).mockImplementation((lat, lon) => {
      const title = locations.find((l) => l.lat === lat && l.lng === lon).addresses[i18n.locale]
      return {
        kind: "ok",
        name: title,
        address: title,
      }
    })
    jest.clearAllMocks()

    await storage.save(storage.KEYS.ROOT_STATE_STORAGE_KEY, {
      selectedLocation: {
        title: "JSC",
        subtitle: locations[0].addresses.en,
        location: { lat: locations[0].lat, lng: locations[0].lng },
        sightings: [
          {
            maxAltitude: 10,
            maxAzimuth: 0,
            minAltitude: 10,
            minAzimuth: 120,
            date: "2024-11-28T12:00:00.000Z",
            dayStage: 1,
            maxHeight: 12,
            notify: true,
            visible: 6,
          },
        ],
      },
      currentLocation: {
        subtitle: locations[1].addresses.en,
        location: { lat: locations[1].lat, lng: locations[1].lng },
        sightings: [
          {
            maxAltitude: 10,
            maxAzimuth: 0,
            minAltitude: 10,
            minAzimuth: 120,
            date: "2024-11-28T12:00:00.000Z",
            dayStage: 1,
            maxHeight: 12,
            notify: true,
            visible: 6,
          },
        ],
      },
      savedLocations: [
        {
          title: "JSC",
          subtitle: locations[0].addresses.en,
          location: { lat: locations[0].lat, lng: locations[0].lng },
          sightings: [
            {
              maxAltitude: 10,
              maxAzimuth: 0,
              minAltitude: 10,
              minAzimuth: 120,
              date: "2024-11-28T12:00:00.000Z",
              dayStage: 1,
              maxHeight: 12,
              notify: true,
              visible: 6,
            },
          ],
        },
        {
          title: "NASA Headquarters",
          subtitle: locations[2].addresses.en,
          location: { lat: locations[2].lat, lng: locations[2].lng },
          sightings: [
            {
              maxAltitude: 10,
              maxAzimuth: 0,
              minAltitude: 10,
              minAzimuth: 120,
              date: "2024-11-28T12:00:00.000Z",
              dayStage: 1,
              maxHeight: 12,
              notify: true,
              visible: 6,
            },
          ],
        },
      ],
      initLoading: true,
      sightingsLoaded: false,
      issData: [],
    })

    MockDate.set("2024-11-28T10:00:00.000Z")
  })

  afterEach(() => {
    i18n.locale = "en"
    Platform.OS = "ios"
    MockDate.reset()
  })

  it("updates location addresses and current location name when locale changes", async () => {
    const hideSplashScreen = jest.fn()
    render(<App hideSplashScreen={hideSplashScreen} />)
    await waitFor(() => {
      expect(hideSplashScreen).toBeCalled()
    })

    hideSplashScreen.mockClear()
    i18n.locale = "ru"

    render(<App hideSplashScreen={hideSplashScreen} />)
    await waitFor(() => {
      expect(hideSplashScreen).toBeCalled()
    })

    await waitFor(async () => {
      expect(await storage.load(storage.KEYS.ROOT_STATE_STORAGE_KEY)).toMatchObject({
        selectedLocation: {
          title: "JSC",
          subtitle: locations[0].addresses.ru,
          location: { lat: locations[0].lat, lng: locations[0].lng },
        },
        currentLocation: {
          title: locations[1].addresses.ru,
          subtitle: locations[1].addresses.ru,
          location: { lat: locations[1].lat, lng: locations[1].lng },
        },
        savedLocations: [
          {
            title: "JSC",
            subtitle: locations[0].addresses.ru,
            location: { lat: locations[0].lat, lng: locations[0].lng },
          },
          {
            title: "NASA Headquarters",
            subtitle: locations[2].addresses.ru,
            location: { lat: locations[2].lat, lng: locations[2].lng },
          },
        ],
      })
    })
  })

  it("disables all notifications on android if user did not grant exact alarm permission", async () => {
    Platform.OS = "android"
    const spyAlert = jest.spyOn(Alert, "alert")
    const hideSplashScreen = jest.fn()
    ;(notifee.getNotificationSettings as jest.Mock).mockResolvedValueOnce({ android: { alarm: 0 } })
    jest
      .spyOn(PermissionsAndroid, "request")
      .mockResolvedValueOnce(PermissionsAndroid.RESULTS.DENIED)

    render(<App hideSplashScreen={hideSplashScreen} />)
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1100))
    })

    await waitFor(() => {
      expect(spyAlert).toBeCalled()
    })

    spyAlert.mock.calls[0][2][1].onPress() // press cancel button

    await waitFor(async () => {
      const rootState = await storage.load(storage.KEYS.ROOT_STATE_STORAGE_KEY)
      expect(rootState.selectedLocation.sightings.filter((s) => s.notify)).toHaveLength(0)
      expect(rootState.currentLocation.sightings.filter((s) => s.notify)).toHaveLength(0)

      for (const location of rootState.savedLocations) {
        expect(location.sightings.filter((s) => s.notify)).toHaveLength(0)
      }
    })
  })
})
