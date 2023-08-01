import { Euler, Vector3 } from "three"

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

export const degToRad = (deg: number) => deg * (Math.PI / 180)
