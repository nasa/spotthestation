import React from "react"
import { ImageBackground, ViewStyle, Image, ImageStyle, View, TextStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Screen, Text } from "../../components"
import { colors } from "../../theme/colors"
import { typography } from "../../theme/typography"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import { IconLinkButton } from "./components/IconLinkButton"
import { NasaLogo } from "./components/NasaLogo"

const background = require("../../../assets/images/bg.png")
const iss = require("../../../assets/images/iss-with-path.png")

export function Splash() {
  const navigation = useNavigation()
  
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")

  const handleNavigate = () => navigation.navigate("Login" as never)

  return (
    <Screen preset="fixed" contentContainerStyle={$container} statusBarStyle="light">
      <ImageBackground source={background} resizeMode="cover" style={[$imageBackground, $topInset]}>
        <NasaLogo />
        <Image source={iss} style={$iss} />
        <View style={$bottomContainer}>
          <Text tx="onboarding.splash.title" style={$title} />
          <View style={$bottomRowContainer}>
            <Text tx="onboarding.splash.subTitle" style={$subTitle} />
            <IconLinkButton icon="back" size={$buttonSize} imageStyle={$imageStyle} onPress={handleNavigate} />
          </View>
        </View>
      </ImageBackground>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
}

const $imageBackground: ViewStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
}

const $bottomContainer: ViewStyle = {
  position: "absolute",
  top: "68%"
}

const $bottomRowContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  paddingHorizontal: 36
}

const $iss: ImageStyle = {
  position: "absolute",
  top: "26%"
}

const $title: TextStyle = {
  width: 220,
  marginLeft: 36,
  fontSize: 48,
  lineHeight: 64,
  fontFamily: typography.primary.bold,
  color: colors.palette.neutral100,
}

const $subTitle: TextStyle = {
  width: 270,
  fontSize: 24,
  lineHeight: 29,
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral250
}

const $buttonSize: TextStyle = {
  width: 64,
  height: 64
}

const $imageStyle: ImageStyle = {
  transform: [{ rotate: "180deg" }]
}
