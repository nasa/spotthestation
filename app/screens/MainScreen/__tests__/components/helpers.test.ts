import { calculateDistance, calculateOrbitalSpeed, coordinatesToPosition, formatTimer } from "../../components/helpers"

it('test_happy_path_origin', () => {
  const coordinates = [0, 0]
  const radius = 300
  const expectedPosition = [300, 0, -3.6739403974420595e-14]
  expect(coordinatesToPosition(coordinates, radius)).toEqual(expectedPosition)
})

it('test_happy_path_non_origin', () => {
  const coordinates = [45, 45]
  const radius = 300
  const expectedPosition = [150, 212.13203435596424, -150.00000000000003]
  expect(coordinatesToPosition(coordinates, radius)).toEqual(expectedPosition)
})

it('test_edge_case_latitude_90', () => {
  const coordinates = [90, 0]
  const radius = 300
  const expectedPosition = [1.8369701987210297e-14, 300, -2.2496396739927863e-30]
  expect(coordinatesToPosition(coordinates, radius)).toEqual(expectedPosition)
})

it('test_edge_case_latitude_-90', () => {
  const coordinates = [-90, 0]
  const radius = 300
  const expectedPosition = [1.8369701987210297e-14, -300, -2.2496396739927863e-30]
  expect(coordinatesToPosition(coordinates, radius)).toEqual(expectedPosition)
})

it('test_edge_case_longitude_180', () => {
  const coordinates = [0, 180]
  const radius = 300
  const expectedPosition = [-300, 0, 0]
  expect(coordinatesToPosition(coordinates, radius)).toEqual(expectedPosition)
})

it('should return the formatted timer with all units', () => {
  const diff = '1 day, 2 hours, 3 minutes, 4 seconds'
  const prefix = 'Time: '
  const expected = 'Time: 01:02:03:04'
  expect(formatTimer(diff, prefix)).toBe(expected)
})

it('should return the formatted timer with missing units', () => {
  const diff = '2 hours, 30 seconds'
  const prefix = 'Duration: '
  const expected = 'Duration: 00:02:00:30'
  expect(formatTimer(diff, prefix)).toBe(expected)
})

it('should return the formatted timer with all zero values if diff does not include any units', () => {
  const diff = ''
  const prefix = 'Elapsed Time: '
  const expected = 'Elapsed Time: 00:00:00:00'
  expect(formatTimer(diff, prefix)).toBe(expected)
})

it('should return the formatted timer with leading zeros when the values are single-digit', () => {
  const diff = '1 day, 2 hours, 3 minutes, 4 seconds'
  const prefix = ''
  const expected = '01:02:03:04'
  expect(formatTimer(diff, prefix)).toBe(expected)
})

it('should return the formatted timer with the provided prefix', () => {
  const diff = '10 minutes'
  const prefix = 'Duration: '
  const expected = 'Duration: 00:00:10:00'
  expect(formatTimer(diff, prefix)).toBe(expected)
})

it('should calculate the distance between two coordinates with elevation', () => {
  const lat1 = 37.7749
  const lon1 = -122.4194
  const elev1 = 10
  const lat2 = 34.0522
  const lon2 = -118.2437
  const elev2 = 20
  const expected = 559120.5771509794
  expect(calculateDistance(lat1, lon1, elev1, lat2, lon2, elev2)).toBe(expected)
})

it('should calculate the distance between two coordinates without elevation', () => {
  const lat1 = 40.7128
  const lon1 = -74.0060
  const elev1 = 0
  const lat2 = 51.5074
  const lon2 = -0.1278
  const elev2 = 0
  const expected = 5570222.179737957
  expect(calculateDistance(lat1, lon1, elev1, lat2, lon2, elev2)).toBe(expected)
})

it('should calculate the distance when the coordinates are the same', () => {
  const lat1 = 52.5200
  const lon1 = 13.4050
  const elev1 = 100
  const lat2 = 52.5200
  const lon2 = 13.4050
  const elev2 = 200
  const expected = 100
  expect(calculateDistance(lat1, lon1, elev1, lat2, lon2, elev2)).toBe(expected)
})

it('should calculate the orbital speed at a given latitude, azimuth, and elevation', () => {
  const latitude = 45
  const azimuth = 0
  const elevation = 100
  const expected = 8182
  expect(calculateOrbitalSpeed(latitude, azimuth, elevation)).toBe(expected)
})

it('should calculate the orbital speed when latitude is 0', () => {
  const latitude = 0
  const azimuth = 90
  const elevation = 200
  const expected = 7574
  expect(calculateOrbitalSpeed(latitude, azimuth, elevation)).toBe(expected)
})

it('should calculate the orbital speed when azimuth is 180', () => {
  const latitude = -30
  const azimuth = 180
  const elevation = 50
  const expected = 7636
  expect(calculateOrbitalSpeed(latitude, azimuth, elevation)).toBe(expected)
})
