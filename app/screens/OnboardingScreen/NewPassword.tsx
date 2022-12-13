import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { Keyboard, TextInput, TextStyle, View, ViewStyle } from "react-native"
import { Screen, TextField, Text, Button, Icon, TextFieldAccessoryProps } from "../../components"
import { typography } from "../../theme"
import { colors } from "../../theme/colors"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import { IconLinkButton } from "./components/IconLinkButton"

export function NewPassword() {
  const navigation = useNavigation()

  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")

  const confirmPasswordInputRef = useRef<TextInput>()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true)
  const [isCanReset, setIsCanReset] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  useEffect(() => {
    if (password && confirmPassword && password === confirmPassword) setIsCanReset(true)
  }, [password, confirmPassword])

  const handleBack = () => navigation.goBack()
  const handleBackToLogin = () => navigation.navigate("Login" as never)
  const handleReset = () => {
    setIsSuccess(true)
  }

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <>
            <Icon
              icon={isPasswordHidden ? "view" : "hidden"}
              size={28}
              color={colors.palette.neutral450}
              containerStyle={props.style}
              onPress={() => setIsPasswordHidden(!isPasswordHidden)}
            />
          </>
        )
      },
    [isPasswordHidden],
  )

  const ConfirmPasswordRightAccessory = useMemo(
    () =>
      function ConfirmPasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <>
            <Icon
              icon={isConfirmPasswordHidden ? "view" : "hidden"}
              size={28}
              color={colors.palette.neutral450}
              containerStyle={props.style}
              onPress={() => setIsConfirmPasswordHidden(!isConfirmPasswordHidden)}
            />
          </>
        )
      },
    [isConfirmPasswordHidden],
  )

  const PasswordLeftAccessory = useMemo(
    () =>
      function PasswordLeftAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon="lock"
            size={28}
            color={colors.palette.neutral450}
            containerStyle={props.style}
          />
        )
      },
    [],
  )

  const renderGeneral = () => {
    return (
      <>
        <IconLinkButton icon="back" onPress={handleBack} buttonStyle={$back} />
        <View style={$contentContainer}>
          <Text tx="onboarding.resetPassword.title" style={$title} />
          <Text tx="onboarding.resetPassword.subtitle" style={$subtitle} />
          <TextField
            value={password}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isPasswordHidden}
            placeholderTx="onboarding.resetPassword.password"
            inputWrapperStyle={$password}
            onChange={({ nativeEvent }) => setPassword(nativeEvent.text)}
            RightAccessory={PasswordRightAccessory}
            LeftAccessory={PasswordLeftAccessory}
            onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
          />
          <TextField
            ref={confirmPasswordInputRef}
            value={confirmPassword}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isConfirmPasswordHidden}
            placeholderTx="onboarding.resetPassword.confirmPassword"
            onChange={({ nativeEvent }) => setConfirmPassword(nativeEvent.text)}
            RightAccessory={ConfirmPasswordRightAccessory}
            LeftAccessory={PasswordLeftAccessory}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
          <Button tx="onboarding.resetPassword.resetButton"
            disabled={!isCanReset}
            pressedStyle={$button}
            textStyle={$buttonText}
            style={!isCanReset ? [$button, $disabled] : $button}
            onPressIn={handleReset}
          />
        </View>
      </>
    )
  }

  const renderSuccess = () => {
    return (
      <View style={$successContainer}>
        <Icon icon="changePassword" />
        <Text tx="onboarding.resetPassword.success.title" style={[$title, $alignCenter]} />
        <Text tx="onboarding.resetPassword.success.subtitle" style={[$subtitle, $alignCenter]} />
        <Button
          tx="onboarding.resetPassword.success.button"
          pressedStyle={[$button, $successButton]}
          textStyle={$buttonText}
          style={[$button, $successButton]}
          onPressIn={handleBackToLogin}
        />
      </View>
    )
  }

  return (
    <Screen preset="fixed" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      {isSuccess ? renderSuccess() : renderGeneral()}
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral900,
  paddingTop: 36
}

const $successContainer: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral900,
  paddingTop: 102,
  alignItems: "center",
  paddingHorizontal: 36
}

const $title: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 36,
  fontFamily: typography.primary.normal,
  lineHeight: 44,
  paddingBottom: 24,
  paddingTop: 36
}

const $subtitle: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: 18,
  fontFamily: typography.primary.normal,
  lineHeight: 22,
  paddingBottom: 36,
}

const $contentContainer: ViewStyle = {
  width: "100%",
  paddingHorizontal: 36,
  paddingBottom: 52
}

const $button: ViewStyle = {
  width: "100%",
  height: 64,
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: 28,
  borderWidth: 0,
  marginTop: 36
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 22
}

const $successButton: ViewStyle = {
  width: "50%",
}

const $disabled: ViewStyle = {
  opacity: .5
}

const $back: ViewStyle = {
  marginLeft: 18
}

const $password: ViewStyle = {
  marginBottom: 18
}

const $alignCenter: TextStyle = {
  textAlign: "center"
}
