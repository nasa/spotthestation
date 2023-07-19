/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Locale, format, parseISO } from "date-fns"
import { formatInTimeZone } from 'date-fns-tz'
import I18n from "i18n-js"
import { getLocales, getCalendars } from "expo-localization"
import moment from "moment-timezone"

import en from "date-fns/locale/en-US"
import fr from "date-fns/locale/fr"
import uk from "date-fns/locale/uk"
import ja from "date-fns/locale/ja"
import es from "date-fns/locale/es"
import it from "date-fns/locale/it"
import nl from "date-fns/locale/nl"
import ru from "date-fns/locale/ru"
import sv from "date-fns/locale/sv"
import hi from "date-fns/locale/hi"
import de from "date-fns/locale/de"
import nb from "date-fns/locale/nb"
import { LocationType } from "../screens/OnboardingScreen/SignupLocation"
import * as storage from "../utils/storage"
import { getLocationTimeZone } from "./geolocation"
import { Platform } from "react-native"

if (global.HermesInternal) {
  if (Platform.OS === 'ios') {
    // Polyfills required to use Intl with Hermes engine
    require('@formatjs/intl-getcanonicallocales/polyfill').default
    require('@formatjs/intl-locale/polyfill').default
    require('@formatjs/intl-pluralrules/polyfill').default
    require('@formatjs/intl-pluralrules/locale-data/en').default
    require('@formatjs/intl-numberformat/polyfill').default
    require('@formatjs/intl-numberformat/locale-data/en').default
    require('@formatjs/intl-datetimeformat/polyfill').default
    require('@formatjs/intl-datetimeformat/locale-data/en').default
    require('@formatjs/intl-datetimeformat/add-all-tz').default
  } else {
    require('@formatjs/intl-getcanonicallocales/polyfill')
    require('@formatjs/intl-locale/polyfill')
    require('@formatjs/intl-datetimeformat/polyfill')
    require('@formatjs/intl-datetimeformat/locale-data/en')
    require('@formatjs/intl-datetimeformat/add-all-tz')
  }
}

type Options = Parameters<typeof format>[2]

const getLocale = (): Locale => {
  switch (I18n.locale) {
    case 'fr': return fr
    case 'uk': return uk
    case 'ja': return ja
    case 'es': return es
    case 'it': return it
    case 'nl': return nl
    case 'ru': return ru
    case 'sv': return sv
    case 'hi': return hi
    case 'de': return de
    case 'nb': return nb
    default: return en
  }
}

export const formatDate = (date: string, dateFormat?: string, options?: Options) => {
  const locale = getLocale()
  const dateOptions = {
    ...options,
    locale,
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

export const isDateBetweenHours = (date: Date, start: Date, end: Date) => {
  const startHours = start.getHours()
  const startMinutes = start.getMinutes()
  const startSeconds = start.getSeconds()
  const endHours = end.getHours()
  const endMinutes = end.getMinutes()
  const endSeconds = end.getSeconds()

  const startDate = new Date(date)
  startDate.setHours(startHours, startMinutes, startSeconds, 0)
  const endDate = new Date(date)
  endDate.setHours(endHours, endMinutes, endSeconds, 0)

  if (startHours === endHours && startMinutes === endMinutes && startSeconds === endSeconds)
    return false

  if (endDate < startDate) endDate.setDate(endDate.getDate() + 1)

  return date >= startDate && date < endDate
}

const getLocation = async () => {
  const location: LocationType = await storage.load("selectedLocation")
  if (!location) return storage.load("currentLocation")
  return location
}

export const getShortTZ = (timeZone: string) => {
  return moment.tz(new Date(), timeZone).format("z")
}

export const getCurrentTimeZome = async (value?: LocationType) => {
  const currentLocation: LocationType = value || (await getLocation())
  if (currentLocation) {
    const { location } = currentLocation
    const { kind, zone } = await getLocationTimeZone(location, Date.now() / 1000)
    const timeZone = kind === "ok" ? zone.timeZoneId : "US/Central"
    const regionFormat = ["US", "America"].includes(timeZone.split("/")[0]) ? "US" : "other"

    return {
      timeZone,
      regionFormat,
    }
  } else {
    return {
      timeZone: getCalendars()[0].timeZone,
      regionFormat: getLocales()[0].regionCode,
    }
  }
}
