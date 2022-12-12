import React from "react"
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
  ImageStyle
} from "react-native"
import { Icon } from "../../../components"
import { colors } from "../../../theme/colors"

export interface ButtonAccessoryProps {
  style: StyleProp<any>
  pressableState: PressableStateCallbackType
}

export interface LinkButtonWithArrowProps extends PressableProps {
  /**
   * An optional style override useful for padding & margin.
   */
  size?: StyleProp<ViewStyle>
  /**
   * An optional icon style.
   */
  imageStyle?: StyleProp<ImageStyle>
}

export function LinkButtonWithArrow(props: LinkButtonWithArrowProps) {
  const {
    size: $size,
    imageStyle: $imageStyle,
    ...rest
  } = props

  return (
    <Pressable style={[$viewStyle, $size]} accessibilityRole="button" {...rest}>
      <Icon icon="back" size={20} color={colors.palette.neutral100} style={$imageStyle} />
    </Pressable>
  )
}

const $viewStyle: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 42,
  height: 42,
  backgroundColor: colors.palette.neutral350,
  borderRadius: 100,
}
