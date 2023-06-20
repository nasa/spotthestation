/* eslint-disable camelcase */
import React, { useEffect, useState } from "react"
import { ViewStyle, View, TextStyle, ScrollView, KeyboardAvoidingView, Platform } from "react-native"

import { Accessory, Icon, Text, TextField } from "../../../components"
import { colors, fontSizes, lineHeights, scale, typography } from "../../../theme"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { getCurrentLocation, getNearbyPlaces, getPlaces } from "../../../utils/geolocation"
import { LocationType } from "../../OnboardingScreen/SignupLocation"
import Snackbar from "react-native-snackbar"
import { useStores } from "../../../models"
import { SettingsItem } from "../components/SettingsItem"
import { useNavigation } from "@react-navigation/native"

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
  onLocationPress?: (value: LocationType) => void
}

export function SelectLocation({ onClose, onLocationPress, selectedLocation }: SelectLocationProps) {
  const { savedLocations, currentLocation, setCurrentLocation } = useStores()
  const navigation = useNavigation()
  const [isFocus, setIsFocus] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [nearby, setNearby] = useState<LocationType[]>([])
  const [searchResult, setSearchResult] = useState<LocationType[]>([])

  const $marginTop = useSafeAreaInsetsStyle(["top"], "margin")
  const $paddingBottom = useSafeAreaInsetsStyle(["bottom"], "padding")

  const getLocation = async () => {
    let location: LocationType = currentLocation

    if (!location) {
      location = await getCurrentLocation()
      setCurrentLocation(location).catch(e => console.log(e))
    }
    const res = await getNearbyPlaces(location.location, 100)

    setNearby(res)
  }

  const setPlaces = async (value: string) => {
    const locations = await getPlaces(value) 
    
    setSearchResult(Object.values(locations.map(item => ({...item, alert: true })).reduce((acc, obj) => {
      acc[obj.title] = obj
      return acc
    }, {})))
  }

  useEffect(() => {
    getLocation().catch((e: Error) => {
      Snackbar.show({
        text: e.message || "Some error occured",
        duration: Snackbar.LENGTH_SHORT,
      })
    })
  }, [])

  useEffect(() => {
    setPlaces(textValue).catch((e: Error) => {
      Snackbar.show({
        text: e.message || "Some error occured",
        duration: Snackbar.LENGTH_SHORT,
      })
    })
  }, [textValue])

  const isSelected = (value: LocationType) => {
    if (selectedLocation) {
      const { location: selected } = selectedLocation
      const { location } = value
      return selected.lat === location.lat && selected.lng === location.lng
    }
    
    return false
  }

  return (
    <View style={[$modalBodyContainer, $marginTop, $paddingBottom, $text]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : undefined}
        keyboardVerticalOffset={0}
        style={$keyboardAvoidingViewStyle}
      >
        <Icon icon="x" 
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
          tx="homeScreen.selectLocation.title" style={$title}
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
            <Accessory 
              icon="search"
              color={colors.palette.neutral450}
              style={style}
            />
          )}
          renderRightAccessory={(({ style }) => isFocus && textValue ? (
            <Accessory 
              style={style}
              icon={"xCircle"}
              onPress={() => setTextValue("")}
            />
          ) : (
            <Accessory 
              style={style}
              icon={"currentLocation"}
            />
          ))}
        />
        <View style={{ paddingHorizontal: 16, paddingTop: 10 }}>
          <SettingsItem 
            icon="settings" 
            title="settings.locationSettings" 
            onPress={() => {
              navigation.navigate('SettingsScreens' as never, { screen: "LocationSettings" } as never)
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
          style={$scrollContainer}
        >
          {(!isFocus && searchResult.length === 0) && (
            <>
              {Boolean(currentLocation) && <ExpandContainer title="homeScreen.selectLocation.current" expandble={false}>
                <ListItem 
                  icon="pin" 
                  title={currentLocation.title} 
                  subtitle={currentLocation.subtitle} 
                  selected={isSelected(currentLocation)} 
                  onPress={() => onLocationPress(currentLocation)} 
                />
              </ExpandContainer>}
              {Boolean(savedLocations.length) && <ExpandContainer title="homeScreen.selectLocation.saved" itemsCount={savedLocations.length}>
                {savedLocations.map(location => <ListItem 
                  key={location.subtitle}
                  icon="pin"
                  title={location.title} 
                  subtitle={location.subtitle}
                  selected={isSelected(location)} 
                  onPress={() => onLocationPress(location)}
                />)}
              </ExpandContainer>}
              {nearby.length > 0 && <ExpandContainer title="homeScreen.selectLocation.nearby" itemsCount={nearby.length} defaultValue={false}>
                  {nearby.map((place: LocationType) => 
                    <ListItem 
                      key={place.title} 
                      icon="pin" 
                      title={place.title} 
                      subtitle={place.subtitle} 
                      selected={isSelected(place)} 
                      onPress={() => onLocationPress(place)} 
                    />)
                  }
                </ExpandContainer>
              }
            </>
          )}
          {(isFocus || searchResult.length > 0) && 
            <ExpandContainer title="homeScreen.selectLocation.search" itemsCount={searchResult.length} expandble={false}>
              {searchResult.map((place: LocationType) => 
                <ListItem 
                  key={place.title}
                  icon="pin" 
                  title={place.title}
                  subtitle={place.subtitle}
                  selected={isSelected(place)}
                  onPress={() => onLocationPress(place)}
                />)
              }
            </ExpandContainer>
          }
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

const $modalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  borderTopLeftRadius: scale(18),
  borderTopRightRadius: scale(18),
  flex: 1
}

const $scrollContainer: ViewStyle = { 
  flex: 1, 
  paddingHorizontal: scale(36),
  marginBottom: scale(24)
}

const $close: ViewStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: scale(18),
  zIndex: 5
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
