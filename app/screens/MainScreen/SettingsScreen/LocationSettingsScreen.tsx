/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React from "react"
import { ViewStyle, TextStyle, ScrollView, Pressable } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Screen, Text } from "../../../components"
import { colors, typography } from "../../../theme"

export const LocationSettingsScreen = observer(function LocationSettingsScreen() {
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
        accessibilityLabel="Location settings scrollable us area"
        accessibilityHint="Location settings scrollable us area"
        accessibilityRole="scrollbar"
        style={$scrollContainer} 
        scrollEnabled 
        contentContainerStyle={$scrollContentContainerStyle}
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
          <Text tx="settings.locationSettingsData.backButton" style={$backButtonText} />
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

const $scrollContentContainerStyle: ViewStyle = { 
  flexGrow: 1,
  paddingBottom: 60
}

const $scrollContainer: ViewStyle = { 
  paddingHorizontal: 18,
}

const $backButton: ViewStyle = {
  flexDirection: "row",
  alignItems: 'center',
  paddingBottom: 11
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
