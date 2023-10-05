/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { ISSNowScreen } from "../ISSNowScreen"
import { render } from "@testing-library/react-native"
import MockDate from "mockdate"
jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useRoute: () => ({
    params: {
      id: 1,
      title: "Mock Title",
      toggleBottomTabs: jest.fn(),
      toggleIsLandscape: jest.fn(),
    },
  }),
}))

describe("ISSNowScreen", () => {
  beforeEach(() => {
    MockDate.set("12-12-2012 10:10:10")
  })

  afterEach(() => {
    MockDate.reset()
  })

  it("renders correctly", () => {
    const tree = render(
      <NavigationContainer>
        <ISSNowScreen />
      </NavigationContainer>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
