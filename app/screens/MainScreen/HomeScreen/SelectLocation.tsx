import React, { useRef, useState } from "react"
import { ViewStyle, View, Pressable, PressableProps, TextStyle, ScrollView } from "react-native"
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete"
import { translate } from "../../../i18n"
import { Icon, Text } from "../../../components"
import { colors, spacing, typography } from "../../../theme"
import Config from "../../../config"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"

export interface SelectLocationProps {
  /**
   * A function for closing modal.
   */
  onClose?: PressableProps["onPress"]
}

export function SelectLocation({ onClose }: SelectLocationProps) {
  const addressRef = useRef<GooglePlacesAutocompleteRef>()
  const [isFocus, setIsFocus] = useState(false)
  const [textValue, setTextValue] = useState("")
  const $marginTop = useSafeAreaInsetsStyle(["top"], "margin")
  const $paddingBottom = useSafeAreaInsetsStyle(["bottom"], "padding")

  const handleClear = () => {
    addressRef.current?.clear()
    setTextValue("")
  }

  return (
    <View style={[$modalBodyContainer, $marginTop, $paddingBottom]}>
      <Pressable
        style={$close}
        onPress={onClose}
      >
        <Icon icon="x" color={colors.palette.neutral450} />
      </Pressable>
      <Text tx="homeScreen.selectLocation.title" style={$title} />
      <GooglePlacesAutocomplete
        ref={addressRef}
        placeholder={translate("homeScreen.selectLocation.inputPlaceholder")}
        query={{
          key: Config.GOOGLE_API_TOKEN,
          language: 'en',
        }}
        onPress={(data, details = null) => console.log(data, details)}
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
          onChangeText: (text) => setTextValue(text),
          clearButtonMode: "never",
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
        renderRightButton={() => isFocus && textValue ? (
          <Icon
            icon="xCircle"
            size={28}
            color={colors.palette.neutral450}
            containerStyle={$dropdownRightAccessory}
            onPress={handleClear}
          />
        ) : (
          <Icon
            icon="currentLocation"
            size={28}
            color={colors.palette.neutral450}
            containerStyle={$dropdownRightAccessory}
            onPress={handleClear}
          />
        )}
      />
      <ScrollView style={$scrollContainer}>
        <ExpandContainer title="homeScreen.selectLocation.current" expandble={false}>
          <ListItem icon="pin" title="7th Avenue," subtitle="Phoenix, AZ, 34960" selected={true} />
        </ExpandContainer>
        <ExpandContainer title="homeScreen.selectLocation.saved" itemsCount={2}>
          <ListItem icon="pin" title="George Bush St, Times Square" subtitle="New York City, NY, 83957" />
          <ListItem icon="pin" title="Navy Garden" subtitle="San Diego, CA, 54813" />
        </ExpandContainer>
        <ExpandContainer title="homeScreen.selectLocation.nearby" itemsCount={3} defaultValue={false}>
          <ListItem icon="pin" title="" subtitle="" />
          <ListItem icon="pin" title="" subtitle="" />
          <ListItem icon="pin" title="" subtitle="" />
        </ExpandContainer>
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
  fontFamily: typography.primary?.normal,
  fontSize: 18,
  lineHeight: 22,
  paddingHorizontal: 0,
  marginHorizontal: spacing.small,
  textAlignVertical: "center",
  borderRadius: 0,
  backgroundColor: "transparent"
}
