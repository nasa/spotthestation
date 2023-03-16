import React, { useCallback, useEffect, useRef, useState } from "react"
import { ActivityIndicator, Alert, PressableProps, TextStyle, View, ViewStyle } from "react-native"
import { GooglePlacesAutocomplete, Point, GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete"
import * as Location from "expo-location"
import { Icon, Text, Button } from "../../components"
import Config from "../../config"
import { translate } from "../../i18n"
import { colors, spacing, typography } from "../../theme"
import { getCurrentLocation } from "../../utils/geolocation"

export interface LocationType {
  title: string,
  subtitle: string,
  location: Point,
  alert?: boolean
}

enum Statuses {
  start = "start",
  detecting = "detecting",
  result = "result",
}

const defaultLocation: LocationType = { title: "Washington, D.C., United States", subtitle: "", location: { lat: 38.89511, lng: -77.03637 }}

export interface SignupLocationProps {
  /**
   * Data about location
   */
  value: LocationType
  /**
   * Action for a change location data
   */
  onValueChange: (value: LocationType) => void
  /**
   * Done button onPress
   */
  onAction: PressableProps["onPress"]
}

export function SignupLocation({ value, onValueChange, onAction }: SignupLocationProps ) {
  const addressRef = useRef<GooglePlacesAutocompleteRef>()
  const [isFocus, setIsFocus] = useState(false)
  const [status, setStatus] = useState(Statuses.start)
  const [textValue, setTextValue] = useState("")

  useEffect(() => {
    if (value.title) setStatus(Statuses.result)
    else if (status === Statuses.result && !value.title) setStatus(Statuses.start)
  }, [value])

  const handleClear = () => {
    addressRef.current?.clear()
    setTextValue("")
  }

  const handleDetect = async () => {
    setStatus(Statuses.detecting)

    if (await Location.hasServicesEnabledAsync()) {
      const location = await getCurrentLocation(() =>
        Alert.alert(
          translate("onboarding.completeProfile.location.permissionAlertTitle"),
          translate("onboarding.completeProfile.location.permissionAlertBody"),
          [{ text: 'OK', onPress: () => {
            onValueChange(defaultLocation)
            setStatus(Statuses.result)
          } }],
          { cancelable: false }
        )
      )
      if (location) onValueChange(location)
    } else {
      Alert.alert(
        translate("onboarding.completeProfile.location.serviceAlertTitle"),
        translate("onboarding.completeProfile.location.serviceAlertBody"),
        [{ text: 'OK', onPress: () => {
          onValueChange(defaultLocation)
          setStatus(Statuses.result)
        } }],
        { cancelable: false }
      )
    }
  }

  const renderStart = useCallback(() => {
    return (
      <>
        <Text
          accessible
          accessibilityLabel="location subtitle"
          accessibilityHint="location subtitle"
          accessibilityRole="text"
          tx="onboarding.completeProfile.location.subtitle" 
          style={$subtitle} 
        />
        <Button
          accessible
          accessibilityLabel="detect button"
          accessibilityHint="detecting current location"
          tx="onboarding.completeProfile.location.detectButton"
          pressedStyle={$button}
          style={$button}
          textStyle={$buttonText}
          onPress={handleDetect}
          renderLeftAccessory={({ style }) => (
            <Icon
              icon="currentLocation"
              size={24}
              style={style}
            />
          )}
        />
        <Text
          accessible
          accessibilityLabel="or"
          accessibilityHint="or"
          accessibilityRole="text"
          tx="onboarding.completeProfile.location.orLabel" 
          style={$orLabel}
        />
        <GooglePlacesAutocomplete
          ref={addressRef}
          placeholder={translate("onboarding.completeProfile.location.selectLocation")}
          query={{
            key: Config.GOOGLE_API_TOKEN,
            language: 'en',
          }}
          onPress={(data, details = null) => onValueChange({ title: details.name, subtitle: details.formatted_address, location: details?.geometry?.location })}
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
              icon="search"
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
      </>
    )
  }, [isFocus, textValue])

  const renderDetecting = useCallback(() => {
    return (
      <>
        <View style={$rowContainer}>
          <ActivityIndicator
            accessible
            accessibilityLabel="loader"
            accessibilityHint="Loading"
            accessibilityRole="progressbar"
            animating={status === Statuses.detecting}
            size="small"
            color={colors.palette.neutral450}
            style={$loader}
          />
          <Text 
            accessible
            accessibilityLabel="detecting"
            accessibilityHint="detecting current location"
            accessibilityRole="text"
            tx="onboarding.completeProfile.location.detecting" 
            style={$result}
          />
        </View>
      </>
    )
  }, [status])

  const renderResult = useCallback(() => {
    return (
      <>
        <View style={$rowContainer}>
          <Icon
            icon="pin"
            size={28}
            color={colors.palette.neutral450}
          />
          <Text
            accessible
            accessibilityLabel="address"
            accessibilityHint="display current address"
            accessibilityRole="text"
            text={value.title} 
            style={$result} 
            ellipsizeMode='tail' 
            numberOfLines={1} 
          />
          <Icon
            icon="trash"
            size={28}
            color={colors.palette.neutral450}
            onPress={() => onValueChange({ title: "", subtitle: "", location: { lat: null, lng: null }})}
          />
        </View>
        <Button
          accessible
          accessibilityLabel="Done button"
          accessibilityHint="navigate to main screen"
          tx="onboarding.completeProfile.location.doneButton"
          pressedStyle={$button}
          style={$button}
          textStyle={$buttonText}
          onPress={onAction}
        />
      </>
    )
  }, [value])

  const renderBody = useCallback(() => {
    if (status === Statuses.start) return renderStart()
    if (status === Statuses.detecting) return renderDetecting()
    if (status === Statuses.result) return renderResult()
    return ''
  }, [status, renderStart, renderDetecting, renderResult])

  return (
    <>
      <Text
        accessible
        accessibilityLabel="location title"
        accessibilityHint="location title"
        accessibilityRole="text"
        tx="onboarding.completeProfile.location.tittle"
        style={$title}
      />
      {renderBody()}
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
  lineHeight: 22,
  paddingHorizontal: 0,
  marginHorizontal: spacing.small,
  textAlignVertical: "center",
  borderRadius: 0,
  backgroundColor: "transparent"
}

const $title: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 36,
  fontFamily: typography.primary.normal,
  lineHeight: 44,
  paddingBottom: 24,
}

const $subtitle: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: 18,
  fontFamily: typography.primary.normal,
  lineHeight: 22,
  paddingBottom: 36,
}

const $orLabel: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: 16,
  fontFamily: typography.primary.normal,
  lineHeight: 19,
  textAlign: "center",
  marginVertical: 12
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

const $rowContainer: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between"
}

const $result: TextStyle = {
  flex: 1,
  paddingHorizontal: 18,
  color: colors.palette.neutral250,
  fontSize: 18,
  fontFamily: typography.primary.normal,
  lineHeight: 22,
  paddingBottom: 56,
}

const $loader: ViewStyle = {
  justifyContent: "flex-start"
}
