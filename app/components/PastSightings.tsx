import { Text, ExpandContainer, ListItem, Icon, IconTypes } from "."
import { StyleFn, useStyles } from "../utils/useStyles"
import React, { useEffect, useRef } from "react"
import {
  ViewStyle,
  View,
  PressableProps,
  TextStyle,
  ScrollView,
  Platform,
  ActivityIndicator,
  Pressable,
} from "react-native"

import { colors, typography } from "../theme"

import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { addDays } from "date-fns"
import { formatDate, formatDateWithTZ, getShortTZ } from "../utils/datetime"
import { ISSSighting } from "../services/api"
import { translate } from "../i18n"

import { headingToCompass } from "../utils/geometry"

export interface PastSightingsProps {
  sightings: ISSSighting[]
  isUS?: boolean
  timezone?: string
  timeFormat: string
  onClose?: PressableProps["onPress"]
  firstSightingOrbitPointAt?: string
  isLoading: boolean
  onUpcomingSightings: () => void
}

const stageIcons: { icon: IconTypes; color: string }[] = [
  { icon: "moon", color: colors.palette.neutral450 },
  { icon: "sunset", color: colors.palette.nasaOrange },
  { icon: "sun", color: colors.palette.yellow },
]

export function PastSightings({
  onClose,
  sightings,
  isUS,
  timeFormat,
  timezone,
  firstSightingOrbitPointAt,
  isLoading,
  onUpcomingSightings,
}: PastSightingsProps) {
  const {
    $modalBodyContainer,
    $scrollContainer,
    $close,
    $title,
    $emptyText,
    $scrollTitle,
    $flex,
    $upcomingSightings,
  } = useStyles(styles)

  const scrollViewRef = useRef<ScrollView>()

  const $marginTop = useSafeAreaInsetsStyle(["top"], "margin")
  const $paddingBottom = useSafeAreaInsetsStyle(["bottom"], "padding")

  useEffect(() => {
    if (Platform.OS !== "ios") return

    setTimeout(() => {
      scrollViewRef.current?.flashScrollIndicators()
    }, 100)
  }, [])

  const formatedDate = (date: string): string => {
    const tf = timeFormat === "24hour" ? "H:mm" : "h:mm aa"
    const shortTZ = getShortTZ(timezone)
    if (
      formatDateWithTZ(date, `yyyy-MM-dd`, timezone) ===
      formatDateWithTZ(new Date().toISOString(), `yyyy-MM-dd`, timezone)
    )
      return `${translate("homeScreen.selectSightings.today")}, ${formatDateWithTZ(
        date,
        tf,
        timezone,
      )} ${shortTZ}`
    if (
      formatDateWithTZ(date, `yyyy-MM-dd`, timezone) ===
      formatDateWithTZ(addDays(new Date(), 1).toISOString(), `yyyy-MM-dd`, timezone)
    )
      return `${translate("homeScreen.selectSightings.tomorrow")}, ${formatDateWithTZ(
        date,
        tf,
        timezone,
      )} ${shortTZ}`
    return `${formatDateWithTZ(
      date,
      `${isUS ? "MMM dd, yyyy" : "dd MMM yyyy"}, ${tf}`,
      timezone,
    )} ${shortTZ}`
  }

  const setStageIcon = (stage): { icon: IconTypes; color: string } => {
    if (stage >= 0 && stage <= 2) return stageIcons[stage]
    return stageIcons[1]
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
        tx="homeScreen.selectSightings.pastSightings"
        style={$title}
      />

      <View style={$flex}>
        <ExpandContainer
          title="homeScreen.selectSightings.sightings"
          expandble={false}
          containerStyle={$flex}
          reverseTitle
          titleStyle={$scrollTitle}
        >
          <ScrollView
            accessible
            accessibilityLabel="Sightings scrollable area"
            accessibilityHint="Sightings scrollable area"
            accessibilityRole="scrollbar"
            contentContainerStyle={$scrollContainer}
            persistentScrollbar
            indicatorStyle="white"
            ref={scrollViewRef}
          >
            {isLoading ? (
              <ActivityIndicator />
            ) : sightings.length === 0 && !isLoading ? (
              <Text
                style={$emptyText}
                tx="homeScreen.selectSightings.empty"
                txOptions={{
                  start: firstSightingOrbitPointAt
                    ? formatDate(new Date(firstSightingOrbitPointAt).toISOString())
                    : "-",
                  end: formatDate(new Date().toISOString()),
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
                  subtitle={`${translate("homeScreen.selectSightings.aboveHorizon")} ${
                    sighting.visible
                  } ${translate("units.minute")}`}
                  subtitle2={`${translate("homeScreen.selectSightings.maxHeight")} ${
                    sighting.maxHeight
                  }°`}
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
                />
              ))
            )}
          </ScrollView>
        </ExpandContainer>
      </View>

      <Pressable onPress={onUpcomingSightings}>
        <Text style={$upcomingSightings} tx="homeScreen.selectSightings.title" />
      </Pressable>
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

  const $flex: ViewStyle = {
    flex: 1,
  }

  const $scrollContainer: ViewStyle = {
    paddingHorizontal: scale(36),
  }

  const $scrollTitle: ViewStyle = {
    paddingHorizontal: scale(36),
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

  const $emptyText: TextStyle = {
    marginTop: 24,
    color: colors.palette.neutral250,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.normal,
    lineHeight: lineHeights[24],
    textAlign: "center",
  }

  const $upcomingSightings: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[13],
    lineHeight: lineHeights[16],
    color: colors.palette.buttonBlue,
    textTransform: "uppercase",
    paddingVertical: scale(16),
    paddingHorizontal: scale(36),
    textAlign: "right",
  }

  return {
    $modalBodyContainer,
    $scrollContainer,
    $close,
    $title,
    $emptyText,
    $scrollTitle,
    $flex,
    $upcomingSightings,
  }
}
