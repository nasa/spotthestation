import { render } from "@testing-library/react-native"
import React from "react"
import { LiveScreen } from "../LiveScreen"

const mockNavigate = jest.fn()
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(() => ({ navigate: mockNavigate })),
  createNavigationContainerRef: jest.fn(),
}))

describe("LiveScreen", () => {
  it("renders correctly", () => {
    const tree = render(<LiveScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
