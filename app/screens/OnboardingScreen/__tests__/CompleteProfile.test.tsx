import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { CompleteProfileScreen } from "../CompleteProfileScreen"
import { render, userEvent, waitFor } from "@testing-library/react-native"
import { RootStoreModel, RootStoreProvider } from "../../../models"
import { api } from "../../../services/api"
import * as storage from "../../../utils/storage"
import * as navigationUtilities from "../../../navigators/navigationUtilities"

describe("CompleteProfile", () => {
  describe("notifications step", () => {
    it("renders correctly", () => {
      const tree = render(
        <NavigationContainer>
          <CompleteProfileScreen />
        </NavigationContainer>,
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it("enables notifications", async () => {
      const tree = render(
        <NavigationContainer>
          <CompleteProfileScreen />
        </NavigationContainer>,
      )

      await userEvent.press(await tree.findByAccessibilityHint("toggle notifications"))
      await waitFor(async () => {
        expect(await storage.load(storage.KEYS.UPCOMING)).toBeTruthy()
      })
    })
  })

  describe("location step", () => {
    beforeEach(() => {
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
    })
    it("renders correctly", async () => {
      const tree = render(
        <NavigationContainer>
          <CompleteProfileScreen />
        </NavigationContainer>,
      )

      await userEvent.press(await tree.findByAccessibilityHint("navigate to location detection"))
      expect(tree.toJSON()).toMatchSnapshot()
    })

    it("sets current location", async () => {
      const rootStore = RootStoreModel.create({
        selectedLocation: null,
        currentLocation: null,
        savedLocations: [],
        initLoading: false,
        sightingsLoaded: false,
        issData: [],
      })

      const tree = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <CompleteProfileScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      await userEvent.press(await tree.findByAccessibilityHint("navigate to location detection"))
      await userEvent.type(
        await tree.findByAccessibilityHint("type for search location"),
        "Phoenix",
      )

      await userEvent.press(await tree.findByText("Phoenix, Arizona"))

      await waitFor(() => {
        expect(rootStore.initLoading).toBeTruthy()
        expect(rootStore.currentLocation).toMatchObject({
          title: "Phoenix, AZ",
          location: { lat: 33.5155817, lng: -112.1563736 },
        })
      })
    })

    it("does not update current location if it is the same", async () => {
      const rootStore = RootStoreModel.create({
        selectedLocation: null,
        currentLocation: {
          title: "Phoenix, AZ",
          location: { lat: 33.5155817, lng: -112.1563736 },
        },
        savedLocations: [],
        initLoading: false,
        sightingsLoaded: false,
        issData: [],
      })

      const tree = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <CompleteProfileScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      await userEvent.press(await tree.findByAccessibilityHint("navigate to location detection"))
      await userEvent.type(
        await tree.findByAccessibilityHint("type for search location"),
        "Phoenix",
      )

      await userEvent.press(await tree.findByText("Phoenix, Arizona"))

      await waitFor(() => {
        expect(rootStore.initLoading).toBeFalsy()
        expect(rootStore.currentLocation).toMatchObject({
          title: "Phoenix, AZ",
          location: { lat: 33.5155817, lng: -112.1563736 },
        })
      })
    })

    it("redirects to home screen upon completion", async () => {
      jest.spyOn(navigationUtilities, "skipOnboarding").mockImplementationOnce(() => {})
      const rootStore = RootStoreModel.create({
        selectedLocation: null,
        currentLocation: null,
        savedLocations: [],
        initLoading: false,
        sightingsLoaded: false,
        issData: [],
      })

      const tree = render(
        <NavigationContainer>
          <RootStoreProvider value={rootStore}>
            <CompleteProfileScreen />
          </RootStoreProvider>
        </NavigationContainer>,
      )

      await userEvent.press(await tree.findByAccessibilityHint("navigate to location detection"))
      await userEvent.type(
        await tree.findByAccessibilityHint("type for search location"),
        "Phoenix",
      )

      await userEvent.press(await tree.findByText("Phoenix, Arizona"))
      await userEvent.press(await tree.findByAccessibilityHint("navigate to main screen"))
      expect(navigationUtilities.skipOnboarding).toBeCalled()
    })
  })
})
