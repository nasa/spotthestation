import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React from "react"
import { ViewStyle, TextStyle, ScrollView, Pressable, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Screen, Text } from "../../../components"
import { colors, typography } from "../../../theme"

export const TermsAndConditionsScreen = observer(function TermsAndConditionsScreen() {
  const navigation = useNavigation()
  const topInset = useSafeAreaInsets().top

  const $headerStyleOverride: TextStyle = {
    top: topInset + 24,
  }

  return (
    <Screen
      preset="fixed" 
      contentContainerStyle={[$container, $headerStyleOverride]} 
      style={{backgroundColor: colors.palette.neutral900}} 
      statusBarStyle="light"
    >
      <ScrollView 
        accessible
        accessibilityLabel="terms And Conditions scrollable us area"
        accessibilityHint="terms And Conditions scrollable us area"
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
          <Icon icon="caretLeft" color={colors.palette.neutral250} size={24} />
          <Text tx="settings.termsAndConditionsData.backButton" style={$backButtonText} />
        </Pressable>
        <Pressable>
          <View
            accessible
            accessibilityLabel="terms And Conditions"
            accessibilityHint="terms And Conditions"
            accessibilityRole="text"
          >
            <Text tx="settings.termsAndConditionsData.title" style={$title} />
            <Text tx="settings.termsAndConditionsData.intro" style={$text} />
            <Text tx="settings.termsAndConditionsData.subtitle" style={$subtitle} />
            <Text tx="settings.termsAndConditionsData.text" style={$text} />
            <Text tx="settings.termsAndConditionsData.subtitle" style={$subtitle} />
            <Text tx="settings.termsAndConditionsData.text" style={$text} />
            <Text tx="settings.termsAndConditionsData.subtitle" style={$subtitle} />
            <Text tx="settings.termsAndConditionsData.text" style={$text} />
          </View>
        </Pressable>
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

const $title: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 36,
  lineHeight: 44,
  color: colors.palette.neutral250,
  textAlign: 'left',
  paddingBottom: 24
}

const $subtitle: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 28,
  lineHeight: 34,
  color: colors.palette.neutral250,
  textAlign: 'left',
  paddingBottom: 16
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
