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
import {
  formatAddress,
  ReverseGeocodeResponse,
  TimeZoneDataResponse,
} from "../../utils/geolocation"
import {
  FeedResponse,
  ISSDataResponse,
  PlaceDetails,
  RawISSDataResponse,
  ApiConfig,
  AstronautsResponse,
  GetRawISSDataParams,
  OSMSearchResult,
  LivestreamIdResponse,
  GetWeatherForecastParams,
  WeatherForecastResult,
  GooglePlaceData,
  GooglePlaceDetail,
  TokensResponse,
  TokensVersionResponse,
} from "./api.types"
import { SatData } from "../../utils/satellite"
import i18n from "i18n-js"
import uniqBy from "lodash/uniqBy"
import qs from "qs"
import { getToken } from "../../utils/tokens"

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 100000,
}

const OPENMETEO_API_URL = "https://api.open-meteo.com/v1/forecast"

async function withRetry(fn: () => Promise<ApiResponse<any, any>>, retries = 3) {
  let count = retries
  let response: ApiResponse<any>

  while (count > 0) {
    response = await fn()
    if (response.ok || response.problem === "TIMEOUT_ERROR") return response
    count--
  }

  return response
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
    const query = qs.stringify({
      q: search,
      featureType: ["country", "state", "city"],
      format: "jsonv2",
      addressdetails: 1,
      "accept-language": i18n.locale,
    })
    const response: ApiResponse<OSMSearchResult[]> = await this.apisauce.get(
      `https://nominatim.spotthestation.org/search?${query}`,
      {},
      { baseURL: "", headers: { Accept: "*/*" } },
    )

    if (!response.ok || !Array.isArray(response.data)) {
      let googleToken = ""
      try {
        googleToken = await getToken("GOOGLE_API_TOKEN")
      } catch (e) {
        console.error(e)
        return { kind: "server" }
      }
      const responseGmaps: ApiResponse<{ predictions: GooglePlaceData[] }> =
        await this.apisauce.get(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${search.replaceAll(
            " ",
            "%20",
          )}&types=locality|postal_code|plus_code&language=${i18n.locale}&key=${googleToken}${
            sessionToken ? `&sessiontoken=${sessionToken}` : ""
          }`,
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
            d.address.village ||
            d.address.town ||
            d.address.city ||
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
    let tzdbToken = ""
    try {
      tzdbToken = await getToken("TIMEZONEDB_API_KEY")
    } catch (e) {
      console.error(e)
      return { kind: "server" }
    }

    let response: ApiResponse<any> = await withRetry(() =>
      this.apisauce.get(
        `https://api.timezonedb.com/v2.1/get-time-zone?key=${tzdbToken}&format=json&fields=zoneName&by=position&lat=${lat}&lng=${lon}`,
        {},
        { baseURL: "", timeout: 10000 },
      ),
    )

    if (response.ok && response.data?.zoneName) return { kind: "ok", zone: response.data.zoneName }
    response = await withRetry(() =>
      this.apisauce.get(
        `https://timeapi.io/api/TimeZone/coordinate?latitude=${lat}&longitude=${lon}`,
        {},
        { baseURL: "", timeout: 10000 },
      ),
    )

    if (response.ok && !response.data?.timeZone) return { kind: "ok", zone: response.data.timeZone }

    let googleToken = ""
    try {
      googleToken = await getToken("GOOGLE_API_TOKEN")
    } catch (e) {
      console.error(e)
      return { kind: "server" }
    }
    const responseGmaps: ApiResponse<any> = await withRetry(() =>
      this.apisauce.get(
        `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${
          Date.now() / 1000
        }&key=${googleToken}`,
        {},
        { baseURL: "" },
      ),
    )
    if (!responseGmaps.ok) {
      const problem = getGeneralApiProblem(responseGmaps)
      if (problem) return problem
    }

    return { kind: "ok", zone: responseGmaps.data.timeZoneId }
  }

  async getGoogleLocationDetails(
    placeId: string,
    sessionToken: string = null,
  ): Promise<{ kind: "ok"; place: PlaceDetails } | GeneralApiProblem> {
    let googleToken = ""
    try {
      googleToken = await getToken("GOOGLE_API_TOKEN")
    } catch (e) {
      console.error(e)
      return { kind: "server" }
    }
    const response: ApiResponse<any> = await this.apisauce.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name%2Cformatted_address%2Cgeometry&language=${
        i18n.locale
      }&key=${googleToken}${sessionToken ? `&sessiontoken=${sessionToken}` : ""}`,
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
    let googleToken = ""
    try {
      googleToken = await getToken("GOOGLE_API_TOKEN")
    } catch (e) {
      console.error(e)
      return { kind: "server" }
    }

    const response: ApiResponse<OSMSearchResult> = await this.apisauce.get(
      `https://nominatim.spotthestation.org/reverse?lat=${lat}&lon=${lon}&zoom=10&format=jsonv2&addressdetails=1&accept-language=${i18n.locale}`,
      {},
      { baseURL: "", headers: { Accept: "*/*" } },
    )

    if (!response.ok || !response.data.name) {
      const responseGmaps: ApiResponse<any> = await this.apisauce.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&result_type=locality|postal_code|plus_code&language=${i18n.locale}&key=${googleToken}`,
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

  async getAstronauts(): Promise<AstronautsResponse> {
    const response: ApiResponse<any> = await this.apisauce.get("/astronauts/", {})

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return { ok: false, data: "" }
    }

    return { ok: true, data: response.data }
  }

  async getLivestreamId(): Promise<LivestreamIdResponse> {
    const response: ApiResponse<any> = await withRetry(() =>
      this.apisauce.get("/youtube/livestream-id", {}),
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return { ok: false, data: "" }
    }

    return { ok: true, data: response.data }
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

  async getWeatherForecast({ lat, lon, from, to }: GetWeatherForecastParams) {
    const response: ApiResponse<WeatherForecastResult> = await this.apisauce.get(
      `${OPENMETEO_API_URL}?latitude=${lat}&longitude=${lon}&hourly=cloudcover&start_date=${
        from.toISOString().split("T")[0]
      }&end_date=${to.toISOString().split("T")[0]}`,
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return { ok: false, data: response.data }
    }

    return {
      ok: true,
      data: {
        ...response.data.hourly,
        time: response.data.hourly.time.map((t) => `${t}:00Z`),
      },
    }
  }

  async getTokensVersion(): Promise<TokensVersionResponse> {
    const response: ApiResponse<any> = await this.apisauce.get("/tokens/version", {}, {})

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return { ok: false, data: "" }
    }

    return { ok: true, data: response.data }
  }

  async getTokens(): Promise<TokensResponse> {
    const response: ApiResponse<any> = await this.apisauce.get("/tokens", {})

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return { ok: false, data: "" }
    }

    return { ok: true, data: response.data }
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
