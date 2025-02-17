import { Text, Button } from ".."
import { StyleFn, useStyles } from "../../utils/useStyles"
import React from "react"
import { ViewStyle, View, TextStyle, ScrollView, Platform, Linking } from "react-native"

import { colors, typography } from "../../theme"

export interface FontSizeModalProps {
  onClose?: (canceled: boolean) => void
}

export function FontSizeModal({ onClose }: FontSizeModalProps) {
  const {
    $modalBodyContainer,
    $contentContainer,
    $buttonsContainer,
    $title,
    $body,
    $nextButtonText,
    $nextButton,
    $scrollContainer,
  } = useStyles(styles)

  const onSettings = async () => {
    onClose?.(false)
    if (Platform.OS === "ios" && (await Linking.canOpenURL("App-prefs:root"))) {
      Linking.openURL("App-prefs:root").catch(console.error)
      return
    }

    Linking.openSettings().catch(console.error)
  }

  return (
    <View style={$modalBodyContainer}>
      <ScrollView style={$contentContainer} contentContainerStyle={$scrollContainer}>
        <Text tx="fontSizeModal.title" style={$title} />
        <Text tx="fontSizeModal.body1" style={$body} />
        {Platform.OS === "ios" && <Text tx="fontSizeModal.bodyIOS" style={$body} />}
        {Platform.OS === "android" && <Text tx="fontSizeModal.bodyAndroid" style={$body} />}

        <View style={$buttonsContainer}>
          <Button
            accessible
            accessibilityLabel="cancel button"
            accessibilityHint="cancel button"
            tx="fontSizeModal.cancel"
            textStyle={$nextButtonText}
            style={$nextButton}
            pressedStyle={$nextButton}
            onPress={() => onClose?.(true)}
          />

          <Button
            accessible
            accessibilityLabel="settings button"
            accessibilityHint="go to settings"
            tx="fontSizeModal.settings"
            textStyle={$nextButtonText}
            style={$nextButton}
            pressedStyle={$nextButton}
            onPress={onSettings}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $modalBodyContainer: ViewStyle = {
    backgroundColor: colors.palette.buttonBlue,
    borderRadius: scale(18),
    width: "100%",
  }

  const $scrollContainer: ViewStyle = {
    paddingVertical: 36,
    paddingHorizontal: 0,
    alignItems: "center",
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

  const $nextButtonText: TextStyle = {
    fontFamily: typography.primary.medium,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.buttonBlue,
  }

  const $nextButton: ViewStyle = {
    backgroundColor: colors.palette.neutral100,
    borderRadius: scale(28),
    borderWidth: 0,
    flex: 1,
  }

  return {
    $modalBodyContainer,
    $buttonsContainer,
    $contentContainer,
    $title,
    $body,
    $nextButtonText,
    $nextButton,
    $scrollContainer,
  }
}
