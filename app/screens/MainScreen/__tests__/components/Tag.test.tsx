/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from "react-test-renderer"
import { Tag } from "../../components/Tag"
import { render } from "@testing-library/react-native"
import { scale, colors, typography, fontSizes, lineHeights } from "../../../../theme"

describe("Tag component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Tag title="tag" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly with the 'launch' title", () => {
    const { root } = render(<Tag title="launch" />)
    expect(root).toBeDefined()
    expect(root.props.style).toEqual([tagStyles.$container, tagStyles.$launch])
  })

  it("renders correctly with the 'live' title", () => {
    const { root } = render(<Tag title="live" />)
    expect(root).toBeDefined()
    expect(root.props.style).toEqual([tagStyles.$container, tagStyles.$live])
  })

  it("renders correctly with the 'docking' title", () => {
    const { root } = render(<Tag title="docking" />)
    expect(root).toBeDefined()
    expect(root.props.style).toEqual([tagStyles.$container, tagStyles.$docking])
  })

  it("renders correctly with the 'nasa history' title", () => {
    const { root } = render(<Tag title="nasa history" />)
    expect(root).toBeDefined()
    expect(root.props.style).toEqual([tagStyles.$container, tagStyles.$history])
  })

  it("renders correctly with an unknown title", () => {
    const { root } = render(<Tag title="unknown" />)
    expect(root).toBeDefined()
    expect(root.props.style).toEqual([tagStyles.$container, {}])
  })
})

// Mocked styles
const tagStyles = {
  $container: {
    height: scale(23),
    borderRadius: scale(4),
    overflow: "hidden",
    paddingHorizontal: scale(7),
    paddingVertical: scale(4),
    backgroundColor: colors.palette.neutral250,
    fontFamily: typography.primary?.medium,
    fontSize: fontSizes[12],
    lineHeight: lineHeights[15],
    color: colors.palette.neutral350,
    marginRight: scale(10),
  },
  $launch: {
    backgroundColor: colors.palette.green,
  },
  $live: {
    backgroundColor: colors.palette.nasaRed,
    color: colors.palette.neutral100,
  },
  $history: {
    backgroundColor: colors.palette.buttonBlue,
    color: colors.palette.neutral100,
  },
  $docking: {
    backgroundColor: colors.palette.nasaOrange,
  },
}

export default Tag
