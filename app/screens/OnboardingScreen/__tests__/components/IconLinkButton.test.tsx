/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { IconLinkButton } from "../../components/IconLinkButton"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(<IconLinkButton icon="back" backgroundColor="red" />).toJSON()
  expect(tree).toMatchSnapshot()
})
