import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
// import uniqBy from "lodash/uniqBy"
import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Screen, Text /* Icon */ } from "../../../components"
import { colors, typography, spacing } from "../../../theme"
import { SettingsItem } from "../components/SettingsItem"
import { ListItem } from "../components/ListItem"
import { useStores } from "../../../models"
import { translate /* setLocale */ } from "../../../i18n"
// import { Dropdown } from "react-native-element-dropdown"
import { StyleFn, useStyles } from "../../../utils/useStyles"
// import i18n from "i18n-js"
// import * as storage from "../../../utils/storage"

// const languages = uniqBy(
//   Object.keys(i18n.translations).map((key) => ({
//     label: (i18n.translations[key] as any).name as string,
//     value: key,
//   })),
//   "label",
// )

export const SettingsScreen = observer(function SettingsScreen() {
  const {
    $headerStyleOverride,
    $container,
    $itemsConteiner,
    $headerContainer,
    $header,
    // $dropdown,
    // $dropdownContainer,
    // $dropdownPlaceholder,
    // $dropdownSelected,
    // $dropdownText,
    // $dropdownRightAccessory,
  } = useStyles(styles)
  const navigation = useNavigation()
  const topInset = useSafeAreaInsets().top
  const { isLocalCalculations, setLocalCalculations /* setNotifications */ } = useStores()

  const handleNavigate = (screen) =>
    navigation.navigate("SettingsScreens" as never, { screen } as never)

  // const onChangeLanguage = async ({ value }) => {
  //   await storage.save("locale", value)
  //   setLocale(value as string)
  //   setNotifications()
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: "Settings" as never }],
  //   })
  // }

  const headerStyle = { ...$headerStyleOverride }
  headerStyle.top = Number(headerStyle.top) + topInset

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={[$container]}
      style={{ backgroundColor: colors.palette.neutral900 }}
      statusBarStyle="light"
    >
      <View style={[$headerContainer, headerStyle]}>
        <Text
          accessible
          accessibilityLabel="header"
          accessibilityHint="header"
          accessibilityRole="text"
          tx="settings.header"
          style={$header}
        />
      </View>
      <View style={$itemsConteiner}>
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
        {/* <SettingsItem */}
        {/*   icon="globe" */}
        {/*   title="settings.language" */}
        {/*   rightControl={ */}
        {/*     <Dropdown */}
        {/*       accessibilityLabel="language select" */}
        {/*       style={$dropdown} */}
        {/*       placeholderStyle={[$dropdownText, $dropdownPlaceholder]} */}
        {/*       selectedTextStyle={[$dropdownText, $dropdownSelected]} */}
        {/*       data={languages} */}
        {/*       itemContainerStyle={{ */}
        {/*         backgroundColor: colors.palette.neutral350, */}
        {/*       }} */}
        {/*       containerStyle={$dropdownContainer} */}
        {/*       itemTextStyle={$dropdownText} */}
        {/*       activeColor={colors.palette.neutral450} */}
        {/*       value={i18n.locale} */}
        {/*       labelField="label" */}
        {/*       valueField="value" */}
        {/*       onChange={onChangeLanguage} */}
        {/*       renderRightIcon={() => ( */}
        {/*         <Icon */}
        {/*           icon="chevronDown" */}
        {/*           size={28} */}
        {/*           color={colors.palette.neutral450} */}
        {/*           containerStyle={$dropdownRightAccessory} */}
        {/*         /> */}
        {/*       )} */}
        {/*     /> */}
        {/*   } */}
        {/* /> */}
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{ flex: 1 }} />
        <ListItem
          icon="iss"
          title={translate("settings.localCalculations")}
          subtitle=""
          selected={isLocalCalculations}
          onToggle={() => setLocalCalculations(!isLocalCalculations)}
          withSwitch
          borderless
        />
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
    justifyContent: "space-between",
  }

  const $itemsConteiner: ViewStyle = {
    flex: 1,
    marginTop: scale(150),
    paddingHorizontal: scale(36),
  }

  const $headerContainer: ViewStyle = {
    position: "absolute",
    left: scale(18),
    zIndex: 9,
  }

  const $header: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[36],
    lineHeight: lineHeights[44],
    color: colors.palette.neutral250,
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

  return {
    $headerStyleOverride,
    $container,
    $itemsConteiner,
    $headerContainer,
    $header,
    $dropdown,
    $dropdownContainer,
    $dropdownPlaceholder,
    $dropdownSelected,
    $dropdownText,
    $dropdownRightAccessory,
  }
}
