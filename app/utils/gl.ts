import { Platform } from "react-native"
import * as FileSystem from "expo-file-system"
import { Asset } from "expo-asset"
import {
  BoxGeometry,
  BufferGeometry,
  CatmullRomCurve3,
  Group,
  Line,
  LineBasicMaterial,
  LineDashedMaterial,
  Mesh,
  MeshBasicMaterial,
  RepeatWrapping,
  Scene,
  SphereGeometry,
  Sprite,
  SpriteMaterial,
  Texture,
  Vector2,
  Vector3,
} from "three"

import { loadObjAsync, loadTextureAsync } from "expo-three"
import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { OrbitPoint } from "../services/api"
import { iconRegistry } from "../components/Icon"
import { latLonToCartesian } from "./geometry"

const ISSTexture = require("../../assets/models/iss/texture.png")
const ISSModel = require("../../assets/models/iss/model.obj")
const ISSMaterial = require("../../assets/models/iss/material.mtl")

export const GLOBE_RADIUS = 300
export const GLOBE_SEGMENTS = 300

export async function copyAssetToCacheAsync(assetModule: string | number, localFilename: string) {
  if (Platform.OS === "ios") return assetModule

  const localUri = `${FileSystem.cacheDirectory}asset_${localFilename}`
  const fileInfo = await FileSystem.getInfoAsync(localUri, { size: false })
  if (!fileInfo.exists) {
    const asset = Asset.fromModule(assetModule)
    await asset.downloadAsync()
    console.log(`copyAssetToCacheAsync ${asset.localUri} -> ${localUri}`)
    await FileSystem.copyAsync({
      from: asset.localUri,
      to: localUri,
    })
  }
  return localUri
}

export const createISSMarker = (size: number, texture: Texture) => {
  const mesh = new Sprite()
  texture.needsUpdate = true
  mesh.material = new SpriteMaterial({
    map: texture,
    color: 0xffffff,
  })

  mesh.scale.set(size, size, 1)
  return mesh
}

export const createOrbit = () => {
  const pastLine = new Line()
  pastLine.material = new LineBasicMaterial({ color: 0x00ff00, linewidth: 6 })
  const futureLine = new Line()
  futureLine.material = new LineDashedMaterial({
    color: 0xadadae,
    linewidth: 6,
    dashSize: 5,
    gapSize: 5,
  })

  return [pastLine, futureLine]
}

export const createISS3D = async () => {
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

  obj.scale.set(0.02, 0.02, 0.02)
  return obj
}

export const createCubemapSphere = async (
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

export const createSphere = async (
  radius: number,
  texture,
  name: string,
  transparent,
  depthWrite,
) => {
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

export const createMarker = (texture: Texture) => {
  const mesh = new Sprite()
  texture.needsUpdate = true
  mesh.material = new SpriteMaterial({
    map: texture,
    color: 0xffffff,
  })
  mesh.material.depthTest = false

  mesh.center = new Vector2(0.5, 0)
  mesh.scale.set(24, 24, 1)
  mesh.visible = false

  return mesh
}

export const useTrajectoryLines = (
  sceneRef: RefObject<Scene>,
  issPath: OrbitPoint[],
  segments: number,
  markerSize: number,
) => {
  const [issMarkerTexture, setIssMarkerTexture] = useState<Texture>(null)
  const pastRef = useRef<Line>(null)
  const futureRef = useRef<Line>(null)
  const issMarkerRef = useRef<Sprite>(null)
  const startPointIdxRef = useRef<number>()
  const endPointIdxRef = useRef<number>()
  const currentPointIdxRef = useRef<number>()
  const [isVisible, setIsVisible] = useState<boolean>()

  useEffect(() => {
    copyAssetToCacheAsync(iconRegistry.position as string, "position.png")
      .then((uri) => loadTextureAsync({ asset: uri }))
      .then(setIssMarkerTexture)
      .catch((e) => console.log(e))
  }, [])

  const curve = useMemo(() => {
    if (!issPath.length) return undefined
    return new CatmullRomCurve3(
      issPath.map(
        (p) => new Vector3(...latLonToCartesian([p.latitude, p.longitude], GLOBE_RADIUS + 20)),
      ),
    )
  }, [issPath])

  useEffect(() => {
    startPointIdxRef.current = undefined
    endPointIdxRef.current = undefined
    currentPointIdxRef.current = undefined
  }, [issPath])

  const curvePoints = useMemo(() => {
    if (!curve) return []
    const curveStartsAt = new Date(issPath[0].date).getTime()
    const curveEndsAt = new Date(issPath[issPath.length - 1].date).getTime()

    const points: { date: number; coords: Vector3 }[] = []
    for (let i = 0; i <= segments; ++i) {
      const u = i / segments
      const pt = curve.getPointAt(i / segments)
      const t = curve.getUtoTmapping(u, null)
      points.push({ date: curveStartsAt + t * (curveEndsAt - curveStartsAt), coords: pt })
    }

    return points
  }, [curve])

  const updateTrajectoryCurve = useCallback(() => {
    if (!curvePoints.length || !sceneRef.current || !issMarkerTexture) {
      if (futureRef.current) sceneRef.current.remove(futureRef.current)
      if (pastRef.current) sceneRef.current.remove(pastRef.current)
      if (issMarkerRef.current) sceneRef.current.remove(issMarkerRef.current)
      return
    }

    if (!futureRef.current || !pastRef.current) [pastRef.current, futureRef.current] = createOrbit()
    if (!issMarkerRef.current) issMarkerRef.current = createISSMarker(markerSize, issMarkerTexture)

    if (currentPointIdxRef.current === undefined) currentPointIdxRef.current = 0
    for (; currentPointIdxRef.current < curvePoints.length - 1; currentPointIdxRef.current += 1) {
      if (curvePoints[currentPointIdxRef.current + 1].date > new Date().getTime()) break
    }

    if (startPointIdxRef.current === undefined)
      startPointIdxRef.current = currentPointIdxRef.current
    for (; startPointIdxRef.current > 0; startPointIdxRef.current -= 1) {
      if (
        curvePoints[startPointIdxRef.current].date - curvePoints[currentPointIdxRef.current].date <
        -50 * 60 * 1000
      ) {
        break
      }
    }

    if (endPointIdxRef.current === undefined) endPointIdxRef.current = currentPointIdxRef.current
    for (; endPointIdxRef.current < curvePoints.length - 1; endPointIdxRef.current += 1) {
      if (
        curvePoints[endPointIdxRef.current].date - curvePoints[currentPointIdxRef.current].date >
        50 * 60 * 1000
      ) {
        break
      }
    }

    const curveStartsAt = new Date(issPath[0].date).getTime()
    const curveEndsAt = new Date(issPath[issPath.length - 1].date).getTime()

    const t = (Date.now() - curveStartsAt) / (curveEndsAt - curveStartsAt)
    if (t > 1) return

    let point: Vector3
    try {
      point = curve.getPoint(t)
    } catch (e) {
      console.error(e)
      return
    }

    const pastPoints = curvePoints
      .slice(startPointIdxRef.current, currentPointIdxRef.current + 1)
      .map((p) => p.coords)

    pastPoints.push(point)

    const futurePoints = curvePoints
      .slice(currentPointIdxRef.current + 1, endPointIdxRef.current + 1)
      .map((p) => p.coords)

    pastPoints.push(point)
    futurePoints.unshift(point)

    pastRef.current.geometry = new BufferGeometry().setFromPoints(pastPoints)
    futureRef.current.geometry = new BufferGeometry().setFromPoints(futurePoints)
    futureRef.current.computeLineDistances()
    issMarkerRef.current.position.set(point.x, point.y, point.z)

    if (!sceneRef.current) return
    if (!sceneRef.current.getObjectById(pastRef.current.id)) sceneRef.current?.add(pastRef.current)
    if (!sceneRef.current.getObjectById(futureRef.current.id))
      sceneRef.current?.add(futureRef.current)
    if (!sceneRef.current.getObjectById(issMarkerRef.current.id))
      sceneRef.current?.add(issMarkerRef.current)
  }, [curvePoints, sceneRef.current, issMarkerTexture])

  useEffect(() => {
    if (!curve || !isVisible) {
      if (sceneRef.current) {
        sceneRef.current.remove(futureRef.current)
        sceneRef.current.remove(pastRef.current)
        sceneRef.current.remove(issMarkerRef.current)
      }

      return undefined
    }

    updateTrajectoryCurve()

    const timeout = setInterval(updateTrajectoryCurve, 1000)
    return () => {
      clearInterval(timeout)
    }
  }, [curve, isVisible, updateTrajectoryCurve])

  return {
    curve,
    setIsVisible,
  }
}
