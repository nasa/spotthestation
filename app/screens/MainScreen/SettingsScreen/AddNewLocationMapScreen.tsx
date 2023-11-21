import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { ViewStyle, TextStyle, View, Pressable, TextInput } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Modal from "react-native-modal"
import { Icon, Screen, Text, Button } from "../../../components"
import { colors, spacing, typography } from "../../../theme"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import { translate } from "../../../i18n/translate"
import Snackbar from "react-native-snackbar"
import { LatLng } from "react-native-maps"
import { api, LocationType } from "../../../services/api"
import { MapBox } from "../components/MapBox"
import { useStores } from "../../../models"
import { StyleFn, useStyles } from "../../../utils/useStyles"
import { LocationAutocomplete } from "../../../components/LocationAutocomplete"

export const AddNewLocationMapScreen = observer(function AddNewLocationMapScreen() {
  const {
    $headerStyleOverride,
    $container,
    $topButtonsContainer,
    $topContainer,
    $button,
    $locations,
    $active,
    $locationsListContainer,
    $dropdownSelected,
    $locationsRow,
    $locationsRowText,
    $dropdownText,
    $modal,
    $buttonText,
    $modalBodyContainer,
    $contentContainer,
    $close,
    $title,
    $modalButton,
    $map,
  } = useStyles(styles)

  const navigation = useNavigation()
  const { setNewSavedLocation, savedLocations } = useStores()
  const topInset = useSafeAreaInsets().top

  const addressRef = useRef<TextInput>()
  const [isFocus, setIsFocus] = useState(false)
  const [isSave, setIsSave] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [location, setLocation] = useState<LocationType>(null)
  const [marker, setMarker] = useState<LatLng>(null)

  const handleClear = () => {
    addressRef.current?.clear()
    setTextValue("")
    setLocation(null)
  }

  useEffect(() => {
    ;(async () => {
      if (marker) {
        const res = await api.reverseGeocode(marker.latitude, marker.longitude)
        if (res.kind !== "ok") return

        setLocation({
          location: { lat: marker.latitude, lng: marker.longitude },
          title: res.name || res.address || "Location",
          subtitle: res.address,
          osmPlaceId: String(res.osmPlaceId),
        })

        setTextValue(res.address)
        setIsSave(true)
      }
    })().catch((e) => console.log(e))
  }, [marker])

  const handleNavigate = () =>
    navigation.navigate("LocationSettings" as never, { update: Date.now() } as never)

  const handleSave = useCallback(() => {
    if (savedLocations.find((item) => item.title === location.title)) {
      Snackbar.show({
        text: translate("snackBar.locationExist"),
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: translate("snackBar.ok"),
          textColor: "green",
          onPress: () => {
            Snackbar.dismiss()
          },
        },
      })
      return
    }

    setNewSavedLocation(location).catch((error) => {
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: translate("snackBar.ok"),
          textColor: "green",
          onPress: () => {
            Snackbar.dismiss()
          },
        },
      })
    })

    Snackbar.show({
      text: translate("snackBar.locationSaved"),
      duration: Snackbar.LENGTH_LONG,
      action: {
        text: translate("snackBar.ok"),
        textColor: "green",
        onPress: () => {
          Snackbar.dismiss()
        },
      },
    })
    handleNavigate()
  }, [location])

  const headerStyle = { ...$headerStyleOverride }
  headerStyle.top = Number(headerStyle.top) + topInset

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={$container}
      style={{ backgroundColor: colors.palette.neutral900 }}
      statusBarStyle="light"
      dismissKeyboardOnPress={false}
    >
      <MapBox
        style={$map}
        withNightOverlay={false}
        onPress={({ geometry }) => {
          setMarker({ latitude: geometry.coordinates[1], longitude: geometry.coordinates[0] })
        }}
        markers={marker ? [marker] : []}
        zoomEnabled
      />
      <View style={[$topContainer, headerStyle]}>
        <View style={$topButtonsContainer}>
          <IconLinkButton
            icon="x"
            buttonStyle={$button}
            iconColor={colors.palette.neutral250}
            iconSize={20}
            onPress={() => handleNavigate()}
          />
        </View>
        <LocationAutocomplete
          ref={addressRef}
          placeholder={translate(
            "settings.locationSettingsData.addNewLocation.searchInputPlaceholder",
          )}
          onPress={(data) => {
            setLocation({
              title: data.name,
              subtitle: data.display_name,
              location: { lat: Number(data.lat), lng: Number(data.lon) },
              osmPlaceId: String(data.place_id),
              sightings: [],
            })
            setMarker({
              latitude: Number(data.lat),
              longitude: Number(data.lon),
            })
            setIsSave(true)
          }}
          styles={{
            textInputContainer: isFocus ? [$locations, $active] : $locations,
            textInput: {
              ...$dropdownText,
              ...$dropdownSelected,
            },
            listView: $locationsListContainer,
            row: $locationsRow,
            separator: { height: 0 },
            container: { flex: 0 },
          }}
          textInputProps={{
            allowFontScaling: false,
            placeholderTextColor: colors.palette.neutral450,
            value: location?.subtitle || textValue,
            onFocus: () => setIsFocus(true),
            onBlur: () => setIsFocus(false),
            onChangeText: (text) => setTextValue(text),
            clearButtonMode: "never",
          }}
          renderRow={({ description }) => {
            return (
              <Text
                text={description}
                style={$locationsRowText}
                ellipsizeMode="tail"
                numberOfLines={1}
              />
            )
          }}
          renderLeftAccessory={({ style }) => (
            <Icon icon="pin" size={28} color={colors.palette.neutral450} style={style} />
          )}
          renderRightAccessory={({ style }) =>
            isFocus &&
            textValue && (
              <Icon
                icon="xCircle"
                size={28}
                color={colors.palette.neutral450}
                style={style}
                onPress={handleClear}
              />
            )
          }
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
          <Pressable style={$close} onPress={() => setIsSave(!isSave)}>
            <Icon icon="x" size={20} color={colors.palette.neutral450} />
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

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $headerStyleOverride: TextStyle = {
    top: scale(18),
  }

  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    height: "100%",
  }

  const $topButtonsContainer: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: scale(36),
  }

  const $topContainer: ViewStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    paddingHorizontal: scale(36),
  }

  const $button: ViewStyle = {
    backgroundColor: colors.palette.neutral550,
    width: scale(42),
    height: scale(42),
  }

  const $locations: ViewStyle = {
    borderWidth: scale(1.5),
    borderColor: "transparent",
    borderRadius: scale(28),
    height: scale(56),
    backgroundColor: colors.palette.neutral350,
    overflow: "hidden",
    marginBottom: scale(18),
  }

  const $active: ViewStyle = {
    borderWidth: scale(1.5),
    borderColor: colors.palette.buttonBlue,
    backgroundColor: colors.palette.neutral350,
  }

  const $locationsListContainer: ViewStyle = {
    borderRadius: scale(12),
    backgroundColor: colors.palette.neutral550,
    overflow: "hidden",
    width: "85%",
    alignSelf: "center",
    marginTop: scale(3),
  }

  const $dropdownLeftAccessory: ViewStyle = {
    marginStart: spacing.large,
    height: scale(56),
    justifyContent: "center",
    alignItems: "center",
  }

  const $dropdownRightAccessory: ViewStyle = {
    marginEnd: spacing.large,
    height: scale(56),
    justifyContent: "center",
    alignItems: "center",
  }

  const $dropdownSelected: TextStyle = {
    color: colors.palette.neutral250,
  }

  const $locationsRow: TextStyle = {
    backgroundColor: "transparent",
    paddingHorizontal: scale(spacing.large),
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
    backgroundColor: "transparent",
  }

  const $modal: ViewStyle = {
    flex: 1,
    justifyContent: "flex-end",
    left: 0,
    margin: 0,
  }

  const $buttonText: TextStyle = {
    color: colors.palette.neutral100,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.medium,
    lineHeight: lineHeights[22],
  }

  const $modalBodyContainer: ViewStyle = {
    backgroundColor: colors.palette.neutral350,
    borderTopLeftRadius: scale(18),
    borderTopRightRadius: scale(18),
  }

  const $contentContainer: ViewStyle = {
    width: "100%",
    paddingHorizontal: scale(36),
    paddingBottom: scale(18),
    alignItems: "center",
    marginTop: scale(56),
  }

  const $close: ViewStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    padding: scale(18),
  }

  const $title: TextStyle = {
    textAlign: "center",
    color: colors.palette.neutral450,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.normal,
    lineHeight: lineHeights[22],
    paddingBottom: scale(24),
  }

  const $modalButton: ViewStyle = {
    width: "40%",
    height: scale(56),
    backgroundColor: colors.palette.buttonBlue,
    borderRadius: scale(28),
    borderWidth: 0,
    marginTop: scale(24),
    marginBottom: scale(24),
  }

  const $map: ViewStyle = { flex: 1 }

  return {
    $headerStyleOverride,
    $container,
    $topButtonsContainer,
    $topContainer,
    $button,
    $locations,
    $active,
    $locationsListContainer,
    $dropdownLeftAccessory,
    $dropdownRightAccessory,
    $dropdownSelected,
    $locationsRow,
    $locationsRowText,
    $dropdownText,
    $modal,
    $buttonText,
    $modalBodyContainer,
    $contentContainer,
    $close,
    $title,
    $modalButton,
    $map,
  }
}
