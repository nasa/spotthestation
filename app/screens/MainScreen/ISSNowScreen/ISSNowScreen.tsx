import { useRoute } from "@react-navigation/native"
import { GLView } from "expo-gl"
import { observer } from "mobx-react-lite"
import React, { useEffect, useRef, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Screen, Text } from "../../../components"
import { colors, typography } from "../../../theme"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import { FlatMap } from "../components/FlatMap"
import { Globe } from "../components/Globe"

export const ISSNowScreen = observer(function ISSNowScreen() {
  const route = useRoute()
  const topInset = useSafeAreaInsets().top
  const [isGlobe, setIsGlobe] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const globeRef = useRef<GLView>(null)

  useEffect(() => {
    globeRef.current?.forceUpdate()
  }, [isGlobe, isFullScreen])

  useEffect(() => route.params?.toggleBottomTabs(!isFullScreen), [isFullScreen])

  return (
    <Screen preset="fixed" contentContainerStyle={[$container, { paddingHorizontal: isFullScreen ? 0 : 18 }]} style={{backgroundColor: colors.palette.neutral900}} statusBarStyle="light">
      <View style={[$header, { top: topInset + 24, paddingHorizontal: isFullScreen ? 18 : 0, left: isFullScreen ? 0 : 18 }]}>
        <IconLinkButton icon={isFullScreen ? "x" : "maximize"} onPress={() => setIsFullScreen(!isFullScreen)} buttonStyle={isFullScreen && $lightIcon} />
        <View style={$textContainer}>
          <Text text="7th Avenue, Phoenix, AZ" style={$location} />
          <Text text="8 Oct 2022 12:18:28" style={$date} />
        </View>
        <IconLinkButton icon="pin" buttonStyle={isFullScreen && $lightIcon} />
      </View>
      <View style={[$body, { marginTop: isFullScreen ? 0 : topInset + 80}]}>
        {isGlobe ? <Globe globeRef={globeRef}/> : <FlatMap style={$flatMap} />}
        <IconLinkButton icon={isFullScreen ? "x" : "maximize"} onPress={() => setIsGlobe(!isGlobe)} buttonStyle={isFullScreen && $lightIcon} />
      </View>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  justifyContent: "space-between"
}

const $header: ViewStyle = {
  position: "absolute",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  zIndex: 10
}

const $body: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  borderRadius: 12,
  overflow: "hidden"
}

const $flatMap: ViewStyle = {
  flex: 1
}

const $textContainer: ViewStyle = {
  flex: 1
}

const $lightIcon: ViewStyle = {
  backgroundColor: colors.palette.overlayWhite
}

const $location: TextStyle = {
  width: "100%",
  fontFamily: typography.primary.normal,
  fontSize: 20,
  lineHeight: 24,
  color: colors.palette.neutral100,
  textAlign: "center"
}

const $date: TextStyle = {
  ...$location,
  fontSize: 13,
  lineHeight: 16,
  textTransform: "uppercase"
}
