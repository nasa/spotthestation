import React, { useRef, useState } from "react"
import { PanResponder, View, ViewStyle } from "react-native"
import { ExpoWebGLRenderingContext, GLView } from "expo-gl"
import { THREE, Renderer, loadTextureAsync } from "expo-three"
import { colors } from "../../../theme"
import { GLOBE_RADIUS, GLOBE_SEGMENTS } from "./constants"
import { coordinatesToPosition } from "./helpers"

global.THREE = global.THREE || THREE

export function Globe() {
  const [rotation, setRotation] = useState()

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => true,
      onPanResponderMove: (e,n) => {console.log(e,n)},
      onPanResponderRelease: () => {
        console.log("e,n")
      }
    })
  ).current


  return (
    <>
      {/* <View style={$pan} {...panResponder.panHandlers} >
        
      </View> */}
      <GLView
        style={$container}
        onContextCreate={async (gl: ExpoWebGLRenderingContext) => {
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

          const globe = new THREE.Mesh()
          globe.geometry = new THREE.SphereGeometry(GLOBE_RADIUS, GLOBE_SEGMENTS, GLOBE_SEGMENTS)
          globe.material = new THREE.MeshStandardMaterial({
            map: await loadTextureAsync({
              asset: require("../../../../assets/images/globe-textures-night.jpeg"),
            })
          })
          globe.name = 'earth'

          const clouds = new THREE.Mesh()
          clouds.geometry = new THREE.SphereGeometry(GLOBE_RADIUS + 10, GLOBE_SEGMENTS, GLOBE_SEGMENTS)
          clouds.material = new THREE.MeshStandardMaterial({
            map: await loadTextureAsync({
              asset: require("../../../../assets/images/clouds.png"),
            }),
            transparent: true,
          })
          clouds.name = 'clouds'


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
            [27.994402, -81.760254],
            GLOBE_RADIUS + 20
          )
          
          mesh.scale.set(24,24,1)
          mesh.position.set(...position)


          const directionalLight = new THREE.DirectionalLight(0xffffff)
          directionalLight.position.set(400, 400, 400)
          scene.add(directionalLight)

          scene.rotation.x = 0.3

          // const material = new THREE.LineDashedMaterial( {
          //   color: 0xffffff,
          //   linewidth: 1,
          //   // scale: 1,
          //   dashSize: 10,
          //   gapSize: 60,
          // } )

          // geometry = new THREE.CircleGeometry( rad+delta, segs ),    
          // geometry.vertices.shift();
          // circle = new THREE.Line( geometry, material );

          // const circle = new THREE.Line()
          // circle.material = material
          // circle.material = new THREE.LineBasicMaterial( { color: 0x00ff00 } ),
          // circle.geometry = new THREE.TorusGeometry(311, 2, 100, 100 )
          
          
          // circle.rotation.y = Math.PI/1.5

          // const curve = new THREE.SplineCurve( [
          //   new THREE.Vector3(300, 0, 0),
          //   // new THREE.Vector3(150, 150, 0),
          //   new THREE.Vector3(0, 300, 0),
          //   // new THREE.Vector3(-150, -150, 0),
          //   new THREE.Vector3(-300, 0, 0),
          // ] )

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

          camera.add(ambient)
          scene.add(globe)
          scene.add(mesh)
          scene.add(clouds)

          // globe.rotation.x += 0.5

          function update() {
            ['x', 'y', 'z'].forEach(axis => {
              clouds.rotation[axis] += Math.random() / 10000
            })
          }

          const render = () => {
            timeout = requestAnimationFrame(render)
            update()
            renderer.render(scene, camera)

            gl.endFrameEXP()
          }
          render()
        }}
        key="d"
      />
    </>
    
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  justifyContent: "space-between"
}

const $pan: ViewStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: colors.background,
}
