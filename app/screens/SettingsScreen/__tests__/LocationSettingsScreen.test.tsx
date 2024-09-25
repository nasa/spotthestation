import React from "react"
import { LocationSettingsScreen } from "../LocationSettingsScreen"
import { NavigationContainer } from "@react-navigation/native"
import { render } from "@testing-library/react-native"

jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useRoute: () => ({
    params: {
      id: 1,
      defaultLocation: null,
    },
  }),
}))
it("renders correctly", () => {
  const tree = render(
    <NavigationContainer>
      <LocationSettingsScreen />
    </NavigationContainer>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
