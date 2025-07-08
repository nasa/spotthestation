import { SatData, ShadowInterval } from "../../utils/satellite"

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
  cloudCover: number | null
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
  sightingsHistory?: ISSSighting[]
  lastSightingOrbitPointAt?: string
  lastUpdatedAt?: string
  filterTimeOfDay?: string
  filterDuration?: string
  filterMaxHeight?: string
  timezone?: string
  filterCloudCover?: string
  firstHistorySightingOrbitPointAt?: string | null
  sightingsHistoryLastUpdatedAt?: string | null
}

export interface RawISSDataResponse {
  ok: boolean
  data: SatData[] | string
}

export interface ISSDataResponse {
  ok: boolean
  data: { points: SatData[]; shadowIntervals: ShadowInterval[] } | string
  kind?: string
}

export interface FeedResponse {
  ok: boolean
  places: string
}

export interface AstronautsSuccessResponse {
  ok: true
  data: [{ name: string; title: string; image: string; link: string }]
}

export interface AstronautsFailResponse {
  ok: false
  data: string
}

export type AstronautsResponse = AstronautsSuccessResponse | AstronautsFailResponse

export interface LivestreamIdSuccessResponse {
  ok: true
  data: { id: string }
}

export interface LivestreamIdFailResponse {
  ok: false
  data: string
}

export type LivestreamIdResponse = LivestreamIdSuccessResponse | LivestreamIdFailResponse

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

export interface OSMSearchResult {
  display_name: string
  place_id: number
  name: string
  lat: string
  lon: string
  address: Record<string, string>
  addresstype: string
}

export interface PlaceDetails {
  display_name: string
  name: string
  lat?: string
  lon?: string
  google_place_id?: string
}

export interface GetWeatherForecastParams {
  lat: number
  lon: number
  from: Date
  to: Date
}

export interface WeatherForecastResult {
  latitude: number
  longitude: number
  hourly: { time: string[]; cloudcover: number[] }
}

export interface GooglePlaceData {
  description: string
  id: string
  place_id: string
  reference: string
}

interface AddressComponent {
  long_name: string
  short_name: string
}

export interface GooglePlaceDetail {
  address_components: AddressComponent[]
  adr_address: string
  formatted_address: string
  icon: string
  id: string
  name: string
  place_id: string
  reference: string
  scope: "GOOGLE"
  types: string[]
  url: string
  utc_offset: number
  vicinity: string
}
