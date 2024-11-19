import { Text, Icon, IconTypes } from "."
import { StyleFn, useStyles } from "../utils/useStyles"
import React, { ReactNode } from "react"
import { ViewStyle, View, TextStyle, Pressable, PressableProps } from "react-native"

import { TxKeyPath } from "../i18n"
import { typography, colors } from "../theme"

export interface SettingsItemProps {
  title: TxKeyPath
  icon?: IconTypes
  withUnderline?: boolean
  onPress?: PressableProps["onPress"]
  rightControl?: ReactNode
  children?: ReactNode
  numberOfLines?: number
}

export function SettingsItem({
  title,
  icon,
  onPress,
  rightControl,
  withUnderline = true,
  children,
  numberOfLines,
}: SettingsItemProps) {
  const { $container, $bodyContainer, $withoutUnderline, $titleContainer, $titleText, $noPadding } =
    useStyles(styles)

  return (
    <View style={[$container, !withUnderline && $withoutUnderline]}>
      <Pressable
        style={$bodyContainer}
        accessible
        accessibilityLabel="pressable settings item"
        accessibilityHint="pressable settings item"
        accessibilityRole="button"
        onPress={onPress}
      >
        {Boolean(icon) && <Icon icon={icon} size={24} color={colors.palette.neutral450} />}
        <View style={[$titleContainer, !icon && $noPadding]}>
          <Text
            accessible
            accessibilityLabel="title"
            accessibilityHint={title}
            accessibilityRole="text"
            tx={title}
            style={$titleText}
            ellipsizeMode="tail"
            numberOfLines={numberOfLines}
          />
        </View>
        {rightControl || <Icon icon="caretRight" size={24} color={colors.palette.neutral550} />}
      </Pressable>
      {children}
    </View>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $container: ViewStyle = {
    width: "100%",
    paddingTop: scale(16),
    borderColor: colors.palette.neutral550,
    borderBottomWidth: scale(1),
  }

  const $bodyContainer: ViewStyle = {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: scale(16),
    alignItems: "flex-start",
    marginLeft: scale(10),
  }

  const $withoutUnderline: ViewStyle = {
    borderBottomWidth: 0,
  }

  const $titleContainer: ViewStyle = {
    flexDirection: "column",
    flex: 1,
    paddingLeft: scale(18),
  }

  const $noPadding: ViewStyle = {
    paddingLeft: 0,
  }

  const $titleText: TextStyle = {
    width: "95%",
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[24],
    lineHeight: lineHeights[29],
    color: colors.palette.neutral100,
  }

  return { $container, $bodyContainer, $withoutUnderline, $titleContainer, $titleText, $noPadding }
}
