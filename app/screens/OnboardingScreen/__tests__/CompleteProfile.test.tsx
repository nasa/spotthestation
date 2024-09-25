import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { CompleteProfileScreen } from "../CompleteProfileScreen"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(
    <NavigationContainer>
      <CompleteProfileScreen />
    </NavigationContainer>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
