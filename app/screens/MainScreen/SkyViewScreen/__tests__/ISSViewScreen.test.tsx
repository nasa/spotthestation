import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { ISSViewScreen } from "../ISSViewScreen"
import { act, render } from "@testing-library/react-native"
import { TabNavigatorContext } from "../../../../navigators"
jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useRoute: () => ({
    params: {
      id: 1,
    },
  }),
}))
it("renders correctly", async () => {
  const component = render(
    <TabNavigatorContext.Provider
      value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
    >
      <NavigationContainer>
        <ISSViewScreen />
      </NavigationContainer>
    </TabNavigatorContext.Provider>,
  )

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100))
  })

  expect(component.toJSON()).toMatchSnapshot()
})
