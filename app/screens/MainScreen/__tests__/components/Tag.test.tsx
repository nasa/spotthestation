/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from "react-test-renderer"
import { Tag } from "../../components/Tag"

it("renders correctly", () => {
  const tree = renderer.create(<Tag title="tag" />).toJSON()
  expect(tree).toMatchSnapshot()
})
