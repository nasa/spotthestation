/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from "react-test-renderer"
import { HomeHeader } from "../HomeScreen/HomeHeader"

it("renders correctly", () => {
  const tree = renderer
    .create(
      <HomeHeader
        user={{ firstName: "John", address: "Continental" }}
        onLocationPress={() => ({})}
        onSightingsPress={() => ({})}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
