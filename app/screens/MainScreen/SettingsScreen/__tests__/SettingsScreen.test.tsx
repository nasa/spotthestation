/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { NavigationContainer } from "@react-navigation/native"
import { SettingsScreen } from "../SettingsScreen"

it('renders correctly', () => {
  const tree = renderer
    .create(<NavigationContainer>
        <SettingsScreen />
      </NavigationContainer>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})