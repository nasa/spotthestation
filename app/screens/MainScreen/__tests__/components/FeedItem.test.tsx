import React from "react"
import { FeedItem } from "../../components/FeedItem"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(<FeedItem title="title" image="test.jpg" tags={["tag"]} />).toJSON()
  expect(tree).toMatchSnapshot()
})
