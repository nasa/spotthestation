import { api } from "../../services/api"
import { getCurrentLocation } from "../geolocation"
import { requestAuthorization, getCurrentPosition } from "react-native-geolocation-service"
import { jest } from "@jest/globals"

describe("getCurrentLocation", () => {
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
})
