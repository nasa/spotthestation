/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { HomeHeader } from "../HomeScreen/HomeHeader"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(
    <HomeHeader
      user={{ firstName: "John", address: "Continental" }}
      onLocationPress={() => ({})}
      onSightingsPress={() => ({})}
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
