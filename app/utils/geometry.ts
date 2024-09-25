import { Euler, Vector3 } from "three"

export const compassDirections = <const>[
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW",
]

export const azAltToCartesian = (
  az: number,
  alt: number,
  distance: number,
): [number, number, number] => {
  const euler = new Euler(degToRad(alt), -degToRad(az), 0, "YXZ")
  const vec = new Vector3(0, 0, -distance).applyEuler(euler)
  return [vec.x, vec.y, vec.z]
}

export const cartesianToAzAlt = (coords: [number, number, number]): [number, number] => {
  const [x, y, z] = coords
  const r = Math.sqrt(x * x + y * y + z * z)
  const theta = Math.acos(y / r)
  const phi = Math.atan2(x, -z)

  // Convert angles to degrees if needed
  const thetaDegrees = theta * (180 / Math.PI)
  const phiDegrees = phi * (180 / Math.PI)

  return [normalizeHeading(phiDegrees), 90 - thetaDegrees]
}

export const normalizeHeading = (heading: number) => {
  if (heading < 0) return 360 + heading
  if (heading > 360) return heading - 360
  return heading
}

export const isInHeadingRange = (left: number, right: number, heading: number) => {
  if (right < left) return heading > left || heading < right
  return heading >= left && heading <= right
}

export const headingOffset = (h1: number, h2: number) => {
  if (h2 < h1) return h2 - (h1 - 360)
  return h2 - h1
}

export function headingToCompass(heading: number) {
  return compassDirections[Math.floor(((heading + 360 / 16 / 2) % 360) / (360 / 16))]
}

export const degToRad = (deg: number) => deg * (Math.PI / 180)

export const sphericalDistance = (
  lat1: number,
  lon1: number,
  elev1: number,
  lat2: number,
  lon2: number,
  elev2: number,
  R: number = 6371000,
) => {
  const dLat = degToRad(lat2 - lat1)
  const dLon = degToRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c
  const elevationDifference = elev2 - elev1
  return Math.sqrt(distance * distance + elevationDifference * elevationDifference)
}

export const latLonToCartesian = (
  coordinates: [number, number],
  radius: number,
): [number, number, number] => {
  const [lat, long] = coordinates
  const phi = (lat * Math.PI) / 180
  const theta = ((long - 180) * Math.PI) / 180

  const x = -radius * Math.cos(phi) * Math.cos(theta)
  const y = radius * Math.sin(phi)
  const z = radius * Math.cos(phi) * Math.sin(theta)

  return [x, y, z]
}

export const cartesianToLatLon = (position: [number, number, number]): [number, number] => {
  const [x, y, z] = position

  const long = -(Math.atan2(z, x) * 180) / Math.PI
  const hyp = Math.sqrt(x * x + z * z)
  const lat = (Math.atan2(y, hyp) * 180) / Math.PI

  return [lat, long]
}
