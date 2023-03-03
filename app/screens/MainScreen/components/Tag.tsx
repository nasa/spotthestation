import React from "react"
import { TextStyle} from "react-native"
import { Text } from "../../../components"
import { typography, colors } from "../../../theme"

export interface TagProps {
  title: string
}

export function Tag({ title }: TagProps) {
  const setTagStyles = (): TextStyle => {
    switch (title.toLowerCase()) {
      case 'launch': return $launch
      case 'live': return $live
      case 'docking': return $docking
      case 'nasa history': return $docking
      default: return {}
    }
  }

  return <Text text={title.toUpperCase()} style={[$container, setTagStyles()]} />
}

const $container: TextStyle = {
  height: 23,
  borderRadius: 4,
  overflow: 'hidden',
  paddingHorizontal: 7,
  paddingVertical: 4,
  backgroundColor: colors.palette.neutral250,
  fontFamily: typography.primary?.medium,
  fontSize: 12,
  lineHeight: 15,
  color: colors.palette.neutral350,
  marginRight: 10
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