import { getShortTZ, formatDate, isDateBetweenHours, formatDuration } from "../datetime"
import MockDate from "mockdate"

describe("getShortTZ", () => {
  beforeEach(() => {
    MockDate.set("08-12-2012 10:10:10")
  })

  afterEach(() => {
    MockDate.reset()
  })

  it("call getShortTZ", () => {
    expect(getShortTZ("Europe/Kyiv")).toBe("EEST")
  })
})

it("call formatDate", () => {
  expect(formatDate(new Date("12-12-2012").toISOString())).toBe("Dec 12, 2012")
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

describe("formatDuration", () => {
  it("should return the formatted timer with all units", () => {
    const start = new Date("2024-01-01T12:00:00Z")
    const end = new Date("2024-01-02T14:03:04Z")
    const prefix = "Time: "
    const expected = "Time: 01:02:03:04"
    expect(formatDuration({ start, end }, prefix)).toBe(expected)
  })

  it("should return the formatted timer with missing units", () => {
    const start = new Date("2024-01-01T12:00:00Z")
    const end = new Date("2024-01-01T14:00:30Z")
    const prefix = "Duration: "
    const expected = "Duration: 00:02:00:30"
    expect(formatDuration({ start, end }, prefix)).toBe(expected)
  })

  it("should return the formatted timer with leading zeros when the values are single-digit", () => {
    const start = new Date("2024-01-01T12:00:00Z")
    const end = new Date("2024-01-02T14:03:04Z")
    const prefix = ""
    const expected = "01:02:03:04"
    expect(formatDuration({ start, end }, prefix)).toBe(expected)
  })

  it("should return the formatted timer with the provided prefix", () => {
    const start = new Date("2024-01-01T12:00:00Z")
    const end = new Date("2024-01-01T12:10:00Z")
    const prefix = "Duration: "
    const expected = "Duration: 00:00:10:00"
    expect(formatDuration({ start, end }, prefix)).toBe(expected)
  })
})
