/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react"
import renderer from "react-test-renderer"
import { View } from "react-native"
import { PermissionsModal } from "../../components/PermissionsModal"
import { normalizeHeight } from "../../../../utils/normalizeHeight"
import { colors, scale } from "../../../../theme"

describe("PermissionsModal", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <PermissionsModal body="Test body" onClose={jest.fn()} onSuccess={jest.fn()} />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("calls onClose callback when close button is pressed", () => {
    const onCloseMock = jest.fn()
    const component = renderer.create(
      <PermissionsModal body="Test body" onClose={onCloseMock} onSuccess={jest.fn()} />,
    )
    const closeButton = component.root.findByProps({ accessibilityLabel: "x button" })
    closeButton.props.onPress()
    expect(onCloseMock).toHaveBeenCalled()
  })

  it("calls onSuccess callback when open Settings button is pressed", () => {
    const onSuccessMock = jest.fn()
    const component = renderer.create(
      <PermissionsModal body="Test body" onClose={jest.fn()} onSuccess={onSuccessMock} />,
    )
    const openSettingsButton = component.root.findByProps({
      accessibilityLabel: "open Settings button",
    })
    openSettingsButton.props.onPress()
    expect(onSuccessMock).toHaveBeenCalled()
  })

  it("applies the correct styles", () => {
    const component = renderer.create(
      <PermissionsModal body="Test body" onClose={jest.fn()} onSuccess={jest.fn()} />,
    )
    const viewComponent = component.root.findByType(View)

    expect(viewComponent.props.style).toEqual({
      backgroundColor: colors.palette.buttonBlue,
      borderRadius: scale(16),
      alignItems: "center",
      paddingVertical: 36,
      paddingHorizontal: 30,
      width: "100%",
      alignSelf: "center",
      marginTop: normalizeHeight(0.28),
    })
  })
})
