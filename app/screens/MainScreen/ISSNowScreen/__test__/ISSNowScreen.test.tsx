/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from "react-test-renderer"
import { NavigationContainer } from "@react-navigation/native"
import { ISSNowScreen } from "../ISSNowScreen"
jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useRoute: () => ({
    params: {
      id: 1,
      title: "Mock Title",
    },
  }),
}))
jest.useFakeTimers("modern").setSystemTime(new Date("12-12-2012 10:10:10"))
it("renders correctly", () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <ISSNowScreen />
      </NavigationContainer>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
