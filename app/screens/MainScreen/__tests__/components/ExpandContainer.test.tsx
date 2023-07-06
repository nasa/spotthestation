/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react"
import renderer from "react-test-renderer"
import { View, Text } from "react-native"
import { ExpandContainer } from "../../components/ExpandContainer"
import { scale } from "../../../../theme"

describe("ExpandContainer", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <ExpandContainer title="homeScreen.selectLocation.nearby">
        <View>
          <Text>Test content</Text>
        </View>
      </ExpandContainer>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("toggles expanded state when the chevron icon is pressed", () => {
    const component = renderer.create(
      <ExpandContainer title="homeScreen.selectLocation.nearby">
        <View>
          <Text>Test content</Text>
        </View>
      </ExpandContainer>,
    )
    const chevronIcon = component.root.findByProps({ icon: "chevronDown" })
    chevronIcon.props.onPress()
  })

  it("applies the correct styles", () => {
    const component = renderer.create(
      <ExpandContainer title="homeScreen.selectLocation.nearby" itemsCount={3} actionTitle="Action">
        <View>
          <Text>Test content</Text>
        </View>
      </ExpandContainer>,
    )
    const viewComponent = component.root.findByType(View)

    expect(viewComponent.props.style).toEqual([
      {
        width: "100%",
        marginTop: scale(36),
      },
      undefined,
    ])
  })
})
