/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { Sightings } from '../Sightings'

jest
  .useFakeTimers('modern')
  .setSystemTime(new Date('12-12-2012 10:10:10'))

it('renders correctly', () => {
  const tree = renderer
    .create(<Sightings sightings={[{
      date: '12-12-2012T10:10:10',
      maxHeight: 20,
      appears: '12-12-2012T10:10:10',
      disappears: '12-12-2012T10:10:10',
      visible: 5,
      dayStage: 0,
      notify: true,
    }, {
      date: '12-13-2012T10:15:10',
      maxHeight: 20,
      appears: '12-13-2012T10:15:10',
      disappears: '12-13-2012T10:15:10',
      visible: 5,
      dayStage: 1,
      notify: false,
    }, {
      date: '12-14-2012T10:20:10',
      maxHeight: 20,
      appears: '12-14-2012T10:20:10',
      disappears: '12-14-2012T10:20:10',
      visible: 5,
      dayStage: 2,
      notify: true,
    }]} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})