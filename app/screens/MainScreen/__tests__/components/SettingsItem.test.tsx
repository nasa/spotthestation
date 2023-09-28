/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { SettingsItem } from "../../components/SettingsItem"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(<SettingsItem title="settings.locationSettings" icon="book" />).toJSON()
  expect(tree).toMatchSnapshot()
})
