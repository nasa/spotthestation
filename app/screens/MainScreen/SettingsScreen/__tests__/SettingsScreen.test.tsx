import React, { Component } from "react"
import { useNavigation } from "@react-navigation/native"
import { SettingsScreen } from "../SettingsScreen"
import { fireEvent, render } from "@testing-library/react-native"
import { jest } from "@jest/globals"

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
  createNavigationContainerRef: jest.fn(),
}))

jest.mock("mobx-react-lite", () => ({
  observer: (component: Component) => component,
}))

jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({ top: 20 }),
}))

describe("SettingsScreen", () => {
  const mockNavigation = {
    navigate: jest.fn(),
  }

  beforeEach(() => {
    jest.mocked(useNavigation).mockReturnValue(mockNavigation)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test("renders correctly", () => {
    const tree = render(<SettingsScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("renders header correctly", () => {
    const { getByText } = render(<SettingsScreen />)
    const header = getByText("settings.header undefined")
    expect(header).toBeTruthy()
  })

  test("navigates to LocationSettings screen when location settings item is pressed", () => {
    const { getByText } = render(<SettingsScreen />)
    const locationSettingsItem = getByText("settings.locationSettings undefined")
    fireEvent.press(locationSettingsItem)
    expect(mockNavigation.navigate).toHaveBeenCalledWith("SettingsScreens", {
      screen: "LocationSettings",
    })
  })
})
