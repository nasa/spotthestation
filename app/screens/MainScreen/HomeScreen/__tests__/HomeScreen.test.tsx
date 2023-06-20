/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { NavigationContainer } from "@react-navigation/native"
import { HomeScreen } from '../HomeScreen'

it('renders correctly', () => {
  const tree = renderer
    .create(<NavigationContainer>
        <HomeScreen />
      </NavigationContainer>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
