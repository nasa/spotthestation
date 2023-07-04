/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import renderer from "react-test-renderer"
import { SignupNotificationSettings } from "../SignupNotificationSettings"

it("renders correctly", () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <SignupNotificationSettings value={true} onAction={() => ({})} onValueChange={() => ({})} />
      </NavigationContainer>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
