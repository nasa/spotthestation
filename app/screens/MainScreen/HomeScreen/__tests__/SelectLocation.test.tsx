import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { SelectLocation } from "../SelectLocation"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(
    <NavigationContainer>
      <SelectLocation onClose={jest.fn()} />
    </NavigationContainer>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
