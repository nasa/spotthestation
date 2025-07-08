import { Locale, format, parseISO, intervalToDuration, addDays } from "date-fns"
import { formatInTimeZone } from "date-fns-tz"
import I18n from "i18n-js"
import { getCalendars } from "expo-localization"
import moment from "moment-timezone"
import { enUS, fr, uk, ja, es, it, nl, ru, sv, hi, de, nb } from "date-fns/locale"
import { translate } from "../i18n"

export const initPolyfills = () => {
  if ((global as any).HermesInternal) {
    require("@formatjs/intl-getcanonicallocales/polyfill").default // eslint-disable-line no-unused-expressions
    require("@formatjs/intl-locale/polyfill").default // eslint-disable-line no-unused-expressions
    require("@formatjs/intl-datetimeformat/polyfill").default // eslint-disable-line no-unused-expressions
    require("@formatjs/intl-datetimeformat/locale-data/en").default // eslint-disable-line no-unused-expressions
    require("@formatjs/intl-datetimeformat/add-all-tz").default // eslint-disable-line no-unused-expressions
  }
}

type Options = Parameters<typeof format>[2]

const getLocale = (): Locale => {
  switch (I18n.locale) {
    case "fr":
      return fr
    case "uk":
      return uk
    case "ja":
      return ja
    case "es":
      return es
    case "it":
      return it
    case "nl":
      return nl
    case "ru":
      return ru
    case "sv":
      return sv
    case "hi":
      return hi
    case "de":
      return de
    case "nb":
      return nb
    default:
      return enUS
  }
}

export const formatDate = (date: string, dateFormat?: string, options?: Options) => {
  const locale = getLocale()
  const dateOptions = {
    locale,
    ...options,
  }
  return format(parseISO(date), dateFormat ?? "MMM dd, yyyy", dateOptions)
}

export const formatDateWithTZ = (date: string, dateFormat?: string, timeZone?: string) => {
  const locale = getLocale()
  const dateOptions = {
    locale,
  }
  return formatInTimeZone(new Date(date), timeZone, dateFormat ?? "MMM dd, yyyy", dateOptions)
}

export const formatDuration = (
  { start, end }: { start: Date; end: Date },
  prefix: string,
): string => {
  const duration = intervalToDuration({
    start,
    end,
  })

  const formatNumber = (num: number | undefined) =>
    Math.abs(num || 0)
      .toString()
      .padStart(2, "0")
  return `${prefix}${formatNumber(duration.days)}:${formatNumber(duration.hours)}:${formatNumber(
    duration.minutes,
  )}:${formatNumber(duration.seconds)}`
}

export const formatSightingDateTime = (
  date: string,
  timeFormat: string,
  timezone: string,
  isUS: boolean,
) => {
  const today = formatDateWithTZ(
    new Date().toISOString(),
    `${isUS ? "MMM dd, yyyy" : "dd MMM yyyy"}`,
    timezone,
  )
  const yesterday = formatDateWithTZ(
    addDays(new Date(), 1).toISOString(),
    `${isUS ? "MMM dd, yyyy" : "dd MMM yyyy"}`,
    timezone,
  )

  const tf = timeFormat === "24hour" ? "H:mm" : "h:mm aa"
  const formatted = formatDateWithTZ(date, isUS ? "MMM dd, yyyy" : "dd MMM yyyy", timezone)
  const shortTZ = getShortTZ(timezone)
  const formattedTime = formatDateWithTZ(date, tf, timezone)

  if (formatted === today)
    return `${translate("homeScreen.selectSightings.today")}, ${formattedTime} ${shortTZ}`
  if (formatted === yesterday)
    return `${translate("homeScreen.selectSightings.tomorrow")}, ${formattedTime} ${shortTZ}`
  return `${formatted}, ${formattedTime} ${shortTZ}`
}

export const isDateBetweenHours = (date: Date, start: Date, end: Date) => {
  const startValue = format(start, "HHmmss")
  const endValue = format(end, "HHmmss")
  const value = format(date, "HHmmss")

  if (endValue < startValue) {
    return (value >= startValue && value <= "235959") || (value >= "000000" && value < endValue)
  }

  return value >= startValue && value < endValue
}

export const getShortTZ = (timeZone: string) => {
  let shortTz = moment.tz(new Date(), timeZone).format("z")
  if (shortTz.startsWith("+") || shortTz.startsWith("-")) shortTz = `UTC${shortTz}`
  return shortTz
}

export const getCurrentTimeZone = () => {
  return getCalendars()?.[0]?.timeZone || "US/Central"
}
