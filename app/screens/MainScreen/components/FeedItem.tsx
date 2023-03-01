import React from "react"
import { ViewStyle, View, TextStyle, Pressable, PressableProps, Image, ImageStyle } from "react-native"
import { Text } from "../../../components"
import { typography, colors } from "../../../theme"
import { formatDate } from "../../../utils/formatDate"
import { Tag } from "./Tag"

export interface FeedItemProps {
  title: string
  image: string
  date: string
  tags?: string[]
  onPress?: PressableProps["onPress"]
}

export function FeedItem({ title, image, date, tags = [], onPress }: FeedItemProps) {
  return (
    <Pressable style={$container} onPress={onPress}>
      <View style={$tagsContainer}>
        {tags.map(tag => <Tag key={tag} title={tag} />)}
      </View>
      <Image source={{ uri: image }} style={$imageContainer} resizeMode="cover" />
      <Text text={title} style={$titleText} />
      <Text text={formatDate(date, 'MMM d, yyyy, H:mm a')} style={$dateText} />
    </Pressable>
  )
}

const $container: ViewStyle = {
  position: 'relative',
  width: "47%",
  justifyContent: "space-between",
  alignItems: "flex-start",
  paddingTop: 16,
}

const $tagsContainer: ViewStyle = {
  position: 'absolute',
  top: 36,
  left: 18,
  flexDirection: 'row',
  zIndex: 2
}

const $imageContainer: ImageStyle = {
  width: "100%",
  aspectRatio: .7,
  borderRadius: 12,
  marginBottom: 12
}

const $titleText: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 18,
  lineHeight: 21,
  color: colors.palette.neutral250,
  paddingBottom: 5
}

const $dateText: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 14,
  lineHeight: 17,
  color: colors.palette.neutral450
}
