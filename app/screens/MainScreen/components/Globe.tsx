import { StyleFn, useStyles } from "../../../utils/useStyles"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { ViewStyle } from "react-native"
import { ExpoWebGLRenderingContext, GLView } from "expo-gl"
import { Renderer, loadTextureAsync } from "expo-three"
import {
  Sprite,
  SpriteMaterial,
  Texture,
  AmbientLight,
  Vector3,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshBasicMaterial,
  BufferGeometry,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  WebGLRenderer,
  LineDashedMaterial,
  Vector2,
} from "three"
import { colors } from "../../../theme"
import { GLOBE_RADIUS, GLOBE_SEGMENTS } from "./constants"
import { coordinatesToPosition, positionToCoordinates } from "./helpers"
import { iconRegistry } from "../../../components/Icon"

import ControlsView from "./ControlsView"
import { OrbitPoint } from "../../../services/api"
import { useISSPathCurve } from "../../../utils/useISSPathCurve"
import { copyAssetToCacheAsync } from "../../../utils/gl"

const CloudsTexture = require("../../../../assets/images/clouds.png")
const GlobeTexturesNight = require("../../../../assets/images/World-Map.jpg")

export interface GlobeProps {
  marker?: number[]
  zoom?: number
  issMarkerPosition?: [number, number]
  pastIssPathCoords?: [number, number][]
  futureIssPathCoords?: [number, number][]
  issPath: OrbitPoint[]
  onCameraChange?: (coords: [number, number]) => void
  defaultCameraPosition?: [number, number]
}

export function Globe({
  marker,
  zoom,
  issPath,
  onCameraChange,
  defaultCameraPosition,
}: GlobeProps) {
  const { $container, $pan } = useStyles(styles)

  const mapper = useCallback((p) => {
    return new Vector3(...coordinatesToPosition([p[0], p[1]], GLOBE_RADIUS + 20))
  }, [])

  const { curve, curveStartsAt, curveEndsAt, updateCurve } = useISSPathCurve(issPath, mapper)

  const [camera, setCamera] = React.useState<PerspectiveCamera | null>(null)
  const issMarkerRef = useRef<Sprite>(null)
  const pointRef = useRef<Sprite>(null)
  const pastRef = useRef<Line>(null)
  const futurehRef = useRef<Line>(null)
  const sceneRef = useRef<Scene>(null)
  const globeRef = useRef<Mesh>(null)
  const deadRef = useRef<boolean>(false)
  const [issCoords3D, setIssCoords3D] = useState<[number, number, number]>(null)

  useEffect(() => {
    async function updateMarker() {
      if (!issCoords3D || !sceneRef.current) {
        if (issMarkerRef.current) sceneRef.current.remove(issMarkerRef.current)
        return
      }

      if (!issMarkerRef.current) {
        issMarkerRef.current = await createISSMarker(issCoords3D)
      } else {
        issMarkerRef.current.position.set(...issCoords3D)
      }

      if (!sceneRef.current) return
      if (!sceneRef.current.getObjectById(issMarkerRef.current.id))
        sceneRef.current?.add(issMarkerRef.current)
    }

    updateMarker().catch(() => null)
  }, [issCoords3D, sceneRef.current])

  useEffect(() => {
    async function updateMarker() {
      if (!marker || !sceneRef.current) {
        if (pointRef.current) sceneRef.current.remove(pointRef.current)
        return
      }

      if (!pointRef.current) {
        pointRef.current = await createMarker()
      } else {
        const [x, y, z] = coordinatesToPosition(marker, GLOBE_RADIUS)
        pointRef.current.position.set(x, y, z)
      }

      if (!sceneRef.current) return
      if (!sceneRef.current.getObjectById(pointRef.current.id))
        sceneRef.current?.add(pointRef.current)
    }

    updateMarker().catch(() => null)
  }, [marker, sceneRef.current])

  const updateCurveGeometry = useCallback(() => {
    if (!curve || !sceneRef.current) {
      if (futurehRef.current) sceneRef.current.remove(futurehRef.current)
      if (pastRef.current) sceneRef.current.remove(pastRef.current)
      return
    }

    if (!futurehRef.current || !pastRef.current) createOrbit()
    else {
      const t = (Date.now() - curveStartsAt) / (curveEndsAt - curveStartsAt)
      if (t > 1) return

      const pastPoints = []
      for (let i = 0; i <= 100; ++i) {
        pastPoints.push(curve.getPoint((i * t) / 100))
      }

      const futurePoints = []
      for (let i = 0; i <= 100; ++i) {
        futurePoints.push(curve.getPoint(Math.min(1, t + (i * (1 - t)) / 100)))
      }

      pastRef.current.geometry = new BufferGeometry().setFromPoints(pastPoints)
      futurehRef.current.geometry = new BufferGeometry().setFromPoints(futurePoints)

      futurehRef.current.computeLineDistances()
    }

    if (!sceneRef.current) return
    if (!sceneRef.current.getObjectById(pastRef.current.id)) sceneRef.current?.add(pastRef.current)
    if (!sceneRef.current.getObjectById(futurehRef.current.id))
      sceneRef.current?.add(futurehRef.current)
  }, [curve, sceneRef.current])

  useEffect(() => {
    updateCurveGeometry()
  }, [curve, curveStartsAt, curveEndsAt, sceneRef.current])

  useEffect(() => {
    if (camera) {
      camera.zoom = zoom
      camera.updateProjectionMatrix()
    }
  }, [zoom, camera])

  useEffect(() => {
    if (!curve) {
      setIssCoords3D(null)
      return undefined
    }
    const update = () => {
      if (!issPath?.length || new Date(issPath[issPath.length - 1].date) < new Date()) return
      const t = (Date.now() - curveStartsAt) / (curveEndsAt - curveStartsAt)
      if (t > 1) return updateCurve()

      let point: Vector3
      try {
        point = curve.getPoint(t)
      } catch (e) {
        console.error(e)
        return
      }

      setIssCoords3D([point.x, point.y, point.z])
      updateCurveGeometry()
    }

    update()

    const timeout = setInterval(update, 10000)
    return () => {
      clearInterval(timeout)
    }
  }, [curve])

  useEffect(() => {
    return () => {
      deadRef.current = true
    }
  }, [])

  const createMarker = async () => {
    const uri = await copyAssetToCacheAsync(iconRegistry.fiMapPin as string, "fiMapPin.png")
    const mesh = new Sprite()
    const texture: Texture = await loadTextureAsync({
      asset: uri,
    })
    texture.needsUpdate = true
    mesh.material = new SpriteMaterial({
      map: texture,
      color: 0xffffff,
    })
    mesh.material.depthTest = false

    const [x, y, z] = coordinatesToPosition(marker, GLOBE_RADIUS)

    mesh.center = new Vector2(0.5, 0)
    mesh.scale.set(24, 24, 1)
    mesh.position.set(x, y, z)
    mesh.visible = false

    return mesh
  }

  const createISSMarker = async (position: [number, number, number] = [0, 0, 0]) => {
    const uri = await copyAssetToCacheAsync(iconRegistry.position as string, "position.png")
    const mesh = new Sprite()
    const texture: Texture = await loadTextureAsync({
      asset: uri,
    })
    texture.needsUpdate = true
    mesh.material = new SpriteMaterial({
      map: texture,
      color: 0xffffff,
    })

    mesh.scale.set(32, 32, 1)
    mesh.position.set(...position)

    return mesh
  }

  const createSphere = async (radius: number, texture, name: string, transparent, depthWrite) => {
    const sphere = new Mesh()
    sphere.geometry = new SphereGeometry(radius, GLOBE_SEGMENTS, GLOBE_SEGMENTS)
    const uri = await copyAssetToCacheAsync(texture as string, `${name}.png`)

    const tx = await loadTextureAsync({
      asset: uri,
    })

    if (tx) {
      sphere.material = new MeshBasicMaterial({
        map: tx,
        transparent,
        depthWrite,
      })
    } else {
      sphere.material = new MeshBasicMaterial({ color: 0xffffff, transparent })
    }

    sphere.name = name

    return sphere
  }

  const createOrbit = () => {
    // const pastCurve = new CatmullRomCurve3(
    //   pastIssPathCoords.map((coords) => {
    //     return new Vector3(...coordinatesToPosition(coords, GLOBE_RADIUS + 20))
    //   }),
    // )
    //
    // const futureCurve = new CatmullRomCurve3(
    //   futureIssPathCoords.map((coords) => {
    //     return new Vector3(...coordinatesToPosition(coords, GLOBE_RADIUS + 20))
    //   }),
    // )
    //
    // const points = curve.getPoints(100)
    // const [issX, _, issZ] = coordinatesToPosition(issMarkerPosition, GLOBE_RADIUS + 20)
    // const pastPoints = points
    //   .filter((pt) => getCrossProduct([pt.x, pt.z], [issX, issZ]) >= 0)
    //   .sort((a, b) => dstSqr([a.x, a.z], [issX, issZ]) - dstSqr([b.x, b.z], [issX, issZ]))
    //
    // const futurePoints = points
    //   .filter((pt) => getCrossProduct([pt.x, pt.z], [issX, issZ]) < 0)
    //   .sort((a, b) => dstSqr([a.x, a.z], [issX, issZ]) - dstSqr([b.x, b.z], [issX, issZ]))

    const pastLine = new Line()
    pastLine.material = new LineBasicMaterial({ color: 0x00ff00, linewidth: 6 })
    const t = (Date.now() - curveStartsAt) / (curveEndsAt - curveStartsAt)

    const pastPoints = []
    for (let i = 0; i <= 100; ++i) {
      pastPoints.push(curve.getPoint((i * t) / 100))
    }
    pastLine.geometry = new BufferGeometry().setFromPoints(pastPoints)

    const futureLine = new Line()
    futureLine.material = new LineDashedMaterial({
      color: 0xadadae,
      linewidth: 6,
      dashSize: 5,
      gapSize: 5,
    })

    const futurePoints = []
    for (let i = 0; i <= 100; ++i) {
      futurePoints.push(curve.getPoint(t + (i * (1 - t)) / 100))
    }
    futureLine.geometry = new BufferGeometry().setFromPoints(futurePoints)

    futureLine.computeLineDistances()

    pastRef.current = pastLine
    futurehRef.current = futureLine

    return [pastLine, futureLine]
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
    if (onCameraChange) {
      const coords = positionToCoordinates([
        camera.position.x,
        camera.position.y,
        camera.position.z,
      ])
      onCameraChange(coords)
    }
  }, [onCameraChange, checkMarkerVisibility])

  useEffect(() => {
    checkMarkerVisibility()
  }, [globeRef.current, pointRef.current, camera, marker])

  const contextRenderer = async (gl: ExpoWebGLRenderingContext) => {
    const scene = new Scene()
    sceneRef.current = scene
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      1,
      1000,
    )

    const ambient = new AmbientLight("white", 666)

    const cameraPosition = coordinatesToPosition(defaultCameraPosition || [0, 0], 850)
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

      requestAnimationFrame(render)
      update()
      renderer.render(scene, camera)

      gl.endFrameEXP()
    }
    render()
  }

  return (
    <>
      <ControlsView style={$pan} camera={camera} onPositionChange={handleCameraChange}>
        <GLView style={$container} onContextCreate={contextRenderer} key="d" />
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
