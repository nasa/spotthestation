import SunCalc from "suncalc"
import { InteractionManager } from "react-native"
import { CatmullRomCurve3, Vector3 } from "three"

const runAfterInteractions = InteractionManager.runAfterInteractions.bind(InteractionManager) as (
  value: unknown,
) => any

export type SatData = {
  altitude: number
  date: string
  location: [number, number, number]
  velocity: [number, number, number]
}

export type ShadowInterval = [number, number]

type Period = {
  startTime: number
  endTime?: number
  maxElevation: number
  maxElevationTime: number
  minAzimuth: number
  maxAzimuth: number
  minAltitude: number
  maxAltitude: number
}

type Sighting = {
  date: string
  maxHeight: number
  minAzimuth: number
  maxAzimuth: number
  minAltitude: number
  maxAltitude: number
  visible: number
  dayStage: number
}

type StepperProps = {
  interval: number
  from: number
  shadowIntervals: ShadowInterval[]
  curve: CatmullRomCurve3
  curveGrid: number[]
  topos: [number, number, number]
}

function modulo(x: number, y: number) {
  return ((x % y) + y) % y
}

function reverseTerra(xyz: [number, number, number], gast, iterations = 3) {
  // Constants
  const DEG2RAD = Math.PI / 180.0
  const PI = Math.PI
  const TAU = 2 * Math.PI
  const AU_M = 149597870700.0 // Astronomical Unit in meters
  const ERAD = 6378136.6 // Earth's equatorial radius in meters
  const IERS_2010_INVERSE_EARTH_FLATTENING = 298.25642

  const [x, y, z] = xyz
  const R = Math.sqrt(x * x + y * y)

  const lon = modulo(Math.atan2(y, x) - 15 * DEG2RAD * gast - PI, TAU) - PI
  let lat = Math.atan2(z, R)

  const a = ERAD / AU_M
  const f = 1.0 / IERS_2010_INVERSE_EARTH_FLATTENING
  const e2 = 2.0 * f - f * f
  let i = 0
  let C = 1.0

  while (i < iterations) {
    i++
    C = 1.0 / Math.sqrt(1.0 - e2 * Math.sin(lat) ** 2.0)
    lat = Math.atan2(z + a * C * e2 * Math.sin(lat), R)
  }

  return [lat, lon]
}

function geodeticToECEF(latitude: number, longitude: number, altitude: number) {
  const a = 6378.137
  const b = 6356.7523142
  const f = (a - b) / a
  const e2 = 2 * f - f * f
  const normal = a / Math.sqrt(1 - e2 * Math.sin(latitude) ** 2)

  const x = (normal + altitude) * Math.cos(latitude) * Math.cos(longitude)
  const y = (normal + altitude) * Math.cos(latitude) * Math.sin(longitude)
  const z = (normal * (1 - e2) + altitude) * Math.sin(latitude)

  return { x, y, z }
}

function topocentric(
  latitude: number,
  longitude: number,
  altitude: number,
  x: number,
  y: number,
  z: number,
) {
  const { x: ox, y: oy, z: oz } = geodeticToECEF(latitude, longitude, altitude)

  const rx = x - ox
  const ry = y - oy
  const rz = z - oz

  const topS =
    Math.sin(latitude) * Math.cos(longitude) * rx +
    Math.sin(latitude) * Math.sin(longitude) * ry -
    Math.cos(latitude) * rz

  const topE = -Math.sin(longitude) * rx + Math.cos(longitude) * ry

  const topZ =
    Math.cos(latitude) * Math.cos(longitude) * rx +
    Math.cos(latitude) * Math.sin(longitude) * ry +
    Math.sin(latitude) * rz

  return { topS, topE, topZ }
}

function topocentricToLookAngles(topS: number, topE: number, topZ: number) {
  const rangeSat = Math.sqrt(topS * topS + topE * topE + topZ * topZ)
  const elevation = Math.asin(topZ / rangeSat)
  const azimuth = Math.atan2(-topE, topS) + Math.PI

  return { azimuth, elevation }
}

function ECEFToLookAngles(
  latitude: number,
  longitude: number,
  altitude: number,
  x: number,
  y: number,
  z: number,
) {
  const { topS, topE, topZ } = topocentric(
    (latitude * Math.PI) / 180,
    (longitude * Math.PI) / 180,
    altitude,
    x,
    y,
    z,
  )
  return topocentricToLookAngles(topS, topE, topZ)
}

function altaz(location: [number, number, number], topos: [number, number, number]) {
  const { elevation, azimuth } = ECEFToLookAngles(
    topos[0],
    topos[1],
    topos[2],
    location[0],
    location[1],
    location[2],
  )
  return {
    elevation: (elevation * 180) / Math.PI,
    azimuth: (azimuth * 180) / Math.PI,
  }
}

function stepper({ interval, from, shadowIntervals, curve, curveGrid, topos }: StepperProps) {
  let timestamp = from
  let startIdx = interval < 0 ? curveGrid.length - 1 : 0
  let shadowIdx = interval < 0 ? shadowIntervals.length - 1 : 0

  return () => {
    if (timestamp > curveGrid[curveGrid.length - 1]) return null
    if (timestamp < curveGrid[0]) return null

    if (shadowIntervals.length > 0) {
      if (interval < 0) {
        while (timestamp / 1000 < shadowIntervals[shadowIdx][0] && shadowIdx > 0) {
          --shadowIdx
        }
      } else {
        while (
          timestamp / 1000 > shadowIntervals[shadowIdx][1] &&
          shadowIdx < shadowIntervals.length - 1
        ) {
          ++shadowIdx
        }
      }
    }

    if (interval < 0) {
      while (timestamp < curveGrid[startIdx] && startIdx > 0) {
        --startIdx
      }
    } else {
      while (timestamp > curveGrid[startIdx + 1] && startIdx < curveGrid.length - 2) {
        ++startIdx
      }
    }

    const dt1 = curveGrid[startIdx]
    const dt2 = curveGrid[startIdx + 1]

    const dt = (timestamp - dt1) / (dt2 - dt1)

    const ts = startIdx / (curveGrid.length - 1)
    const te = (startIdx + 1) / (curveGrid.length - 1)
    const t = ts + (te - ts) * dt
    const pt = curve.getPoint(t)

    const shadowInterval = shadowIntervals[shadowIdx]
    const isInShadow =
      shadowInterval &&
      timestamp / 1000 >= shadowInterval[0] &&
      timestamp / 1000 <= shadowInterval[1]

    const res = {
      time: timestamp,
      isInShadow,
      ...altaz([pt.x, pt.y, pt.z], topos),
    }

    timestamp = timestamp + interval
    return res
  }
}

async function findEvents(
  data: SatData[],
  shadowIntervals: ShadowInterval[],
  topos: [number, number, number],
  threshold = 0.0,
) {
  if (data.length === 0) return []
  const curve = new CatmullRomCurve3(data.map((pt) => new Vector3(...pt.location)))
  const curveGrid = data.map((pt) => new Date(pt.date).valueOf())

  const periods: Period[] = []
  const stepperSettings = { shadowIntervals, curve, curveGrid, topos }
  let next = stepper({
    interval: 15000,
    from: curveGrid[0],
    ...stepperSettings,
  })

  let idx = 1
  while (true) {
    ++idx
    if (idx % 10 === 0) {
      await new Promise(runAfterInteractions)
    }

    const point = next()
    if (!point) break
    if (!point || point.elevation <= threshold || point.isInShadow) continue

    const currentPeriod: Period = {
      startTime: null,
      minAltitude: 0,
      minAzimuth: 0,
      maxElevation: 0,
      maxAzimuth: 0,
      maxAltitude: 0,
      maxElevationTime: null,
    }

    const back = stepper({
      interval: -1000,
      from: point.time,
      ...stepperSettings,
    })

    const forward = stepper({
      interval: 1000,
      from: point.time,
      ...stepperSettings,
    })

    while (true) {
      const point = back()
      if (!point || point.elevation <= threshold || point.isInShadow) break

      currentPeriod.startTime = point.time
      currentPeriod.minAzimuth = point.azimuth
      currentPeriod.minAltitude = point.elevation

      if (point.elevation > currentPeriod.maxElevation) {
        currentPeriod.maxElevation = point.elevation
        currentPeriod.maxElevationTime = point.time
      }
    }

    while (true) {
      const point = forward()
      if (!point || point.elevation <= threshold || point.isInShadow) break

      currentPeriod.endTime = point.time
      currentPeriod.maxAzimuth = point.azimuth
      currentPeriod.maxAltitude = point.elevation

      if (point.elevation > currentPeriod.maxElevation) {
        currentPeriod.maxElevation = point.elevation
        currentPeriod.maxElevationTime = point.time
      }
    }

    periods.push(currentPeriod)
    next = stepper({
      interval: 15000,
      from: currentPeriod.endTime,
      ...stepperSettings,
    })

    next()
  }

  return periods
}

function calculateDayStage(twilight: SunCalc.GetTimesResult, eventTime: Date) {
  if (twilight.nightEnd >= eventTime || eventTime >= twilight.night) {
    return 0
  }
  if (
    (twilight.nightEnd < eventTime && eventTime < twilight.dawn) ||
    (twilight.dusk < eventTime && eventTime < twilight.night)
  ) {
    return 1
  }

  return 2
}

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

export function degToCompass(d: number) {
  return compassDirections[Math.floor(((d + 360 / 16 / 2) % 360) / (360 / 16))]
}

export async function getSightings(
  data: SatData[],
  shadowIntervals: ShadowInterval[],
  lat: number,
  lon: number,
) {
  const events = await findEvents(data, shadowIntervals, [lat, lon, 0], 10)
  const res: Sighting[] = []
  events.forEach((event) => {
    const ti0 = new Date(event.startTime)
    const ti1 = new Date(event.maxElevationTime)
    const ti2 = new Date(event.endTime)

    const twilight = SunCalc.getTimes(ti1, lat, lon)
    const dayStage = calculateDayStage(twilight, ti1)
    if (dayStage === 0 || dayStage === 1) {
      const item = {
        date: ti0.toISOString(),
        maxHeight: Math.round(event.maxElevation),
        minAltitude: Math.round(event.minAltitude),
        maxAltitude: Math.round(event.maxAltitude),
        minAzimuth: event.minAzimuth,
        maxAzimuth: event.maxAzimuth,
        visible: Math.round((ti2.valueOf() - ti0.valueOf()) / 60000.0),
        dayStage,
      }
      res.push(item)
    }
  })

  return {
    sightings: res.filter((s) => s.visible > 0),
    lastSightingOrbitPointAt:
      data.length > 0 ? new Date(data[data.length - 1].date).toISOString() : null,
  }
}

export function getSatPath(data: SatData[], lat: number, lon: number) {
  return data.map((d) => {
    const rt = reverseTerra(d.location, 0)
    const { azimuth, elevation } = ECEFToLookAngles(lat, lon, 0, ...d.location)

    return {
      date: d.date,
      latitude: (rt[0] * 180) / Math.PI,
      longitude: (rt[1] * 180) / Math.PI,
      azimuth: (azimuth * 180) / Math.PI,
      elevation: (elevation * 180) / Math.PI,
      altitude: d.altitude,
    }
  })
}

export async function linearInterpolation(data: SatData[], parts) {
  let interpolatedData: SatData[] = []
  for (let i = 0; i < data.length - 1; i++) {
    const startDate = new Date(data[i].date).valueOf()
    const endDate = new Date(data[i + 1].date).valueOf()
    const deltaTime = (endDate - startDate) / parts

    for (let j = 1; j < parts; j++) {
      const intermediateLocation = data[i].location.map((coord, k) => {
        return coord + (j * (data[i + 1].location[k] - coord)) / parts
      }) as [number, number, number]

      const intermediateVelocity = data[i].velocity.map((vel, k) => {
        return vel + (j * (data[i + 1].velocity[k] - vel)) / parts
      }) as [number, number, number]

      const intermediateAltitude =
        data[i].altitude + (j * (data[i + 1].altitude - data[i].altitude)) / parts

      const intermediateData = {
        date: new Date(startDate + j * deltaTime).toISOString(),
        location: intermediateLocation,
        velocity: intermediateVelocity,
        altitude: intermediateAltitude,
      }
      interpolatedData.push(intermediateData)
    }

    if (i % 10 === 0) await new Promise(runAfterInteractions)
  }

  interpolatedData = [data[0], ...interpolatedData, data[data.length - 1]]
  return interpolatedData
}
