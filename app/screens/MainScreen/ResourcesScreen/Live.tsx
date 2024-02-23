import { StyleFn, useStyles } from "../../../utils/useStyles"
import React, { useState } from "react"
import YoutubePlayer from "react-native-youtube-iframe"
import { ViewStyle, View, TextStyle, Text as RNText } from "react-native"
import { Text } from "../../../components"
import { typography } from "../../../theme"
import { colors } from "../../../theme/colors"

const streamId = "P9C25Un7xaM"

export function Live() {
  const { $contentContainer, $title, $description, $text, $flex } = useStyles(styles)
  const [videoHeight, setVideoHeight] = useState(0)

  return (
    <View style={$contentContainer}>
      <Text
        accessible
        accessibilityLabel="modal title"
        accessibilityHint="modal title"
        accessibilityRole="text"
        tx="resources.liveTitle"
        style={$title}
      />

      <RNText
        accessible
        accessibilityLabel="modal text"
        accessibilityHint="modal text"
        accessibilityRole="text"
        style={$description}
      >
        <Text style={$text} tx="resources.liveDescription" />
      </RNText>

      <View style={$flex} />

      <View
        onLayout={(e) => {
          setVideoHeight((e.nativeEvent.layout.width * 9) / 16)
        }}
      >
        {videoHeight > 0 && <YoutubePlayer height={videoHeight} videoId={streamId} />}
      </View>
    </View>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $contentContainer: ViewStyle = {
    width: "100%",
    paddingHorizontal: scale(18),
    paddingBottom: scale(24),
    minHeight: "100%",
  }

  const $title: TextStyle = {
    color: colors.palette.neutral250,
    width: "100%",
    fontSize: fontSizes[32],
    fontFamily: typography.primary.normal,
    lineHeight: lineHeights[44],
    paddingBottom: scale(24),
  }

  const $description: TextStyle = {
    paddingBottom: scale(36),
  }

  const $text: TextStyle = {
    color: colors.palette.neutral250,
    fontSize: fontSizes[20],
    lineHeight: lineHeights[28],
  }

  const $flex: ViewStyle = {
    flex: 1,
  }

  return {
    $contentContainer,
    $title,
    $description,
    $text,
    $flex,
  }
}
