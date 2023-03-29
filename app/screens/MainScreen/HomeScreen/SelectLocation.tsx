/* eslint-disable camelcase */
import React, { useEffect, useState } from "react"
import { ViewStyle, View, Pressable, PressableProps, TextStyle, ScrollView, KeyboardAvoidingView, Platform } from "react-native"

import { Accessory, Icon, Text, TextField } from "../../../components"
import { colors, typography } from "../../../theme"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { getCurrentLocation, getNearbyPlaces, getPlaces } from "../../../utils/geolocation"
import { LocationType } from "../../OnboardingScreen/SignupLocation"
import Snackbar from "react-native-snackbar"
import * as storage from "../../../utils/storage"

export interface SelectLocationProps {
  /**
   * A current selected location.
   */
  selectedLocation?: LocationType
  /**
   * A function for closing modal.
   */
  onClose?: PressableProps["onPress"]
  /**
   * A function for select new location.
   */
  onLocationPress?: (value: LocationType) => void
}

export function SelectLocation({ onClose, onLocationPress, selectedLocation }: SelectLocationProps) {
  const [isFocus, setIsFocus] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [current, setCurrent] = useState<LocationType | null>(null)
  const [nearby, setNearby] = useState<LocationType[]>([])
  const [searchResult, setSearchResult] = useState<LocationType[]>([])
  const [saved, setSaved] = useState<LocationType[]>([])

  const $marginTop = useSafeAreaInsetsStyle(["top"], "margin")
  const $paddingBottom = useSafeAreaInsetsStyle(["bottom"], "padding")

  const getLocations = async () => {
    const location = await getCurrentLocation()
    const res = await getNearbyPlaces(location.location, 100)
    const savedLocations = await storage.load('savedLocations')
    if (savedLocations) setSaved(savedLocations as LocationType[] || [])
    setCurrent(location)
    setNearby(res)
  }

  const setPlaces = async (value: string) => {
    const location = await getPlaces(value)
    
    setSearchResult(location)
  }

  useEffect(() => {
    getLocations().catch((e: Error) => {
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
        <Pressable
          accessible
          accessibilityLabel="x button"
          accessibilityHint="close modal"
          accessibilityRole="button"
          style={$close}
          onPress={onClose}
        >
          <Icon icon="x" color={colors.palette.neutral450} />
        </Pressable>
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
        <ScrollView 
          accessible
          accessibilityLabel="search location"
          accessibilityHint="type for search location"
          accessibilityRole="scrollbar"
          style={$scrollContainer}
        >
          {(!isFocus && searchResult.length === 0) && (
            <>
              {Boolean(current) && <ExpandContainer title="homeScreen.selectLocation.current" expandble={false}>
                <ListItem 
                  icon="pin" 
                  title={current.title} 
                  subtitle={current.subtitle} 
                  selected={isSelected(current)} 
                  onPress={() => onLocationPress(current)} 
                />
              </ExpandContainer>}
              {Boolean(saved.length) && <ExpandContainer title="homeScreen.selectLocation.saved" itemsCount={saved.length}>
                {saved.map(location => <ListItem 
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
  borderTopLeftRadius: 18,
  borderTopRightRadius: 18,
  flex: 1
}

const $scrollContainer: ViewStyle = { 
  flex: 1, 
  paddingHorizontal: 36,
  marginBottom: 24
}

const $close: ViewStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: 18
}

const $title: TextStyle = {
  marginTop: 10,
  marginBottom: 24,
  fontFamily: typography.primary?.normal,
  fontSize: 28,
  lineHeight: 44,
  color: colors.palette.neutral250,
  paddingHorizontal: 36,
}

const $text: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 14,
}

const $locations: ViewStyle = {
  borderWidth: 1.5,
  borderColor: "transparent",
  borderRadius: 28,
  height: 56,
  backgroundColor: colors.palette.neutral550,
  overflow: "hidden",
  marginHorizontal: 36,
}

const $active: ViewStyle = {
  borderWidth: 1.5,
  borderColor: colors.palette.buttonBlue,
  backgroundColor: colors.palette.overlayBlue,
}

const $keyboardAvoidingViewStyle: ViewStyle = {
  flex: 1,
}
