import React, { useRef, useState } from "react"
import { PressableProps, TextStyle, ViewStyle } from "react-native"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Icon, Text } from "../../components"
import Config from "../../config"
import { translate } from "../../i18n"
import { colors, spacing, typography } from "../../theme"

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

export function SignupLocation() {
  const addressRef = useRef()
  const [isFocus, setIsFocus] = useState(false)

  const handleClear = () => {
    addressRef.current?.clear()
  }

  return (
    <>
      <GooglePlacesAutocomplete
        ref={addressRef}
        placeholder={translate("onboarding.completeProfile.location.selectLocation")}
        query={{
          key: Config.GOOGLE_API_TOKEN,
          language: 'en',
        }}
        onPress={(data, details = null) => console.log(data.description, details.geometry)}
        onFail={(error) => console.error(error)}
        enablePoweredByContainer={false}
        isRowScrollable={false}
        fetchDetails={true}
        autoFillOnNotFound={true}
        styles={{
          textInputContainer: isFocus ? [$locations, $active] : $locations,
          textInput: {
            ...$dropdownText,
            ...$dropdownSelected
          },
          listView: $locationsListContainer,
          row: $locationsRow,
          separator: { height: 0 }
        }}
        textInputProps={{
          placeholderTextColor: colors.palette.neutral450,
          onFocus: () => setIsFocus(true),
          onBlur: () => setIsFocus(false),
        }}
        renderRow={(rowData) => {
          const title = rowData.structured_formatting.main_text
          const address = rowData.structured_formatting.secondary_text
          return <Text text={`${title}, ${address}`} style={$locationsRowText} />
        }}
        renderLeftButton={() => (
          <Icon
            icon="search"
            size={28}
            color={colors.palette.neutral450}
            containerStyle={$dropdownLeftAccessory}
          />
        )}
        renderRightButton={() => isFocus && (
          <Icon
            icon="xCircle"
            size={28}
            color={colors.palette.neutral450}
            containerStyle={$dropdownRightAccessory}
            onPress={handleClear}
          />
        )}
      />
    </>
  )
}

const $locations: ViewStyle = {
  borderWidth: 1.5,
  borderColor: "transparent",
  borderRadius: 28,
  height: 56,
  backgroundColor: colors.palette.neutral350,
  overflow: "hidden",
}

const $active: ViewStyle = {
  borderWidth: 1.5,
  borderColor: colors.palette.buttonBlue,
  backgroundColor: colors.palette.overlayBlue,
}

const $locationsListContainer: ViewStyle = {
  borderRadius: 12,
  backgroundColor: colors.palette.neutral550,
  overflow: "hidden",
  width: "85%",
  alignSelf: "center",
  marginTop: 3
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

const $dropdownSelected: TextStyle = {
  color: colors.palette.neutral250,
}

const $locationsRow: TextStyle = {
  backgroundColor: 'transparent',
  paddingHorizontal: spacing.large
}

const $locationsRowText: TextStyle = {
  fontSize: 18,
  lineHeight: 22,
  color: colors.palette.neutral250,
  
}

const $dropdownText: TextStyle = {
  flex: 1,
  height: 56,
  alignSelf: "stretch",
  fontFamily: typography.primary.normal,
  fontSize: 18,
  lineHeight: 56,
  paddingHorizontal: 0,
  marginHorizontal: spacing.small,
  textAlignVertical: "center",
  borderRadius: 0,
  backgroundColor: "transparent"
}
