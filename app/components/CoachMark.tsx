import { Text, Button, Icon, IconTypes } from "."
import React from "react"
import { ViewStyle, View, PressableProps, TextStyle, StyleProp } from "react-native"

import { TxKeyPath } from "../i18n"
import { typography } from "../theme"
import { colors } from "../theme/colors"
import { StyleFn, useStyles } from "../utils/useStyles"

export interface CoachMarkProps {
  icon?: IconTypes
  title?: TxKeyPath
  bodyText?: TxKeyPath
  stage?: number
  style?: StyleProp<ViewStyle>
  onPressNext?: PressableProps["onPress"]
  onPressFinish?: PressableProps["onPress"]
  totalStages?: number
  arrowStyle?: StyleProp<ViewStyle>
}

export function CoachMark({
  icon,
  title,
  bodyText,
  stage,
  style,
  onPressNext,
  onPressFinish,
  totalStages,
  arrowStyle,
}: CoachMarkProps) {
  const {
    $modalBodyContainer,
    $buttonsContainer,
    $skipButton,
    $skipButtonText,
    $nextButton,
    $nextButtonText,
    $title,
    $body,
    $stage,
  } = useStyles(styles)

  const renderArrow = () => {
    return (
      <View style={arrowStyle}>
        <Icon icon="bigArrow" size={55} />
      </View>
    )
  }

  return (
    <View
      accessible
      accessibilityLabel="coach mark"
      accessibilityHint="coach mark"
      accessibilityRole="text"
      style={[$modalBodyContainer, style]}
    >
      {renderArrow()}
      <Text text={`${stage}/${totalStages}`} style={$stage} />
      {Boolean(icon) && <Icon icon={icon} size={44} />}
      <Text tx={title} style={$title} />
      <Text tx={bodyText} style={$body} />
      {stage === totalStages ? (
        <Button
          accessible
          accessibilityLabel="finish button"
          accessibilityHint="finish coach mark"
          tx="homeScreen.coachMarks.finish"
          textStyle={$nextButtonText}
          style={$nextButton}
          pressedStyle={$nextButton}
          onPress={onPressFinish}
        />
      ) : (
        <View style={$buttonsContainer}>
          <Button
            accessible
            accessibilityLabel="skip button"
            accessibilityHint="skip coach mark"
            tx="homeScreen.coachMarks.skip"
            textStyle={$skipButtonText}
            style={$skipButton}
            pressedStyle={$skipButton}
            onPress={onPressFinish}
          />
          <Button
            accessible
            accessibilityLabel="next button"
            accessibilityHint="next coach mark"
            tx="homeScreen.coachMarks.next"
            textStyle={$nextButtonText}
            style={$nextButton}
            pressedStyle={$nextButton}
            onPress={onPressNext}
          />
        </View>
      )}
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

  const $title: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[24],
    lineHeight: lineHeights[29],
    color: colors.palette.neutral100,
    paddingBottom: 12,
    paddingTop: 18,
  }

  const $body: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.neutral100,
    paddingBottom: 36,
  }

  const $stage: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[16],
    lineHeight: lineHeights[20],
    color: colors.palette.neutral100,
    position: "absolute",
    top: 0,
    left: 0,
    padding: 24,
    opacity: 0.5,
  }

  return {
    $modalBodyContainer,
    $buttonsContainer,
    $skipButton,
    $skipButtonText,
    $nextButton,
    $nextButtonText,
    $title,
    $body,
    $stage,
  }
}
