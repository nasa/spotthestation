import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Screen, Text } from "../../../components"
import { colors, typography } from "../../../theme"
import { SettingsItem } from "../components/SettingsItem"

export const SettingsScreen = observer(function SettingsScreen() {
  const navigation = useNavigation()
  const topInset = useSafeAreaInsets().top

  const $headerStyleOverride: TextStyle = {
    top: topInset + 24,
  }

  const handleNavigate = (screen) => navigation.navigate('SettingsScreens' as never, {screen} as never)

  return (
    <Screen
      preset="fixed" 
      contentContainerStyle={[$container]} 
      style={{backgroundColor: colors.palette.neutral900}} 
      statusBarStyle="light"
    >
      <View style={[$headerContainer, $headerStyleOverride]}>
        <Text tx="settings.header" style={$header} />
      </View>
      <View style={$itemsConteiner}>
        <SettingsItem icon="shield" title="settings.termsAndConditions" onPress={() => handleNavigate("TermsAndConditions")} />
        <SettingsItem icon="mail" title="settings.contactUs" onPress={() => handleNavigate("ContactUs")} />
      </View>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  justifyContent: "space-between"
}

const $itemsConteiner: ViewStyle = {
  flex: 1,
  marginTop: 150,
  paddingHorizontal: 36
}

const $headerContainer: ViewStyle = {
  position: "absolute",
  left: 18,
  zIndex: 9
}

const $header: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 36,
  lineHeight: 44,
  color: colors.palette.neutral250
}
