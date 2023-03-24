import React from "react"
import { ViewStyle, View, TextStyle, PressableProps, Pressable } from "react-native"
import { colors, typography } from "../../../theme"
import { Text } from "../../../components"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"

interface User {
  firstName: string
  address: string
}

export interface HomeHeaderProps {
  user: User
  sighting?: string
  countdown?: string
  onLocationPress: PressableProps["onPress"]
  onSightingsPress: PressableProps["onPress"]
}

export function HomeHeader({ user, onLocationPress, onSightingsPress, sighting = "", countdown = "" }: HomeHeaderProps) {
  return (
    <View style={$headerContainer}>
      <View style={$rowContainer}>
        <View style={$userContainer}>
          <Text
            accessible
            accessibilityLabel="address"
            accessibilityHint="address"
            accessibilityRole="text"
            text={user.address} 
            style={$addressText}
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
      <View style={$rowContainer}>
        <Pressable 
          accessible
          accessibilityLabel="next sighting"
          accessibilityHint="open sightings modal"
          accessibilityRole="button"
          style={$timeContainer} 
          onPress={onSightingsPress}
        >
          <Text 
            accessible
            accessibilityLabel="sighting header"
            accessibilityHint="sighting header"
            accessibilityRole="text"
            tx="homeScreen.header.firstTimeHead" 
            style={$headText} 
          />
          <Text 
            accessible
            accessibilityLabel="sighting"
            accessibilityHint="sighting"
            accessibilityRole="text"
            text={sighting} 
            style={$timeText}
          />
        </Pressable>
        <View 
          accessible
          accessibilityLabel="countdown"
          accessibilityHint="countdown to next sighting"
          accessibilityRole="text"
          style={$timeContainer}
        >
          <Text tx="homeScreen.header.secondTimeHead" style={$headText} />
          <Text text={countdown} style={$timeText} />
        </View>
      </View>
    </View>
  )
}

const $headerContainer: ViewStyle = {
  width: "100%",
  paddingHorizontal: 18,
  paddingTop: 18
}

const $rowContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between"
}

const $userContainer: ViewStyle = {
  marginBottom: 18,
  width: '85%'
}

const $addressText: TextStyle = {
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral100,
  fontSize: 20,
  lineHeight: 24
}

const $timeContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  width: "48%",
  borderRadius: 10,
  padding: 8
}

const $headText: TextStyle = {
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral450,
  fontSize: 13,
  lineHeight: 16,
  textAlign: "center",
}

const $timeText: TextStyle = {
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral250,
  fontSize: 18,
  lineHeight: 36,
  textAlign: "center",
}
