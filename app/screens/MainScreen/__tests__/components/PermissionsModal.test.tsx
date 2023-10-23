import React from "react"
import { PermissionsModal } from "../../components/PermissionsModal"
import { fireEvent, render } from "@testing-library/react-native"

describe("PermissionsModal", () => {
  it("renders correctly", () => {
    const component = render(
      <PermissionsModal body="Test body" onClose={jest.fn()} onSuccess={jest.fn()} />,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("calls onClose callback when close button is pressed", async () => {
    const onCloseMock = jest.fn()
    const component = render(
      <PermissionsModal body="Test body" onClose={onCloseMock} onSuccess={jest.fn()} />,
    )
    const closeButton = await component.findByLabelText("x button")
    fireEvent.press(closeButton)
    expect(onCloseMock).toHaveBeenCalled()
  })

  it("calls onSuccess callback when open Settings button is pressed", async () => {
    const onSuccessMock = jest.fn()
    const component = render(
      <PermissionsModal body="Test body" onClose={jest.fn()} onSuccess={onSuccessMock} />,
    )
    const openSettingsButton = await component.findByLabelText("open Settings button")

    fireEvent.press(openSettingsButton)
    expect(onSuccessMock).toHaveBeenCalled()
  })
})
