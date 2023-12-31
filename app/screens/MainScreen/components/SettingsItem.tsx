import { StyleFn, useStyles } from "../../../utils/useStyles"
import React, { ReactNode } from "react"
import { ViewStyle, View, TextStyle, Pressable, PressableProps } from "react-native"
import { Text, Icon, IconTypes } from "../../../components"
import { TxKeyPath } from "../../../i18n"
import { typography, colors } from "../../../theme"

export interface SettingsItemProps {
  title: TxKeyPath
  icon: IconTypes
  withUnderline?: boolean
  onPress?: PressableProps["onPress"]
  rightControl?: ReactNode
}

export function SettingsItem({
  title,
  icon,
  onPress,
  rightControl,
  withUnderline = true,
}: SettingsItemProps) {
  const { $container, $bodyContainer, $withoutUnderline, $titleContainer, $titleText } =
    useStyles(styles)

  return (
    <Pressable
      accessible
      accessibilityLabel="pressable settings item"
      accessibilityHint="pressable settings item"
      accessibilityRole="button"
      style={$container}
      onPress={onPress}
    >
      <View style={[$bodyContainer, !withUnderline && $withoutUnderline]}>
        <Icon icon={icon} size={24} color={colors.palette.neutral450} />
        <View style={$titleContainer}>
          <Text
            accessible
            accessibilityLabel="title"
            accessibilityHint={title}
            accessibilityRole="text"
            tx={title}
            style={$titleText}
            ellipsizeMode="tail"
            numberOfLines={1}
          />
        </View>
        {rightControl || <Icon icon="caretRight" size={24} color={colors.palette.neutral550} />}
      </View>
    </Pressable>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $container: ViewStyle = {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: scale(16),
  }

  const $bodyContainer: ViewStyle = {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: colors.palette.neutral550,
    borderBottomWidth: scale(1),
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

  const $titleText: TextStyle = {
    width: "95%",
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[24],
    lineHeight: lineHeights[29],
    color: colors.palette.neutral100,
  }

  return { $container, $bodyContainer, $withoutUnderline, $titleContainer, $titleText }
}
