/* eslint-disable camelcase */
import React, { useEffect, useState } from "react"
import { ViewStyle, View, Pressable, PressableProps, TextStyle, ScrollView } from "react-native"

import { Accessory, Icon, Text, TextField } from "../../../components"
import { colors, typography } from "../../../theme"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { getCurrentLocation, getNearbyPlaces, getPlaces } from "../../../utils/geolocation"
import { LocationType } from "../../OnboardingScreen/SignupLocation"
import Snackbar from "react-native-snackbar"

export interface SelectLocationProps {
  /**
   * A function for closing modal.
   */
  onClose?: PressableProps["onPress"]
}

export function SelectLocation({ onClose }: SelectLocationProps) {
  const [isFocus, setIsFocus] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [current, setCurrent] = useState<LocationType | null>(null)
  const [nearby, setNearby] = useState<LocationType[]>([])
  const [searchResult, setSearchResult] = useState<LocationType[]>([])

  const $marginTop = useSafeAreaInsetsStyle(["top"], "margin")
  const $paddingBottom = useSafeAreaInsetsStyle(["bottom"], "padding")

  const getLocations = async () => {
    const location = await getCurrentLocation()
    const res = await getNearbyPlaces(location.location, 100)
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

  return (
    <View style={[$modalBodyContainer, $marginTop, $paddingBottom]}>
      <Pressable
        style={$close}
        onPress={onClose}
      >
        <Icon icon="x" color={colors.palette.neutral450} />
      </Pressable>
      <Text tx="homeScreen.selectLocation.title" style={$title} />
      <TextField
        value={textValue}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTx="homeScreen.selectLocation.inputPlaceholder"
        onChangeText={setTextValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
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
      <ScrollView style={$scrollContainer}>
        {(!isFocus && searchResult.length === 0) && (
          <>
            {Boolean(current) && <ExpandContainer title="homeScreen.selectLocation.current" expandble={false}>
              <ListItem icon="pin" title={current.title} subtitle={current.subtitle} selected={true} />
            </ExpandContainer>}
            <ExpandContainer title="homeScreen.selectLocation.saved" itemsCount={2}>
              <ListItem icon="pin" title="George Bush St, Times Square" subtitle="New York City, NY, 83957" />
              <ListItem icon="pin" title="Navy Garden" subtitle="San Diego, CA, 54813" />
            </ExpandContainer>
            {nearby.length > 0 && <ExpandContainer title="homeScreen.selectLocation.nearby" itemsCount={nearby.length} defaultValue={false}>
                {nearby.map((place: LocationType) => <ListItem key={place.title} icon="pin" title={place.title} subtitle={place.subtitle} />)}
              </ExpandContainer>
            }
          </>
        )}
        {(isFocus || searchResult.length > 0) && 
          <ExpandContainer title="homeScreen.selectLocation.search" itemsCount={searchResult.length} expandble={false}>
            {searchResult.map((place: LocationType) => <ListItem key={place.title} icon="pin" title={place.title} subtitle={place.subtitle} />)}
          </ExpandContainer>
        }
      </ScrollView>
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
  marginTop: 36,
  marginBottom: 24,
  fontFamily: typography.primary?.normal,
  fontSize: 36,
  lineHeight: 44,
  color: colors.palette.neutral250,
  paddingHorizontal: 36,
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
