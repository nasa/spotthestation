import React from "react"
import { ViewStyle, View, TextStyle, Pressable, PressableProps } from "react-native"
import { Text, Icon, IconTypes } from "../../../components"
import { TxKeyPath } from "../../../i18n"
import { typography, colors } from "../../../theme"

export interface SettingsItemProps {
  title: TxKeyPath
  icon: IconTypes
  onPress?: PressableProps["onPress"]
}

export function SettingsItem({ title, icon, onPress }: SettingsItemProps) {
  return (
    <Pressable style={$container} onPress={onPress}>
      <View style={$bodyContainer}>
        <Icon icon={icon} size={24} color={colors.palette.neutral450} />
        <View style={$titleContainer}>
          <Text tx={title} style={$titleText} ellipsizeMode='tail' numberOfLines={1} />
        </View>
        <Icon icon="caretRight" size={24} color={colors.palette.neutral550} />
      </View>
    </Pressable>
  )
}

const $container: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  paddingTop: 16,
}

const $bodyContainer: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  borderColor: colors.palette.neutral550,
  borderBottomWidth: 1,
  paddingBottom: 16,
  alignItems: "flex-start",
  marginLeft: 10,
}

const $titleContainer: ViewStyle = {
  flexDirection: "column",
  flex: 1,
  paddingLeft: 18
}

const $titleText: TextStyle = {
  width: "95%",
  fontFamily: typography.primary?.normal,
  fontSize: 24,
  lineHeight: 29,
  color: colors.palette.neutral100
}
