/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react-native"
import { FlatMap } from "../../components/FlatMap"

describe("FlatMap", () => {
  const mockIssPathCoords: [number, number][] = [
    [0, 0],
    [1, 1],
    [2, 2],
  ]
  const mockIssMarkerPosition: [number, number] = [1, 1]
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

  test("renders the ISS marker when issMarkerPosition is provided", () => {
    const { getByTestId } = render(<FlatMap issMarkerPosition={mockIssMarkerPosition} />)
    const issMarker = getByTestId("iss-marker")
    expect(issMarker).toBeTruthy()
  })

  test("renders the current location marker when currentLocation is provided", () => {
    const { getByTestId } = render(<FlatMap currentLocation={mockCurrentLocation} />)
    const currentLocationMarker = getByTestId("current-location-marker")
    expect(currentLocationMarker).toBeTruthy()
  })

  test("renders the ISS path polyline when issPathCoords is provided", () => {
    const { getByTestId } = render(<FlatMap issPathCoords={mockIssPathCoords} />)
    const issPathPolyline = getByTestId("iss-path-polyline")
    expect(issPathPolyline).toBeTruthy()
  })
})
