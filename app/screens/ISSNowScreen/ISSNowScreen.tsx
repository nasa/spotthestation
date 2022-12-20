import { observer } from "mobx-react-lite"
import React from "react"
import { ViewStyle } from "react-native"
import * as THREE from "three"
import { ExpoWebGLRenderingContext, GLView } from "expo-gl"
import ExpoTHREE from "expo-three"
import { Screen } from "../../components"
import { colors } from "../../theme"
// import { Details } from "./components/Details"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"

export const ISSNowScreen = observer(function ISSNowScreen() {
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")

  return (
    <Screen preset="fixed" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      <>
        <GLView
          style={$container}
          onContextCreate={async (gl: ExpoWebGLRenderingContext) => {
            const scene = new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(
              75,
              gl.drawingBufferWidth / gl.drawingBufferHeight,
              0.01,
              1000
            )

            const ambient = new THREE.AmbientLight('white')
            ambient.intensity = 666

            camera.position.set(0, 0, 850)

            gl.canvas = { width: gl.drawingBufferWidth, height: gl.drawingBufferHeight }
            const renderer = new ExpoTHREE.Renderer({ gl })
            renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

            const globe = new THREE.Mesh()
            globe.geometry = new THREE.SphereGeometry(300, 100, 100)
            globe.material = new THREE.MeshBasicMaterial({
              map: await ExpoTHREE.loadTextureAsync({
                asset: require("../../../assets/images/globe-textures.jpeg"),
              })
            })
            globe.name = 'earth'

            const clouds = new THREE.Mesh()
            clouds.geometry = new THREE.SphereGeometry(310, 100, 100)
            clouds.material = new THREE.MeshBasicMaterial({
              map: await ExpoTHREE.loadTextureAsync({
                asset: require("../../../assets/images/clouds.png"),
              }),
              transparent: true,
            })
            clouds.name = 'clouds'


            const circle = new THREE.Mesh()
            circle.material = new THREE.LineBasicMaterial( { color: 0x00ff00 } ),
            circle.geometry = new THREE.TorusGeometry( 315, 1, 100, 100 ),
            // circle.geometry.vertices.shift()
            
            circle.rotation.y = Math.PI/1.5
            scene.add( circle )

            // camera.add(ambient)
            scene.add(globe)
            scene.add(clouds)

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
        {/* <Details /> */}
      </>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  justifyContent: "space-between"
}
