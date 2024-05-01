import { StyleFn, useStyles } from "../../../utils/useStyles"
import React from "react"
import { ViewStyle, View, PressableProps, TextStyle } from "react-native"
import { Text, Button } from "../../../components"
import { colors, typography } from "../../../theme"

export interface SafetyReminderProps {
  onBack?: PressableProps["onPress"]
  onClose?: PressableProps["onPress"]
}

export function SafetyReminder({ onClose, onBack }: SafetyReminderProps) {
  const {
    $modalBodyContainer,
    $contentContainer,
    $buttonsContainer,
    $title,
    $subtitle,
    $body,
    $nextButtonText,
    $nextButton,
  } = useStyles(styles)

  return (
    <View style={$modalBodyContainer}>
      <View style={$contentContainer}>
        <Text tx="issView.safetyReminder.title" style={$title} />
        <Text tx="issView.safetyReminder.subtitle1" style={$subtitle} />
        <Text tx="issView.safetyReminder.body1" style={$body} />
        <Text tx="issView.safetyReminder.subtitle2" style={$subtitle} />
        <Text tx="issView.safetyReminder.body2" style={$body} />

        <View style={$buttonsContainer}>
          <Button
            accessible
            accessibilityLabel="finish button"
            accessibilityHint="finish coach mark"
            tx="issView.safetyReminder.home"
            textStyle={$nextButtonText}
            style={$nextButton}
            pressedStyle={$nextButton}
            onPress={onBack}
          />

          <Button
            accessible
            accessibilityLabel="finish button"
            accessibilityHint="finish coach mark"
            tx="issView.safetyReminder.ok"
            textStyle={$nextButtonText}
            style={$nextButton}
            pressedStyle={$nextButton}
            onPress={onClose}
          />
        </View>
      </View>
    </View>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $modalBodyContainer: ViewStyle = {
    backgroundColor: colors.palette.buttonBlue,
    borderRadius: scale(18),
    alignItems: "center",
    paddingVertical: 36,
    paddingHorizontal: 0,
    width: "100%",
  }

  const $buttonsContainer: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: scale(15),
  }

  const $contentContainer: ViewStyle = {
    width: "100%",
    paddingHorizontal: scale(36),
  }

  const $close: ViewStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    padding: scale(18),
    zIndex: 5,
  }

  const $generalIcon: ViewStyle = {
    marginVertical: scale(36),
    width: "100%",
    alignItems: "center",
  }

  const $locationTitle: TextStyle = {
    textAlign: "center",
    color: colors.palette.neutral250,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.medium,
    lineHeight: lineHeights[22],
    paddingBottom: scale(5),
  }

  const $title: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[24],
    lineHeight: lineHeights[29],
    color: colors.palette.neutral100,
    paddingBottom: 20,
    textAlign: "center",
  }

  const $body: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.neutral100,
    marginBottom: 20,
  }

  const $subtitle: TextStyle = {
    ...$body,
    fontFamily: typography.primary.bold,
    marginBottom: 5,
  }

  const $button: ViewStyle = {
    width: "40%",
    height: scale(64),
    backgroundColor: colors.palette.neutral550,
    borderRadius: scale(28),
    borderWidth: 0,
    marginTop: scale(24),
    marginBottom: scale(24),
    padding: scale(24),
  }

  const $buttonText: TextStyle = {
    color: colors.palette.neutral100,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.medium,
    lineHeight: lineHeights[22],
  }

  const $nextButtonText: TextStyle = {
    fontFamily: typography.primary.medium,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.buttonBlue,
  }

  const $nextButton: ViewStyle = {
    height: scale(56),
    backgroundColor: colors.palette.neutral100,
    borderRadius: scale(28),
    borderWidth: 0,
    flex: 1,
  }

  return {
    $modalBodyContainer,
    $buttonsContainer,
    $contentContainer,
    $close,
    $generalIcon,
    $locationTitle,
    $title,
    $body,
    $subtitle,
    $button,
    $buttonText,
    $nextButtonText,
    $nextButton,
  }
}
