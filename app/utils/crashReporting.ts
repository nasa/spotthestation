import * as Sentry from "@sentry/react-native"
import Config from "../config"

export const initCrashReporting = () => {
  Sentry.init({
    dsn: Config.SENTRY_DSN,
    environment: Config.SENTRY_ENVIRONMENT,
    appHangTimeoutInterval: 5,
  })
}

/**
 * Error classifications used to sort errors on error reporting services.
 */
export enum ErrorType {
  /**
   * An error that would normally cause a red screen in dev
   * and force the user to sign out and restart.
   */
  FATAL = "Fatal",
  /**
   * An error caught by try/catch where defined.
   */
  HANDLED = "Handled",
}

/**
 * Manually report a handled error.
 */
export const reportCrash = (error: any, type: ErrorType = ErrorType.FATAL) => {
  if (__DEV__) {
    // Log to console in development
    const message = error.message || "Unknown"
    console.error(error)
    console.log(message, type)
  } else {
    Sentry.captureException(error)
  }
}
