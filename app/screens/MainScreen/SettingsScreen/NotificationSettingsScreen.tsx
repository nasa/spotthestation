import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { ViewStyle, TextStyle, ScrollView, Pressable, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import Modal from "react-native-modal"
import i18n from "i18n-js"
import * as storage from "../../../utils/storage"
import { Button, Icon, Screen, Text, Toggle } from "../../../components"
import { translate } from "../../../i18n"
import { colors, typography } from "../../../theme"
import { ExpandContainer } from "../components/ExpandContainer"
import { formatDate, getCurrentTimeZone } from "../../../utils/formatDate"
import { Sightings } from "../HomeScreen/Sightings"
import { useStores } from "../../../models"
import { StyleFn, useStyles } from "../../../utils/useStyles"
import { CustomDropdown } from "../components/CustomDropdown"

export const NotificationSettingsScreen = observer(function NotificationSettingsScreen() {
  const {
    $headerStyleOverride,
    $container,
    $modal,
    $scrollContentContainerStyle,
    $scrollContainer,
    $backButton,
    $muteContainer,
    $muteButton,
    $backButtonText,
    $title,
    $switchContainer,
    $labelContainer,
    $label,
    $tip,
    $muteButtonLabel,
    $timeButtonRightAccessory,
    $button,
    $buttonText,
    $disabled,
    $cta,
    $privacyContainer,
    $notifyBefore,
    $mt0,
  } = useStyles(styles)

  const navigation = useNavigation()
  const {
    selectedLocation,
    currentLocation,
    savedLocations,
    setISSSightings,
    setNotifications,
    setCurrentLocation,
    setSelectedLocation,
    setSavedLocations,
    setSightingsTimeOfDay,
    setSightingsDuration,
    getFilteredSightings,
  } = useStores()
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
    muteUntil: new Date(),
  })

  const [isSightings, setIsSightings] = useState(false)
  const current = useMemo(
    () => selectedLocation || currentLocation,
    [selectedLocation, currentLocation],
  )

  const isNotifyAll = useMemo(() => {
    return (
      currentLocation?.sightings.every((item) => item.notify) &&
      savedLocations?.every((location) => location.sightings.every((item) => item.notify))
    )
  }, [currentLocation, savedLocations])

  const loadSettings = async () => {
    const start = (await storage.load("muteFrom")) as string
    const end = (await storage.load("muteUntil")) as string
    const notifyBefore = await storage.load("notifyBefore")

    setSettings({
      iisVisible: await storage.load("iisVisible"),
      upcoming: await storage.load("upcoming"),
      inApp: await storage.load("inApp"),
      notifyBefore: notifyBefore || 15,
      privacy: await storage.load("privacy"),
      muteFrom: start ? new Date(start) : new Date(),
      muteUntil: end ? new Date(end) : new Date(),
    })
    !notifyBefore && (await storage.save("notifyBefore", 15))
  }

  useEffect(() => {
    loadSettings().catch(console.error)
  }, [])

  const handleToggleNotifications = useCallback(() => {
    setCurrentLocation(
      {
        ...currentLocation,
        sightings: currentLocation.sightings.map((s) => ({ ...s, notify: !isNotifyAll })),
      },
      true,
    ).catch((e) => console.log(e))

    if (selectedLocation) {
      setSelectedLocation(
        {
          ...selectedLocation,
          sightings: selectedLocation.sightings.map((s) => ({ ...s, notify: !isNotifyAll })),
        },
        true,
      ).catch((e) => console.log(e))
    }

    setSavedLocations(
      savedLocations.map((item) => ({
        ...item,
        sightings: item.sightings.map((s) => ({ ...s, notify: !isNotifyAll })),
      })),
    )

    setSettings({
      ...settings,
      upcoming: !isNotifyAll,
    })

    storage.save("upcoming", !isNotifyAll).catch(console.error)

    setNotifications()
  }, [currentLocation, selectedLocation, savedLocations, isNotifyAll, settings])

  const handleChange = useCallback(
    async (value, field: string) => {
      setSettings({
        ...settings,
        [field]: value,
      })
      await storage.save(field, value)
      setNotifications()
    },
    [settings],
  )

  const handleSetSightingNotification = useCallback(
    (value: string) => {
      const updated = {
        ...current,
        sightings: current.sightings.map((item) => {
          if (item.date === value) {
            return { ...item, notify: !item.notify }
          }
          return item
        }),
      }
      setISSSightings(updated)
    },
    [current],
  )

  const handleSetSightingNotificationToAll = useCallback(
    (notify: boolean) => {
      const updated = {
        ...current,
        sightings: current.sightings.map((item) => ({ ...item, notify })),
      }
      setISSSightings(updated)
    },
    [current],
  )

  const handleCtaPress = () => {
    setIsSightings(true)
  }

  const handleChangeTimeOfDay = useCallback(
    (value: string) => {
      setSightingsTimeOfDay(current, value)
    },
    [current],
  )

  const handleChangeDuration = useCallback(
    (value: string) => {
      setSightingsDuration(current, value)
    },
    [current],
  )

  const headerStyle = { ...$headerStyleOverride }
  headerStyle.top = Number(headerStyle.top) + topInset
  headerStyle.paddingBottom = Number(headerStyle.paddingBottom) + bottomInset

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={[$container, headerStyle]}
      style={{ backgroundColor: colors.palette.neutral900 }}
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
              <Pressable onPress={handleCtaPress} style={$cta}>
                <Text
                  tx="settings.notificationSettingsData.customizeLabel"
                  style={[$tip, { color: colors.palette.buttonBlue }]}
                />
              </Pressable>
            </View>
            <Toggle
              accessible
              accessibilityLabel="switch button"
              accessibilityHint="toggle upcoming events notifications"
              variant="switch"
              value={isNotifyAll}
              onValueChange={handleToggleNotifications}
            />
          </View>
          <ExpandContainer
            title="settings.notificationSettingsData.notifyMeBefore"
            expandble={false}
            containerStyle={$notifyBefore}
          >
            <CustomDropdown
              data={[
                { label: `2 ${translate("units.minute")}`, value: 2 },
                { label: `5 ${translate("units.minute")}`, value: 5 },
                { label: `10 ${translate("units.minute")}`, value: 10 },
                { label: `15 ${translate("units.minute")}`, value: 15 },
                { label: `30 ${translate("units.minute")}`, value: 30 },
                { label: `60 ${translate("units.minute")}`, value: 60 },
              ]}
              onValueChange={(value) => handleChange(value, "notifyBefore")}
              value={settings?.notifyBefore}
            />
          </ExpandContainer>
          <View style={[$switchContainer, $privacyContainer]}>
            <Text tx="settings.notificationSettingsData.privacyTitle" style={$label} />
            <Toggle
              accessible
              accessibilityLabel="switch button"
              accessibilityHint="toggle privacy notifications"
              variant="switch"
              value={settings?.privacy}
              onValueChange={(value) => handleChange(value, "privacy")}
            />
          </View>
          <ExpandContainer
            title="settings.notificationSettingsData.turnOffNotifications"
            expandble={false}
            containerStyle={$mt0}
          >
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
              handleChange(date, "muteFrom").catch(console.error)
            }}
            onCancel={() => setFrom(false)}
          />
          <DateTimePickerModal
            isVisible={until}
            mode="time"
            date={settings?.muteUntil}
            onConfirm={(date) => {
              setUntil(false)
              handleChange(date, "muteUntil").catch(console.error)
            }}
            onCancel={() => setUntil(false)}
          />
        </Pressable>
      </ScrollView>
      {isSightings && (
        <Modal
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
            sightings={current ? getFilteredSightings(current) : []}
            timeOfDay={current?.filterTimeOfDay || ""}
            duration={current?.filterDuration || ""}
            onTimeOfDayChange={handleChangeTimeOfDay}
            onDurationChange={handleChangeDuration}
            onToggle={handleSetSightingNotification}
            onToggleAll={handleSetSightingNotificationToAll}
            isUS={i18n.locale === "en"}
            isNotifyAll={current && current.sightings.every((item) => item.notify)}
            timezone={current?.timezone || getCurrentTimeZone()}
            lastSightingOrbitPointAt={current?.lastSightingOrbitPointAt}
          />
        </Modal>
      )}
    </Screen>
  )
})

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $headerStyleOverride: TextStyle = {
    top: scale(24),
    paddingBottom: scale(24),
  }

  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    height: "100%",
  }

  const $modal: ViewStyle = {
    flex: 1,
    justifyContent: "flex-end",
    left: 0,
    margin: 0,
  }

  const $scrollContentContainerStyle: ViewStyle = {
    flexGrow: 1,
    paddingBottom: scale(60),
  }

  const $scrollContainer: ViewStyle = {
    paddingHorizontal: scale(36),
  }

  const $backButton: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: scale(11),
  }

  const $muteContainer: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
  }

  const $muteButton: ViewStyle = {
    width: "47%",
  }

  const $text: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.neutral450,
    textAlign: "left",
    paddingBottom: scale(24),
  }

  const $backButtonText: TextStyle = {
    ...$text,
    color: colors.palette.neutral250,
    paddingBottom: 0,
    paddingLeft: scale(5),
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
    marginBottom: scale(18),
  }

  const $labelContainer: ViewStyle = {
    width: "70%",
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
    marginBottom: scale(10),
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
    justifyContent: "space-between",
  }

  const $buttonText: TextStyle = {
    color: colors.palette.neutral100,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.normal,
    lineHeight: lineHeights[21],
  }

  const $disabled: ViewStyle = {
    opacity: 0.5,
  }

  const $cta = { marginTop: scale(10) }

  const $privacyContainer = { marginTop: scale(15), borderBottomWidth: 0 }
  const $notifyBefore = {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.palette.neutral350,
  }

  const $mt0 = { marginTop: 0 }

  return {
    $headerStyleOverride,
    $container,
    $modal,
    $scrollContentContainerStyle,
    $scrollContainer,
    $backButton,
    $muteContainer,
    $muteButton,
    $text,
    $backButtonText,
    $title,
    $switchContainer,
    $labelContainer,
    $label,
    $tip,
    $muteButtonLabel,
    $timeButtonRightAccessory,
    $button,
    $buttonText,
    $disabled,
    $cta,
    $privacyContainer,
    $notifyBefore,
    $mt0,
  }
}
