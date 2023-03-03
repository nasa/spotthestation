/* eslint-disable react-native/no-inline-styles */
import { useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useEffect, useState } from "react"
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

export interface SkyViewScreenRouteProps {
  toggleBottomTabs: (value: boolean) => void
  toggleIsLandscape: (value: boolean) => void
}

export const SkyViewScreen = observer(function ISSNowScreen() {
  const route: SkyViewScreenRouteProps  = useRoute().params as SkyViewScreenRouteProps
  const topInset = useSafeAreaInsets().top
  const bottomInset = useSafeAreaInsets().bottom
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isShare, setIsShare] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)

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
          <IconLinkButton icon="x" onPress={() => setIsFullScreen(false)} buttonStyle={[$button, $closeButton]}/> 
          : 
          <Text tx="skyView.header" style={$header} />
        }
      </View>
      <View style={[$body, $bodyStyleOverride]}>
        <ARView />
        <View style={[$bottomContainer, $bottomContainerStyleOverride]}>
          <View style={[$buttonColumn, isLandscape && { flexDirection: 'row' }]}>
            <IconLinkButton icon="line" buttonStyle={[$button, isLandscape && { marginRight: 24 }]} />
            <IconLinkButton icon="compass" buttonStyle={[$button, isFullScreen && $activeButton, isLandscape && { marginRight: 24 }]} onPress={() => setIsFullScreen(true)} />
          </View>
          <View style={$timeContainer}>
            <Text tx="skyView.timeHeader" style={$timeHeader} />
            <Text text="03:27:02" style={$time} />
          </View>
          <View style={[$buttonColumn, isLandscape && { flexDirection: 'row' }]}>
            <IconLinkButton icon="share" buttonStyle={[$button, isLandscape && { marginLeft: 24 }]} onPress={() => setIsShare(true)} />
            <IconLinkButton icon="capture" buttonStyle={[$button, isLandscape && { marginLeft: 24 }]} />
            <IconLinkButton icon="video" buttonStyle={[$button, isLandscape && { marginLeft: 24 }]} />
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
