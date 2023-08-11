import { StyleFn, useStyles } from "../../../utils/useStyles"
import React from "react"
import { ViewStyle, View, TextStyle, PressableProps } from "react-native"
import { Icon, Text, Button } from "../../../components"
import { typography } from "../../../theme"
import { colors } from "../../../theme/colors"
import { normalizeHeight } from "../../../utils/normalizeHeight"

export interface PermissionsModalProps {
  body: string
  onClose?: PressableProps["onPress"]
  onSuccess?: (value: any) => void
}

export function PermissionsModal({ body, onClose, onSuccess }: PermissionsModalProps) {
  const {
    $modalBodyContainer,
    $title,
    $buttonsContainer,
    $skipButton,
    $skipButtonText,
    $nextButton,
    $nextButtonText,
    $close,
  } = useStyles(styles)

  return (
    <View
      accessible
      accessibilityLabel="coach mark"
      accessibilityHint="coach mark"
      accessibilityRole="text"
      style={$modalBodyContainer}
    >
      <Icon
        icon="x"
        accessible
        accessibilityLabel="x button"
        accessibilityHint="close modal"
        accessibilityRole="button"
        color={colors.palette.neutral450}
        onPress={onClose}
        containerStyle={$close}
        size={36}
      />
      <Text text={body} style={$title} />
      <View style={$buttonsContainer}>
        <Button
          accessible
          accessibilityLabel="close button"
          accessibilityHint="close coach mark"
          tx="permissionsModal.close"
          textStyle={$skipButtonText}
          style={$skipButton}
          pressedStyle={$skipButton}
          onPress={onClose}
        />
        <Button
          accessible
          accessibilityLabel="open Settings button"
          accessibilityHint="open Settings coach mark"
          tx="permissionsModal.openSettings"
          textStyle={$nextButtonText}
          style={$nextButton}
          pressedStyle={$nextButton}
          onPress={onSuccess}
        />
      </View>
    </View>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $modalBodyContainer: ViewStyle = {
    backgroundColor: colors.palette.buttonBlue,
    borderRadius: scale(16),
    alignItems: "center",
    paddingVertical: 36,
    paddingHorizontal: 30,
    width: "100%",
    alignSelf: "center",
    marginTop: normalizeHeight(0.28),
  }

  const $title: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[24],
    lineHeight: lineHeights[29],
    color: colors.palette.neutral100,
    paddingBottom: 12,
    paddingTop: 18,
  }

  const $buttonsContainer: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "flex-end",
  }

  const $skipButton: ViewStyle = {
    backgroundColor: "transparent",
    borderWidth: 0,
    height: scale(56),
    minWidth: scale(140),
  }

  const $skipButtonText: TextStyle = {
    fontFamily: typography.primary.medium,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.neutral100,
  }

  const $nextButton: ViewStyle = {
    height: scale(56),
    backgroundColor: colors.palette.neutral100,
    borderRadius: scale(28),
    borderWidth: 0,
    minWidth: scale(140),
  }

  const $nextButtonText: TextStyle = {
    fontFamily: typography.primary.medium,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.buttonBlue,
  }

  const $close: ViewStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    padding: scale(18),
    zIndex: 5,
  }

  return {
    $modalBodyContainer,
    $title,
    $buttonsContainer,
    $skipButton,
    $skipButtonText,
    $nextButton,
    $nextButtonText,
    $close,
  }
}
