/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { ListItem } from '../../components/ListItem'

it('renders correctly', () => {
  const tree = renderer
    .create(<ListItem icon="bell" subtitle="title" title="title" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})