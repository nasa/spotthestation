import { useNavigation, useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useRef, useState } from "react"
import { ViewStyle, TextStyle, View, TextInput } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Accessory, Button, Icon, Screen, Text, TextField } from "../../../components"
import { colors, spacing, typography } from "../../../theme"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import { translate } from "../../../i18n/translate"
import Snackbar from "react-native-snackbar"
import { useStores } from "../../../models"
import { StyleFn, useStyles } from "../../../utils/useStyles"
import { LocationType } from "../../../services/api"
import { LocationAutocomplete } from "../../../components/LocationAutocomplete"

export interface AddNewLocationScreenParams {
  defaultLocation?: LocationType
}

export const AddNewLocationScreen = observer(function AddNewLocationScreen() {
  const {
    $headerStyleOverride,
    $container,
    $topButtonsContainer,
    $buttonsContainer,
    $scrollContainer,
    $button,
    $title,
    $locations,
    $active,
    $locationsListContainer,
    $dropdownSelected,
    $locationsRow,
    $locationsRowText,
    $dropdownText,
    $save,
    $saveText,
    $saveDisabled,
  } = useStyles(styles)

  const navigation = useNavigation()
  const { savedLocations, setSavedLocations, setNewSavedLocation } = useStores()
  const topInset = useSafeAreaInsets().top
  const { defaultLocation } = useRoute().params as AddNewLocationScreenParams

  const addressRef = useRef<TextInput>()
  const [isFocus, setIsFocus] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [titleValue, setTitleValue] = useState(defaultLocation?.title || "")
  const [location, setLocation] = useState<LocationType>(
    defaultLocation ? null : { ...defaultLocation },
  )

  const handleClear = () => {
    addressRef.current?.clear()
    setTextValue("")
    setLocation(null)
  }

  const handleNavigate = () =>
    navigation.navigate("LocationSettings" as never, { update: Date.now() } as never)

  const handleSave = useCallback(() => {
    location.title = titleValue || (location?.subtitle ?? "").split(",")[0]
    if (!location.title || !location.location) return
    let res: LocationType[] = [...savedLocations]
    if (res.find((item) => item.title === titleValue)) {
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

    if (defaultLocation) {
      res = res.filter((item) => item.title !== defaultLocation.title)
      res.push(location)
      setSavedLocations(res)
    } else {
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
    }

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
  }, [titleValue, location, savedLocations])

  const headerStyle = { ...$headerStyleOverride }
  headerStyle.top = Number(headerStyle.top) + topInset

  const isSaveDisabled = !location?.location || !location?.title

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={[$container, headerStyle]}
      style={{ backgroundColor: colors.palette.neutral900 }}
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
          <IconLinkButton
            icon="x"
            buttonStyle={$button}
            iconColor={colors.palette.neutral250}
            iconSize={20}
            onPress={() => navigation.goBack()}
          />
          {!defaultLocation && (
            <IconLinkButton
              icon="map"
              buttonStyle={$button}
              iconColor={colors.palette.neutral250}
              iconSize={20}
              onPress={() => navigation.navigate("AddNewLocationMap" as never)}
            />
          )}
        </View>
        <Text
          tx={`settings.locationSettingsData.addNewLocation.${
            defaultLocation ? "generalTitleEdit" : "generalTitleAdd"
          }`}
          style={$title}
        />
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
              sightings: [],
            })
            setTitleValue(data.name)
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
            <Accessory icon="save" color={colors.palette.neutral450} style={style} />
          )}
        />
        <View style={$buttonsContainer}>
          <Button
            testID="saveButton"
            accessible
            accessibilityLabel="save button"
            accessibilityHint="save location"
            tx="settings.locationSettingsData.addNewLocation.saveButton"
            disabled={isSaveDisabled}
            style={[$save, isSaveDisabled && $saveDisabled]}
            textStyle={$saveText}
            pressedStyle={$save}
            onPress={handleSave}
          />
        </View>
      </View>
    </Screen>
  )
})

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $headerStyleOverride: TextStyle = {
    top: scale(24),
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

  const $buttonsContainer: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }

  const $scrollContainer: ViewStyle = {
    paddingHorizontal: scale(18),
  }

  const $button: ViewStyle = {
    backgroundColor: colors.palette.neutral550,
    width: scale(42),
    height: scale(42),
  }

  const $text: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.neutral450,
    textAlign: "left",
    paddingBottom: scale(24),
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
    marginBottom: scale(18),
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
    marginTop: scale(3),
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

  const $save: ViewStyle = {
    width: "100%",
    height: scale(56),
    backgroundColor: colors.palette.buttonBlue,
    borderRadius: scale(28),
    borderWidth: 0,
    marginVertical: scale(24),
  }

  const $saveDisabled: ViewStyle = {
    opacity: 0.5,
  }

  const $saveText: TextStyle = {
    color: colors.palette.neutral100,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.medium,
    lineHeight: lineHeights[21],
  }

  return {
    $headerStyleOverride,
    $container,
    $topButtonsContainer,
    $buttonsContainer,
    $scrollContainer,
    $button,
    $text,
    $title,
    $locations,
    $active,
    $locationsListContainer,
    $dropdownLeftAccessory,
    $dropdownRightAccessory,
    $dropdownSelected,
    $locationsRow,
    $locationsRowText,
    $dropdownText,
    $save,
    $saveText,
    $saveDisabled,
  }
}
