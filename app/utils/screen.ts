import { useEffect, useState } from "react"
import * as ScreenOrientation from "expo-screen-orientation"

export function useScreenOrientation() {
  const [orientation, setOrientation] = useState<ScreenOrientation.Orientation | null>(null)

  const isLandscape =
    orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
    orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT

  const onOrientationDidChange = (e: ScreenOrientation.OrientationChangeEvent) => {
    setOrientation(e.orientationInfo.orientation)
  }

  useEffect(() => {
    ScreenOrientation.getOrientationAsync()
      .then(setOrientation)
      .catch(() => console.error("failed to get current orientation"))

    const sub = ScreenOrientation.addOrientationChangeListener(onOrientationDidChange)
    return () => {
      sub.remove()
    }
  }, [])

  return { orientation, isLandscape }
}
