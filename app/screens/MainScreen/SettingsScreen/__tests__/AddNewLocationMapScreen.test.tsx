/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from "react-test-renderer"
import { AddNewLocationMapScreen } from "../AddNewLocationMapScreen"
import { NavigationContainer } from "@react-navigation/native"

it("renders correctly", () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <AddNewLocationMapScreen />
      </NavigationContainer>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
