/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { CompleteProfile } from "../CompleteProfile"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(
    <NavigationContainer>
      <CompleteProfile />
    </NavigationContainer>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
