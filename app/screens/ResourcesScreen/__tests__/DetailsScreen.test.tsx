import React from "react"
import { DetailsScreen } from "../DetailsScreen"
import { render, waitFor } from "@testing-library/react-native"
import { RootStoreModel, RootStoreProvider } from "../../../models"
import { api } from "../../../services/api"
import issData from "../../../../test/mockISSData200min.json"
import MockDate from "mockdate"

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
  createNavigationContainerRef: jest.fn(),
}))

describe("DetailsScreen", () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: {
      title: "Houston, TX",
      location: { lat: 29.7751019, lng: -95.3740024 },
    },
    currentLocation: {},
    savedLocations: [],
    initLoading: false,
    sightingsLoaded: false,
    issData: null,
  })

  beforeEach(() => {
    ;(api.getISSData as jest.Mock).mockResolvedValue({ ok: true, data: issData })
    MockDate.set(issData.points[Math.floor(issData.points.length / 2)].date)
    jest.clearAllMocks()
  })

  afterEach(() => {
    MockDate.reset()
  })

  it("renders correctly", async () => {
    let tree: ReturnType<typeof render>
    await waitFor(() => {
      tree = render(<DetailsScreen />)
    })
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders ISS info correctly", async () => {
    const tree = render(
      <RootStoreProvider value={rootStore}>
        <DetailsScreen />
      </RootStoreProvider>,
    )

    await waitFor(() => {
      expect(tree.queryByAccessibilityHint("header")).not.toBeNull()
    })

    expect(tree.queryByAccessibilityHint("latitude")).toHaveTextContent("-47.27", { exact: false })
    expect(tree.queryByAccessibilityHint("longitude")).toHaveTextContent("-12.45", { exact: false })
    expect(tree.queryByAccessibilityHint("altitude")).toHaveTextContent("430.95", { exact: false })
    expect(tree.queryByAccessibilityHint("orbital Speed")).toHaveTextContent("7630", {
      exact: false,
    })
  })

  it("renders ISS info correctly if ISS is near 180 degrees of longitude", async () => {
    MockDate.set("Wed, 06 Nov 2024 10:56:00 GMT")
    let tree = render(
      <RootStoreProvider value={rootStore}>
        <DetailsScreen />
      </RootStoreProvider>,
    )

    await waitFor(() => {
      expect(tree.queryByAccessibilityHint("header")).not.toBeNull()
    })

    expect(tree.queryByAccessibilityHint("latitude")).toHaveTextContent("45.78", { exact: false })
    expect(tree.queryByAccessibilityHint("longitude")).toHaveTextContent("176.44", { exact: false })
    expect(tree.queryByAccessibilityHint("altitude")).toHaveTextContent("416.04", { exact: false })
    expect(tree.queryByAccessibilityHint("orbital Speed")).toHaveTextContent("7713", {
      exact: false,
    })

    MockDate.set("Wed, 06 Nov 2024 10:58:00 GMT")
    tree = render(
      <RootStoreProvider value={rootStore}>
        <DetailsScreen />
      </RootStoreProvider>,
    )

    await waitFor(() => {
      expect(tree.queryByAccessibilityHint("header")).not.toBeNull()
    })

    expect(tree.queryByAccessibilityHint("latitude")).toHaveTextContent("48.73", { exact: false })
    expect(tree.queryByAccessibilityHint("longitude")).toHaveTextContent("-173.41", {
      exact: false,
    })
    expect(tree.queryByAccessibilityHint("altitude")).toHaveTextContent("415.93", { exact: false })
    expect(tree.queryByAccessibilityHint("orbital Speed")).toHaveTextContent("7994", {
      exact: false,
    })
  })

  it("renders ISS info correctly if ISS is near 0 degrees of azimuth", async () => {
    MockDate.set("Wed, 06 Nov 2024 11:11:15 GMT")
    let tree = render(
      <RootStoreProvider value={rootStore}>
        <DetailsScreen />
      </RootStoreProvider>,
    )

    await waitFor(() => {
      expect(tree.queryByAccessibilityHint("header")).not.toBeNull()
    })

    expect(tree.queryByAccessibilityHint("latitude")).toHaveTextContent("39.16", { exact: false })
    expect(tree.queryByAccessibilityHint("longitude")).toHaveTextContent("-103.79", {
      exact: false,
    })
    expect(tree.queryByAccessibilityHint("altitude")).toHaveTextContent("410.37", { exact: false })
    expect(tree.queryByAccessibilityHint("orbital Speed")).toHaveTextContent("8233", {
      exact: false,
    })

    MockDate.set("Wed, 06 Nov 2024 11:13:00 GMT")
    tree = render(
      <RootStoreProvider value={rootStore}>
        <DetailsScreen />
      </RootStoreProvider>,
    )

    await waitFor(() => {
      expect(tree.queryByAccessibilityHint("header")).not.toBeNull()
    })

    expect(tree.queryByAccessibilityHint("latitude")).toHaveTextContent("34.73", { exact: false })
    expect(tree.queryByAccessibilityHint("longitude")).toHaveTextContent("-97.91", { exact: false })
    expect(tree.queryByAccessibilityHint("altitude")).toHaveTextContent("409.44", { exact: false })
    expect(tree.queryByAccessibilityHint("orbital Speed")).toHaveTextContent("7790", {
      exact: false,
    })

    MockDate.set("Wed, 06 Nov 2024 12:03:15 GMT")
    tree = render(
      <RootStoreProvider value={rootStore}>
        <DetailsScreen />
      </RootStoreProvider>,
    )

    await waitFor(() => {
      expect(tree.queryByAccessibilityHint("header")).not.toBeNull()
    })

    expect(tree.queryByAccessibilityHint("latitude")).toHaveTextContent("-24.58", { exact: false })
    expect(tree.queryByAccessibilityHint("longitude")).toHaveTextContent("82.06", { exact: false })
    expect(tree.queryByAccessibilityHint("altitude")).toHaveTextContent("426.09", { exact: false })
    expect(tree.queryByAccessibilityHint("orbital Speed")).toHaveTextContent("7602", {
      exact: false,
    })

    MockDate.set("Wed, 06 Nov 2024 12:06:45 GMT")
    tree = render(
      <RootStoreProvider value={rootStore}>
        <DetailsScreen />
      </RootStoreProvider>,
    )

    await waitFor(() => {
      expect(tree.queryByAccessibilityHint("header")).not.toBeNull()
    })

    expect(tree.queryByAccessibilityHint("latitude")).toHaveTextContent("-14.41", { exact: false })
    expect(tree.queryByAccessibilityHint("longitude")).toHaveTextContent("90.69", { exact: false })
    expect(tree.queryByAccessibilityHint("altitude")).toHaveTextContent("422.49", { exact: false })
    expect(tree.queryByAccessibilityHint("orbital Speed")).toHaveTextContent("7819", {
      exact: false,
    })
  })

  it("renders error modal if api responds with error", async () => {
    ;(api.getISSData as jest.Mock).mockResolvedValue({ ok: false, data: "error" })
    const tree = render(
      <RootStoreProvider value={rootStore}>
        <DetailsScreen />
      </RootStoreProvider>,
    )

    await waitFor(() => {
      expect(
        tree.queryByText("homeScreen.initLoader.trajectoryError", { exact: false }),
      ).not.toBeNull()
    })
  })

  it("calls api if required data point is not loaded yet", async () => {
    const date = new Date(issData.points[issData.points.length - 1].date)
    date.setSeconds(date.getSeconds() - 1)
    MockDate.set(date)

    render(
      <RootStoreProvider value={rootStore}>
        <DetailsScreen />
      </RootStoreProvider>,
    )

    await waitFor(() => {
      expect(api.getISSData).toBeCalledTimes(1)
    })

    // wait for a second for next update
    await waitFor(
      async () => {
        MockDate.set(issData.points[issData.points.length - 1].date)
        await new Promise((resolve) => setTimeout(resolve, 1000))
      },
      { timeout: 2000 },
    )

    await waitFor(() => {
      expect(api.getISSData).toBeCalledTimes(2)
    })
  })
})
