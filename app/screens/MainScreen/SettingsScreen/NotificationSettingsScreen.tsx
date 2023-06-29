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
import Modal from "react-native-modal"
import * as storage from "../../../utils/storage"
import { Button, Icon, Screen, Text, Toggle } from "../../../components"
import { translate } from "../../../i18n"
import { colors, fontSizes, lineHeights, scale, spacing, typography } from "../../../theme"
import { ExpandContainer } from "../components/ExpandContainer"
import { formatDate, getCurrentTimeZome } from "../../../utils/formatDate"
import { Sightings } from "../HomeScreen/Sightings"
import { LocationType } from "../../OnboardingScreen/SignupLocation"
import { ISSSighting } from "../../../services/api/api.types"
import { useStores } from "../../../models"

export const NotificationSettingsScreen = observer(function NotificationSettingsScreen() {
  const navigation = useNavigation()
  const { selectedLocation, currentLocation, setISSSightings, setNotifications } = useStores()
  const topInset = useSafeAreaInsets().top
  const bottomInset = useSafeAreaInsets().bottom
  const [from, setFrom] = useState(false)
  const [until, setUntil] = useState(false)
  const [settings, setSettings] = useState({
    iisVisible: false,
    upcoming: false,
    inApp: false,
    notifyBefore: 15,
    privacy: false,
    muteFrom: new Date(),
    muteUntil: new Date()
  })

  const [isSightings, setIsSightings] = useState(false)
  const [current, setCurrent] = useState<LocationType>(null)
  const [currentTimeZone, setCurrentTimeZone] = useState({ timeZone: 'US/Central', regionFormat: 'US' })

  const $headerStyleOverride: TextStyle = {
    top: topInset + scale(24),
  }

  const loadSettings = async () => {
    const start = await storage.load('muteFrom')
    const end = await storage.load('muteUntil')
    const notifyBefore = await storage.load('notifyBefore')

    setSettings({
      iisVisible: await storage.load('iisVisible'),
      upcoming: await storage.load('upcoming'),
      inApp: await storage.load('inApp'),
      notifyBefore: notifyBefore || 15,
      privacy: await storage.load('privacy'),
      muteFrom: start ? new Date(start) : new Date(),
      muteUntil: end ? new Date(end) : new Date()
    })
    !notifyBefore && await storage.save('notifyBefore', 15)
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
    setNotifications()
  }, [settings])

  const handleSetSightingNotification = useCallback((value: ISSSighting) => {
    const updated = {...current, sightings: current.sightings.map(item => {
      if (item.date === value.date) {
        return {...item, notify: !item.notify}
      }
      return item
    })}
    setISSSightings(updated)
    setCurrent(updated)
  }, [current])

  const handleSetSightingNotificationToAll = useCallback((notify: boolean) => {
    const updated = {...current, sightings: current.sightings.map(item => ({...item, notify}))}
    setISSSightings(updated)
    setCurrent(updated)
  }, [current])

  const handleCtaPress = () => {
    setIsSightings(true)
  }

  const getTimeZone = async (location: LocationType) => {
    const { timeZone, regionFormat } = await getCurrentTimeZome(location)
    setCurrentTimeZone({ timeZone, regionFormat })
  }

  useEffect(() => {
    if (!current) return
    
    getTimeZone(current).catch(e => console.log(e))
  }, [current])

  const getCurrentLocation = useCallback(() => {
    if (selectedLocation) {
      setCurrent(selectedLocation)
    } else {
      setCurrent(currentLocation)
    }
  }, [selectedLocation, currentLocation])

  useEffect(() => {
    getCurrentLocation()
  }, [getCurrentLocation])

  return (
    <Screen
      preset="fixed" 
      contentContainerStyle={[$container, $headerStyleOverride, { paddingBottom: bottomInset + scale(24) }]} 
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
            <Icon icon="caretLeft" color={colors.palette.neutral250} size={24} />
            <Text tx="settings.notificationSettingsData.backButton" style={$backButtonText} />
          </Pressable>
          <Text tx="settings.notificationSettingsData.notificationTitle" style={$title} />
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
              <Pressable
                onPress={handleCtaPress}
                style={{ marginTop: scale(10) }}
              >
                <Text tx="settings.notificationSettingsData.customizeLabel" style={[$tip, { color: colors.palette.buttonBlue }]} />
              </Pressable>
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
          <ExpandContainer title="settings.notificationSettingsData.notifyMeBefore" expandble={false} containerStyle={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: colors.palette.neutral350}}>
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
          <View style={[$switchContainer, { marginTop: scale(15), borderBottomWidth: 0 }]}>
            <Text tx="settings.notificationSettingsData.privacyTitle" style={$label} />
            <Toggle
              accessible
              accessibilityLabel="switch button"
              accessibilityHint="toggle privacy notifications"
              variant="switch" 
              value={settings?.privacy}
              onValueChange={(value) => handleChange(value, 'privacy')}
            />
          </View>
          <ExpandContainer title="settings.notificationSettingsData.turnOffNotifications" expandble={false} containerStyle={{ marginTop: 0}}>
            <View style={$muteContainer}>
              <View style={$muteButton}>
                <Text tx="settings.notificationSettingsData.from" style={$muteButtonLabel} />
                <Button
                  accessible
                  accessibilityLabel="from picker button"
                  accessibilityHint="open time picker"
                  textStyle={$buttonText}
                  style={[$button, !settings.privacy && $disabled]}
                  pressedStyle={[$button, !settings.privacy && $disabled]}
                  disabled={!settings.privacy}
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
                  style={[$button, !settings.privacy && $disabled]}
                  pressedStyle={[$button, !settings.privacy && $disabled]}
                  disabled={!settings.privacy}
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
      {isSightings && <Modal
        isVisible={isSightings}
        onBackdropPress={() => setIsSightings(!isSightings)}
        onSwipeComplete={() => setIsSightings(!isSightings)}
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
        <Sightings 
          onClose={() => setIsSightings(!isSightings)} 
          sightings={current ? current.sightings : []}
          onToggle={handleSetSightingNotification}
          onToggleAll={handleSetSightingNotificationToAll}
          isUS={currentTimeZone.regionFormat === 'US'}
          isNotifyAll={current && current.sightings.every(item => item.notify)}
          timezone={currentTimeZone?.timeZone}
        />
      </Modal>}
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  height: '100%'
}

const $modal: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-end',
  left: 0,
  margin: 0
}

const $scrollContentContainerStyle: ViewStyle = { 
  flexGrow: 1,
  paddingBottom: scale(60)
}

const $scrollContainer: ViewStyle = { 
  paddingHorizontal: scale(36),
}

const $backButton: ViewStyle = {
  flexDirection: "row",
  alignItems: 'center',
  paddingBottom: scale(11)
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
  fontSize: fontSizes[18],
  lineHeight: lineHeights[22],
  color: colors.palette.neutral450,
  textAlign: 'left',
  paddingBottom: scale(24)
}

const $backButtonText: TextStyle = {
  ...$text,
  color: colors.palette.neutral250,
  paddingBottom: 0,
  paddingLeft: scale(5)
}

const $title: TextStyle = {
  ...$text,
  fontSize: fontSizes[36],
  lineHeight: lineHeights[44],
  color: colors.palette.neutral250,
}

const $switchContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: scale(18),
  borderBottomWidth: scale(1),
  borderBottomColor: colors.palette.neutral350,
  marginBottom: scale(18)
}

const $labelContainer: ViewStyle = {
  width: "70%"
}

const $label: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: fontSizes[24],
  fontFamily: typography.primary.normal,
  lineHeight: lineHeights[29],
}

const $tip: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: fontSizes[18],
  fontFamily: typography.primary.light,
  lineHeight: lineHeights[22],
}
const $muteButtonLabel: TextStyle = {
  ...$tip,
  color: colors.palette.neutral250,
  marginBottom: scale(10)
}

const $dropdown: ViewStyle = {
  borderRadius: scale(28),
  height: scale(56),
  backgroundColor: colors.palette.neutral350,
  overflow: "hidden",
}

const $inputMargin: ViewStyle = {
  marginBottom: scale(18)
}

const $dropdownContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  borderRadius: scale(10),
  marginTop: -scale(40),
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
  fontSize: fontSizes[18],
  paddingVertical: 0,
  paddingHorizontal: 0,
  marginHorizontal: scale(spacing.small),
  textAlignVertical: "center",
  color: colors.palette.neutral250
}

const $dropdownRightAccessory: ViewStyle = {
  marginEnd: scale(spacing.large),
  height: scale(56),
  justifyContent: "center",
  alignItems: "center",
}
const $timeButtonRightAccessory: ViewStyle = {
  height: scale(56),
  justifyContent: "center",
  alignItems: "center",
}

const $button: ViewStyle = {
  width: "100%",
  height: scale(56),
  backgroundColor: colors.palette.neutral550,
  borderRadius: scale(28),
  borderWidth: 0,
  paddingHorizontal: scale(16),
  justifyContent: "space-between"
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: fontSizes[18],
  fontFamily: typography.primary.normal,
  lineHeight: lineHeights[21],
}

const $disabled: ViewStyle = {
  opacity: .5
}
