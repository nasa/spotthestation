import { observer } from "mobx-react-lite"
import React from "react"
import { View, ViewStyle } from "react-native"
import { Scene, PerspectiveCamera, SphereGeometry, MeshNormalMaterial, Mesh } from "three"
import { ExpoWebGLRenderingContext, GLView } from "expo-gl"
import { Renderer } from "expo-three"
import { Screen, Text } from "../../components"
import { colors, spacing } from "../../theme"
import { Details } from "./components/Details"

export const ISSNowScreen = observer(function ISSNowScreen() {
  return (
    <Screen preset="fixed" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <>
        <View style={$topContainer}>
          <Text
            testID="welcome-heading"
            text="Hello, World!"
            preset="heading"
          />
        </View>
        <GLView
          style={{ flex: 1, backgroundColor: 'black'}}
          onContextCreate={(gl: ExpoWebGLRenderingContext) => {
            const scene = new Scene()
            const camera = new PerspectiveCamera(
              75,
              gl.drawingBufferWidth / gl.drawingBufferHeight,
              0.1,
              1000
            )
            gl.canvas = { width: gl.drawingBufferWidth, height: gl.drawingBufferHeight }
            const renderer = new Renderer({ gl })
            renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)

            const globe = new Mesh()
            globe.geometry = new SphereGeometry(300, 100, 100)
            globe.material = new MeshNormalMaterial({ wireframe: true })
            globe.name = 'earth'

            scene.add(globe)

            camera.position.y = 0
            camera.position.x = 0
            camera.position.z = 600

            const render = () => {
              requestAnimationFrame(render)
              renderer.render(scene, camera)
              gl.endFrameEXP()
            }

            render()
          }}
        />
        <Details />
      </>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  justifyContent: "space-between"
}

const $topContainer: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  paddingHorizontal: spacing.large,
}
