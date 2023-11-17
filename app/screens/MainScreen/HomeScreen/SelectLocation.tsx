import { StyleFn, useStyles } from "../../../utils/useStyles"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import {
  ViewStyle,
  View,
  TextStyle,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native"
import Modal from "react-native-modal"
import { Accessory, Icon, Text, TextField } from "../../../components"
import { colors, typography } from "../../../theme"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { getCurrentLocation } from "../../../utils/geolocation"
import Snackbar from "react-native-snackbar"
import debounce from "lodash/debounce"
import { useStores } from "../../../models"
import { SettingsItem } from "../components/SettingsItem"
import { useNavigation } from "@react-navigation/native"
import { RemoveLocationModal } from "../SettingsScreen/RemoveLocationModal"
import { translate } from "../../../i18n"
import { RefreshButton } from "./RefreshButton"
import { api, LocationType } from "../../../services/api"
import { GooglePlaceData } from "react-native-google-places-autocomplete"
import { v4 as uuidv4 } from "uuid"

export interface SelectLocationProps {
  /**
   * A current selected location.
   */
  selectedLocation?: LocationType
  /**
   * A function for closing modal.
   */
  onClose?: () => void
  /**
   * A function for select new location.
   */
  onChangeLocation?: (value: LocationType) => void
}

export function SelectLocation({
  onClose,
  onChangeLocation,
  selectedLocation,
}: SelectLocationProps) {
  const {
    $modalBodyContainer,
    $scrollContainer,
    $close,
    $title,
    $text,
    $locations,
    $active,
    $keyboardAvoidingViewStyle,
    $modal,
    $settingsContainer,
    $refreshButton,
  } = useStyles(styles)

  const {
    savedLocations,
    currentLocation,
    setCurrentLocation,
    setSavedLocations,
    setIsCurrentLocationUpdating,
    isCurrentLocationUpdating,
  } = useStores()
  const navigation = useNavigation()
  const [isFocus, setIsFocus] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [toRemove, setToRemove] = useState<LocationType>(null)
  const [searchResult, setSearchResult] = useState<GooglePlaceData[]>([])
  const [isRemove, setIsRemove] = useState(false)
  const [isSearchCurrentLocationUpdating, setIsSearchCurrentLocationUpdating] = useState(false)
  const [autocompleteToken, setAutocompleteToken] = useState(uuidv4())

  const $marginTop = useSafeAreaInsetsStyle(["top"], "margin")
  const $paddingBottom = useSafeAreaInsetsStyle(["bottom"], "padding")

  const getLocation = async () => {
    let location: LocationType = currentLocation

    if (!location) {
      location = await getCurrentLocation(() => ({}))
      const isSameLocation =
        location?.location.lat === currentLocation?.location.lat &&
        location?.location.lng === currentLocation?.location.lng
      if (!location || isSameLocation) return
      setCurrentLocation(location).catch((e) => console.log(e))
    }
  }

  const setSearchToCurrentLocation = async () => {
    setIsSearchCurrentLocationUpdating(true)
    try {
      const loc = await getCurrentLocation(() => ({}))
      if (!loc) return setIsSearchCurrentLocationUpdating(false)
      setTextValue(loc.subtitle)
    } catch (e) {
      console.error(e)
    }

    setIsSearchCurrentLocationUpdating(false)
  }

  const setPlaces = async (value: string) => {
    if (value === "") {
      setSearchResult([])
      return
    }

    const locations = await api.getPlaces(value, autocompleteToken)
    if (locations.kind !== "ok") return

    setSearchResult(
      Object.values(
        locations.places.reduce((acc, obj) => {
          acc[obj.description] = obj
          return acc
        }, {}),
      ),
    )
  }

  const updateCurrentLocation = useCallback(async () => {
    setIsCurrentLocationUpdating(true)
    try {
      const location = await getCurrentLocation(() => ({}))
      const isSameLocation =
        location?.location.lat === currentLocation?.location.lat &&
        location?.location.lng === currentLocation?.location.lng
      if (!location || isSameLocation) return setIsCurrentLocationUpdating(false)
      await setCurrentLocation(location)
    } catch (e) {
      setIsCurrentLocationUpdating(false)
      console.log(e)
    }
  }, [currentLocation])

  useEffect(() => {
    getLocation().catch((e: Error) => {
      Snackbar.show({
        text: e.message || translate("snackBar.defaultError"),
        duration: Snackbar.LENGTH_SHORT,
      })
    })
  }, [])

  const handleTextValue = useMemo(
    () =>
      debounce((value: string) => {
        setPlaces(value).catch((e: Error) => {
          Snackbar.show({
            text: e.message || translate("snackBar.defaultError"),
            duration: Snackbar.LENGTH_SHORT,
          })
        })
      }, 400),
    [],
  )

  useEffect(() => {
    handleTextValue(textValue)
  }, [handleTextValue, textValue])

  const isSelected = (placeId: string) => {
    if (selectedLocation) {
      return selectedLocation.googlePlaceId === placeId
    }

    return false
  }

  const handleRemove = useCallback(
    (location: LocationType) => {
      if (selectedLocation && location.title === selectedLocation.title) {
        onChangeLocation(currentLocation)
      }
      setSavedLocations(savedLocations.filter((item) => item.title !== location.title))
      setIsRemove(false)
    },
    [savedLocations],
  )

  const handleAutocompleteItemPress = useCallback(
    async (item: GooglePlaceData) => {
      const res = await api.getLocationDetails(item.place_id, autocompleteToken)
      setAutocompleteToken(uuidv4())

      if (res.kind !== "ok") {
        Snackbar.show({
          text: translate("snackBar.defaultError"),
          duration: Snackbar.LENGTH_SHORT,
        })
        return
      }

      onChangeLocation({
        title: res.name,
        subtitle: res.address,
        location: res.location,
        googlePlaceId: item.place_id,
      })
    },
    [onChangeLocation],
  )

  const renderLocationAccessory = (style) => {
    return isSearchCurrentLocationUpdating ? (
      <ActivityIndicator style={style} />
    ) : (
      <Accessory style={style} icon={"currentLocation"} onPress={setSearchToCurrentLocation} />
    )
  }

  return (
    <View style={[$modalBodyContainer, $marginTop, $paddingBottom, $text]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={0}
        style={$keyboardAvoidingViewStyle}
      >
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
        <Text
          accessible
          accessibilityLabel="title"
          accessibilityHint="title"
          accessibilityRole="text"
          tx="homeScreen.selectLocation.title"
          style={$title}
        />
        <TextField
          accessible
          accessibilityLabel="search location"
          accessibilityHint="type for search location"
          accessibilityRole="search"
          value={textValue}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTx="homeScreen.selectLocation.inputPlaceholder"
          onChangeText={setTextValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          style={$text}
          inputWrapperStyle={isFocus ? [$locations, $active] : $locations}
          renderLeftAccessory={({ style }) => (
            <Accessory icon="search" color={colors.palette.neutral450} style={style} />
          )}
          renderRightAccessory={({ style }) =>
            isFocus && textValue ? (
              <Accessory style={style} icon={"xCircle"} onPress={() => setTextValue("")} />
            ) : (
              renderLocationAccessory(style)
            )
          }
        />
        <View style={$settingsContainer}>
          <SettingsItem
            icon="settings"
            title="settings.locationSettings"
            onPress={() => {
              navigation.navigate(
                "SettingsScreens" as never,
                { screen: "LocationSettings", fromHomeScreen: true } as never,
              )
              onClose()
            }}
            withUnderline={false}
          />
        </View>
        <ScrollView
          accessible
          accessibilityLabel="search location"
          accessibilityHint="type for search location"
          accessibilityRole="scrollbar"
          keyboardShouldPersistTaps="always"
          style={$scrollContainer}
        >
          {!isFocus && searchResult.length === 0 && (
            <>
              {Boolean(currentLocation) && (
                <ExpandContainer
                  button={
                    <RefreshButton
                      inProgress={isCurrentLocationUpdating}
                      containerStyle={$refreshButton}
                      onPress={updateCurrentLocation}
                    />
                  }
                  title="homeScreen.selectLocation.current"
                  expandble={false}
                >
                  <ListItem
                    icon="pin"
                    title={currentLocation.title}
                    subtitle={currentLocation.subtitle}
                    selected={isSelected(currentLocation.googlePlaceId)}
                    onPress={() => onChangeLocation(currentLocation)}
                  />
                </ExpandContainer>
              )}
              {Boolean(savedLocations.length) && (
                <ExpandContainer
                  title="homeScreen.selectLocation.saved"
                  itemsCount={savedLocations.length}
                >
                  {savedLocations.map((location) => (
                    <ListItem
                      key={location.subtitle}
                      icon="pin"
                      title={location.title}
                      subtitle={location.subtitle}
                      selected={isSelected(location.googlePlaceId)}
                      editable
                      onPress={() => onChangeLocation(location)}
                      onDelete={() => {
                        setIsRemove(true)
                        setToRemove(location)
                      }}
                      onEdit={() => {
                        navigation.navigate(
                          "SettingsScreens" as never,
                          { screen: "AddNewLocation", defaultLocation: location } as never,
                        )
                        onClose()
                      }}
                    />
                  ))}
                </ExpandContainer>
              )}
            </>
          )}
          {(isFocus || searchResult.length > 0) && (
            <ExpandContainer
              title="homeScreen.selectLocation.search"
              itemsCount={searchResult.length}
              expandble={false}
            >
              {searchResult.map((place) => (
                <ListItem
                  key={place.place_id}
                  icon="pin"
                  title={place.description}
                  selected={isSelected(place.place_id)}
                  onPress={() => handleAutocompleteItemPress(place)}
                />
              ))}
            </ExpandContainer>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
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
        <RemoveLocationModal
          onClose={() => setIsRemove(!isRemove)}
          onRemove={() => handleRemove(toRemove)}
          location={toRemove}
        />
      </Modal>
    </View>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $modalBodyContainer: ViewStyle = {
    backgroundColor: colors.palette.neutral350,
    borderTopLeftRadius: scale(18),
    borderTopRightRadius: scale(18),
    flex: 1,
  }

  const $scrollContainer: ViewStyle = {
    flex: 1,
    paddingHorizontal: scale(36),
    marginBottom: scale(24),
  }

  const $close: ViewStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    padding: scale(18),
    zIndex: 5,
  }

  const $title: TextStyle = {
    marginTop: scale(10),
    marginBottom: scale(24),
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[28],
    lineHeight: lineHeights[44],
    color: colors.palette.neutral250,
    paddingHorizontal: scale(36),
  }

  const $text: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[14],
  }

  const $locations: ViewStyle = {
    borderWidth: scale(1.5),
    borderColor: "transparent",
    borderRadius: scale(28),
    height: scale(56),
    backgroundColor: colors.palette.neutral550,
    overflow: "hidden",
    marginHorizontal: scale(36),
  }

  const $active: ViewStyle = {
    borderWidth: scale(1.5),
    borderColor: colors.palette.buttonBlue,
    backgroundColor: colors.palette.overlayBlue,
  }

  const $keyboardAvoidingViewStyle: ViewStyle = {
    flex: 1,
  }

  const $modal: ViewStyle = {
    flex: 1,
    justifyContent: "flex-end",
    left: 0,
    margin: 0,
  }

  const $settingsContainer: ViewStyle = { paddingHorizontal: 16, paddingTop: 10 }

  const $refreshButton = { marginLeft: 5 }

  return {
    $modalBodyContainer,
    $scrollContainer,
    $close,
    $title,
    $text,
    $locations,
    $active,
    $keyboardAvoidingViewStyle,
    $modal,
    $settingsContainer,
    $refreshButton,
  }
}
