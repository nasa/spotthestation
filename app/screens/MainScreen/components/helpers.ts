export function coordinatesToPosition(coordinates, radius): [number, number, number] {
  const [lat, long] = coordinates
  const phi = (lat * Math.PI) / 180
  const theta = ((long - 180) * Math.PI) / 180

  const x = -radius * Math.cos(phi) * Math.cos(theta)
  const y = radius * Math.sin(phi)
  const z = radius * Math.cos(phi) * Math.sin(theta)

  return [x, y, z]
}

export function positionToCoordinates(position: [number, number, number]): [number, number] {
  const [x, y, z] = position

  const long = -(Math.atan2(z, x) * 180) / Math.PI
  const hyp = Math.sqrt(x * x + z * z)
  const lat = (Math.atan2(y, hyp) * 180) / Math.PI

  return [lat, long]
}

export const formatTimer = (diff: string, prefix: string): string => {
  if (!diff) return `${prefix}00:00:00:00`
  const diffArray = diff.split(",")
  if (!diff.includes("second")) diffArray.push("00 seconds")
  if (!diff.includes("minute")) diffArray.splice(diffArray.length - 1, 0, "00 minutes")
  if (!diff.includes("hour")) diffArray.splice(diffArray.length - 2, 0, "00 hours")
  if (!diff.includes("day")) diffArray.splice(diffArray.length - 3, 0, "00 days")

  const result = diffArray
    .map((item) => {
      const value = item.trim().split(" ")[0]
      return value.length === 1 ? `0${value}` : value
    })
    .join(":")

  return `${prefix}${result}`
}

export const calculateDistance = (lat1, lon1, elev1, lat2, lon2, elev2) => {
  const R = 6371000 // Earth's radius in meters
  const phi1 = (lat1 * Math.PI) / 180 // convert to radians
  const phi2 = (lat2 * Math.PI) / 180 // convert to radians
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180 // difference in radians
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180 // difference in radians

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  const distance = R * c
  const elevationDifference = elev2 - elev1
  const totalDistance = Math.sqrt(distance * distance + elevationDifference * elevationDifference)

  return totalDistance
}

export const calculateOrbitalSpeed = (
  latitude: number,
  azimuth: number,
  elevation: number,
): number => {
  const earthRadius = 6371 // Earth's radius in kilometers
  const G = 6.6743 * Math.pow(10, -11) // gravitational constant in m^3/kg/s^2
  const earthMass = 5.972 * Math.pow(10, 24) // Earth's mass in kilograms
  const omegaE = 7.2921159 * Math.pow(10, -5) // Earth's rotation rate in radians per second

  // Convert latitude and longitude to radians
  const lat = latitude * (Math.PI / 180)

  // Calculate the distance from the satellite to the center of the Earth
  const altitude = elevation + earthRadius
  const r = altitude * 1000 // Convert altitude from km to meters

  // Calculate the velocity of the satellite
  return Math.round(Math.sqrt((G * earthMass) / r) + omegaE * r * Math.cos(lat) * Math.cos(azimuth))
}
