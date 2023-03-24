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
  const [pastIssPathCoords, setPastIssPathCoords] = useState<[number, number][]>([])
  const [futureIssPathCoords, setFutureIssPathCoords] = useState<[number, number][]>([])
  const [issMarkerPosition, setIssMarkerPosition] = useState<[number, number]>([0,0])

  useEffect(() => {
    emitter.on('settings', setSettings)
    return () => {
      emitter.off('settings', setSettings)
    }
  }, [])

  useEffect(() => {
    const handler = (data) => {
      setPastIssPathCoords(data.pastIssPathCoords)
      setFutureIssPathCoords(data.futureIssPathCoords)
      setIssMarkerPosition(data.issMarkerPosition)
    }
    emitter.on('issData', handler)
    return () => {
      emitter.off('issData', handler)
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
    () => azAltToCartesian(issMarkerPosition[0], issMarkerPosition[1], 10),
    [issMarkerPosition])

  const pastOrbitCoords = useMemo<[number, number, number][]>(() => {
    if (pastIssPathCoords.length === 0) return []

    const curve = new CatmullRomCurve3(
      pastIssPathCoords.map((p) => new Vector3(...azAltToCartesian(normalizeHeading(p[0]), p[1], 10)))
    )

    const points = curve.getPoints(50)

    return points.map((pt) => worldTransform([pt.x, pt.y, pt.z], heading))
  }, [pastIssPathCoords, heading])

  const futureOrbitCoords = useMemo<[number, number, number][]>(() => {
    if (futureIssPathCoords.length === 0) return []

    const curve = new CatmullRomCurve3(
      futureIssPathCoords.map((p) => new Vector3(...azAltToCartesian(normalizeHeading(p[0]), p[1], 10)))
    )

    const points = curve.getPoints(50)

    return points.map((pt) => worldTransform([pt.x, pt.y, pt.z], heading))
  }, [futureIssPathCoords, heading])

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
            rotation={[0, -issMarkerPosition[0], 0]}
            position={worldTransform(issCoords, heading)}
            source={icon}
          />
          { settings.isPathVisible && (
            <>
              <ViroImage
                height={2.5}
                width={1}
                rotation={[0, -issMarkerPosition[0], 0]}
                position={worldTransform([issCoords[0], issCoords[1] + 1.8, issCoords[2]], heading)}
                source={label}
              />
              <ViroPolyline
                position={worldTransform(azAltToCartesian(issMarkerPosition[0], issMarkerPosition[1], 0), heading)}
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