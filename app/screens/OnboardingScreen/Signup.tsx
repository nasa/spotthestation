import { useNavigation } from "@react-navigation/native"
import React, { useMemo, useState } from "react"
import { Keyboard, TextStyle, View, ViewStyle } from "react-native"
import { Screen, TextField, Text, Button, Toggle } from "../../components"
import { Accessory } from "../../components/Accessory"
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

  const isCanSignUp = useMemo(
    () => password && email && phone && privacySwitchValue,
    [password, email, phone, privacySwitchValue]
  )

  const handleBack = () => navigation.goBack()
  const handleSignUp = () => navigation.navigate("SignupOTP" as never)

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
          LeftAccessory={(props) => <Accessory props={props} icon="mail" />}
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
          LeftAccessory={(props) => <Accessory props={props} icon="smartphone" />}
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
          LeftAccessory={(props) => <Accessory props={props} icon="lock" />}
          RightAccessory={(props) => (
            <Accessory
              props={props}
              icon={isPasswordHidden ? "view" : "hidden"}
              onPress={() => setIsPasswordHidden(!isPasswordHidden)}
            />
          )}
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
  backgroundColor: colors.palette.neutral900,
  marginTop: 24
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
