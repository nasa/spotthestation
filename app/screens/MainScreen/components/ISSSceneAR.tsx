import React, { memo, useEffect, useMemo, useRef, useState } from "react"
import throttle from 'lodash.throttle'
import {
  ViroARScene, ViroCameraTransform,
  ViroImage,
  ViroPolyline,
  ViroSphere,
  ViroTrackingStateConstants,
} from "@viro-community/react-viro"
import { azAltToCartesian, normalizeHeading } from "../../../utils/geometry"
import { CatmullRomCurve3, Vector3 } from "three"
import mitt from "mitt"
import { Platform } from "react-native"
import watchHeading from "../../../utils/heading"

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

type CameraTransformCallback = (cameraTransform: ViroCameraTransform) => void

type ISSDataCallback = (data: {
  pastIssPathCoords: [number, number][]
  futureIssPathCoords: [number, number][]
  issMarkerPosition: [number, number]
}) => void

export const emitter = mitt()

const worldTransform = (input: [number, number, number], heading): [number, number, number] => {
  if (Platform.OS === 'ios') return input

  const angle = (360 - heading) * (Math.PI/180)

  const x = input[0] * Math.cos(angle) - input[2] * Math.sin(angle)
  const z = input[0] * Math.sin(angle) + input[2] * Math.cos(angle)

  return [x, input[1], z]
}

export const ISSSceneAR = memo(function ISSSceneAR({ sceneNavigator }: ISSSceneProps){
  const [isVisible, setIsVisible] = useState(false)
  const [initialHeading, setInitialHeading] = useState(null)
  const [settings, setSettings] = useState({ isPathVisible: false })
  const [pastIssPathCoords, setPastIssPathCoords] = useState<[number, number][]>([])
  const [futureIssPathCoords, setFutureIssPathCoords] = useState<[number, number][]>([])
  const [issMarkerPosition, setIssMarkerPosition] = useState<[number, number]>([0, 0])
  const headingRef = useRef<number>()
  const trackingStateRef = useRef()
  
  useEffect(() => {
    emitter.on('settings', setSettings)
    return () => {
      emitter.off('settings', setSettings)
    }
  }, [])

  useEffect(() => {
    const unsub = watchHeading((val) => {
      headingRef.current = val
      if (!isVisible) showScene()
    })
    return () => unsub()
  }, [isVisible, initialHeading])


  useEffect(() => {
    const handler: ISSDataCallback = (data) => {
      setPastIssPathCoords(data.pastIssPathCoords)
      setFutureIssPathCoords(data.futureIssPathCoords)
      setIssMarkerPosition(data.issMarkerPosition)
    }
    emitter.on('issData', handler)
    return () => {
      emitter.off('issData', handler)
    }
  }, [])

  function showScene() {
    if (trackingStateRef.current !== ViroTrackingStateConstants.TRACKING_NORMAL || headingRef.current === null) return
    if (initialHeading === null) setInitialHeading(headingRef.current)
    setIsVisible(true)
  }

  function onInitialized(state) {
    trackingStateRef.current = state
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      showScene()
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

    return points.map((pt) => worldTransform([pt.x, pt.y, pt.z], initialHeading))
  }, [pastIssPathCoords, initialHeading])

  const futureOrbitCoords = useMemo<[number, number, number][]>(() => {
    if (futureIssPathCoords.length === 0) return []

    const curve = new CatmullRomCurve3(
      futureIssPathCoords.map((p) => new Vector3(...azAltToCartesian(normalizeHeading(p[0]), p[1], 10)))
    )

    const points = curve.getPoints(50)

    return points.map((pt) => worldTransform([pt.x, pt.y, pt.z], initialHeading))
  }, [futureIssPathCoords, initialHeading])

  const onCamera = useMemo(() => {
    const cb: CameraTransformCallback = ({ cameraTransform }) => {
      const issWorldCoords = worldTransform(issCoords, initialHeading)
      const totalAngle = new Vector3(...issWorldCoords).angleTo(new Vector3(...cameraTransform.forward)) * 180 / Math.PI

      if (totalAngle < 85) {
        sceneNavigator.project(issWorldCoords)
          .then(({ screenPosition })=> {
            sceneNavigator.viroAppProps?.onScreenPositionChange([screenPosition[0], screenPosition[1]])
          }).catch((err) => {
          console.error(err)
        })
      } else {
        let angleX = new Vector3(...cameraTransform.forward)
          .projectOnPlane(new Vector3(0, 1, 0))
          .angleTo(new Vector3(...issWorldCoords).projectOnPlane(new Vector3(0, 1, 0))) * 180 / Math.PI

        let angleY = new Vector3(...cameraTransform.forward)
          .projectOnPlane(new Vector3(0, 1, 0))
          .angleTo(new Vector3(...cameraTransform.forward)) * 180 / Math.PI

        angleY = (cameraTransform.forward[1] > 0 ? angleY: -angleY) - issMarkerPosition[1]
        angleX = new Vector3(...issWorldCoords).cross(new Vector3(...cameraTransform.forward)).y > 0 ? angleX : -angleX

        if (Math.abs(angleX) > Math.abs(angleY)) {
          sceneNavigator.viroAppProps?.onScreenPositionChange([angleX > 0 ? 100000 : -100000, 0])
        } else {
          sceneNavigator.viroAppProps?.onScreenPositionChange([10000, angleY > 0 ? 1000000 : -1000000])
        }
      }
    }

    return throttle(cb, 50)
  }, [sceneNavigator, issCoords, initialHeading])

  return (
    <ViroARScene onTrackingUpdated={onInitialized} onCameraTransformUpdate={onCamera}>
      { isVisible && (
        <>
          <ViroImage
            height={1}
            width={1}
            rotation={[issMarkerPosition[1], -(issMarkerPosition[0] - (Platform.OS === 'android' ? initialHeading : 0)), 0]}
            position={worldTransform(issCoords, initialHeading)}
            source={icon}
          />
          { settings.isPathVisible && (
            <>
              <ViroImage
                height={2.5}
                width={1}
                rotation={[0, -issMarkerPosition[0], 0]}
                position={worldTransform([issCoords[0], issCoords[1] + 1.8, issCoords[2]], initialHeading)}
                source={label}
              />
              <ViroPolyline
                position={worldTransform(azAltToCartesian(issMarkerPosition[0], issMarkerPosition[1], 0), initialHeading)}
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