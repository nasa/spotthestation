import React from "react"
import {
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle
} from "react-native"
import { BlurView } from 'expo-blur'
import { Icon, IconTypes, Text } from "../../../components"
import { colors } from "../../../theme/colors"


export interface LinkButtonWithArrowProps extends PressableProps {
  /**
   * The name of the icon
   */
  icon?: IconTypes
  /**
   * An optional style override useful for padding & margin.
   */
  buttonStyle?: StyleProp<ViewStyle>
  /**
   * An optional icon style.
   */
  imageStyle?: StyleProp<ImageStyle>
  /**
   * An optional text instead of icon.
   */
  text?: string
  /**
   * An optional text style.
   */
  textStyle?: StyleProp<TextStyle>
  /**
   * An optional intensity of button blur.
   */
  blurIntensity?: number
  /**
   * An optional icon color.
   */
  iconColor?: string
  /**
   * An optional icon size.
   */
  iconSize?: number
}

export function IconLinkButton(props: LinkButtonWithArrowProps) {
  const {
    buttonStyle: $buttonStyle,
    icon,
    iconColor,
    iconSize,
    imageStyle: $imageStyle,
    textStyle: $textStyle,
    text,
    blurIntensity = 0,
    ...rest
  } = props

  return (
    <Pressable style={[$viewStyle, $buttonStyle]} accessibilityRole="button" {...rest}>
      <BlurView intensity={blurIntensity} style={$viewStyle}>
        {icon ? 
          <Icon icon={icon} size={iconSize || 20} color={iconColor || colors.palette.neutral100} style={$imageStyle} /> 
          : 
          <Text text={text} style={[$text, $textStyle]} />
        }
      </BlurView>
    </Pressable>
  )
}

const $viewStyle: ViewStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 42,
  height: 42,
  backgroundColor: colors.palette.neutral350,
  borderRadius: 100,
  overflow: "hidden"
}

const $text: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 28,
  lineHeight: 28
}
