/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react"
import { View, Text } from "react-native"
import { ExpandContainer } from "../../components/ExpandContainer"
import { fireEvent, render } from "@testing-library/react-native"

describe("ExpandContainer", () => {
  it("renders correctly", () => {
    const component = render(
      <ExpandContainer title="homeScreen.selectLocation.nearby">
        <View>
          <Text>Test content</Text>
        </View>
      </ExpandContainer>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("toggles expanded state when the chevron icon is pressed", async () => {
    const { findByRole } = render(
      <ExpandContainer title="homeScreen.selectLocation.nearby">
        <View>
          <Text>Test content</Text>
        </View>
      </ExpandContainer>,
    )
    const chevronIcon = await findByRole("imagebutton")
    fireEvent.press(chevronIcon)
  })
})
