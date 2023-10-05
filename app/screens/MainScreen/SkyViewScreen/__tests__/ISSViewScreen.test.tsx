/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { ISSViewScreen } from "../ISSViewScreen"
import { act, render } from "@testing-library/react-native"
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
it("renders correctly", async () => {
  const component = render(
    <NavigationContainer>
      <ISSViewScreen />
    </NavigationContainer>,
  )

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100))
  })

  expect(component.toJSON()).toMatchSnapshot()
})
