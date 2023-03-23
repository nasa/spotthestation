export const azAltToCartesian = (az, alt, distance): [number, number, number] => {
  const x = Math.sin(az * (Math.PI/180)) * distance
  const y = Math.sin(alt * (Math.PI/180)) * distance
  const z = Math.cos(az * (Math.PI/180)) * -distance
  return [x, y, z]
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