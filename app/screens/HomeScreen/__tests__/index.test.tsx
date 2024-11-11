import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { HomeScreen } from "../index"
import { act, render, waitFor } from "@testing-library/react-native"
import { RootStoreModel, RootStoreProvider } from "../../../models"
import { api } from "../../../services/api"
import issData200min from "../../../../test/mockISSData200min.json"
import issDataFull from "../../../../test/mockISSDataFull.json"
import MockDate from "mockdate"
import * as storage from "../../../utils/storage"

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
    const rootStore = RootStoreModel.create({
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

    beforeEach(async () => {
      await storage.clear()
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
      await storage.save(storage.KEYS.COACH_COMPLETED, true)
      const component = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <HomeScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      await waitFor(() => {
        expect(
          component.queryByText("homeScreen.initLoader.message", { exact: false }),
        ).not.toBeNull()
      })

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      })

      await waitFor(() => {
        expect(component.queryByText("homeScreen.initLoader.message", { exact: false })).toBeNull()
      })

      expect(component.toJSON()).toMatchSnapshot()
    })

    it("renders error modal if api responds with error", async () => {
      await storage.save(storage.KEYS.COACH_COMPLETED, true)
      ;(api.getISSData as jest.Mock).mockResolvedValue({ ok: false, data: "error" })
      const component = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <HomeScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 100))
      })

      await waitFor(() => {
        expect(
          component.queryByText("homeScreen.initLoader.trajectoryError", { exact: false }),
        ).not.toBeNull()
      })
    })
  })
})
