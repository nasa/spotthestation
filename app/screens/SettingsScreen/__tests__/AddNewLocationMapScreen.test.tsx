import React from "react"
import { AddNewLocationMapScreen } from "../AddNewLocationMapScreen"
import { NavigationContainer } from "@react-navigation/native"
import { act, fireEvent, render, userEvent, waitFor } from "@testing-library/react-native"
import { RootStoreModel, RootStoreProvider } from "../../../models"
import { api } from "../../../services/api"
import issData200min from "../../../../test/mockISSData200min.json"
import issDataFull from "../../../../test/mockISSDataFull.json"
import Snackbar from "react-native-snackbar"

const mockNavigate = jest.fn()
jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useNavigation: jest.fn(() => ({ navigate: mockNavigate })),
}))

const houston = {
  title: "Houston, TX",
  location: { lat: 29.7751019, lng: -95.3740024 },
}

describe("AddNewLocationMapScreen", () => {
  let rootStore: ReturnType<typeof RootStoreModel.create>
  beforeEach(() => {
    rootStore = RootStoreModel.create({
      selectedLocation: houston,
      currentLocation: {},
      savedLocations: [houston],
      initLoading: true,
      sightingsLoaded: false,
      issData: [],
    })
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
    ;(api.reverseGeocode as jest.Mock).mockResolvedValue({
      kind: "ok",
      name: "Phoenix, AZ",
      address: "Phoenix, AZ",
    })
    ;(api.getISSData as jest.Mock).mockImplementation(
      (params) =>
        new Promise((resolve) =>
          resolve({ ok: true, data: params.to ? issData200min : issDataFull }),
        ),
    )

    jest.clearAllMocks()
  })

  it("renders correctly", async () => {
    const component = render(
      <NavigationContainer>
        <AddNewLocationMapScreen />
      </NavigationContainer>,
    )

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100))
    })

    expect(component.toJSON()).toMatchSnapshot()
  })

  it("saves selected location to the store", async () => {
    const component = render(
      <NavigationContainer>
        <RootStoreProvider value={rootStore}>
          <AddNewLocationMapScreen />
        </RootStoreProvider>
      </NavigationContainer>,
    )

    const textInput = component.getByPlaceholderText(
      "homeScreen.selectLocation.inputPlaceholder undefined",
    )
    await userEvent.type(textInput, "Phoenix")
    await userEvent.press(await component.findByText("Phoenix, Arizona"))
    await userEvent.press(
      await component.findByText(
        "settings.locationSettingsData.addNewLocation.confirnModalButton",
        { exact: false },
      ),
    )

    await waitFor(() => {
      expect(Snackbar.show).toBeCalledWith(
        expect.objectContaining({
          text: expect.stringContaining("snackBar.sightingsSaved"),
        }),
      )
    })

    expect(rootStore.savedLocations[1].title).toEqual("Phoenix, AZ")
    expect(rootStore.savedLocations[1].sightings).toHaveLength(3)
    expect(mockNavigate).toBeCalledWith("LocationSettings", expect.anything())
  })

  it("saves selected location to the store when user clicks on a map", async () => {
    const component = render(
      <NavigationContainer>
        <RootStoreProvider value={rootStore}>
          <AddNewLocationMapScreen />
        </RootStoreProvider>
      </NavigationContainer>,
    )

    await act(async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      ;(await component.findByTestId("map")).props.onPress({
        geometry: { coordinates: [-112.1563736, 33.5155817] },
      })
    })

    await userEvent.press(
      await component.findByText(
        "settings.locationSettingsData.addNewLocation.confirnModalButton",
        { exact: false },
      ),
    )

    await waitFor(() => {
      expect(Snackbar.show).toBeCalledWith(
        expect.objectContaining({
          text: expect.stringContaining("snackBar.sightingsSaved"),
        }),
      )
    })

    expect(rootStore.savedLocations[1].title).toEqual("Phoenix, AZ")
    expect(rootStore.savedLocations[1].sightings).toHaveLength(3)
    expect(mockNavigate).toBeCalledWith("LocationSettings", expect.anything())
  })

  it("does not save selected location if it already exists", async () => {
    const rootStoreWithPhoenix = RootStoreModel.create({
      selectedLocation: houston,
      currentLocation: {},
      savedLocations: [
        houston,
        {
          title: "Phoenix, AZ",
          location: { lat: 33.5155817, lng: -112.1563736 },
        },
      ],
      initLoading: true,
      sightingsLoaded: false,
      issData: [],
    })

    const component = render(
      <NavigationContainer>
        <RootStoreProvider value={rootStoreWithPhoenix}>
          <AddNewLocationMapScreen />
        </RootStoreProvider>
      </NavigationContainer>,
    )

    const textInput = component.getByPlaceholderText(
      "homeScreen.selectLocation.inputPlaceholder undefined",
    )
    await userEvent.type(textInput, "Phoenix")
    await userEvent.press(await component.findByText("Phoenix, Arizona"))
    await userEvent.press(
      await component.findByText(
        "settings.locationSettingsData.addNewLocation.confirnModalButton",
        { exact: false },
      ),
    )

    await waitFor(() => {
      expect(Snackbar.show).toBeCalledWith(
        expect.objectContaining({
          text: expect.stringContaining("snackBar.locationExist"),
        }),
      )
    })

    expect(rootStoreWithPhoenix.savedLocations).toHaveLength(2)
    expect(mockNavigate).not.toBeCalled()
  })

  it("clears location input", async () => {
    const component = render(
      <NavigationContainer>
        <RootStoreProvider value={rootStore}>
          <AddNewLocationMapScreen />
        </RootStoreProvider>
      </NavigationContainer>,
    )

    const textInput = component.getByPlaceholderText(
      "homeScreen.selectLocation.inputPlaceholder undefined",
    )
    await userEvent.type(textInput, "Phoenix")
    fireEvent(textInput, "focus")
    await userEvent.press(await component.findByAccessibilityHint("clear input"))
    expect(textInput).toHaveDisplayValue("")
  })
})
