/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { SettingsScreen } from "../SettingsScreen"
import { fireEvent, render } from "@testing-library/react-native"

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
  createNavigationContainerRef: jest.fn(),
}))

jest.mock("mobx-react-lite", () => ({
  observer: (component) => component,
}))

jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({ top: 20 }),
}))

describe("SettingsScreen", () => {
  const mockNavigation = {
    navigate: jest.fn(),
  }

  beforeEach(() => {
    ;(useNavigation as any).mockReturnValue(mockNavigation)
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
    ;(fireEvent as any).press(locationSettingsItem)
    expect(mockNavigation.navigate).toHaveBeenCalledWith("SettingsScreens", {
      screen: "LocationSettings",
    })
  })
})
