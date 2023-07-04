/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import renderer from "react-test-renderer"
import { CompleteProfile } from "../CompleteProfile"

it("renders correctly", () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <CompleteProfile />
      </NavigationContainer>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
