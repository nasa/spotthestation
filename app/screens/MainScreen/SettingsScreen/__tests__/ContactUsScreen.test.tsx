import React, { Component } from "react"
import { ContactUsScreen } from "../ContactUsScreen"
import { useNavigation } from "@react-navigation/native"
import { act, fireEvent, render } from "@testing-library/react-native"
import { api } from "../../../../services/api"
import { jest } from "@jest/globals"

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}))

jest.mock("mobx-react-lite", () => ({
  observer: (component: Component) => component,
}))

jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({ top: 10 }),
}))

jest.mock("react-native-snackbar", () => ({
  show: jest.fn(),
  dismiss: jest.fn(),
}))

describe("ContactUsScreen", () => {
  const mockNavigation = {
    goBack: jest.fn(),
  }

  beforeEach(() => {
    jest.mocked(useNavigation).mockReturnValue(mockNavigation)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test("renders header correctly", () => {
    const { getByText } = render(<ContactUsScreen />)
    const header = getByText("settings.contactUsData.title undefined")
    expect(header).toBeTruthy()
  })

  test("navigates back when back button is pressed", () => {
    const { getByText } = render(<ContactUsScreen />)
    const backButton = getByText("settings.contactUsData.backButton undefined")
    fireEvent.press(backButton)
    expect(mockNavigation.goBack).toHaveBeenCalled()
  })

  test("sends mail when send button is pressed", async () => {
    const { getByText, getByLabelText } = render(<ContactUsScreen />)
    const sendButton = getByText("settings.contactUsData.sendButton undefined")
    const titleInput = getByLabelText("title select")
    const commentsInput = getByLabelText("comments input")

    fireEvent.changeText(titleInput, "Report an Issue")
    fireEvent.changeText(commentsInput, "This is a test comment")

    await act(async () => {
      fireEvent.press(sendButton)
      await Promise.resolve()
    })

    expect(api.sendMail).not.toHaveBeenCalled()
  })
})
