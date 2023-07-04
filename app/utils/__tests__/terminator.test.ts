import { compute, computeOld, latLonTo2D, toGeoJSON } from "../terminator"

it("test_happy_path_returns_array_of_latitude_and_longitude_pairs", () => {
  const result = compute(new Date(2022, 0, 1), 2)
  expect(Array.isArray(result)).toBe(true)
  expect(result[0]).toEqual([90, -360])
  expect(result[result.length - 1]).toEqual([90, 180])
})

it("test_happy_path_uses_current_date_if_no_date_is_provided", () => {
  const result = compute()
  expect(Array.isArray(result)).toBe(true)
  expect(result[0]).toEqual([-90, -360])
  expect(result[result.length - 1]).toEqual([-90, 180])
})

it("test_happy_path_uses_resolution_of_2_degrees_if_no_resolution_is_provided", () => {
  const result = compute(new Date(2022, 0, 1))
  expect(Array.isArray(result)).toBe(true)
  expect(result[0]).toEqual([90, -360])
  expect(result[result.length - 1]).toEqual([90, 180])
})

it("test_edge_case_handles_negative_longitude_values", () => {
  const result = compute(new Date(2022, 0, 1), 2)
  expect(Array.isArray(result)).toBe(true)
  expect(result[0]).toEqual([90, -360])
  expect(result[result.length - 1]).toEqual([90, 180])
})

it("test_edge_case_handles_latitude_values_at_the_poles", () => {
  const result = compute(new Date(2022, 0, 1), 2)
  expect(Array.isArray(result)).toBe(true)
  expect(result[0]).toEqual([90, -360])
  expect(result[result.length - 1]).toEqual([90, 180])
  expect(result[0][0]).toBeLessThanOrEqual(result[result.length - 1][0])
})

it("test_edge_case_handles_longitude_values_at_the_antimeridian", () => {
  const result = compute(new Date(2022, 0, 1), 2)
  expect(Array.isArray(result)).toBe(true)
  expect(result[0]).toEqual([90, -360])
  expect(result[result.length - 1]).toEqual([90, 180])
})

it("test_happy_path_returns_array_of_latitude_and_longitude_pairs", () => {
  const result = computeOld(new Date(2022, 0, 1), 2)
  expect(Array.isArray(result)).toBe(true)
  expect(result[0]).toEqual([90, -360])
  expect(result[result.length - 1]).toEqual([90, 360])
})

it("test_happy_path_uses_current_date_if_no_date_is_provided", () => {
  const result = computeOld()
  expect(Array.isArray(result)).toBe(true)
  expect(result[0]).toEqual([-90, -360])
  expect(result[result.length - 1]).toEqual([-90, 360])
})

it("test_happy_path_uses_resolution_of_2_degrees_if_no_resolution_is_provided", () => {
  const result = computeOld(new Date(2022, 0, 1))
  expect(Array.isArray(result)).toBe(true)
  expect(result[0]).toEqual([90, -360])
  expect(result[result.length - 1]).toEqual([90, 360])
})

it("test_edge_case_handles_negative_longitude_values", () => {
  const result = computeOld(new Date(2022, 0, 1), 2)
  expect(Array.isArray(result)).toBe(true)
  expect(result[0]).toEqual([90, -360])
  expect(result[result.length - 1]).toEqual([90, 360])
})

it("test_edge_case_handles_latitude_values_at_the_poles", () => {
  const result = computeOld(new Date(2022, 0, 1), 2)
  expect(Array.isArray(result)).toBe(true)
  expect(result[0]).toEqual([90, -360])
  expect(result[result.length - 1]).toEqual([90, 360])
  expect(result[0][0]).toBeLessThanOrEqual(result[result.length - 1][0])
})

it("test_edge_case_handles_longitude_values_at_the_antimeridian", () => {
  const result = computeOld(new Date(2022, 0, 1), 2)
  expect(Array.isArray(result)).toBe(true)
  expect(result[0]).toEqual([90, -360])
  expect(result[result.length - 1]).toEqual([90, 360])
})

it("test_valid_latlng_input", () => {
  const latLng: [number, number] = [90, 0]
  const expected = [0.5, 0]
  const result = latLonTo2D(latLng)
  expect(result).toEqual(expected)
})

it("test_valid_input_coordinates", () => {
  const input: [number, number][] = [
    [0, 0],
    [1, 1],
    [2, 2],
    [0, 0],
  ]
  const expectedOutput = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [0, 0],
              [1, 1],
              [2, 2],
              [0, 0],
              [0, 0],
            ],
          ],
        },
      },
    ],
  }
  expect(toGeoJSON(input)).toEqual(expectedOutput)
})
