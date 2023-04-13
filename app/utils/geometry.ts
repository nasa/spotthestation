import { Euler, Vector3 } from "three"

export const azAltToCartesian = (az, alt, distance): [number, number, number] => {
  const euler = new Euler(alt * (Math.PI/180), -az * (Math.PI/180), 0, 'YXZ')
  const vec = new Vector3(0, 0, -distance).applyEuler(euler)
  return [vec.x, vec.y, vec.z]
}

export const normalizeHeading = (heading: number) => {
  if (heading < 0) return 360 + heading
  if (heading > 360) return heading - 360
  return heading
}

export const isInHeadingRange = (left, right, heading) => {
  if (right < left) return heading > left || heading < right
  return heading >= left && heading <= right
}

export const headingOffset = (h1, h2) => {
  if (h2 < h1) return h2 - (h1 - 360)
  return h2 - h1
}

export const degToRad = (deg) => deg * (Math.PI/180)