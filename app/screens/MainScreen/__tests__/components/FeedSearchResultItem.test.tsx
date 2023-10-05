/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { FeedSearchResultItem } from "../../components/FeedSearchResultItem"
import { render, fireEvent } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(<FeedSearchResultItem title="title" image="test.jpg" type="" />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe("FeedSearchResultItem", () => {
  const mockOnPress = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders correctly", () => {
    const tree = render(<FeedSearchResultItem title="title" image="test.jpg" type="" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("calls onPress when the item is pressed", () => {
    const { getByLabelText } = render(
      <FeedSearchResultItem
        title="Sample Title"
        image="https://example.com/sample-image.jpg"
        type="Sample Type"
        tags={["Tag1", "Tag2"]}
        onPress={mockOnPress}
      />,
    )

    const pressableItem = getByLabelText("pressable feed item")
    fireEvent.press(pressableItem)

    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })
})
