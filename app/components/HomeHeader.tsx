import { Text, IconLinkButton, Button } from "."
import { StyleFn, useStyles } from "../utils/useStyles"
import React from "react"
import { ViewStyle, View, TextStyle, PressableProps } from "react-native"
import { colors, typography } from "../theme"

import { translate } from "../i18n"
import { LocationType } from "../services/api"

export interface HomeHeaderProps {
  location?: LocationType
  sighting?: string
  countdown?: string
  timezone?: string
  onLocationPress: PressableProps["onPress"]
  onSightingsPress: PressableProps["onPress"]
}

export function HomeHeader({
  location,
  onLocationPress,
  onSightingsPress,
  sighting = "",
  countdown = "",
  timezone = "",
}: HomeHeaderProps) {
  const {
    $headerContainer,
    $rowContainer,
    $userContainer,
    $addressText,
    $timeContainer,
    $headText,
    $timeText,
    $tipText,
    $firstHeadText,
    $tzText,
    $sightingsContainer,
    $upcomingText,
    $button,
    $buttonText,
    $flex,
  } = useStyles(styles)

  return (
    <View style={$headerContainer}>
      <View style={$rowContainer}>
        <View style={$userContainer}>
          <Text
            accessible
            accessibilityLabel="address"
            accessibilityHint="address"
            accessibilityRole="text"
            text={location?.subtitle || ""}
            style={$addressText}
            ellipsizeMode="tail"
            numberOfLines={2}
          />

          <Text
            accessible
            accessibilityLabel="timezone"
            accessibilityHint="timezone"
            accessibilityRole="text"
            text={`${translate("homeScreen.header.timezone")}: ${timezone}`}
            style={$tzText}
          />
        </View>
        <IconLinkButton
          accessible
          accessibilityLabel="pin button"
          accessibilityHint="open select location modal"
          icon="pin"
          onPress={onLocationPress}
        />
      </View>
      <View style={[$rowContainer, $sightingsContainer]}>
        <View style={$flex}>
          <Text
            accessible
            accessibilityLabel="sighting header"
            accessibilityHint="sighting header"
            accessibilityRole="text"
            tx="homeScreen.header.firstTimeHead"
            style={$firstHeadText}
          />
          <Text
            accessible
            accessibilityLabel="sighting"
            accessibilityHint="sighting"
            accessibilityRole="text"
            text={sighting}
            style={$upcomingText}
          />

          <View style={$flex} />

          <Button
            accessible
            accessibilityLabel="sighting opportunities"
            accessibilityHint="show sighting opportunities"
            tx="homeScreen.header.opportunities"
            textStyle={$buttonText}
            style={$button}
            pressedStyle={$button}
            onPress={onSightingsPress}
          />
        </View>
        <View
          accessible
          accessibilityLabel="countdown"
          accessibilityHint="countdown to next sighting"
          accessibilityRole="text"
          style={$timeContainer}
        >
          <Text tx="homeScreen.header.secondTimeHead" style={$headText} />
          <Text text={countdown} style={$timeText} />
          <Text text="DD:HH:MM:SS" style={$tipText} />
        </View>
      </View>
    </View>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $headerContainer: ViewStyle = {
    width: "100%",
    paddingHorizontal: 18,
    paddingTop: 18,
  }

  const $rowContainer: ViewStyle = {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  }

  const $userContainer: ViewStyle = {
    width: "85%",
  }

  const $addressText: TextStyle = {
    fontFamily: typography.primary.normal,
    color: colors.palette.neutral100,
    fontSize: fontSizes[20],
    lineHeight: lineHeights[26],
  }

  const $timeContainer: ViewStyle = {
    borderRadius: scale(20),
    padding: scale(12),
    borderWidth: 0.5,
    borderColor: colors.palette.neutral600,
    gap: 3,
    justifyContent: "center",
  }

  const $outlined: ViewStyle = {
    borderColor: colors.palette.buttonBlue,
  }

  const $headText: TextStyle = {
    fontFamily: typography.primary.normal,
    color: colors.palette.neutral500,
    fontSize: fontSizes[12],
    lineHeight: lineHeights[16],
    textAlign: "center",
  }

  const $timeText: TextStyle = {
    fontFamily: typography.primary.normal,
    color: colors.palette.neutral250,
    fontSize: fontSizes[15],
    lineHeight: lineHeights[24],
  }

  const $tzText: TextStyle = {
    ...$headText,
    fontSize: fontSizes[10],
    textAlign: "left",
  }

  const $upcomingText: TextStyle = {
    ...$timeText,
    fontSize: fontSizes[16],
    marginTop: scale(2),
  }

  const $tipText: TextStyle = {
    ...$headText,
    fontSize: fontSizes[9],
  }

  const $firstHeadText: TextStyle = {
    ...$headText,
    textAlign: "left",
    fontSize: fontSizes[10],
  }

  const $sightingsContainer: ViewStyle = {
    backgroundColor: colors.palette.neutral350,
    borderRadius: scale(20),
    padding: scale(15),
    gap: scale(12),
    marginTop: scale(15),
    alignItems: "stretch",
  }

  const $button: ViewStyle = {
    backgroundColor: colors.palette.buttonBlue,
    borderRadius: scale(28),
    borderWidth: 0,
    minHeight: 0,
    width: "100%",
    paddingVertical: scale(8),
    paddingHorizontal: scale(8),
  }

  const $buttonText: TextStyle = {
    color: colors.palette.neutral250,
    fontSize: fontSizes[14],
  }

  const $flex: ViewStyle = {
    flex: 1,
  }

  return {
    $headerContainer,
    $rowContainer,
    $userContainer,
    $addressText,
    $timeContainer,
    $outlined,
    $headText,
    $timeText,
    $tipText,
    $tzText,
    $firstHeadText,
    $sightingsContainer,
    $upcomingText,
    $button,
    $buttonText,
    $flex,
  }
}
