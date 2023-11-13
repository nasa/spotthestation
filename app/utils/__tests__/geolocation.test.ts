import { api } from "../../services/api"
import { getCurrentLocation, getPlaces } from "../geolocation"
import { requestAuthorization, getCurrentPosition } from "react-native-geolocation-service"
import { jest } from "@jest/globals"
import { GooglePlaceDetail } from "react-native-google-places-autocomplete"

describe("getPlaces", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("returns an array of places", async () => {
    const search = "New York"

    const mockResponse = {
      kind: "ok" as const,
      places: [
        {
          geometry: {
            location: {
              lat: 40.712776,
              lng: -74.005974,
            },
          },
          name: "New York",
          formatted_address: "New York, NY, USA",
        },
      ] as GooglePlaceDetail[],
    }

    jest.mocked(api.getPlaces).mockResolvedValue(mockResponse)

    const expectedPlaces = [
      {
        location: {
          lat: 40.712776,
          lng: -74.005974,
        },
        title: "New York",
        subtitle: "New York, NY, USA",
        sightings: [],
      },
    ]

    const places = await getPlaces(search)

    expect(api.getPlaces).toHaveBeenCalledWith(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${search.replaceAll(
        " ",
        "%20",
      )}&inputtype=textquery&fields=formatted_address%2Cname%2Cgeometry%2Cplace_id&language=en&key=google`,
      "candidates",
    )
    expect(places).toEqual(expectedPlaces)
  })

  it('returns an empty array when API response is not "ok"', async () => {
    const search = "Invalid Place"

    const mockResponse = {
      kind: "bad-data" as const,
      message: "Place not found",
    }

    jest.mocked(api.getPlaces).mockResolvedValue(mockResponse)

    const places = await getPlaces(search)

    expect(api.getPlaces).toHaveBeenCalledWith(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${search.replaceAll(
        " ",
        "%20",
      )}&inputtype=textquery&fields=formatted_address%2Cname%2Cgeometry%2Cplace_id&language=en&key=google`,
      "candidates",
    )
    expect(places).toEqual([])
  })
})

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
      googlePlaceId: "111",
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
      googlePlaceId: "111",
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
