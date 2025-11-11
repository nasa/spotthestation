import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { ISSNowScreen } from "../index"
import { act, render, userEvent, waitFor } from "@testing-library/react-native"
import * as ScreenOrientation from "expo-screen-orientation"
import MockDate from "mockdate"
import { TabNavigatorContext } from "../../../navigators"
import { RootStoreModel, RootStoreProvider } from "../../../models"
import { api } from "../../../services/api"
import issData200min from "../../../../test/mockISSData200min.json"
import issDataFull from "../../../../test/mockISSDataFull.json"
import { withRealDate } from "../../../../test/helpers"
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useRoute: () => ({
    params: {
      id: 1,
      title: "Mock Title",
    },
  }),
}))

const waitForLoad = async (duration = 100) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, duration))
  })
}

describe("ISSNowScreen", () => {
  beforeEach(() => {
    MockDate.set(issData200min.points[Math.floor(issData200min.points.length / 2)].date)
    jest.clearAllMocks()
  })

  afterEach(() => {
    MockDate.reset()
  })

  it("renders correctly", () => {
    const tree = render(
      <TabNavigatorContext.Provider
        value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
      >
        <NavigationContainer>
          <ISSNowScreen />
        </NavigationContainer>
      </TabNavigatorContext.Provider>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly in landscape mode", async () => {
    let listener: (orientation: ScreenOrientation.OrientationChangeEvent) => void
    ;(ScreenOrientation.addOrientationChangeListener as jest.Mock).mockImplementation((l) => {
      listener = l
      return { remove: jest.fn() }
    })

    const tree = render(
      <TabNavigatorContext.Provider
        value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
      >
        <NavigationContainer>
          <ISSNowScreen />
        </NavigationContainer>
      </TabNavigatorContext.Provider>,
    )

    await act(() => {
      listener({
        orientationInfo: { orientation: ScreenOrientation.Orientation.LANDSCAPE_LEFT },
        orientationLock: undefined,
      })
    })

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders correctly in fullscreen mode", async () => {
    const tree = render(
      <TabNavigatorContext.Provider
        value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
      >
        <NavigationContainer>
          <ISSNowScreen />
        </NavigationContainer>
      </TabNavigatorContext.Provider>,
    )

    await act(async () => {
      await userEvent.press(await tree.findByAccessibilityHint("enable/disable full screen mode"))
    })
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders correctly in fullscreen + landscape mode", async () => {
    let listener: (orientation: ScreenOrientation.OrientationChangeEvent) => void
    ;(ScreenOrientation.addOrientationChangeListener as jest.Mock).mockImplementation((l) => {
      listener = l
      return { remove: jest.fn() }
    })

    const tree = render(
      <TabNavigatorContext.Provider
        value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
      >
        <NavigationContainer>
          <ISSNowScreen />
        </NavigationContainer>
      </TabNavigatorContext.Provider>,
    )

    await act(() => {
      listener({
        orientationInfo: { orientation: ScreenOrientation.Orientation.LANDSCAPE_LEFT },
        orientationLock: undefined,
      })
    })

    await userEvent.press(await tree.findByAccessibilityHint("enable/disable full screen mode"))
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders map view correctly", async () => {
    const tree = render(
      <TabNavigatorContext.Provider
        value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
      >
        <NavigationContainer>
          <ISSNowScreen />
        </NavigationContainer>
      </TabNavigatorContext.Provider>,
    )

    await userEvent.press(await tree.findByAccessibilityHint("enable map view"))

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders globe view correctly", async () => {
    const tree = render(
      <TabNavigatorContext.Provider
        value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
      >
        <NavigationContainer>
          <ISSNowScreen />
        </NavigationContainer>
      </TabNavigatorContext.Provider>,
    )

    await userEvent.press(await tree.findByAccessibilityHint("enable globe view"))

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders satellite view correctly", async () => {
    const tree = render(
      <TabNavigatorContext.Provider
        value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
      >
        <NavigationContainer>
          <ISSNowScreen />
        </NavigationContainer>
      </TabNavigatorContext.Provider>,
    )

    await userEvent.press(await tree.findByAccessibilityHint("enable satellite view"))

    expect(tree.toJSON()).toMatchSnapshot()
  })

  describe("with ISS data", () => {
    let rootStore: ReturnType<typeof RootStoreModel.create>

    beforeEach(() => {
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
      ;(api.getISSData as jest.Mock).mockImplementation(
        (params) =>
          new Promise((resolve) =>
            resolve({ ok: true, data: params.to ? issData200min : issDataFull }),
          ),
      )
    })

    it("renders correctly", async () => {
      const component = render(
        <TabNavigatorContext.Provider
          value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
        >
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <ISSNowScreen />
            </RootStoreProvider>
          </NavigationContainer>
          ,
        </TabNavigatorContext.Provider>,
      )

      await waitForLoad()

      expect(component.toJSON()).toMatchSnapshot()
    })

    it("updates current location", async () => {
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
        <TabNavigatorContext.Provider
          value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
        >
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <ISSNowScreen />
            </RootStoreProvider>
          </NavigationContainer>
          ,
        </TabNavigatorContext.Provider>,
      )

      await waitForLoad()

      await userEvent.press(await component.findByAccessibilityHint("change location"))

      // we use real date here because mocked version breaks debounce function
      await withRealDate(async () => {
        await userEvent.type(
          await component.findByAccessibilityHint("type for search location"),
          "Phoenix",
        )
      })

      await userEvent.press(await component.findByText("Phoenix, Arizona"))
      await waitForLoad(1000)
      expect(await component.findByAccessibilityHint("address")).toHaveTextContent(
        "Phoenix, Arizona",
      )
    })

    it("renders error modal if api responds with error", async () => {
      ;(api.getISSData as jest.Mock).mockResolvedValue({ ok: false, data: "error" })
      const component = render(
        <TabNavigatorContext.Provider
          value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
        >
          <NavigationContainer>
            <RootStoreProvider value={rootStore}>
              <ISSNowScreen />
            </RootStoreProvider>
          </NavigationContainer>
          ,
        </TabNavigatorContext.Provider>,
      )

      await waitFor(() => {
        expect(
          component.queryByText("homeScreen.initLoader.trajectoryError", { exact: false }),
        ).not.toBeNull()
      })
    })
  })
})
