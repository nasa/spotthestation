import { Text, ExpandContainer, ListItem, IconTypes } from "."
import { StyleFn, useStyles } from "../utils/useStyles"
import React, { useEffect, useMemo, useRef } from "react"
import { ViewStyle, View, TextStyle, Platform, ActivityIndicator, FlatList } from "react-native"

import { colors, typography } from "../theme"

import { formatDate, formatSightingDateTime } from "../utils/datetime"
import { ISSSighting, LocationType } from "../services/api"
import { translate } from "../i18n"

import { headingToCompass } from "../utils/geometry"
import { useStores } from "../models"
import { observer } from "mobx-react-lite"

export interface PastSightingsProps {
  location: LocationType
  isUS?: boolean
  timezone?: string
  timeFormat: string
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

export const PastSightings = observer(function PastSightings({
  location,
  isUS,
  timeFormat,
  timezone,
}: PastSightingsProps) {
  const { $scrollContainer, $emptyText, $scrollTitle, $flex, $expandContainer } = useStyles(styles)

  const scrollViewRef = useRef<FlatList<ISSSighting>>()

  const { getISSSightingsHistory, sightingsHistoryLoading } = useStores()

  useEffect(() => {
    getISSSightingsHistory(location).catch(console.error)
  }, [])

  useEffect(() => {
    if (Platform.OS !== "ios") return

    setTimeout(() => {
      scrollViewRef.current?.flashScrollIndicators()
    }, 100)
  }, [])

  const sightings = location ? location.sightingsHistory : []

  return (
    <View style={$flex}>
      <ExpandContainer
        hasTitle={false}
        expandble={false}
        containerStyle={[$flex, $expandContainer]}
        reverseTitle
        titleStyle={$scrollTitle}
      >
        {sightingsHistoryLoading ? (
          <ActivityIndicator />
        ) : sightings.length === 0 && !sightingsHistoryLoading ? (
          <Text
            style={$emptyText}
            tx="homeScreen.selectSightings.empty"
            txOptions={{
              start: location.firstHistorySightingOrbitPointAt
                ? formatDate(new Date(location.firstHistorySightingOrbitPointAt).toISOString())
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
  )
})

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $flex: ViewStyle = {
    flex: 1,
  }

  const $scrollContainer: ViewStyle = {
    paddingHorizontal: scale(36),
  }

  const $scrollTitle: ViewStyle = {
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

  const $expandContainer: ViewStyle = {
    marginTop: -scale(25),
  }

  return {
    $scrollContainer,
    $emptyText,
    $scrollTitle,
    $flex,
    $expandContainer,
  }
}
