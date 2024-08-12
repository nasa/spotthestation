import { StyleFn, useStyles } from "../../../utils/useStyles"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { ActivityIndicator, StyleSheet, ViewStyle } from "react-native"
import { ExpoWebGLRenderingContext, GLView } from "expo-gl"
import { Renderer, loadTextureAsync, loadObjAsync } from "expo-three"
import {
  AmbientLight,
  Vector3,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Group,
  RepeatWrapping,
  Texture,
  CatmullRomCurve3,
  BoxGeometry,
} from "three"

import { colors } from "../../../theme"
import { GLOBE_RADIUS } from "./constants"
import { coordinatesToPosition } from "./helpers"

import ControlsView, { ControlsRef } from "./ControlsView"
import { OrbitPoint } from "../../../services/api"
import { useISSPathCurve } from "../../../utils/useISSPathCurve"
import { copyAssetToCacheAsync } from "../../../utils/gl"
import { degToRad } from "../../../utils/geometry"

const ISSTexture = require("../../../../assets/models/iss/texture.png")
const ISSModel = require("../../../../assets/models/iss/model.obj")
const ISSMaterial = require("../../../../assets/models/iss/material.mtl")
const GlobeTextures = [
  require("../../../../assets/images/earth8k/posx.jpg"),
  require("../../../../assets/images/earth8k/negx.jpg"),
  require("../../../../assets/images/earth8k/posy.jpg"),
  require("../../../../assets/images/earth8k/negy.jpg"),
  require("../../../../assets/images/earth8k/posz.jpg"),
  require("../../../../assets/images/earth8k/negz.jpg"),
]
const CloudsTextures = [
  require("../../../../assets/images/clouds8k/posx.jpg"),
  require("../../../../assets/images/clouds8k/negx.jpg"),
  require("../../../../assets/images/clouds8k/posy.jpg"),
  require("../../../../assets/images/clouds8k/negy.jpg"),
  require("../../../../assets/images/clouds8k/posz.jpg"),
  require("../../../../assets/images/clouds8k/negz.jpg"),
]

export interface GlobeProps {
  issPath: OrbitPoint[]
}

export function SatelliteView({ issPath }: GlobeProps) {
  const { $container, $pan } = useStyles(styles)

  const mapper = useCallback((p) => {
    return new Vector3(...coordinatesToPosition([p[0], p[1]], GLOBE_RADIUS + 20))
  }, [])

  const { curve, curveStartsAt, curveEndsAt, updateCurve } = useISSPathCurve(issPath, mapper)
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

  useEffect(() => {
    curveRef.current = curve
    curveStartsAtRef.current = curveStartsAt
    curveEndsAtRef.current = curveEndsAt

    if (!curve) {
      return undefined
    }

    console.log((curveEndsAt - Date.now()) / 1000, issPath[issPath.length - 1].date)

    const timeout = setTimeout(() => {
      if (!issPath?.length || new Date(issPath[issPath.length - 1].date) < new Date()) return
      updateCurve()
    }, curveEndsAt - Date.now())

    return () => {
      clearTimeout(timeout)
    }
  }, [curve])

  useEffect(() => {
    return () => {
      deadRef.current = true
    }
  }, [])

  const createSphere = async (
    radius: number,
    textures: any[],
    name: string,
    transparent,
    depthWrite,
  ) => {
    const sphere = new Mesh()
    sphere.geometry = new BoxGeometry(1, 1, 1, 40, 40, 40)

    const sides = await Promise.all(
      textures.map(async (asset, idx): Promise<Texture> => {
        const uri = await copyAssetToCacheAsync(asset as string, `${name}-${idx}.jpg`)
        return (await loadTextureAsync({ asset: uri })) as Promise<Texture>
      }),
    )

    const materials = sides.map((side) => {
      if (transparent)
        return new MeshBasicMaterial({ color: 0xffffff, alphaMap: side, transparent, depthWrite })
      return new MeshBasicMaterial({ map: side, transparent, depthWrite })
    })

    const v = new Vector3()
    for (let i = 0; i < sphere.geometry.attributes.position.count; ++i) {
      v.fromBufferAttribute(sphere.geometry.attributes.position, i)
      v.normalize().multiplyScalar(radius)
      sphere.geometry.attributes.position.setXYZ(i, v.x, v.y, v.z)
    }

    sphere.geometry.computeVertexNormals()
    sphere.material = materials
    sphere.name = name

    return sphere
  }

  const createISS = async () => {
    const obj = (await loadObjAsync({
      asset: ISSModel,
      mtlAsset: ISSMaterial,
    })) as Group

    const uri = await copyAssetToCacheAsync(ISSTexture as string, "iss-texture.png")
    const texture = (await loadTextureAsync({
      asset: uri,
    })) as Texture

    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping

    obj.traverse(function (object) {
      if (object instanceof Mesh) {
        object.material.map = texture
      }
    })

    obj.scale.set(0.05, 0.05, 0.05)
    return obj
  }

  const handleCameraChange = useCallback(() => {
    localCameraPositionRef.current = issRef.current.worldToLocal(camera.position.clone())
  }, [camera])

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

    const clouds = await createSphere(GLOBE_RADIUS + 1, CloudsTextures, "clouds8k", true, true)
    const globe = await createSphere(GLOBE_RADIUS, GlobeTextures, "world-map8k", false, true)
    const iss = await createISS()
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
      if (t > 1) return updateCurve()

      let point: Vector3
      let pointNext: Vector3
      try {
        point = curve.getPoint(t)
        pointNext = curve.getPoint(tNext)
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
        const dir = new Vector3().subVectors(pointNext, point).normalize()
        const displacementX = dir.multiplyScalar(-4)
        const displacementY = up.clone().multiplyScalar(2)
        const cameraPosition = point.clone().add(displacementX).add(displacementY)

        localCameraPositionRef.current = iss.worldToLocal(cameraPosition.clone())
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
        onPositionChange={handleCameraChange}
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
