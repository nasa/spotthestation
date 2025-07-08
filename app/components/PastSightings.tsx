import { Text, ExpandContainer, ListItem, Icon, IconTypes } from "."
import { StyleFn, useStyles } from "../utils/useStyles"
import React, { useEffect, useMemo, useRef } from "react"
import {
  ViewStyle,
  View,
  PressableProps,
  TextStyle,
  Platform,
  ActivityIndicator,
  Pressable,
  FlatList,
} from "react-native"

import { colors, typography } from "../theme"

import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { formatDate, formatSightingDateTime } from "../utils/datetime"
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

interface SightingListItemProps {
  sighting: ISSSighting
  timezone?: string
  isUS?: boolean
  timeFormat: string
}

const stageIcons: { icon: IconTypes; color: string }[] = [
  { icon: "moon", color: colors.palette.neutral450 },
  { icon: "sunset", color: colors.palette.nasaOrange },
  { icon: "sun", color: colors.palette.yellow },
]

const SightingListItem = React.memo(function SightingListItem({
  sighting,
  timezone,
  isUS,
  timeFormat,
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
    />
  )
})

export const PastSightings = React.memo(function PastSightings({
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

  const scrollViewRef = useRef<FlatList<ISSSighting>>()

  const $marginTop = useSafeAreaInsetsStyle(["top"], "margin")
  const $paddingBottom = useSafeAreaInsetsStyle(["bottom"], "padding")

  useEffect(() => {
    if (Platform.OS !== "ios") return

    setTimeout(() => {
      scrollViewRef.current?.flashScrollIndicators()
    }, 100)
  }, [])

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
            <FlatList
              accessible
              accessibilityLabel="Sightings scrollable area"
              accessibilityHint="Sightings scrollable area"
              accessibilityRole="scrollbar"
              contentContainerStyle={$scrollContainer}
              persistentScrollbar
              indicatorStyle="white"
              initialNumToRender={3}
              ref={scrollViewRef}
              data={sightings}
              keyExtractor={(item) => item.date}
              renderItem={({ item: sighting }) => (
                <SightingListItem
                  sighting={sighting}
                  timezone={timezone}
                  isUS={isUS}
                  timeFormat={timeFormat}
                />
              )}
            />
          )}
        </ExpandContainer>
      </View>

      <Pressable onPress={onUpcomingSightings}>
        <Text style={$upcomingSightings} tx="homeScreen.selectSightings.title" />
      </Pressable>
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
    paddingHorizontal: scale(36),
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
