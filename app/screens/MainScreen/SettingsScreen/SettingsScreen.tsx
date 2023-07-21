import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Screen, Text } from "../../../components"
import { colors, fontSizes, lineHeights, scale, typography } from "../../../theme"
import { SettingsItem } from "../components/SettingsItem"
import { ListItem } from "../components/ListItem"
import { useStores } from "../../../models"

export const SettingsScreen = observer(function SettingsScreen() {
  const navigation = useNavigation()
  const topInset = useSafeAreaInsets().top
  const { isLocalCalculations, setLocalCalculations } = useStores()

  const $headerStyleOverride: TextStyle = {
    top: topInset + scale(24),
  }

  const handleNavigate = (screen) =>
    navigation.navigate("SettingsScreens" as never, { screen } as never)

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={[$container]}
      style={{ backgroundColor: colors.palette.neutral900 }}
      statusBarStyle="light"
    >
      <View style={[$headerContainer, $headerStyleOverride]}>
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
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{ flex: 1 }} />
        <ListItem
          icon="iss"
          title="Local calculations"
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
