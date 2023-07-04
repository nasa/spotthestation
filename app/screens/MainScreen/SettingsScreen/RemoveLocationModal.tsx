import React from "react"
import { ViewStyle, View, PressableProps, TextStyle } from "react-native"
import { Icon, Text, Button } from "../../../components"
import { colors, fontSizes, lineHeights, scale, typography } from "../../../theme"
import { LocationType } from "../../OnboardingScreen/SignupLocation"

export interface RemoveLocationModalProps {
  onClose?: PressableProps["onPress"]
  onRemove?: PressableProps["onPress"]
  location: LocationType
}

export function RemoveLocationModal({ onClose, onRemove, location }: RemoveLocationModalProps) {
  return (
    <View style={$modalBodyContainer}>
      <Icon
        icon="x"
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
        <Icon icon="removeLocation" size={60} />
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
  borderTopLeftRadius: scale(18),
  borderTopRightRadius: scale(18),
}

const $buttonsContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}

const $contentContainer: ViewStyle = {
  width: "100%",
  paddingHorizontal: scale(36),
  paddingBottom: scale(52),
}

const $close: ViewStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: scale(18),
  zIndex: 5,
}

const $generalIcon: ViewStyle = {
  marginVertical: scale(36),
  width: "100%",
  alignItems: "center",
}

const $locationTitle: TextStyle = {
  textAlign: "center",
  color: colors.palette.neutral250,
  fontSize: fontSizes[18],
  fontFamily: typography.primary.medium,
  lineHeight: lineHeights[22],
  paddingBottom: scale(5),
}

const $title: TextStyle = {
  textAlign: "center",
  color: colors.palette.neutral450,
  fontSize: fontSizes[18],
  fontFamily: typography.primary.normal,
  lineHeight: lineHeights[22],
  paddingBottom: scale(24),
}

const $locationAddress: TextStyle = {
  textAlign: "center",
  color: colors.palette.neutral450,
  fontSize: fontSizes[16],
  fontFamily: typography.primary.normal,
  lineHeight: lineHeights[19],
  paddingBottom: scale(36),
}

const $button: ViewStyle = {
  width: "40%",
  height: scale(64),
  backgroundColor: colors.palette.neutral550,
  borderRadius: scale(28),
  borderWidth: 0,
  marginTop: scale(24),
  marginBottom: scale(24),
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: fontSizes[18],
  fontFamily: typography.primary.medium,
  lineHeight: lineHeights[22],
}
