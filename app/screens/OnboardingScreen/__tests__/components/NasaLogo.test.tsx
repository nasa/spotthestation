/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { NasaLogo } from '../../components/NasaLogo'

it('renders correctly', () => {
  const tree = renderer
    .create(<NasaLogo />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
