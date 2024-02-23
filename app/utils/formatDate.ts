import { Locale, format, parseISO } from "date-fns"
import { formatInTimeZone } from "date-fns-tz"
import I18n from "i18n-js"
import { getCalendars } from "expo-localization"
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
import { Platform } from "react-native"

if ((global as any).HermesInternal) {
  if (Platform.OS === "ios") {
    // Polyfills required to use Intl with Hermes engine
    require("@formatjs/intl-getcanonicallocales/polyfill").default // eslint-disable-line no-unused-expressions
    require("@formatjs/intl-locale/polyfill").default // eslint-disable-line no-unused-expressions
    require("@formatjs/intl-pluralrules/polyfill").default // eslint-disable-line no-unused-expressions
    require("@formatjs/intl-pluralrules/locale-data/en").default // eslint-disable-line no-unused-expressions
    require("@formatjs/intl-numberformat/polyfill").default // eslint-disable-line no-unused-expressions
    require("@formatjs/intl-numberformat/locale-data/en").default // eslint-disable-line no-unused-expressions
    require("@formatjs/intl-datetimeformat/polyfill").default // eslint-disable-line no-unused-expressions
    require("@formatjs/intl-datetimeformat/locale-data/en").default // eslint-disable-line no-unused-expressions
    require("@formatjs/intl-datetimeformat/add-all-tz").default // eslint-disable-line no-unused-expressions
  } else {
    require("@formatjs/intl-getcanonicallocales/polyfill")
    require("@formatjs/intl-locale/polyfill")
    require("@formatjs/intl-datetimeformat/polyfill")
    require("@formatjs/intl-datetimeformat/locale-data/en")
    require("@formatjs/intl-datetimeformat/add-all-tz")
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
      return en
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
  return moment.tz(new Date(), timeZone).format("z")
}

export const getCurrentTimeZone = () => {
  return getCalendars()?.[0]?.timeZone || "US/Central"
}
