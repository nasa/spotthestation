/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useRoute } from "@react-navigation/native"
import { BlurView } from "expo-blur"
import { observer } from "mobx-react-lite"
import React, { useEffect, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Orientation from 'react-native-orientation-locker'
import { Screen, Text } from "../../../components"
import { colors, typography } from "../../../theme"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import { FlatMap } from "../components/FlatMap"
import { Globe } from "../components/Globe"

export interface ISSNowScreenRouteProps {
  toggleBottomTabs: (value: boolean) => void
  toggleIsLandscape: (value: boolean) => void
}

export const ISSNowScreen = observer(function ISSNowScreen() {
  const route: ISSNowScreenRouteProps  = useRoute().params as ISSNowScreenRouteProps
  const topInset = useSafeAreaInsets().top
  const [isGlobe, setIsGlobe] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(0)
  const [isLandscape, setIsLandscape] = useState(false)

  const onOrientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      setIsLandscape(true)
    } else {
      setIsLandscape(false)
    }
  }

  const $containerStyleOverride: ViewStyle = {
    paddingHorizontal: isFullScreen ? 0 : 18,
    margin: 0
  }

  const $headerStyleOverride: ViewStyle = {
    top: topInset + 24, 
    paddingHorizontal: isFullScreen ? 18 : 0, 
    left: isFullScreen ? 0 : 18
  }

  const $headerStyleForLandscapeOverride: ViewStyle = { 
    paddingHorizontal: isFullScreen ? 18 : 54,
    left: isFullScreen ? 0 : 18
  }

  const $bodyStyleOverride: ViewStyle = {
    marginTop: isFullScreen ? 0 : topInset + 80
  }

  const $bodyStyleForLandscapeOverride: ViewStyle = {
    marginTop: isFullScreen ? 0 : 12,
    marginBottom: isFullScreen ? 0 : 12,
    marginHorizontal: isFullScreen ? 0 : 36,
  }

  const $control: ViewStyle = {
    position: "absolute",
    bottom: isFullScreen ? 54 : 18
  }

  const $modControl: ViewStyle = {
    ...$control,
    left: 18,
    padding: 0,
  }

  const $zoomControl: ViewStyle = {
    ...$control,
    right: 18
  }

  const $modButtonsOverload: ViewStyle = {
    flexDirection: 'row',
    height: 'auto',
    bottom: isFullScreen ? 34 : 18
  }

  useEffect(() => {
    const initial = Orientation.getInitialOrientation()
    
    if (initial === 'LANDSCAPE-LEFT' || initial === 'LANDSCAPE-RIGHT') {
      setIsLandscape(true)
    } else {
      setIsLandscape(false)
    }

    Orientation.addOrientationListener(onOrientationDidChange)
    return () => {
      Orientation.removeOrientationListener(onOrientationDidChange)
    }
  }, [])

  useEffect(() => route.toggleBottomTabs(!isFullScreen), [isFullScreen])
  useEffect(() => route.toggleIsLandscape(isLandscape), [isLandscape])

  return (
    <Screen 
      preset="fixed" 
      contentContainerStyle={[$container, $containerStyleOverride]} 
      style={{ backgroundColor: colors.palette.neutral900}} 
      statusBarStyle="light"
      isPortrait={false}
    >
      <View style={[$header, $headerStyleOverride, isLandscape && $headerStyleForLandscapeOverride]}>
        <IconLinkButton
          accessible
          accessibilityLabel="x or maximize button"
          accessibilityHint="enable/disable full screen mode"
          icon={isFullScreen ? "x" : "maximize"} 
          onPress={() => setIsFullScreen(!isFullScreen)} 
          buttonStyle={isFullScreen && $lightIcon}
          blurIntensity={50}
        />
        <View style={$textContainer}>
          <Text text="7th Avenue, Phoenix, AZ" style={$location} />
          <Text text="8 Oct 2022 12:18:28" style={$date} />
        </View>
        <IconLinkButton 
          accessible
          accessibilityLabel="pin button"
          accessibilityHint="change location"
          icon="pin" 
          buttonStyle={isFullScreen && $lightIcon} 
          blurIntensity={50} 
        />
      </View>
      <View style={[$body, $bodyStyleOverride, isLandscape && $bodyStyleForLandscapeOverride]}>
        {isGlobe ? 
          <Globe key={isFullScreen.toString() + zoomLevel.toString() + isLandscape.toString()} zoom={800 - (60 * zoomLevel)} /> 
          :
          <FlatMap style={$flatMap} zoom={3 + zoomLevel} />
        }
        <View style={[$modButtons, $modControl, isLandscape && $modButtonsOverload]}>
          <BlurView style={[$modButtons, isLandscape && $modButtonsOverload, { bottom: 0 }]}>
            <IconLinkButton 
              accessible
              accessibilityLabel="2D button"
              accessibilityHint="enable map view"
              text="2D"
              textStyle={!isGlobe ? [$modButtonText, $modButtonTextActive] : $modButtonText}
              onPress={() => setIsGlobe(false)}
              buttonStyle={!isGlobe ? [$modButton, $active] : $modButton}
            />
            <IconLinkButton
              accessible
              accessibilityLabel="3D button"
              accessibilityHint="enable globe view"
              text="3D"
              textStyle={isGlobe ? [$modButtonText, $modButtonTextActive] : $modButtonText}
              onPress={() => setIsGlobe(true)} 
              buttonStyle={isGlobe ? [$modButton, $active] : $modButton}
            />
          </BlurView>
        </View>
        <View style={[$zoomButtons, $zoomControl, isLandscape && $modButtonsOverload]}>
          <IconLinkButton 
            accessible
            accessibilityLabel="+ button"
            accessibilityHint="zoom view"
            text="+"
            disabled={zoomLevel === 5}
            onPress={() => setZoomLevel(zoomLevel + 1)}
            buttonStyle={zoomLevel === 5 ? [$lightIcon, $disabled] : $lightIcon}
            blurIntensity={50}
          />
          <IconLinkButton
            accessible
            accessibilityLabel="- button"
            accessibilityHint="zoom out view"
            text="-"
            disabled={zoomLevel === 0}
            onPress={() => setZoomLevel(zoomLevel - 1)} 
            buttonStyle={zoomLevel === 0 ? [$lightIcon, $disabled] : $lightIcon}
            blurIntensity={50}
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
  overflow: "hidden",
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
