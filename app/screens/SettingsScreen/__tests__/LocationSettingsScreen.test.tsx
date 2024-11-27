import React from "react"
import { LocationSettingsScreen } from "../LocationSettingsScreen"
import { NavigationContainer } from "@react-navigation/native"
import { act, render, userEvent, waitFor, within } from "@testing-library/react-native"
import Location, { GeoPosition } from "react-native-geolocation-service"
import { RootStoreModel, RootStoreProvider } from "../../../models"
import { api } from "../../../services/api"
import issData200min from "../../../../test/mockISSData200min.json"
import issDataFull from "../../../../test/mockISSDataFull.json"
import MockDate from "mockdate"

const mockNavigate = jest.fn()
jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useNavigation: jest.fn(() => ({ navigate: mockNavigate, setParams: jest.fn() })),
  useRoute: () => ({
    params: {
      id: 1,
      defaultLocation: null,
    },
  }),
}))

const waitForLoad = async () => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100))
  })
}

describe("LocationSettingsScreen", () => {
  it("renders correctly", () => {
    const tree = render(
      <NavigationContainer>
        <LocationSettingsScreen />
      </NavigationContainer>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe("with data", () => {
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
      ;(api.getISSData as jest.Mock).mockImplementation(
        () => new Promise((resolve) => resolve({ ok: true, data: issDataFull })),
      )
      MockDate.set(issData200min.points[Math.floor(issData200min.points.length / 2)].date)
      jest.clearAllMocks()
    })

    afterEach(() => {
      MockDate.reset()
    })

    it("shows list of locations", async () => {
      const component = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <LocationSettingsScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      await waitForLoad()
      expect(await component.findByText("Houston, TX")).toBeVisible()
      expect(await component.findByText("Phoenix, AZ")).toBeVisible()
    })

    describe("refresh location button", () => {
      beforeEach(() => {
        ;(Location.requestAuthorization as jest.Mock).mockResolvedValue("granted")
        ;(Location.getCurrentPosition as jest.Mock).mockImplementation(
          (cb: (value: GeoPosition) => void) =>
            cb({
              coords: {
                latitude: 38.8830649,
                longitude: -77.0188535,
                accuracy: 1,
                altitude: 1,
                heading: 0,
                speed: 0,
              },
              timestamp: Date.now(),
            }),
        )

        ;(api.reverseGeocode as jest.Mock).mockResolvedValue({
          kind: "ok",
          name: "NASA Headquarters, DC",
          address: "N300 E St SW, Washington, DC",
        })
      })

      it("refreshes current location", async () => {
        const component = render(
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <LocationSettingsScreen />
            </RootStoreProvider>
          </NavigationContainer>,
        )

        await waitForLoad()
        await userEvent.press(
          await component.findByText("homeScreen.selectLocation.refresh", { exact: false }),
        )
        await waitFor(async () => {
          expect(rootStore.currentLocation.title).toEqual("NASA Headquarters, DC")
          expect(rootStore.currentLocation.location).toEqual({ lat: 38.8830649, lng: -77.0188535 })
          expect(rootStore.currentLocation.sightings).toHaveLength(0)
          expect(await component.findByText("NASA Headquarters, DC")).toBeVisible()
          expect(component.queryByText("Houston, TX")).toBeNull()
        })
      })
    })

    describe("location notifications", () => {
      it("toggles current location notifications", async () => {
        const component = render(
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <LocationSettingsScreen />
            </RootStoreProvider>
          </NavigationContainer>,
        )

        await waitForLoad()
        const toggle = (await component.findAllByAccessibilityHint("toggle location alerts"))[0]

        await userEvent.press(toggle)
        await waitFor(() => {
          rootStore.currentLocation.sightings.forEach((sighting) => {
            expect(sighting.notify).toBeTruthy()
          })
        })

        await userEvent.press(toggle)
        await waitFor(() => {
          rootStore.currentLocation.sightings.forEach((sighting) => {
            expect(sighting.notify).toBeFalsy()
          })
        })
      })

      it("toggles saved location notifications", async () => {
        const component = render(
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <LocationSettingsScreen />
            </RootStoreProvider>
          </NavigationContainer>,
        )

        await waitForLoad()
        const toggle = (await component.findAllByAccessibilityHint("toggle location alerts"))[1]

        await userEvent.press(toggle)
        await waitFor(() => {
          rootStore.savedLocations[0].sightings.forEach((sighting) => {
            expect(sighting.notify).toBeTruthy()
          })
        })

        await userEvent.press(toggle)
        await waitFor(() => {
          rootStore.savedLocations[0].sightings.forEach((sighting) => {
            expect(sighting.notify).toBeFalsy()
          })
        })
      })
    })

    describe("sightings modal", () => {
      it("toggles current location notifications", async () => {
        const component = render(
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <LocationSettingsScreen />
            </RootStoreProvider>
          </NavigationContainer>,
        )

        await waitForLoad()
        await userEvent.press(
          (
            await component.findAllByText("settings.locationSettingsData.cta", { exact: false })
          )[0],
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
          expect(rootStore.currentLocation.sightings[0].notify).toBeTruthy()
        })

        // all sightings
        await userEvent.press(await component.findByAccessibilityHint("toggle notifications"))
        await waitFor(() => {
          rootStore.currentLocation.sightings.forEach((sighting) => {
            expect(sighting.notify).toBeTruthy()
          })
        })
      })

      it("toggles selected location notifications", async () => {
        const component = render(
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <LocationSettingsScreen />
            </RootStoreProvider>
          </NavigationContainer>,
        )

        await waitForLoad()
        await userEvent.press(
          (
            await component.findAllByText("settings.locationSettingsData.cta", { exact: false })
          )[1],
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

      it("toggles saved location notifications", async () => {
        const component = render(
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <LocationSettingsScreen />
            </RootStoreProvider>
          </NavigationContainer>,
        )

        await waitForLoad()
        await userEvent.press(
          (
            await component.findAllByText("settings.locationSettingsData.cta", { exact: false })
          )[2],
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
          expect(rootStore.savedLocations[1].sightings[0].notify).toBeTruthy()
        })

        // all sightings
        await userEvent.press(await component.findByAccessibilityHint("toggle notifications"))
        await waitFor(() => {
          rootStore.savedLocations[1].sightings.forEach((sighting) => {
            expect(sighting.notify).toBeTruthy()
          })
        })
      })
    })

    describe("delete button", () => {
      it("deletes location", async () => {
        const component = render(
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <LocationSettingsScreen />
            </RootStoreProvider>
          </NavigationContainer>,
        )

        await waitForLoad()
        await userEvent.press((await component.findAllByAccessibilityHint("delete"))[0])
        expect(
          await component.findByText("settings.locationSettingsData.removeLocation.question", {
            exact: false,
          }),
        ).toBeVisible()

        await userEvent.press(
          await component.findByText("settings.locationSettingsData.removeLocation.removeButton", {
            exact: false,
          }),
        )
        await waitFor(() => {
          expect(rootStore.savedLocations).toHaveLength(1)
        })
      })

      it("does not delete location if user cancels", async () => {
        const component = render(
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <LocationSettingsScreen />
            </RootStoreProvider>
          </NavigationContainer>,
        )

        await waitForLoad()
        await userEvent.press((await component.findAllByAccessibilityHint("delete"))[0])
        expect(
          await component.findByText("settings.locationSettingsData.removeLocation.question", {
            exact: false,
          }),
        ).toBeVisible()

        await userEvent.press(
          await component.findByText("settings.locationSettingsData.removeLocation.cancelButton", {
            exact: false,
          }),
        )
        await waitFor(() => {
          expect(rootStore.savedLocations).toHaveLength(2)
        })
      })
    })

    describe("add button", () => {
      it("navigates to AddNewLocationScreen", async () => {
        const component = render(
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <LocationSettingsScreen />
            </RootStoreProvider>
          </NavigationContainer>,
        )

        await waitForLoad()
        await userEvent.press(await component.findByAccessibilityHint("add new location"))
        await waitFor(() => {
          expect(mockNavigate).toBeCalledWith("SettingsScreens", { screen: "AddNewLocation" })
        })
      })
    })
  })
})
