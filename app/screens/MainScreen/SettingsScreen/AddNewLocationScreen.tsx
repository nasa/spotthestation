/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useEffect, useRef, useState } from "react"
import { ViewStyle, TextStyle, ScrollView, Pressable, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Accessory, Icon, Screen, Text, TextField } from "../../../components"
import { colors, spacing, typography } from "../../../theme"
import { LocationType } from "../../OnboardingScreen/SignupLocation"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import * as storage from "../../../utils/storage"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import Config from "react-native-config"
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete"
import { translate } from "../../../i18n/translate"

export const AddNewLocationScreen = observer(function AddNewLocationScreen() {
  const navigation = useNavigation()
  const topInset = useSafeAreaInsets().top
  const bottomInset = useSafeAreaInsets().bottom

  const addressRef = useRef<GooglePlacesAutocompleteRef>()
  const [isFocus, setIsFocus] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [titleValue, setTitleValue] = useState("")
  const [location, setLocation] = useState(null)

  const $headerStyleOverride: TextStyle = {
    top: topInset + 24,
  }

  const handleClear = () => {
    addressRef.current?.clear()
    setTextValue("")
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
        <View style={$topButtonsContainer}>
          <IconLinkButton icon="x" buttonStyle={$button} iconColor={colors.palette.neutral250} iconSize={20} onPress={() => navigation.goBack()} />
          <IconLinkButton icon="map" buttonStyle={$button} iconColor={colors.palette.neutral250} iconSize={20} />
        </View>
        <Text tx="settings.locationSettingsData.addNewLocation.generalTitle" style={$title} />
        <GooglePlacesAutocomplete
          ref={addressRef}
          placeholder={translate("onboarding.completeProfile.location.selectLocation")}
          query={{
            key: Config.GOOGLE_API_TOKEN,
            language: 'en',
          }}
          onPress={(data, details = null) => setLocation({ title: details.name, subtitle: details.formatted_address, location: details?.geometry?.location })}
          onFail={(error) => console.error(error)}
          enablePoweredByContainer={false}
          isRowScrollable={false}
          fetchDetails={true}
          keepResultsAfterBlur={true}
          styles={{
            textInputContainer: isFocus ? [$locations, $active] : $locations,
            textInput: {
              ...$dropdownText,
              ...$dropdownSelected,
            },
            listView: $locationsListContainer,
            row: $locationsRow,
            separator: { height: 0 },
            container: { flex: 0, }
          }}
          textInputProps={{
            placeholderTextColor: colors.palette.neutral450,
            onFocus: () => setIsFocus(true),
            onBlur: () => setIsFocus(false),
            onChangeText: (text) => setTextValue(text)
          }}
          renderRow={({ description }) => {
            return <Text text={description} style={$locationsRowText} ellipsizeMode='tail' numberOfLines={1} />
          }}
          renderLeftButton={() => (
            <Icon
              icon="pin"
              size={28}
              color={colors.palette.neutral450}
              containerStyle={$dropdownLeftAccessory}
            />
          )}
          renderRightButton={() => isFocus && textValue && (
            <Icon
              icon="xCircle"
              size={28}
              color={colors.palette.neutral450}
              containerStyle={$dropdownRightAccessory}
              onPress={handleClear}
            />
          )}
        />
        <TextField
          accessible
          accessibilityLabel="location title input"
          accessibilityHint="location title input"
          accessibilityRole="text"
          value={titleValue}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTx="homeScreen.selectLocation.inputPlaceholder"
          onChangeText={setTitleValue}
          inputWrapperStyle={$locations}
          renderLeftAccessory={({ style }) => (
            <Accessory 
              icon="save"
              color={colors.palette.neutral450}
              style={style}
            />
          )}
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

const $topButtonsContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 36
}

const $scrollContentContainerStyle: ViewStyle = { 
  flexGrow: 1,
  paddingBottom: 60
}

const $scrollContainer: ViewStyle = { 
  paddingHorizontal: 18,
}

const $button: ViewStyle = {
  backgroundColor: colors.palette.neutral550,
  width: 42,
  height: 42
}

const $text: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 18,
  lineHeight: 22,
  color: colors.palette.neutral450,
  textAlign: 'left',
  paddingBottom: 24
}

const $title: TextStyle = {
  ...$text,
  fontSize: 36,
  lineHeight: 44,
  color: colors.palette.neutral250,
}

const $locations: ViewStyle = {
  borderWidth: 1.5,
  borderColor: "transparent",
  borderRadius: 28,
  height: 56,
  backgroundColor: colors.palette.neutral350,
  overflow: "hidden",
  marginBottom: 18
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
  lineHeight: 22,
  paddingHorizontal: 0,
  marginHorizontal: spacing.small,
  textAlignVertical: "center",
  borderRadius: 0,
  backgroundColor: "transparent"
}
