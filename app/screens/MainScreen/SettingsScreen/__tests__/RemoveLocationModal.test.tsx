/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { RemoveLocationModal } from "../RemoveLocationModal"
import { LocationType } from "../../../OnboardingScreen/SignupLocation"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(<RemoveLocationModal location={{} as LocationType} />).toJSON()
  expect(tree).toMatchSnapshot()
})
