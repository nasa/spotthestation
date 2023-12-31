import { StyleFn, useStyles } from "../../../utils/useStyles"
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
  reverseTitle?: boolean
  children?: ReactNode
  actionTitle?: TxKeyPath
  containerStyle?: ViewStyle
  button?: ReactNode
}

export function ExpandContainer({
  defaultValue = true,
  title,
  expandble = true,
  children,
  itemsCount,
  actionTitle,
  reverseTitle,
  containerStyle,
  button,
}: ExpandContainerProps) {
  const { $container, $headContainer, $titleContainer, $title, $up } = useStyles(styles)

  const [expanded, setExpanded] = useState(defaultValue)

  const $titleContainerOverride: ViewStyle = reverseTitle && { flexDirection: "row-reverse" }
  const $titleOverride: TextStyle = reverseTitle && { textAlign: "right", width: "100%" }

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
          {button}
        </View>
        {expandble && (
          <Icon
            icon="chevronDown"
            size={18}
            onPress={() => setExpanded(!expanded)}
            style={expanded && ($up as ImageStyle)}
          />
        )}
        {actionTitle && (
          <Text
            accessible
            accessibilityLabel="action"
            accessibilityHint="action title"
            accessibilityRole="text"
            tx={actionTitle}
            style={$title}
          />
        )}
      </View>
      {expanded && children}
    </View>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $container: ViewStyle = {
    width: "100%",
    marginTop: scale(36),
  }

  const $headContainer: ViewStyle = {
    marginBottom: scale(18),
    flexDirection: "row",
    justifyContent: "space-between",
  }

  const $titleContainer: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  }

  const $title: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[13],
    lineHeight: lineHeights[16],
    color: colors.palette.neutral450,
    textTransform: "uppercase",
  }

  const $up: ImageStyle = {
    transform: [{ rotate: "180deg" }],
  }

  return { $container, $headContainer, $titleContainer, $title, $up }
}
