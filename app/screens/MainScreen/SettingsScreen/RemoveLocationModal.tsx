import React from "react"
import { ViewStyle, View, PressableProps, TextStyle } from "react-native"
import { Icon, Text, Button } from "../../../components"
import { colors, typography } from "../../../theme"
import { LocationType } from "../../OnboardingScreen/SignupLocation"

export interface RemoveLocationModalProps {
  onClose?: PressableProps["onPress"]
  onRemove?: PressableProps["onPress"]
  location: LocationType
}

export function RemoveLocationModal({ onClose, onRemove, location }: RemoveLocationModalProps) {
  return (
    <View style={$modalBodyContainer}>
      <Icon icon="x" 
        accessible
        accessibilityLabel="x button"
        accessibilityHint="close modal"
        accessibilityRole="button"
        color={colors.palette.neutral450} 
        onPress={onClose} 
        containerStyle={$close} 
        size={36}
      />
      <View style={$generalIcon}>
        <Icon icon="removeLocation" />
      </View>
      <View style={$contentContainer}>
        <Text tx="settings.locationSettingsData.removeLocation.question" style={$title} />
        <Text text={location?.title} style={$locationTitle} />
        <Text text={location?.subtitle} style={$locationAddress} />
        
        <View style={$buttonsContainer}>
          <Button
            tx="settings.locationSettingsData.removeLocation.cancelButton"
            pressedStyle={$button}
            textStyle={$buttonText}
            style={$button}
            onPressIn={onClose}
          />
          <Button
            tx="settings.locationSettingsData.removeLocation.removeButton"
            pressedStyle={[$button, { backgroundColor: colors.palette.nasaRed }]}
            textStyle={$buttonText}
            style={[$button, { backgroundColor: colors.palette.nasaRed }]}
            onPressIn={onRemove}
          />
        </View>
      </View>
    </View>
  )
}

const $modalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  borderTopLeftRadius: 18,
  borderTopRightRadius: 18,
}

const $buttonsContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: "center",
  justifyContent: "space-between",
}

const $contentContainer: ViewStyle = {
  width: "100%",
  paddingHorizontal: 36,
  paddingBottom: 52
}

const $close: ViewStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: 18,
  zIndex: 5
}

const $generalIcon: ViewStyle = {
  marginVertical: 36,
  width: "100%",
  alignItems: "center"
}

const $locationTitle: TextStyle = {
  textAlign: "center",
  color: colors.palette.neutral250,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 22,
  paddingBottom: 5
}

const $title: TextStyle = {
  textAlign: "center",
  color: colors.palette.neutral450,
  fontSize: 18,
  fontFamily: typography.primary.normal,
  lineHeight: 22,
  paddingBottom: 24
}

const $locationAddress: TextStyle = {
  textAlign: "center",
  color: colors.palette.neutral450,
  fontSize: 16,
  fontFamily: typography.primary.normal,
  lineHeight: 19,
  paddingBottom: 36
}

const $button: ViewStyle = {
  width: '40%',
  height: 64,
  backgroundColor: colors.palette.neutral550,
  borderRadius: 28,
  borderWidth: 0,
  marginTop: 24,
  marginBottom: 24
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 22
}
