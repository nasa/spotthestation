import {
  orientation,
  magnetometer,
  SensorTypes,
  setUpdateIntervalForType,
  SensorAccuracy,
} from "react-native-sensors"
import { isAvailable as isSensorAvailable } from "react-native-sensors/src/rnsensors"
import { Platform } from "react-native"
import { Subscription } from "rxjs"
import { Quaternion, Vector3 } from "three"
import geomagnetism from "geomagnetism"

type WatcherFunc = (rotation: Quaternion) => void
type AccuracyWatcherFunc = (accuracy: SensorAccuracy) => void
type Watcher = {
  func: WatcherFunc
  declination: number
}

const watchers: Watcher[] = []
let subscription: Subscription = null

setUpdateIntervalForType(SensorTypes.orientation, 50)
setUpdateIntervalForType(SensorTypes.magnetometer, 50)

const rotateX = new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), -Math.PI / 2)
const rotateY = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 2)

function addWatcher(watcher: Watcher) {
  const wasEmpty = watchers.length === 0
  watchers.push(watcher)

  if (wasEmpty) {
    subscription = orientation.subscribe(({ qx, qy, qz, qw }) => {
      const sourceRot = new Quaternion(qx, qy, qz, qw)

      watchers.forEach((watcher) => {
        // convert to true north
        let targetRot = new Quaternion()
          .setFromAxisAngle(new Vector3(0, 0, 1), (-watcher.declination * Math.PI) / 180)
          .multiply(sourceRot)

        if (Platform.OS === "ios") {
          // convert from ios reference system
          // (X - north, Y - left, Z - up) -> (X - right, Y - up, Z - south)
          targetRot = new Quaternion().multiplyQuaternions(
            rotateY,
            new Quaternion().multiplyQuaternions(rotateX, targetRot),
          )
        } else {
          // convert from android reference system
          // (X - right, Y - north, Z - up) -> (X - right, Y - up, Z - south)
          targetRot = new Quaternion().multiplyQuaternions(rotateX, targetRot)
        }

        watcher.func(targetRot)
      })
    })
  }
}

function removeWatcher(watcher: Watcher) {
  const idx = watchers.indexOf(watcher)
  watchers.splice(idx, 1)
  if (watchers.length === 0) {
    subscription.unsubscribe()
  }
}

const declinationCache = {}

export function isOrientationAvailable(): Promise<boolean> {
  const fn = isSensorAvailable as (sensor: string) => Promise<any>
  return fn("orientation").then(
    () => true,
    () => false,
  )
}

export function isMagnetometerAvailable(): Promise<boolean> {
  const fn = isSensorAvailable as (sensor: string) => Promise<any>
  return fn("orientation").then(
    () => true,
    () => false,
  )
}

export default function watchOrientation(func: WatcherFunc, location: [number, number]) {
  if (!declinationCache[location.toString()]) {
    const info = geomagnetism.model().point(location)
    const declination = info.decl
    declinationCache[location.toString()] = declination
  }

  const watcher = { func, declination: declinationCache[location.toString()] }
  addWatcher(watcher)
  return () => removeWatcher(watcher)
}

export function watchCalibrationState(func: AccuracyWatcherFunc) {
  let subscription: Subscription
  let lastAccuracy: SensorAccuracy
  let repeat = 0

  const handler = ({ accuracy }: { accuracy: SensorAccuracy }) => {
    if (lastAccuracy === accuracy) {
      ++repeat
    } else {
      lastAccuracy = accuracy
      repeat = 0
    }

    if (repeat === 3) {
      func(lastAccuracy)
    }
  }

  if (Platform.OS === "android") {
    subscription = magnetometer.subscribe(handler)
  } else {
    subscription = orientation.subscribe(handler)
  }

  return () => {
    subscription.unsubscribe()
  }
}
