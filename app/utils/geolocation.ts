import Location, { GeoPosition, PositionError } from "react-native-geolocation-service"
import { Point } from "react-native-google-places-autocomplete"
import Config from "../config"
import { api, LocationType } from "../services/api"
import i18n from "i18n-js"
import { Platform, PermissionsAndroid } from "react-native"

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
  name?: string
  googlePlaceId?: string
  kind: string
}

export interface LocationAddressResponse {
  address?: string
  name?: string
  googlePlaceId?: string
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

    if (coords) {
      const { latitude, longitude } = coords

      const rgResponse = await api.reverseGeocode(latitude, longitude)
      if (rgResponse.kind !== "ok" || !rgResponse.googlePlaceId) return null
      const response = await api.getLocationAddress(rgResponse.googlePlaceId)
      if (response.kind !== "ok" || !response.address) return null

      return {
        title: response.name || response.address,
        subtitle: response.address,
        googlePlaceId: rgResponse.googlePlaceId,
        location: { lat: latitude, lng: longitude },
      }
    }

    return null
  }
}

export const getNearbyPlaces = async (
  { lng, lat }: Point,
  radius: number,
): Promise<LocationType[]> => {
  const places: LocationType[] = []
  const res = await api.getPlaces(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&language=${i18n.locale}&key=${Config.GOOGLE_API_TOKEN}`,
    "results",
  )

  if (res.kind === "ok") {
    for (const googlePlace of res.places) {
      places.push({
        location: googlePlace.geometry.location,
        title: googlePlace.name,
        subtitle: googlePlace.vicinity,
        googlePlaceId: googlePlace.place_id,
      })
    }
  }

  return places
}

export const getPlaces = async (search: string): Promise<LocationType[]> => {
  const places: LocationType[] = []
  const res = await api.getPlaces(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${search.replaceAll(
      " ",
      "%20",
    )}&inputtype=textquery&fields=formatted_address%2Cname%2Cgeometry%2Cplace_id&language=${
      i18n.locale
    }&key=${Config.GOOGLE_API_TOKEN}`,
    "candidates",
  )

  if (res.kind === "ok") {
    for (const googlePlace of res.places) {
      places.push({
        location: googlePlace.geometry.location,
        title: googlePlace.name,
        subtitle: googlePlace.formatted_address,
        googlePlaceId: googlePlace.place_id,
        sightings: [],
      })
    }
  }

  return places
}

export const getLocationTimeZone = async (
  { lng, lat }: Point,
  timestamp: number,
): Promise<TimeZoneDataResponse> => {
  return (await api.getLocationTimeZone(
    `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${timestamp}&key=${Config.GOOGLE_API_TOKEN}`,
  )) as TimeZoneDataResponse
}
