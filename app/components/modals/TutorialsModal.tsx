import { Icon, Text, Button } from ".."
import { StyleFn, useStyles } from "../../utils/useStyles"
import React from "react"
import { ViewStyle, View, TextStyle } from "react-native"

import { colors, typography } from "../../theme"

export interface TutorialsModalProps {
  onClose: (tutorial?: string) => void
}

export function TutorialsModal({ onClose }: TutorialsModalProps) {
  const {
    $modalBodyContainer,
    $contentContainer,
    $close,
    $title,
    $description,
    $nextButtonText,
    $nextButton,
    $buttonsContainer,
  } = useStyles(styles)

  return (
    <View style={$modalBodyContainer}>
      <Icon
        icon="x"
        accessible
        accessibilityLabel="x button"
        accessibilityHint="close modal"
        accessibilityRole="button"
        color={colors.palette.neutral450}
        onPress={() => onClose()}
        containerStyle={$close}
        size={36}
      />
      <View style={$contentContainer}>
        <Icon icon="tutorial" size={44} />
        <Text tx="settings.tutorials" style={$title} />
        <Text tx="settings.tutorialsData.description" style={$description} />

        <View style={$buttonsContainer}>
          <Button
            accessible
            accessibilityLabel="home page button"
            accessibilityHint="home page"
            tx="settings.tutorialsData.homePage"
            textStyle={$nextButtonText}
            style={$nextButton}
            pressedStyle={$nextButton}
            onPress={() => onClose("home")}
          />

          <Button
            accessible
            accessibilityLabel="AR page button"
            accessibilityHint="AR page"
            tx="settings.tutorialsData.arPage"
            textStyle={$nextButtonText}
            style={$nextButton}
            pressedStyle={$nextButton}
            onPress={() => onClose("ar")}
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
    marginTop: scale(36),
    gap: scale(15),
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

  const $description: TextStyle = {
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
    $description,
    $button,
    $buttonText,
    $nextButtonText,
    $nextButton,
  }
}
