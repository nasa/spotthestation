import React from "react"
import {
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from "react-native"
import { BlurView } from "expo-blur"
import Animated from "react-native-reanimated"
import { Icon, IconTypes, Text } from "../../../components"
import { colors } from "../../../theme/colors"
import { fontSizes, lineHeights, scale } from "../../../theme"

export interface LinkButtonWithArrowProps extends PressableProps {
  /**
   * The name of the icon
   */
  icon?: IconTypes
  /**
   * An optional style override useful for padding & margin.
   */
  buttonStyle?: StyleProp<ViewStyle>
  viewStyle?: StyleProp<ViewStyle>
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

  backgroundColor?: string
}

export function IconLinkButton(props: LinkButtonWithArrowProps) {
  const {
    buttonStyle: $buttonStyle,
    viewStyle: $viewStyleOverride,
    icon,
    iconColor,
    iconSize,
    imageStyle: $imageStyle,
    textStyle: $textStyle,
    text,
    backgroundColor,
    blurIntensity = 0,
    ...rest
  } = props

  return (
    <Pressable accessibilityRole="imagebutton" {...rest}>
      <Animated.View style={[$viewStyle, $buttonStyle]}>
        <BlurView
          intensity={blurIntensity}
          style={[$viewStyle, $viewStyleOverride, backgroundColor && { backgroundColor }]}
        >
          {icon ? (
            <Icon
              icon={icon}
              size={iconSize || 20}
              color={iconColor || colors.palette.neutral100}
              style={$imageStyle}
            />
          ) : (
            <Text text={text} style={[$text, $textStyle]} />
          )}
        </BlurView>
      </Animated.View>
    </Pressable>
  )
}

const $viewStyle: ViewStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: scale(42),
  height: scale(42),
  backgroundColor: colors.palette.neutral350,
  borderRadius: scale(100),
  overflow: "hidden",
}

const $text: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: fontSizes[28],
  lineHeight: lineHeights[28],
}
