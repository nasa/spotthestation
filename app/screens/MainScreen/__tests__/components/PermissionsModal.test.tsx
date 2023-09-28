/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react"
import { PermissionsModal } from "../../components/PermissionsModal"
import { render } from "@testing-library/react-native"

describe("PermissionsModal", () => {
  it("renders correctly", () => {
    const component = render(
      <PermissionsModal body="Test body" onClose={jest.fn()} onSuccess={jest.fn()} />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("calls onClose callback when close button is pressed", () => {
    const onCloseMock = jest.fn()
    const component = render(
      <PermissionsModal body="Test body" onClose={onCloseMock} onSuccess={jest.fn()} />,
    )
    const closeButton = component.root.findByProps({ accessibilityLabel: "x button" })
    closeButton.props.onPress()
    expect(onCloseMock).toHaveBeenCalled()
  })

  it("calls onSuccess callback when open Settings button is pressed", () => {
    const onSuccessMock = jest.fn()
    const component = render(
      <PermissionsModal body="Test body" onClose={jest.fn()} onSuccess={onSuccessMock} />,
    )
    const openSettingsButton = component.root.findByProps({
      accessibilityLabel: "open Settings button",
    })
    openSettingsButton.props.onPress()
    expect(onSuccessMock).toHaveBeenCalled()
  })
})
