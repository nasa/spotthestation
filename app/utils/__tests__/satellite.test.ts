import { getOrbitalSpeed } from "../satellite"

describe("getOrbitalSpeed", () => {
  it("should calculate the orbital speed at a given latitude, azimuth, and elevation", () => {
    const latitude = 45
    const azimuth = 0
    const elevation = 100
    const expected = 8182
    expect(getOrbitalSpeed(latitude, azimuth, elevation)).toBe(expected)
  })

  it("should calculate the orbital speed when latitude is 0", () => {
    const latitude = 0
    const azimuth = 90
    const elevation = 200
    const expected = 7574
    expect(getOrbitalSpeed(latitude, azimuth, elevation)).toBe(expected)
  })

  it("should calculate the orbital speed when azimuth is 180", () => {
    const latitude = -30
    const azimuth = 180
    const elevation = 50
    const expected = 7636
    expect(getOrbitalSpeed(latitude, azimuth, elevation)).toBe(expected)
  })
})
