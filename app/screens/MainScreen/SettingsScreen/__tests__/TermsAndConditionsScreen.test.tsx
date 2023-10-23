import React from "react"
import { TermsAndConditionsScreen } from "../TermsAndConditionsScreen"
import { NavigationContainer } from "@react-navigation/native"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(
    <NavigationContainer>
      <TermsAndConditionsScreen />
    </NavigationContainer>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
