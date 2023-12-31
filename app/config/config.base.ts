import {
  API_URL,
  GOOGLE_API_TOKEN,
  MAPBOX_API_TOKEN,
  SENTRY_DSN,
  SENTRY_ENVIRONMENT,
  DISABLE_YELLOWBOX,
} from "react-native-dotenv"

export interface ConfigBaseProps {
  persistNavigation: "always" | "dev" | "prod" | "never"
  catchErrors: "always" | "dev" | "prod" | "never"
  exitRoutes: string[]
  GOOGLE_API_TOKEN: string
  MAPBOX_API_TOKEN: string
  API_URL: string
  SENTRY_DSN: string
  SENTRY_ENVIRONMENT: string
  DISABLE_YELLOWBOX: string
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
  SENTRY_DSN,
  SENTRY_ENVIRONMENT,
  DISABLE_YELLOWBOX,
}

export default BaseConfig
