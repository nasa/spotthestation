import React, { useCallback, useEffect, useState, forwardRef, useMemo } from "react"
import { AppState, AppStateStatus, Image, ImageStyle, View, ViewStyle } from "react-native"
import { ViroARSceneNavigator } from "@viro-community/react-viro"

import { colors } from "../../../theme"
import { Compass } from "./Compass"
import { DirectionCircle } from "./DirectionCircle"
import { RecordingIndicator } from "./RecordingIndicator"
import { ISSSceneAR, emitter } from "./ISSSceneAR"
import { azAltToCartesian, cartesianToAzAlt, normalizeHeading } from "../../../utils/geometry"
import { OrbitPoint } from "../../../services/api"
import { CatmullRomCurve3, Vector3 } from "three"
import { StyleFn, useStyles } from "../../../utils/useStyles"

interface ARViewProps {
  isFullScreen: boolean
  isPathVisible: boolean
  isRecording: boolean
  recordedSeconds: number
  issPath: OrbitPoint[]
  setIsSpotted: (value: boolean) => void
  image?: string
  onImageLoaded?: () => void
}

export const ARView = forwardRef<ViroARSceneNavigator, ARViewProps>(function ARView(
  {
    isFullScreen,
    isPathVisible,
    isRecording,
    recordedSeconds,
    issPath,
    setIsSpotted,
    image,
    onImageLoaded,
  },
  ref,
) {
  const { $container, $hudContainer, $image } = useStyles(styles)

  const [appState, setAppState] = useState<AppStateStatus>("active")
  const [issPosition, setIssPosition] = useState<[number, number]>(null)
  const [curve, setCurve] = useState<CatmullRomCurve3>()
  const [curveStartsAt, setCurveStartsAt] = useState(0)
  const [curveEndsAt, setCurveEndsAt] = useState(0)
  const [position, setPosition] = useState([0, 0])
  const onScreenPositionChange = useCallback((pos: [number, number]) => {
    setPosition(pos)
  }, [])

  const viroAppProps = useMemo(
    () => ({
      onScreenPositionChange,
    }),
    [onScreenPositionChange],
  )

  const intialScene = useMemo(
    () => ({
      scene: ISSSceneAR as any,
    }),
    [onScreenPositionChange],
  )

  useEffect(() => {
    if (appState === "active") emitter.emit("settings", { isPathVisible })
  }, [isPathVisible, appState])

  useEffect(() => {
    if (issPath.length === 0) {
      return
    }

    let currentIdx = -1
    let minDiff = Infinity
    for (let i = 0; i < issPath.length; ++i) {
      const diff = Math.abs(new Date().valueOf() - new Date(issPath[i].date).valueOf())
      if (diff < minDiff) {
        currentIdx = i
        minDiff = diff
      }
    }

    if (currentIdx < 0) return

    let startIdx = currentIdx
    let endIdx = currentIdx
    if (issPath[currentIdx].elevation > 0) {
      while (startIdx > 0 && issPath[startIdx].elevation > 0) startIdx = startIdx - 1
      while (endIdx < issPath.length - 1 && issPath[endIdx].elevation > 0) endIdx = endIdx + 1
    } else {
      while (startIdx < issPath.length - 1 && issPath[startIdx].elevation < 0)
        startIdx = startIdx + 1
      endIdx = startIdx
      while (endIdx < issPath.length - 1 && issPath[endIdx].elevation > 0) endIdx = endIdx + 1
    }

    startIdx = Math.max(0, startIdx - 2)
    endIdx = Math.min(issPath.length - 1, endIdx + 2)

    setCurve(
      new CatmullRomCurve3(
        issPath
          .slice(startIdx, endIdx + 1)
          .map(
            (p) => new Vector3(...azAltToCartesian(normalizeHeading(p.azimuth), p.elevation, 10)),
          ),
      ),
    )

    setCurveStartsAt(new Date(issPath[startIdx].date).valueOf())
    setCurveEndsAt(new Date(issPath[endIdx].date).valueOf())
  }, [issPath])

  useEffect(() => {
    if (appState === "active") emitter.emit("issData", { curve, curveStartsAt, curveEndsAt })
  }, [curve, appState])

  useEffect(() => {
    if (!curve) {
      setIssPosition(null)
      return undefined
    }
    const update = () => {
      const t =
        (Date.now() - new Date(curveStartsAt).valueOf()) /
        (new Date(curveEndsAt).valueOf() - new Date(curveStartsAt).valueOf())

      if (t > 1 || t < 0) {
        setIssPosition(null)
        return
      }

      let point: Vector3
      try {
        point = curve.getPoint(t)
      } catch (e) {
        console.error(e)
        return
      }

      setIssPosition(cartesianToAzAlt([point.x, point.y, point.z]))
    }
    update()

    const timeout = setInterval(update, 10000)
    return () => {
      clearInterval(timeout)
    }
  }, [curve])

  useEffect(() => {
    const subscription = AppState.addEventListener("change", setAppState)

    return () => {
      subscription.remove()
    }
  }, [isRecording])

  return (
    <View style={$container}>
      {appState === "active" && (
        <ViroARSceneNavigator
          ref={ref}
          worldAlignment="GravityAndHeading"
          autofocus={true}
          initialScene={intialScene}
          viroAppProps={viroAppProps}
          style={$container}
        />
      )}

      {Boolean(image) && (
        <Image source={{ uri: image }} style={$image as ImageStyle} onLoad={onImageLoaded} />
      )}

      {isFullScreen && Boolean(issPosition) && (
        <DirectionCircle screenX={position[0]} screenY={position[1]} setIsSpotted={setIsSpotted} />
      )}

      <View style={$hudContainer}>
        {Boolean(issPosition) && (
          <Compass issPosition={normalizeHeading(issPosition[0])} isFullScreen={isFullScreen} />
        )}
        {isRecording && <RecordingIndicator recordedSeconds={recordedSeconds} />}
      </View>
    </View>
  )
})

const styles: StyleFn = () => {
  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  }

  const $hudContainer: ViewStyle = {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    top: 0,
  }

  const $image: ViewStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
  }

  return { $container, $hudContainer, $image }
}
