import SunCalc from "suncalc"
import { InteractionManager } from "react-native"

const runAfterInteractions = InteractionManager.runAfterInteractions.bind(InteractionManager) as (
  value: unknown,
) => any

export type SatData = {
  altitude: number
  date: string
  location: [number, number, number]
  velocity: [number, number, number]
}

type Period = {
  startTime: string
  endTime?: string
  maxElevation: number
  maxElevationTime: string
  minAzimuth: number
  maxAzimuth: number
  minAltitude: number
  maxAltitude: number
}

type Sighting = {
  date: string
  maxHeight: number
  appears: string
  disappears: string
  visible: number
  dayStage: number
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

function altaz(sat: SatData[], topos: [number, number, number]) {
  return sat.map((position) => {
    const r = position.location
    const { elevation, azimuth } = ECEFToLookAngles(topos[0], topos[1], topos[2], r[0], r[1], r[2])
    return {
      time: position.date,
      elevation: (elevation * 180) / Math.PI,
      azimuth: (azimuth * 180) / Math.PI,
    }
  })
}

function findEvents(sat: SatData[], topos: [number, number, number], threshold = 0.0) {
  const data = altaz(sat, topos)

  const periods: Period[] = []
  let currentPeriod: Period = null

  data.forEach((d) => {
    if (d.elevation > threshold) {
      if (currentPeriod === null) {
        currentPeriod = {
          startTime: d.time,
          maxElevation: d.elevation,
          maxElevationTime: d.time,
          minAzimuth: d.azimuth,
          maxAzimuth: d.azimuth,
          minAltitude: d.elevation,
          maxAltitude: d.elevation,
        }
      } else {
        if (d.elevation > currentPeriod.maxElevation) {
          currentPeriod.maxElevation = d.elevation
          currentPeriod.maxElevationTime = d.time
        }
        if (d.azimuth < currentPeriod.minAzimuth) {
          currentPeriod.minAzimuth = d.azimuth
          currentPeriod.minAltitude = d.elevation
        } else if (d.azimuth > currentPeriod.maxAzimuth) {
          currentPeriod.maxAzimuth = d.azimuth
          currentPeriod.maxAltitude = d.elevation
        }
      }
    } else if (currentPeriod !== null) {
      currentPeriod.endTime = d.time
      periods.push(currentPeriod)
      currentPeriod = null
    }
  })

  return periods
}

function calculateDayStage(twinlites: SunCalc.GetTimesResult, eventTime: Date) {
  if (twinlites.nightEnd > eventTime || eventTime > twinlites.night) {
    return 0
  }
  if (
    (twinlites.nightEnd < eventTime && eventTime < twinlites.sunrise) ||
    (twinlites.dusk < eventTime && eventTime < twinlites.night)
  ) {
    return 1
  }
  if (twinlites.sunrise < eventTime && eventTime < twinlites.dusk) {
    return 2
  }

  return null
}

function degToCompass(d: number) {
  return [
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
  ][Math.floor(((d + 360 / 16 / 2) % 360) / (360 / 16))]
}

export function getSightings(data: SatData[], lat: number, lon: number) {
  const events = findEvents(data, [lat, lon, 0], 10)
  const res: Sighting[] = []
  events.forEach((event) => {
    const ti0 = new Date(event.startTime)
    const ti1 = new Date(event.maxElevationTime)
    const ti2 = new Date(event.endTime)

    const twinlites = SunCalc.getTimes(ti1, lat, lon)
    const dayStage = calculateDayStage(twinlites, ti1)
    if (ti1 < twinlites.dawn || twinlites.sunset < ti1) {
      const item = {
        date: ti0.toISOString(),
        maxHeight: Math.round(event.maxElevation),
        appears: Math.round(event.minAltitude).toString() + " " + degToCompass(event.minAzimuth),
        disappears: Math.round(event.maxAltitude).toString() + " " + degToCompass(event.maxAzimuth),
        visible: Math.ceil((ti2.valueOf() - ti0.valueOf()) / 60000.0),
        dayStage,
      }
      res.push(item)
    }
  })

  return res
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
