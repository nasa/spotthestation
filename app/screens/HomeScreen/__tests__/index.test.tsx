import React from "react"
import { MeasureInWindowOnSuccessCallback, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { HomeScreen } from "../index"
import { act, render, userEvent, waitFor, within } from "@testing-library/react-native"
import { RootStoreModel, RootStoreProvider } from "../../../models"
import { api } from "../../../services/api"
import issData200min from "../../../../test/mockISSData200min.json"
import issDataFull from "../../../../test/mockISSDataFull.json"
import MockDate from "mockdate"
import * as storage from "../../../utils/storage"
import { withRealDate } from "../../../../test/helpers"

const waitForLoad = async (component: ReturnType<typeof render>) => {
  await waitFor(() => {
    expect(component.queryByText("homeScreen.initLoader.message", { exact: false })).not.toBeNull()
  })

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
  })

  await waitFor(() => {
    expect(component.queryByText("homeScreen.initLoader.message", { exact: false })).toBeNull()
  })
}

describe("HomeScreen", () => {
  it("renders correctly", async () => {
    const component = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
    )

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100))
    })

    expect(component.toJSON()).toMatchSnapshot()
  })

  describe("with ISS data", () => {
    let rootStore: ReturnType<typeof RootStoreModel.create>

    beforeEach(async () => {
      rootStore = RootStoreModel.create({
        selectedLocation: {
          title: "Houston, TX",
          location: { lat: 29.7751019, lng: -95.3740024 },
        },
        currentLocation: {},
        savedLocations: [],
        initLoading: true,
        sightingsLoaded: false,
        issData: [],
      })

      await storage.clear()
      await storage.save(storage.KEYS.COACH_COMPLETED, true)
      ;(api.getISSData as jest.Mock).mockImplementation(
        (params) =>
          new Promise((resolve) =>
            resolve({ ok: true, data: params.to ? issData200min : issDataFull }),
          ),
      )
      MockDate.set(issData200min.points[Math.floor(issData200min.points.length / 2)].date)
      jest.clearAllMocks()
    })

    afterEach(() => {
      MockDate.reset()
    })

    it("renders correctly", async () => {
      const component = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <HomeScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      await waitForLoad(component)
      expect(component.toJSON()).toMatchSnapshot()
    })

    it("reloads data on location change", async () => {
      ;(api.getPlaces as jest.Mock).mockResolvedValue({
        kind: "ok",
        places: [
          {
            name: "Phoenix, AZ",
            display_name: "Phoenix, Arizona",
            place_id: "phoenix",
            lat: 33.5155817,
            lon: -112.1563736,
          },
        ],
      })

      const component = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <HomeScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      await waitForLoad(component)
      await userEvent.press(await component.findByAccessibilityHint("open select location modal"))

      // we use real date here because mocked version breaks debounce function
      await withRealDate(async () => {
        await userEvent.type(
          await component.findByAccessibilityHint("type for search location"),
          "Phoenix",
        )
      })

      await userEvent.press(await component.findByText("Phoenix, Arizona"))
      await waitForLoad(component)
      expect(await component.findByAccessibilityHint("address")).toHaveTextContent(
        "Phoenix, Arizona",
      )
    })

    it("renders tutorial on first load", async () => {
      await storage.clear()
      const component = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <HomeScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      await waitForLoad(component)

      expect(
        await component.findByText("homeScreen.coachMarks.locationTitle", { exact: false }),
      ).toBeVisible()
      await userEvent.press(await component.findByAccessibilityHint("next coach mark"))
      expect(
        await component.findByText("homeScreen.coachMarks.sightingsTitle", { exact: false }),
      ).toBeVisible()
      await userEvent.press(await component.findByAccessibilityHint("next coach mark"))
      expect(
        await component.findByText("homeScreen.coachMarks.globeTitle", { exact: false }),
      ).toBeVisible()
      await userEvent.press(await component.findByAccessibilityHint("next coach mark"))
      expect(
        await component.findByText("homeScreen.coachMarks.mapTitle", { exact: false }),
      ).toBeVisible()
      await userEvent.press(await component.findByAccessibilityHint("next coach mark"))
      expect(
        await component.findByText("homeScreen.coachMarks.navigationTitle", { exact: false }),
      ).toBeVisible()
      await userEvent.press(await component.findByAccessibilityHint("finish coach mark"))

      await waitFor(async () => {
        expect(await storage.load(storage.KEYS.COACH_COMPLETED)).toBeTruthy()
      })
    })

    it("renders error modal if api responds with error", async () => {
      ;(api.getISSData as jest.Mock).mockResolvedValue({ ok: false, data: "error" })
      const component = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <HomeScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      await waitForLoad(component)

      await waitFor(() => {
        expect(
          component.queryByText("homeScreen.initLoader.trajectoryError", { exact: false }),
        ).not.toBeNull()
      })
    })

    describe("sightings modal", () => {
      // mock measureInWindow so react-native-element-dropdown can render dropdown menu on press
      const originalMeasureInWindow = View.prototype.measureInWindow
      beforeEach(() => {
        View.prototype.measureInWindow = jest.fn((f: MeasureInWindowOnSuccessCallback) => {
          f(1, 2, 3, 4)
        })
      })

      afterEach(() => {
        View.prototype.measureInWindow = originalMeasureInWindow
      })

      it("applies filters", async () => {
        const component = render(
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <HomeScreen />
            </RootStoreProvider>
          </NavigationContainer>,
        )

        await waitForLoad(component)

        await userEvent.press(
          await component.findByAccessibilityHint("show sighting opportunities"),
        )
        await waitFor(() => {
          expect(component.queryAllByAccessibilityHint("pressable list item")).toHaveLength(5)
        })

        const dropdowns = await component.findAllByText("homeScreen.selectSightings.all", {
          exact: false,
        })

        await userEvent.press(dropdowns[0])
        await userEvent.press(
          await component.findByText("homeScreen.selectSightings.night", { exact: false }),
        )
        await waitFor(() => {
          expect(component.queryAllByAccessibilityHint("pressable list item")).toHaveLength(5)
        })

        await userEvent.press(dropdowns[1])
        await userEvent.press(await component.findByText(">30°", { exact: false }))
        await waitFor(() => {
          expect(component.queryAllByAccessibilityHint("pressable list item")).toHaveLength(2)
        })

        await userEvent.press(dropdowns[2])
        await userEvent.press(
          await component.findByText("homeScreen.selectSightings.shorterThan2", { exact: false }),
        )
        await waitFor(() => {
          expect(component.queryAllByAccessibilityHint("pressable list item")).toHaveLength(0)
        })
      })

      it("toggles notifications", async () => {
        const component = render(
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <HomeScreen />
            </RootStoreProvider>
          </NavigationContainer>,
        )

        await waitForLoad(component)

        await waitFor(() => {
          rootStore.selectedLocation.sightings.forEach((sighting) => {
            expect(sighting.notify).toBeFalsy()
          })
        })

        await userEvent.press(
          await component.findByAccessibilityHint("show sighting opportunities"),
        )
        const sightings = await waitFor(() => {
          const items = component.queryAllByAccessibilityHint("pressable list item")
          expect(items).toHaveLength(5)
          return items
        })

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
    })
  })
})
