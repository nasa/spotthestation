import React from "react"
import {
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle
} from "react-native"
// import { BlurView } from "@react-native-community/blur"
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
}

export function IconLinkButton(props: LinkButtonWithArrowProps) {
  const {
    buttonStyle: $buttonStyle,
    icon,
    imageStyle: $imageStyle,
    textStyle: $textStyle,
    text,
    ...rest
  } = props

  return (
    <Pressable style={[$viewStyle, $buttonStyle]} accessibilityRole="button" {...rest}>
      {/* <BlurView > */}
        {icon ? 
          <Icon icon={icon} size={20} color={colors.palette.neutral100} style={$imageStyle} /> 
          : 
          <Text text={text} style={[$text, $textStyle]} />
        }
      {/* </BlurView> */}
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

const $text: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 28,
  lineHeight: 28
}
