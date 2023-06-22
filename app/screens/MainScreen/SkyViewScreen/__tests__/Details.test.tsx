/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { Details } from '../Details'

it('renders correctly', () => {
  const tree = renderer
    .create(<Details 
              issData={{ date: "12-12-2012", latitude: 0, longitude: 0, azimuth: 0, elevation: 0, altitude: 0 }}
              observer={[0,0]}
            />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
