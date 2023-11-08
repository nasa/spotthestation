import { StyleFn, useStyles } from "../../../utils/useStyles"
import React, { useEffect, useState } from "react"
import { ViewStyle, View, PressableProps, TextStyle } from "react-native"
import { Icon, Text, Button } from "../../../components"
import { colors, typography } from "../../../theme"
import { watchCalibrationState } from "../../../utils/orientation"
import { SensorAccuracy } from "react-native-sensors"

export interface CalibrateCompassModalProps {
  onClose?: PressableProps["onPress"]
  onHighAccuracy?: () => void
}

function formatAccuracy(accuracy: SensorAccuracy) {
  switch (accuracy) {
    case 0:
      return "low"
    case 1:
      return "medium"
    case 2:
      return "high"
    default:
      return null
  }
}

export function CalibrateCompassModal({ onClose, onHighAccuracy }: CalibrateCompassModalProps) {
  const {
    $modalBodyContainer,
    $contentContainer,
    $close,
    $title,
    $instructions,
    $accuracy,
    $accuracyText,
    $nextButtonText,
    $nextButton,
    $high,
    $medium,
    $low,
  } = useStyles(styles)

  const [accuracy, setAccuracy] = useState<"low" | "medium" | "high" | null>(null)

  useEffect(() => {
    return watchCalibrationState((accuracy) => setAccuracy(formatAccuracy(accuracy)))
  }, [])

  useEffect(() => {
    if (onHighAccuracy && accuracy === "high") onHighAccuracy()
  }, [onHighAccuracy, accuracy])

  return (
    <View style={$modalBodyContainer}>
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
      <View style={$contentContainer}>
        <Icon icon="calibration" size={44} />
        <Text tx="settings.calibrateCompass" style={$title} />
        <Text tx="settings.calibrateCompassData.instructions" style={$instructions} />

        <View style={$accuracy}>
          <Text tx="settings.calibrateCompassData.accuracy" style={$accuracyText} />
          {accuracy ? (
            <Text
              tx={`settings.calibrateCompassData.${accuracy}`}
              style={[
                $accuracyText,
                accuracy === "low" && $low,
                accuracy === "medium" && $medium,
                accuracy === "high" && $high,
              ]}
            />
          ) : (
            <Text style={$accuracyText}>-</Text>
          )}
        </View>

        <Button
          accessible
          accessibilityLabel="finish button"
          accessibilityHint="finish coach mark"
          tx="homeScreen.coachMarks.finish"
          textStyle={$nextButtonText}
          style={$nextButton}
          pressedStyle={$nextButton}
          onPress={onClose}
        />
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
    paddingHorizontal: 30,
    width: "100%",
  }

  const $buttonsContainer: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }

  const $contentContainer: ViewStyle = {
    width: "100%",
    paddingHorizontal: scale(36),
    alignItems: "center",
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
    paddingBottom: 12,
    paddingTop: 18,
  }

  const $instructions: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.neutral100,
  }

  const $button: ViewStyle = {
    width: "40%",
    height: scale(64),
    backgroundColor: colors.palette.neutral550,
    borderRadius: scale(28),
    borderWidth: 0,
    marginTop: scale(24),
    marginBottom: scale(24),
  }

  const $buttonText: TextStyle = {
    color: colors.palette.neutral100,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.medium,
    lineHeight: lineHeights[22],
  }

  const $accuracy: ViewStyle = {
    flexDirection: "row",
    paddingTop: 18,
    paddingBottom: 18,
  }

  const $accuracyText: TextStyle = {
    ...$instructions,
    marginRight: 5,
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
    minWidth: scale(140),
  }

  const $high: TextStyle = {
    color: colors.palette.green,
  }

  const $medium: TextStyle = {
    color: colors.palette.nasaOrange,
  }

  const $low: TextStyle = {
    color: colors.palette.nasaRed,
  }

  return {
    $modalBodyContainer,
    $buttonsContainer,
    $contentContainer,
    $close,
    $generalIcon,
    $locationTitle,
    $title,
    $instructions,
    $button,
    $buttonText,
    $accuracy,
    $accuracyText,
    $nextButtonText,
    $nextButton,
    $high,
    $medium,
    $low,
  }
}
