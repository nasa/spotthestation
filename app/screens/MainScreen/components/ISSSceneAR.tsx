import React, { memo, useCallback, useEffect, useMemo, useState } from "react"
import CompassHeading from "react-native-compass-heading"
import {
  ViroARScene,
  ViroImage,
  ViroPolyline,
  ViroSphere,
  ViroTrackingStateConstants,
} from "@viro-community/react-viro"
import { azAltToCartesian, normalizeHeading } from "../../../utils/geometry"
import { CatmullRomCurve3, Vector3 } from "three"
import mitt from "mitt"
import { Platform } from "react-native"

const icon = require("../../../../assets/icons/iss.png")
const label = require("../../../../assets/icons/isslabel.png")

interface ISSSceneProps {
  sceneNavigator: {
    project: (value: [number, number, number]) => Promise<{ screenPosition: [number, number] }>
    viroAppProps: {
      onScreenPositionChange: (value: [number, number]) => void
    }
  }
}

export const emitter = mitt()

export const issHeading = 270
const issAltitude = 30

const worldTransform = (input: [number, number, number], heading): [number, number, number] => {
  if (Platform.OS === 'ios') return input

  const angle = heading * (Math.PI/180)

  const x = input[0] * Math.cos(angle) - input[2] * Math.sin(angle)
  const z = input[2] * Math.cos(angle) + input[0] * Math.sin(angle)

  return [x, input[1], z]
}

export const ISSSceneAR = memo(function ISSSceneAR({ sceneNavigator }: ISSSceneProps){
  const [isVisible, setIsVisible] = useState(false)
  const [heading, setHeading] = useState(0)
  const [settings, setSettings] = useState({ isPathVisible: false })

  useEffect(() => {
    emitter.on('settings', setSettings)
    return () => {
      emitter.off('settings', setSettings)
    }
  }, [])

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

  const issCoords = useMemo(
    () => azAltToCartesian(issHeading, issAltitude, 10),
    [issHeading, issAltitude])

  const orbitCoords = useMemo<[number, number, number][]>(() => {
    const start = azAltToCartesian(normalizeHeading(issHeading - 70), 0, 10)
    const end = azAltToCartesian(normalizeHeading(issHeading + 70), 0, 10)

    const curve = new CatmullRomCurve3( [
      new Vector3(...start),
      new Vector3( ...issCoords),
      new Vector3( ...end),
    ])

    const points = curve.getPoints(50)

    return points.map((pt) => worldTransform([pt.x, pt.y, pt.z], heading))
  }, [issCoords, issHeading, heading])

  const pastOrbitCoords = useMemo(() => {
    return orbitCoords.filter((pt) => {
      if (pt[2] < 0) return pt[0] > issCoords[0]
      return pt[0] < issCoords[0]
    })
  }, [orbitCoords, issCoords])

  const futureOrbitCoords = useMemo(() => {
    return orbitCoords.filter((pt) => {
      if (pt[2] < 0) return pt[0] < issCoords[0]
      return pt[0] > issCoords[0]
    })
  }, [orbitCoords, issCoords])

  const onCamera = useCallback(() => {
    sceneNavigator.project(issCoords)
      .then(({ screenPosition })=> {
        sceneNavigator.viroAppProps?.onScreenPositionChange(screenPosition)
      }).catch((err) => {
      console.error(err)
    })
  }, [sceneNavigator, issCoords])

  console.log('render')

  return (
    <ViroARScene onTrackingUpdated={onInitialized} onCameraTransformUpdate={onCamera}>
      { isVisible && (
        <>
          <ViroImage
            height={1}
            width={1}
            rotation={[0, -issHeading, 0]}
            position={worldTransform(issCoords, heading)}
            source={icon}
          />
          { settings.isPathVisible && (
            <>
              <ViroImage
                height={2.5}
                width={1}
                rotation={[0, -issHeading, 0]}
                position={worldTransform([issCoords[0], issCoords[1] + 1.8, issCoords[2]], heading)}
                source={label}
              />
              <ViroPolyline
                position={worldTransform(azAltToCartesian(issHeading, issAltitude, 0), heading)}
                points={pastOrbitCoords}
                thickness={0.05}
              />
              { futureOrbitCoords.map((point) => (
                <ViroSphere
                  key={point.toString()}
                  position={point}
                  radius={0.05}
                />
              ))}
            </>
          )}
        </>
      )}
    </ViroARScene>
  )
})