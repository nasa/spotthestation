/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useMemo } from "react"
import { ViewStyle, TextStyle, ScrollView, Pressable, View, Platform } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Screen, Text } from "../../../components"
import { colors, fontSizes, lineHeights, scale, typography } from "../../../theme"
import en from "../../../i18n/en"
import { TxKeyPath, translate } from "../../../i18n"
import DeviceInfo from "react-native-device-info"

export const TermsAndConditionsScreen = observer(function TermsAndConditionsScreen() {
  const navigation = useNavigation()
  const topInset = useSafeAreaInsets().top

  const $headerStyleOverride: TextStyle = {
    top: topInset + scale(24),
  }

  const tnc = useMemo(() => {
    const platform = en.settings.termsAndConditionsData[Platform.OS]
    const translationPrefix = `settings.termsAndConditionsData.${Platform.OS}`
    const body: string[] = Object.keys(platform.body)

    return {
      title: translate(`${translationPrefix}.title` as TxKeyPath),
      intro1: translate(`${translationPrefix}.intro1` as TxKeyPath),
      intro2: translate(`${translationPrefix}.intro2` as TxKeyPath),
      intro3: translate(`${translationPrefix}.intro3` as TxKeyPath),
      appData: [
        `${translate(
          `${translationPrefix}.appData.line1` as TxKeyPath,
        )} ${DeviceInfo.getApplicationName()}`,
        `${translate(
          `${translationPrefix}.appData.line2` as TxKeyPath,
        )} ${DeviceInfo.getVersion()}`,
        translate(`${translationPrefix}.appData.line3` as TxKeyPath),
      ],
      body: body.map((item) => translate(`${translationPrefix}.body.${item}` as TxKeyPath)),
      contactData:
        Platform.OS === "ios"
          ? Object.keys(platform.contactData).map((item) =>
              translate(`${translationPrefix}.contactData.${item}` as TxKeyPath),
            )
          : null,
    }
  }, [en])

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={[$container, $headerStyleOverride]}
      style={{ backgroundColor: colors.palette.neutral900 }}
      statusBarStyle="light"
    >
      <Pressable
        accessible
        accessibilityLabel="Back button"
        accessibilityHint="Navigates to the previous screen"
        accessibilityRole="button"
        onPress={() => navigation.goBack()}
        style={$backButton}
      >
        <Icon icon="caretLeft" color={colors.palette.neutral250} size={24} />
        <Text tx="settings.termsAndConditionsData.backButton" style={$backButtonText} />
      </Pressable>
      <ScrollView
        accessible
        accessibilityLabel="terms And Conditions scrollable us area"
        accessibilityHint="terms And Conditions scrollable us area"
        accessibilityRole="scrollbar"
        style={$scrollContainer}
        scrollEnabled
        contentContainerStyle={$scrollSontentContainerStyle}
      >
        <Pressable>
          <View
            accessible
            accessibilityLabel="terms And Conditions"
            accessibilityHint="terms And Conditions"
            accessibilityRole="text"
          >
            <Text text={tnc.title} style={$title} />
            <Text text={tnc.intro1} style={$text} />
            {tnc.appData.map((item) => (
              <Text key={item} text={item} style={[$text, { paddingBottom: 0 }]} />
            ))}
            <Text text="" style={$text} />
            {tnc.contactData &&
              tnc.contactData.map((item) => (
                <Text key={item} text={item} style={[$text, { paddingBottom: 0 }]} />
              ))}
            <Text text={tnc.intro2} style={$text} />
            <Text text={tnc.intro3} style={$text} />
            {tnc.body.map((item) => (
              <Text key={item} text={item} style={$text} />
            ))}
          </View>
        </Pressable>
      </ScrollView>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  height: "100%",
}

const $backButton: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingBottom: 11,
  paddingLeft: 16,
}

const $scrollSontentContainerStyle: ViewStyle = {
  flexGrow: 1,
  paddingBottom: 60,
}

const $scrollContainer: ViewStyle = {
  paddingHorizontal: 18,
}

const $title: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: fontSizes[36],
  lineHeight: lineHeights[44],
  color: colors.palette.neutral250,
  textAlign: "left",
  paddingBottom: 24,
}

const $text: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: fontSizes[24],
  lineHeight: lineHeights[34],
  color: colors.palette.neutral250,
  textAlign: "left",
  paddingBottom: 16,
}

const $backButtonText: TextStyle = {
  ...$text,
  color: colors.palette.neutral250,
  paddingBottom: 0,
  paddingLeft: 5,
}
