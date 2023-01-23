import React from "react"
import { View, ViewStyle } from "react-native"
import { colors } from "../../../theme"
// import { ViroARScene, ViroBox } from "@viro-community/react-viro"

export function ARView() {

  return (
    <View style={$container} />
    // <ViroARScene>
    //   <ViroBox position={[0, -.5, -1]}
    //       animation={{name: "rotate", run: true, loop: true}}
    //       scale={[.3, .3, .1]} materials={["grid"]} />
    // </ViroARScene>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
}
