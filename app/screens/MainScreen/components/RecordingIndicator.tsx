import React from "react"
import { ViewStyle, TextStyle, View, Text } from "react-native"
import { colors } from "../../../theme"

export const RecordingIndicator = ({ recordedSeconds }) => {
  const hours = Math.floor(recordedSeconds / 3600)
  const minutes = Math.floor( (recordedSeconds - hours * 3600) / 60)
  const seconds = recordedSeconds - hours * 3600 - minutes * 60

  return (
    <View style={$container}>
      <Text style={$text}>
        {hours < 10 ? `0${hours}` : hours}
        :
        {minutes < 10 ? `0${minutes}` : minutes}
        :
        {seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    </View>
  )
}

const $container: ViewStyle = {
  marginTop: 20,
  backgroundColor: colors.palette.nasaRed,
  paddingTop: 5,
  paddingBottom: 3,
  borderRadius: 4,
  width: 80,
}

const $text: TextStyle = {
  fontSize: 16,
  lineHeight: 16,
  textAlign: 'center',
  color: colors.palette.neutral250,
}
