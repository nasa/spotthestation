import {
  Icon,
  Screen,
  Text,
  SettingsItem,
  CalibrateCompassModal,
  TutorialsModal,
} from "../../components"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import uniqBy from "lodash/uniqBy"
import React, { useMemo, useState } from "react"
import { View, ViewStyle, TextStyle, Alert, ScrollView } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { colors, typography, spacing } from "../../theme"

import { useStores } from "../../models"
import { setLocale, translate } from "../../i18n"
import { Dropdown } from "react-native-element-dropdown"
import { StyleFn, useStyles } from "../../utils/useStyles"
import i18n from "i18n-js"
import * as storage from "../../utils/storage"
import Modal from "react-native-modal"
import { isMagnetometerAvailable } from "../../utils/orientation"
import Share from "react-native-share"
import { APP_UNIVERSAL_LINK } from "../../utils/unilinks"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"

export const SettingsScreen = observer(function SettingsScreen() {
  const {
    $headerStyleOverride,
    $container,
    $flex,
    $itemsConteiner,
    $headerContainer,
    $header,
    $dropdown,
    $dropdownContainer,
    $dropdownPlaceholder,
    $dropdownSelected,
    $dropdownText,
    $dropdownRightAccessory,
    $modal,
  } = useStyles(styles)

  const [isCalibrationModalVisible, setIsCalibrationModalVisible] = useState(false)
  const [isTutorialsModalVisible, setIsTutorialsModalVisible] = useState(false)
  const navigation = useNavigation()
  const topInset = useSafeAreaInsets().top
  const bottomInset = useSafeAreaInsetsStyle(["bottom"], "padding")

  const { setNotifications, timeFormat, setTimeFormat, units, setUnits } = useStores()
  const languages = useMemo(
    () =>
      uniqBy(
        Object.keys(i18n.translations).map((key) => ({
          label: (i18n.translations[key] as { name: string }).name,
          value: key,
        })),
        "label",
      ),
    [i18n.translations],
  )

  const timeFormats = useMemo(
    () => [
      { label: `12${translate("units.hour")}`, value: "12hour" },
      { label: `24${translate("units.hour")}`, value: "24hour" },
    ],
    [],
  )

  const unitsOptions = useMemo(
    () => [
      { label: translate("settings.metric"), value: "metric" },
      { label: translate("settings.imperial"), value: "imperial" },
    ],
    [],
  )

  const handleNavigate = (screen) =>
    navigation.navigate("SettingsScreens" as never, { screen } as never)

  const onChangeLanguage = async ({ value }: { label: string; value: string }) => {
    await storage.save(storage.KEYS.LOCALE, value)
    setLocale(value)
    setNotifications()
    navigation.reset({
      index: 0,
      routes: [{ name: "Settings" as never }],
    })
  }

  const onChangeTimeFormat = ({ value }: { label: string; value: string }) => {
    setTimeFormat(value)
  }

  const onChangeUnits = ({ value }: { label: string; value: string }) => {
    setUnits(value)
  }

  const handleCalibrate = async () => {
    const available = await isMagnetometerAvailable().catch(() => false)
    if (!available)
      return Alert.alert(
        translate("issView.arNotSupported"),
        translate("issView.noMagnetometerSensor"),
      )

    setIsCalibrationModalVisible(true)
  }

  const handleTutorials = () => {
    setIsTutorialsModalVisible(true)
  }

  const handleTutorialClose = async (tutorial?: string) => {
    setIsTutorialsModalVisible(false)
    if (tutorial === "home") {
      await storage.remove(storage.KEYS.COACH_COMPLETED)
      navigation.navigate("Home" as never)
    } else if (tutorial === "ar") {
      await storage.remove(storage.KEYS.AR_COACH_COMPLETED)
      navigation.navigate("ISSView" as never)
    }
  }

  const handleShare = async () => {
    const message = `${translate("settings.shareLink")}: ${APP_UNIVERSAL_LINK}`
    const shareOptions = {
      message,
      failOnCancel: false,
      type: undefined,
    }

    await Share.open(shareOptions).catch((e) => console.error(e))
  }

  const headerStyle = { ...$headerStyleOverride }
  headerStyle.paddingTop = Number(headerStyle.paddingTop) + topInset

  return (
    <Screen
      preset="fixed"
      style={$container}
      contentContainerStyle={[$flex, headerStyle]}
      statusBarStyle="light"
    >
      <View style={$headerContainer}>
        <Text
          accessible
          accessibilityLabel="header"
          accessibilityHint="header"
          accessibilityRole="text"
          tx="settings.header"
          style={$header}
        />
      </View>
      <ScrollView style={$itemsConteiner} contentContainerStyle={bottomInset}>
        <SettingsItem
          icon="mapPinOutlined"
          title="settings.locationSettings"
          onPress={() => handleNavigate("LocationSettings")}
        />
        <SettingsItem
          icon="bellRing"
          title="settings.notificationSettings"
          onPress={() => handleNavigate("NotificationSettings")}
        />
        <SettingsItem
          icon="shield"
          title="settings.termsAndConditions"
          onPress={() => handleNavigate("TermsAndConditions")}
        />
        <SettingsItem
          icon="mail"
          title="settings.contactUs"
          onPress={() => handleNavigate("ContactUs")}
        />
        <SettingsItem icon="compass" title="settings.calibrateCompass" onPress={handleCalibrate} />
        <SettingsItem icon="tutorial" title="settings.tutorials" onPress={handleTutorials} />
        <SettingsItem icon="share" title="settings.share" onPress={handleShare} />
        <SettingsItem
          icon="globe"
          title="settings.language"
          rightControl={
            <View style={$flex}>
              <Dropdown
                accessibilityLabel="language select"
                style={$dropdown}
                placeholderStyle={[$dropdownText, $dropdownPlaceholder]}
                selectedTextStyle={[$dropdownText, $dropdownSelected]}
                data={languages}
                itemContainerStyle={{
                  backgroundColor: colors.palette.neutral350,
                }}
                containerStyle={$dropdownContainer}
                itemTextStyle={$dropdownText}
                activeColor={colors.palette.neutral450}
                value={i18n.locale}
                labelField="label"
                valueField="value"
                onChange={onChangeLanguage}
                renderRightIcon={() => (
                  <Icon
                    icon="chevronDown"
                    size={28}
                    color={colors.palette.neutral450}
                    containerStyle={$dropdownRightAccessory}
                  />
                )}
              />
            </View>
          }
        />

        <SettingsItem
          icon="clock"
          title="settings.timeFormat"
          rightControl={
            <View style={$flex}>
              <Dropdown
                accessibilityLabel="time format select"
                style={$dropdown}
                placeholderStyle={[$dropdownText, $dropdownPlaceholder]}
                selectedTextStyle={[$dropdownText, $dropdownSelected]}
                data={timeFormats}
                itemContainerStyle={{
                  backgroundColor: colors.palette.neutral350,
                }}
                containerStyle={$dropdownContainer}
                itemTextStyle={$dropdownText}
                activeColor={colors.palette.neutral450}
                value={timeFormat}
                labelField="label"
                valueField="value"
                onChange={onChangeTimeFormat}
                renderRightIcon={() => (
                  <Icon
                    icon="chevronDown"
                    size={28}
                    color={colors.palette.neutral450}
                    containerStyle={$dropdownRightAccessory}
                  />
                )}
              />
            </View>
          }
        />

        <SettingsItem
          icon="maximize"
          title="settings.unitsOfMeasurement"
          rightControl={
            <View style={$flex}>
              <Dropdown
                accessibilityLabel="units of measurement select"
                style={$dropdown}
                placeholderStyle={[$dropdownText, $dropdownPlaceholder]}
                selectedTextStyle={[$dropdownText, $dropdownSelected]}
                data={unitsOptions}
                itemContainerStyle={{
                  backgroundColor: colors.palette.neutral350,
                }}
                containerStyle={$dropdownContainer}
                itemTextStyle={$dropdownText}
                activeColor={colors.palette.neutral450}
                value={units}
                labelField="label"
                valueField="value"
                onChange={onChangeUnits}
                renderRightIcon={() => (
                  <Icon
                    icon="chevronDown"
                    size={28}
                    color={colors.palette.neutral450}
                    containerStyle={$dropdownRightAccessory}
                  />
                )}
              />
            </View>
          }
        />
      </ScrollView>

      <Modal
        isVisible={isCalibrationModalVisible}
        onBackdropPress={() => setIsCalibrationModalVisible(false)}
        onSwipeComplete={() => setIsCalibrationModalVisible(false)}
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
        <CalibrateCompassModal onClose={() => setIsCalibrationModalVisible(false)} />
      </Modal>

      <Modal
        isVisible={isTutorialsModalVisible}
        onBackdropPress={() => setIsTutorialsModalVisible(false)}
        onSwipeComplete={() => setIsTutorialsModalVisible(false)}
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
        <TutorialsModal onClose={handleTutorialClose} />
      </Modal>
    </Screen>
  )
})

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $headerStyleOverride: TextStyle = {
    paddingTop: scale(24),
  }

  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.palette.neutral900,
    justifyContent: "space-between",
    paddingHorizontal: scale(18),
  }

  const $flex = { flex: 1 }

  const $itemsConteiner: ViewStyle = {
    flex: 1,
    paddingHorizontal: scale(18),
  }

  const $headerContainer: ViewStyle = {}

  const $header: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[36],
    lineHeight: lineHeights[44],
    color: colors.palette.neutral250,
    paddingBottom: scale(24),
  }

  const $dropdown: ViewStyle = {
    flex: 1,
    height: scale(30),
    overflow: "hidden",
  }

  const $dropdownContainer: ViewStyle = {
    backgroundColor: colors.palette.neutral350,
    borderRadius: scale(10),
    marginTop: -scale(40),
    borderWidth: 0,
  }

  const $dropdownPlaceholder: TextStyle = {
    color: colors.palette.neutral450,
  }

  const $dropdownSelected: TextStyle = {
    color: colors.palette.neutral250,
  }

  const $dropdownText: TextStyle = {
    flex: 1,
    textAlign: "right",
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[18],
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginHorizontal: scale(spacing.small),
    textAlignVertical: "center",
    color: colors.palette.neutral250,
  }

  const $dropdownRightAccessory: ViewStyle = {
    height: scale(56),
    justifyContent: "center",
    alignItems: "center",
  }

  const $modal: ViewStyle = {
    flex: 1,
    justifyContent: "center",
    margin: scale(24),
  }

  return {
    $headerStyleOverride,
    $container,
    $flex,
    $itemsConteiner,
    $headerContainer,
    $header,
    $dropdown,
    $dropdownContainer,
    $dropdownPlaceholder,
    $dropdownSelected,
    $dropdownText,
    $dropdownRightAccessory,
    $modal,
  }
}
