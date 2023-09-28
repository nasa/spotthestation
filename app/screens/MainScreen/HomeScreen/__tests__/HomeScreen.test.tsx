/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { HomeScreen } from "../HomeScreen"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
