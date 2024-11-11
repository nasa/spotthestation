import { render, userEvent, waitFor } from "@testing-library/react-native"
import React from "react"
import { NewsScreen } from "../NewsScreen"
import { api } from "../../../services/api"
import fs from "fs"
import path from "path"

const mockNews = fs
  .readFileSync(path.resolve(__dirname, "../../../../test/mockNews.xml"))
  .toString()

const mockNavigate = jest.fn()
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(() => ({ navigate: mockNavigate })),
  createNavigationContainerRef: jest.fn(),
}))

describe("NewsScreen", () => {
  it("renders correctly", async () => {
    let tree: ReturnType<typeof render>
    await waitFor(() => {
      tree = render(<NewsScreen />)
    })

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders correctly with list of articles", async () => {
    ;(api.getFeed as jest.Mock).mockResolvedValue({ ok: true, places: mockNews })
    let tree: ReturnType<typeof render>
    await waitFor(() => {
      tree = render(<NewsScreen />)
    })

    await waitFor(() => {
      expect(tree.queryAllByAccessibilityHint("pressable feed item")).toHaveLength(10)
    })

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("navigates to web view on article click", async () => {
    ;(api.getFeed as jest.Mock).mockResolvedValue({ ok: true, places: mockNews })
    let tree: ReturnType<typeof render>
    await waitFor(() => {
      tree = render(<NewsScreen />)
    })

    await waitFor(() => {
      expect(tree.queryAllByAccessibilityHint("pressable feed item")).toHaveLength(10)
    })

    const item = tree.queryAllByAccessibilityHint("pressable feed item")[0]
    await userEvent.press(item)
    expect(mockNavigate).toBeCalledWith("ResourcesScreens", {
      screen: "Web",
      url: "https://blogs.nasa.gov/spacestation/2024/11/08/dragon-spacecraft-boosts-station-for-first-time/",
    })
  })

  it("allows to search articles by title", async () => {
    ;(api.getFeed as jest.Mock).mockResolvedValue({ ok: true, places: mockNews })
    let tree: ReturnType<typeof render>
    await waitFor(() => {
      tree = render(<NewsScreen />)
    })

    await waitFor(() => {
      expect(tree.queryAllByAccessibilityHint("pressable feed item")).toHaveLength(10)
    })

    const searchButton = await tree.findByAccessibilityHint("search")
    await userEvent.press(searchButton)

    const input = await tree.findByAccessibilityHint("type to search events")
    await userEvent.type(input, "science")

    await waitFor(() => {
      expect(tree.queryAllByAccessibilityHint("pressable feed item")).toHaveLength(4)
    })

    const cancelButton = await tree.findByAccessibilityHint("cancel")
    await userEvent.press(cancelButton)

    await waitFor(() => {
      expect(tree.queryAllByAccessibilityHint("pressable feed item")).toHaveLength(10)
    })
  })
})
