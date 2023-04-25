import React from "react"
import { ViewStyle, View, TextStyle, Pressable, PressableProps, Image, ImageStyle } from "react-native"
import { Text } from "../../../components"
import { typography, colors, fontSizes, lineHeights, scale } from "../../../theme"
import { Tag } from "./Tag"

export interface FeedSearchResultItemProps {
  title: string
  image: string
  type: string
  tags?: string[]
  onPress?: PressableProps["onPress"]
}

export function FeedSearchResultItem({ title, image, type, tags = [], onPress }: FeedSearchResultItemProps) {
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
        {tags.map(tag => <Tag key={tag} title={tag} />)}
      </View>
      <Image
        accessible
        accessibilityLabel="image"
        accessibilityHint="image"
        accessibilityRole="image" 
        source={{ uri: image }} 
        style={$imageContainer} 
        resizeMode="cover" 
      />
      <Text 
        accessible
        accessibilityLabel="type"
        accessibilityHint={type}
        accessibilityRole="text"
        text={type} 
        style={$typeText}
      />
      <Text 
        accessible
        accessibilityLabel="title"
        accessibilityHint={title}
        accessibilityRole="text"
        text={title} 
        style={$titleText} 
      />
    </Pressable>
  )
}

const $container: ViewStyle = {
  position: 'relative',
  width: "47%",
  justifyContent: "space-between",
  alignItems: "flex-start",
  paddingTop: scale(16),
}

const $tagsContainer: ViewStyle = {
  position: 'absolute',
  top: scale(36),
  left: scale(18),
  flexDirection: 'row',
  zIndex: 2
}

const $imageContainer: ImageStyle = {
  width: "100%",
  aspectRatio: .7,
  borderRadius: scale(12),
  marginBottom: scale(12)
}

const $titleText: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: fontSizes[18],
  lineHeight: lineHeights[21],
  color: colors.palette.neutral250,
  paddingBottom: scale(5)
}

const $typeText: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: fontSizes[14],
  lineHeight: lineHeights[17],
  color: colors.palette.neutral450,
  textTransform: 'uppercase'
}
