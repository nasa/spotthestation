import { ControlsView, ControlsRef } from "."
import { StyleFn, useStyles } from "../utils/useStyles"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { ActivityIndicator, StyleSheet, ViewStyle } from "react-native"
import { ExpoWebGLRenderingContext, GLView } from "expo-gl"
import { Renderer } from "expo-three"
import {
  AmbientLight,
  Vector3,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Group,
  CatmullRomCurve3,
} from "three"

import { colors } from "../theme"

import { OrbitPoint } from "../services/api"
import { createCubemapSphere, createISS3D, useTrajectoryLines, GLOBE_RADIUS } from "../utils/gl"
import { degToRad } from "../utils/geometry"

const GlobeTextures = [
  require("../../assets/images/earth8k/posx.jpg"),
  require("../../assets/images/earth8k/negx.jpg"),
  require("../../assets/images/earth8k/posy.jpg"),
  require("../../assets/images/earth8k/negy.jpg"),
  require("../../assets/images/earth8k/posz.jpg"),
  require("../../assets/images/earth8k/negz.jpg"),
]
const CloudsTextures = [
  require("../../assets/images/clouds8k/posx.jpg"),
  require("../../assets/images/clouds8k/negx.jpg"),
  require("../../assets/images/clouds8k/posy.jpg"),
  require("../../assets/images/clouds8k/negy.jpg"),
  require("../../assets/images/clouds8k/posz.jpg"),
  require("../../assets/images/clouds8k/negz.jpg"),
]

export interface SatelliteViewProps {
  issPath: OrbitPoint[]
  zoom?: number
}

const zoomDistances = [3000, 400, 90]

export function SatelliteView({ issPath, zoom = 2 }: SatelliteViewProps) {
  const { $container, $pan } = useStyles(styles)

  const curveRef = useRef<CatmullRomCurve3>(null)
  const curveStartsAtRef = useRef<number>(0)
  const curveEndsAtRef = useRef<number>(0)
  const controlsRef = useRef<ControlsRef>()

  const issRef = useRef<Group>(null)
  const [camera, setCamera] = React.useState<PerspectiveCamera | null>(null)
  const [isReady, setIsReady] = useState(false)
  const sceneRef = useRef<Scene>(null)
  const deadRef = useRef<boolean>(false)
  const localCameraPositionRef = useRef<Vector3>(null)
  const { curve, setIsVisible: setTrajectoryVisible } = useTrajectoryLines(
    sceneRef,
    issPath,
    400,
    5,
  )

  useEffect(() => {
    if (!curve) return
    curveRef.current = curve
    curveStartsAtRef.current = new Date(issPath[0].date).getTime()
    curveEndsAtRef.current = new Date(issPath[issPath.length - 1].date).getTime()
  }, [curve])

  useEffect(() => {
    if (zoom !== 0) {
      if (issRef.current) issRef.current.visible = true
      setTrajectoryVisible(false)
      return undefined
    }

    if (issRef.current) issRef.current.visible = false
    setTrajectoryVisible(true)
  }, [zoom, issRef.current])

  useEffect(() => {
    return () => {
      deadRef.current = true
    }
  }, [])

  const handleCameraChange = useCallback(() => {
    localCameraPositionRef.current = issRef.current.worldToLocal(camera.position.clone())
  }, [camera])

  useEffect(() => {
    if (!localCameraPositionRef.current) return

    const distance = zoomDistances[zoom]
    localCameraPositionRef.current = localCameraPositionRef.current
      .clone()
      .normalize()
      .multiplyScalar(distance)
  }, [zoom, localCameraPositionRef])

  const contextRenderer = async (gl: ExpoWebGLRenderingContext) => {
    const scene = new Scene()
    sceneRef.current = scene
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      1,
      1000,
    )

    const renderer: WebGLRenderer = new Renderer({ gl })
    renderer.debug.checkShaderErrors = false
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

    const clouds = await createCubemapSphere(
      GLOBE_RADIUS + 1,
      CloudsTextures,
      "clouds8k",
      true,
      true,
    )
    const globe = await createCubemapSphere(GLOBE_RADIUS, GlobeTextures, "world-map8k", false, true)
    const iss = await createISS3D()
    issRef.current = iss

    const ambientLight = new AmbientLight(0xffffff, 1)
    scene.add(ambientLight)
    scene.add(globe)
    scene.add(clouds)
    scene.add(iss)

    setCamera(camera)
    setIsReady(true)

    function update() {
      if (!curveRef.current) return

      const t =
        (Date.now() - curveStartsAtRef.current) /
        (curveEndsAtRef.current - curveStartsAtRef.current)
      const tNext =
        (Date.now() + 100 - curveStartsAtRef.current) /
        (curveEndsAtRef.current - curveStartsAtRef.current)
      if (t > 1) return

      let point: Vector3
      let pointNext: Vector3
      try {
        point = curveRef.current.getPoint(t)
        pointNext = curveRef.current.getPoint(tNext)
      } catch (e) {
        console.error(e)
        return
      }

      const up = point.clone().normalize()

      iss.position.set(point.x, point.y, point.z)
      iss.up.set(up.x, up.y, up.z)
      iss.lookAt(pointNext)
      iss.rotateY(degToRad(90))

      if (!localCameraPositionRef.current) {
        iss.updateMatrixWorld(true)
        localCameraPositionRef.current = new Vector3(zoomDistances[zoom], 0, 0).applyAxisAngle(
          new Vector3(0, 0, 1),
          degToRad(25),
        )
      }

      camera.up.set(up.x, up.y, up.z)
      const worldCameraPosition = iss.localToWorld(localCameraPositionRef.current.clone())
      camera.position.set(worldCameraPosition.x, worldCameraPosition.y, worldCameraPosition.z)
      camera.lookAt(point)

      if (controlsRef.current) {
        const controls = controlsRef.current.getControls()
        controls.setTarget(point.clone())
        controls.updateObjectUp()
        controls.saveState()
      }
    }

    const render = () => {
      if (deadRef.current) return

      requestAnimationFrame(render)
      update()
      renderer.render(scene, camera)

      gl.endFrameEXP()
    }
    render()
  }

  return (
    <>
      <ControlsView
        ref={controlsRef}
        style={$pan}
        camera={camera}
        onCameraChange={handleCameraChange}
        enableZoom={false}
      >
        <GLView style={$container} onContextCreate={contextRenderer} key="d" />
        {!isReady && <ActivityIndicator style={StyleSheet.absoluteFill} />}
      </ControlsView>
    </>
  )
}

const styles: StyleFn = () => {
  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  }

  const $pan: ViewStyle = {
    flex: 1,
  }

  return { $container, $pan }
}
