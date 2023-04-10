/**
 * These types indicate the shape of the data you expect to receive from your
 * API endpoint, assuming it's a JSON object like we have.
 */
export interface EpisodeItem {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: {
    link: string
    type: string
    length: number
    duration: number
    rating: { scheme: string; value: string }
  }
  categories: string[]
}

export interface ApiFeedResponse {
  status: string
  feed: {
    url: string
    title: string
    link: string
    author: string
    description: string
    image: string
  }
  items: EpisodeItem[]
}

export interface GetISSSightingsParams {
  zone: string,
  lat: number,
  lon: number
}

export interface GetISSDataParams {
  lat: number,
  lon: number
}

export interface ISSSighting {
  date: string
  maxHeight: number
  appears: string
  disappears: string
  visible: number
  dayStage: number
  notify?: boolean
}

export interface OrbitPoint {
  date: string
  latitude: number
  longitude: number,
  azimuth: number,
  elevation: number,
}

export interface ISSDataResponse {
  ok: boolean
  data: OrbitPoint[] | string
}

export interface ISSSightingResponse {
  ok: boolean
  data: ISSSighting[] | string
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
