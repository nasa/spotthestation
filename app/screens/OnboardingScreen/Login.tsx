import { Link } from "@react-navigation/native"
import React, { useCallback, useMemo, useRef, useState } from "react"
import { ViewStyle, TextStyle, View, TextInput } from "react-native"
import Modal from "react-native-modal"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../../components"
import { Accessory } from "../../components/Accessory"
import { typography } from "../../theme"
import { colors } from "../../theme/colors"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import { IconLinkButton } from "./components/IconLinkButton"
import { NasaLogo } from "./components/NasaLogo"
import { ForgotPassword } from "./ForgotPassword"

export function Login() {
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")

  const passwordInput = useRef<TextInput>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loginError, setLoginError] = useState('')
  const [isPasswordHidden, setIsPasswordHidden] = useState(false)
  const [isForgotPassword, setIsForgotPassword] = useState(false)

  const isCanLogin = useMemo(() => email && password, [email, password])

  const handleLogin = useCallback(() => {
    if (!isCanLogin) return
    console.log('TODO')
  }, [isCanLogin])

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <>
            {Boolean(loginError) && <Icon
              icon="delete"
              size={28}
              color={colors.palette.neutral450}
              containerStyle={props.style}
              onPress={() => setPassword('')}
            />}
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
    [isPasswordHidden, loginError],
  )

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={$container}
      statusBarStyle="light"
      style={[$topInset, {backgroundColor: colors.palette.neutral900}]}
    >
      <NasaLogo />
      <Text tx={`onboarding.login.${loginError ? 'loginError' : 'title'}`} style={$title} />
      <View style={$bodyContainer}>
        <View style={$inputsContainer}>
          <TextField
            value={email}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            placeholderTx="onboarding.login.placeholder.email"
            onChange={({ nativeEvent }) => setEmail(nativeEvent.text)}
            inputWrapperStyle={loginError ? $error : {}}
            LeftAccessory={(props) => (
              <Accessory 
                props={props} 
                icon="mail"
                color={loginError ? colors.palette.nasaRed : colors.palette.neutral450} 
              />
            )}
            RightAccessory={(props) => loginError && (
              <Accessory 
                props={props} 
                icon="delete"
                onPress={() => setEmail('')}
              />
            )}
            onSubmitEditing={() => passwordInput.current?.focus()}
          />
          <TextField
            ref={passwordInput}
            value={password}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isPasswordHidden}
            placeholderTx="onboarding.login.placeholder.password"
            onChange={({ nativeEvent }) => setPassword(nativeEvent.text)}
            inputWrapperStyle={loginError ? $error : {}}
            RightAccessory={PasswordRightAccessory}
            LeftAccessory={(props) => (
              <Accessory 
                props={props} 
                icon="lock"
                color={loginError ? colors.palette.nasaRed : colors.palette.neutral450} 
              />
            )}
            onSubmitEditing={handleLogin}
          />
        </View>
        <View style={$loginButtonContainer}>
          <Button tx={"onboarding.login.forgotPassword"}
            pressedStyle={$forgotButton}
            textStyle={$forgot}
            style={$forgotButton}
            onPressIn={() => setIsForgotPassword(true)}
          />
          <Button tx="onboarding.login.loginButton"
            disabled={!isCanLogin}
            pressedStyle={$loginButton}
            textStyle={$loginButtonText}
            style={!isCanLogin ? [$loginButton, $disabled] : $loginButton}
            onPressIn={handleLogin}
          />
        </View>
        <View style={$loginWithContainer}>
          <Text tx={"onboarding.login.loginWith"} style={$loginWith} />
          <View style={$loginWithButtonsContainer}>
            <IconLinkButton icon="brandGoogle" buttonStyle={$buttonSize} />
            <IconLinkButton icon="brandFacebook" buttonStyle={$buttonSize} />
            <IconLinkButton icon="brandTwitter" buttonStyle={$buttonSize} />
          </View>
        </View>
        <View style={$questionContainer}>
          <Text tx={"onboarding.login.haveAccountQuestion"} style={$question} />
          <Link to={{ screen: "Signup" }}>
            <Text tx={"onboarding.login.signUpLink"} style={$link} />
          </Link>
        </View>
      </View>
      <Modal
        isVisible={isForgotPassword}
        onBackdropPress={() => setIsForgotPassword(!isForgotPassword)}
        onSwipeComplete={() => setIsForgotPassword(!isForgotPassword)}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        swipeDirection="down"
        useNativeDriver
        useNativeDriverForBackdrop
        hideModalContentWhileAnimating
        propagateSwipe
        backdropOpacity={0.65}
        style={$modal}
      >
        <ForgotPassword onClose={() => setIsForgotPassword(!isForgotPassword)} />
      </Modal>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral900,
}

const $modal: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-end',
  left: 0,
  margin: 0
}

const $bodyContainer: ViewStyle = {
  flex: 1,
  justifyContent: "space-between",
  paddingTop: 36,
  paddingBottom: 12,
}

const $title: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 36,
  fontFamily: typography.primary.normal,
  lineHeight: 42,
  paddingLeft: 36,
  paddingTop: 36
}

const $loginButtonContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 36
}

const $forgot: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.normal,
  lineHeight: 21,
}

const $forgotButton: ViewStyle = {
  backgroundColor: "transparent",
  borderWidth: 0
}

const $loginButton: ViewStyle = {
  width: 140,
  height: 56,
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: 28,
  borderWidth: 0
}

const $loginButtonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 21,
}

const $loginWithContainer: ViewStyle = {
  width: "60%",
  alignSelf: "center",
  alignItems: "center",
}

const $loginWithButtonsContainer: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingTop: 24
}

const $loginWith: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: 15,
  fontFamily: typography.primary.normal,
  lineHeight: 19,
}

const $buttonSize: TextStyle = {
  width: 64,
  height: 64
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

const $link: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 21,
}

const $disabled: ViewStyle = {
  opacity: .5
}

const $error: ViewStyle = {
  backgroundColor: colors.palette.inputError
}

const $inputsContainer: ViewStyle = {
  paddingHorizontal: 36,
  justifyContent: "space-between",
  height: 150
}
