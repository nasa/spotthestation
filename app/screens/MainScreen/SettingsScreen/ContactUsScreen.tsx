import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useState } from "react"
import { ViewStyle, TextStyle, ScrollView, Pressable } from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import email from 'react-native-email'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Button, Icon, Screen, Text, TextField } from "../../../components"
import { colors, spacing, typography } from "../../../theme"
import { translate } from "../../../i18n"
import Config from "../../../config"


export const ContactUsScreen = observer(function ContactUsScreen() {
  const navigation = useNavigation()
  const topInset = useSafeAreaInsets().top
  const [title, setTitle] = useState('')
  const [comments, setComments] = useState('')
  const [ideas, setIdeas] = useState('')

  const $headerStyleOverride: TextStyle = {
    top: topInset + 24,
  }

  const handleSend = useCallback(() => {
    email(Config.CONTACT_EMAIL, {
      subject: title,
      body: `Comments:\n\n\t${comments}\n\nImprovement Ideas:\n\n\t${ideas}`,
      checkCanOpen: false
    }).catch(console.error)
  }, [title, comments, ideas])

  return (
    <Screen
      preset="fixed" 
      contentContainerStyle={[$container, $headerStyleOverride]} 
      style={{backgroundColor: colors.palette.neutral900}} 
      statusBarStyle="light"
    >
      <ScrollView
        accessible
        accessibilityLabel="Contact scrollable us area"
        accessibilityHint="Contact scrollable us area"
        accessibilityRole="scrollbar"
        style={$scrollContainer} 
        scrollEnabled 
        contentContainerStyle={$scrollSontentContainerStyle}
      >
        <Pressable 
          accessible
          accessibilityLabel="Back button"
          accessibilityHint="Navigates to the previous screen"
          accessibilityRole="button"
          onPress={() => navigation.goBack()} 
          style={$backButton}
        >
          <Icon icon="caretLeft" color={colors.palette.neutral250} />
          <Text tx="settings.contactUsData.backButton" style={$backButtonText} />
        </Pressable>
        <Text
          accessible
          accessibilityLabel="title"
          accessibilityHint="title"
          accessibilityRole="text"
          tx="settings.contactUsData.title" 
          style={$header} 
        />
        <Dropdown
          accessibilityLabel="title select"
          style={[$dropdown, $inputMargin]}
          placeholderStyle={[$dropdownText, $dropdownPlaceholder]}
          selectedTextStyle={[$dropdownText, $dropdownSelected]}
          placeholder={translate("settings.contactUsData.titlePlaceholder")}
          data={[
            { label: "App Crashing", value: "App Crashing" },
            { label: "Feature Suggestions", value: "Feature Suggestions" },
            { label: "General Questions", value: "General Questions" }
          ]}
          itemContainerStyle={{
            backgroundColor: colors.palette.neutral350,
          }}
          containerStyle={$dropdownContainer}
          itemTextStyle={$dropdownText}
          activeColor={colors.palette.neutral450}
          value={title}
          labelField="label"
          valueField="value"
          onChange={({ value }) => {
            setTitle(value as string)
          }}
          renderRightIcon={() => (
            <Icon
              icon="chevronDown"
              size={28}
              color={colors.palette.neutral450}
              containerStyle={$dropdownRightAccessory}
            />
          )}
        />
        <TextField
          accessible
          accessibilityLabel="comments input"
          accessibilityHint="comments input"
          accessibilityRole="text"
          value={comments}
          multiline
          numberOfLines={12}
          textAlignVertical="top"
          placeholderTx="settings.contactUsData.commentsPlaceholder"
          inputWrapperStyle={[$inputMargin, $multiline]}
          style={[$multiline, $inputWithoutPadding]}
          onChangeText={setComments}
        />
        <TextField
          accessible
          accessibilityLabel="ideas input"
          accessibilityHint="ideas input"
          accessibilityRole="text"
          value={ideas}
          multiline
          numberOfLines={12}
          textAlignVertical="top"
          placeholderTx="settings.contactUsData.ideasPlaceholder"
          inputWrapperStyle={[$inputMargin, $multiline]}
          style={[$multiline, $inputWithoutPadding]}
          onChangeText={setIdeas}
        />
        <Button
          accessible
          accessibilityLabel="send button"
          accessibilityHint="Navigates to the mail app"
          tx="settings.contactUsData.sendButton"
          textStyle={$buttonText}
          style={!title || !comments || !ideas ? [$button, $disabled] : $button}
          pressedStyle={$button}
          onPress={handleSend}
          disabled={!title || !comments || !ideas}
        />
      </ScrollView>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  height: '100%'
}

const $backButton: ViewStyle = {
  flexDirection: "row",
  alignItems: 'center',
  paddingBottom: 11
}

const $scrollSontentContainerStyle: ViewStyle = { 
  flexGrow: 1,
  paddingBottom: 60
}

const $scrollContainer: ViewStyle = { 
  paddingHorizontal: 18,
}

const $text: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 18,
  lineHeight: 22,
  color: colors.palette.neutral450,
  textAlign: 'left',
  paddingBottom: 24
}

const $backButtonText: TextStyle = {
  ...$text,
  color: colors.palette.neutral250,
  paddingBottom: 0,
  paddingLeft: 5
}

const $header: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 36,
  lineHeight: 44,
  color: colors.palette.neutral250
}

const $dropdown: ViewStyle = {
  borderRadius: 28,
  height: 56,
  backgroundColor: colors.palette.neutral350,
  overflow: "hidden",
}

const $inputMargin: ViewStyle = {
  marginTop: 18
}

const $inputWithoutPadding: ViewStyle = {
  paddingTop: 0
}

const $disabled: ViewStyle = {
  opacity: .5
}

const $multiline: TextStyle = {
  height: 'auto',
  textAlignVertical: 'top',
  paddingTop: 10
}

const $dropdownContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  borderRadius: 10,
  marginTop: -40,
  borderWidth: 0
}

const $dropdownPlaceholder: TextStyle = {
  color: colors.palette.neutral450,
}

const $dropdownSelected: TextStyle = {
  color: colors.palette.neutral250,
}

const $dropdownText: TextStyle = {
  flex: 1,
  // alignSelf: "stretch",
  fontFamily: typography.primary.normal,
  fontSize: 18,
  paddingVertical: 0,
  paddingHorizontal: 0,
  marginHorizontal: spacing.small,
  textAlignVertical: "center"
}

const $dropdownRightAccessory: ViewStyle = {
  marginEnd: spacing.large,
  height: 56,
  justifyContent: "center",
  alignItems: "center",
}

const $button: ViewStyle = {
  width: "100%",
  height: 64,
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: 28,
  borderWidth: 0,
  marginVertical: 24
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 21,
}
