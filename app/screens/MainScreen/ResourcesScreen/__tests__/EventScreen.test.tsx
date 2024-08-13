import React from "react"
import { WebScreen } from "../WebScreen"
import { NavigationContainer } from "@react-navigation/native"
import { render } from "@testing-library/react-native"

jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useRoute: () => ({
    params: {
      id: 1,
      item: {},
    },
  }),
}))
it("renders correctly", () => {
  const tree = render(
    <NavigationContainer>
      <WebScreen />
    </NavigationContainer>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
