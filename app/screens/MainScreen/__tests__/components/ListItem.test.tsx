/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react"
import renderer from "react-test-renderer"
import { View, Pressable } from "react-native"
import { ListItem } from "../../components/ListItem"
import { scale } from "../../../../theme"

describe("ListItem", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <ListItem
        title="Test title"
        subtitle="Test subtitle"
        icon="bell"
        onPress={jest.fn()}
        onToggle={jest.fn()}
      />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("calls onPress callback when the item is pressed", () => {
    const onPressMock = jest.fn()
    const component = renderer.create(
      <ListItem
        title="Test title"
        subtitle="Test subtitle"
        icon="bell"
        ctaTx="homeScreen.selectLocation.cta"
        onPress={onPressMock}
        onToggle={jest.fn()}
        selected
        editable
        onEdit={jest.fn()}
        onDelete={jest.fn()}
        secondIcon={{ icon: "moon", color: "red" }}
      />,
    )
    const listItem = component.root.findByType(Pressable)
    listItem.props.onPress()
    expect(onPressMock).toHaveBeenCalled()
  })

  it("calls onToggle callback when the switch is toggled", () => {
    const onToggleMock = jest.fn()
    const component = renderer.create(
      <ListItem
        title="Test title"
        subtitle="Test subtitle"
        icon="bell"
        onPress={jest.fn()}
        onToggle={onToggleMock}
        withSwitch
      />,
    )
    const toggleSwitch = component.root.findByProps({ accessibilityLabel: "switch button" })
    toggleSwitch.props.onValueChange(true)
    expect(onToggleMock).toHaveBeenCalledWith(true)
  })

  it("applies the correct styles", () => {
    const component = renderer.create(
      <ListItem
        title="Test title"
        subtitle="Test subtitle"
        icon="bell"
        onPress={jest.fn()}
        onToggle={jest.fn()}
      />,
    )
    const viewComponent = component.root.findByType(View)

    expect(viewComponent.props.style).toEqual({
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      paddingTop: scale(16),
    })
  })
})
