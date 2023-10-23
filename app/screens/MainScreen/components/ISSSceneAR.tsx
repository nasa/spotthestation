import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react"
import throttle from "lodash.throttle"
import {
  BufferGeometry,
  Line,
  LineBasicMaterial,
  LineDashedMaterial,
  PerspectiveCamera,
  Quaternion,
  Scene,
  Sprite,
  SpriteMaterial,
  Texture,
  Vector3,
  WebGLRenderer,
} from "three"
import {
  Dimensions,
  Image,
  LayoutRectangle,
  PixelRatio,
  Platform,
  StyleSheet,
  View,
} from "react-native"
import { ExpoWebGLRenderingContext, GLView } from "expo-gl"
import { loadTextureAsync, Renderer } from "expo-three"
import { Camera, CameraDeviceFormat, useCameraDevices } from "react-native-vision-camera"
import { maxBy, minBy } from "lodash"
import { iconRegistry } from "../../../components"
import { copyAssetToCacheAsync } from "../../../utils/gl"
import { cartesianToAzAlt } from "../../../utils/geometry"
import watchOrientation from "../../../utils/orientation"
import Orientation from "react-native-orientation-locker"
import { LocationType } from "../../../services/api"

interface ISSSceneProps {
  onScreenPositionChange: (value: [number, number]) => void
  issMarkerPosition: Vector3
  pastIssPathCoords: Vector3[]
  futureIssPathCoords: Vector3[]
  isPathVisible: boolean
  still: boolean
  onStillReady: () => void
  location: LocationType
}

const createISSMarker = (texture: Texture, position: Vector3) => {
  const mesh = new Sprite()
  texture.needsUpdate = true
  mesh.material = new SpriteMaterial({
    map: texture,
    color: 0xffffff,
  })
  mesh.material.depthTest = false
  mesh.scale.set(150, 150, 1)
  mesh.position.set(position.x, position.y, position.z)
  mesh.visible = true

  return mesh
}

const createOrbit = (pastPoints: Vector3[], futurePoints: Vector3[]) => {
  const pastLine = new Line()
  pastLine.material = new LineBasicMaterial({ color: 0xffffff, linewidth: 8 })
  pastLine.geometry = new BufferGeometry().setFromPoints(pastPoints)

  const futureLine = new Line()
  futureLine.material = new LineDashedMaterial({
    color: 0xffffff,
    linewidth: 8,
    dashSize: 20,
    gapSize: 20,
  })

  futureLine.geometry = new BufferGeometry().setFromPoints(futurePoints)
  futureLine.computeLineDistances()

  return [pastLine, futureLine]
}

const getRatio = (d1: number, d2: number) => {
  return Math.max(d1, d2) / Math.min(d1, d2)
}

export const ISSSceneAR = memo(function ISSSceneAR({
  onScreenPositionChange,
  pastIssPathCoords,
  futureIssPathCoords,
  issMarkerPosition,
  isPathVisible,
  still,
  onStillReady,
  location,
}: ISSSceneProps) {
  const [layout, setLayout] = useState<LayoutRectangle>()
  const devices = useCameraDevices()
  const device = devices.back
  const [orientation, setOrientation] = useState(Orientation.getInitialOrientation())

  const [activeFormat, setActiveFormat] = useState<CameraDeviceFormat>(null)
  const [issTexture, setIssTexture] = useState<Texture>(null)

  const cameraRef = useRef<PerspectiveCamera>(null)
  const glRef = useRef<ExpoWebGLRenderingContext>()
  const sceneRef = useRef<Scene>()
  const issMarkerRef = useRef<Sprite>(null)
  const pastRef = useRef<Line>(null)
  const futureRef = useRef<Line>(null)
  const deadRef = useRef<boolean>(false)
  const realCameraRef = useRef<Camera>(null)

  useEffect(() => {
    copyAssetToCacheAsync(iconRegistry.iss as string, "iss.png")
      .then((uri) => loadTextureAsync({ asset: uri }))
      .then(setIssTexture)
      .catch((e) => console.log(e))

    return () => {
      deadRef.current = true
    }
  }, [])

  useEffect(() => {
    if (!device) return

    let formats = device.formats.filter(
      (f) => f.photoWidth === f.videoWidth && f.photoHeight === f.videoHeight,
    )

    if (formats.length > 1) {
      const { maxISO } = maxBy(formats, (f) => f.maxISO)
      formats = formats.filter((f) => f.maxISO === maxISO)
    }

    if (formats.length > 1) {
      const { width, height } = Dimensions.get("window")
      const { videoWidth, videoHeight } = minBy(formats, (f) => {
        return Math.abs(getRatio(width, height) - getRatio(f.videoWidth, f.videoHeight))
      })

      const formatRatio = getRatio(videoWidth, videoHeight)
      formats = formats.filter(
        (f) => Math.abs(getRatio(f.videoWidth, f.videoHeight) - formatRatio) < 0.0001,
      )
    }

    if (formats.length > 1) {
      formats = [maxBy(formats, (f) => f.videoWidth * f.videoHeight)]
    }

    const format = formats.length > 0 ? formats[0] : device.formats[device.formats.length - 1]
    setActiveFormat(format)
  }, [device])

  const updateCurveGeometry = useCallback(() => {
    if (
      pastIssPathCoords.length === 0 ||
      futureIssPathCoords.length === 0 ||
      !sceneRef.current ||
      !isPathVisible
    ) {
      if (futureRef.current) sceneRef.current.remove(futureRef.current)
      if (pastRef.current) sceneRef.current.remove(pastRef.current)
      return
    }

    if (!futureRef.current || !pastRef.current) {
      const [past, future] = createOrbit(pastIssPathCoords, futureIssPathCoords)
      pastRef.current = past
      futureRef.current = future
    } else {
      pastRef.current.geometry = new BufferGeometry().setFromPoints(pastIssPathCoords)
      futureRef.current.geometry = new BufferGeometry().setFromPoints(futureIssPathCoords)

      futureRef.current.computeLineDistances()
    }

    if (!sceneRef.current) return
    if (!sceneRef.current.getObjectById(pastRef.current.id)) sceneRef.current?.add(pastRef.current)
    if (!sceneRef.current.getObjectById(futureRef.current.id))
      sceneRef.current?.add(futureRef.current)
  }, [isPathVisible, pastIssPathCoords, futureIssPathCoords, sceneRef.current])

  useEffect(() => {
    updateCurveGeometry()
  }, [updateCurveGeometry])

  useEffect(() => {
    if (!issMarkerPosition || !sceneRef.current || !issTexture) {
      if (issMarkerRef.current) sceneRef.current.remove(issMarkerRef.current)
      return
    }

    if (!issMarkerRef.current) {
      issMarkerRef.current = createISSMarker(issTexture, issMarkerPosition)
    } else {
      issMarkerRef.current.position.set(
        issMarkerPosition.x,
        issMarkerPosition.y,
        issMarkerPosition.z,
      )
    }

    if (cameraRef.current) {
      const d = cameraRef.current.getFocalLength()
      const scale = (4 * (1000 - d)) / d
      issMarkerRef.current.scale.set(scale, scale, 1)
    }

    if (!sceneRef.current) return
    if (!sceneRef.current.getObjectById(issMarkerRef.current.id))
      sceneRef.current?.add(issMarkerRef.current)
  }, [issTexture, issMarkerPosition, sceneRef.current, cameraRef.current])

  useEffect(() => {
    if (!layout || !activeFormat) return

    const isLandscape = orientation.startsWith("LANDSCAPE")
    const layoutRatio = layout.width / layout.height
    const cameraRatio = isLandscape
      ? activeFormat.videoWidth / activeFormat.videoHeight
      : activeFormat.videoHeight / activeFormat.videoWidth

    let realWidth = 0
    let realHeight = 0
    if (cameraRatio < layoutRatio) {
      realWidth = layout.width
      realHeight = layout.width / cameraRatio
    } else {
      realHeight = layout.height
      realWidth = layout.height * cameraRatio
    }

    let fov = activeFormat.fieldOfView
    if (isLandscape) fov = fov / cameraRatio

    const camera = new PerspectiveCamera(fov, cameraRatio, 0.1, 6000)

    camera.setViewOffset(
      realWidth,
      realHeight,
      (realWidth - layout.width) / 2,
      (realHeight - layout.height) / 2,
      layout.width,
      layout.height,
    )

    camera.position.set(0, 0, 0)
    camera.rotation.set(0, 0, 0)

    cameraRef.current = camera
  }, [layout, orientation, activeFormat])

  const contextRenderer = useCallback(
    (gl: ExpoWebGLRenderingContext) => {
      glRef.current = gl

      const scene = new Scene()
      sceneRef.current = scene

      const renderer: WebGLRenderer = new Renderer({ gl })
      renderer.debug.checkShaderErrors = false

      renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

      const render = () => {
        if (deadRef.current) return
        requestAnimationFrame(render)
        if (cameraRef.current) renderer.render(scene, cameraRef.current)
        gl.endFrameEXP()
      }

      render()
    },
    [activeFormat],
  )

  const onCameraChange = useMemo(
    () =>
      throttle(() => {
        if (!cameraRef.current || !glRef.current || !issMarkerPosition || !layout) return

        const forward = cameraRef.current.getWorldDirection(new Vector3())
        const totalAngle = (issMarkerPosition.clone().angleTo(forward) * 180) / Math.PI

        if (totalAngle < 85) {
          const projected = issMarkerPosition.clone().project(cameraRef.current)
          const x = ((projected.x + 1) * layout.width * PixelRatio.get()) / 2
          const y = (-(projected.y - 1) * layout.height * PixelRatio.get()) / 2
          onScreenPositionChange([x, y])
        } else {
          let angleX =
            (forward
              .clone()
              .projectOnPlane(new Vector3(0, 1, 0))
              .angleTo(issMarkerPosition.clone().projectOnPlane(new Vector3(0, 1, 0))) *
              180) /
            Math.PI

          let angleY =
            (forward.clone().projectOnPlane(new Vector3(0, 1, 0)).angleTo(forward) * 180) / Math.PI

          const azAlt = cartesianToAzAlt([
            issMarkerPosition.x,
            issMarkerPosition.y,
            issMarkerPosition.z,
          ])
          angleY = (forward.y > 0 ? angleY : -angleY) - azAlt[1]
          angleX = issMarkerPosition.clone().cross(forward).y > 0 ? angleX : -angleX

          if (Math.abs(angleX) > Math.abs(angleY)) {
            onScreenPositionChange([angleX > 0 ? 100000 : -100000, 0])
          } else {
            onScreenPositionChange([10000, angleY > 0 ? 1000000 : -1000000])
          }
        }
      }, 50),
    [issMarkerPosition, layout, glRef.current, cameraRef.current],
  )

  useEffect(() => {
    if (!cameraRef.current) return undefined
    const unsub = watchOrientation(
      (rotation) => {
        const targetRot = rotation
        if (orientation === "LANDSCAPE-RIGHT") {
          targetRot.multiply(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2))
        } else if (orientation === "LANDSCAPE-LEFT") {
          targetRot.multiply(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), -Math.PI / 2))
        }

        cameraRef.current.rotation.setFromQuaternion(targetRot)
        onCameraChange()
      },
      [location.location.lat, location.location.lng],
    )

    return () => unsub()
  }, [cameraRef.current, orientation, onCameraChange, location])

  const [isLayoutUpdating, setIsLayoutUpdating] = useState(false)
  const [stillImage, setStillImage] = useState(null)

  useEffect(() => {
    if (Platform.OS === "android") setIsLayoutUpdating(true)
  }, [layout])

  useEffect(() => {
    if (isLayoutUpdating) setIsLayoutUpdating(false)
  }, [isLayoutUpdating])

  useEffect(() => {
    if (!still) {
      setStillImage(null)
      return
    }

    if (!realCameraRef.current) return
    ;(Platform.OS === "android"
      ? realCameraRef.current.takeSnapshot()
      : realCameraRef.current.takePhoto()
    )
      .then((photo) => {
        setStillImage(`file://${photo.path}`)
      })
      .catch((e) => console.log(e))
  }, [still])

  useEffect(() => {
    Orientation.addOrientationListener(setOrientation)
    return () => Orientation.removeOrientationListener(setOrientation)
  }, [])

  return (
    <View style={StyleSheet.absoluteFill} onLayout={(e) => setLayout(e.nativeEvent.layout)}>
      {Boolean(layout && activeFormat) && (
        <>
          <Camera
            ref={realCameraRef}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            format={activeFormat}
            photo={true}
            frameProcessor={undefined}
          />

          {stillImage && (
            <Image
              source={{ uri: stillImage }}
              style={StyleSheet.absoluteFill}
              onLoadEnd={onStillReady}
            />
          )}

          {!isLayoutUpdating && (
            <GLView style={StyleSheet.absoluteFill} onContextCreate={contextRenderer} />
          )}
        </>
      )}
    </View>
  )
})
