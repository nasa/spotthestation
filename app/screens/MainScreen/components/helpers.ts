export function coordinatesToPosition(coordinates, radius) {
  const [lat, long] = coordinates
  const phi = (lat * Math.PI) / 180
  const theta = ((long - 180) * Math.PI) / 180

  const x = -radius * Math.cos(phi) * Math.cos(theta)
  const y = radius * Math.sin(phi)
  const z = radius * Math.cos(phi) * Math.sin(theta)

  return [x, y, z]
}

export const formatTimer = (diff: string, prefix: string): string => {
  const diffArray = diff.split(",")
  if (!diff.includes('second')) diffArray.push('00 seconds')
  if (!diff.includes('minute')) diffArray.splice(diffArray.length - 1, 0, '00 minute')
  if (!diff.includes('hour')) diffArray.splice(diffArray.length - 2, 0, '00 hour')
  const result = diffArray.map(item => {
    const value = item.split(" ")[0]
    return value.length === 1 ? `0${value}` : value
  }).join(":")

  return `${prefix}${result}`
}
