/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { RecordingIndicator } from '../../components/RecordingIndicator'

it('renders correctly', () => {
  const tree = renderer
    .create(<RecordingIndicator recordedSeconds={4001} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
