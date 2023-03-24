import React from "react"
import { Platform, ViewStyle } from "react-native"
import { ExpoWebGLRenderingContext, GLView } from "expo-gl"
import { Renderer, loadTextureAsync } from "expo-three"
import * as FileSystem from "expo-file-system"
import { Asset } from "expo-asset"
import {
  Sprite, SpriteMaterial, Texture, Camera, AmbientLight, Vector3,
  Line, LineBasicMaterial, Mesh, MeshBasicMaterial, CatmullRomCurve3,
  BufferGeometry,
  PerspectiveCamera, Scene, SphereGeometry, WebGLRenderer, LineDashedMaterial,
} from "three"
import { colors } from "../../../theme"
import { GLOBE_RADIUS, GLOBE_SEGMENTS } from "./constants"
import { coordinatesToPosition } from "./helpers"
import { iconRegistry } from "../../../components/Icon"

import ControlsView from "./ControlsView"

const CloudsTexture = require("../../../../assets/images/clouds.png")
const GlobeTexturesNight = require("../../../../assets/images/globe-textures-night.jpg")


const dstSqr = (pt1: [number, number], pt2: [number, number]) => {
  return (pt1[0] - pt2[0])*(pt1[0] - pt2[0]) + (pt1[1] - pt2[1])*(pt1[1] - pt2[1])
}

const getCrossProduct = (pt1: [number, number], pt2: [number, number]) => {
  return pt2[0] * pt1[1] - pt2[1] * pt1[0]
}

async function copyAssetToCacheAsync(assetModule: string | number, localFilename: string) {
  if (Platform.OS === 'ios') return assetModule

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

export interface GlobeProps {
  marker?: number[]
  zoom?: number
  issMarkerPosition?: [number, number]
  pastIssPathCoords?: [number, number][]
  futureIssPathCoords?: [number, number][]
}

export function Globe({ marker, zoom, pastIssPathCoords = [], futureIssPathCoords = [], issMarkerPosition }: GlobeProps ) {
  const [camera, setCamera] = React.useState<Camera | null>(null)

  const createMarker = async () => {
    const uri = await copyAssetToCacheAsync(iconRegistry.fiMapPin as string,'fiMapPin.png')
    const mesh = new Sprite()
    const texture: Texture = await loadTextureAsync({
      asset: uri,
    })
    texture.needsUpdate = true
    mesh.material = new SpriteMaterial({
      map: texture,
      color: 0xffffff
    })
    const [x, y, z] = coordinatesToPosition(
      marker,
      GLOBE_RADIUS + 20
    )
    
    mesh.scale.set(24,24,1)
    mesh.position.set(x, y, z)

    return mesh
  }

  const createISSMarker = async (position: [number, number]) => {
    const uri = await copyAssetToCacheAsync(iconRegistry.position as string,'position.png')
    const mesh = new Sprite()
    const texture: Texture = await loadTextureAsync({
      asset: uri,
    })
    texture.needsUpdate = true
    mesh.material = new SpriteMaterial({
      map: texture,
      color: 0xffffff
    })

    const [x,y,z] = coordinatesToPosition(
      position,
      GLOBE_RADIUS + 20
    )

    mesh.scale.set(32,32,1)
    mesh.position.set(x, y, z)

    return mesh
  }

  const createSphere = async (radius: number, texture, name: string, transparent) => {
    const sphere = new Mesh()
    sphere.geometry = new SphereGeometry(radius, GLOBE_SEGMENTS, GLOBE_SEGMENTS)
    const uri = await copyAssetToCacheAsync(texture as string,`${name}.png`)

    const tx = await loadTextureAsync({
      asset: uri,
    })

    if (tx) {
      sphere.material = new MeshBasicMaterial({
        map: tx,
        transparent
      })
    } else {
      sphere.material = new MeshBasicMaterial({ color: 0xffffff, transparent })
    }
    
    sphere.name = name

    return sphere
  }

  const createOrbit = () => {
    const pastCurve = new CatmullRomCurve3(
      pastIssPathCoords.map((coords) => {
        return new Vector3(...coordinatesToPosition(
          coords,
          GLOBE_RADIUS + 20
        ))
      })
    )

    const futureCurve = new CatmullRomCurve3(
      futureIssPathCoords.map((coords) => {
        return new Vector3(...coordinatesToPosition(
          coords,
          GLOBE_RADIUS + 20
        ))
      })
    )
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
    pastLine.material = new LineBasicMaterial( { color: 0x00ff00, linewidth: 6 } )
    pastLine.geometry = new BufferGeometry().setFromPoints(pastCurve.getPoints(50))

    const futureLine = new Line()
    futureLine.material = new LineDashedMaterial( { color: 0xADADAE, linewidth: 6, dashSize: 5, gapSize: 5 } )
    futureLine.geometry = new BufferGeometry().setFromPoints(futureCurve.getPoints(50))

    futureLine.computeLineDistances()

    return [pastLine, futureLine]
  }
  
  const contextRenderer = async (gl: ExpoWebGLRenderingContext) => {
    const scene = new Scene()
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      1,
      1000
    )

    const ambient = new AmbientLight('white')
    ambient.intensity = 666

    camera.position.set(0, 0, zoom || 850)

    setCamera(camera)

    const renderer: WebGLRenderer = new Renderer({ gl })
    renderer.debug.checkShaderErrors = false
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

    const clouds = await createSphere(GLOBE_RADIUS + 10, CloudsTexture, "clouds", true)
    const globe = await createSphere(GLOBE_RADIUS, GlobeTexturesNight, "earth", false)

    if (marker) {
      const point = await createMarker()
      scene.add(point)
    }

    if (pastIssPathCoords.length > 0 && futureIssPathCoords.length > 0 && issMarkerPosition) {
      scene.add(...createOrbit())
    }

    if (issMarkerPosition) {
      const marker = await createISSMarker(issMarkerPosition)
      scene.add(marker)
    }

    camera.add(ambient)
    scene.add(globe)
    scene.add(clouds)

    function update() {
      ['x', 'y', 'z'].forEach(axis => {
        clouds.rotation[axis] += Math.random() / 10000
      })
    }

    const render = () => {
      requestAnimationFrame(render)
      update()
      renderer.render(scene, camera)

      gl.endFrameEXP()
    }
    render()
  }

  return (
    <>
      <ControlsView style={$pan} camera={camera}>
        <GLView
          style={$container}
          onContextCreate={contextRenderer}
          key="d"
        />
      </ControlsView>
    </>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
}

const $pan: ViewStyle = {
  flex: 1,
}
