/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { FeedSearchResultItem } from '../../components/FeedSearchResultItem'

it('renders correctly', () => {
  const tree = renderer
    .create(<FeedSearchResultItem title="title" image="" type="" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
