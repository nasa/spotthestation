/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { AddNewLocationMapScreen } from "../AddNewLocationMapScreen"
import { NavigationContainer } from "@react-navigation/native"
import { fireEvent, render, waitFor } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(
    <NavigationContainer>
      <AddNewLocationMapScreen />
    </NavigationContainer>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test("the text input", async () => {
  const { getByPlaceholderText } = render(
    <NavigationContainer>
      <AddNewLocationMapScreen />
    </NavigationContainer>,
  )

  const textInput = getByPlaceholderText(
    "settings.locationSettingsData.addNewLocation.searchInputPlaceholder undefined",
  )
  fireEvent.changeText(textInput, "Some location")

  await waitFor(() => {
    expect(textInput.props.value).toBe("Some location")
  })
})

test("closes the modal window after clicking the Close button", async () => {
  const { getByPlaceholderText, queryByText } = render(
    <NavigationContainer>
      <AddNewLocationMapScreen />
    </NavigationContainer>,
  )

  const textInput = getByPlaceholderText(
    "settings.locationSettingsData.addNewLocation.searchInputPlaceholder undefined",
  )
  fireEvent.changeText(textInput, "Some location")

  await waitFor(() => {
    expect(queryByText("Confirm Location")).toBeNull()
  })
})
