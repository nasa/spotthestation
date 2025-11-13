import { iconRegistry, ControlsView } from "."
import { StyleFn, useStyles } from "../utils/useStyles"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ActivityIndicator, LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native"
import { ExpoWebGLRenderingContext, GLView } from "expo-gl"
import { Renderer, loadTextureAsync } from "expo-three"
import {
  Sprite,
  SpriteMaterial,
  Texture,
  AmbientLight,
  Vector3,
  Mesh,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Vector2,
} from "three"
import { colors } from "../theme"

import { OrbitPoint } from "../services/api"
import { copyAssetToCacheAsync, createSphere, useTrajectoryLines, GLOBE_RADIUS } from "../utils/gl"
import { cartesianToLatLon, degToRad, latLonToCartesian } from "../utils/geometry"
import debounce from "lodash/debounce"

const CloudsTexture = require("../../assets/images/clouds.png")
const GlobeTexturesNight = require("../../assets/images/World-Map.jpg")

export interface GlobeProps {
  marker?: [number, number]
  zoom?: number
  issMarkerPosition?: [number, number]
  pastIssPathCoords?: [number, number][]
  futureIssPathCoords?: [number, number][]
  issPath: OrbitPoint[]
  onCameraPositionChange?: (coords: [number, number]) => void
  onCameraZoomChange?: (zoom: number) => void
  defaultCameraPosition?: [number, number]
}

export function Globe({
  marker,
  zoom,
  issPath,
  onCameraPositionChange,
  onCameraZoomChange,
  defaultCameraPosition,
}: GlobeProps) {
  const { $container, $pan } = useStyles(styles)

  const [camera, setCamera] = React.useState<PerspectiveCamera | null>(null)
  const [isReady, setIsReady] = useState(false)
  const pointRef = useRef<Sprite>(null)
  const sceneRef = useRef<Scene>(null)
  const globeRef = useRef<Mesh>(null)
  const deadRef = useRef<boolean>(false)
  const [markerTexture, setMarkerTexture] = useState<Texture>(null)
  const [initialHeight, setInitialHeight] = React.useState<number | null>(null)
  const [height, setHeight] = React.useState<number | null>(null)

  const { setIsVisible: setTrajectoryVisible } = useTrajectoryLines(sceneRef, issPath, 200, 32)

  useEffect(() => {
    copyAssetToCacheAsync(iconRegistry.fiMapPin as string, "fiMapPin.png")
      .then((uri) => loadTextureAsync({ asset: uri }))
      .then(setMarkerTexture)
      .catch((e) => console.log(e))
  }, [])

  useEffect(() => {
    function updateMarker() {
      if (!marker || !sceneRef.current || !markerTexture) {
        if (pointRef.current) sceneRef.current.remove(pointRef.current)
        return
      }

      if (!pointRef.current) pointRef.current = createMarker(markerTexture)
      const [x, y, z] = latLonToCartesian(marker, GLOBE_RADIUS)
      pointRef.current.position.set(x, y, z)

      if (!sceneRef.current) return
      if (!sceneRef.current.getObjectById(pointRef.current.id))
        sceneRef.current?.add(pointRef.current)
    }

    updateMarker()
  }, [markerTexture, marker, sceneRef.current])

  useEffect(() => {
    if (camera && camera.zoom !== zoom) {
      camera.zoom = zoom
      camera.updateProjectionMatrix()
    }
  }, [zoom, camera])

  useEffect(() => {
    setTrajectoryVisible(true)
    return () => {
      deadRef.current = true
    }
  }, [])

  const createMarker = (texture: Texture) => {
    const mesh = new Sprite()
    texture.needsUpdate = true
    mesh.material = new SpriteMaterial({
      map: texture,
      color: 0xffffff,
    })
    mesh.material.depthTest = false

    const [x, y, z] = latLonToCartesian(marker, GLOBE_RADIUS)

    mesh.center = new Vector2(0.5, 0)
    mesh.scale.set(24, 24, 1)
    mesh.position.set(x, y, z)
    mesh.visible = false

    return mesh
  }

  const checkMarkerVisibility = useCallback(() => {
    if (!globeRef.current || !pointRef.current || !camera) return

    const cameraToEarth = globeRef.current.position.clone().sub(camera.position)
    const L = Math.sqrt(Math.pow(cameraToEarth.length(), 2) - Math.pow(GLOBE_RADIUS, 2))
    const cameraToPin = pointRef.current.position.clone().sub(camera.position)
    pointRef.current.visible = cameraToPin.length() < L
  }, [globeRef.current, pointRef.current, camera])

  const handleCameraChange = useCallback(() => {
    checkMarkerVisibility()
    if (onCameraPositionChange) {
      const coords = cartesianToLatLon([camera.position.x, camera.position.y, camera.position.z])
      onCameraPositionChange(coords)
    }

    if (onCameraZoomChange && zoom !== camera.zoom) {
      onCameraZoomChange(camera.zoom)
    }
  }, [zoom, onCameraPositionChange, onCameraZoomChange, checkMarkerVisibility])

  useEffect(() => {
    checkMarkerVisibility()
  }, [globeRef.current, pointRef.current, camera, marker])

  useEffect(() => {
    if (!camera || !defaultCameraPosition) return
    const cameraPosition = latLonToCartesian(defaultCameraPosition, camera.position.length())
    camera.position.set(...cameraPosition)
    camera.lookAt(new Vector3(0, 0, 0))
  }, [defaultCameraPosition?.[0], defaultCameraPosition?.[1], camera])

  const contextRenderer = async (gl: ExpoWebGLRenderingContext) => {
    const scene = new Scene()
    sceneRef.current = scene

    const aspect = gl.drawingBufferWidth / gl.drawingBufferHeight
    const fov = 75
    const camera = new PerspectiveCamera(fov, aspect, 1, 1000)

    const fovVertical = degToRad(fov)
    const fovHorizontal = 2 * Math.atan(Math.tan(fovVertical / 2) * aspect)

    const distanceVertical = GLOBE_RADIUS / Math.sin(fovVertical / 2)
    const distanceHorizontal = GLOBE_RADIUS / Math.sin(fovHorizontal / 2)

    const distance = Math.max(distanceVertical, distanceHorizontal)

    const ambient = new AmbientLight("white", 666)

    const cameraPosition = latLonToCartesian(defaultCameraPosition || [0, 0], distance * 1.1)
    camera.position.set(...cameraPosition)

    setCamera(camera)

    const renderer: WebGLRenderer = new Renderer({ gl })
    renderer.debug.checkShaderErrors = false
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

    const clouds = await createSphere(GLOBE_RADIUS + 10, CloudsTexture, "clouds", true, false)
    const globe = await createSphere(GLOBE_RADIUS, GlobeTexturesNight, "world-map", false, true)
    globeRef.current = globe

    camera.add(ambient)
    scene.add(globe)
    scene.add(clouds)

    function update() {
      ;["x", "y", "z"].forEach((axis) => {
        clouds.rotation[axis] += Math.random() / 10000
      })
    }

    const render = () => {
      if (deadRef.current) return

      setIsReady(true)
      requestAnimationFrame(render)
      update()
      renderer.render(scene, camera)

      gl.endFrameEXP()
    }
    render()
  }

  const handleHeightChange = useMemo(
    () =>
      debounce((h: number) => {
        if (initialHeight === null) setInitialHeight(h)
        setHeight(h)
      }, 300),
    [initialHeight],
  )

  const handleLayoutChange = (e: LayoutChangeEvent) => {
    handleHeightChange(e.nativeEvent.layout.height)
  }

  return (
    <View style={$pan} onLayout={handleLayoutChange}>
      {!!initialHeight && (
        <ControlsView
          style={{ height: initialHeight, transform: `scale(${height / initialHeight})` }}
          camera={camera}
          onCameraChange={handleCameraChange}
          maxZoom={6}
        >
          <GLView style={$container} onContextCreate={contextRenderer} key="d" />
          {!isReady && <ActivityIndicator style={StyleSheet.absoluteFill} />}
        </ControlsView>
      )}
    </View>
  )
}

const styles: StyleFn = () => {
  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  }

  const $pan: ViewStyle = {
    flex: 1,
    justifyContent: "center",
  }

  return { $container, $pan }
}
