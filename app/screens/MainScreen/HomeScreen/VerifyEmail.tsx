import React, { useState } from "react"
import { ViewStyle, View, Pressable, PressableProps, TextStyle } from "react-native"
import { Icon, Text, Button } from "../../../components"
import { colors, typography } from "../../../theme"

export interface ForgotPasswordProps {
  /**
   * A function for closing modal.
   */
  onClose?: PressableProps["onPress"]
}

export function VerifyEmail({ onClose }: ForgotPasswordProps) {
  const [isVerified, setIsVerified] = useState(false)

  const handleVerify = () => {
    setIsVerified(true)
  }

  const variant = isVerified ? "verified" : "verify"

  return (
    <View style={$modalBodyContainer}>
      <Pressable
        style={$close}
        onPress={onClose}
      >
        <Icon icon="x" color={colors.palette.neutral450} />
      </Pressable>
      <View style={$generalIcon}>
        {isVerified ? <Icon icon="emailVerified" /> : <Icon icon="emailVerify" />}
      </View>
      <View style={$contentContainer}>
        <Text tx={`homeScreen.${variant}.title`} style={$title} />
        <View style={$subtitleContainer}>
          <Text tx={`homeScreen.${variant}.subtitle`} style={$subtitle} />
          <View style={$emailContainer}>
            <Text text="john.doe@gmail.com" style={$email} />
            {isVerified && <Text tx="homeScreen.verified.subtitle2" style={$subtitle} />}
          </View>
          {isVerified && <Text tx="homeScreen.verified.subtitle3" style={$subtitle} />}
        </View>
        {!isVerified && (
          <Button
            tx="homeScreen.verify.remindButton"
            pressedStyle={$button}
            textStyle={[$buttonText, $remindText]}
            style={[$button, $remindButton]}
            onPressIn={onClose}
          />
        )}
        <Button
          tx={`homeScreen.${variant}.generalButton`}
          pressedStyle={$button}
          textStyle={$buttonText}
          style={$button}
          onPressIn={isVerified ? onClose : handleVerify}
        />
      </View>
    </View>
  )
}

const $modalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  borderTopLeftRadius: 18,
  borderTopRightRadius: 18,
}

const $contentContainer: ViewStyle = {
  width: "100%",
  paddingHorizontal: 36,
  paddingBottom: 52
}

const $close: ViewStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: 18
}

const $generalIcon: ViewStyle = {
  marginVertical: 36,
  width: "100%",
  alignItems: "center"
}

const $title: TextStyle = {
  textAlign: "center",
  color: colors.palette.neutral250,
  fontSize: 36,
  fontFamily: typography.primary.normal,
  lineHeight: 44,
  paddingBottom: 24
}

const $subtitle: TextStyle = {
  textAlign: "center",
  color: colors.palette.neutral450,
  fontSize: 18,
  fontFamily: typography.primary.normal,
  lineHeight: 22
}

const $emailContainer: TextStyle = {
  width: "100%",
  flexDirection: "row",
  justifyContent: "center"
}

const $email: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 22,
  textAlign: "center",
  marginRight: 5
}

const $button: ViewStyle = {
  width: "100%",
  height: 64,
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: 28,
  borderWidth: 0,
  marginTop: 24,
  marginBottom: 24
}

const $remindButton: ViewStyle = {
  backgroundColor: "transparent",
  marginBottom: 18
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 22
}

const $remindText: TextStyle = {
  color: colors.palette.nasaOrange,
}

const $subtitleContainer: ViewStyle = {
  paddingBottom: 36
}