import { render, userEvent } from "@testing-library/react-native"
import React from "react"
import { VideosScreen } from "../VideosScreen"

const mockNavigate = jest.fn()
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(() => ({ navigate: mockNavigate })),
  createNavigationContainerRef: jest.fn(),
}))

describe("VideosScreen", () => {
  it("renders correctly", () => {
    const tree = render(<VideosScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("navigates to web view on item click", async () => {
    const tree = render(<VideosScreen />)

    const item = tree.queryAllByAccessibilityHint("pressable feed item")[0]
    await userEvent.press(item)
    expect(mockNavigate).toBeCalledWith("ResourcesScreens", {
      screen: "Web",
      url: "https://www.youtube.com/playlist?list=PLTXQuaxXBKKwtqw9fmVw9YnMKxz6FcmWf",
    })
  })
})
