/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { FeedItem } from '../../components/FeedItem'

it('renders correctly', () => {
  const tree = renderer
    .create(<FeedItem title="title" image="" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
