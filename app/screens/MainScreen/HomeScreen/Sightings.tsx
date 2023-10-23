import { StyleFn, useStyles } from "../../../utils/useStyles"
import React, { useEffect, useMemo, useState } from "react"
import { ViewStyle, View, PressableProps, TextStyle, ScrollView } from "react-native"
import Modal from "react-native-modal"
import { Button, Icon, Text, IconTypes, Toggle } from "../../../components"
import { colors, spacing, typography } from "../../../theme"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { addDays } from "date-fns"
import { formatDate, formatDateWithTZ, getShortTZ } from "../../../utils/formatDate"
import { ISSSighting } from "../../../services/api"
import { getCalendars } from "expo-localization"
import * as storage from "../../../utils/storage"
import { normalizeHeight } from "../../../utils/normalizeHeight"
import { translate } from "../../../i18n"
import { degToCompass } from "../../../utils/astro"
import { SightingsFilterDropdown } from "./SightingsFilterDropdown"
import i18n from "i18n-js"

export interface SightingsProps {
  sightings: ISSSighting[]
  isUS?: boolean
  isNotifyAll?: boolean
  timezone?: string
  onClose?: PressableProps["onPress"]
  onToggle?: (date: string) => void
  onToggleAll?: (value: boolean) => void
  lastSightingOrbitPointAt?: string
  timeOfDay: string
  duration: string
  onTimeOfDayChange: (value: string) => void
  onDurationChange: (value: string) => void
}

const $dropdownIcon: ViewStyle = { height: 43, justifyContent: "center" }

const stageIcons: { icon: IconTypes; color: string }[] = [
  { icon: "moon", color: colors.palette.neutral450 },
  { icon: "sunset", color: colors.palette.nasaOrange },
  { icon: "sun", color: colors.palette.yellow },
]

export function Sightings({
  onClose,
  sightings,
  onToggle,
  onToggleAll,
  isUS,
  isNotifyAll,
  timezone,
  lastSightingOrbitPointAt,
  timeOfDay,
  duration,
  onTimeOfDayChange,
  onDurationChange,
}: SightingsProps) {
  const {
    $modalBodyContainer,
    $coachModalBodyContainer,
    $scrollContainer,
    $close,
    $title,
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
  } = useStyles(styles)

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
        label: translate("homeScreen.selectSightings.longerThan2"),
        value: "longerThan2",
      },
    ],
    [i18n.locale],
  )

  const $marginTop = useSafeAreaInsetsStyle(["top"], "margin")
  const $paddingBottom = useSafeAreaInsetsStyle(["bottom"], "padding")
  const [sightingsCoachVisible, setSightingsCoachVisible] = useState(false)

  const formatedDate = (date: string): string => {
    const timeFormat = getCalendars()[0].uses24hourClock ? "H:mm" : "h:mm aa"
    const shortTZ = getShortTZ(timezone)
    if (
      formatDateWithTZ(date, `yyyy-MM-dd`, timezone) ===
      formatDateWithTZ(new Date().toISOString(), `yyyy-MM-dd`, timezone)
    )
      return `${translate("homeScreen.selectSightings.today")}, ${formatDateWithTZ(
        date,
        timeFormat,
        timezone,
      )} ${shortTZ}`
    if (
      formatDateWithTZ(date, `yyyy-MM-dd`, timezone) ===
      formatDateWithTZ(addDays(new Date(), 1).toISOString(), `yyyy-MM-dd`, timezone)
    )
      return `${translate("homeScreen.selectSightings.tomorrow")}, ${formatDateWithTZ(
        date,
        timeFormat,
        timezone,
      )} ${shortTZ}`
    return `${formatDateWithTZ(
      date,
      `${isUS ? "MMM dd, yyyy" : "dd MMM yyyy"}, ${timeFormat}`,
      timezone,
    )} ${shortTZ}`
  }

  const setStageIcon = (stage): { icon: IconTypes; color: string } => {
    if (stage >= 0 && stage <= 2) return stageIcons[stage]
    return stageIcons[1]
  }

  const getCoach = async () => {
    setSightingsCoachVisible(!(await storage.load("sightingsCoachVisible")))
  }

  useEffect(() => {
    getCoach().catch((e) => console.log(e))
  }, [])

  const handleSetSightingsCoachVisible = async () => {
    setSightingsCoachVisible(false)
    await storage.save("sightingsCoachVisible", true)
  }

  return (
    <View style={[$modalBodyContainer, $marginTop, $paddingBottom]}>
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
      <Text
        accessible
        accessibilityLabel="title"
        accessibilityHint="title"
        accessibilityRole="text"
        tx="homeScreen.selectSightings.title"
        style={$title}
      />
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
          onValueChange={() => {
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
          title="homeScreen.selectSightings.duration"
          options={durationOptions}
          value={duration}
          onChange={({ value }) => onDurationChange(value)}
        />
      </View>
      <View style={$scrollContainer}>
        <ExpandContainer
          title="homeScreen.selectSightings.sightings"
          expandble={false}
          reverseTitle
        >
          <ScrollView
            accessible
            accessibilityLabel="Sightings scrollable area"
            accessibilityHint="Sightings scrollable area"
            accessibilityRole="scrollbar"
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
              sightings.map((sighting: ISSSighting) => (
                <ListItem
                  key={sighting.date}
                  value={sighting.date}
                  icon="clock"
                  secondIcon={setStageIcon(sighting.dayStage)}
                  title={formatedDate(sighting.date)}
                  selected={sighting.notify}
                  subtitle={`${translate("homeScreen.selectSightings.aboveHorizon")} ${
                    sighting.visible
                  } ${translate("units.minute")}`}
                  subtitle2={`${translate("homeScreen.selectSightings.appears")}: ${translate(
                    `homeScreen.selectSightings.compass.${degToCompass(sighting.minAzimuth)}`,
                  )} | ${translate("homeScreen.selectSightings.disappears")}: ${translate(
                    `homeScreen.selectSightings.compass.${degToCompass(sighting.maxAzimuth)}`,
                  )}`}
                  withSwitch
                  onToggle={onToggle}
                />
              ))
            )}
          </ScrollView>
        </ExpandContainer>
      </View>
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
            style={[$coachModalBodyContainer, { marginTop: normalizeHeight(0.2) }]}
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
          </View>
        </Modal>
      )}
    </View>
  )
}

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
    paddingVertical: 36,
    paddingHorizontal: 30,
    width: "100%",
  }

  const $scrollContainer: ViewStyle = {
    paddingHorizontal: scale(36),
    flex: 1,
    paddingBottom: scale(30),
  }

  const $close: ViewStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    padding: scale(18),
    zIndex: 5,
  }

  const $title: TextStyle = {
    marginTop: scale(10),
    marginBottom: scale(10),
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[28],
    lineHeight: lineHeights[44],
    color: colors.palette.neutral250,
    paddingHorizontal: scale(36),
  }

  const $modalTitle: TextStyle = {
    marginBottom: scale(20),
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[28],
    lineHeight: lineHeights[30],
    color: colors.palette.neutral250,
    paddingHorizontal: scale(36),
  }

  const $selectMessageText: TextStyle = {
    width: "95%",
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.neutral100,
    paddingHorizontal: scale(36),
  }

  const $switchContainer: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: colors.palette.neutral350,
    paddingHorizontal: scale(36),
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
    flex: 1,
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
  }

  const $filtersContainer: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(36),
    paddingTop: scale(20),
    marginHorizontal: -scale(5),
  }

  const $timeOfDayItem: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: scale(6),
  }

  const $timeOfDayText: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[18],
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginLeft: scale(spacing.tiny),
    color: colors.palette.neutral250,
  }

  return {
    $modalBodyContainer,
    $coachModalBodyContainer,
    $scrollContainer,
    $close,
    $title,
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
  }
}
