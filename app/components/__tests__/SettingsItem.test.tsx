import React from "react"
import { SettingsItem } from "../SettingsItem"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(<SettingsItem title="settings.locationSettings" icon="settings" />).toJSON()
  expect(tree).toMatchSnapshot()
})
