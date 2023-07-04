import React, { useCallback, useEffect, useState, forwardRef, useMemo } from "react"
import { View, ViewStyle } from "react-native"
import { ViroARSceneNavigator } from "@viro-community/react-viro"

import { colors } from "../../../theme"
import { Compass } from "./Compass"
import { DirectionCircle } from "./DirectionCircle"
import { RecordingIndicator } from "./RecordingIndicator"
import { ISSSceneAR, emitter } from "./ISSSceneAR"
import { normalizeHeading } from "../../../utils/geometry"

interface ARViewProps {
  isFullScreen: boolean
  isPathVisible: boolean
  isRecording: boolean
  recordedSeconds: number
  pastIssPathCoords: [number, number][]
  futureIssPathCoords: [number, number][]
  issMarkerPosition: [number, number]
  setIsSpotted: (value: boolean) => void
}

export const ARView = forwardRef<ViroARSceneNavigator, ARViewProps>(function ARView(
  {
    isFullScreen,
    isPathVisible,
    isRecording,
    recordedSeconds,
    pastIssPathCoords,
    futureIssPathCoords,
    issMarkerPosition,
    setIsSpotted,
  },
  ref,
) {
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
    emitter.emit("settings", { isPathVisible })
  }, [isPathVisible])

  useEffect(() => {
    emitter.emit("issData", { pastIssPathCoords, futureIssPathCoords, issMarkerPosition })
  }, [pastIssPathCoords, futureIssPathCoords, issMarkerPosition])

  return (
    <View style={$container}>
      <ViroARSceneNavigator
        ref={ref}
        worldAlignment="GravityAndHeading"
        autofocus={true}
        initialScene={intialScene}
        viroAppProps={viroAppProps}
        style={$container}
      />

      {isFullScreen && (
        <DirectionCircle screenX={position[0]} screenY={position[1]} setIsSpotted={setIsSpotted} />
      )}

      <View style={$hudContainer}>
        <Compass issPosition={normalizeHeading(issMarkerPosition[0])} isFullScreen={isFullScreen} />
        {isRecording && <RecordingIndicator recordedSeconds={recordedSeconds} />}
      </View>
    </View>
  )
})

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
