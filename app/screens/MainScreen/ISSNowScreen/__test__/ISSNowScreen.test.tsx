import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { ISSNowScreen } from "../ISSNowScreen"
import { render } from "@testing-library/react-native"
import MockDate from "mockdate"
import { TabNavigatorContext } from "../../../../navigators"
jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useRoute: () => ({
    params: {
      id: 1,
      title: "Mock Title",
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
      <TabNavigatorContext.Provider
        value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
      >
        <NavigationContainer>
          <ISSNowScreen />
        </NavigationContainer>
      </TabNavigatorContext.Provider>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
