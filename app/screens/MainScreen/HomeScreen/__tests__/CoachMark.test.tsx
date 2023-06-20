/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { CoachMark } from '../CoachMark'

it('renders correctly', () => {
  const tree = renderer
    .create(<CoachMark 
      icon="mapPinOutlined"
      title="homeScreen.coachMarks.locationTitle"
      bodyText="homeScreen.coachMarks.locationData"
      style={{ marginTop: 18 }}
      stage={0} 
      onPressFinish={jest.fn()} 
      onPressNext={jest.fn()} 
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
