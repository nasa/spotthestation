import React, { useEffect } from "react"
import { ImageBackground, ViewStyle, Image, ImageStyle, View, TextStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Screen, Text } from "../../components"
import { colors } from "../../theme/colors"
import { typography } from "../../theme/typography"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import { IconLinkButton } from "./components/IconLinkButton"
import { NasaLogo } from "./components/NasaLogo"
import * as storage from "../../utils/storage"
import { getUserId } from "../../utils/generateUUID"
import { fontSizes, lineHeights, scale } from "../../theme/spacing"

const background = require("../../../assets/images/bg.png")
const iss = require("../../../assets/images/iss-with-path.png")

export function Splash() {
  const navigation = useNavigation()
  
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")

  const generateUser = async () => {
    if ((!await storage.load("userId"))) {
      await storage.save("userId", getUserId())
      setTimeout(() => {
        handleNavigate()
      }, 3000)
    }
  }

  useEffect(() => {
    generateUser().catch(e => console.log(e))
  }, [])

  const handleNavigate = () => navigation.navigate("SignupCompleteProfile" as never)

  return (
    <Screen preset="fixed" contentContainerStyle={$container} statusBarStyle="light">
      <ImageBackground source={background} resizeMode="cover" style={[$imageBackground, $topInset]}>
        <NasaLogo />
        <Image source={iss} style={$iss} />
        <View style={$bottomContainer}>
          <Text
            accessible
            accessibilityLabel="Splash title"
            accessibilityHint="Splash screen title"
            accessibilityRole="text"
            tx="onboarding.splash.title"
            style={$title}
          />
          <View style={$bottomRowContainer}>
            <Text
              accessible
              accessibilityLabel="Splash subtitle"
              accessibilityHint="Splash screen subtitle"
              accessibilityRole="text"
              tx="onboarding.splash.subTitle"
              style={$subTitle}
            />
            <IconLinkButton 
              icon="back"
              accessible
              accessibilityLabel="Arrow right button"
              accessibilityHint="Navigates to the next screen"
              buttonStyle={$buttonSize} 
              imageStyle={$imageStyle} 
              onPress={handleNavigate}
            />
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
  paddingHorizontal: scale(36)
}

const $iss: ImageStyle = {
  position: "absolute",
  top: "26%"
}

const $title: TextStyle = {
  width: scale(220),
  marginLeft: scale(36),
  fontSize: fontSizes[48],
  lineHeight: lineHeights[64],
  fontFamily: typography.primary.bold,
  color: colors.palette.neutral100,
}

const $subTitle: TextStyle = {
  width: '85%',
  fontSize: fontSizes[24],
  lineHeight: lineHeights[29],
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral250
}

const $buttonSize: TextStyle = {
  width: scale(64),
  height: scale(64)
}

const $imageStyle: ImageStyle = {
  transform: [{ rotate: "180deg" }]
}
