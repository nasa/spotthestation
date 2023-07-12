/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from "react-test-renderer"
import { Tag } from "../../components/Tag"
import { render } from "@testing-library/react-native"

describe("Tag component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Tag title="tag" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly with the 'launch' title", () => {
    const { root } = render(<Tag title="launch" />)
    expect(root).toBeDefined()
  })

  it("renders correctly with the 'live' title", () => {
    const { root } = render(<Tag title="live" />)
    expect(root).toBeDefined()
  })

  it("renders correctly with the 'docking' title", () => {
    const { root } = render(<Tag title="docking" />)
    expect(root).toBeDefined()
  })

  it("renders correctly with the 'nasa history' title", () => {
    const { root } = render(<Tag title="nasa history" />)
    expect(root).toBeDefined()
  })

  it("renders correctly with an unknown title", () => {
    const { root } = render(<Tag title="unknown" />)
    expect(root).toBeDefined()
  })
})

export default Tag
