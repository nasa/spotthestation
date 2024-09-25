import React from "react"
import { InitLoaderModal } from "../modals/InitLoaderModal"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(<InitLoaderModal />).toJSON()
  expect(tree).toMatchSnapshot()
})
