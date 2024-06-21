import { StyleFn, useStyles } from "../../utils/useStyles"
import React, { useCallback, useEffect, useRef, useState } from "react"
import {
  ActivityIndicator,
  Alert,
  Platform,
  PressableProps,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import Modal from "react-native-modal"
import { Icon, Text, Button } from "../../components"
import { translate } from "../../i18n"
import { colors, spacing, typography } from "../../theme"
import { getCurrentLocation } from "../../utils/geolocation"
import * as storage from "../../utils/storage"
import { PrivacyModal } from "./components/PrivacyModal"
import { PositionError } from "react-native-geolocation-service"
import { LocationType, OSMSearchResult } from "../../services/api"
import { LocationAutocomplete } from "../../components/LocationAutocomplete"

enum Statuses {
  start = "start",
  detecting = "detecting",
  result = "result",
}

const defaultLocation: LocationType = {
  title: "Washington",
  subtitle: "Washington, D.C., United States",
  location: { lat: 38.89511, lng: -77.03637 },
}

export interface SignupLocationProps {
  /**
   * Data about location
   */
  value: LocationType
  /**
   * Action for a change location data
   */
  onValueChange: (value: LocationType) => void
  /**
   * Done button onPress
   */
  onAction: PressableProps["onPress"]
}

export function SignupLocation({ value, onValueChange, onAction }: SignupLocationProps) {
  const {
    $locations,
    $active,
    $locationsListContainer,
    $dropdownSelected,
    $locationsRow,
    $locationsRowText,
    $dropdownText,
    $title,
    $subtitle,
    $orLabel,
    $button,
    $buttonText,
    $rowContainer,
    $result,
    $loader,
    $modal,
  } = useStyles(styles)

  const addressRef = useRef<TextInput>()
  const [isFocus, setIsFocus] = useState(false)
  const [privacyModal, setPrivacyModal] = useState(false)
  const [status, setStatus] = useState(Statuses.start)
  const [textValue, setTextValue] = useState("")

  useEffect(() => {
    if (value.title) setStatus(Statuses.result)
    else if (status === Statuses.result && !value.title) setStatus(Statuses.start)
  }, [value])

  const handleClear = () => {
    addressRef.current?.clear()
    setTextValue("")
  }

  const handleDetect = async () => {
    setStatus(Statuses.detecting)

    try {
      const location = await getCurrentLocation(() =>
        Alert.alert(
          translate("onboarding.completeProfile.location.permissionAlertTitle"),
          translate("onboarding.completeProfile.location.permissionAlertBody"),
          [
            {
              text: "OK",
              onPress: () => {
                onValueChange(defaultLocation)
                setStatus(Statuses.result)
              },
            },
          ],
          { cancelable: false },
        ),
      )
      if (location) onValueChange(location)
    } catch (e) {
      if (
        e.code !== PositionError.POSITION_UNAVAILABLE &&
        e.code !== PositionError.PLAY_SERVICE_NOT_AVAILABLE
      )
        throw e

      Alert.alert(
        translate("onboarding.completeProfile.location.serviceAlertTitle"),
        translate("onboarding.completeProfile.location.serviceAlertBody"),
        [
          {
            text: "OK",
            onPress: () => {
              onValueChange(defaultLocation)
              setStatus(Statuses.result)
            },
          },
        ],
        { cancelable: false },
      )
    }
  }

  const renderStart = useCallback(() => {
    return (
      <>
        <Text
          accessible
          accessibilityLabel="location subtitle"
          accessibilityHint="location subtitle"
          accessibilityRole="text"
          tx="onboarding.completeProfile.location.subtitle"
          style={$subtitle}
        />
        <Button
          accessible
          accessibilityLabel="detect button"
          accessibilityHint="detecting current location"
          tx="onboarding.completeProfile.location.detectButton"
          pressedStyle={$button}
          style={$button}
          textStyle={$buttonText}
          onPress={() => {
            if (Platform.OS === "ios") {
              handleDetect().catch((e) => console.log(e))
            } else {
              storage
                .load(storage.KEYS.IS_PRIVACY_AGREE)
                .then((res) => {
                  if (res) handleDetect().catch((e) => console.log(e))
                  else setPrivacyModal(true)
                })
                .catch((e) => console.log(e))
            }
          }}
          renderLeftAccessory={({ style }) => (
            <Icon icon="currentLocation" size={24} style={style} />
          )}
        />
        <Text
          accessible
          accessibilityLabel="or"
          accessibilityHint="or"
          accessibilityRole="text"
          tx="onboarding.completeProfile.location.orLabel"
          style={$orLabel}
        />
        <LocationAutocomplete
          ref={addressRef}
          placeholder={translate("onboarding.completeProfile.location.selectLocation")}
          onPress={(data: OSMSearchResult) => {
            onValueChange({
              title: data.name,
              subtitle: data.display_name,
              location: { lat: Number(data.lat), lng: Number(data.lon) },
            })
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
            onFocus: () => setIsFocus(true),
            onBlur: () => setIsFocus(false),
            onChangeText: (text: string) => setTextValue(text),
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
            <Icon icon="search" size={28} color={colors.palette.neutral450} style={style} />
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
      </>
    )
  }, [isFocus, textValue])

  const renderDetecting = useCallback(() => {
    return (
      <>
        <View style={$rowContainer}>
          <ActivityIndicator
            accessible
            accessibilityLabel="loader"
            accessibilityHint="Loading"
            accessibilityRole="progressbar"
            animating={status === Statuses.detecting}
            size="small"
            color={colors.palette.neutral450}
            style={$loader}
          />
          <Text
            accessible
            accessibilityLabel="detecting"
            accessibilityHint="detecting current location"
            accessibilityRole="text"
            tx="onboarding.completeProfile.location.detecting"
            style={$result}
          />
        </View>
      </>
    )
  }, [status])

  const renderResult = useCallback(() => {
    return (
      <>
        <View style={$rowContainer}>
          <Icon icon="pin" size={28} color={colors.palette.neutral450} />
          <Text
            accessible
            accessibilityLabel="address"
            accessibilityHint="display current address"
            accessibilityRole="text"
            text={value.title}
            style={$result}
            ellipsizeMode="tail"
            numberOfLines={1}
          />
          <Icon
            icon="trash"
            size={28}
            color={colors.palette.neutral450}
            onPress={() =>
              onValueChange({ title: "", subtitle: "", location: { lat: null, lng: null } })
            }
          />
        </View>
        <Button
          accessible
          accessibilityLabel="Done button"
          accessibilityHint="navigate to main screen"
          tx="onboarding.completeProfile.location.doneButton"
          pressedStyle={$button}
          style={$button}
          textStyle={$buttonText}
          onPress={onAction}
        />
      </>
    )
  }, [value])

  const renderBody = useCallback(() => {
    if (status === Statuses.start) return renderStart()
    if (status === Statuses.detecting) return renderDetecting()
    if (status === Statuses.result) return renderResult()
    return ""
  }, [status, renderStart, renderDetecting, renderResult])

  return (
    <>
      <Text
        accessible
        accessibilityLabel="location title"
        accessibilityHint="location title"
        accessibilityRole="text"
        tx="onboarding.completeProfile.location.title"
        style={$title}
      />
      {renderBody()}
      {privacyModal && (
        <Modal
          isVisible={privacyModal}
          useNativeDriver
          useNativeDriverForBackdrop
          backdropOpacity={0.4}
          style={$modal}
        >
          <PrivacyModal
            onPressSkip={() => {
              storage
                .save(storage.KEYS.IS_PRIVACY_AGREE, false)
                .then(() => {
                  setPrivacyModal(false)
                })
                .catch((e) => console.log(e))
            }}
            onPressAgree={() => {
              storage
                .save(storage.KEYS.IS_PRIVACY_AGREE, true)
                .then(() => {
                  setPrivacyModal(false)
                  handleDetect().catch((e) => console.log(e))
                })
                .catch((e) => console.log(e))
            }}
          />
        </Modal>
      )}
    </>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $locations: ViewStyle = {
    borderWidth: scale(1.5),
    borderColor: "transparent",
    borderRadius: scale(28),
    height: scale(56),
    backgroundColor: colors.palette.neutral350,
    overflow: "hidden",
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

  const $title: TextStyle = {
    color: colors.palette.neutral250,
    fontSize: fontSizes[36],
    fontFamily: typography.primary.normal,
    lineHeight: lineHeights[44],
    paddingBottom: scale(24),
  }

  const $subtitle: TextStyle = {
    color: colors.palette.neutral450,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.normal,
    lineHeight: lineHeights[22],
    paddingBottom: scale(36),
  }

  const $orLabel: TextStyle = {
    color: colors.palette.neutral450,
    fontSize: fontSizes[16],
    fontFamily: typography.primary.normal,
    lineHeight: lineHeights[19],
    textAlign: "center",
    marginVertical: scale(12),
  }

  const $button: ViewStyle = {
    width: "100%",
    height: scale(56),
    backgroundColor: colors.palette.buttonBlue,
    borderRadius: scale(28),
    borderWidth: 0,
  }

  const $buttonText: TextStyle = {
    color: colors.palette.neutral100,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.medium,
    lineHeight: lineHeights[21],
  }

  const $rowContainer: ViewStyle = {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  }

  const $result: TextStyle = {
    flex: 1,
    paddingHorizontal: scale(18),
    color: colors.palette.neutral250,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.normal,
    lineHeight: lineHeights[22],
    paddingBottom: scale(56),
  }

  const $loader: ViewStyle = {
    justifyContent: "flex-start",
  }

  const $modal: ViewStyle = {
    flex: 1,
    left: 0,
    margin: 0,
    paddingHorizontal: 18,
    justifyContent: "flex-start",
  }

  return {
    $locations,
    $active,
    $locationsListContainer,
    $dropdownLeftAccessory,
    $dropdownRightAccessory,
    $dropdownSelected,
    $locationsRow,
    $locationsRowText,
    $dropdownText,
    $title,
    $subtitle,
    $orLabel,
    $button,
    $buttonText,
    $rowContainer,
    $result,
    $loader,
    $modal,
  }
}
