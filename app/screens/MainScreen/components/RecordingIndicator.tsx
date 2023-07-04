import React from "react"
import { ViewStyle, TextStyle, View, Text } from "react-native"
import { colors, fontSizes, lineHeights, scale } from "../../../theme"

export const RecordingIndicator = ({ recordedSeconds }) => {
  const hours = Math.floor(recordedSeconds / 3600)
  const minutes = Math.floor((recordedSeconds - hours * 3600) / 60)
  const seconds = recordedSeconds - hours * 3600 - minutes * 60

  return (
    <View style={$container}>
      <Text style={$text}>
        {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    </View>
  )
}

const $container: ViewStyle = {
  marginTop: scale(20),
  backgroundColor: colors.palette.nasaRed,
  paddingTop: scale(5),
  paddingBottom: scale(3),
  paddingHorizontal: scale(5),
  borderRadius: scale(4),
}

const $text: TextStyle = {
  fontSize: fontSizes[16],
  lineHeight: lineHeights[16],
  textAlign: "center",
  color: colors.palette.neutral250,
}
