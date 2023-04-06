import { Locale, format, parseISO } from "date-fns"
import I18n from "i18n-js"

import ar from "date-fns/locale/ar-SA"
import ko from "date-fns/locale/ko"
import en from "date-fns/locale/en-US"

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
