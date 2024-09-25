import React from "react"
import { Sightings } from "../Sightings"
import { render } from "@testing-library/react-native"
import MockDate from "mockdate"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as storage from "../../utils/storage"

describe("Sightings", () => {
  beforeEach(() => {
    MockDate.set("12-12-2012 10:10:10")
  })

  afterEach(() => {
    MockDate.reset()
  })

  it("renders correctly", async () => {
    await AsyncStorage.setItem(storage.KEYS.SIGHTINGS_COACH_VISIBLE, "true")
    const component = render(
      <Sightings
        timeOfDay=""
        duration=""
        maxHeight=""
        onDurationChange={jest.fn()}
        onTimeOfDayChange={jest.fn()}
        onMaxHeightChange={jest.fn()}
        location={{ title: "test", subtitle: "test", location: { lat: 0, lng: 0 } }}
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
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
