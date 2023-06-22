/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { Resources } from '../ResourcesScreen'
import { NavigationContainer } from "@react-navigation/native"

jest.mock('@react-navigation/native', () => ({
  ...Object.assign({}, jest.requireActual('@react-navigation/native')),
  useRoute: () => 
  ({
    params: {
      id: 1,
      toggleBottomTabs: jest.fn(),
    },
  })
}))
it('renders correctly', () => {
  const tree = renderer
    .create(<NavigationContainer><Resources /></NavigationContainer>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
