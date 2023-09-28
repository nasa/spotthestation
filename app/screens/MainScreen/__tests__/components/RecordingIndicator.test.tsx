/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react"
import { Text } from "react-native"
import { RecordingIndicator } from "../../components/RecordingIndicator"
import { render } from "@testing-library/react-native"

describe("RecordingIndicator", () => {
  it("renders correctly", () => {
    const component = render(<RecordingIndicator recordedSeconds={120} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("displays the correct time format", () => {
    const component = render(<RecordingIndicator recordedSeconds={3661} />)
    const textComponent = component.root.findByType(Text)
    expect(textComponent.props.children).toEqual(["01", ":", "01", ":", "01"])
  })

  it("displays the correct time format", () => {
    const component = render(<RecordingIndicator recordedSeconds={36671} />)
    const textComponent = component.root.findByType(Text)
    expect(textComponent.props.children).toEqual([10, ":", 11, ":", 11])
  })
})
