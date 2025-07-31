import * as Calendar from "expo-calendar"
import { Platform } from "react-native"
import { add } from "date-fns"
import { ISSSighting, LocationType } from "../services/api"
import { getCurrentTimeZone } from "./datetime"
import { translate } from "../i18n"
import { colors } from "../theme"
import { AlarmMethod, getEventsAsync } from "expo-calendar"

const CALENDAR_NAME = "SpotTheStation"

export class CalendarPermissionError extends Error {}

async function getCalendarPermissions() {
  const { status } = await Calendar.requestCalendarPermissionsAsync()
  if (status !== Calendar.PermissionStatus.GRANTED) {
    throw new CalendarPermissionError("Calendar permission not granted")
  }
}

async function getOrCreateCalendar() {
  const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
  if (Platform.OS === "android") {
    const defaultCalendar = calendars.find((c) => c.allowsModifications)
    if (defaultCalendar) return defaultCalendar.id
  }

  // Check if a calendar already exists
  const existingCalendar = calendars.find((cal) => cal.title === CALENDAR_NAME)
  if (existingCalendar) {
    return existingCalendar.id
  }

  // Create a new calendar
  const newCalendar = {
    title: CALENDAR_NAME,
    name: CALENDAR_NAME,
    color: colors.palette.buttonBlue,
    entityType: Calendar.EntityTypes.EVENT,
    source:
      Platform.OS === "android"
        ? { name: CALENDAR_NAME, isLocalAccount: true, type: undefined }
        : undefined,
    accessLevel: Calendar.CalendarAccessLevel.OWNER,
    ownerAccount: "personal",
  }

  return await Calendar.createCalendarAsync(newCalendar)
}

export async function createSightingEvent(location: LocationType, sighting: ISSSighting) {
  await getCalendarPermissions()

  const startDate = sighting.date
  const endDate = add(new Date(sighting.date), { minutes: sighting.visible }).toISOString()
  const title = translate("homeScreen.selectSightings.calendarEventTitle", {
    location: location.title,
  })

  const calendarId = await getOrCreateCalendar()
  const existingEvents = await getEventsAsync([calendarId], new Date(startDate), new Date(endDate))
  const existingEvent = existingEvents.find((e) => e.title === title)
  if (existingEvent) return existingEvent

  const eventDetails = {
    title,
    startDate,
    endDate,
    timeZone: location.timezone || getCurrentTimeZone(),
    location: location.subtitle,
    alarms: [{ method: AlarmMethod.DEFAULT, relativeOffset: 0 }],
  }

  return Calendar.createEventAsync(calendarId, eventDetails)
}
