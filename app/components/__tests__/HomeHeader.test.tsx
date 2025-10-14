import React from "react"
import { HomeHeader } from "../HomeHeader"
import { render } from "@testing-library/react-native"

it("renders correctly", () => {
  const tree = render(
    <HomeHeader
      location={{
        title: "Continental",
        subtitle: "test",
        location: { lat: 0, lng: 0 },
        firstHistorySightingOrbitPointAt: null,
        sightingsHistoryLastUpdatedAt: null,
      }}
      onLocationPress={() => ({})}
      onSightingsPress={() => ({})}
    />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
