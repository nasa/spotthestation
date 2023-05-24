/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable n/no-callback-literal */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-native/no-inline-styles */
import { useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { View, ViewStyle, TextStyle, PermissionsAndroid, Platform, Pressable } from "react-native"
import Modal from "react-native-modal"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Orientation from 'react-native-orientation-locker'
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions'
import Share from 'react-native-share'
import { captureScreen } from "react-native-view-shot"
import { Screen, Text } from "../../../components"
import { colors, fontSizes, lineHeights, scale, typography } from "../../../theme"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import { Details } from "./Details"
import { ARView } from "../components/ARView"
import { intervalToDuration, formatDuration } from "date-fns"
import { formatTimer } from "../components/helpers"
import { useStores } from "../../../models"
import Snackbar from "react-native-snackbar"
import { ViroARSceneNavigator } from "@viro-community/react-viro"
import { autorun } from "mobx"
import RecordScreen, { RecordingResult } from 'react-native-record-screen'
import CameraRoll from "@react-native-community/cameraroll"
import { getCurrentTimeZome } from "../../../utils/formatDate"
import { LocationType } from "../../OnboardingScreen/SignupLocation"

export interface ISSViewScreenRouteProps {
  toggleBottomTabs: (value: boolean) => void
  toggleIsLandscape: (value: boolean) => void
}

async function checkCameraPermissions(callback: (value: boolean) => void) {
  if (Platform.OS === 'android') {
    const result = await check(PERMISSIONS.ANDROID.CAMERA)
    if (result === RESULTS.GRANTED) {
      callback(true)
    } else if (result === RESULTS.DENIED) {
      callback(false)
    }
  } else if (Platform.OS === 'ios') {
    const permission = PERMISSIONS.IOS.CAMERA
    const permissionStatus = await check(permission)
    if (permissionStatus === RESULTS.GRANTED) {
      callback(true)
    } else {
      callback(false)
    } 
  }
}

async function checkMicrophonePermissions(callback: (value: boolean) => void) {
  if (Platform.OS === 'android') {
    const result = await check(PERMISSIONS.ANDROID.RECORD_AUDIO)
    if (result === RESULTS.GRANTED) {
      callback(true)
    } else if (result === RESULTS.DENIED) {
      callback(false)
    }
  } else if (Platform.OS === 'ios') {
    const permission = PERMISSIONS.IOS.MICROPHONE
    const permissionStatus = await check(permission)
    if (permissionStatus === RESULTS.GRANTED) {
      callback(true)
    } else {
      callback(false)
    } 
  }
}

async function requestCameraPermissions(callback: (value: boolean) => void) {
  if (Platform.OS === 'android') {
    const permissionResult = await request(PERMISSIONS.ANDROID.CAMERA)
    if (permissionResult === RESULTS.GRANTED) {
      callback(true)
    }
  } else if (Platform.OS === 'ios') {
    const permissionResult = await request(PERMISSIONS.IOS.CAMERA)
    
    if (permissionResult === RESULTS.GRANTED) {
      callback(true)
    } else if (permissionResult === RESULTS.BLOCKED) {
      callback(false)
    }
  }
}

export const ISSViewScreen = observer(function ISSNowScreen() {
  const route: ISSViewScreenRouteProps  = useRoute().params as ISSViewScreenRouteProps
  const topInset = useSafeAreaInsets().top
  const bottomInset = useSafeAreaInsets().bottom
  const { currentLocation, selectedLocation, issData, getISSSightings, getISSData } = useStores()
  const [isFullScreen, setIsFullScreen] = useState(true)
  const [isPathVisible, setIsPathVisible] = useState(true)
  const [isDetails, setIsDetails] = useState(false)
  const [isCameraAllowed, setIsCameraAllowed] = useState(false)
  const [isMicrophoneAllowed, setIsMicrophoneAllowed] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)
  const [countdown, setCountdown] = useState("00:00:00")
  const [isRecording, setIsRecording] = useState(false)
  const [isSpotted, setIsSpotted] = useState(false)
  const [recordedSeconds, setRecordedSeconds] = useState(0)
  const [location, setLocation] = useState<[number, number]>(null)
  const [mediaUrl, setMediaUrl] = useState('')
  const [current, setCurrent] = useState<LocationType>(null)

  const intervalRef = useRef<NodeJS.Timeout>(null)
  const arView = useRef<ViroARSceneNavigator>()

  const events = useMemo(() => current?.sightings?.filter(item => item.notify) || [], [current?.sightings])
  const eventsList = useMemo(() => events?.length ? events : (current?.sightings || []), [current?.sightings, events])

  const result = useMemo(() => eventsList.filter((sighting) => new Date(sighting.date) > new Date(new Date().getTime() - 1800000)), [eventsList])
  
  const timeDiff = useCallback((callback: (diff: string) => void) => {
    if (result.length === 0) {
      setCountdown("T - 00:00:00:00")
      return
    }
    const duration = intervalToDuration({ start: new Date(result[0].date), end: new Date() })
    const diff = formatDuration(duration, { delimiter: ',' })
    callback(formatTimer(diff, new Date(result[0].date).getUTCDate() >= new Date().getUTCDate() ? 'T - ' : 'T + '))
  }, [result])

  const startCountdown = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => timeDiff(setCountdown), 1000)
  }, [result, timeDiff])

  useEffect(() => {
    startCountdown()
  }, [result, startCountdown, timeDiff])

  useEffect(() => {
    checkCameraPermissions((value: boolean) => { setIsCameraAllowed(value); setIsFullScreen(value) })
  }, [])
  
  useEffect(() => {
    checkMicrophonePermissions((value: boolean) => { setIsMicrophoneAllowed(value) })
  }, [])

  const [pastIssPathCoords, setPastIssPathCoords] = useState([])
  const [futureIssPathCoords, setFutureIssPathCoords] = useState([])
  const [issMarkerPosition, setIssMarkerPosition] = useState(null)
  const [issMarkerIndex, setIssMarkerIndex] = useState(0)
  const updateTimer = useRef<NodeJS.Timer>()

  function updateIssPath() {
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
    setIssMarkerIndex(currentPositionIdx)

    clearTimeout(updateTimer.current)
    updateTimer.current = setTimeout(updateIssPath, 30000)
  }

  useEffect(() => {
    autorun(() => updateIssPath())
  }, [])

  const getLocation = useCallback(() => {
    let lat: number
    let lng: number
    if (selectedLocation) {
      lat = selectedLocation.location.lat
      lng = selectedLocation.location.lng
      setCurrent(JSON.parse(JSON.stringify(selectedLocation)) as LocationType)
    } else {
      if (currentLocation) {
        lat = currentLocation.location.lat
        lng = currentLocation.location.lng
        setCurrent(JSON.parse(JSON.stringify(currentLocation)) as LocationType)
      }
    }
    
    if (lat && lng) setLocation([lat, lng])
  }, [selectedLocation, currentLocation])

  const getSightings = async () => {
    const { timeZone } = await getCurrentTimeZome()
    await getISSSightings({ zone: timeZone, lat: location[0], lon: location[1] })
  }

  const getData = async () => {
    await getISSData({ lat: location[0], lon: location[1] })
  }

  useEffect(() => {
    getLocation()
  }, [selectedLocation, currentLocation, getLocation])

  useEffect(() => {
    return () => { 
      isRecording && stopRecording().catch(e => console.log(e)) 
    }
  }, [isRecording])

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
    captureScreen({
      format: "jpg",
      quality: 1,
    }).then(
      async (uri) => {
        await saveToGallery(uri, 'photo')
        setMediaUrl(uri)
      },
      (error) => Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
      })
    )
  }

  const startRecording = useCallback(async () => {
      setIsRecording(true)
      const res = await RecordScreen.startRecording({ mic: isMicrophoneAllowed }).catch((error: any) => {
        Snackbar.show({
          text: error,
          duration: Snackbar.LENGTH_LONG,
        })
        setIsRecording(false)
        setRecordedSeconds(0)
      })

      if (res === RecordingResult.PermissionError) {
        Snackbar.show({
          text: res,
          duration: Snackbar.LENGTH_LONG,
        })
        setIsRecording(false)
        setRecordedSeconds(0)
      }

      setRecordedSeconds(0)
  }, [isMicrophoneAllowed])

  async function saveToGallery(path: string, type: "photo" | "video" | "auto") {
    if (Platform.OS === 'android') {
      // On Android, we need to request permission to write to external storage
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permission to save video',
          message: 'This app needs permission to save videos to your device',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      )
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        return
      }
    }

    await CameraRoll.save(path, { type })
    Snackbar.show({
      text: `${type.charAt(0).toUpperCase() + type.slice(1)} saved to gallery`,
      duration: Snackbar.LENGTH_LONG,
    })
  }

  const stopRecording = async () => {
    setIsRecording(false)
    const res = await RecordScreen.stopRecording().catch((error: any) =>
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
      })
    )
    if (res?.status === 'success') {
      await saveToGallery(res.result.outputURL as string, 'video')
      setMediaUrl(res.result.outputURL as string)
      setRecordedSeconds(0)
    }
  }

  const $containerStyleOverride: ViewStyle = {
    paddingHorizontal: isFullScreen ? 0 : scale(18)
  }

  const $headerStyleOverride: TextStyle = {
    top: topInset + scale(24),
  }

  const $bodyStyleOverride: ViewStyle = {
    marginTop: isFullScreen ? 0 : topInset + scale(80)
  }

  const $bottomContainerStyleOverride: ViewStyle = {
    bottom: bottomInset + scale(24)
  }

  const $button: ViewStyle = {
    ...$iconButton,
    width: isFullScreen ? scale(54) : scale(44),
    height: isFullScreen ? scale(54) : scale(44)
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

  const onShare = async (url?: string,) => {
    let shareOptions = url ? {
      title: 'Share file',
      failOnCancel: false,
      urls: [url],
    } : {
      message: 'Capture this moment',
      failOnCancel: false,
      url
    }

    if (url.split('.').pop() === 'mp4') shareOptions = {...shareOptions, type: 'video/mp4'}

    try {
      await Share.open(shareOptions)
      Snackbar.show({
        text: 'Successfully shared!',
        duration: Snackbar.LENGTH_LONG,
      })
    } catch (error) {
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
      })
    }
  }

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
      {!isCameraAllowed ?
        <Pressable style={[$body, $bodyStyleOverride]} onPress={() => requestCameraPermissions((value) => {setIsCameraAllowed(value); setIsFullScreen(value)})}>
          <Text tx="issView.cameraPermissionText" style={$time} />
        </Pressable> : <View style={[$body, $bodyStyleOverride]}>
            {Boolean(issMarkerPosition) && (
              <ARView
                ref={arView}
                isFullScreen={isFullScreen}
                isPathVisible={isPathVisible}
                isRecording={isRecording}
                recordedSeconds={recordedSeconds}
                pastIssPathCoords={pastIssPathCoords}
                futureIssPathCoords={futureIssPathCoords}
                issMarkerPosition={issMarkerPosition}
                setIsSpotted={setIsSpotted}
              />
            )}
            <View style={[$bottomContainer, $bottomContainerStyleOverride]}>
              <View style={[$buttonColumn, isLandscape && { flexDirection: 'row' }]}>
                <IconLinkButton
                  accessible
                  accessibilityLabel="path line"
                  accessibilityHint="enable/disable path line"
                  icon="line"
                  buttonStyle={[$button, isPathVisible && $activeButton, isLandscape && { marginRight: scale(24) }]}
                  onPress={() => setIsPathVisible(!isPathVisible)}
                />
                <IconLinkButton
                  accessible
                  accessibilityLabel="compass"
                  accessibilityHint="enable full screen"
                  icon="compass" 
                  buttonStyle={[$button, isFullScreen && $activeButton, isLandscape && { marginRight: scale(24) }]}
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
                  buttonStyle={[$button, isLandscape && { marginLeft: scale(24) }]}
                  onPress={() => onShare(mediaUrl)} 
                /> 
                <IconLinkButton 
                  accessible
                  accessibilityLabel="capture"
                  accessibilityHint="take a photo"
                  icon="capture"
                  buttonStyle={[$button, isLandscape && { marginLeft: scale(24) }]}
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
                        buttonStyle={[$button, isLandscape && { marginLeft: scale(24) }]}
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
                    buttonStyle={[$button, isLandscape && { marginLeft: scale(24) }]}
                  />
                )}
              </View>
            </View>
          </View>}
      <Modal
        isVisible={isDetails}
        onBackdropPress={() => setIsDetails(!isDetails)}
        onSwipeComplete={() => setIsDetails(!isDetails)}
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
        <Details issData={issData[issMarkerIndex]} onClose={() => setIsDetails(!isDetails)} observer={location} />
      </Modal>
      { isSpotted && (
        <Text tx="issView.issCaptured" style={[$text, { textDecorationLine: 'underline' }]} onPress={takeScreenshot} />
      )}
    </Screen>
  )
})

const $text: TextStyle = {
  bottom: '40%',
  fontSize: fontSizes[24],
  textAlign: 'center',
  width: '50%',
  position: 'absolute',
  color: '#fff',
  zIndex: 9,
  alignSelf: 'center'
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  justifyContent: "space-between"
}

const $headerContainer: ViewStyle = {
  position: "absolute",
  left: scale(18),
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
  fontSize: fontSizes[36],
  lineHeight: lineHeights[44],
  color: colors.palette.neutral250
}

const $body: ViewStyle = {
  flex: 1,
  position: "relative",
  backgroundColor: colors.backgroundDark,
  borderRadius: scale(12),
  overflow: "hidden"
}

const $bottomContainer: ViewStyle = {
  position: "absolute",
  left: 0,
  width: "100%",
  paddingHorizontal: scale(24),
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end"
}

const $buttonColumn: ViewStyle = {
  justifyContent: "flex-end"
}

const $iconButton: ViewStyle = {
  backgroundColor: colors.palette.overlayWhite,
  marginTop: scale(24)
}

const $closeButton: ViewStyle = {
  marginTop: 0,
  width: scale(44),
  height: scale(44)
}

const $activeButton: ViewStyle = {
  backgroundColor: colors.palette.buttonBlue
}

const $timeContainer: ViewStyle = {
  flex: 1
}

const $timeHeader: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: fontSizes[13],
  lineHeight: lineHeights[16],
  color: colors.palette.neutral250,
  textTransform: "uppercase",
  textAlign: "center"
}

const $time: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: fontSizes[24],
  lineHeight: lineHeights[39],
  color: colors.palette.neutral100,
  textAlign: "center"
}

const $stop: TextStyle = {
  position: 'absolute',
  top: '100%',
  alignSelf: 'center',
  marginTop: scale(7),
  fontFamily: typography.primary.normal,
  fontSize: fontSizes[13],
  lineHeight: lineHeights[16],
  color: colors.palette.neutral100,
  textTransform: "uppercase",
}
