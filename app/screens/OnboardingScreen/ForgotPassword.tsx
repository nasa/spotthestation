import React, { useState } from "react"
import { ViewStyle, View, Pressable, PressableProps, TextStyle, Linking, Platform } from "react-native"
import { Button, Icon, Text, TextField } from "../../components"
import { Accessory } from "../../components/Accessory"
import { typography } from "../../theme"
import { colors } from "../../theme/colors"

// const { UIMailLauncher } = NativeModules

export interface ForgotPasswordProps {
  /**
   * A function for closing modal.
   */
  onClose?: PressableProps["onPress"]
}

export function ForgotPassword({ onClose }: ForgotPasswordProps) {
  const [isMailed, setIsMailed] = useState(false)
  const [email, setEmail] = useState('')

  const handleSendMail = () => {
   setIsMailed(true)
  }

  const handleOpenEmailApp = () => {
    if (Platform.OS === 'android') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      // UIMailLauncher.launchMailApp() //TODO
      return 
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Linking.openURL('message:0')
  }

  return (
    <View style={$modalBodyContainer}>
      <Pressable
        style={$close}
        onPress={onClose}
      >
        <Icon icon="x" color={colors.palette.neutral450} />
      </Pressable>
      <View style={$generalIcon}>
        {isMailed ? <Icon icon="mailAccepted" /> : <Icon icon="changePassword" />}
      </View>
      <View style={$contentContainer}>
        <Text tx={`onboarding.forgotPassword.${isMailed ? "titleMailed" : "title"}`} style={$title} />
        <View style={$subtitleContainer}>
          <Text tx={`onboarding.forgotPassword.${isMailed ? "subtitleMailed" : "subtitle"}`} style={$subtitle} />
          {isMailed && <Text text={email} style={$email} />}
        </View>
        {!isMailed && (
          <TextField
            value={email}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            placeholderTx="onboarding.login.placeholder.email"
            onChange={({ nativeEvent }) => setEmail(nativeEvent.text)}
            renderLeftAccessory={({ style }) => <Accessory style={style} icon="mail" />}
            onSubmitEditing={handleSendMail}
            inputWrapperStyle={$textField}
          />
        )}
        <Button
          tx={`onboarding.forgotPassword.${isMailed ? "openEmailAppButton" : "resetButton"}`}
          disabled={!email}
          pressedStyle={$button}
          textStyle={$buttonText}
          style={!email ? [$button, $disabled] : $button}
          onPressIn={isMailed ? handleOpenEmailApp : handleSendMail}
        />
        <View style={$questionContainer}>
          <Text tx={`onboarding.forgotPassword.${isMailed ? "doNotReceiveQuestion" : "rememberQuestion"}`} style={$question} />
          <Pressable onPress={isMailed ? handleSendMail : onClose}>
            <Text tx={`onboarding.forgotPassword.${isMailed ? "resend" : "loginLink"}`} style={$link} />
          </Pressable>
        </View>
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

const $textField: ViewStyle = {
  backgroundColor: colors.palette.neutral550
}

const $questionContainer: TextStyle = {
  flexDirection: "row",
  justifyContent: "center",
}

const $question: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: 18,
  fontFamily: typography.primary.normal,
  lineHeight: 21,
  paddingRight: 3
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

const $link: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 21,
}

const $email: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 22,
  textAlign: "center"
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

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 22
}

const $disabled: ViewStyle = {
  opacity: .5
}

const $subtitleContainer: ViewStyle = {
  paddingBottom: 36
}