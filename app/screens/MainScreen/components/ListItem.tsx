import { StyleFn, useStyles } from "../../../utils/useStyles"
import React from "react"
import {
  ViewStyle,
  View,
  TextStyle,
  Pressable,
  PressableProps,
  ActivityIndicator,
} from "react-native"
import { Text, Icon, IconTypes, Toggle } from "../../../components"
import { TxKeyPath } from "../../../i18n"
import { typography, colors } from "../../../theme"

export interface ListItemProps {
  selected?: boolean
  withSwitch?: boolean
  editable?: boolean
  disabled?: boolean
  title: string
  subtitle?: string
  subtitle2?: string
  subtitle3?: string
  subtitle4?: string
  icon: IconTypes
  secondIcon?: { icon: IconTypes; color: string }
  ctaTx?: TxKeyPath
  onToggle?: (date: string) => void
  onPress?: PressableProps["onPress"]
  onCtaPress?: () => void
  onEdit?: () => void
  onDelete?: () => void
  borderless?: boolean
  value?: string
}

export const ListItem = React.memo(function ListItem({
  title,
  ctaTx,
  subtitle,
  subtitle2,
  subtitle3,
  subtitle4,
  selected = false,
  withSwitch = false,
  icon,
  secondIcon,
  onPress,
  onToggle,
  onCtaPress,
  onEdit,
  onDelete,
  editable,
  disabled,
  borderless,
  value,
}: ListItemProps) {
  const {
    $container,
    $bodyContainer,
    $titleContainer,
    $titleText,
    $subtitleText,
    $tip,
    $spinner,
    $cta,
    $buttons,
    $mr0,
    $withoutBottomBorder,
  } = useStyles(styles)

  return (
    <Pressable
      accessible
      accessibilityLabel="pressable list item"
      accessibilityHint="pressable list item"
      accessibilityRole="button"
      style={$container}
      onPress={onPress}
    >
      <View>
        <Icon icon={icon} size={24} color={colors.palette.neutral450} />
        {secondIcon && <Icon icon={secondIcon.icon} size={24} color={secondIcon.color} />}
      </View>
      <View style={[$bodyContainer, borderless && $withoutBottomBorder]}>
        <View
          accessible
          accessibilityLabel="list item body"
          accessibilityHint="list item body"
          accessibilityRole="text"
          style={$titleContainer}
        >
          <Text text={title} style={$titleText} ellipsizeMode="tail" numberOfLines={1} />
          {Boolean(subtitle) && (
            <Text text={subtitle} style={$subtitleText} ellipsizeMode="tail" numberOfLines={1} />
          )}
          {Boolean(subtitle2) && (
            <Text text={subtitle2} style={$subtitleText} ellipsizeMode="tail" numberOfLines={1} />
          )}
          {Boolean(subtitle3) && (
            <Text text={subtitle3} style={$subtitleText} ellipsizeMode="tail" numberOfLines={1} />
          )}
          {Boolean(subtitle4) && (
            <Text text={subtitle4} style={$subtitleText} ellipsizeMode="tail" numberOfLines={1} />
          )}
          {Boolean(ctaTx) && (
            <Pressable onPress={onCtaPress} style={$cta}>
              <Text tx={ctaTx} style={[$tip, { color: colors.palette.buttonBlue }]} />
            </Pressable>
          )}
          {editable && (
            <View
              accessible
              accessibilityLabel="list item body"
              accessibilityHint="list item body"
              accessibilityRole="text"
              style={$titleContainer}
            >
              <View style={$buttons}>
                {onEdit && (
                  <Icon
                    icon="edit"
                    size={30}
                    color={colors.palette.yellow}
                    onPress={onEdit}
                    containerStyle={$mr0}
                  />
                )}
                {onDelete && (
                  <Icon icon="trash" size={30} color={colors.palette.nasaRed} onPress={onDelete} />
                )}
              </View>
            </View>
          )}
        </View>
        {withSwitch && !disabled && (
          <Toggle
            accessible
            accessibilityLabel="switch button"
            accessibilityHint="toggle location alerts"
            variant="switch"
            value={selected}
            onValueChange={() => onToggle(value)}
            disabled={disabled}
          />
        )}
        {withSwitch && disabled && (
          <View style={$spinner}>
            <ActivityIndicator />
          </View>
        )}
        {!withSwitch && (
          <Icon
            icon="check"
            size={24}
            color={selected ? colors.palette.green : colors.palette.neutral550}
          />
        )}
      </View>
    </Pressable>
  )
})

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

  const $titleContainer: ViewStyle = {
    flexDirection: "column",
    flex: 1,
  }

  const $titleText: TextStyle = {
    width: "95%",
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.neutral100,
  }

  const $subtitleText: TextStyle = {
    ...$titleText,
    fontSize: fontSizes[16],
    lineHeight: lineHeights[19],
    color: colors.palette.neutral100,
    paddingTop: scale(5),
  }

  const $tip: TextStyle = {
    color: colors.palette.neutral450,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.light,
    lineHeight: lineHeights[22],
  }

  const $spinner: ViewStyle = {
    width: scale(46),
    justifyContent: "center",
    alignItems: "center",
  }

  const $cta: ViewStyle = { marginTop: scale(10) }

  const $buttons: ViewStyle = { flexDirection: "row", justifyContent: "flex-end", marginTop: 10 }

  const $mr0 = { marginRight: 10 }

  const $withoutBottomBorder = { borderBottomWidth: 0 }

  return {
    $container,
    $bodyContainer,
    $titleContainer,
    $titleText,
    $subtitleText,
    $tip,
    $spinner,
    $cta,
    $buttons,
    $mr0,
    $withoutBottomBorder,
  }
}
