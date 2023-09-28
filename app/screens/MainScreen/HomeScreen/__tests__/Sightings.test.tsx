/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { Sightings } from "../Sightings"
import { render } from "@testing-library/react-native"

jest.useFakeTimers("modern").setSystemTime(new Date("2020-12-12 10:10:10"))

it("renders correctly", () => {
  const tree = render(
    <Sightings
      timeOfDay=""
      duration=""
      onDurationChange={jest.fn()}
      onTimeOfDayChange={jest.fn()}
      sightings={[
        {
          date: "2020-12-12T10:10:10",
          maxHeight: 20,
          visible: 5,
          dayStage: 0,
          notify: true,
          minAzimuth: 0,
          maxAzimuth: 0,
          minAltitude: 0,
          maxAltitude: 0,
        },
        {
          date: "2020-12-13T10:15:10",
          maxHeight: 20,
          minAzimuth: 0,
          maxAzimuth: 0,
          minAltitude: 0,
          maxAltitude: 0,
          visible: 5,
          dayStage: 1,
          notify: false,
        },
        {
          date: "2020-12-24T10:20:10",
          maxHeight: 20,
          minAzimuth: 0,
          maxAzimuth: 0,
          minAltitude: 0,
          maxAltitude: 0,
          visible: 5,
          dayStage: 2,
          notify: true,
        },
      ]}
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
