import { API_URL, GOOGLE_API_TOKEN, MAPBOX_API_TOKEN, ISS_TRAJECTORY_DATA_FILE_URL, ISS_TRAJECTORY_DATA_API_URL, CONTACT_EMAIL, SENTRY_DSN } from "@env"

export interface ConfigBaseProps {
  persistNavigation: "always" | "dev" | "prod" | "never"
  catchErrors: "always" | "dev" | "prod" | "never"
  exitRoutes: string[]
  GOOGLE_API_TOKEN: string
  MAPBOX_API_TOKEN: string
  API_URL: string
  ISS_TRAJECTORY_DATA_FILE_URL: string
  ISS_TRAJECTORY_DATA_API_URL: string
  CONTACT_EMAIL: string
  SENTRY_DSN: string
}

export type PersistNavigationConfig = ConfigBaseProps["persistNavigation"]

const BaseConfig: ConfigBaseProps = {
  // This feature is particularly useful in development mode, but
  // can be used in production as well if you prefer.
  persistNavigation: "dev",

  /**
   * Only enable if we're catching errors in the right environment
   */
  catchErrors: "always",

  /**
   * This is a list of all the route names that will exit the app if the back button
   * is pressed while in that screen. Only affects Android.
   */
  exitRoutes: [],

  GOOGLE_API_TOKEN,
  
  MAPBOX_API_TOKEN,

  API_URL,

  ISS_TRAJECTORY_DATA_FILE_URL,
  
  ISS_TRAJECTORY_DATA_API_URL,
  
  CONTACT_EMAIL,

  SENTRY_DSN
}

export default BaseConfig
