/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react"
import { ListItem } from "../../components/ListItem"
import { render, fireEvent } from "@testing-library/react-native"

describe("ListItem", () => {
  it("renders correctly", () => {
    const component = render(
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
    const component = render(
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

    fireEvent.press(component.root)
    expect(onPressMock).toHaveBeenCalled()
  })

  it("calls onToggle callback when the switch is toggled", () => {
    const onToggleMock = jest.fn()
    const component = render(
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
})
