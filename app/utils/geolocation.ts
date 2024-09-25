import Location, { GeoPosition, PositionError } from "react-native-geolocation-service"
import { api, LocationType, OSMSearchResult } from "../services/api"
import { Platform, PermissionsAndroid } from "react-native"
import * as storage from "./storage"
import { sphericalDistance } from "./geometry"

export interface TimeZoneDataResponse {
  zone: string
  kind: string
}

export interface ReverseGeocodeResponse {
  address?: string
  name?: string
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
      prevLocation = JSON.parse((await storage.load(storage.KEYS.USER_CURRENT_LOCATION)) as string)
    } catch {}

    if (coords) {
      const { latitude, longitude } = coords

      if (
        prevLocation &&
        sphericalDistance(
          latitude,
          longitude,
          0,
          prevLocation.location.lat,
          prevLocation.location.lng,
          0,
        ) < 1000
      ) {
        return prevLocation
      }

      const rgResponse = await api.reverseGeocode(latitude, longitude)
      if (rgResponse.kind !== "ok" || (!rgResponse.name && !rgResponse.address)) return null

      const result = {
        title: rgResponse.name || rgResponse.address,
        subtitle: rgResponse.address,
        location: { lat: latitude, lng: longitude },
      }

      await storage.save(storage.KEYS.USER_CURRENT_LOCATION, JSON.stringify(result))
      return result
    }

    return null
  }
}

export function formatAddress(item: OSMSearchResult) {
  if (item.address.village) {
    return [item.address.village, item.address.state, item.address.country]
      .filter(Boolean)
      .join(", ")
  }

  if (item.address.town) {
    return [item.address.town, item.address.state, item.address.country].filter(Boolean).join(", ")
  }

  if (item.address.city) {
    return [item.address.city, item.address.state, item.address.country].filter(Boolean).join(", ")
  }

  if (item.address.municipality) {
    return [item.address.municipality, item.address.state, item.address.country]
      .filter(Boolean)
      .join(", ")
  }

  return item.display_name
}
