import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { Pressable, TextStyle, View, ViewStyle } from "react-native"
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field"
import { Screen, Text } from "../../components"
import { typography } from "../../theme"
import { colors } from "../../theme/colors"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import { IconLinkButton } from "./components/IconLinkButton"

export function SignupOTP() {
  const navigation = useNavigation()

  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")
  
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({value, cellCount: 4})
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  useEffect(() => {
    if (value.length === 4) navigation.navigate("SignupCompleteProfile" as never)
  }, [value])

  const handleBack = () => navigation.goBack()
  const handleSend = () => {
    // TODO
  }
  

  return (
    <Screen preset="fixed" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      <IconLinkButton icon="back" onPress={handleBack} buttonStyle={$back} />
      <View style={$contentContainer}>
        <Text tx="onboarding.otp.title" style={$title} />
        <Text tx="onboarding.otp.subtitle" style={$subtitle} />
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={4}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View style={[$cell, (isFocused || symbol) && $activeCell]}>
              <Text
                key={index}
                style={$cellText}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
        <Text text="01:25" style={$timer} />
        <View style={$questionContainer}>
          <Text tx="onboarding.otp.question" style={$question} />
          <Pressable onPress={handleSend}>
            <Text tx="onboarding.otp.resend" style={$link} />
          </Pressable>
        </View>
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral900,
  paddingTop: 36
}

const $contentContainer: ViewStyle = {
  width: "100%",
  paddingHorizontal: 36,
  paddingBottom: 52
}

const $back: ViewStyle = {
  marginLeft: 18
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

const $questionContainer: TextStyle = {
  flexDirection: "row",
  justifyContent: "center",
}

const $question: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: 18,
  fontFamily: typography.primary.light,
  lineHeight: 21,
  paddingRight: 3
}

const $link: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 21,
}

const $timer: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 36,
  fontFamily: typography.primary.medium,
  lineHeight: 44,
  alignSelf: "center",
  paddingVertical: 36
}

const $cell: ViewStyle = {
  width: 78,
  height: 78,
  backgroundColor: colors.palette.neutral350,
  borderRadius: 100,
  marginHorizontal: 2,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center"
}

const $cellText: TextStyle = {
  color: colors.palette.neutral100,
  textAlign: "center",
  textAlignVertical: "center",
  lineHeight: 78,
  fontSize: 36,
  fontFamily: typography.primary.normal,
}

const $activeCell: TextStyle = {
  borderWidth: 1.5,
  borderColor: colors.palette.buttonBlue,
  backgroundColor: colors.palette.overlayBlue,
}
