import { SatData, ShadowInterval } from "../../utils/astro"

/**
 * These types indicate the shape of the data you expect to receive from your
 * API endpoint, assuming it's a JSON object like we have.
 */

export interface GetRawISSDataParams {
  from?: string
  to?: string
}

export interface ISSSighting {
  date: string
  maxHeight: number
  minAzimuth: number
  maxAzimuth: number
  minAltitude: number
  maxAltitude: number
  visible: number
  dayStage: number
  notify?: boolean
}

export interface OrbitPoint {
  date: string
  latitude: number
  longitude: number
  azimuth: number
  elevation: number
  altitude: number
}

export interface LocationType {
  title: string
  subtitle: string
  location: {
    lat: number
    lng: number
  }
  sightings?: ISSSighting[]
  lastSightingOrbitPointAt?: string
  filterTimeOfDay?: string
  filterDuration?: string
  googlePlaceId?: string
}

export interface RawISSDataResponse {
  ok: boolean
  data: SatData[] | string
}

export interface ISSDataResponse {
  ok: boolean
  data: { points: SatData[]; shadowIntervals: ShadowInterval[] } | string
}

export interface FeedResponse {
  ok: boolean
  places: string
}

/**
 * The options used to configure apisauce.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}
