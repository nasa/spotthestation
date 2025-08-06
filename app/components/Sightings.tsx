import {
  Text,
  Button,
  Toggle,
  ExpandContainer,
  ListItem,
  SightingsFilterDropdown,
  Icon,
  IconTypes,
  PermissionsModal,
} from "."
import { StyleFn, useStyles } from "../utils/useStyles"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  ViewStyle,
  View,
  PressableProps,
  TextStyle,
  ScrollView,
  Platform,
  FlatList,
  ImageStyle,
} from "react-native"
import Modal from "react-native-modal"

import { colors, spacing, typography } from "../theme"

import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { formatDate, formatSightingDateTime } from "../utils/datetime"
import { ISSSighting, LocationType } from "../services/api"
import * as storage from "../utils/storage"
import { normalizeHeight } from "../utils/normalizeHeight"
import { translate, TxKeyPath } from "../i18n"

import i18n from "i18n-js"
import { ensureExactAlarmPermissions } from "../utils/notifications"
import Share from "react-native-share"
import { APP_UNIVERSAL_LINK } from "../utils/unilinks"
import { headingToCompass } from "../utils/geometry"
import { CalendarPermissionError, createSightingEvent } from "../utils/calendar"
import Snackbar from "react-native-snackbar"
import { openSettings } from "react-native-permissions"
import { PastSightings } from "./PastSightings"

export interface SightingsProps {
  location: LocationType
  sightings: ISSSighting[]
  isUS?: boolean
  isNotifyAll?: boolean
  timeFormat: string
  timezone?: string
  onClose?: PressableProps["onPress"]
  onToggle?: (date: string) => void
  onToggleAll?: (value: boolean) => void
  lastSightingOrbitPointAt?: string
  timeOfDay: string
  duration: string
  maxHeight: string
  onTimeOfDayChange: (value: string) => void
  onDurationChange: (value: string) => void
  onMaxHeightChange: (value: string) => void
  cloudCover: string
  onCloudCoverChange: (value: string) => void
  hasPastSightings?: boolean
  hasCloseButton?: boolean
  style?: any
}

interface SightingListItemProps {
  sighting: ISSSighting
  timezone?: string
  isUS?: boolean
  timeFormat: string
  handleToggle: (date: string) => void
  onShare: (date: string) => void
  onCalendar: (date: string) => void
}

const $dropdownIcon: ViewStyle = { height: 43, justifyContent: "center" }

const stageIcons: { icon: IconTypes; color: string }[] = [
  { icon: "moon", color: colors.palette.neutral450 },
  { icon: "sunset", color: colors.palette.nasaOrange },
  { icon: "sun", color: colors.palette.yellow },
]

const getSightingDescription = (sighting: ISSSighting) => {
  return `${translate("homeScreen.selectSightings.aboveHorizon")} ${sighting.visible} ${translate(
    "units.minute",
  )}
${translate("homeScreen.selectSightings.maxHeight")} ${sighting.maxHeight}°
${translate("homeScreen.selectSightings.appears")}: ${sighting.minAltitude}° ${translate(
    `homeScreen.selectSightings.compass.${headingToCompass(sighting.minAzimuth)}`,
  )}
${translate("homeScreen.selectSightings.disappears")}: ${sighting.maxAltitude}° ${translate(
    `homeScreen.selectSightings.compass.${headingToCompass(sighting.maxAzimuth)}`,
  )}`
}

const SightingListItem = React.memo(function SightingListItem({
  sighting,
  timezone,
  isUS,
  timeFormat,
  handleToggle,
  onShare,
  onCalendar,
}: SightingListItemProps) {
  const setStageIcon = (stage): { icon: IconTypes; color: string } => {
    if (stage >= 0 && stage <= 2) return stageIcons[stage]
    return stageIcons[1]
  }

  const title = useMemo(
    () => formatSightingDateTime(sighting.date, timeFormat, timezone, isUS),
    [sighting.date, timeFormat, timezone, isUS],
  )

  return (
    <ListItem
      key={sighting.date}
      value={sighting.date}
      icon="clock"
      secondIcon={setStageIcon(sighting.dayStage)}
      title={title}
      selected={sighting.notify}
      subtitle={`${translate("homeScreen.selectSightings.aboveHorizon")} ${
        sighting.visible
      } ${translate("units.minute")}`}
      subtitle2={`${translate("homeScreen.selectSightings.maxHeight")} ${sighting.maxHeight}°`}
      subtitle3={`${translate("homeScreen.selectSightings.appears")}: ${
        sighting.minAltitude
      }° ${translate(
        `homeScreen.selectSightings.compass.${headingToCompass(sighting.minAzimuth)}`,
      )}`}
      subtitle4={`${translate("homeScreen.selectSightings.disappears")}: ${
        sighting.maxAltitude
      }° ${translate(
        `homeScreen.selectSightings.compass.${headingToCompass(sighting.maxAzimuth)}`,
      )}`}
      subtitle5={`${translate("homeScreen.selectSightings.cloudCover.title")}: ${
        sighting.cloudCover === null ? "-" : `${sighting.cloudCover}%`
      }`}
      withSwitch
      onToggle={handleToggle}
      withShare
      onShare={onShare}
      withCalendar
      onCalendar={onCalendar}
    />
  )
})

export const Sightings = React.memo(function Sightings({
  onClose,
  location,
  sightings,
  onToggle,
  onToggleAll,
  isUS,
  timeFormat,
  isNotifyAll,
  timezone,
  lastSightingOrbitPointAt,
  timeOfDay,
  duration,
  maxHeight,
  onTimeOfDayChange,
  onDurationChange,
  onMaxHeightChange,
  cloudCover,
  onCloudCoverChange,
  hasPastSightings,
  hasCloseButton = true,
  style,
}: SightingsProps) {
  const {
    $modalBodyContainer,
    $coachModalBodyContainer,
    $scrollContainer,
    $close,
    $modalTitle,
    $selectMessageText,
    $switchContainer,
    $label,
    $modal,
    $legend,
    $body,
    $nextButton,
    $nextButtonText,
    $emptyText,
    $filtersContainer,
    $timeOfDayItem,
    $timeOfDayText,
    $coachModalScrollContainer,
    $scrollTitle,
    $flex,
    $shareAll,
    $expandContainer,
    $button,
    $buttonText,
    $horizontalScrollContainer,
    $active,
    $bottomButtons,
    $buttonIcon,
    $paddingRight,
  } = useStyles(styles)

  const scrollViewRef = useRef<FlatList<ISSSighting>>()
  const tabsScrollViewRef = useRef<ScrollView>()

  const timeOfDayOptions = useMemo(
    () => [
      {
        label: translate("homeScreen.selectSightings.all"),
        value: "",
      },
      {
        label: (
          <View style={$timeOfDayItem}>
            <Icon icon="moon" size={40} color="white" containerStyle={$dropdownIcon} />
            <Text style={$timeOfDayText} tx="homeScreen.selectSightings.night" />
          </View>
        ),
        value: "0",
      },
      {
        label: (
          <View style={$timeOfDayItem}>
            <Icon icon="sunset" size={40} color="white" containerStyle={$dropdownIcon} />
            <Text style={$timeOfDayText} tx="homeScreen.selectSightings.twilight" />
          </View>
        ),
        value: "1",
      },
    ],
    [i18n.locale, $timeOfDayItem, $timeOfDayText],
  )

  const durationOptions = useMemo(
    () => [
      {
        label: translate("homeScreen.selectSightings.all"),
        value: "",
      },
      {
        label: translate("homeScreen.selectSightings.shorterThan2"),
        value: "shorterThan2",
      },
      {
        label: translate("homeScreen.selectSightings.between2And4"),
        value: "between2And4",
      },
      {
        label: translate("homeScreen.selectSightings.longerThan4"),
        value: "longerThan4",
      },
    ],
    [i18n.locale],
  )

  const heightOptions = useMemo(
    () => [
      {
        label: translate("homeScreen.selectSightings.all"),
        value: "",
      },
      {
        label: ">15°",
        value: "15",
      },
      {
        label: ">30°",
        value: "30",
      },
      {
        label: ">45°",
        value: "45",
      },
      {
        label: ">60°",
        value: "60",
      },
      {
        label: ">75°",
        value: "75",
      },
    ],
    [],
  )

  const cloudCoverOptions = useMemo(
    () => [
      {
        label: translate("homeScreen.selectSightings.cloudCover.any"),
        value: "",
      },
      {
        label: translate("homeScreen.selectSightings.cloudCover.low"),
        value: "low",
      },
      {
        label: translate("homeScreen.selectSightings.cloudCover.medium"),
        value: "medium",
      },
    ],
    [i18n.locale],
  )

  const $marginTop = useSafeAreaInsetsStyle(["top"], "margin")
  const $paddingBottom = useSafeAreaInsetsStyle(["bottom"], "padding")
  const [sightingsCoachVisible, setSightingsCoachVisible] = useState(false)
  const [isPermissionsModal, setIsPermissionsModal] = useState(false)
  const [type, setType] = useState("upcomingSightings")

  useEffect(() => {
    if (Platform.OS !== "ios") return

    setTimeout(() => {
      scrollViewRef.current?.flashScrollIndicators()
    }, 100)
  }, [])

  useEffect(() => {
    if (type === "upcomingSightings") tabsScrollViewRef.current.scrollTo(0)
    if (type === "pastSightings") tabsScrollViewRef.current.scrollToEnd({ animated: true })
  }, [type])

  const getCoach = async () => {
    setSightingsCoachVisible(!(await storage.load(storage.KEYS.SIGHTINGS_COACH_VISIBLE)))
  }

  useEffect(() => {
    getCoach().catch((e) => console.log(e))
  }, [])

  const handleSetSightingsCoachVisible = async () => {
    setSightingsCoachVisible(false)
    await storage.save(storage.KEYS.SIGHTINGS_COACH_VISIBLE, true)
  }

  const handleToggle = useCallback(
    async (date: string) => {
      const permitted = await ensureExactAlarmPermissions()
      if (!permitted) return
      onToggle(date)
    },
    [sightings, onToggle],
  )

  const onShare = useCallback(
    async (date: string) => {
      const sighting = sightings.find((s) => s.date === date)
      if (!sighting) return

      const subject = `${translate("homeScreen.selectSightings.shareTitle", {
        location: location.title,
        date: formatSightingDateTime(sighting.date, timeFormat, timezone, isUS),
      })}`
      const message = `${subject}!
${getSightingDescription(sighting)}
${translate("homeScreen.selectSightings.shareLink")}: ${APP_UNIVERSAL_LINK}
`

      const shareOptions = {
        message,
        subject,
        failOnCancel: false,
        type: undefined,
      }

      await Share.open(shareOptions)
    },
    [sightings, location],
  )

  const onShareAll = useCallback(async () => {
    const subject = `${translate("homeScreen.selectSightings.shareAllTitle", {
      location: location.title,
    })}`

    const messageBody = sightings
      .map(
        (sighting) =>
          `${formatSightingDateTime(sighting.date, timeFormat, timezone, isUS)}!
${getSightingDescription(sighting)}`,
      )
      .join("\n\n")

    const message = `${subject}
${messageBody}

${translate("homeScreen.selectSightings.shareLink")}: ${APP_UNIVERSAL_LINK}
`

    const shareOptions = {
      message,
      subject,
      failOnCancel: false,
      type: undefined,
    }

    await Share.open(shareOptions)
  }, [sightings, location])

  const onCalendar = useCallback(
    async (date: string) => {
      const sighting = sightings.find((s) => s.date === date)
      if (!sighting) return

      try {
        await createSightingEvent(location, sighting)
        Snackbar.show({
          text: translate("homeScreen.selectSightings.calendarSuccess"),
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: translate("snackBar.dismiss"),
            textColor: "green",
            onPress: () => {
              Snackbar.dismiss()
            },
          },
        })
      } catch (e) {
        if (e instanceof CalendarPermissionError) {
          setIsPermissionsModal(true)
        } else {
          console.error(e)
          Snackbar.show({
            text: translate("homeScreen.selectSightings.calendarError"),
            duration: Snackbar.LENGTH_LONG,
            action: {
              text: translate("snackBar.dismiss"),
              textColor: "red",
              onPress: () => {
                Snackbar.dismiss()
              },
            },
          })
        }
      }
    },
    [sightings, location],
  )

  const safeAreaPaddingBottom = Number($paddingBottom.paddingBottom)
  $paddingBottom.paddingBottom = Math.max(
    Number.isNaN(safeAreaPaddingBottom) ? 0 : safeAreaPaddingBottom,
    12,
  )

  return (
    <View style={[$modalBodyContainer, $marginTop, $paddingBottom, style]}>
      {hasCloseButton && (
        <Icon
          icon="x"
          accessible
          accessibilityLabel="x button"
          accessibilityHint="close modal"
          accessibilityRole="button"
          color={colors.palette.neutral450}
          onPress={onClose}
          containerStyle={$close}
          size={36}
        />
      )}
      <View style={[$horizontalScrollContainer, hasCloseButton && $paddingRight]}>
        <ScrollView horizontal ref={tabsScrollViewRef}>
          {["upcomingSightings", hasPastSightings && "pastSightings"]
            .filter(Boolean)
            .map((item) => (
              <Button
                key={item}
                accessible
                accessibilityLabel={`${item} button`}
                accessibilityHint={`show ${item} view`}
                tx={`homeScreen.selectSightings.${item}` as TxKeyPath}
                style={[$button, type === item && $active]}
                textStyle={$buttonText}
                pressedStyle={$button}
                onPress={() => setType(item)}
              />
            ))}
        </ScrollView>
      </View>

      {type === "upcomingSightings" && (
        <>
          <Text
            accessible
            accessibilityLabel="title"
            accessibilityHint="title"
            accessibilityRole="text"
            tx="homeScreen.selectSightings.selectMessage"
            style={$selectMessageText}
          />
          <View style={$switchContainer}>
            <Text tx="homeScreen.selectSightings.switch" style={$label} />
            <Toggle
              accessible
              accessibilityLabel="switch button"
              accessibilityHint="toggle notifications"
              variant="switch"
              value={isNotifyAll}
              onValueChange={async () => {
                const permitted = await ensureExactAlarmPermissions()
                if (!permitted) return
                onToggleAll(!isNotifyAll)
              }}
            />
          </View>

          <View style={$filtersContainer}>
            <SightingsFilterDropdown
              title="homeScreen.selectSightings.timeOfDay"
              options={timeOfDayOptions}
              value={timeOfDay}
              onChange={({ value }) => onTimeOfDayChange(value)}
            />
            <SightingsFilterDropdown
              title="homeScreen.selectSightings.maxHeight"
              options={heightOptions}
              value={maxHeight}
              onChange={({ value }) => onMaxHeightChange(value)}
            />
          </View>
          <View style={$filtersContainer}>
            <SightingsFilterDropdown
              title="homeScreen.selectSightings.duration"
              options={durationOptions}
              value={duration}
              onChange={({ value }) => onDurationChange(value)}
            />

            <SightingsFilterDropdown
              title="homeScreen.selectSightings.cloudCover.title"
              options={cloudCoverOptions}
              value={cloudCover || ""}
              onChange={({ value }) => onCloudCoverChange?.(value)}
            />
          </View>
          <View style={$flex}>
            <ExpandContainer
              hasTitle={false}
              expandble={false}
              containerStyle={[$flex, $expandContainer]}
              reverseTitle
              titleStyle={$scrollTitle}
            >
              {sightings.length === 0 ? (
                <Text
                  style={$emptyText}
                  tx="homeScreen.selectSightings.empty"
                  txOptions={{
                    start: formatDate(new Date().toISOString()),
                    end: lastSightingOrbitPointAt
                      ? formatDate(new Date(lastSightingOrbitPointAt).toISOString())
                      : "-",
                  }}
                />
              ) : (
                <FlatList
                  accessible
                  accessibilityLabel="Sightings scrollable area"
                  accessibilityHint="Sightings scrollable area"
                  accessibilityRole="scrollbar"
                  contentContainerStyle={$scrollContainer}
                  persistentScrollbar
                  indicatorStyle="white"
                  initialNumToRender={5}
                  ref={scrollViewRef}
                  data={sightings}
                  keyExtractor={(item) => item.date}
                  renderItem={({ item: sighting }) => (
                    <SightingListItem
                      sighting={sighting}
                      timezone={timezone}
                      isUS={isUS}
                      timeFormat={timeFormat}
                      handleToggle={handleToggle}
                      onShare={onShare}
                      onCalendar={onCalendar}
                    />
                  )}
                />
              )}
            </ExpandContainer>
          </View>
          {sightings.length > 0 && (
            <View style={$bottomButtons}>
              <Button
                accessible
                accessibilityLabel="send button"
                accessibilityHint="Navigates to the mail app"
                tx="homeScreen.selectSightings.shareAll"
                onPress={onShareAll}
                style={[$button, $shareAll]}
                pressedStyle={[$button, $shareAll]}
                textStyle={$buttonText}
                renderLeftAccessory={() => (
                  <Icon
                    accessible
                    accessibilityHint="share"
                    icon="share"
                    size={20}
                    style={$buttonIcon as ImageStyle}
                  />
                )}
              ></Button>
            </View>
          )}
        </>
      )}

      {type === "pastSightings" && (
        <PastSightings
          location={location}
          timeFormat={timeFormat}
          isUS={isUS}
          timezone={timezone}
        />
      )}

      {sightingsCoachVisible && (
        <Modal
          isVisible={sightingsCoachVisible}
          useNativeDriver
          useNativeDriverForBackdrop
          backdropOpacity={0.4}
          style={$modal}
        >
          <View
            accessible
            accessibilityLabel="coach mark"
            accessibilityHint="coach mark"
            accessibilityRole="text"
            style={{ marginTop: normalizeHeight(0.2) }}
          >
            <ScrollView
              style={$coachModalBodyContainer}
              contentContainerStyle={$coachModalScrollContainer}
            >
              <Text tx="homeScreen.selectSightings.coach.title" style={$modalTitle} />
              <View style={$legend}>
                <Icon icon="sunset" size={44} color={colors.palette.nasaOrange} />
                <Text tx="homeScreen.selectSightings.coach.sunset" style={$body} />
              </View>
              <View style={$legend}>
                <Icon icon="moon" size={44} color={colors.palette.neutral450} />
                <Text tx="homeScreen.selectSightings.coach.moon" style={$body} />
              </View>
              <Button
                accessible
                accessibilityLabel="dismiss button"
                accessibilityHint="dismiss coach mark"
                tx="homeScreen.coachMarks.dismiss"
                textStyle={$nextButtonText}
                style={$nextButton}
                pressedStyle={$nextButton}
                onPress={handleSetSightingsCoachVisible}
              />
            </ScrollView>
          </View>
        </Modal>
      )}

      <Modal
        isVisible={isPermissionsModal}
        onBackdropPress={() => setIsPermissionsModal(!isPermissionsModal)}
        onSwipeComplete={() => setIsPermissionsModal(!isPermissionsModal)}
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
        <PermissionsModal
          body={translate("permissionsModal.bodyCalendar")}
          onClose={() => setIsPermissionsModal(!isPermissionsModal)}
          onSuccess={() => {
            setIsPermissionsModal(!isPermissionsModal)
            openSettings().catch(() =>
              Snackbar.show({
                text: translate("snackBar.openSettingsError"),
                duration: Snackbar.LENGTH_LONG,
              }),
            )
          }}
        />
      </Modal>
    </View>
  )
})

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $modalBodyContainer: ViewStyle = {
    backgroundColor: colors.palette.neutral350,
    borderTopLeftRadius: scale(18),
    borderTopRightRadius: scale(18),
    flex: 1,
  }

  const $coachModalBodyContainer: ViewStyle = {
    backgroundColor: colors.palette.buttonBlue,
    borderRadius: scale(16),
    width: "100%",
  }

  const $coachModalScrollContainer: ViewStyle = {
    paddingVertical: 36,
    paddingHorizontal: 30,
  }

  const $flex: ViewStyle = {
    flex: 1,
  }

  const $scrollContainer: ViewStyle = {
    paddingHorizontal: scale(24),
  }

  const $scrollTitle: ViewStyle = {
    paddingHorizontal: scale(24),
  }

  const $close: ViewStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    padding: scale(18),
    zIndex: 5,
  }

  const $modalTitle: TextStyle = {
    marginBottom: scale(20),
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[28],
    lineHeight: lineHeights[30],
    color: colors.palette.neutral250,
    paddingHorizontal: scale(24),
  }

  const $selectMessageText: TextStyle = {
    width: "95%",
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.neutral100,
    paddingHorizontal: scale(24),
  }

  const $switchContainer: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: colors.palette.neutral350,
    paddingHorizontal: scale(24),
    paddingTop: scale(15),
  }

  const $label: TextStyle = {
    color: colors.palette.neutral250,
    fontSize: fontSizes[16],
    fontFamily: typography.primary.normal,
    lineHeight: lineHeights[21],
    width: "80%",
  }

  const $modal: ViewStyle = {
    left: 0,
    margin: 0,
    paddingHorizontal: 18,
    justifyContent: "flex-start",
  }

  const $legend: ViewStyle = {
    flexDirection: "row",
    margin: 0,
    justifyContent: "space-between",
    width: "80%",
  }

  const $body: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.neutral100,
    paddingBottom: 10,
    paddingLeft: 5,
  }

  const $nextButton: ViewStyle = {
    height: scale(56),
    backgroundColor: colors.palette.neutral100,
    borderRadius: scale(28),
    borderWidth: 0,
    width: scale(140),
    alignSelf: "center",
    marginTop: 24,
  }

  const $nextButtonText: TextStyle = {
    fontFamily: typography.primary.medium,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.buttonBlue,
  }

  const $emptyText: TextStyle = {
    marginTop: 24,
    color: colors.palette.neutral250,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.normal,
    lineHeight: lineHeights[24],
    textAlign: "center",
    paddingHorizontal: scale(24),
  }

  const $filtersContainer: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(24),
    paddingTop: scale(10),
    marginHorizontal: -scale(5),
  }

  const $timeOfDayItem: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? scale(6) : 0,
  }

  const $timeOfDayText: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[18],
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginLeft: scale(spacing.tiny),
    color: colors.palette.neutral250,
  }

  const $shareAll: TextStyle = {
    fontFamily: typography.primary?.normal,
    paddingVertical: scale(8),
    paddingHorizontal: scale(24),
    minHeight: scale(40),
    height: scale(40),
    backgroundColor: colors.palette.neutral550,
  }

  const $pastSightings: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[13],
    lineHeight: lineHeights[16],
    color: colors.palette.buttonBlue,
    textTransform: "uppercase",
    paddingVertical: scale(16),
    paddingHorizontal: scale(24),
    textAlign: "right",
  }

  const $expandContainer: ViewStyle = {
    marginTop: -scale(12),
  }

  const $buttonText: TextStyle = {
    color: colors.palette.neutral100,
    fontSize: fontSizes[16],
    fontFamily: typography.primary.medium,
  }

  const $button: ViewStyle = {
    width: "auto",
    height: scale(43),
    minHeight: scale(43),
    backgroundColor: "transparent",
    borderRadius: scale(28),
    borderWidth: 0,
    paddingHorizontal: scale(20),
  }

  const $horizontalScrollContainer: ViewStyle = {
    height: scale(60),
    paddingLeft: scale(20),
    paddingRight: scale(20),
    marginTop: scale(16),
  }

  const $paddingRight: ViewStyle = {
    paddingRight: scale(60),
  }

  const $active: ViewStyle = {
    backgroundColor: colors.palette.neutral550,
  }

  const $bottomButtons: ViewStyle = {
    marginTop: scale(12),
    marginHorizontal: scale(12),
    flexDirection: "row",
    justifyContent: "flex-end",
  }

  const $buttonIcon = {
    marginRight: 5,
  }

  return {
    $modalBodyContainer,
    $coachModalBodyContainer,
    $scrollContainer,
    $close,
    $modalTitle,
    $selectMessageText,
    $switchContainer,
    $label,
    $modal,
    $legend,
    $body,
    $nextButton,
    $nextButtonText,
    $emptyText,
    $filtersContainer,
    $timeOfDayItem,
    $timeOfDayText,
    $coachModalScrollContainer,
    $scrollTitle,
    $flex,
    $shareAll,
    $pastSightings,
    $expandContainer,
    $buttonText,
    $button,
    $horizontalScrollContainer,
    $active,
    $bottomButtons,
    $buttonIcon,
    $paddingRight,
  }
}
