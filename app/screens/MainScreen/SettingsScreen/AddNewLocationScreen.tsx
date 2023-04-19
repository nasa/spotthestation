/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation, useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useRef, useState } from "react"
import { ViewStyle, TextStyle, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Modal from "react-native-modal"
import { Accessory, Button, Icon, Screen, Text, TextField } from "../../../components"
import { colors, spacing, typography } from "../../../theme"
import { LocationType } from "../../OnboardingScreen/SignupLocation"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import Config from "react-native-config"
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete"
import { translate } from "../../../i18n/translate"
import { RemoveLocationModal } from "./RemoveLocationModal"
import Snackbar from "react-native-snackbar"
import { useStores } from "../../../models"

export interface AddNewLocationScreenParams {
  defaultLocation?: LocationType
}

export const AddNewLocationScreen = observer(function AddNewLocationScreen() {
  const navigation = useNavigation()
  const { savedLocations, setSavedLocations } = useStores()
  const topInset = useSafeAreaInsets().top
  const { params: { defaultLocation } } = useRoute()

  const addressRef = useRef<GooglePlacesAutocompleteRef>()
  const [isFocus, setIsFocus] = useState(false)
  const [isRemove, setIsRemove] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [titleValue, setTitleValue] = useState(defaultLocation?.title || "")
  const [location, setLocation] = useState<LocationType>({...defaultLocation})

  const $headerStyleOverride: TextStyle = {
    top: topInset + 24,
  }

  const handleClear = () => {
    addressRef.current?.clear()
    setTextValue("")
    setLocation(null)
  }

  const handleSave = useCallback(() => {
    location.title = titleValue
    let res = [...savedLocations]
    if (res.find(item => item.title === titleValue)) {
      Snackbar.show({
        text: 'Location with this title already exist!',
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: 'Ok',
          textColor: 'green',
          onPress: () => {
            Snackbar.dismiss()
          },
        },
      })
      return
    }
    
    if (defaultLocation) res = res.filter(item => item.title !== defaultLocation.title)
    res.push(location as any)
    setSavedLocations(res)
    Snackbar.show({
      text: 'Location saved',
      duration: Snackbar.LENGTH_LONG,
      action: {
        text: 'Ok',
        textColor: 'green',
        onPress: () => {
          Snackbar.dismiss()
        },
      },
    })
  }, [titleValue, location, savedLocations])

  const handleRemove = useCallback(() => {
    setSavedLocations(savedLocations.filter(item => item.title !== defaultLocation.title))
    navigation.navigate('LocationSettings' as never, { update: Date.now() } as never)
  }, [defaultLocation, savedLocations])

  return (
    <Screen
      preset="fixed" 
      contentContainerStyle={[$container, $headerStyleOverride]} 
      style={{backgroundColor: colors.palette.neutral900}} 
      statusBarStyle="light"
    >
      <View
        accessible
        accessibilityLabel="Location settings scrollable us area"
        accessibilityHint="Location settings scrollable us area"
        accessibilityRole="scrollbar"
        style={$scrollContainer}
      >
        <View style={$topButtonsContainer}>
          <IconLinkButton icon="x" buttonStyle={$button} iconColor={colors.palette.neutral250} iconSize={20} onPress={() => navigation.navigate('LocationSettings' as never, { update: Date.now() } as never)} />
          {!defaultLocation && <IconLinkButton icon="map" buttonStyle={$button} iconColor={colors.palette.neutral250} iconSize={20} onPress={() => navigation.navigate('AddNewLocationMap' as never)} />}
        </View>
        <Text tx="settings.locationSettingsData.addNewLocation.generalTitle" style={$title} />
        <GooglePlacesAutocomplete
          ref={addressRef}
          placeholder={translate("settings.locationSettingsData.addNewLocation.searchInputPlaceholder")}
          query={{
            key: Config.GOOGLE_API_TOKEN,
            language: 'en',
          }}
          onPress={(data, details = null) => setLocation({ title: details.name, subtitle: details.formatted_address, location: details?.geometry?.location, sightings: [] })}
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
            value: location?.subtitle || textValue,
            onFocus: () => setIsFocus(true),
            onBlur: () => setIsFocus(false),
            onChangeText: (text) => setTextValue(text),
            clearButtonMode: "never"
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
          placeholderTx="settings.locationSettingsData.addNewLocation.nameInputPlaceholder"
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
        <View style={$buttonsContainer}>
          {defaultLocation && <IconLinkButton 
            icon="trash" 
            buttonStyle={$removeButton}
            viewStyle={$removeButton} 
            iconColor={colors.palette.neutral100} 
            iconSize={28} 
            onPress={() => setIsRemove(true)}
          />}
          <Button
            accessible
            accessibilityLabel="save button"
            accessibilityHint="save location"
            tx="settings.locationSettingsData.addNewLocation.saveButton"
            style={[$save, defaultLocation && { width: '80%'}]}
            textStyle={$saveText}
            pressedStyle={$save}
            onPress={handleSave}
          />
        </View>
        <Modal
          isVisible={isRemove}
          onBackdropPress={() => setIsRemove(!isRemove)}
          onSwipeComplete={() => setIsRemove(!isRemove)}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          swipeDirection="down"
          useNativeDriver
          useNativeDriverForBackdrop
          hideModalContentWhileAnimating
          propagateSwipe
          backdropOpacity={0.65}
          style={$modal}
        >
          <RemoveLocationModal onClose={() => setIsRemove(!isRemove)} onRemove={handleRemove} location={defaultLocation} />
        </Modal>
      </View>
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

const $buttonsContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: "center",
  justifyContent: "space-between",
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

const $save: ViewStyle = {
  width: "100%",
  height: 56,
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: 28,
  borderWidth: 0,
  marginVertical: 24
}

const $saveText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 21,
}

const $modal: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-end',
  left: 0,
  margin: 0
}

const $removeButton: ViewStyle = {
  width: 56,
  height: 56,
  backgroundColor: colors.palette.nasaRed,
  alignSelf: 'center'
}
