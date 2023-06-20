/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { NavigationContainer } from "@react-navigation/native"
import { SelectLocation } from '../SelectLocation'

it('renders correctly', () => {
  const tree = renderer
    .create(<NavigationContainer>
        <SelectLocation onClose={jest.fn()}  />
      </NavigationContainer>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
