import React from "react"
import { ViewStyle, View, TextStyle, Pressable, PressableProps } from "react-native"
import { Text, Icon, IconTypes } from "../../../components"
import { typography, colors } from "../../../theme"

export interface ListItemProps {
  selected?: boolean
  title: string
  subtitle: string
  icon: IconTypes
  onPress?: PressableProps["onPress"]
}

export function ListItem({ title, subtitle, selected = false, icon, onPress }: ListItemProps) {
  return (
    <Pressable 
      accessible
      accessibilityLabel="pressable list item"
      accessibilityHint="pressable list item"
      accessibilityRole="button"
      style={$container} 
      onPress={onPress}
    >
      <Icon icon={icon} size={24} color={colors.palette.neutral450} />
      <View style={$bodyContainer}>
        <View 
          accessible
          accessibilityLabel="list item body"
          accessibilityHint="list item body"
          accessibilityRole="text"
          style={$titleContainer}
        >
          <Text text={title} style={$titleText} ellipsizeMode='tail' numberOfLines={1} />
          <Text text={subtitle} style={$subtitleText} ellipsizeMode='tail' numberOfLines={1} />
        </View>
        <Icon icon="check" size={24} color={selected ? colors.palette.green : colors.palette.neutral550} />
      </View>
    </Pressable>
  )
}

const $container: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  paddingTop: 16,
}

const $bodyContainer: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  borderColor: colors.palette.neutral550,
  borderBottomWidth: 1,
  paddingBottom: 16,
  alignItems: "flex-start",
  marginLeft: 10,
}

const $titleContainer: ViewStyle = {
  flexDirection: "column",
  flex: 1
}

const $titleText: TextStyle = {
  width: "95%",
  fontFamily: typography.primary?.normal,
  fontSize: 18,
  lineHeight: 22,
  color: colors.palette.neutral100
}

const $subtitleText: TextStyle = {
  ...$titleText,
  fontSize: 16,
  lineHeight: 19,
  color: colors.palette.neutral100,
  paddingTop: 5
}
