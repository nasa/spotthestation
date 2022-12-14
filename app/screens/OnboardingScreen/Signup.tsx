import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useMemo, useState } from "react"
import { Keyboard, TextStyle, View, ViewStyle } from "react-native"
import { Screen, TextField, Text, Button, Icon, TextFieldAccessoryProps, Toggle} from "../../components"
import { typography } from "../../theme"
import { colors } from "../../theme/colors"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import { IconLinkButton } from "./components/IconLinkButton"

export function Signup() {
  const navigation = useNavigation()

  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const [privacySwitchValue, setPrivacySwitchValue] = useState(false)
  const [isCanSignUp, setIsCanSignUp] = useState(false)

  useEffect(() => {
    if (password && email && phone && privacySwitchValue) setIsCanSignUp(true)
    else setIsCanSignUp(false)
  }, [password, email, phone, privacySwitchValue])

  const handleBack = () => navigation.goBack()
  const handleSignUp = () => navigation.navigate("SignupOTP" as never)

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

  const EmailLeftAccessory = useMemo(
    () =>
      function EmailLeftAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon="mail"
            size={28}
            color={colors.palette.neutral450}
            containerStyle={props.style}
          />
        )
      },
    [],
  )

  const PhoneLeftAccessory = useMemo(
    () =>
      function PhoneLeftAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon="smartphone"
            size={28}
            color={colors.palette.neutral450}
            containerStyle={props.style}
          />
        )
      },
    [],
  )

  return (
    <Screen preset="fixed" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      <IconLinkButton icon="back" onPress={handleBack} buttonStyle={$back} />
      <View style={$contentContainer}>
        <Text tx="onboarding.signUp.title" style={$title} />
        <TextField
          value={email}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
          placeholderTx="onboarding.signUp.email"
          inputWrapperStyle={$inputWrapper}
          onChange={({ nativeEvent }) => setEmail(nativeEvent.text)}
          LeftAccessory={EmailLeftAccessory}
        />
        <TextField
          value={phone}
          autoCapitalize="none"
          autoComplete="tel"
          autoCorrect={false}
          keyboardType="phone-pad"
          secureTextEntry={false}
          placeholderTx="onboarding.signUp.phone"
          inputWrapperStyle={$inputWrapper}
          onChange={({ nativeEvent }) => setPhone(nativeEvent.text)}
          LeftAccessory={PhoneLeftAccessory}
        />
        <TextField
          value={password}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          secureTextEntry={isPasswordHidden}
          placeholderTx="onboarding.signUp.password"
          inputWrapperStyle={$inputWrapper}
          onChange={({ nativeEvent }) => setPassword(nativeEvent.text)}
          RightAccessory={PasswordRightAccessory}
          LeftAccessory={PasswordLeftAccessory}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        <View style={$policiesContainer}>
          <View style={$policiesTextContainer}>
            <View style={$policiesTextRowContainer}>
              <Text tx="onboarding.signUp.privacy.first" style={$policiesText} />
              <Text tx="onboarding.signUp.privacy.tos" style={$policiesLink} />
            </View>
            <View style={$policiesTextRowContainer}>
              <Text tx="onboarding.signUp.privacy.second"style={$policiesText} />
              <Text tx="onboarding.signUp.privacy.pp" style={$policiesLink} />
            </View>
          </View>
          <Toggle
            variant="switch"
            value={privacySwitchValue}
            onValueChange={setPrivacySwitchValue}
          />
        </View>
        <Button tx="onboarding.signUp.button"
          disabled={!isCanSignUp}
          pressedStyle={$button}
          textStyle={$buttonText}
          style={!isCanSignUp ? [$button, $disabled] : $button}
          onPressIn={handleSignUp}
        />
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral900
}

const $contentContainer: ViewStyle = {
  width: "100%",
  paddingHorizontal: 36,
  paddingBottom: 52
}

const $title: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 36,
  fontFamily: typography.primary.normal,
  lineHeight: 44,
  paddingBottom: 24,
  paddingTop: 36
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

const $disabled: ViewStyle = {
  opacity: .5
}

const $inputWrapper: ViewStyle = {
  marginBottom: 18
}

const $back: ViewStyle = {
  marginLeft: 18,
  marginTop: 36
}

const $policiesContainer: ViewStyle = {
  width: '100%',
  paddingVertical: 18,
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderColor: colors.palette.neutral350,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
}

const $policiesTextContainer: ViewStyle = {
  width: "70%",
}

const $policiesTextRowContainer: ViewStyle = {
  flexDirection: "row",
}

const $policiesText: TextStyle = {
  color: colors.palette.neutral450,
  paddingRight: 3,
  fontSize: 18,
  fontFamily: typography.primary.light,
  lineHeight: 22,
}

const $policiesLink: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.normal,
  lineHeight: 22,
}
