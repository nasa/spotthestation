import { orientation, SensorTypes, setUpdateIntervalForType } from "react-native-sensors"
import { Platform } from "react-native"
import { Subscription } from "rxjs"
import { Quaternion, Vector3 } from "three"

type Watcher = (rotation: Quaternion) => void
const watchers: Watcher[] = []
let subscription: Subscription = null

setUpdateIntervalForType(SensorTypes.orientation, 50)

const rotateX = new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), -Math.PI / 2)
const rotateY = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 2)

function addWatcher(watcher: Watcher) {
  const wasEmpty = watchers.length === 0
  watchers.push(watcher)

  if (wasEmpty) {
    subscription = orientation.subscribe(({ qx, qy, qz, qw }) => {
      const sourceRot = new Quaternion(qx, qy, qz, qw)

      let targetRot: Quaternion
      if (Platform.OS === "ios") {
        // convert from ios reference system
        // (X - north, Y - left, Z - up) -> (X - right, Y - up, Z - south)
        targetRot = new Quaternion().multiplyQuaternions(
          rotateY,
          new Quaternion().multiplyQuaternions(rotateX, sourceRot),
        )
      } else {
        // convert from android reference system
        // (X - right, Y - north, Z - up) -> (X - right, Y - up, Z - south)
        targetRot = new Quaternion().multiplyQuaternions(rotateX, sourceRot)
      }

      watchers.forEach((watcher) => watcher(targetRot))
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

export default function watchOrientation(watcher: Watcher) {
  addWatcher(watcher)
  return () => removeWatcher(watcher)
}
