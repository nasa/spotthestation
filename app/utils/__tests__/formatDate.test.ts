import { getShortTZ, formatDate, isDateBetweenHours } from "../formatDate"
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
