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
import type {
  ApiConfig,
} from "./api.types"
import { GooglePlaceDetail } from "react-native-google-places-autocomplete"
import { ISSData } from "../../utils/loadAndFormatISSDate"

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

  async getPlaces(url: string, key: "results" | "candidates"): Promise<{ kind: "ok"; places: GooglePlaceDetail[] } | GeneralApiProblem> {
    const response: ApiResponse<Record<typeof key, GooglePlaceDetail[]>> = await this.apisauce.get(url, {}, { baseURL: "" })

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    return { kind: "ok", places: response.data[key] }
  }

  async getISSData(): Promise<ISSData | GeneralApiProblem> {
    const response: ApiResponse<ISSData> = await this.apisauce.get("/tracking/nasa", {}, { baseURL: Config.ISS_TRAJECTORY_DATA_API_URL })
    console.log(response)
    
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    return response.data
  }

  async getISSSightings(): Promise<any> {
    const response: ApiResponse<any> = await this.apisauce.get("/tracking/oem-nasa", {}, { baseURL: Config.ISS_TRAJECTORY_DATA_API_URL })
    console.log(response)
    
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
