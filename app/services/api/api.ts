/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://github.com/infinitered/ignite/blob/master/docs/Backend-API-Integration.md)
 * documentation for more details.
 */
import {
  ApiResponse, // @demo remove-current-line
  ApisauceInstance,
  create,
} from "apisauce"
import Config from "../../config"
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem" // @demo remove-current-line
import type { ApiConfig, GetRawISSDataParams } from "./api.types"
import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete"
import {
  LocationDetailsResponse,
  ReverseGeocodeResponse,
  TimeZoneDataResponse,
} from "../../utils/geolocation"
import { FeedResponse, ISSDataResponse, RawISSDataResponse } from "./api.types"
import { SatData } from "../../utils/astro"
import i18n from "i18n-js"

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 100000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  async getPlaces(
    search: string,
    sessionToken: string = null,
  ): Promise<{ kind: "ok"; places: GooglePlaceData[] } | GeneralApiProblem> {
    const response: ApiResponse<{ predictions: GooglePlaceData[] }> = await this.apisauce.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${search.replaceAll(
        " ",
        "%20",
      )}&types=locality|postal_code|plus_code&language=${i18n.locale}&key=${
        Config.GOOGLE_API_TOKEN
      }${sessionToken ? `&sessiontoken=${sessionToken}` : ""}`,
      {},
      { baseURL: "" },
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    return { kind: "ok", places: response.data.predictions }
  }

  async getLocationTimeZone(url: string): Promise<TimeZoneDataResponse | GeneralApiProblem> {
    const response: ApiResponse<any> = await this.apisauce.get(url, {}, { baseURL: "" })

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    return { kind: "ok", zone: response.data }
  }

  async reverseGeocode(
    lat: number,
    lon: number,
  ): Promise<ReverseGeocodeResponse | GeneralApiProblem> {
    const response: ApiResponse<any> = await this.apisauce.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&result_type=locality|postal_code|plus_code&language=${i18n.locale}&key=${Config.GOOGLE_API_TOKEN}`,
      {},
      { baseURL: "" },
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    const results = (response.data?.results || []) as GooglePlaceDetail[]
    const result =
      results?.find((r) => r.types?.includes("locality")) ||
      results?.find((r) => r.types?.includes("postal_code")) ||
      results[0]

    return {
      kind: "ok",
      name: result.address_components?.[0]?.long_name,
      address: result?.formatted_address,
      googlePlaceId: result?.place_id,
    }
  }

  async getLocationDetails(
    placeId: string,
    sessionToken: string = null,
  ): Promise<LocationDetailsResponse | GeneralApiProblem> {
    const response: ApiResponse<any> = await this.apisauce.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name%2Cformatted_address%2Cgeometry&language=${
        i18n.locale
      }&key=${Config.GOOGLE_API_TOKEN}${sessionToken ? `&sessiontoken=${sessionToken}` : ""}`,
      {},
      { baseURL: "" },
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    return {
      kind: "ok",
      name: response.data?.result?.name,
      address: response.data?.result?.formatted_address,
      googlePlaceId: placeId,
      location: response.data?.result?.geometry?.location,
    }
  }

  async getRawISSData(
    params?: GetRawISSDataParams,
  ): Promise<RawISSDataResponse | GeneralApiProblem> {
    const response: ApiResponse<SatData[]> = await this.apisauce.post(
      "/tracking/iss-data-raw",
      params || {},
      { baseURL: Config.API_URL },
    )

    if (!response.ok || !response.data.length) {
      const problem = getGeneralApiProblem(response)
      if (problem) return { ok: false, data: response.data }
      if (!response.data.length) return { ok: false, data: "Data is empty!" }
    }

    return { ok: true, data: response.data }
  }

  async getISSData(params?: GetRawISSDataParams): Promise<ISSDataResponse> {
    const response: ApiResponse<ISSDataResponse["data"]> = await this.apisauce.post(
      "/tracking/iss-data",
      params || {},
      { baseURL: Config.API_URL },
    )

    if (!response.ok || typeof response.data === "string") {
      const problem = getGeneralApiProblem(response)
      if (problem) return { ok: false, data: response.data }
      if (response.data === "string") return { ok: false, data: "Data is empty!" }
    }

    return { ok: true, data: response.data }
  }

  async getFeed(page: number): Promise<FeedResponse> {
    const response: ApiResponse<any> = await this.apisauce.get(
      `https://blogs.nasa.gov/spacestation/feed?paged=${page}`,
      {},
      { baseURL: "" },
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return { ok: false, places: "" }
    }

    return { ok: true, places: response.data }
  }

  async sendMail(subject: string, body: string) {
    const response: ApiResponse<any> = await this.apisauce.post(
      "/mailer/send-mail",
      { subject, body },
      { baseURL: Config.API_URL },
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem)
        return { ...problem, message: response?.originalError?.message ?? "Some error occured!" }
    }

    return response.data as string
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
