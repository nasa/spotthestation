import React, { ReactNode, useState } from "react"
import { ViewStyle, View, TextStyle, ImageStyle } from "react-native"
import { Text, Icon } from "../../../components"
import { TxKeyPath } from "../../../i18n"
import { typography, colors } from "../../../theme"

export interface ExpandContainerProps {
  defaultValue?: boolean
  itemsCount?: number
  title: TxKeyPath
  expandble?: boolean
  children?: ReactNode
  actionTitle?: string
}

export function ExpandContainer({ defaultValue = true, title, expandble = true, children, itemsCount, actionTitle }: ExpandContainerProps) {
  const [expanded, setExpanded] = useState(defaultValue)
  return (
    <View style={$container}>
      <View style={$headContainer}>
        <View style={$titleContainer}>
          <Text 
            accessible
            accessibilityLabel="title"
            accessibilityHint={title}
            accessibilityRole="text"
            tx={title} 
            style={$title} 
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
  marginTop: 36
}

const $headContainer: ViewStyle = {
  marginBottom: 18,
  flexDirection: "row",
  justifyContent: "space-between"
}

const $titleContainer: ViewStyle = {
  flexDirection: "row",
}

const $title: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 13,
  lineHeight: 16,
  color: colors.palette.neutral450,
  textTransform: "uppercase"
}

const $up: ImageStyle = {
  transform: [{ rotate: "180deg" }]
}
