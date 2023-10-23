import React from "react"
import { Details } from "../Details"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(
    <Details
      issData={[
        {
          date: "12-12-2012",
          latitude: 0,
          longitude: 0,
          azimuth: 0,
          elevation: 0,
          altitude: 0,
        },
      ]}
      observer={[0, 0]}
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
