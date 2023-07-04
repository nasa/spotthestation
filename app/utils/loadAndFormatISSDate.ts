export interface Epoch {
  date: string
  location: number[]
  velocity: number[]
}

export interface ISSData {
  id?: string
  name?: string
  centerName?: string
  mass?: number
  dragArea?: number
  gragCoefficient?: number
  solarRadArea?: number
  solarRadCoefficient?: number
  epoches?: Epoch[]
}

const getValue = (target: string[], field: string, splitter: string): string => {
  return target
    .find((line) => line.match(field))
    ?.split(splitter)
    .pop()
    .trim()
}

const parseEpoch = (epoch: string): Epoch => {
  const epochLines = epoch.split(" ")
  return {
    date: epochLines[0],
    location: epochLines.slice(1, 3).map((value) => parseFloat(value)),
    velocity: epochLines.slice(3).map((value) => parseFloat(value)),
  }
}

export const textToObject = (text: string): ISSData => {
  const lines: string[] = text.split("\r\n")
  const splitLineIndex = lines.findIndex((line) => line.match("COMMENT End sequence of events"))
  const rawEpoches = lines.slice(splitLineIndex)

  return {
    id: getValue(lines, "OBJECT_ID", "="),
    name: getValue(lines, "OBJECT_NAME", "="),
    centerName: getValue(lines, "CENTER_NAME", "="),
    mass: parseFloat(getValue(lines, "MASS", "=")),
    dragArea: parseFloat(getValue(lines, "DRAG_AREA", "=")),
    gragCoefficient: parseFloat(getValue(lines, "DRAG_COEFF", "=")),
    solarRadArea: parseFloat(getValue(lines, "SOLAR_RAD_AREA", "=")),
    solarRadCoefficient: parseFloat(getValue(lines, "SOLAR_RAD_COEFF", "=")),
    epoches: rawEpoches.map((epoch) => parseEpoch(epoch)),
  }
}
