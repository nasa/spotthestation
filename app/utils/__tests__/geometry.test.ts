import {
  azAltToCartesian,
  headingOffset,
  isInHeadingRange,
  latLonToCartesian,
  normalizeHeading,
  sphericalDistance,
  cartesianToAzAlt,
  headingToCompass,
  cartesianToLatLon,
} from "../geometry"

describe("azAltToCartesian", () => {
  it("test_valid_input_values", () => {
    expect(azAltToCartesian(45, 30, 10)).toEqual([
      6.123724356957945, 4.999999999999999, -6.123724356957946,
    ])
  })

  it("test_zero_input_values", () => {
    expect(azAltToCartesian(0, 0, 0)).toEqual([0, 0, 0])
  })

  it("test_negative_input_values", () => {
    expect(azAltToCartesian(-1, -1, -1)).toEqual([
      0.017449748351250488, 0.01745240643728351, 0.9996954135095479,
    ])
  })

  it("test_null_and_undefined_input_values", () => {
    expect(azAltToCartesian(null, null, null)).toEqual([0, 0, 0])
    expect(azAltToCartesian(undefined, undefined, undefined)).toEqual([NaN, NaN, NaN])
  })
})

describe("cartesianToAzAlt", () => {
  it("should return correct Azimuth and Altitude for coordinates on positive x-axis", () => {
    const result = cartesianToAzAlt([1, 0, 0])
    expect(result).toEqual([90, 0]) // Azimuth = 90 degrees, Altitude = 0 degrees
  })

  it("should return correct Azimuth and Altitude for coordinates on positive z-axis", () => {
    const result = cartesianToAzAlt([0, 0, 1])
    expect(result).toEqual([180, 0]) // Azimuth = 180 degrees, Altitude = 0 degrees
  })

  it("should return correct Azimuth and Altitude for coordinates on positive y-axis", () => {
    const result = cartesianToAzAlt([0, 1, 0])
    expect(result).toEqual([180, 90]) // Azimuth = 180 degrees, Altitude = 90 degrees
  })

  it("should return correct Azimuth and Altitude for coordinates on negative x-axis", () => {
    const result = cartesianToAzAlt([-1, 0, 0])
    expect(result).toEqual([270, 0]) // Azimuth = 270 degrees, Altitude = 0 degrees
  })

  it("should return correct Azimuth and Altitude for coordinates on negative z-axis", () => {
    const result = cartesianToAzAlt([0, 0, -1])
    expect(result).toEqual([0, 0]) // Azimuth = 0 degrees, Altitude = 0 degrees
  })

  it("should return correct Azimuth and Altitude for arbitrary coordinates", () => {
    const result = cartesianToAzAlt([1, 1, 1])
    const [azimuth, altitude] = result
    expect(azimuth).toBeCloseTo(135, 1) // Azimuth ≈ 135 degrees
    expect(altitude).toBeCloseTo(35.2644, 1) // Altitude ≈ 35.2644 degrees
  })

  it("should return normalized Azimuth for negative azimuth value", () => {
    const result = cartesianToAzAlt([-1, 1, 0])
    const [azimuth, altitude] = result
    expect(azimuth).toBeCloseTo(270, 1) // Azimuth normalized to 270 degrees
    expect(altitude).toBeCloseTo(45, 1) // Altitude ≈ 45 degrees
  })
})

describe("normalizeHeading", () => {
  it("should return the heading itself if it is within the range of 0 to 360", () => {
    expect(normalizeHeading(0)).toBe(0)
    expect(normalizeHeading(180)).toBe(180)
    expect(normalizeHeading(360)).toBe(360)
  })

  it("should return the normalized heading if it is less than 0", () => {
    expect(normalizeHeading(-90)).toBe(270)
    expect(normalizeHeading(-180)).toBe(180)
    expect(normalizeHeading(-270)).toBe(90)
  })

  it("should return the normalized heading if it is greater than 360", () => {
    expect(normalizeHeading(450)).toBe(90)
    expect(normalizeHeading(540)).toBe(180)
  })
})

describe("isInHeadingRange", () => {
  it("should return true if heading is within the range when right is greater than left", () => {
    expect(isInHeadingRange(0, 180, 90)).toBe(true)
    expect(isInHeadingRange(90, 270, 180)).toBe(true)
    expect(isInHeadingRange(270, 90, 0)).toBe(true)
    expect(isInHeadingRange(0, 360, 270)).toBe(true)
  })

  it("should return true if heading is within the range when right is less than left", () => {
    expect(isInHeadingRange(270, 90, 0)).toBe(true)
    expect(isInHeadingRange(180, 0, 270)).toBe(true)
    expect(isInHeadingRange(270, 90, 360)).toBe(true)
  })

  it("should return false if heading is outside the range when right is greater than left", () => {
    expect(isInHeadingRange(0, 180, 270)).toBe(false)
    expect(isInHeadingRange(90, 270, 0)).toBe(false)
    expect(isInHeadingRange(270, 90, 180)).toBe(false)
    expect(isInHeadingRange(0, 360, 450)).toBe(false)
  })

  it("should return false if heading is outside the range when right is less than left", () => {
    expect(isInHeadingRange(180, 0, 90)).toBe(false)
    expect(isInHeadingRange(270, 90, 180)).toBe(false)
  })
})

describe("headingOffset", () => {
  it("should return the correct offset when h2 is greater than h1", () => {
    expect(headingOffset(0, 90)).toBe(90)
    expect(headingOffset(180, 270)).toBe(90)
    expect(headingOffset(0, 270)).toBe(270)
  })

  it("should return the correct offset when h2 is less than h1", () => {
    expect(headingOffset(90, 0)).toBe(270)
    expect(headingOffset(270, 180)).toBe(270)
    expect(headingOffset(90, 270)).toBe(180)
    expect(headingOffset(270, 0)).toBe(90)
  })

  it("should return 0 when h2 is equal to h1", () => {
    expect(headingOffset(0, 0)).toBe(0)
    expect(headingOffset(180, 180)).toBe(0)
    expect(headingOffset(360, 360)).toBe(0)
  })
})

describe("headingToCompass", () => {
  it('should return "N" for heading close to 0 degrees', () => {
    expect(headingToCompass(0)).toBe("N")
    expect(headingToCompass(360)).toBe("N") // 360 degrees is effectively 0 degrees
    expect(headingToCompass(11.24)).toBe("N") // Boundary for N
  })

  it('should return "NNE" for heading just above 11.25 degrees', () => {
    expect(headingToCompass(11.25)).toBe("NNE")
    expect(headingToCompass(33.74)).toBe("NNE") // Boundary for NNE
  })

  it('should return "NE" for heading just above 33.75 degrees', () => {
    expect(headingToCompass(33.75)).toBe("NE")
    expect(headingToCompass(56.24)).toBe("NE") // Boundary for NE
  })

  it('should return "ENE" for heading just above 56.25 degrees', () => {
    expect(headingToCompass(56.25)).toBe("ENE")
    expect(headingToCompass(78.74)).toBe("ENE") // Boundary for ENE
  })

  it('should return "E" for heading just above 78.75 degrees', () => {
    expect(headingToCompass(78.75)).toBe("E")
    expect(headingToCompass(101.24)).toBe("E") // Boundary for E
  })

  it('should return "S" for heading close to 180 degrees', () => {
    expect(headingToCompass(180)).toBe("S")
    expect(headingToCompass(191.24)).toBe("S") // Boundary for S
  })

  it('should return "W" for heading close to 270 degrees', () => {
    expect(headingToCompass(270)).toBe("W")
    expect(headingToCompass(281.24)).toBe("W") // Boundary for W
  })

  it('should return "NNW" for heading close to 348.75 degrees', () => {
    expect(headingToCompass(348.74)).toBe("NNW")
    expect(headingToCompass(348.75)).toBe("N") // Boundary where it rolls over to "N"
  })

  it("should handle non-integer headings", () => {
    expect(headingToCompass(45.5)).toBe("NE") // Close to NE
    expect(headingToCompass(103.5)).toBe("ESE") // Close to ESE
  })
})

describe("latLonToCartesian", () => {
  it("test_happy_path_origin", () => {
    const coordinates: [number, number] = [0, 0]
    const radius = 300
    const expectedPosition = [300, 0, -3.6739403974420595e-14]
    expect(latLonToCartesian(coordinates, radius)).toEqual(expectedPosition)
  })

  it("test_happy_path_non_origin", () => {
    const coordinates: [number, number] = [45, 45]
    const radius = 300
    const expectedPosition = [150, 212.13203435596424, -150.00000000000003]
    expect(latLonToCartesian(coordinates, radius)).toEqual(expectedPosition)
  })

  it("test_edge_case_latitude_90", () => {
    const coordinates: [number, number] = [90, 0]
    const radius = 300
    const expectedPosition = [1.8369701987210297e-14, 300, -2.2496396739927863e-30]
    expect(latLonToCartesian(coordinates, radius)).toEqual(expectedPosition)
  })

  it("test_edge_case_latitude_-90", () => {
    const coordinates: [number, number] = [-90, 0]
    const radius = 300
    const expectedPosition = [1.8369701987210297e-14, -300, -2.2496396739927863e-30]
    expect(latLonToCartesian(coordinates, radius)).toEqual(expectedPosition)
  })

  it("test_edge_case_longitude_180", () => {
    const coordinates: [number, number] = [0, 180]
    const radius = 300
    const expectedPosition = [-300, 0, 0]
    expect(latLonToCartesian(coordinates, radius)).toEqual(expectedPosition)
  })
})

describe("sphericalDistance", () => {
  it("should calculate the distance between two coordinates with elevation", () => {
    const lat1 = 37.7749
    const lon1 = -122.4194
    const elev1 = 10
    const lat2 = 34.0522
    const lon2 = -118.2437
    const elev2 = 20
    const expected = 559120.5771509794
    expect(sphericalDistance(lat1, lon1, elev1, lat2, lon2, elev2)).toBe(expected)
  })

  it("should calculate the distance between two coordinates without elevation", () => {
    const lat1 = 40.7128
    const lon1 = -74.006
    const elev1 = 0
    const lat2 = 51.5074
    const lon2 = -0.1278
    const elev2 = 0
    const expected = 5570222.179737957
    expect(sphericalDistance(lat1, lon1, elev1, lat2, lon2, elev2)).toBe(expected)
  })

  it("should calculate the distance when the coordinates are the same", () => {
    const lat1 = 52.52
    const lon1 = 13.405
    const elev1 = 100
    const lat2 = 52.52
    const lon2 = 13.405
    const elev2 = 200
    const expected = 100
    expect(sphericalDistance(lat1, lon1, elev1, lat2, lon2, elev2)).toBe(expected)
  })
})

describe("cartesianToLatLon", () => {
  it("should return [0, 0] for the origin point (0, 0, 0)", () => {
    const result = cartesianToLatLon([0, 0, 0])
    expect(result).toEqual([0, 0])
  })

  it("should return [0, 0] for a point on the positive x-axis", () => {
    const result = cartesianToLatLon([1, 0, 0])
    expect(result).toEqual([0, 0]) // Latitude = 0, Longitude = 0
  })

  it("should return [0, -90] for a point on the positive z-axis", () => {
    const result = cartesianToLatLon([0, 0, 1])
    expect(result).toEqual([0, -90]) // Latitude = 0, Longitude = -90
  })

  it("should return [0, 90] for a point on the negative z-axis", () => {
    const result = cartesianToLatLon([0, 0, -1])
    expect(result).toEqual([0, 90]) // Latitude = 0, Longitude = 90
  })

  it("should return [90, 0] for a point on the positive y-axis", () => {
    const result = cartesianToLatLon([0, 1, 0])
    expect(result).toEqual([90, 0]) // Latitude = 90 (North Pole), Longitude = 0
  })

  it("should return [-90, 0] for a point on the negative y-axis", () => {
    const result = cartesianToLatLon([0, -1, 0])
    expect(result).toEqual([-90, 0]) // Latitude = -90 (South Pole), Longitude = 0
  })

  it("should return correct latitude and longitude for arbitrary coordinates", () => {
    const result = cartesianToLatLon([1, 1, 1])
    const [lat, long] = result
    expect(lat).toBeCloseTo(35.2644, 1) // Approximate latitude for (1,1,1)
    expect(long).toBeCloseTo(-45, 1) // Approximate longitude for (1,1,1)
  })

  it("should handle negative x and z coordinates", () => {
    const result = cartesianToLatLon([-1, 1, -1])
    const [lat, long] = result
    expect(lat).toBeCloseTo(35.2644, 1) // Approximate latitude for (-1,1,-1)
    expect(long).toBeCloseTo(135, 1) // Approximate longitude for (-1,1,-1)
  })

  it("should return expected values for large magnitude coordinates", () => {
    const result = cartesianToLatLon([1000, 1000, 1000])
    const [lat, long] = result
    expect(lat).toBeCloseTo(35.2644, 1) // Similar latitude to (1,1,1) due to direction
    expect(long).toBeCloseTo(-45, 1) // Similar longitude to (1,1,1) due to direction
  })
})
