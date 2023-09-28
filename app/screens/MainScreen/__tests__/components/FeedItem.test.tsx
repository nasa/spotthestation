/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { FeedItem } from "../../components/FeedItem"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(<FeedItem title="title" image="" tags={["tag"]} />).toJSON()
  expect(tree).toMatchSnapshot()
})
