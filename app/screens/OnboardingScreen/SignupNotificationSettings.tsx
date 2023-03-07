import React from "react"
import { PressableProps, TextStyle, View, ViewStyle } from "react-native"
import { Text, Button, Icon, Toggle } from "../../components"
import { colors, typography } from "../../theme"

export interface SignupNotificationSettingsProps {
  /**
   * Is notifications on/off
   */
  value: boolean
  /**
   * Action for a change notification settings
   */
  onValueChange: (value: boolean) => void
  /**
   * Action to move to the next step.
   */
  onAction: PressableProps["onPress"]
}

export function SignupNotificationSettings({ value, onValueChange, onAction }: SignupNotificationSettingsProps) {
  return (
    <>
      <Text 
        accessible
        accessibilityLabel="detecting"
        accessibilityHint="detecting current location"
        accessibilityRole="text"
        tx="onboarding.completeProfile.notification.tittle" 
        style={$title}
      />
      <View style={$valueContainer}>
        <Icon icon="tv" size={24} containerStyle={$icon} />
        <View style={$switchContainer}>
          <View 
            accessible
            accessibilityLabel="notification"
            accessibilityHint="notification"
            accessibilityRole="text"
            style={$labelContainer}
          >
            <Text tx="onboarding.completeProfile.notification.label" style={$label} />
            <Text tx="onboarding.completeProfile.notification.tip" style={$tip} />
          </View>
          <Toggle
            accessible
            accessibilityLabel="switch button"
            accessibilityHint="toggle notifications"
            variant="switch" 
            value={value} 
            onValueChange={onValueChange}
          />
        </View>
      </View>
      <Button
        accessible
        accessibilityLabel="next button"
        accessibilityHint="navigate to location detection"
        tx="onboarding.completeProfile.notification.nextButton"
        pressedStyle={$button}
        style={$button}
        textStyle={$buttonText}
        onPress={onAction}
      />
    </>
  )
}

const $title: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 36,
  fontFamily: typography.primary.normal,
  lineHeight: 42,
  paddingBottom: 36
}

const $button: ViewStyle = {
  width: "100%",
  height: 56,
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: 28,
  borderWidth: 0
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 21,
}

const $valueContainer: ViewStyle = {
  flexDirection: "row",
  marginBottom: 36
}

const $switchContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: 18,
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.neutral350,
  flex: 1
}

const $labelContainer: ViewStyle = {
  width: "70%"
}

const $label: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 16,
  fontFamily: typography.primary.normal,
  lineHeight: 21,
}

const $tip: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: 16,
  fontFamily: typography.primary.light,
  lineHeight: 21,
}

const $icon: ViewStyle = {
  marginRight: 18
}
