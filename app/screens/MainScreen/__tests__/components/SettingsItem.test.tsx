/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { SettingsItem } from '../../components/SettingsItem'

it('renders correctly', () => {
  const tree = renderer
    .create(<SettingsItem title="common.ok" icon="book" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
