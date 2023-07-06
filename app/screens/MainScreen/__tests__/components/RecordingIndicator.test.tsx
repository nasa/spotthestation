/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react"
import renderer from "react-test-renderer"
import { View, Text } from "react-native"
import { RecordingIndicator } from "../../components/RecordingIndicator"
import { colors, fontSizes, lineHeights, scale } from "../../../../theme"

describe("RecordingIndicator", () => {
  it("renders correctly", () => {
    const component = renderer.create(<RecordingIndicator recordedSeconds={120} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("displays the correct time format", () => {
    const component = renderer.create(<RecordingIndicator recordedSeconds={3661} />)
    const textComponent = component.root.findByType(Text)
    expect(textComponent.props.children).toEqual(["01", ":", "01", ":", "01"])
  })

  it("displays the correct time format", () => {
    const component = renderer.create(<RecordingIndicator recordedSeconds={36671} />)
    const textComponent = component.root.findByType(Text)
    expect(textComponent.props.children).toEqual([10, ":", 11, ":", 11])
  })

  it("applies the correct styles", () => {
    const component = renderer.create(<RecordingIndicator recordedSeconds={60} />)
    const viewComponent = component.root.findByType(View)
    const textComponent = component.root.findByType(Text)

    expect(viewComponent.props.style).toEqual({
      marginTop: scale(20),
      backgroundColor: colors.palette.nasaRed,
      paddingTop: scale(5),
      paddingBottom: scale(3),
      paddingHorizontal: scale(5),
      borderRadius: scale(4),
    })

    expect(textComponent.props.style).toEqual({
      fontSize: fontSizes[16],
      lineHeight: lineHeights[16],
      textAlign: "center",
      color: colors.palette.neutral250,
    })
  })
})
