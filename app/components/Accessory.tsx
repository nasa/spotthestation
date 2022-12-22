import React from "react"
import { PressableProps } from "react-native"
import { colors } from "../theme"
import { IconTypes, Icon } from "./Icon"
import { TextFieldAccessoryProps } from "./TextField"

export interface AccessoryProps {
  icon: IconTypes

  color?: string

  onPress?: PressableProps["onPress"]

  props: TextFieldAccessoryProps,
}

export const Accessory = ({icon, color, props, onPress}: AccessoryProps) => {
  return (
    <Icon
      icon={icon}
      size={28}
      color={color || colors.palette.neutral450}
      containerStyle={props.style}
      onPress={onPress}
    />
  )
}