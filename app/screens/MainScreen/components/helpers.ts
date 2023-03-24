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
  if (!diff.includes('second') ) diff = `${diff},00 seconds`
  const result = diff.split(",").map(item => {
    const value = item.split(" ")[0]
    return value.length === 1 ? `0${value}` : value
  }).join(":") 

  if (result.length === 0) return `00:00:00`
  if (result.length === 2) return `00:00:${result}`
  if (result.length === 5) return `00:${result}`

  return `${prefix}${result}`
}
