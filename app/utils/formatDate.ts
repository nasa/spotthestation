/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Locale, format, parseISO } from "date-fns"
import I18n from "i18n-js"
import { getLocales, getCalendars } from 'expo-localization'

import ar from "date-fns/locale/ar-SA"
import ko from "date-fns/locale/ko"
import en from "date-fns/locale/en-US"
import { LocationType } from "../screens/OnboardingScreen/SignupLocation"
import * as storage from "../utils/storage"
import { getLocationTimeZone } from "./geolocation"

type Options = Parameters<typeof format>[2]

const getLocale = (): Locale => {
  const locale = I18n.currentLocale().split("-")[0]
  return locale === "ar" ? ar : locale === "ko" ? ko : en
}

export const formatDate = (date: string, dateFormat?: string, options?: Options) => {
  const locale = getLocale()
  const dateOptions = {
    ...options,
    locale,
  }
  return format(parseISO(date), dateFormat ?? "MMM dd, yyyy", dateOptions)
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
  
  if (startHours === endHours || startMinutes === endMinutes || startSeconds === endSeconds) return false

  return date >= startDate || date < endDate
}

const getLocation = async () => {
  const location: LocationType = await storage.load('selectedLocation')
  if (!location) return storage.load('currentLocation')
  return location
}

export const getCurrentTimeZome = async () => {
  const currentLocation: LocationType = await getLocation()
  if (currentLocation) {
    const { location } = currentLocation
    const { kind, zone } = await getLocationTimeZone(location, Date.now()/1000)
    const timeZone = kind === "ok" ? zone.timeZoneId : 'US/Central'
    const regionFormat = ['US', 'America'].includes(timeZone.split('/')[0]) ? 'US' : 'other'
    
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
