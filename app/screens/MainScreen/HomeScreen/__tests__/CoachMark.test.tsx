/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { CoachMark } from "../CoachMark"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(
    <CoachMark
      icon="mapPinOutlined"
      title="homeScreen.coachMarks.locationTitle"
      bodyText="homeScreen.coachMarks.locationData"
      style={$style}
      stage={0}
      onPressFinish={jest.fn()}
      onPressNext={jest.fn()}
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

const $style = {
  marginTop: 18,
}
