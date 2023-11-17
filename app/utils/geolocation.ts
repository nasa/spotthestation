import Location, { GeoPosition, PositionError } from "react-native-geolocation-service"
import { Point } from "react-native-google-places-autocomplete"
import Config from "../config"
import { api, LocationType } from "../services/api"
import { Platform, PermissionsAndroid } from "react-native"
import * as storage from "./storage"
import { degToRad } from "./geometry"

export interface TimeZoneData {
  dstOffset: number
  rawOffset: number
  status: string
  timeZoneId: string
  timeZoneName: string
}

export interface TimeZoneDataResponse {
  zone: TimeZoneData
  kind: string
}

export interface ReverseGeocodeResponse {
  address?: string
  name?: string
  googlePlaceId?: string
  kind: string
}

export interface LocationDetailsResponse {
  address?: string
  name?: string
  googlePlaceId?: string
  location: {
    lat: number
    lng: number
  }
  kind: string
}

const getCurrentLocationWithTimeout = (timeout: number) => {
  return new Promise<GeoPosition>((resolve, reject) => {
    Location.getCurrentPosition(
      resolve,
      (e) => (e.code === PositionError.TIMEOUT ? resolve(null) : reject(e)),
      {
        timeout,
        accuracy: { android: "low", ios: "threeKilometers" },
        enableHighAccuracy: false,
      },
    )
  })
}

class LocationError extends Error {
  code: PositionError = null
  constructor(code: PositionError) {
    super()
    this.code = code
  }
}

export const getCurrentLocation = async (
  alert?: () => void,
  callback?: (value: boolean) => void,
): Promise<LocationType> => {
  let granted = false
  if (Platform.OS === "android") {
    granted =
      (await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)) ===
      PermissionsAndroid.RESULTS.GRANTED
  } else {
    const permission = await Location.requestAuthorization("whenInUse")
    granted = permission === "granted"
    if (permission === "disabled") throw new LocationError(PositionError.POSITION_UNAVAILABLE)
  }

  if (callback) callback(granted)
  if (!granted) {
    alert && alert()
    return null
  } else {
    let res = await getCurrentLocationWithTimeout(10000)
    if (!res) res = await getCurrentLocationWithTimeout(5000)
    if (!res) throw Error("Unable to get current location")

    const { coords } = res

    let prevLocation: LocationType = null
    try {
      prevLocation = JSON.parse((await storage.load("userCurrentLocation")) as string)
    } catch {}

    if (coords) {
      const { latitude, longitude } = coords

      if (
        prevLocation &&
        getDistance(latitude, longitude, prevLocation.location.lat, prevLocation.location.lng) <
          1000
      ) {
        return prevLocation
      }

      const rgResponse = await api.reverseGeocode(latitude, longitude)
      if (rgResponse.kind !== "ok" || !rgResponse.googlePlaceId) return null

      const result = {
        title: rgResponse.name || rgResponse.address,
        subtitle: rgResponse.address,
        googlePlaceId: rgResponse.googlePlaceId,
        location: { lat: latitude, lng: longitude },
      }

      await storage.save("userCurrentLocation", JSON.stringify(result))
      return result
    }

    return null
  }
}

export const getLocationTimeZone = async (
  { lng, lat }: Point,
  timestamp: number,
): Promise<TimeZoneDataResponse> => {
  return (await api.getLocationTimeZone(
    `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${timestamp}&key=${Config.GOOGLE_API_TOKEN}`,
  )) as TimeZoneDataResponse
}

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371000
  const dLat = degToRad(lat2 - lat1)
  const dLon = degToRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c
  return d
}
