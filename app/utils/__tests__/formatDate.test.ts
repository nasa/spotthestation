import AsyncStorage from "@react-native-async-storage/async-storage"
import { getShortTZ, formatDate, getCurrentTimeZome, isDateBetweenHours } from "../formatDate"
import { LocationType } from "../../services/api"

it("call getShortTZ", () => {
  expect(getShortTZ("Europe/Kyiv")).toBe("EEST")
})

it("call formatDate", () => {
  expect(formatDate(new Date("12-12-2012").toISOString())).toBe("Dec 12, 2012")
})

it("call getCurrentTimeZome", async () => {
  expect(await getCurrentTimeZome()).toStrictEqual({ timeZone: "Test/test", regionFormat: "TC" })
  expect(await getCurrentTimeZome({ location: { lat: 0, lng: 0 } } as LocationType)).toStrictEqual({
    timeZone: "US/Central",
    regionFormat: "US",
  })
})

it("call getCurrentTimeZome with selectedLocation", async () => {
  await AsyncStorage.setItem("selectedLocation", JSON.stringify({ location: { lat: 0, lng: 0 } }))
  expect(await getCurrentTimeZome()).toStrictEqual({ timeZone: "US/Central", regionFormat: "US" })
})

it("call isDateBetweenHours", () => {
  expect(
    isDateBetweenHours(
      new Date("12-12-2012 12:12:12"),
      new Date("12-12-2012 11:11:11"),
      new Date("12-12-2012 13:13:13"),
    ),
  ).toBeTruthy()
  expect(
    isDateBetweenHours(
      new Date("12-12-2012 14:14:14"),
      new Date("12-12-2012 13:13:13"),
      new Date("12-12-2012 11:11:11"),
    ),
  ).toBeTruthy()
  expect(
    isDateBetweenHours(
      new Date("12-12-2012 14:14:14"),
      new Date("12-12-2012 11:11:11"),
      new Date("12-12-2012 13:13:13"),
    ),
  ).toBeFalsy()
})
