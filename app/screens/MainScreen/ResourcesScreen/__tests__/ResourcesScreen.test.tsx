/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { Resources } from "../ResourcesScreen"
import { NavigationContainer } from "@react-navigation/native"
import { render } from "@testing-library/react-native"

jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useRoute: () => ({
    params: {
      id: 1,
      toggleBottomTabs: jest.fn(),
    },
  }),
}))
it("renders correctly", () => {
  const tree = render(
    <NavigationContainer>
      <Resources />
    </NavigationContainer>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
