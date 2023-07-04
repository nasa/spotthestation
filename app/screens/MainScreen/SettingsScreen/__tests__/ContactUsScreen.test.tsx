/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from "react-test-renderer"
import { ContactUsScreen } from "../ContactUsScreen"
import { NavigationContainer } from "@react-navigation/native"

it("renders correctly", () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <ContactUsScreen />
      </NavigationContainer>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
