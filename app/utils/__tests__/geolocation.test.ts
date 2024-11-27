import { api } from "../../services/api"
import * as storage from "../../utils/storage"
import { getCurrentLocation, formatAddress } from "../geolocation"
import {
  requestAuthorization,
  getCurrentPosition,
  PositionError,
} from "react-native-geolocation-service"
import { jest } from "@jest/globals"

describe("getCurrentLocation", () => {
  beforeEach(async () => {
    await storage.clear()
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("returns the current location", async () => {
    const permission = "granted"

    jest.mocked(requestAuthorization).mockResolvedValue(permission)

    const coords = {
      latitude: 40.712776,
      longitude: -74.005974,
    }

    jest.mocked(api.reverseGeocode).mockResolvedValue({
      kind: "ok",
      name: "New York",
      address: "123 Main Street, New York City, New York 12345, USA",
    })

    jest
      .mocked(getCurrentPosition)
      .mockImplementation((cb: (a: { coords: any; timestamp: number }) => void) =>
        cb({ coords, timestamp: 0 }),
      )

    const expectedLocation = {
      title: "New York",
      subtitle: "123 Main Street, New York City, New York 12345, USA",
      location: { lat: 40.712776, lng: -74.005974 },
    }

    const location = await getCurrentLocation()

    expect(requestAuthorization).toHaveBeenCalled()
    expect(getCurrentPosition).toHaveBeenCalled()
    expect(api.reverseGeocode).toHaveBeenCalledWith(coords.latitude, coords.longitude)
    expect(location).toEqual(expectedLocation)
  })

  it("returns null when permission is not granted", async () => {
    const permission = "denied"

    jest.mocked(requestAuthorization).mockResolvedValue(permission)

    const location = await getCurrentLocation()

    expect(requestAuthorization).toHaveBeenCalled()
    expect(getCurrentPosition).not.toHaveBeenCalled()
    expect(api.reverseGeocode).not.toHaveBeenCalled()
    expect(location).toBeNull()
  })

  it("throws error when permission is not available", async () => {
    const permission = "disabled"

    jest.mocked(requestAuthorization).mockResolvedValue(permission)
    await expect(getCurrentLocation()).rejects.toBeTruthy()
  })

  it("throws error when location service rejects", async () => {
    jest
      .mocked(getCurrentPosition)
      .mockImplementation((_, reject) => reject({ code: -1, message: "" }))

    jest.mocked(requestAuthorization).mockResolvedValue("granted")
    await expect(getCurrentLocation()).rejects.toBeTruthy()
  })

  it("throws error when location service times out", async () => {
    jest
      .mocked(getCurrentPosition)
      .mockImplementation((_, reject) => reject({ code: PositionError.TIMEOUT, message: "" }))

    jest.mocked(requestAuthorization).mockResolvedValue("granted")
    await expect(getCurrentLocation()).rejects.toBeTruthy()
  })

  it("returns null if reverse geocode fails", async () => {
    const permission = "granted"

    jest.mocked(requestAuthorization).mockResolvedValue(permission)

    const coords = {
      latitude: 40.712776,
      longitude: -74.005974,
    }

    jest.mocked(api.reverseGeocode).mockResolvedValue({
      kind: "error",
    })

    jest
      .mocked(getCurrentPosition)
      .mockImplementation((cb: (a: { coords: any; timestamp: number }) => void) =>
        cb({ coords, timestamp: 0 }),
      )

    expect(await getCurrentLocation()).toBeNull()
  })
})

// Import the function if it's in a different module, e.g., import { formatAddress } from './path-to-module'

describe("formatAddress", () => {
  it("should format address using village if available", () => {
    const item = {
      display_name: "Some Display Name",
      place_id: 1,
      name: "Place Name",
      lat: "123.456",
      lon: "78.910",
      address: {
        village: "Test Village",
        state: "Test State",
        country: "Test Country",
      },
      addresstype: "village",
    }
    expect(formatAddress(item)).toBe("Test Village, Test State, Test Country")
  })

  it("should format address using town if village is not available", () => {
    const item = {
      display_name: "Some Display Name",
      place_id: 2,
      name: "Place Name",
      lat: "123.456",
      lon: "78.910",
      address: {
        town: "Test Town",
        state: "Test State",
        country: "Test Country",
      },
      addresstype: "town",
    }
    expect(formatAddress(item)).toBe("Test Town, Test State, Test Country")
  })

  it("should format address using city if village and town are not available", () => {
    const item = {
      display_name: "Some Display Name",
      place_id: 3,
      name: "Place Name",
      lat: "123.456",
      lon: "78.910",
      address: {
        city: "Test City",
        state: "Test State",
        country: "Test Country",
      },
      addresstype: "city",
    }
    expect(formatAddress(item)).toBe("Test City, Test State, Test Country")
  })

  it("should format address using municipality if village, town, and city are not available", () => {
    const item = {
      display_name: "Some Display Name",
      place_id: 4,
      name: "Place Name",
      lat: "123.456",
      lon: "78.910",
      address: {
        municipality: "Test Municipality",
        state: "Test State",
        country: "Test Country",
      },
      addresstype: "municipality",
    }
    expect(formatAddress(item)).toBe("Test Municipality, Test State, Test Country")
  })

  it("should return display_name if none of village, town, city, or municipality are available", () => {
    const item = {
      display_name: "Fallback Display Name",
      place_id: 5,
      name: "Place Name",
      lat: "123.456",
      lon: "78.910",
      address: {
        state: "Test State",
        country: "Test Country",
      },
      addresstype: "unknown",
    }
    expect(formatAddress(item)).toBe("Fallback Display Name")
  })

  it("should handle missing state or country gracefully", () => {
    const item = {
      display_name: "Some Display Name",
      place_id: 6,
      name: "Place Name",
      lat: "123.456",
      lon: "78.910",
      address: {
        city: "Test City",
        country: "Test Country",
      },
      addresstype: "city",
    }
    expect(formatAddress(item)).toBe("Test City, Test Country")
  })

  it("should handle only one available address component (e.g., village only)", () => {
    const item = {
      display_name: "Some Display Name",
      place_id: 7,
      name: "Place Name",
      lat: "123.456",
      lon: "78.910",
      address: {
        village: "Lonely Village",
      },
      addresstype: "village",
    }
    expect(formatAddress(item)).toBe("Lonely Village")
  })
})
