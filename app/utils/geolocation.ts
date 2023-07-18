/* eslint-disable n/no-callback-literal */
import * as Location from "expo-location"
import { Point } from "react-native-google-places-autocomplete"
import Config from "../config"
import { LocationType } from "../screens/OnboardingScreen/SignupLocation"
import { api } from "../services/api"

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

export const getCurrentLocation = async (
  alert?: () => void,
  callback?: (value: boolean) => void,
): Promise<LocationType> => {
  const { status: permission } = await Location.requestForegroundPermissionsAsync()
  if (callback) callback(permission === "granted")
  if (permission !== "granted") {
    alert && alert()
    return null
  } else {
    const { coords } = await Location.getCurrentPositionAsync()

    if (coords) {
      const { latitude, longitude } = coords

      const response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      })

      const item = response[0]

      const address = `${item?.streetNumber ?? ''} ${item?.street ?? ''}, ${item?.city ?? ''}, ${
        item?.region || item?.subregion || item?.district || ''
      } ${item?.postalCode ?? ''}, ${item?.country ?? ''}`

      return {
        title: item?.name === item?.streetNumber ? address : item?.name,
        subtitle: address,
        location: { lat: latitude, lng: longitude },
        alert: false,
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
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&key=${Config.GOOGLE_API_TOKEN}`,
    "results",
  )

  if (res.kind === "ok") {
    for (const googlePlace of res.places) {
      places.push({
        location: googlePlace.geometry.location,
        title: googlePlace.name,
        subtitle: googlePlace.vicinity,
        alert: true,
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
    )}&inputtype=textquery&fields=formatted_address%2Cname%2Cgeometry&key=${
      Config.GOOGLE_API_TOKEN
    }`,
    "candidates",
  )

  if (res.kind === "ok") {
    for (const googlePlace of res.places) {
      places.push({
        location: googlePlace.geometry.location,
        title: googlePlace.name,
        subtitle: googlePlace.formatted_address,
        alert: true,
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
