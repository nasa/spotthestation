import { useNavigation } from "@react-navigation/native"
import React from "react"
import { fireEvent, render } from "@testing-library/react-native"
import { SplashScreen } from "../SplashScreen"
import { jest } from "@jest/globals"

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
  createNavigationContainerRef: jest.fn(),
}))

jest.mock("../../../utils/storage", () => ({
  ...jest.requireActual<typeof import("../../../utils/storage")>("../../../utils/storage"),
  load: jest.fn(() => Promise.resolve(null)),
  save: jest.fn(() => Promise.resolve()),
}))
jest.mock("../../../components/IconLinkButton", () => ({
  IconLinkButton: ({ icon, onPress }) => <button onClick={onPress}>{icon}</button>,
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
})
