import React, { useEffect, useState } from "react"
import { Platform, TextStyle, View, ViewStyle } from "react-native"
import {
  ViroARScene,
  ViroSphere,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
} from '@viro-community/react-viro'
import { colors } from "../../../theme"
import { Compass } from "./Compass"
import CompassHeading from "react-native-compass-heading"

const issHeading = 45
const issAltitude = 30

const worldTransform = (input: [number, number, number], heading): [number, number, number] => {
  if (Platform.OS === 'ios') return input

  const angle = heading * (Math.PI/180)

  const x = input[0] * Math.cos(angle) - input[2] * Math.sin(angle)
  const z = input[2] * Math.cos(angle) + input[0] * Math.sin(angle)

  return [x, input[1], z]
}

const ISSSceneAR = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [heading, setHeading] = useState(0)

  useEffect(() => {
    CompassHeading.start(1, (result) => {
      setHeading(Number(result.heading))
    }).catch((err) => {
      console.log(err)
    })

    return () => {
      CompassHeading.stop().catch((err) => {
        console.log(err)
      })
    }
  }, [])

  function onInitialized(state) {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setIsVisible(true)
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      setIsVisible(false)
    }
  }

  const x = Math.sin(issHeading * (Math.PI/180)) * 10
  const y = Math.sin(issAltitude * (Math.PI/180)) * 10
  const z = Math.cos(issHeading * (Math.PI/180)) * -10

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      { isVisible && (
        <>
          <ViroText
            text="N"
            position={worldTransform([0, 0, -10], heading)}
            rotation={[0, 0, 0]}
            style={$textStyle}
          />
          <ViroText
            text="E"
            position={worldTransform([10, 0, 0], heading)}
            rotation={[0, -90, 0]}
            style={$textStyle}
          />
          <ViroText
            text="S"
            position={worldTransform([0, 0, 10], heading)}
            rotation={[0, -180, 0]}
            style={$textStyle}
          />
          <ViroText
            text="W"
            position={worldTransform([-10, 0, 0], heading)}
            rotation={[0, 90, 0]}
            style={$textStyle}
          />
          <ViroSphere
            heightSegmentCount={20}
            widthSegmentCount={20}
            radius={0.5}
            position={worldTransform([x, y, z], heading)}
          />
        </>
      )}
    </ViroARScene>
  )
}

export function ARView({ isFullScreen }) {
  return (
    <View style={$container}>
      <ViroARSceneNavigator
        worldAlignment="GravityAndHeading"
        autofocus={true}
        initialScene={{
          scene: ISSSceneAR,
        }}
        style={$container}
      />
      <Compass issPosition={issHeading} isFullScreen={isFullScreen} />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
}

const $textStyle: TextStyle = {
  fontFamily: 'Arial',
  fontSize: 50,
  color: '#ffffff',
  textAlignVertical: 'center',
  textAlign: 'center',
}