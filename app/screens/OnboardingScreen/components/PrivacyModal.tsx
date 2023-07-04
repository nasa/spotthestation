/* eslint-disable react-native/no-inline-styles */
import React from "react"
import {
  ViewStyle,
  View,
  PressableProps,
  TextStyle,
  Linking,
  Pressable,
  Image,
  ImageStyle,
} from "react-native"
import { Button, Text } from "../../../components"
import { fontSizes, lineHeights, scale, typography } from "../../../theme"
import { colors } from "../../../theme/colors"
import { normalizeHeight } from "../../../utils/normalizeHeight"

const image = require("../../../../assets/images/image.png")

export interface PrivacyModalProps {
  onPressSkip?: PressableProps["onPress"]
  onPressAgree?: PressableProps["onPress"]
}

export function PrivacyModal({ onPressSkip, onPressAgree }: PrivacyModalProps) {
  return (
    <View
      accessible
      accessibilityLabel="coach mark"
      accessibilityHint="coach mark"
      accessibilityRole="text"
      style={[$coachModalBodyContainer, { marginTop: normalizeHeight(0.1) }]}
    >
      <Text tx="privacy.title" style={$privacyTitle} />
      <Text tx="privacy.body" style={$body} />
      <Image source={image} style={$image} resizeMode="cover" />
      <View style={$buttonsContainer}>
        <Button
          accessible
          accessibilityLabel="skip button"
          accessibilityHint="skip coach mark"
          tx="privacy.skip"
          textStyle={$skipButtonText}
          style={$skipButton}
          pressedStyle={$skipButton}
          onPress={onPressSkip}
        />
        <Button
          accessible
          accessibilityLabel="next button"
          accessibilityHint="next coach mark"
          tx="privacy.agree"
          textStyle={$nextButtonText}
          style={$nextButton}
          pressedStyle={$nextButton}
          onPress={onPressAgree}
        />
      </View>
      <Pressable
        onPress={() =>
          Linking.openURL("https://www.nasa.gov/about/highlights/HP_Privacy.html#privacy")
        }
        style={{ marginTop: scale(10), alignSelf: "center" }}
      >
        <Text tx="privacy.policy" style={[$tip, { color: colors.palette.neutral100 }]} />
      </Pressable>
    </View>
  )
}

const $image: ImageStyle = {
  alignSelf: "center",
  width: "100%",
  height: normalizeHeight(0.2),
  marginVertical: scale(24),
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

const $body: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: fontSizes[20],
  lineHeight: lineHeights[24],
  color: colors.palette.neutral100,
  paddingBottom: 10,
  paddingLeft: 5,
}

const $coachModalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: scale(16),
  paddingVertical: 36,
  paddingHorizontal: 30,
  width: "100%",
}

const $tip: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: fontSizes[18],
  fontFamily: typography.primary.light,
  lineHeight: lineHeights[22],
  textDecorationLine: "underline",
  marginTop: scale(16),
}

const $privacyTitle: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: fontSizes[36],
  fontFamily: typography.primary.normal,
  lineHeight: lineHeights[44],
  paddingBottom: scale(24),
}
