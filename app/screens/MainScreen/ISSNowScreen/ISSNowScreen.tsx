import { useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useEffect, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Screen, Text } from "../../../components"
import { colors, typography } from "../../../theme"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import { FlatMap } from "../components/FlatMap"
import { Globe } from "../components/Globe"

export interface ISSNowScreenRouteProps {
  toggleBottomTabs: (value: boolean) => void
}

export const ISSNowScreen = observer(function ISSNowScreen() {
  const route: ISSNowScreenRouteProps  = useRoute().params as ISSNowScreenRouteProps
  const topInset = useSafeAreaInsets().top
  const [isGlobe, setIsGlobe] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(0)

  const $containerStyleOverride: ViewStyle = {
    paddingHorizontal: isFullScreen ? 0 : 18
  }

  const $headerStyleOverride: ViewStyle = {
    top: topInset + 24, 
    paddingHorizontal: isFullScreen ? 18 : 0, 
    left: isFullScreen ? 0 : 18
  }

  const $bodyStyleOverride: ViewStyle = {
    marginTop: isFullScreen ? 0 : topInset + 80
  }

  const $control: ViewStyle = {
    position: "absolute",
    bottom: isFullScreen ? 54 : 18
  }

  const $modControl: ViewStyle = {
    ...$control,
    left: 18
  }

  const $zoomControl: ViewStyle = {
    ...$control,
    right: 18
  }

  useEffect(() => route.toggleBottomTabs(!isFullScreen), [isFullScreen])

  return (
    <Screen 
      preset="fixed" 
      contentContainerStyle={[$container, $containerStyleOverride]} 
      style={{backgroundColor: colors.palette.neutral900}} 
      statusBarStyle="light"
    >
      <View style={[$header, $headerStyleOverride]}>
        <IconLinkButton 
          icon={isFullScreen ? "x" : "maximize"} 
          onPress={() => setIsFullScreen(!isFullScreen)} 
          buttonStyle={isFullScreen && $lightIcon}
        />
        <View style={$textContainer}>
          <Text text="7th Avenue, Phoenix, AZ" style={$location} />
          <Text text="8 Oct 2022 12:18:28" style={$date} />
        </View>
        <IconLinkButton icon="pin" buttonStyle={isFullScreen && $lightIcon} />
      </View>
      <View style={[$body, $bodyStyleOverride]}>
        {isGlobe ? 
          <Globe key={isFullScreen.toString() + zoomLevel.toString()} zoom={800 - (60 * zoomLevel)} /> 
          :
          <FlatMap style={$flatMap} zoom={3 + zoomLevel} />
        }
        <View style={[$modButtons, $modControl]}>
          <IconLinkButton 
            text="2D"
            textStyle={!isGlobe ? [$modButtonText, $modButtonTextActive] : $modButtonText}
            onPress={() => setIsGlobe(false)}
            buttonStyle={!isGlobe ? [$modButton, $active] : $modButton}
          />
          <IconLinkButton
            text="3D"
            textStyle={isGlobe ? [$modButtonText, $modButtonTextActive] : $modButtonText}
            onPress={() => setIsGlobe(true)} 
            buttonStyle={isGlobe ? [$modButton, $active] : $modButton}
          />
        </View>
        <View style={[$zoomButtons, $zoomControl]}>
          <IconLinkButton 
            text="+"
            disabled={zoomLevel === 5}
            onPress={() => setZoomLevel(zoomLevel + 1)}
            buttonStyle={zoomLevel === 5 ? [$lightIcon, $disabled] : $lightIcon}
          />
          <IconLinkButton
            text="-"
            disabled={zoomLevel === 0}
            onPress={() => setZoomLevel(zoomLevel - 1)} 
            buttonStyle={zoomLevel === 0 ? [$lightIcon, $disabled] : $lightIcon}
          />
        </View>
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
  position: "relative",
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

const $zoomButtons: ViewStyle = {
  height: 90,
  justifyContent: "space-between",
}

const $modButtons: ViewStyle = {
  height: 90,
  justifyContent: "space-between",
  padding: 2,
  borderRadius: 100,
  ...$lightIcon
}

const $modButton: ViewStyle = {
  height: 40,
  width: 40,
  backgroundColor: "transparent"
}

const $modButtonText: TextStyle = {
  fontSize: 12,
  lineHeight: 14,
  fontFamily: typography.primary.medium
}

const $modButtonTextActive: TextStyle = {
  color: colors.palette.buttonBlue
}

const $active: ViewStyle = {
  backgroundColor: colors.palette.neutral100
}

const $disabled: ViewStyle = {
  opacity: .25
}
