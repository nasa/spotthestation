/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { SignupLocation } from "../SignupLocation"
import { render, fireEvent } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(
    <NavigationContainer>
      <SignupLocation
        value={{
          title: "John",
          subtitle: "Wick",
          location: { lat: 0, lng: 0 },
        }}
        onAction={() => ({})}
        onValueChange={() => ({})}
      />
    </NavigationContainer>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

describe("SignupLocation", () => {
  const mockValue = {
    title: "Washington",
    subtitle: "Washington, D.C., United States",
    location: { lat: 38.89511, lng: -77.03637 },
  }

  it("renders start state correctly", () => {
    const { getByText } = render(
      <SignupLocation value={mockValue} onValueChange={jest.fn()} onAction={jest.fn()} />,
    )

    expect(getByText("onboarding.completeProfile.location.title undefined")).toBeTruthy()
  })

  // test("renders detecting state correctly", () => {
  //   const { getByLabelText, getByText } = render(
  //     <SignupLocation value={mockValue} onValueChange={jest.fn()} onAction={jest.fn()} />
  //   )

  //   const detectButton = getByLabelText("detect button")
  //   fireEvent.press(detectButton)

  //   expect(getByLabelText("detecting")).toBeTruthy()
  //   expect(getByText("Loading")).toBeTruthy()
  // })

  test("renders result state correctly", () => {
    const { getByLabelText, getByRole, getByText } = render(
      <SignupLocation value={mockValue} onValueChange={jest.fn()} onAction={jest.fn()} />,
    )

    expect(getByLabelText("address")).toBeTruthy()
    expect(getByText("Washington")).toBeTruthy()
    expect(getByRole("button", { name: "Done button" })).toBeTruthy()
  })

  // test("calls onValueChange when selecting a location", () => {
  //   const mockOnValueChange = jest.fn()
  //   const { getByLabelText } = render(
  //     <SignupLocation value={mockValue} onValueChange={mockOnValueChange} onAction={jest.fn()} />
  //   )

  //   const selectLocationInput = getByLabelText("location subtitle")
  //   fireEvent.changeText(selectLocationInput, "New York")
  //   fireEvent.press(selectLocationInput)

  //   // You may need to wait for the results to appear before making assertions on them
  //   // Example: await waitFor(() => getByText("New York"));

  //   // Assert on the expected behavior
  //   expect(mockOnValueChange).toHaveBeenCalledTimes(1)
  //   expect(mockOnValueChange).toHaveBeenCalledWith({
  //     title: "New York",
  //     subtitle: "New York, United States",
  //     location: expect.any(Object),
  //   })
  // })

  test("calls onAction when Done button is pressed", () => {
    const mockOnAction = jest.fn()
    const { getByText } = render(
      <SignupLocation value={mockValue} onValueChange={jest.fn()} onAction={mockOnAction} />,
    )

    const doneButton = getByText("onboarding.completeProfile.location.doneButton undefined")
    fireEvent.press(doneButton)

    expect(mockOnAction).toHaveBeenCalledTimes(1)
  })

  // Add more test cases as needed
})
