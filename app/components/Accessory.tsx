import React, { memo } from "react"
import { PressableProps, StyleProp } from "react-native"
import { colors } from "../theme"
import { IconTypes, Icon } from "."

export interface AccessoryProps {
  icon: IconTypes

  color?: string

  onPress?: PressableProps["onPress"]

  style: StyleProp<any>

  accessibilityHint?: string
}

export const Accessory = memo(function Accessory({
  accessibilityHint,
  icon,
  color,
  style,
  onPress,
}: AccessoryProps) {
  return (
    <Icon
      icon={icon}
      size={28}
      color={color || colors.palette.neutral450}
      containerStyle={style}
      onPress={onPress}
      accessibilityHint={accessibilityHint}
    />
  )
})
