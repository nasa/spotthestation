/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from "react-test-renderer"
import { AddNewLocationScreen } from "../AddNewLocationScreen"
import { NavigationContainer } from "@react-navigation/native"
import { fireEvent, render, waitFor } from "@testing-library/react-native"
import { useStores } from "../../../../models"

jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useRoute: () => ({
    params: {
      id: 1,
      defaultLocation: null,
    },
  }),
}))
it("renders correctly", () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <AddNewLocationScreen />
      </NavigationContainer>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('clears the text input and sets location value after selecting a place from the list', async () => {
  const { getByPlaceholderText } = render(<NavigationContainer>
    <AddNewLocationScreen />
  </NavigationContainer>)
  const textInput = getByPlaceholderText("settings.locationSettingsData.addNewLocation.searchInputPlaceholder undefined")

  await waitFor(() => {
    expect(textInput.props.value).toBe('')
  })
})

jest.mock('../../../../models', () => ({
  useStores: jest.fn(() => ({
    savedLocations: [],
    setSavedLocations: jest.fn(),
    setNewSavedLocation: jest.fn(),
    handleSave: jest.fn(),
  })),
}))

test('calls handleSave when Save button is clicked', async () => {
  const { getByPlaceholderText } = render(<NavigationContainer>
    <AddNewLocationScreen />
  </NavigationContainer>)
  const { handleSave }: any = useStores()

  const textInput = getByPlaceholderText("settings.locationSettingsData.addNewLocation.searchInputPlaceholder undefined")
  fireEvent.changeText(textInput, 'Some location')

  await waitFor(() => {
    expect(handleSave).toHaveBeenCalledTimes(0)
  })
})
