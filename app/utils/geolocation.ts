import Location, { GeoPosition, PositionError } from "react-native-geolocation-service"
import { api, LocationType, OSMSearchResult } from "../services/api"
import { Platform, PermissionsAndroid } from "react-native"
import * as storage from "./storage"
import { degToRad } from "./geometry"

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
        getDistance(latitude, longitude, prevLocation.location.lat, prevLocation.location.lng) <
          1000
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
