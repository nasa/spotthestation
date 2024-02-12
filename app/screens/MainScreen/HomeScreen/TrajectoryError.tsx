import { StyleFn, useStyles } from "../../../utils/useStyles"
import React from "react"
import { ViewStyle, View, TextStyle } from "react-native"
import { Button, Text } from "../../../components"
import { typography } from "../../../theme"
import { colors } from "../../../theme/colors"
import { normalizeHeight } from "../../../utils/normalizeHeight"

export function TrajectoryError({ onDismiss, kind = "" }) {
  const { $modalBodyContainer, $title, $nextButton, $nextButtonText } = useStyles(styles)

  return (
    <View
      accessible
      accessibilityLabel="coach mark"
      accessibilityHint="coach mark"
      accessibilityRole="text"
      style={$modalBodyContainer}
    >
      <Text
        tx={
          kind === "no-network"
            ? "homeScreen.initLoader.noNetwork"
            : "homeScreen.initLoader.trajectoryError"
        }
        style={$title}
      />
      <Button
        accessible
        accessibilityLabel="dismiss button"
        accessibilityHint="dismiss coach mark"
        tx="homeScreen.coachMarks.dismiss"
        textStyle={$nextButtonText}
        style={$nextButton}
        pressedStyle={$nextButton}
        onPress={onDismiss}
      />
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

  const $nextButton: ViewStyle = {
    height: scale(56),
    backgroundColor: colors.palette.neutral100,
    borderRadius: scale(28),
    borderWidth: 0,
    width: scale(140),
    alignSelf: "center",
    marginTop: 24,
  }

  const $nextButtonText: TextStyle = {
    fontFamily: typography.primary.medium,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.buttonBlue,
  }

  return { $modalBodyContainer, $title, $nextButton, $nextButtonText }
}
