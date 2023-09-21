import React, { memo, useEffect, useMemo, useRef, useState } from "react"
import throttle from "lodash.throttle"
import {
  ViroARScene,
  ViroCameraTransform,
  ViroImage,
  ViroPolyline,
  ViroTrackingStateConstants,
} from "@viro-community/react-viro"
import { cartesianToAzAlt } from "../../../utils/geometry"
import { CatmullRomCurve3, Vector3 } from "three"
import mitt from "mitt"
import { Platform } from "react-native"
import watchHeading from "../../../utils/heading"

const icon = require("../../../../assets/icons/iss.png")

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
  curve: CatmullRomCurve3
  curveStartsAt: number
  curveEndsAt: number
}) => void

export const emitter = mitt()

const worldTransform = (input: [number, number, number], heading): [number, number, number] => {
  if (Platform.OS === "ios") return input

  const angle = (360 - heading) * (Math.PI / 180)

  const x = input[0] * Math.cos(angle) - input[2] * Math.sin(angle)
  const z = input[0] * Math.sin(angle) + input[2] * Math.cos(angle)

  return [x, input[1], z]
}

export const ISSSceneAR = memo(function ISSSceneAR({ sceneNavigator }: ISSSceneProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [initialHeading, setInitialHeading] = useState(null)
  const [curve, setCurve] = useState<CatmullRomCurve3>()
  const [curveStartsAt, setCurveStartsAt] = useState(0)
  const [curveEndsAt, setCurveEndsAt] = useState(0)

  const [settings, setSettings] = useState({ isPathVisible: false })
  const [pastIssPathCoords, setPastIssPathCoords] = useState<[number, number, number][]>([])
  const [futureIssPathCoords, setFutureIssPathCoords] = useState<[number, number, number][]>([])
  const [issMarkerPosition, setIssMarkerPosition] = useState<[number, number, number]>(null)
  const [issAzAlt, setIssAzAlt] = useState<[number, number]>(null)
  const headingRef = useRef<number>()
  const trackingStateRef = useRef()

  useEffect(() => {
    emitter.on("settings", setSettings)
    return () => {
      emitter.off("settings", setSettings)
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
      setCurve(data.curve)
      setCurveStartsAt(data.curveStartsAt)
      setCurveEndsAt(data.curveEndsAt)
    }
    emitter.on("issData", handler)
    return () => {
      emitter.off("issData", handler)
    }
  }, [])

  function showScene() {
    if (
      trackingStateRef.current !== ViroTrackingStateConstants.TRACKING_NORMAL ||
      headingRef.current === null
    )
      return
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
        setIssAzAlt(null)
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
        if (t > curve.getUtoTmapping(u, null)) pastPoints.push([pt.x, pt.y, pt.z])
        else futurePoints.push([pt.x, pt.y, pt.z])
      }

      pastPoints.push([current.x, current.y, current.z])
      futurePoints.unshift([current.x, current.y, current.z])

      setPastIssPathCoords(pastPoints)
      setFutureIssPathCoords(futurePoints)
      setIssMarkerPosition([current.x, current.y, current.z])
      setIssAzAlt(cartesianToAzAlt([current.x, current.y, current.z]))
    }

    update()

    const timeout = setInterval(update, 10000)
    return () => {
      clearInterval(timeout)
    }
  }, [curve])

  const pastOrbitCoords = useMemo<[number, number, number][]>(() => {
    return pastIssPathCoords.map((pt) => worldTransform(pt, initialHeading))
  }, [pastIssPathCoords, initialHeading])

  const futureOrbitCoords = useMemo<[number, number, number][]>(() => {
    return futureIssPathCoords.map((pt) => worldTransform(pt, initialHeading))
  }, [futureIssPathCoords, initialHeading])

  const onCamera = useMemo(() => {
    const cb: CameraTransformCallback = ({ cameraTransform }) => {
      if (!issMarkerPosition || !issAzAlt) return
      const issWorldCoords = worldTransform(issMarkerPosition, initialHeading)
      const totalAngle =
        (new Vector3(...issWorldCoords).angleTo(new Vector3(...cameraTransform.forward)) * 180) /
        Math.PI

      if (totalAngle < 85) {
        sceneNavigator
          .project(issWorldCoords)
          .then(({ screenPosition }) => {
            sceneNavigator.viroAppProps?.onScreenPositionChange([
              screenPosition[0],
              screenPosition[1],
            ])
          })
          .catch((err) => {
            console.error(err)
          })
      } else {
        let angleX =
          (new Vector3(...cameraTransform.forward)
            .projectOnPlane(new Vector3(0, 1, 0))
            .angleTo(new Vector3(...issWorldCoords).projectOnPlane(new Vector3(0, 1, 0))) *
            180) /
          Math.PI

        let angleY =
          (new Vector3(...cameraTransform.forward)
            .projectOnPlane(new Vector3(0, 1, 0))
            .angleTo(new Vector3(...cameraTransform.forward)) *
            180) /
          Math.PI

        angleY = (cameraTransform.forward[1] > 0 ? angleY : -angleY) - issAzAlt[1]
        angleX =
          new Vector3(...issWorldCoords).cross(new Vector3(...cameraTransform.forward)).y > 0
            ? angleX
            : -angleX

        if (Math.abs(angleX) > Math.abs(angleY)) {
          sceneNavigator.viroAppProps?.onScreenPositionChange([angleX > 0 ? 100000 : -100000, 0])
        } else {
          sceneNavigator.viroAppProps?.onScreenPositionChange([
            10000,
            angleY > 0 ? 1000000 : -1000000,
          ])
        }
      }
    }

    return throttle(cb, 50)
  }, [sceneNavigator, issMarkerPosition, initialHeading])

  const markerPosition = useMemo(
    () => (issMarkerPosition ? worldTransform(issMarkerPosition, initialHeading) : null),
    [issMarkerPosition, initialHeading],
  )

  const rotation = useMemo<[number, number, number]>(
    () =>
      issAzAlt
        ? [issAzAlt[1], -(issAzAlt[0] - (Platform.OS === "android" ? initialHeading : 0)), 0]
        : null,
    [issAzAlt, initialHeading],
  )

  return (
    <ViroARScene onTrackingUpdated={onInitialized} onCameraTransformUpdate={onCamera}>
      {isVisible && (
        <>
          {settings.isPathVisible && (
            <>
              {pastOrbitCoords.length > 0 && (
                <ViroPolyline position={[0, 0, 0]} points={pastOrbitCoords} thickness={0.1} />
              )}
              {futureOrbitCoords.length > 0 && (
                <ViroPolyline position={[0, 0, 0]} points={futureOrbitCoords} thickness={0.02} />
              )}
            </>
          )}
          {Boolean(rotation) && (
            <ViroImage
              height={1.5}
              width={1.5}
              rotation={rotation}
              position={markerPosition}
              source={icon}
            />
          )}
        </>
      )}
    </ViroARScene>
  )
})
