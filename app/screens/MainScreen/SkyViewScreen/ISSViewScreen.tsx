import { observer } from "mobx-react-lite"
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import {
  View,
  ViewStyle,
  TextStyle,
  PermissionsAndroid,
  Platform,
  Pressable,
  BackHandler,
  AppState,
} from "react-native"
import Modal from "react-native-modal"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Orientation from "react-native-orientation-locker"
import { check, request, PERMISSIONS, RESULTS, openSettings } from "react-native-permissions"
import Share from "react-native-share"
import ViewShot, { captureScreen } from "react-native-view-shot"
import { Screen, Text } from "../../../components"
import { colors, typography } from "../../../theme"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import { ARView } from "../components/ARView"
import { intervalToDuration, formatDuration } from "date-fns"
import { formatTimer } from "../components/helpers"
import { useStores } from "../../../models"
import Snackbar from "react-native-snackbar"
import RecordScreen, { RecordingResult } from "react-native-record-screen"
import { CameraRoll } from "@react-native-camera-roll/camera-roll"
import { getCurrentTimeZome } from "../../../utils/formatDate"
import analytics from "@react-native-firebase/analytics"
import { PermissionsModal } from "../components/PermissionsModal"
import { translate } from "../../../i18n"
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated"
import { StyleFn, useStyles } from "../../../utils/useStyles"
import { LocationType, OrbitPoint } from "../../../services/api"
import { TabNavigatorContext } from "../../../navigators/navigationUtilities"

function checkCameraPermissions(callback: (value: boolean) => void) {
  if (Platform.OS === "android") {
    check(PERMISSIONS.ANDROID.CAMERA)
      .then((result) => {
        if (result === RESULTS.GRANTED) {
          callback(true)
        } else if (result === RESULTS.DENIED) {
          callback(false)
          requestCameraPermissions(callback)
        }
      })
      .catch(() => callback(false))
  } else if (Platform.OS === "ios") {
    const permission = PERMISSIONS.IOS.CAMERA
    check(permission)
      .then((permissionStatus) => {
        if (permissionStatus === RESULTS.GRANTED) {
          callback(true)
        } else {
          callback(false)
          requestCameraPermissions(callback)
        }
      })
      .catch(() => callback(false))
  }
}

function requestCameraPermissions(callback: (value: boolean) => void, afterClick?: boolean) {
  if (Platform.OS === "android") {
    request(PERMISSIONS.ANDROID.CAMERA)
      .then((permissionResult) => {
        if (permissionResult === RESULTS.GRANTED) {
          callback(true)
        } else {
          callback(false)
          if (afterClick) {
            openSettings().catch(() =>
              Snackbar.show({
                text: translate("snackBar.openSettingsError"),
                duration: Snackbar.LENGTH_LONG,
              }),
            )
          }
        }
      })
      .catch(() => callback(false))
  } else if (Platform.OS === "ios") {
    request(PERMISSIONS.IOS.CAMERA)
      .then((permissionResult) => {
        if (permissionResult === RESULTS.GRANTED) {
          callback(true)
        } else if (permissionResult === RESULTS.BLOCKED) {
          callback(false)
          if (afterClick) {
            openSettings().catch(() =>
              Snackbar.show({
                text: translate("snackBar.openSettingsError"),
                duration: Snackbar.LENGTH_LONG,
              }),
            )
          }
        }
      })
      .catch(() => callback(false))
  }
}

async function checkMicrophonePermissions(): Promise<boolean> {
  if (Platform.OS === "android") {
    const result = await check(PERMISSIONS.ANDROID.RECORD_AUDIO)
    if (result === RESULTS.GRANTED) {
      return true
    } else if (result === RESULTS.DENIED) {
      return (await requestMicrophonePermissions()) === RESULTS.GRANTED
    }
  } else if (Platform.OS === "ios") {
    const permission = PERMISSIONS.IOS.MICROPHONE
    const permissionStatus = await check(permission)
    if (permissionStatus === RESULTS.GRANTED) {
      return true
    } else {
      return (await requestMicrophonePermissions()) === RESULTS.GRANTED
    }
  }
  return false
}

async function requestMicrophonePermissions(): Promise<string> {
  if (Platform.OS === "android") {
    return await request(PERMISSIONS.ANDROID.RECORD_AUDIO)
  } else if (Platform.OS === "ios") {
    return await request(PERMISSIONS.IOS.MICROPHONE)
  }
  return ""
}

function calcLocation(
  selectedLocation: LocationType,
  currentLocation: LocationType,
): [number, number] {
  if (selectedLocation) return [selectedLocation.location.lat, selectedLocation.location.lng]
  if (currentLocation) return [currentLocation.location.lat, currentLocation.location.lng]
  return null
}

export const ISSViewScreen = observer(function ISSNowScreen() {
  const {
    $containerStyleOverride,
    $containerStyleOverrideFs,
    $headerStyleOverride,
    $bodyStyleOverride,
    $bodyStyleOverrideFs,
    $bottomContainerStyleOverride,
    $button,
    $buttonFs,
    $container,
    $headerContainer,
    $modal,
    $body,
    $bottomContainer,
    $buttonColumn,
    $closeButton,
    $activeButton,
    $timeContainer,
    $timeHeader,
    $time,
    $stop,
    $ml24,
    $mr24,
    $flex,
    $row,
    $permissionText,
  } = useStyles(styles)

  const topInset = useSafeAreaInsets().top
  const bottomInset = useSafeAreaInsets().bottom
  const { currentLocation, selectedLocation, issData, getISSSightings, getISSData } = useStores()
  const [isFullScreen, setIsFullScreen] = useState(true)
  const [isPathVisible, setIsPathVisible] = useState(true)
  const [isCameraAllowed, setIsCameraAllowed] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)
  const [isPermissionsModal, setIsPermissionsModal] = useState(false)
  const [countdown, setCountdown] = useState("- 00:00:00:00")
  const [isRecording, setIsRecording] = useState(false)
  const [recordedSeconds, setRecordedSeconds] = useState(0)
  const [mediaUrl, setMediaUrl] = useState("")
  const [mediaType, setMediaType] = useState("")
  const [still, setStill] = useState(false)
  const current = useMemo(
    () => selectedLocation || currentLocation,
    [selectedLocation, currentLocation],
  )
  const location = useMemo(
    () => calcLocation(selectedLocation, currentLocation),
    [selectedLocation, currentLocation],
  )
  const whiteness = useSharedValue(0)

  const intervalRef = useRef<NodeJS.Timeout>(null)

  const events = useMemo(
    () => current?.sightings?.filter((item) => item.notify) || [],
    [current?.sightings],
  )
  const eventsList = useMemo(
    () => (events?.length ? events : current?.sightings || []),
    [current?.sightings, events],
  )

  const result = useMemo(
    () =>
      eventsList.filter(
        (sighting) => new Date(sighting.date) > new Date(new Date().getTime() - 1800000),
      ),
    [eventsList],
  )

  const timeDiff = useCallback(
    (callback: (diff: string) => void) => {
      if (result.length === 0) {
        setCountdown("- 00:00:00:00")
        return
      }
      const duration = intervalToDuration({ start: new Date(result[0].date), end: new Date() })
      const diff = formatDuration(duration, { delimiter: "," })
      callback(
        formatTimer(
          diff,
          new Date(result[0].date).toISOString() >= new Date().toISOString() ? "- " : "+ ",
        ),
      )
    },
    [result],
  )

  const startCountdown = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => timeDiff(setCountdown), 1000)
  }, [result, timeDiff])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    startCountdown()
  }, [result, startCountdown, timeDiff])

  useEffect(() => {
    checkCameraPermissions((value: boolean) => {
      setIsCameraAllowed(value)
      setIsFullScreen(value)
    })
  }, [])

  const getSightings = async () => {
    const { timeZone } = await getCurrentTimeZome()
    await getISSSightings({ zone: timeZone, lat: location[0], lon: location[1] })
  }

  const getData = async () => {
    await getISSData({ lat: location[0], lon: location[1] })
  }

  useEffect(() => {
    return () => {
      isRecording && stopRecording().catch((e) => console.log(e))
    }
  }, [isRecording])

  useEffect(() => {
    if (!location) return

    getSightings().catch((e) => console.log(e))
    getData().catch((e) => console.log(e))
  }, [location?.[0], location?.[1]])

  useEffect(() => {
    if (!isRecording) return undefined

    const interval = setInterval(() => {
      setRecordedSeconds((s) => s + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isRecording])

  const onOrientationDidChange = (orientation) => {
    if (orientation === "LANDSCAPE-LEFT" || orientation === "LANDSCAPE-RIGHT") {
      setIsLandscape(true)
    } else {
      setIsLandscape(false)
    }
  }

  const flashCameraIcon = () => {
    whiteness.value = withSequence(
      withTiming(1, { duration: 300 }),
      withTiming(0, { duration: 300 }),
    )
  }

  const takeScreenshot = () => {
    flashCameraIcon()
    setStill(true)
  }

  const completeScreenshot = async () => {
    try {
      const uri = await captureScreen({
        format: "jpg",
        quality: 1,
      })

      setStill(false)
      await saveToGallery(uri, "photo")
      setMediaUrl(uri)
      setMediaType("photo")
    } catch (e) {
      setStill(false)
      console.error(e)
      Snackbar.show({
        text: translate("issView.screenshotError"),
        duration: Snackbar.LENGTH_LONG,
      })
    }
  }

  const startRecording = async (isMicrophoneAllowed: boolean) => {
    const res = await RecordScreen.startRecording({ mic: isMicrophoneAllowed }).catch(
      (error: any) => {
        Snackbar.show({
          text: error,
          duration: Snackbar.LENGTH_LONG,
        })
        setIsRecording(false)
        setRecordedSeconds(0)
      },
    )

    if (res === RecordingResult.PermissionError) {
      Snackbar.show({
        text: res,
        duration: Snackbar.LENGTH_LONG,
      })
      setIsRecording(false)
      setRecordedSeconds(0)
      return
    }

    setIsRecording(true)
    setRecordedSeconds(0)
  }

  async function saveToGallery(path: string, type: "photo" | "video" | "auto") {
    if (Platform.OS === "android") {
      let granted: boolean
      if (Platform.Version >= 33) {
        const statuses = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
        ])

        granted =
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
            PermissionsAndroid.RESULTS.GRANTED
      } else {
        granted =
          (await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
            title: translate("permissionsAndroid.title"),
            message: translate("permissionsAndroid.message"),
            buttonNeutral: translate("permissionsAndroid.buttonNeutral"),
            buttonNegative: translate("permissionsAndroid.buttonNegative"),
            buttonPositive: translate("permissionsAndroid.buttonPositive"),
          })) === PermissionsAndroid.RESULTS.GRANTED
      }

      if (!granted) {
        setIsPermissionsModal(true)
        return
      }
    }

    CameraRoll.save(path, { type })
      .then(() =>
        Snackbar.show({
          text: `${type.charAt(0).toUpperCase() + type.slice(1)} ${translate(
            "snackBar.savedToGallery",
          )}`,
          duration: Snackbar.LENGTH_LONG,
        }),
      )
      .catch(() => setIsPermissionsModal(true))
  }

  const stopRecording = async () => {
    setIsRecording(false)
    const res: any = await RecordScreen.stopRecording().catch((error: any) =>
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
      }),
    )
    if (res?.status === "success") {
      await saveToGallery(res.result.outputURL as string, "video")
      setMediaUrl(res.result.outputURL as string)
      setMediaType("video")
      setRecordedSeconds(0)
    }
  }

  useEffect(() => {
    const initial = Orientation.getInitialOrientation()

    if (initial === "LANDSCAPE-LEFT" || initial === "LANDSCAPE-RIGHT") {
      setIsLandscape(true)
    } else {
      setIsLandscape(false)
    }

    Orientation.addOrientationListener(onOrientationDidChange)
    return () => Orientation.removeOrientationListener(onOrientationDidChange)
  }, [])

  const { toggleBottomTabs, toggleIsLandscape } = useContext(TabNavigatorContext)

  useEffect(() => toggleBottomTabs(!isFullScreen), [isFullScreen])
  useEffect(() => toggleIsLandscape(isLandscape), [isLandscape])

  const onShare = async () => {
    try {
      let url = mediaUrl
      if (!url) {
        flashCameraIcon()
        url = await captureScreen({
          format: "jpg",
          quality: 1,
        })
      }
      if (!url) return

      let shareOptions = {
        title: "Share file",
        failOnCancel: false,
        url: url.startsWith("file://") ? url : `file://${url}`,
        type: undefined,
      }

      if (url.split(".").pop() === "mp4") shareOptions = { ...shareOptions, type: "video/mp4" }

      const { success } = await Share.open(shareOptions)
      if (success) {
        analytics()
          .logShare({ content_type: mediaType, item_id: "iss_capture_moment", method: "" })
          .catch(() => null)

        Snackbar.show({
          text: translate("snackBar.shared"),
          duration: Snackbar.LENGTH_LONG,
        })
      }
    } catch (error) {
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
      })
    }
  }

  useEffect(() => {
    const backAction = () => {
      toggleBottomTabs(true)
      return false
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)

    return () => backHandler.remove()
  }, [])

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState !== "active" && isRecording) {
        stopRecording().catch(console.error)
      }
    })

    return () => {
      subscription.remove()
    }
  }, [isRecording])

  const issPath = useMemo(() => {
    return (issData as OrbitPoint[]).filter((point: OrbitPoint) => {
      const diff = Math.abs(new Date().valueOf() - new Date(point.date).valueOf())
      return diff < 60 * 60 * 1000
    })
  }, [issData])

  const animatedCameraButtonStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      whiteness.value,
      [0, 1],
      [colors.palette.overlayWhite, "white"],
    ),
  }))

  const headerStyle = { ...$headerStyleOverride }
  headerStyle.top = Number(headerStyle.top) + topInset

  const bodyStyle = { ...(isFullScreen ? $bodyStyleOverrideFs : $bodyStyleOverride) }
  if (!isFullScreen) bodyStyle.marginTop = Number(bodyStyle.marginTop) + topInset

  const bottomContainerStyle = { ...$bottomContainerStyleOverride }
  bottomContainerStyle.bottom = Number(bottomContainerStyle.bottom) + bottomInset

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={[
        $container,
        isFullScreen ? $containerStyleOverrideFs : $containerStyleOverride,
      ]}
      style={{ backgroundColor: colors.palette.neutral900 }}
      statusBarStyle="light"
      isPortrait={false}
    >
      <View style={[$headerContainer, headerStyle]}>
        {isFullScreen && (
          <IconLinkButton
            accessible
            accessibilityLabel="x button"
            accessibilityHint="disable full screen mode"
            icon="x"
            onPress={() => setIsFullScreen(false)}
            buttonStyle={[isFullScreen ? $buttonFs : $button, $closeButton]}
          />
        )}
      </View>
      {!isCameraAllowed ? (
        <Pressable
          style={[$body, bodyStyle]}
          onPress={() =>
            requestCameraPermissions((value) => {
              setIsCameraAllowed(value)
              setIsFullScreen(value)
            }, true)
          }
        >
          <Text tx="issView.cameraPermissionText" style={[$time, $permissionText]} />
        </Pressable>
      ) : (
        <View style={[$body, bodyStyle]}>
          {issData?.length > 0 && (
            <ViewShot style={$flex}>
              <ARView
                still={still}
                onStillReady={completeScreenshot}
                isFullScreen={isFullScreen}
                isPathVisible={isPathVisible}
                isRecording={isRecording}
                recordedSeconds={recordedSeconds}
                issPath={issPath}
                onTakeScreenshot={takeScreenshot}
                location={current}
              />
            </ViewShot>
          )}
          <View style={[$bottomContainer, bottomContainerStyle]}>
            <View style={[$buttonColumn, isLandscape && $row]}>
              <IconLinkButton
                accessible
                accessibilityLabel="path line"
                accessibilityHint="enable/disable path line"
                icon="line"
                buttonStyle={[
                  isFullScreen ? $buttonFs : $button,
                  isPathVisible && $activeButton,
                  isLandscape && $mr24,
                ]}
                onPress={() => setIsPathVisible(!isPathVisible)}
              />
              <IconLinkButton
                accessible
                accessibilityLabel="compass"
                accessibilityHint="enable full screen"
                icon="compass"
                buttonStyle={[
                  isFullScreen ? $buttonFs : $button,
                  isFullScreen && $activeButton,
                  isLandscape && $mr24,
                ]}
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
              <Text text={`${translate("units.time")} ${countdown}`} style={$time} />
            </View>
            <View style={[$buttonColumn, isLandscape && $row]}>
              <IconLinkButton
                accessible
                accessibilityLabel="share"
                accessibilityHint="open share modal"
                icon="share"
                buttonStyle={[isFullScreen ? $buttonFs : $button, isLandscape && $ml24]}
                onPress={onShare}
              />
              <IconLinkButton
                accessible
                accessibilityLabel="capture"
                accessibilityHint="take a photo"
                icon="capture"
                buttonStyle={[
                  isFullScreen ? $buttonFs : $button,
                  animatedCameraButtonStyle,
                  isLandscape && $ml24,
                ]}
                onPress={takeScreenshot}
              />
              {isRecording ? (
                <>
                  <View>
                    <IconLinkButton
                      accessible
                      accessibilityLabel="video"
                      accessibilityHint="stop recording"
                      icon="videoOff"
                      onPress={stopRecording}
                      backgroundColor={colors.palette.nasaRed}
                      buttonStyle={[isFullScreen ? $buttonFs : $button, isLandscape && $ml24]}
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
                  onPress={() => {
                    checkMicrophonePermissions()
                      .then((value) => startRecording(value))
                      .catch(console.error)
                  }}
                  buttonStyle={[isFullScreen ? $buttonFs : $button, isLandscape && $ml24]}
                />
              )}
            </View>
          </View>
        </View>
      )}
      <Modal
        isVisible={isPermissionsModal}
        onBackdropPress={() => setIsPermissionsModal(!isPermissionsModal)}
        onSwipeComplete={() => setIsPermissionsModal(!isPermissionsModal)}
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
        <PermissionsModal
          body={translate("permissionsModal.body")}
          onClose={() => setIsPermissionsModal(!isPermissionsModal)}
          onSuccess={() => {
            setIsPermissionsModal(!isPermissionsModal)
            openSettings().catch(() =>
              Snackbar.show({
                text: translate("snackBar.openSettingsError"),
                duration: Snackbar.LENGTH_LONG,
              }),
            )
          }}
        />
      </Modal>
    </Screen>
  )
})

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $containerStyleOverride: ViewStyle = {
    paddingHorizontal: scale(18),
  }

  const $iconButton: ViewStyle = {
    backgroundColor: colors.palette.overlayWhite,
    marginTop: scale(24),
  }

  const $containerStyleOverrideFs: ViewStyle = {
    paddingHorizontal: 0,
  }

  const $headerStyleOverride: TextStyle = {
    top: scale(24),
  }

  const $bodyStyleOverride: ViewStyle = {
    marginTop: scale(80),
  }

  const $bodyStyleOverrideFs: ViewStyle = {
    marginTop: 0,
  }

  const $bottomContainerStyleOverride: ViewStyle = {
    bottom: scale(24),
  }

  const $button: ViewStyle = {
    ...$iconButton,
    width: scale(44),
    height: scale(44),
  }

  const $buttonFs: ViewStyle = {
    ...$iconButton,
    width: scale(54),
    height: scale(54),
  }

  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    justifyContent: "space-between",
  }

  const $headerContainer: ViewStyle = {
    position: "absolute",
    left: scale(18),
    zIndex: 9,
  }

  const $modal: ViewStyle = {
    // flex: 1,
    justifyContent: "flex-end",
    left: 0,
    margin: 0,
  }

  const $body: ViewStyle = {
    flex: 1,
    position: "relative",
    backgroundColor: colors.backgroundDark,
    borderRadius: scale(12),
    overflow: "hidden",
  }

  const $bottomContainer: ViewStyle = {
    position: "absolute",
    left: 0,
    width: "100%",
    paddingHorizontal: scale(24),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  }

  const $buttonColumn: ViewStyle = {
    justifyContent: "flex-end",
  }

  const $closeButton: ViewStyle = {
    marginTop: 0,
    width: scale(44),
    height: scale(44),
  }

  const $activeButton: ViewStyle = {
    backgroundColor: colors.palette.buttonBlue,
  }

  const $timeContainer: ViewStyle = {
    flex: 1,
  }

  const $timeHeader: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[13],
    lineHeight: lineHeights[16],
    color: colors.palette.neutral250,
    textTransform: "uppercase",
    textAlign: "center",
  }

  const $time: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[24],
    lineHeight: lineHeights[39],
    color: colors.palette.neutral100,
    textAlign: "center",
  }

  const $stop: TextStyle = {
    position: "absolute",
    top: "100%",
    alignSelf: "center",
    marginTop: scale(7),
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[13],
    lineHeight: lineHeights[16],
    color: colors.palette.neutral100,
    textTransform: "uppercase",
  }

  const $ml24: ViewStyle = { marginLeft: scale(24) }
  const $mr24: ViewStyle = { marginRight: scale(24) }

  const $row: ViewStyle = { flexDirection: "row" }
  const $flex: ViewStyle = { flex: 1 }
  const $permissionText: TextStyle = {
    borderColor: colors.palette.buttonBlue,
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    textDecorationLine: "underline",
  }

  return {
    $containerStyleOverride,
    $containerStyleOverrideFs,
    $headerStyleOverride,
    $bodyStyleOverride,
    $bodyStyleOverrideFs,
    $bottomContainerStyleOverride,
    $button,
    $buttonFs,
    $container,
    $headerContainer,
    $modal,
    $body,
    $bottomContainer,
    $buttonColumn,
    $iconButton,
    $closeButton,
    $activeButton,
    $timeContainer,
    $timeHeader,
    $time,
    $stop,
    $ml24,
    $mr24,
    $row,
    $flex,
    $permissionText,
  }
}
