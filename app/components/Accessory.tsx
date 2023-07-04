import React, { memo } from "react"
import { PressableProps, StyleProp } from "react-native"
import { colors } from "../theme"
import { IconTypes, Icon } from "./Icon"

export interface AccessoryProps {
  icon: IconTypes

  color?: string

  onPress?: PressableProps["onPress"]

  style: StyleProp<any>
}

export const Accessory = memo(function Accessory({ icon, color, style, onPress }: AccessoryProps) {
  return (
    <Icon
      icon={icon}
      size={28}
      color={color || colors.palette.neutral450}
      containerStyle={style}
      onPress={onPress}
    />
  )
})
