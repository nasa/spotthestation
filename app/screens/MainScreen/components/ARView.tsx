import React, { useCallback, useEffect, useMemo, useState } from "react"
import { View, ViewStyle } from "react-native"

import { colors } from "../../../theme"
import { Compass } from "./Compass"
import { DirectionCircle } from "./DirectionCircle"
import { RecordingIndicator } from "./RecordingIndicator"
import { ISSSceneAR } from "./ISSSceneAR"
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
  still: boolean
  onStillReady: () => void
}

export const ARView = function ARView({
  isFullScreen,
  isPathVisible,
  isRecording,
  recordedSeconds,
  issPath,
  setIsSpotted,
  still,
  onStillReady,
}: ARViewProps) {
  const { $container, $hudContainer } = useStyles(styles)
  const [curve, setCurve] = useState<CatmullRomCurve3>()
  const [curveStartsAt, setCurveStartsAt] = useState(0)
  const [curveEndsAt, setCurveEndsAt] = useState(0)
  const [position, setPosition] = useState(null)
  const [issMarkerPosition, setIssMarkerPosition] = useState<Vector3>(null)
  const [pastIssPathCoords, setPastIssPathCoords] = useState<Vector3[]>([])
  const [futureIssPathCoords, setFutureIssPathCoords] = useState<Vector3[]>([])

  const onScreenPositionChange = useCallback((pos: [number, number]) => {
    setPosition(pos)
  }, [])

  useEffect(() => {
    if (issPath.length === 0) {
      return
    }

    setCurve(
      new CatmullRomCurve3(
        issPath.map(
          (p) => new Vector3(...azAltToCartesian(normalizeHeading(p.azimuth), p.elevation, 1000)),
        ),
      ),
    )

    setCurveStartsAt(new Date(issPath[0].date).valueOf())
    setCurveEndsAt(new Date(issPath[issPath.length - 1].date).valueOf())
  }, [issPath])

  useEffect(() => {
    if (!isFullScreen) setIsSpotted(false)
  }, [isFullScreen])

  useEffect(() => {
    if (!curve) return undefined

    const update = () => {
      const t = (Date.now() - curveStartsAt) / (curveEndsAt - curveStartsAt)
      let current: Vector3
      const pastPoints = []
      const futurePoints = []

      if (t < 0 || t > 1) {
        setFutureIssPathCoords([])
        setPastIssPathCoords([])
        setIssMarkerPosition(null)
        return
      }

      try {
        current = curve.getPoint(t)
      } catch (e) {
        console.error(e)
        return
      }

      for (let i = 0; i <= 100; ++i) {
        const u = i / 100
        const pt = curve.getPointAt(i / 100)
        if (t > curve.getUtoTmapping(u, null)) pastPoints.push(pt)
        else futurePoints.push(pt)
      }

      pastPoints.push(current)
      futurePoints.unshift(current)

      setPastIssPathCoords(pastPoints)
      setFutureIssPathCoords(futurePoints)
      setIssMarkerPosition(current)
    }

    update()

    const timeout = setInterval(update, 10000)
    return () => {
      clearInterval(timeout)
    }
  }, [curve])

  const issAzAlt = useMemo(
    () =>
      issMarkerPosition
        ? cartesianToAzAlt([issMarkerPosition.x, issMarkerPosition.y, issMarkerPosition.z])
        : null,
    [issMarkerPosition],
  )

  return (
    <View style={$container}>
      <ISSSceneAR
        issMarkerPosition={issMarkerPosition}
        pastIssPathCoords={pastIssPathCoords}
        futureIssPathCoords={futureIssPathCoords}
        onScreenPositionChange={onScreenPositionChange}
        isPathVisible={isPathVisible}
        still={still}
        onStillReady={onStillReady}
      />

      {isFullScreen && Boolean(position) && (
        <DirectionCircle screenX={position[0]} screenY={position[1]} setIsSpotted={setIsSpotted} />
      )}

      <View style={$hudContainer}>
        {Boolean(issAzAlt) && (
          <Compass issPosition={normalizeHeading(issAzAlt[0])} isFullScreen={isFullScreen} />
        )}
        {isRecording && <RecordingIndicator recordedSeconds={recordedSeconds} />}
      </View>
    </View>
  )
}

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
