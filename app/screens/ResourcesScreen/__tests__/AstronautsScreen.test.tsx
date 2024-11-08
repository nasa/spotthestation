import { render, userEvent, waitFor } from "@testing-library/react-native"
import { AstronautsScreen } from "../AstonautsScreen"
import { api } from "../../../services/api"
import React from "react"
import mockAstronauts from "../../../../test/mockAstronauts.json"

const mockNavigate = jest.fn()
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(() => ({ navigate: mockNavigate })),
  createNavigationContainerRef: jest.fn(),
}))

describe("AstronautsScreen", () => {
  it("renders correctly", async () => {
    let tree: ReturnType<typeof render>
    await waitFor(() => {
      tree = render(<AstronautsScreen />)
    })
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders correctly with list of astronauts", async () => {
    ;(api.getAstronauts as jest.Mock).mockResolvedValue({ ok: true, data: mockAstronauts })
    let tree: ReturnType<typeof render>
    await waitFor(() => {
      tree = render(<AstronautsScreen />)
    })

    await waitFor(() => {
      expect(tree.queryAllByAccessibilityHint("pressable feed item")).toHaveLength(
        mockAstronauts.length,
      )
    })

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("navigates to web view on item click", async () => {
    ;(api.getAstronauts as jest.Mock).mockResolvedValue({ ok: true, data: mockAstronauts })
    let tree: ReturnType<typeof render>
    await waitFor(() => {
      tree = render(<AstronautsScreen />)
    })

    await waitFor(() => {
      expect(tree.queryAllByAccessibilityHint("pressable feed item")).toHaveLength(
        mockAstronauts.length,
      )
    })

    const item = tree.queryAllByAccessibilityHint("pressable feed item")[0]
    await userEvent.press(item)
    expect(mockNavigate).toBeCalledWith("ResourcesScreens", {
      screen: "Web",
      url: "https://www.nasa.gov/humans-in-space/astronauts/matthew-dominick/",
    })
  })
})
