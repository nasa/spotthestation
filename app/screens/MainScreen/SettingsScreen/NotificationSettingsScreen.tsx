/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React from "react"
import { ViewStyle, TextStyle, ScrollView, Pressable, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Screen, Text, Toggle } from "../../../components"
import { colors, typography } from "../../../theme"
import { ExpandContainer } from "../components/ExpandContainer"

export const NotificationSettingsScreen = observer(function NotificationSettingsScreen() {
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
        accessibilityLabel="Notification settings scrollable us area"
        accessibilityHint="Notification settings scrollable us area"
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
          <Text tx="settings.notificationSettingsData.backButton" style={$backButtonText} />
        </Pressable>
        <Text tx="settings.notificationSettingsData.notificationTitle" style={$title} />
        <View style={$switchContainer}>
          <View 
            accessible
            accessibilityLabel="notification"
            accessibilityHint="notification"
            accessibilityRole="text"
            style={$labelContainer}
          >
            <Text tx="settings.notificationSettingsData.iisVisibleLabel" style={$label} />
          </View>
          <Toggle
            accessible
            accessibilityLabel="switch button"
            accessibilityHint="toggle notifications"
            variant="switch" 
            // value={value} 
            // onValueChange={onValueChange}
          />
        </View>
        <View style={$switchContainer}>
          <View 
            accessible
            accessibilityLabel="notification"
            accessibilityHint="notification"
            accessibilityRole="text"
            style={$labelContainer}
          >
            <Text tx="settings.notificationSettingsData.upcomingLabel" style={$label} />
            <Text tx="settings.notificationSettingsData.upcomingTip" style={$tip} />
          </View>
          <Toggle
            accessible
            accessibilityLabel="switch button"
            accessibilityHint="toggle notifications"
            variant="switch" 
            // value={value} 
            // onValueChange={onValueChange}
          />
        </View>
        <ExpandContainer title="settings.notificationSettingsData.notificationTypes" expandble={false}>
          <View style={$switchContainer}>
            <View 
              accessible
              accessibilityLabel="notification"
              accessibilityHint="notification"
              accessibilityRole="text"
              style={$labelContainer}
            >
              <Text tx="settings.notificationSettingsData.inAppLabel" style={$label} />
            </View>
            <Toggle
              accessible
              accessibilityLabel="switch button"
              accessibilityHint="toggle notifications"
              variant="switch" 
              // value={value} 
              // onValueChange={onValueChange}
            />
          </View>
        </ExpandContainer>
        <Text tx="settings.notificationSettingsData.privacyTitle" style={$title} />
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

const $title: TextStyle = {
  ...$text,
  fontSize: 36,
  lineHeight: 44,
  color: colors.palette.neutral250,
}

const $switchContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: 18,
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.neutral350,
}

const $labelContainer: ViewStyle = {
  width: "70%"
}

const $label: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 24,
  fontFamily: typography.primary.normal,
  lineHeight: 29,
}

const $tip: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: 18,
  fontFamily: typography.primary.light,
  lineHeight: 22,
}
