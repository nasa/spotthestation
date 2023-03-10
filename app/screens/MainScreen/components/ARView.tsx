import React from "react"
import { View, ViewStyle } from "react-native"
import { colors } from "../../../theme"
import { Compass } from "./Compass"

export function ARView({ isFullScreen }) {

  return (
    <View style={$container}>
      <Compass issPosition={0} isFullScreen={isFullScreen} />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  alignItems: 'center'
}
