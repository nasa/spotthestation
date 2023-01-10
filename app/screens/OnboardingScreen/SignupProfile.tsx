import React, { useRef } from "react"
import { PressableProps, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import { translate } from "../../i18n"
import { Icon, TextField, Button, Text, Accessory } from "../../components"
import { colors, spacing, typography } from "../../theme"

export interface ProfileData {
  firstName: string,
  lastName: string,
  country: string,
  state: string,
  city: string,
}

export enum FieldTypes {
  firstName = "firstName",
  lastName = "lastName",
  country = "country",
  state = "state",
  city = "city",
}

export interface SignupProfileProps {
  /**
   * Profile data
   */
  value: ProfileData
  /**
   * Action for a change profile data
   */
  onValueChange: (value: string, field: FieldTypes) => void
  /**
   * Action to move to the next step.
   */
  onAction: PressableProps["onPress"] | TextInputProps["onSubmitEditing"]
}

export function SignupProfile({ value, onValueChange, onAction }: SignupProfileProps) {
  const lastNameRef = useRef<TextInput>(null)
  const stateRef = useRef<TextInput>(null)
  const cityRef = useRef<TextInput>(null)
  const countryRef = useRef<View>(null)
  const isNextDisabled = Object.keys(value).some(key => !value[key])

  return (
    <>
      <Text tx="onboarding.completeProfile.profile.tittle" style={$title} />
      <TextField
        value={value.firstName}
        autoCapitalize="words"
        autoComplete="name"
        autoCorrect={false}
        placeholderTx="onboarding.completeProfile.profile.firstName"
        onChangeText={(text) => onValueChange(text, FieldTypes.firstName)}
        renderLeftAccessory={({ style }) => <Accessory style={style} icon="user" />}
        onSubmitEditing={() => lastNameRef.current.focus()}
      />
      <TextField
        ref={lastNameRef}
        value={value.lastName}
        autoCapitalize="words"
        autoComplete="name"
        autoCorrect={false}
        placeholderTx="onboarding.completeProfile.profile.lastName"
        inputWrapperStyle={$inputMargin}
        onChangeText={(text) => onValueChange(text, FieldTypes.lastName)}
        renderLeftAccessory={({ style }) => <Accessory style={style} icon="user" />}
        onSubmitEditing={() => stateRef.current.focus()}
      />
      <Dropdown
        ref={countryRef}
        style={[$dropdown, $inputMargin]}
        placeholderStyle={[$dropdownText, $dropdownPlaceholder]}
        selectedTextStyle={[$dropdownText, $dropdownSelected]}
        placeholder={translate("onboarding.completeProfile.profile.country")}
        data={[{ label: "Canada", value: "canada" }, { label: "United States", value: "usa" }]}
        value={value.country}
        labelField="label"
        valueField="value"
        onChange={({ value }) => {
          onValueChange(value as string, FieldTypes.country)
          stateRef.current.focus()
        }}
        renderLeftIcon={() => (
          <Icon
            icon="globe"
            size={28}
            color={colors.palette.neutral450}
            containerStyle={$dropdownLeftAccessory}
          />
        )}
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
        ref={stateRef}
        value={value.state}
        autoCapitalize="none"
        autoComplete="postal-address-region"
        autoCorrect={false}
        placeholderTx="onboarding.completeProfile.profile.state"
        inputWrapperStyle={$inputMargin}
        onChangeText={(text) => onValueChange(text, FieldTypes.state)}
        renderLeftAccessory={({ style }) => <Accessory style={style} icon="map" />}
        onSubmitEditing={() => cityRef.current.focus()}
      />
      <TextField
        ref={cityRef}
        value={value.city}
        autoCapitalize="words"
        autoComplete="name"
        autoCorrect={false}
        placeholderTx="onboarding.completeProfile.profile.city"
        inputWrapperStyle={$inputMargin}
        onChangeText={(text) => onValueChange(text, FieldTypes.city)}
        renderLeftAccessory={({ style  }) => <Accessory style={style} icon="pin" />}
        onSubmitEditing={onAction as TextInputProps["onSubmitEditing"]}
      />
      <View style={$buttonsContainer}>
        <Button
          tx="onboarding.completeProfile.profile.skipButton"
          pressedStyle={[$button, $skipButton]}
          style={[$button, $skipButton]}
          textStyle={$buttonText}
          onPress={onAction as PressableProps["onPress"]}
        />
        <Button
          tx="onboarding.completeProfile.profile.nextButton"
          pressedStyle={$button}
          disabled={isNextDisabled}
          style={isNextDisabled ? [$button, $disabled] : $button}
          textStyle={$buttonText}
          onPress={onAction as PressableProps["onPress"]}
        />
      </View>
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

const $buttonsContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingTop: 36
}

const $button: ViewStyle = {
  width: 165,
  height: 56,
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: 28,
  borderWidth: 0
}

const $skipButton: ViewStyle = {
  backgroundColor: colors.palette.neutral550,
}

const $disabled: ViewStyle = {
  opacity: .5
}

const $inputMargin: ViewStyle = {
  marginTop: 18
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 21,
}

const $dropdown: ViewStyle = {
  borderRadius: 28,
  height: 56,
  backgroundColor: colors.palette.neutral350,
  overflow: "hidden",
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

const $dropdownLeftAccessory: ViewStyle = {
  marginStart: spacing.large,
  height: 56,
  justifyContent: "center",
  alignItems: "center",
}

const $dropdownRightAccessory: ViewStyle = {
  marginEnd: spacing.large,
  height: 56,
  justifyContent: "center",
  alignItems: "center",
}
