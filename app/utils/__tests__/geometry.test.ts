import { azAltToCartesian, headingOffset, isInHeadingRange, normalizeHeading } from "../geometry"

it("test_valid_input_values",() => {
  expect(azAltToCartesian(45, 30, 10)).toEqual([6.123724356957945, 4.999999999999999, -6.123724356957946])
})

it('test_zero_input_values', () => {
  expect(azAltToCartesian(0, 0, 0)).toEqual([0, 0, 0])
})

it("test_negative_input_values",() => {
  expect(azAltToCartesian(-1, -1, -1)).toEqual([0.017449748351250488, 0.01745240643728351, 0.9996954135095479])
})

it('test_null_and_undefined_input_values', () => {
  expect(azAltToCartesian(null, null, null)).toEqual([0, 0, 0])
  expect(azAltToCartesian(undefined, undefined, undefined)).toEqual([NaN, NaN, NaN])
})

it('should return the heading itself if it is within the range of 0 to 360', () => {
  expect(normalizeHeading(0)).toBe(0)
  expect(normalizeHeading(180)).toBe(180)
  expect(normalizeHeading(360)).toBe(360)
})

it('should return the normalized heading if it is less than 0', () => {
  expect(normalizeHeading(-90)).toBe(270)
  expect(normalizeHeading(-180)).toBe(180)
  expect(normalizeHeading(-270)).toBe(90)
})

it('should return the normalized heading if it is greater than 360', () => {
  expect(normalizeHeading(450)).toBe(90)
  expect(normalizeHeading(540)).toBe(180)
})

it('should return true if heading is within the range when right is greater than left', () => {
  expect(isInHeadingRange(0, 180, 90)).toBe(true)
  expect(isInHeadingRange(90, 270, 180)).toBe(true)
  expect(isInHeadingRange(270, 90, 0)).toBe(true)
  expect(isInHeadingRange(0, 360, 270)).toBe(true)
})

it('should return true if heading is within the range when right is less than left', () => {
  expect(isInHeadingRange(270, 90, 0)).toBe(true)
  expect(isInHeadingRange(180, 0, 270)).toBe(true)
  expect(isInHeadingRange(270, 90, 360)).toBe(true)
})

it('should return false if heading is outside the range when right is greater than left', () => {
  expect(isInHeadingRange(0, 180, 270)).toBe(false)
  expect(isInHeadingRange(90, 270, 0)).toBe(false)
  expect(isInHeadingRange(270, 90, 180)).toBe(false)
  expect(isInHeadingRange(0, 360, 450)).toBe(false)
})

it('should return false if heading is outside the range when right is less than left', () => {
  expect(isInHeadingRange(180, 0, 90)).toBe(false)
  expect(isInHeadingRange(270, 90, 180)).toBe(false)
})

test('should return the correct offset when h2 is greater than h1', () => {
  expect(headingOffset(0, 90)).toBe(90)
  expect(headingOffset(180, 270)).toBe(90)
  expect(headingOffset(0, 270)).toBe(270)
})

test('should return the correct offset when h2 is less than h1', () => {
  expect(headingOffset(90, 0)).toBe(270)
  expect(headingOffset(270, 180)).toBe(270)
  expect(headingOffset(90, 270)).toBe(180)
  expect(headingOffset(270, 0)).toBe(90)
})

test('should return 0 when h2 is equal to h1', () => {
  expect(headingOffset(0, 0)).toBe(0)
  expect(headingOffset(180, 180)).toBe(0)
  expect(headingOffset(360, 360)).toBe(0)
})
