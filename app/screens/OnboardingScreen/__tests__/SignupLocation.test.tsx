/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import renderer from 'react-test-renderer'
import { SignupLocation } from '../SignupLocation'

it('renders correctly', () => {
  const tree = renderer
    .create(<NavigationContainer>
      <SignupLocation 
        value={{
          title: 'John',
          subtitle: 'Wick',
          location: { lat: 0, lng: 0 },
        }}
        onAction={() => ({})}
        onValueChange={() => ({})}
      />
    </NavigationContainer>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
