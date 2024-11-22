import { useNavigation } from "@react-navigation/native"
import React from "react"
import { fireEvent, render, waitFor } from "@testing-library/react-native"
import analytics from "@react-native-firebase/analytics"
import { SplashScreen } from "../SplashScreen"
import * as storage from "../../../utils/storage"
import { KEYS } from "../../../utils/storage"

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
  createNavigationContainerRef: jest.fn(),
}))

describe("Splash", () => {
  it("renders correctly", () => {
    const tree = render(<SplashScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("navigates to the next screen when Arrow right button is clicked", () => {
    const component = render(<SplashScreen />)
    const openSettingsButton = component.root.findByProps({
      icon: "back",
    })

    fireEvent.press(openSettingsButton)
    expect(useNavigation().navigate).not.toHaveBeenCalled()
  })

  it("sets user id in analytics", async () => {
    render(<SplashScreen />)
    await waitFor(() => {
      expect(analytics().setUserId).toBeCalled()
    })
  })

  it("uses existing user id in analytics", async () => {
    await storage.save(KEYS.USER_ID, "user-id")
    render(<SplashScreen />)
    await waitFor(() => {
      expect(analytics().setUserId).toBeCalledWith("user-id")
    })
  })
})
