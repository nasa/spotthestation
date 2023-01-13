import React, { useRef } from "react"
import { ViewStyle } from "react-native"
import { ExpoWebGLRenderingContext, GLView } from "expo-gl"
import { Renderer, loadTextureAsync } from "expo-three"
import {
  Sprite, SpriteMaterial, Texture, Camera, AmbientLight, 
  Line, LineBasicMaterial, Mesh, MeshBasicMaterial, 
  PerspectiveCamera, Scene, SphereGeometry, TorusGeometry, WebGLRenderer 
} from "three"
import { colors } from "../../../theme"
import { GLOBE_RADIUS, GLOBE_SEGMENTS } from "./constants"
import { coordinatesToPosition } from "./helpers"
import ControlsView from "./ControlsView"

export interface GlobeProps {
  marker?: number[]
  zoom?: number
  path?: any
  globeRef?: any
}

export function Globe({ marker, path = true, zoom, globeRef }: GlobeProps ) {
  const [camera, setCamera] = React.useState<Camera | null>(null)

  const createMarker = async () => {
    const mesh = new Sprite()
    const texture: Texture = await loadTextureAsync({
      asset: require("../../../../assets/icons/fi_map-pin.png"),
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

  const createSphere = async (radius: number, texture, name, transparent) => {
    const sphere = new Mesh()
    sphere.geometry = new SphereGeometry(radius, GLOBE_SEGMENTS, GLOBE_SEGMENTS)
    sphere.material = new MeshBasicMaterial({
      map: await loadTextureAsync({
        asset: texture,
      }),
      transparent
    })
    sphere.name = name

    return sphere
  }

  const createCircle = () => {
    // const curve = new EllipseCurve(
    //   0,  0,            // ax, aY
    //   311, 311,           // xRadius, yRadius
    //   0,  2 * Math.PI,  // aStartAngle, aEndAngle
    //   false,            // aClockwise
    //   0                 // aRotation
    // )
    
    // const points = curve.getPoints( 50 )
    // const geometry = new BufferGeometry().setFromPoints( points )
    
    // const material = new LineDashedMaterial( {
    //     color: 0xffffff,
    //     linewidth: 1,
    //     scale: 1,
    //     dashSize: 10,
    //     gapSize: 60,
    //   } )
    
    // Create the final object to add to the scene
    // const ellipse = new Line( geometry, material )

    // scene.add(ellipse)

    // const material = new LineDashedMaterial( {
    //   color: 0xffffff,
    //   linewidth: 1,
    //   // scale: 1,
    //   dashSize: 10,
    //   gapSize: 60,
    // } )

    // geometry = new CircleGeometry( rad+delta, segs ),    
          // geometry = new CircleGeometry( rad+delta, segs ),    
    // geometry = new CircleGeometry( rad+delta, segs ),    
    // geometry.vertices.shift();
    // circle = new Line( geometry, material );

    const circle = new Line()
    // circle.material = material
    circle.material = new LineBasicMaterial( { color: 0x00ff00 } )
    circle.geometry = new TorusGeometry(311, 2, 100, 100 )
    
    circle.rotation.y = Math.PI/3.5

    // const curve = new SplineCurve([
    //   new Vector3(-300, 0, 0),
    //   new Vector3(-150, 150, 0),
    //   new Vector3(0, 0, 0),
    //   new Vector3(150, -150, 0),
    //   new Vector3(300, 0, 0),
    // ])

    // const curve2 = new SplineCurve( [
    //   new Vector3(0, 300, 300),
    //   new Vector3(-300, -300, 0),
    //   new Vector3(0, 0, 300),
    // ] )
    
    // const points = curve.getPoints( 300 )
    // const geometry = new BufferGeometry().setFromPoints( points )

    // const points2 = curve2.getPoints( 300 )
    // const geometry2 = new BufferGeometry().setFromPoints( points2 )
    
    // const material = new LineBasicMaterial( { color: 0xff0000 } )
    
    // Create the final object to add to the scene
    // const splineObject = new Line( geometry, material )
    // const splineObject2 = new Line( geometry2, material )

    // scene.add( splineObject )
    // scene.add( splineObject2 )


    // const curve = new CubicBezierCurve3(
    //   new Vector3(-300, 0, 0),
    //   new Vector3(-200, 350, 0),
    //   new Vector3(200, 350, 0),
    //   new Vector3(300, 0, 0),
    // )
    
    // const points = curve.getPoints( 600 )
    // const geometry = new BufferGeometry().setFromPoints( points )
    
    // const material =new LineDashedMaterial( {
    //       color: 0x00ff00,
    //       linewidth: 5,
    //       scale: 1,
    //       dashSize: 10,
    //       gapSize: 60,
    //     } )
    
    // Create the final object to add to the scene
    // const curveObject = new Line( geometry, material )

    // const curve2 = new CubicBezierCurve3(
    //   new Vector3(-300, 0, 0),
    //   new Vector3(-200, -350, 0),
    //   new Vector3(200, -350, 0),
    //   new Vector3(300, 0, 0),
    // )
    
    // const points2 = curve2.getPoints( 600 )
    // const geometry2 = new BufferGeometry().setFromPoints( points2 )
    
    // const material2 =new LineDashedMaterial( {
    //       color: 0x00ff00,
    //       linewidth: 5,
    //       scale: 1,
    //       dashSize: 10,
    //       gapSize: 60,
    //     } )
    
    // Create the final object to add to the scene
    // const curveObject2 = new Line( geometry2, material2 )

    return circle
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
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

    const globe = await createSphere(GLOBE_RADIUS, require("../../../../assets/images/globe-textures-night.jpeg"), "earth", false)
    const clouds = await createSphere(GLOBE_RADIUS + 10, require("../../../../assets/images/clouds.png"), "clouds", true)

    if (marker) {
      const point = await createMarker()
      scene.add(point)
    }

    // const directionalLight = new DirectionalLight(0xffffff)
    // directionalLight.position.set(400, 400, 400)
    // scene.add(directionalLight)

    // const directionalLight2 = new DirectionalLight(0xffffff)
    // directionalLight2.position.set(-400, -400, -400)
    // scene.add(directionalLight2)

    if (path) {
      const stationPath = createCircle()
      scene.add(stationPath)
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
          ref={globeRef}
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
