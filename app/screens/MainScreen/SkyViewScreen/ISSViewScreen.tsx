/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-native/no-inline-styles */
import { useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useRef, useState } from "react"
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
import { useStores } from "../../../models"
import Snackbar from "react-native-snackbar"
import { ViroARSceneNavigator } from "@viro-community/react-viro"
import { autorun } from "mobx"

export interface ISSViewScreenRouteProps {
  toggleBottomTabs: (value: boolean) => void
  toggleIsLandscape: (value: boolean) => void
}

export const ISSViewScreen = observer(function ISSNowScreen() {
  const route: ISSViewScreenRouteProps  = useRoute().params as ISSViewScreenRouteProps
  const topInset = useSafeAreaInsets().top
  const bottomInset = useSafeAreaInsets().bottom
  const { sightings, issData, getISSSightings, getISSData } = useStores()
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isPathVisible, setIsPathVisible] = useState(false)
  const [isShare, setIsShare] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)
  const [countdown, setCountdown] = useState("00:00:00")
  const [isRecording, setIsRecording] = useState(false)
  const [recordedSeconds, setRecordedSeconds] = useState(0)
  const [location, setLocation] = useState<[number, number]>(null)
  const arView = useRef<ViroARSceneNavigator>()

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

  const [pastIssPathCoords, setPastIssPathCoords] = useState([])
  const [futureIssPathCoords, setFutureIssPathCoords] = useState([])
  const [issMarkerPosition, setIssMarkerPosition] = useState(null)
  const updateTimer = useRef<NodeJS.Timer>()

  function updateIssPath() {
    console.log(issData);
    let currentPositionIdx = 0

    if (issData.length === 0) {
      clearTimeout(updateTimer.current)
      return
    }

    issData.forEach((point, idx) => {
      if (Math.abs(new Date(point.date).valueOf() - new Date().valueOf()) < Math.abs(new Date(issData[currentPositionIdx].date).valueOf() - new Date().valueOf())) {
        currentPositionIdx = idx
      }
    })

    setPastIssPathCoords(issData
      .filter((point) => {
        const diff = new Date().valueOf() - new Date(point.date).valueOf()
        return diff >= 0 && diff < 60 * 60 * 1000
      })
      .map((p) => [p.azimuth, p.elevation])
    )

    setFutureIssPathCoords(issData
      .filter((point) => {
        const diff = new Date().valueOf() - new Date(point.date).valueOf()
        return diff < 0 && diff > -60 * 60 * 1000
      })
      .map((p) => [p.azimuth, p.elevation])
    )

    setIssMarkerPosition([issData[currentPositionIdx].azimuth, issData[currentPositionIdx].elevation])

    clearTimeout(updateTimer.current)
    updateTimer.current = setTimeout(updateIssPath, 30000)
  }

  useEffect(() => {
    autorun(() => updateIssPath())
  }, [])

  const getLocation = async () => {
    const { location: { lat, lng } } = await storage.load('currentLocation')
    if (lat && lng) setLocation([lat, lng])
  }

  const getSightings = async () => {
    const { kind, zone } = await getLocationTimeZone({ lat: location[0], lng: location[1] }, Date.now()/1000)
    const timeZone = kind === "ok" ? zone.timeZoneId : 'US/Central'
    await getISSSightings({ zone: timeZone, lat: location[0], lon: location[1] })
  }

  const getData = async () => {
    await getISSData({ lat: location[0], lon: location[1] })
  }

  useEffect(() => {
    getLocation().catch(e => console.log(e))
  }, [])

  useEffect(() => {
    if (!location) return

    getSightings().catch(e => console.log(e))
    getData().catch(e => console.log(e))
  }, [location])

  useEffect(() => {
    if (!isRecording) return undefined

    const interval = setInterval(() => {
      setRecordedSeconds((s) => s + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isRecording])

  const onOrientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      setIsLandscape(true)
    } else {
      setIsLandscape(false)
    }
  }

  const takeScreenshot = () => {
    if (!arView.current) return

    arView.current.sceneNavigator
      .takeScreenshot("iss.jpg", true)
      .then(() => {
          Snackbar.show({
            text: "Photo saved to your library",
            duration: Snackbar.LENGTH_LONG,
          })
      })
      .catch(() => {
        Snackbar.show({
          text: "Something went wrong",
          duration: Snackbar.LENGTH_LONG,
        })
      })
  }

  const startRecording = () => {
    if (!arView.current) return

    arView.current.sceneNavigator
      .startVideoRecording(
        'iss.mp4',
        true,
        () => {
          setIsRecording(false)
          setRecordedSeconds(0)
          Snackbar.show({
            text: "Something went wrong",
            duration: Snackbar.LENGTH_LONG,
          })
      })

    setIsRecording(true)
    setRecordedSeconds(0)
  }

  const stopRecording = () => {
    if (!arView.current) return

    arView.current.sceneNavigator
      .stopVideoRecording()
      .then(() => {
        Snackbar.show({
          text: "Video saved to your library",
          duration: Snackbar.LENGTH_LONG,
        })
      })
      .catch(() => {
        Snackbar.show({
          text: "Something went wrong",
          duration: Snackbar.LENGTH_LONG,
        })
      })
      .finally(() => {
        setIsRecording(false)
        setRecordedSeconds(0)
      })
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
        { Boolean(issMarkerPosition) && (
          <ARView
            ref={arView}
            isFullScreen={isFullScreen}
            isPathVisible={isPathVisible}
            isRecording={isRecording}
            recordedSeconds={recordedSeconds}
            pastIssPathCoords={pastIssPathCoords}
            futureIssPathCoords={futureIssPathCoords}
            issMarkerPosition={issMarkerPosition}
          />
        )}
        <View style={[$bottomContainer, $bottomContainerStyleOverride]}>
          <View style={[$buttonColumn, isLandscape && { flexDirection: 'row' }]}>
            <IconLinkButton
              accessible
              accessibilityLabel="path line"
              accessibilityHint="enable/disable path line"
              icon="line" 
              buttonStyle={[$button, isPathVisible && $activeButton, isLandscape && { marginRight: 24 }]}
              onPress={() => setIsPathVisible(!isPathVisible)}
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
              onPress={takeScreenshot}
            />
            { isRecording ? (
              <>
                <View>
                  <IconLinkButton
                    accessible
                    accessibilityLabel="video"
                    accessibilityHint="stop recording"
                    icon="videoOff"
                    onPress={stopRecording}
                    backgroundColor={colors.palette.nasaRed}
                    buttonStyle={[$button, isLandscape && { marginLeft: 24 }]}
                  />
                  <Text style={$stop}>Stop</Text>
                </View>
              </>
            ) : (
              <IconLinkButton
              accessible
              accessibilityLabel="video"
              accessibilityHint="record a video"
              icon="video"
              onPress={startRecording}
              buttonStyle={[$button, isLandscape && { marginLeft: 24 }]}
              />
            )}

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

const $stop: TextStyle = {
  position: 'absolute',
  top: '100%',
  alignSelf: 'center',
  marginTop: 7,
  fontFamily: typography.primary.normal,
  fontSize: 13,
  lineHeight: 16,
  color: colors.palette.neutral100,
  textTransform: "uppercase",
}
