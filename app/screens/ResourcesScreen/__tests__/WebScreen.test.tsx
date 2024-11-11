import { render } from "@testing-library/react-native"
import React from "react"
import { WebScreen } from "../WebScreen"

const mockNavigate = jest.fn()
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(() => ({ navigate: mockNavigate })),
  useRoute: jest.fn().mockReturnValue({ params: { url: "http://example.com" } }),
  createNavigationContainerRef: jest.fn(),
}))

describe("WebScreen", () => {
  it("renders correctly", () => {
    const tree = render(<WebScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
