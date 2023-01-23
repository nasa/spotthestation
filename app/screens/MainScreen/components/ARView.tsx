import React from "react"
import { View, ViewStyle } from "react-native"
import { colors } from "../../../theme"

export function ARView() {

  return (
    <View style={$container} />
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
}
