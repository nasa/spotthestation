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
import type { ApiConfig, GetRawISSDataParams, OSMSearchResult } from "./api.types"
import {
  formatAddress,
  ReverseGeocodeResponse,
  TimeZoneDataResponse,
} from "../../utils/geolocation"
import { FeedResponse, ISSDataResponse, PlaceDetails, RawISSDataResponse } from "./api.types"
import { SatData } from "../../utils/astro"
import i18n from "i18n-js"
import uniqBy from "lodash/uniqBy"
import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete"

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
  ): Promise<{ kind: "ok"; places: PlaceDetails[] } | GeneralApiProblem> {
    const response: ApiResponse<OSMSearchResult[]> = await this.apisauce.get(
      `https://nominatim.spotthestation.org/search?q=${search.replaceAll(
        " ",
        "%20",
      )}&featureType=city&format=jsonv2&addressdetails=1&accept-language=${i18n.locale}`,
      {},
      { baseURL: "", headers: { Accept: "*/*" } },
    )

    if (!response.ok || !Array.isArray(response.data)) {
      const responseGmaps: ApiResponse<{ predictions: GooglePlaceData[] }> =
        await this.apisauce.get(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${search.replaceAll(
            " ",
            "%20",
          )}&types=locality|postal_code|plus_code&language=${i18n.locale}&key=${
            Config.GOOGLE_API_TOKEN
          }${sessionToken ? `&sessiontoken=${sessionToken}` : ""}`,
          {},
          { baseURL: "" },
        )

      if (!responseGmaps.ok) {
        const problem = getGeneralApiProblem(responseGmaps)
        if (problem) return problem
      }

      return {
        kind: "ok",
        places: responseGmaps.data.predictions.map((place) => ({
          display_name: place.description,
          name: place.description,
          google_place_id: place.place_id,
        })),
      }
    }

    return {
      kind: "ok",
      places: uniqBy(
        response.data.map((d) => ({
          ...d,
          name:
            d.name ||
            d.address.city ||
            d.address.town ||
            d.address.village ||
            d.address.municipality ||
            d.address.county ||
            formatAddress(d),
          display_name: formatAddress(d),
        })),
        "display_name",
      ),
    }
  }

  async getLocationTimeZone(
    lat: number,
    lon: number,
  ): Promise<TimeZoneDataResponse | GeneralApiProblem> {
    const response: ApiResponse<any> = await this.apisauce.get(
      `https://timeapi.io/api/TimeZone/coordinate?latitude=${lat}&longitude=${lon}`,
      {},
      { baseURL: "" },
    )

    if (!response.ok || !response.data?.timeZone) {
      const responseGmaps: ApiResponse<any> = await this.apisauce.get(
        `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${
          Date.now() / 1000
        }&key=${Config.GOOGLE_API_TOKEN}`,
        {},
        { baseURL: "" },
      )
      if (!responseGmaps.ok) {
        const problem = getGeneralApiProblem(responseGmaps)
        if (problem) return problem
      }

      return { kind: "ok", zone: responseGmaps.data.timeZoneId }
    }

    return { kind: "ok", zone: response.data.timeZone }
  }

  async getGoogleLocationDetails(
    placeId: string,
    sessionToken: string = null,
  ): Promise<{ kind: "ok"; place: PlaceDetails } | GeneralApiProblem> {
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
      place: {
        name: response.data?.result?.name,
        display_name: response.data?.result?.formatted_address,
        lat: String(response.data?.result?.geometry?.location?.lat),
        lon: String(response.data?.result?.geometry?.location?.lng),
      },
    }
  }

  async reverseGeocode(
    lat: number,
    lon: number,
  ): Promise<ReverseGeocodeResponse | GeneralApiProblem> {
    const response: ApiResponse<OSMSearchResult> = await this.apisauce.get(
      `https://nominatim.spotthestation.org/reverse?lat=${lat}&lon=${lon}&zoom=10&format=jsonv2&addressdetails=1&accept-language=${i18n.locale}`,
      {},
      { baseURL: "", headers: { Accept: "*/*" } },
    )

    if (!response.ok || !response.data.name) {
      const responseGmaps: ApiResponse<any> = await this.apisauce.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&result_type=locality|postal_code|plus_code&language=${i18n.locale}&key=${Config.GOOGLE_API_TOKEN}`,
        {},
        { baseURL: "" },
      )

      if (!responseGmaps.ok) {
        const problem = getGeneralApiProblem(responseGmaps)
        if (problem) return problem
      }

      const results = (responseGmaps.data?.results || []) as GooglePlaceDetail[]
      const result =
        results?.find((r) => r.types?.includes("locality")) ||
        results?.find((r) => r.types?.includes("postal_code")) ||
        results[0]

      return {
        kind: "ok",
        name: result.address_components?.[0]?.long_name,
        address: result?.formatted_address,
      }
    }

    return {
      kind: "ok",
      name: response.data.name,
      address: formatAddress(response.data),
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
      if (problem) return { ok: false, data: response.data, kind: problem.kind }
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
