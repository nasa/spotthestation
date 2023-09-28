/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { NasaLogo } from "../../components/NasaLogo"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(<NasaLogo />).toJSON()
  expect(tree).toMatchSnapshot()
})
