/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react-native"
import { FlatMap } from "../../components/FlatMap"
import { OrbitPoint } from "../../../../services/api"

describe("FlatMap", () => {
  const mockIssPathCoords: OrbitPoint[] = [
    {
      date: new Date().toISOString(),
      latitude: 0,
      longitude: 0,
      azimuth: 0,
      elevation: 0,
      altitude: 0,
    },
    {
      date: new Date(new Date().setSeconds(new Date().getSeconds() + 5)).toISOString(),
      latitude: 1,
      longitude: 1,
      azimuth: 0,
      elevation: 0,
      altitude: 0,
    },
    {
      date: new Date(new Date().setSeconds(new Date().getSeconds() + 10)).toISOString(),
      latitude: 2,
      longitude: 2,
      azimuth: 0,
      elevation: 0,
      altitude: 0,
    },
  ]

  const mockCurrentLocation: [number, number] = [2, 2]

  test("renders without issues", () => {
    const tree = renderer.create(<FlatMap />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("renders with custom style", () => {
    const customStyle = { backgroundColor: "red" }
    const { getByTestId } = render(<FlatMap style={customStyle} />)
    const flatMapComponent = getByTestId("flat-map")
    expect(flatMapComponent.props.style).toEqual(customStyle)
  })

  test("renders the current location marker when currentLocation is provided", () => {
    const { getByTestId } = render(<FlatMap currentLocation={mockCurrentLocation} />)
    const currentLocationMarker = getByTestId("current-location-marker")
    expect(currentLocationMarker).toBeTruthy()
  })

  test("renders the ISS path polyline when issPathCoords is provided", () => {
    const { getByTestId } = render(<FlatMap issPath={mockIssPathCoords} />)
    const issPathPolyline = getByTestId("iss-path-polyline")
    expect(issPathPolyline).toBeTruthy()
  })
})
