import React from "react"
import { RemoveLocationModal } from "../modals/RemoveLocationModal"
import { render } from "@testing-library/react-native"
import { LocationType } from "../../services/api"

it("renders correctly", () => {
  const tree = render(<RemoveLocationModal location={{} as LocationType} />).toJSON()
  expect(tree).toMatchSnapshot()
})
