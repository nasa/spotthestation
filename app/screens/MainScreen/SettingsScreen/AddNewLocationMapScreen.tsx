/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { ViewStyle, TextStyle, View, Pressable } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Modal from "react-native-modal"
import { Icon, Screen, Text, Button } from "../../../components"
import { colors, spacing, typography } from "../../../theme"
import { LocationType } from "../../OnboardingScreen/SignupLocation"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import Config from "react-native-config"
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete"
import { translate } from "../../../i18n/translate"
import Snackbar from "react-native-snackbar"
import { LatLng } from "react-native-maps"
import { api } from "../../../services/api"
import { MapBox } from "../components/MapBox"
import { useStores } from "../../../models"

export const AddNewLocationMapScreen = observer(function AddNewLocationMapScreen() {
  const navigation = useNavigation()
  const { setNewSavedLocation } = useStores()
  const topInset = useSafeAreaInsets().top

  const addressRef = useRef<GooglePlacesAutocompleteRef>()
  const [isFocus, setIsFocus] = useState(false)
  const [isSave, setIsSave] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [location, setLocation] = useState<LocationType>(null)
  const [marker, setMarker] = useState<LatLng>(null)

  const $headerStyleOverride: TextStyle = {
    top: topInset + 18,
  }

  const handleClear = () => {
    addressRef.current?.clear()
    setTextValue("")
    setLocation(null)
  }

  useEffect(() => {
    if (marker) {
      api.getLocationByCoords(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${marker.latitude},${marker.longitude}&key=${Config.GOOGLE_API_TOKEN}`)
      .then((res) => {
        setLocation({ location: { lat: marker.latitude, lng: marker.longitude }, title: 'Location', subtitle: res.places.results[0].formatted_address })
        setTextValue(res.places.results[0].formatted_address)
        setIsSave(true)
      })
      .catch(e => console.log(e))
    }
  }, [marker])

  const handleSave = useCallback(() => {
    setNewSavedLocation(location).then(() => {
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
    }).catch((error) => {
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
  }, [location])

  return (
    <Screen
      preset="fixed" 
      contentContainerStyle={$container} 
      style={{backgroundColor: colors.palette.neutral900}} 
      statusBarStyle="light"
    >
      <MapBox 
        style={{ flex: 1 }} 
        withNightOverlay={false} 
        onPress={({ geometry }) => setMarker({latitude: geometry.coordinates[1], longitude: geometry.coordinates[0]})} 
        markers={marker ? [marker] : []} 
        zoomEnabled
      />
      <View style={[$topContainer, $headerStyleOverride]}>
        <View style={$topButtonsContainer}>
          <IconLinkButton icon="x" buttonStyle={$button} iconColor={colors.palette.neutral250} iconSize={20} onPress={() => navigation.navigate('LocationSettings' as never, { update: Date.now() } as never)} />
        </View>
        <GooglePlacesAutocomplete
          ref={addressRef}
          placeholder={translate("settings.locationSettingsData.addNewLocation.searchInputPlaceholder")}
          query={{
            key: Config.GOOGLE_API_TOKEN,
            language: 'en',
          }}
          onPress={(data, details = null) => {
            setLocation({ title: details.name, subtitle: details.formatted_address, location: details?.geometry?.location, sightings: [] })
            setMarker({ latitude: details?.geometry?.location?.lat, longitude: details?.geometry?.location?.lng })
            setIsSave(true)
          }}
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
      </View>
      
      <Modal
        isVisible={isSave}
        onBackdropPress={() => setIsSave(!isSave)}
        onSwipeComplete={() => setIsSave(!isSave)}
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
        <View style={$modalBodyContainer}>
          <Pressable
            style={$close}
            onPress={() => setIsSave(!isSave)}
          >
            <Icon icon="x" color={colors.palette.neutral450} />
          </Pressable>
          <View style={$contentContainer}>
            <Text text={location?.subtitle} style={$title} />
            <Button
              tx="settings.locationSettingsData.addNewLocation.confirnModalButton"
              pressedStyle={$modalButton}
              textStyle={$buttonText}
              style={$modalButton}
              onPressIn={handleSave}
            /> 
          </View>
        </View>
      </Modal>
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

const $topContainer: ViewStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  paddingHorizontal: 36
}

const $button: ViewStyle = {
  backgroundColor: colors.palette.neutral550,
  width: 42,
  height: 42
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
  backgroundColor: colors.palette.neutral350,
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

const $modal: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-end',
  left: 0,
  margin: 0
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 22
}

const $modalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  borderTopLeftRadius: 18,
  borderTopRightRadius: 18,
}

const $contentContainer: ViewStyle = {
  width: "100%",
  paddingHorizontal: 36,
  paddingBottom: 18,
  alignItems: 'center',
  marginTop: 56
}

const $close: ViewStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: 18
}

const $title: TextStyle = {
  textAlign: "center",
  color: colors.palette.neutral450,
  fontSize: 18,
  fontFamily: typography.primary.normal,
  lineHeight: 22,
  paddingBottom: 24
}

const $modalButton: ViewStyle = {
  width: '40%',
  height: 56,
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: 28,
  borderWidth: 0,
  marginTop: 24,
  marginBottom: 24
}
