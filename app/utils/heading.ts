import CompassHeading from "react-native-compass-heading"
import { Subscription } from "rxjs"
import { accelerometer, SensorTypes, setUpdateIntervalForType } from "react-native-sensors"
import { Platform } from "react-native"
import { normalizeHeading } from "./geometry"

type HeadingWatcher = (heading: number) => void
const watchers: HeadingWatcher[] = []
let accelerometerSubscription: Subscription = null
let heading: number = null
let accelerometerData: { x: number; y: number; z: number } = null

setUpdateIntervalForType(SensorTypes.accelerometer, 60)

function handle() {
  if (heading === null || accelerometerData === null) return

  let res = heading
  if (Platform.OS === "android" && accelerometerData.z < 0) {
    res = normalizeHeading(res - 180)
  }

  if (Platform.OS === "ios" && accelerometerData.z > Math.cos((45 * Math.PI) / 180)) {
    res = normalizeHeading(res - 180)
  }

  watchers.forEach((watcher) => watcher(res))
}

function addWatcher(watcher: HeadingWatcher) {
  const wasEmpty = watchers.length === 0
  watchers.push(watcher)

  if (wasEmpty) {
    CompassHeading.start(1, (result) => {
      heading = result.heading
      handle()
    }).catch((err) => {
      console.log(err)
    })

    accelerometerSubscription = accelerometer.subscribe((data) => {
      accelerometerData = data
      handle()
    })
  }
}

function removeWatcher(watcher: HeadingWatcher) {
  const idx = watchers.indexOf(watcher)
  watchers.splice(idx, 1)
  if (watchers.length === 0) {
    accelerometerData = null
    heading = null
    accelerometerSubscription.unsubscribe()
    CompassHeading.stop().catch((err) => {
      console.log(err)
    })
  }
}

export default function watchHeading(watcher: HeadingWatcher) {
  addWatcher(watcher)
  return () => removeWatcher(watcher)
}
