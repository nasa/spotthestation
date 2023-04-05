/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { ExpandContainer } from '../../components/ExpandContainer'

it('renders correctly', () => {
  const tree = renderer
    .create(<ExpandContainer title="homeScreen.selectLocation.title" defaultValue expandble itemsCount={2} actionTitle="expand"><div /></ExpandContainer>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
