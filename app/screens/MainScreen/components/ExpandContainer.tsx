import React, { ReactNode, useState } from "react"
import { ViewStyle, View, TextStyle, ImageStyle } from "react-native"
import { Text, Icon } from "../../../components"
import { TxKeyPath } from "../../../i18n"
import { typography, colors, fontSizes, lineHeights, scale } from "../../../theme"

export interface ExpandContainerProps {
  defaultValue?: boolean
  itemsCount?: number
  title: TxKeyPath
  expandble?: boolean
  reverseTitle?: boolean
  children?: ReactNode
  actionTitle?: string
  containerStyle?: ViewStyle
}

export function ExpandContainer({ defaultValue = true, title, expandble = true, children, itemsCount, actionTitle, reverseTitle, containerStyle }: ExpandContainerProps) {
  const [expanded, setExpanded] = useState(defaultValue)

  const $titleContainerOverride: ViewStyle = reverseTitle && { flexDirection: 'row-reverse' }
  const $titleOverride: TextStyle = reverseTitle && { textAlign: 'right', width: '100%' }

  return (
    <View style={[$container, containerStyle]}>
      <View style={$headContainer}>
        <View style={[$titleContainer, $titleContainerOverride]}>
          <Text 
            accessible
            accessibilityLabel="title"
            accessibilityHint={title}
            accessibilityRole="text"
            tx={title} 
            style={[$title, $titleOverride]} 
          />
          {itemsCount > 1 && <Text text={` (${itemsCount})`} style={$title} />} 
        </View>
        {expandble && <Icon icon="chevronDown" size={18} onPress={() => setExpanded(!expanded)} style={expanded && $up} />}
        {actionTitle && <Text 
            accessible
            accessibilityLabel="action"
            accessibilityHint="action title"
            accessibilityRole="text"
            text={actionTitle} 
            style={$title}
          />}
      </View>
      {expanded && children}
    </View>
  )
}

const $container: ViewStyle = {
  width: "100%",
  marginTop: scale(36)
}

const $headContainer: ViewStyle = {
  marginBottom: scale(18),
  flexDirection: "row",
  justifyContent: "space-between"
}

const $titleContainer: ViewStyle = {
  flexDirection: "row",
}

const $title: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: fontSizes[13],
  lineHeight: lineHeights[16],
  color: colors.palette.neutral450,
  textTransform: "uppercase"
}

const $up: ImageStyle = {
  transform: [{ rotate: "180deg" }]
}
