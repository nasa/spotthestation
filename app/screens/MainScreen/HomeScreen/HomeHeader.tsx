import React from "react"
import { ViewStyle, View, TextStyle } from "react-native"
import { colors, typography } from "../../../theme"
import { Text } from "../../../components"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"

interface User {
  firstName: string
  address: string
}

export interface HomeHeaderProps {
  user: User
}

export function HomeHeader({ user }: HomeHeaderProps) {

  return (
    <View style={$headerContainer}>
      <View style={$rowContainer}>
        <View style={$userContainer}>
          <View style={$nameContainer}>
            <Text tx="homeScreen.header.welcome" style={$welcomeText} />
            <Text text={user.firstName} style={[$welcomeText, $nameText]} />
          </View>
          <Text text={user.address} style={$addressText}/>
        </View>
        <IconLinkButton icon="pin" />
      </View>
      <View style={$rowContainer}>
        <View style={$timeContainer}>
          <Text tx="homeScreen.header.firstTimeHead" style={$headText} />
          <Text text="04:30" style={$timeText} />
        </View>
        <View style={$timeContainer}>
          <Text tx="homeScreen.header.secondTimeHead" style={$headText} />
          <Text text="01:35:55" style={$timeText} />
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
  marginBottom: 18
}

const $welcomeText: TextStyle = {
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral450,
  fontSize: 36,
  lineHeight: 44
}

const $addressText: TextStyle = {
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral100,
  fontSize: 20,
  lineHeight: 24
}

const $nameText: TextStyle = {
  fontFamily: typography.primary.medium,
}

const $nameContainer: ViewStyle = {
  flexDirection: "row"
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
  fontSize: 28,
  lineHeight: 36,
  textAlign: "center",
}
