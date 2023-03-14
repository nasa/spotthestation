import React from "react"
import { View, ViewStyle, StyleSheet } from "react-native"
import { Camera, useCameraDevices } from "react-native-vision-camera"
import { colors } from "../../../theme"
import { Compass } from "./Compass"

export function ARView({ isFullScreen }) {
  const devices = useCameraDevices()
  const device = devices.back

  if (device == null) return null

  return (
    <View style={$container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
      <Compass issPosition={0} isFullScreen={isFullScreen} />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  alignItems: 'center'
}
