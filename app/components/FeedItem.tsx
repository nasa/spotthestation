import { Text, Tag } from "."
import { StyleFn, useStyles } from "../utils/useStyles"
import React from "react"
import {
  ViewStyle,
  View,
  TextStyle,
  Pressable,
  PressableProps,
  Image,
  ImageStyle,
  StyleProp,
} from "react-native"

import { typography, colors } from "../theme"

export interface FeedItemProps {
  title: string
  image: string
  subtitle?: string
  tags?: string[]
  onPress?: PressableProps["onPress"]
  imageStyle?: StyleProp<any>
}

export function FeedItem({
  title,
  image,
  subtitle,
  tags = [],
  onPress,
  imageStyle,
}: FeedItemProps) {
  const { $container, $tagsContainer, $imageContainer, $titleText, $subtitleText } =
    useStyles(styles)

  return (
    <Pressable
      accessible
      accessibilityLabel="pressable feed item"
      accessibilityHint="pressable feed item"
      accessibilityRole="button"
      style={$container}
      onPress={onPress}
    >
      <View
        accessible
        accessibilityLabel="tags"
        accessibilityHint="tags"
        accessibilityRole="text"
        style={$tagsContainer}
      >
        {tags.map((tag) => (
          <Tag key={tag} title={tag} />
        ))}
      </View>
      {image ? (
        <Image
          accessible
          accessibilityLabel="image"
          accessibilityHint="image"
          accessibilityRole="image"
          source={{ uri: image }}
          style={[$imageContainer as ImageStyle, imageStyle]}
          resizeMode="cover"
        />
      ) : (
        <View style={$imageContainer} />
      )}
      <Text
        accessible
        accessibilityLabel="title"
        accessibilityHint={title}
        accessibilityRole="text"
        text={title}
        style={$titleText}
      />
      {Boolean(subtitle) && <Text text={subtitle} style={$subtitleText} />}
    </Pressable>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $container: ViewStyle = {
    position: "relative",
    width: "47%",
    height: "auto",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: scale(16),
  }

  const $tagsContainer: ViewStyle = {
    position: "absolute",
    top: scale(36),
    left: scale(18),
    flexDirection: "row",
    zIndex: 2,
  }

  const $imageContainer: ImageStyle = {
    width: "100%",
    aspectRatio: 0.7,
    borderRadius: scale(12),
    marginBottom: scale(12),
  }

  const $titleText: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[21],
    color: colors.palette.neutral250,
    paddingBottom: scale(5),
  }

  const $subtitleText: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[14],
    lineHeight: lineHeights[17],
    color: colors.palette.neutral450,
  }

  return { $container, $tagsContainer, $imageContainer, $titleText, $subtitleText }
}
