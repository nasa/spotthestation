/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { ISSViewScreen } from "../ISSViewScreen"
import { render } from "@testing-library/react-native"
jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useRoute: () => ({
    params: {
      id: 1,
      toggleBottomTabs: jest.fn(),
      toggleIsLandscape: jest.fn(),
    },
  }),
}))
it("renders correctly", () => {
  const tree = render(
    <NavigationContainer>
      <ISSViewScreen />
    </NavigationContainer>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
