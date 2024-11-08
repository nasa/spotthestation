import { render, userEvent } from "@testing-library/react-native"
import { AboutScreen } from "../AboutScreen"
import React from "react"

const mockNavigate = jest.fn()
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(() => ({ navigate: mockNavigate })),
  createNavigationContainerRef: jest.fn(),
}))

describe("AboutScreen", () => {
  it("renders correctly", () => {
    const tree = render(<AboutScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("navigates to web view on item click", async () => {
    const tree = render(<AboutScreen />)

    const item = tree.queryAllByAccessibilityHint("pressable feed item")[0]
    await userEvent.press(item)
    expect(mockNavigate).toBeCalledWith("ResourcesScreens", {
      screen: "Web",
      url: "https://www.nasa.gov/reference/international-space-station",
    })
  })
})
