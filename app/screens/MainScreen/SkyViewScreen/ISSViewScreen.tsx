/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-native/no-inline-styles */
import { useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import Modal from "react-native-modal"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Orientation from 'react-native-orientation-locker'
import { Screen, Text } from "../../../components"
import { colors, typography } from "../../../theme"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
// import { Details } from "./Details"
import { ARView } from "../components/ARView"
import { Share } from "./Share"
import { intervalToDuration, formatDuration } from "date-fns"
import { getLocationTimeZone } from "../../../utils/geolocation"
import { formatTimer } from "../components/helpers"
import * as storage from "../../../utils/storage"
import { Camera } from "react-native-vision-camera"
import { useStores } from "../../../models"

export interface ISSViewScreenRouteProps {
  toggleBottomTabs: (value: boolean) => void
  toggleIsLandscape: (value: boolean) => void
}

export const ISSViewScreen = observer(function ISSNowScreen() {
  const route: ISSViewScreenRouteProps  = useRoute().params as ISSViewScreenRouteProps
  const topInset = useSafeAreaInsets().top
  const bottomInset = useSafeAreaInsets().bottom
  const { sightings, getISSSightings } = useStores()
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isShare, setIsShare] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)
  const [countdown, setCountdown] = useState("00:00:00")
  const [isCameraAuthorized, setIsCameraAuthorized] = useState(false)

  const timeDiff = useCallback((callback: (diff: string) => void) => {
    const result = sightings.filter((sighting) => new Date(sighting.date) > new Date(new Date().getTime() - 1800000))
   
    if (result.length === 0) return

    const duration = intervalToDuration({ start: new Date(result[0].date), end: new Date() })
    const diff = formatDuration(duration, { delimiter: ',' })
    
    callback(formatTimer(diff))
  }, [sightings])

  const startCountdown = useCallback(() => {
    timeDiff(setCountdown)
    setInterval(() => timeDiff(setCountdown), 1000)
  }, [countdown, sightings])

  useEffect(() => {
    startCountdown()
  }, [sightings])

  const getSightings = async () => {
    const { location: { lat, lng } } = await storage.load('currentLocation')
    
    const { kind, zone } = await getLocationTimeZone({ lat, lng }, Date.now()/1000)
    const timeZone = kind === "ok" ? zone.timeZoneId : 'US/Central'
    await getISSSightings({ zone: timeZone, lat, lon: lng })
  }

  useEffect(() => {
    getSightings().catch(e => console.log(e))
  }, [])

  const onOrientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      setIsLandscape(true)
    } else {
      setIsLandscape(false)
    }
  }

  const $containerStyleOverride: ViewStyle = {
    paddingHorizontal: isFullScreen ? 0 : 18
  }

  const $headerStyleOverride: TextStyle = {
    top: topInset + 24,
  }

  const $bodyStyleOverride: ViewStyle = {
    marginTop: isFullScreen ? 0 : topInset + 80
  }

  const $bottomContainerStyleOverride: ViewStyle = {
    bottom: bottomInset + 24
  }

  const $button: ViewStyle = {
    ...$iconButton,
    width: isFullScreen ? 54 : 44,
    height: isFullScreen ? 54 : 44
  }

  useEffect(() => {
    const initial = Orientation.getInitialOrientation()
    
    if (initial === 'LANDSCAPE-LEFT' || initial === 'LANDSCAPE-RIGHT') {
      setIsLandscape(true)
    } else {
      setIsLandscape(false)
    }

    Orientation.addOrientationListener(onOrientationDidChange)
    return () => Orientation.removeOrientationListener(onOrientationDidChange)
  }, [])

  useEffect(() => route.toggleBottomTabs(!isFullScreen), [isFullScreen])
  useEffect(() => route.toggleIsLandscape(isLandscape), [isLandscape])

  useEffect(() => {
    Camera.requestCameraPermission()
      .then((newCameraPermission) => {
        if (newCameraPermission === 'authorized') setIsCameraAuthorized(true)
      }).catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <Screen
      preset="fixed" 
      contentContainerStyle={[$container, $containerStyleOverride]} 
      style={{backgroundColor: colors.palette.neutral900}} 
      statusBarStyle="light"
      isPortrait={false}
    >
      <View style={[$headerContainer, $headerStyleOverride]}>
        {isFullScreen ? 
          <IconLinkButton 
            accessible
            accessibilityLabel="x button"
            accessibilityHint="disable full screen mode"
            icon="x" 
            onPress={() => setIsFullScreen(false)} 
            buttonStyle={[$button, $closeButton]}
          /> 
          : 
          <Text 
            accessible
            accessibilityLabel="header"
            accessibilityHint="header"
            accessibilityRole="text"
            tx="issView.header" 
            style={$header}
          />
        }
      </View>
      <View style={[$body, $bodyStyleOverride]}>
        { isCameraAuthorized && <ARView isFullScreen={isFullScreen} /> }
        <View style={[$bottomContainer, $bottomContainerStyleOverride]}>
          <View style={[$buttonColumn, isLandscape && { flexDirection: 'row' }]}>
            <IconLinkButton
              accessible
              accessibilityLabel="path line"
              accessibilityHint="enable/disable path line"
              icon="line" 
              buttonStyle={[$button, isLandscape && { marginRight: 24 }]}
            />
            <IconLinkButton
              accessible
              accessibilityLabel="compass"
              accessibilityHint="enable full screen"
              icon="compass" 
              buttonStyle={[$button, isFullScreen && $activeButton, isLandscape && { marginRight: 24 }]}
              onPress={() => setIsFullScreen(true)} 
            />
          </View>
          <View
            accessible
            accessibilityLabel="countdown"
            accessibilityHint="countdown to next visibility"
            accessibilityRole="text"
            style={$timeContainer}
          >
            <Text tx="issView.timeHeader" style={$timeHeader} />
            <Text text={countdown} style={$time} />
          </View>
          <View style={[$buttonColumn, isLandscape && { flexDirection: 'row' }]}>
            <IconLinkButton 
              accessible
              accessibilityLabel="share"
              accessibilityHint="open share modal"
              icon="share" 
              buttonStyle={[$button, isLandscape && { marginLeft: 24 }]}
              onPress={() => setIsShare(true)} 
            />
            <IconLinkButton 
              accessible
              accessibilityLabel="capture"
              accessibilityHint="take a photo"
              icon="capture" 
              buttonStyle={[$button, isLandscape && { marginLeft: 24 }]}
            />
            <IconLinkButton 
              accessible
              accessibilityLabel="video"
              accessibilityHint="record a video"
              icon="video" 
              buttonStyle={[$button, isLandscape && { marginLeft: 24 }]}
            />
          </View>
        </View>
      </View>
      <Modal
        isVisible={isShare}
        onBackdropPress={() => setIsShare(!isShare)}
        onSwipeComplete={() => setIsShare(!isShare)}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        swipeDirection="down"
        useNativeDriver
        useNativeDriverForBackdrop
        hideModalContentWhileAnimating
        propagateSwipe
        backdropOpacity={0.65}
        style={$modal}
      >
       <Share onClose={() => setIsShare(!isShare)} />
       {/* <Details onClose={() => setIsShare(!isShare)} /> */}
      </Modal>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  justifyContent: "space-between"
}

const $headerContainer: ViewStyle = {
  position: "absolute",
  left: 18,
  zIndex: 9
}

const $modal: ViewStyle = {
  // flex: 1,
  justifyContent: 'flex-end',
  left: 0,
  margin: 0
}

const $header: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 36,
  lineHeight: 44,
  color: colors.palette.neutral250
}

const $body: ViewStyle = {
  flex: 1,
  position: "relative",
  backgroundColor: colors.backgroundDark,
  borderRadius: 12,
  overflow: "hidden"
}

const $bottomContainer: ViewStyle = {
  position: "absolute",
  left: 0,
  width: "100%",
  paddingHorizontal: 24,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end"
}

const $buttonColumn: ViewStyle = {
  justifyContent: "flex-end"
}

const $iconButton: ViewStyle = {
  backgroundColor: colors.palette.overlayWhite,
  marginTop: 24
}

const $closeButton: ViewStyle = {
  marginTop: 0,
  width: 44,
  height: 44
}

const $activeButton: ViewStyle = {
  backgroundColor: colors.palette.buttonBlue
}

const $timeContainer: ViewStyle = {
  flex: 1
}

const $timeHeader: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 13,
  lineHeight: 16,
  color: colors.palette.neutral250,
  textTransform: "uppercase",
  textAlign: "center"
}

const $time: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 32,
  lineHeight: 39,
  color: colors.palette.neutral100,
  textAlign: "center"
}
