import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { HomeScreen } from "../HomeScreen"
import { act, render } from "@testing-library/react-native"

it("renders correctly", async () => {
  const component = render(
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>,
  )

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100))
  })

  expect(component.toJSON()).toMatchSnapshot()
})
