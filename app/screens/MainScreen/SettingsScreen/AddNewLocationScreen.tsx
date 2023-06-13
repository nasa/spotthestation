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
import { colors, fontSizes, lineHeights, scale, spacing, typography } from "../../../theme"
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
  const { savedLocations, setSavedLocations, setNewSavedLocation } = useStores()
  const topInset = useSafeAreaInsets().top
  const { params: { defaultLocation } } = useRoute()

  const addressRef = useRef<GooglePlacesAutocompleteRef>()
  const [isFocus, setIsFocus] = useState(false)
  const [isRemove, setIsRemove] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [titleValue, setTitleValue] = useState(defaultLocation?.title || "")
  const [location, setLocation] = useState<LocationType>({...defaultLocation})

  const $headerStyleOverride: TextStyle = {
    top: topInset + scale(24),
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
    
    if (defaultLocation) {
      res = res.filter(item => item.title !== defaultLocation.title)
      res.push(location as any)
      setSavedLocations(res)
    } else {
      setNewSavedLocation(location).catch((error) => {
        Snackbar.show({
          text: error,
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: 'Ok',
            textColor: 'green',
            onPress: () => {
              Snackbar.dismiss()
            },
          },
        })
      })
    }
    
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
    navigation.navigate('LocationSettings' as never, { update: Date.now() } as never)
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
            allowFontScaling: false,
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
  marginBottom: scale(36)
}

const $buttonsContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: "center",
  justifyContent: "space-between",
}

const $scrollContainer: ViewStyle = { 
  paddingHorizontal: scale(18),
}

const $button: ViewStyle = {
  backgroundColor: colors.palette.neutral550,
  width: scale(42),
  height: scale(42)
}

const $text: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: fontSizes[18],
  lineHeight: lineHeights[22],
  color: colors.palette.neutral450,
  textAlign: 'left',
  paddingBottom: scale(24)
}

const $title: TextStyle = {
  ...$text,
  fontSize: fontSizes[36],
  lineHeight: lineHeights[44],
  color: colors.palette.neutral250,
}

const $locations: ViewStyle = {
  borderWidth: scale(1.5),
  borderColor: "transparent",
  borderRadius: scale(28),
  height: scale(56),
  backgroundColor: colors.palette.neutral350,
  overflow: "hidden",
  marginBottom: scale(18)
}

const $active: ViewStyle = {
  borderWidth: scale(1.5),
  borderColor: colors.palette.buttonBlue,
  backgroundColor: colors.palette.overlayBlue,
}

const $locationsListContainer: ViewStyle = {
  borderRadius: scale(12),
  backgroundColor: colors.palette.neutral550,
  overflow: "hidden",
  width: "85%",
  alignSelf: "center",
  marginTop: scale(3)
}

const $dropdownLeftAccessory: ViewStyle = {
  marginStart: scale(spacing.large),
  height: scale(56),
  justifyContent: "center",
  alignItems: "center",
}

const $dropdownRightAccessory: ViewStyle = {
  marginEnd: scale(spacing.large),
  height: scale(56),
  justifyContent: "center",
  alignItems: "center",
}

const $dropdownSelected: TextStyle = {
  color: colors.palette.neutral250,
}

const $locationsRow: TextStyle = {
  backgroundColor: 'transparent',
  paddingHorizontal: scale(spacing.large)
}

const $locationsRowText: TextStyle = {
  fontSize: fontSizes[18],
  lineHeight: lineHeights[22],
  color: colors.palette.neutral250,
  
}

const $dropdownText: TextStyle = {
  flex: 1,
  height: scale(56),
  alignSelf: "stretch",
  fontFamily: typography.primary.normal,
  fontSize: fontSizes[18],
  lineHeight: lineHeights[22],
  paddingHorizontal: 0,
  marginHorizontal: scale(spacing.small),
  textAlignVertical: "center",
  borderRadius: 0,
  backgroundColor: "transparent"
}

const $save: ViewStyle = {
  width: "100%",
  height: scale(56),
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: scale(28),
  borderWidth: 0,
  marginVertical: scale(24)
}

const $saveText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: fontSizes[18],
  fontFamily: typography.primary.medium,
  lineHeight: lineHeights[21],
}

const $modal: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-end',
  left: 0,
  margin: 0
}

const $removeButton: ViewStyle = {
  width: scale(56),
  height: scale(56),
  backgroundColor: colors.palette.nasaRed,
  alignSelf: 'center'
}
