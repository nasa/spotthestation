/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import renderer from 'react-test-renderer'
import { RemoveLocationModal } from '../RemoveLocationModal'
import { LocationType } from "../../../OnboardingScreen/SignupLocation"

it('renders correctly', () => {
  const tree = renderer
    .create(<RemoveLocationModal location={{} as LocationType} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
