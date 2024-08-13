import React from "react"
import { DetailsScreen } from "../DetailsScreen"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(<DetailsScreen />).toJSON()
  expect(tree).toMatchSnapshot()
})
