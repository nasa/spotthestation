import React, { useCallback, useRef } from "react"
import { PanResponder, PanResponderInstance, View, ViewStyle } from "react-native"
import { ExpoWebGLRenderingContext, GLView } from "expo-gl"
import { THREE, Renderer, loadTextureAsync } from "expo-three"
import { colors } from "../../../theme"
import { GLOBE_RADIUS, GLOBE_SEGMENTS } from "./constants"
import { coordinatesToPosition } from "./helpers"
import { delay } from "../../../utils/delay"

// global.THREE = global.THREE || THREE

enum SwipeDirection {
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right',
}

export interface GlobeProps {
  marker?: number[]
  path?: any
}

export function Globe({ marker, path }: GlobeProps ) {
  const start = useRef({ x: 0, y: 0 })
  const direction = useRef<SwipeDirection[] | []>([])

  const handleMove = useCallback((_, state) => {
    const { moveX, moveY } = state

    const vertical = () => {
      if (start.current.x - 20 > moveX) {
        direction.current = [SwipeDirection.left]
        // start.current = { x: moveX, y: start.current.y }
      }
      if (start.current.x + 20 < moveX) {
        direction.current = [SwipeDirection.right]
        // start.current = { x: moveX, y: start.current.y }
      }
    }

    const horizontal = () => {
      if(start.current.y - 20 > moveY) {
        direction.current = [SwipeDirection.down]
        // start.current = { x: start.current.x, y: moveY }
      } 
      if(start.current.y + 20 < moveY) {
        direction.current = [SwipeDirection.up]
        // start.current = { x: start.current.x, y: moveY }
      }
    }

    vertical()
    horizontal()
  }, [start, direction])

  const createMarker = async () => {
    const mesh = new THREE.Sprite()
    const texture = await loadTextureAsync({
      asset: require("../../../../assets/icons/fi_map-pin.png"),
    })
    texture.needsUpdate = true
    mesh.material = new THREE.SpriteMaterial({
      map: texture,
      color: 0xffffff
    })
    const position = coordinatesToPosition(
      marker,
      GLOBE_RADIUS + 20
    )
    
    mesh.scale.set(24,24,1)
    mesh.position.set(...position)

    return mesh
  }

  const panResponder: PanResponderInstance = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: (event) => {
        start.current = { x: event.nativeEvent.pageX, y: event.nativeEvent.pageY }
        return true
      },
      onPanResponderMove: handleMove,
      onPanResponderRelease: async () => { 
        await delay(500) 
        direction.current = [] 
      },
    })
  ).current

  const createSphere = async (radius, texture, name, transparent) => {
    const sphere = new THREE.Mesh()
    sphere.geometry = new THREE.SphereGeometry(radius, GLOBE_SEGMENTS, GLOBE_SEGMENTS)
    sphere.material = new THREE.MeshBasicMaterial({
      map: await loadTextureAsync({
        asset: texture,
      }),
      transparent
    })
    sphere.name = name

    return sphere
  }

  const createCircle = () => {
    // const curve = new THREE.EllipseCurve(
    //   0,  0,            // ax, aY
    //   311, 311,           // xRadius, yRadius
    //   0,  2 * Math.PI,  // aStartAngle, aEndAngle
    //   false,            // aClockwise
    //   0                 // aRotation
    // )
    
    // const points = curve.getPoints( 50 )
    // const geometry = new THREE.BufferGeometry().setFromPoints( points )
    
    // const material = new THREE.LineDashedMaterial( {
    //     color: 0xffffff,
    //     linewidth: 1,
    //     scale: 1,
    //     dashSize: 10,
    //     gapSize: 60,
    //   } )
    
    // Create the final object to add to the scene
    // const ellipse = new THREE.Line( geometry, material )

    // scene.add(ellipse)

    const material = new THREE.LineDashedMaterial( {
      color: 0xffffff,
      linewidth: 1,
      // scale: 1,
      dashSize: 10,
      gapSize: 60,
    } )

    // geometry = new THREE.CircleGeometry( rad+delta, segs ),    
          // geometry = new THREE.CircleGeometry( rad+delta, segs ),    
    // geometry = new THREE.CircleGeometry( rad+delta, segs ),    
    // geometry.vertices.shift();
    // circle = new THREE.Line( geometry, material );

    const circle = new THREE.Line()
    circle.material = material
    circle.material = new THREE.LineBasicMaterial( { color: 0x00ff00 } ),
    circle.geometry = new THREE.TorusGeometry(311, 2, 100, 100 )
    
    circle.rotation.y = Math.PI/3.5

    // const curve = new THREE.SplineCurve([
    //   new THREE.Vector3(-300, 0, 0),
    //   new THREE.Vector3(-150, 150, 0),
    //   new THREE.Vector3(0, 0, 0),
    //   new THREE.Vector3(150, -150, 0),
    //   new THREE.Vector3(300, 0, 0),
    // ])

    // const curve2 = new THREE.SplineCurve( [
    //   new THREE.Vector3(0, 300, 300),
    //   new THREE.Vector3(-300, -300, 0),
    //   new THREE.Vector3(0, 0, 300),
    // ] )
    
    // const points = curve.getPoints( 300 )
    // const geometry = new THREE.BufferGeometry().setFromPoints( points )

    // const points2 = curve2.getPoints( 300 )
    // const geometry2 = new THREE.BufferGeometry().setFromPoints( points2 )
    
    // const material = new THREE.LineBasicMaterial( { color: 0xff0000 } )
    
    // Create the final object to add to the scene
    // const splineObject = new THREE.Line( geometry, material )
    // const splineObject2 = new THREE.Line( geometry2, material )

    // scene.add( splineObject )
    // scene.add( splineObject2 )


    // const curve = new THREE.CubicBezierCurve3(
    //   new THREE.Vector3(-300, 0, 0),
    //   new THREE.Vector3(-200, 350, 0),
    //   new THREE.Vector3(200, 350, 0),
    //   new THREE.Vector3(300, 0, 0),
    // )
    
    // const points = curve.getPoints( 600 )
    // const geometry = new THREE.BufferGeometry().setFromPoints( points )
    
    // const material =new THREE.LineDashedMaterial( {
    //       color: 0x00ff00,
    //       linewidth: 5,
    //       scale: 1,
    //       dashSize: 10,
    //       gapSize: 60,
    //     } )
    
    // Create the final object to add to the scene
    // const curveObject = new THREE.Line( geometry, material )

    // const curve2 = new THREE.CubicBezierCurve3(
    //   new THREE.Vector3(-300, 0, 0),
    //   new THREE.Vector3(-200, -350, 0),
    //   new THREE.Vector3(200, -350, 0),
    //   new THREE.Vector3(300, 0, 0),
    // )
    
    // const points2 = curve2.getPoints( 600 )
    // const geometry2 = new THREE.BufferGeometry().setFromPoints( points2 )
    
    // const material2 =new THREE.LineDashedMaterial( {
    //       color: 0x00ff00,
    //       linewidth: 5,
    //       scale: 1,
    //       dashSize: 10,
    //       gapSize: 60,
    //     } )
    
    // Create the final object to add to the scene
    // const curveObject2 = new THREE.Line( geometry2, material2 )

    return circle
  }
  
  const contextRenderer = useCallback(async (gl: ExpoWebGLRenderingContext) => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      1,
      1000
    )

    const ambient = new THREE.AmbientLight('white')
    ambient.intensity = 666

    camera.position.set(0, 0, 850)

    gl.canvas = { width: gl.drawingBufferWidth, height: gl.drawingBufferHeight }
    const renderer = new Renderer({ gl })
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

    const globe = await createSphere(GLOBE_RADIUS, require("../../../../assets/images/globe-textures-night.jpeg"), "earth", false)
    const clouds = await createSphere(GLOBE_RADIUS + 10, require("../../../../assets/images/clouds.png"), "clouds", true)

    if (marker) {
      const point = await createMarker()
      scene.add(point)
    }

    // const directionalLight = new THREE.DirectionalLight(0xffffff)
    // directionalLight.position.set(400, 400, 400)
    // scene.add(directionalLight)

    // const directionalLight2 = new THREE.DirectionalLight(0xffffff)
    // directionalLight2.position.set(-400, -400, -400)
    // scene.add(directionalLight2)

    // if (path) {
      const stationPath = createCircle()
      scene.add(stationPath)
    // }

    camera.add(ambient)
    scene.add(globe)
    scene.add(clouds)

    function update() {
      ['x', 'y', 'z'].forEach(axis => {
        clouds.rotation[axis] += Math.random() / 10000
      })

      if (direction.current.includes(SwipeDirection.up as never)) scene.rotation.x += 0.023
      if (direction.current.includes(SwipeDirection.down as never)) scene.rotation.x -= 0.023
      if (direction.current.includes(SwipeDirection.left as never)) scene.rotation.y -= 0.023
      if (direction.current.includes(SwipeDirection.right as never)) scene.rotation.y += 0.023
    }

    const render = () => {
      requestAnimationFrame(render)
      update()
      renderer.render(scene, camera)

      gl.endFrameEXP()
    }
    render()
  }, [direction])
  
  return (
    <>
      <View style={$pan} {...panResponder.panHandlers} >
        <GLView
          style={$container}
          onContextCreate={contextRenderer}
          key="d"
        />
      </View>
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
