/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useState } from "react"
import { ViewStyle, TextStyle, ScrollView, Pressable, View } from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import * as storage from "../../../utils/storage"
import { Button, Icon, Screen, Text, Toggle } from "../../../components"
import { translate } from "../../../i18n"
import { colors, spacing, typography } from "../../../theme"
import { ExpandContainer } from "../components/ExpandContainer"
import { formatDate } from "../../../utils/formatDate"

export const NotificationSettingsScreen = observer(function NotificationSettingsScreen() {
  const navigation = useNavigation()
  const topInset = useSafeAreaInsets().top
  const bottomInset = useSafeAreaInsets().bottom
  const [from, setFrom] = useState(false)
  const [until, setUntil] = useState(false)
  const [settings, setSettings] = useState({
    iisVisible: false,
    upcoming: false,
    inApp: false,
    notifyBefore: 30,
    muteFrom: new Date(),
    muteUntil: new Date()
  })

  const $headerStyleOverride: TextStyle = {
    top: topInset + 24,
  }

  const loadSettings = async () => {
    const start = await storage.load('muteFrom')
    const end = await storage.load('muteUntil')
    setSettings({
      iisVisible: await storage.load('iisVisible'),
      upcoming: await storage.load('upcoming'),
      inApp: await storage.load('inApp'),
      notifyBefore: (await storage.load('notifyBefore')) || 30,
      muteFrom: start ? new Date(start) : new Date(),
      muteUntil: end ? new Date(end) : new Date()
    })
  }

  useEffect(() => {
    loadSettings()
  }, [])
  

  const handleChange = useCallback(async (value, field: string) => {
    setSettings({
      ...settings,
      [field]: value
    })
    await storage.save(field, value)
  }, [settings])

  return (
    <Screen
      preset="fixed" 
      contentContainerStyle={[$container, $headerStyleOverride, { paddingBottom: bottomInset + 24 }]} 
      style={{backgroundColor: colors.palette.neutral900}} 
      statusBarStyle="light"
    >
      <ScrollView
        accessible
        accessibilityLabel="Notification settings scrollable us area"
        accessibilityHint="Notification settings scrollable us area"
        accessibilityRole="scrollbar"
        style={$scrollContainer} 
        scrollEnabled 
        contentContainerStyle={$scrollContentContainerStyle}
      >
        <Pressable>
          <Pressable 
            accessible
            accessibilityLabel="Back button"
            accessibilityHint="Navigates to the previous screen"
            accessibilityRole="button"
            onPress={() => navigation.goBack()} 
            style={$backButton}
          >
            <Icon icon="caretLeft" color={colors.palette.neutral250} />
            <Text tx="settings.notificationSettingsData.backButton" style={$backButtonText} />
          </Pressable>
          <Text tx="settings.notificationSettingsData.notificationTitle" style={$title} />
          <View style={$switchContainer}>
            <View 
              accessible
              accessibilityLabel="iis Visible"
              accessibilityHint="iis Visible notification switch"
              accessibilityRole="text"
              style={$labelContainer}
            >
              <Text tx="settings.notificationSettingsData.iisVisibleLabel" style={$label} />
            </View>
            <Toggle
              accessible
              accessibilityLabel="switch button"
              accessibilityHint="toggle iis Visible notification"
              variant="switch" 
              value={settings?.iisVisible} 
              onValueChange={(value) => handleChange(value, 'iisVisible')}
            />
          </View>
          <View style={$switchContainer}>
            <View 
              accessible
              accessibilityLabel="upcoming events notification"
              accessibilityHint="upcoming events notification switch"
              accessibilityRole="text"
              style={$labelContainer}
            >
              <Text tx="settings.notificationSettingsData.upcomingLabel" style={$label} />
              <Text tx="settings.notificationSettingsData.upcomingTip" style={$tip} />
            </View>
            <Toggle
              accessible
              accessibilityLabel="switch button"
              accessibilityHint="toggle upcoming events notifications"
              variant="switch" 
              value={settings?.upcoming}
              onValueChange={(value) => handleChange(value, 'upcoming')}
            />
          </View>
          <ExpandContainer title="settings.notificationSettingsData.notificationTypes" expandble={false}>
            <View style={$switchContainer}>
              <View 
                accessible
                accessibilityLabel="in App notification"
                accessibilityHint="in App notification switch"
                accessibilityRole="text"
                style={$labelContainer}
              >
                <Text tx="settings.notificationSettingsData.inAppLabel" style={$label} />
              </View>
              <Toggle
                accessible
                accessibilityLabel="switch button"
                accessibilityHint="toggle in App notification"
                variant="switch" 
                value={settings?.inApp} 
                onValueChange={(value) => handleChange(value, 'inApp')}
              />
            </View>
          </ExpandContainer>
          <ExpandContainer title="settings.notificationSettingsData.notifyMeBefore" expandble={false}>
            <Dropdown
              accessibilityLabel="period select"
              style={[$dropdown, $inputMargin]}
              placeholderStyle={[$dropdownText, $dropdownPlaceholder]}
              selectedTextStyle={[$dropdownText, $dropdownSelected]}
              placeholder={translate("settings.contactUsData.titlePlaceholder")}
              data={[
                { label: "15 min", value: 15 },
                { label: "30 min", value: 30 },
              ]}
              itemContainerStyle={{
                backgroundColor: colors.palette.neutral350,
              }}
              containerStyle={$dropdownContainer}
              itemTextStyle={$dropdownText}
              activeColor={colors.palette.neutral450}
              value={settings?.notifyBefore}
              labelField="label"
              valueField="value"
              onChange={({ value }) => handleChange(value, 'notifyBefore')}
              renderRightIcon={() => (
                <Icon
                  icon="chevronDown"
                  size={28}
                  color={colors.palette.neutral450}
                  containerStyle={$dropdownRightAccessory}
                />
              )}
            />
          </ExpandContainer>
          <Text tx="settings.notificationSettingsData.privacyTitle" style={$title} />
          <ExpandContainer title="settings.notificationSettingsData.turnOffNotifications" expandble={false}>
            <View style={$muteContainer}>
              <View style={$muteButton}>
                <Text tx="settings.notificationSettingsData.from" style={$muteButtonLabel} />
                <Button
                  accessible
                  accessibilityLabel="from picker button"
                  accessibilityHint="open time picker"
                  textStyle={$buttonText}
                  style={$button}
                  pressedStyle={$button}
                  text={formatDate(settings?.muteFrom?.toISOString(), "h:mm aa")}
                  onPress={() => setFrom(true)}
                  renderRightAccessory={() => (
                    <Icon
                      icon="chevronDown"
                      size={28}
                      color={colors.palette.neutral250}
                      containerStyle={$timeButtonRightAccessory}
                    />
                  )}
                />
              </View>
              <View style={$muteButton}>
                <Text tx="settings.notificationSettingsData.until" style={$muteButtonLabel} />
                <Button
                  accessible
                  accessibilityLabel="until picker button"
                  accessibilityHint="open time picker"
                  textStyle={$buttonText}
                  style={$button}
                  pressedStyle={$button}
                  text={formatDate(settings?.muteUntil?.toISOString(), "h:mm aa")}
                  onPress={() => setUntil(true)}
                  renderRightAccessory={() => (
                    <Icon
                      icon="chevronDown"
                      size={28}
                      color={colors.palette.neutral250}
                      containerStyle={$timeButtonRightAccessory}
                    />
                  )}
                />
              </View>
            </View>
          </ExpandContainer>
          <DateTimePickerModal
            isVisible={from}
            mode="time"
            date={settings?.muteFrom}
            onConfirm={(date) => {
              setFrom(false)
              handleChange(date, 'muteFrom')
            }}
            onCancel={() => setFrom(false)}
          />
          <DateTimePickerModal
            isVisible={until}
            mode="time"
            date={settings?.muteUntil}
            onConfirm={(date) => {
              setUntil(false)
              handleChange(date, 'muteUntil')
            }}
            onCancel={() => setUntil(false)}
          />
        </Pressable>
      </ScrollView>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  height: '100%'
}

const $scrollContentContainerStyle: ViewStyle = { 
  flexGrow: 1,
  paddingBottom: 60
}

const $scrollContainer: ViewStyle = { 
  paddingHorizontal: 36,
}

const $backButton: ViewStyle = {
  flexDirection: "row",
  alignItems: 'center',
  paddingBottom: 11
}

const $muteContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between"
}

const $muteButton: ViewStyle = {
  width: '47%'
}

const $text: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 18,
  lineHeight: 22,
  color: colors.palette.neutral450,
  textAlign: 'left',
  paddingBottom: 24
}

const $backButtonText: TextStyle = {
  ...$text,
  color: colors.palette.neutral250,
  paddingBottom: 0,
  paddingLeft: 5
}

const $title: TextStyle = {
  ...$text,
  fontSize: 36,
  lineHeight: 44,
  color: colors.palette.neutral250,
}

const $switchContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: 18,
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.neutral350,
  marginBottom: 18
}

const $labelContainer: ViewStyle = {
  width: "70%"
}

const $label: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 24,
  fontFamily: typography.primary.normal,
  lineHeight: 29,
}

const $tip: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: 18,
  fontFamily: typography.primary.light,
  lineHeight: 22,
}
const $muteButtonLabel: TextStyle = {
  ...$tip,
  color: colors.palette.neutral250,
  marginBottom: 10
}

const $dropdown: ViewStyle = {
  borderRadius: 28,
  height: 56,
  backgroundColor: colors.palette.neutral350,
  overflow: "hidden",
}

const $inputMargin: ViewStyle = {
  marginBottom: 18
}

const $dropdownContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  borderRadius: 10,
  marginTop: -40,
  borderWidth: 0
}

const $dropdownPlaceholder: TextStyle = {
  color: colors.palette.neutral450,
}

const $dropdownSelected: TextStyle = {
  color: colors.palette.neutral250,
}

const $dropdownText: TextStyle = {
  flex: 1,
  // alignSelf: "stretch",
  fontFamily: typography.primary.normal,
  fontSize: 18,
  paddingVertical: 0,
  paddingHorizontal: 0,
  marginHorizontal: spacing.small,
  textAlignVertical: "center",
  color: colors.palette.neutral250
}

const $dropdownRightAccessory: ViewStyle = {
  marginEnd: spacing.large,
  height: 56,
  justifyContent: "center",
  alignItems: "center",
}
const $timeButtonRightAccessory: ViewStyle = {
  height: 56,
  justifyContent: "center",
  alignItems: "center",
}

const $button: ViewStyle = {
  width: "100%",
  height: 56,
  backgroundColor: colors.palette.neutral550,
  borderRadius: 28,
  borderWidth: 0,
  paddingHorizontal: 28,
  justifyContent: "space-between"
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.normal,
  lineHeight: 21,
}
