/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { IconLinkButton } from '../../components/IconLinkButton'

it('renders correctly', () => {
  const tree = renderer
    .create(<IconLinkButton icon="back" backgroundColor="red" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
