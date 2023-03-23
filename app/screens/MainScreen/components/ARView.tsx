import React, { useCallback, useEffect, useState } from "react"
import { Platform, View, ViewStyle } from "react-native"
import {
  ViroARScene,
  ViroImage,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
} from '@viro-community/react-viro'
import { colors } from "../../../theme"
import { Compass } from "./Compass"
import CompassHeading from "react-native-compass-heading"
import { DirectionCircle } from "./DirectionCircle"

const issHeading = 270
const issAltitude = 30

const worldTransform = (input: [number, number, number], heading): [number, number, number] => {
  if (Platform.OS === 'ios') return input

  const angle = heading * (Math.PI/180)

  const x = input[0] * Math.cos(angle) - input[2] * Math.sin(angle)
  const z = input[2] * Math.cos(angle) + input[0] * Math.sin(angle)

  return [x, input[1], z]
}

interface ISSSceneProps {
  sceneNavigator: {
    project: (value: [number, number, number]) => Promise<{ screenPosition: [number, number] }>
  }
  onScreenPositionChange: (value: [number, number]) => void
}

const ISSSceneAR = ({ sceneNavigator, onScreenPositionChange }: ISSSceneProps) => {
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

  function onCamera() {
    sceneNavigator.project([x, y, z])
      .then(({ screenPosition })=> {
        onScreenPositionChange(screenPosition)
      }).catch((err) => {
        console.error(err)
      })
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized} onCameraTransformUpdate={onCamera}>
      { isVisible && (
        <>
          <ViroImage
            height={1}
            width={1}
            rotation={[0, -issHeading, 0]}
            position={worldTransform([x, y, z], heading)}
            source={require("../../../../assets/icons/iss.png")}
          />
        </>
      )}
    </ViroARScene>
  )
}

export function ARView({ isFullScreen }) {
  const [position, setPosition] = useState([0, 0])
  const onScreenPositionChange = useCallback((pos: [number, number]) => {
    setPosition(pos)
  }, [])

  const Scene = useCallback((props) => {
    return <ISSSceneAR {...props} onScreenPositionChange={onScreenPositionChange} />
  }, [onScreenPositionChange])

  return (
    <View style={$container}>
      <ViroARSceneNavigator
        worldAlignment="GravityAndHeading"
        autofocus={true}
        initialScene={{
          scene: Scene as any,
        }}
        style={$container}
      />

      { isFullScreen && (
        <DirectionCircle screenX={position[0]} screenY={position[1]} />
      )}

      <Compass issPosition={issHeading} isFullScreen={isFullScreen} />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
}