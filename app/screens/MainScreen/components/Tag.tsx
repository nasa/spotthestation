import React from "react"
import { TextStyle } from "react-native"
import { Text } from "../../../components"
import { typography, colors, fontSizes, lineHeights, scale } from "../../../theme"

export interface TagProps {
  title: string
}

export function Tag({ title }: TagProps) {
  const setTagStyles = (): TextStyle => {
    switch (title.toLowerCase()) {
      case "launch":
        return $launch
      case "live":
        return $live
      case "docking":
        return $docking
      case "nasa history":
        return $history
      default:
        return {}
    }
  }

  return <Text text={title.toUpperCase()} style={[$container, setTagStyles()]} />
}

const $container: TextStyle = {
  height: scale(23),
  borderRadius: scale(4),
  overflow: "hidden",
  paddingHorizontal: scale(7),
  paddingVertical: scale(4),
  backgroundColor: colors.palette.neutral250,
  fontFamily: typography.primary.medium,
  fontSize: fontSizes[12],
  lineHeight: lineHeights[15],
  color: colors.palette.neutral350,
  marginRight: scale(10),
}

const $launch: TextStyle = {
  backgroundColor: colors.palette.green,
}

const $live: TextStyle = {
  backgroundColor: colors.palette.nasaRed,
  color: colors.palette.neutral100,
}

const $history: TextStyle = {
  backgroundColor: colors.palette.buttonBlue,
  color: colors.palette.neutral100,
}

const $docking: TextStyle = {
  backgroundColor: colors.palette.nasaOrange,
}
