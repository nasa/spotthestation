import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { SignupNotificationSettings } from "../SignupNotificationSettings"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(
    <NavigationContainer>
      <SignupNotificationSettings value={true} onAction={() => ({})} onValueChange={() => ({})} />
    </NavigationContainer>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
