import { StyleFn, useStyles } from "../../../utils/useStyles"
import React from "react"
import {
  ViewStyle,
  View,
  TextStyle,
  Image,
  ImageStyle,
  Text as RNText,
  Pressable,
} from "react-native"
import { Text } from "../../../components"
import { typography } from "../../../theme"
import { colors } from "../../../theme/colors"

const streamId = "P9C25Un7xaM"

export function Live({ onLink }) {
  const { $contentContainer, $title, $description, $text, $image, $flex, $link } = useStyles(styles)

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
        <Text style={$text} tx="resources.liveDescription" />{" "}
        <Text style={[$text, $link]} tx="resources.liveLink" onPress={onLink} />
        <Text style={$text}>.</Text>
      </RNText>

      <View style={$flex} />

      <Pressable onPress={onLink}>
        <Image
          style={$image as ImageStyle}
          source={{ uri: `https://img.youtube.com/vi/${streamId}/maxresdefault.jpg` }}
        />
      </Pressable>
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

  const $link: TextStyle = {
    textDecorationLine: "underline",
  }

  const $image: ViewStyle = {
    width: "100%",
    aspectRatio: 16 / 9,
  }

  const $flex: ViewStyle = {
    flex: 1,
  }

  return {
    $contentContainer,
    $title,
    $description,
    $text,
    $image,
    $flex,
    $link,
  }
}
