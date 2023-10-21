/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { BlurView } from "expo-blur"
import { observer } from "mobx-react-lite"
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import { BackHandler, TextStyle, View, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Orientation from "react-native-orientation-locker"
import Modal from "react-native-modal"
import { Screen, Text } from "../../../components"
import { colors, typography } from "../../../theme"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import { Globe } from "../components/Globe"
import { formatDate } from "../../../utils/formatDate"
import { LocationType } from "../../OnboardingScreen/SignupLocation"
import * as storage from "../../../utils/storage"
import { SelectLocation } from "../HomeScreen/SelectLocation"
import { MapBox } from "../components/MapBox"
import { useStores } from "../../../models"
import { OrbitPoint } from "../../../services/api"
import { useStyles } from "../../../utils/useStyles"
import { TabNavigatorContext } from "../../../navigators/navigationUtilities"

export const ISSNowScreen = observer(function ISSNowScreen() {
  const {
    $containerStyleOverride,
    $containerStyleOverrideFs,
    $headerStyleOverride,
    $headerStyleOverrideFs,
    $headerStyleForLandscapeOverride,
    $headerStyleForLandscapeOverrideFs,
    $bodyStyleOverride,
    $bodyStyleOverrideFs,
    $bodyStyleForLandscapeOverride,
    $bodyStyleForLandscapeOverrideFs,
    $modControl,
    $zoomControl,
    $modButtonsOverload,
    $modButtonsOverloadFs,
    $container,
    $header,
    $body,
    $flatMap,
    $textContainer,
    $lightIcon,
    $location,
    $date,
    $zoomButtons,
    $modButtons,
    $modButton,
    $modButtonText,
    $modButtonTextActive,
    $active,
    $disabled,
    $modal,
  } = useStyles(styles)

  const topInset = useSafeAreaInsets().top
  const { currentLocation, selectedLocation, issData, getISSData, setSelectedLocation } =
    useStores()
  const [isGlobe, setIsGlobe] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(0)
  const [isLandscape, setIsLandscape] = useState(false)
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toISOString())
  const [isLocation, setIsLocation] = useState(false)
  const [address, setAddress] = useState("")
  const cameraPosition = useRef(null)
  const current = useMemo(() => selectedLocation || currentLocation, [selectedLocation, currentLocation])

  const onOrientationDidChange = (orientation) => {
    if (orientation === "LANDSCAPE-LEFT" || orientation === "LANDSCAPE-RIGHT") {
      setIsLandscape(true)
    } else {
      setIsLandscape(false)
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
    return () => {
      Orientation.removeOrientationListener(onOrientationDidChange)
    }
  }, [])

  useEffect(() => {
    const secTimer = setInterval(() => {
      setCurrentDateTime(new Date().toISOString())
    }, 1000)

    return () => clearInterval(secTimer)
  }, [])

  useEffect(() => {
    if (selectedLocation) setAddress(selectedLocation.subtitle)
    else if (currentLocation) setAddress(currentLocation.subtitle)
    else setAddress("")
  }, [selectedLocation?.subtitle, currentLocation?.subtitle])

  const getData = async () => {
    await getISSData({ lat: current?.location.lat, lon: current?.location.lng })
  }

  useEffect(() => {
    if (!current || !issData?.length) return undefined

    const lastOrbitPoint = issData.find((point: OrbitPoint, idx: number) => {
      return (
        new Date().valueOf() < new Date(point.date).valueOf() &&
        idx < issData.length - 1 &&
        point.longitude > 0 &&
        issData[idx + 1].longitude < 0
      )
    })

    if (!lastOrbitPoint) return undefined

    const tmr = setTimeout(() => {
      getData().catch((e) => console.log(e))
    }, new Date(lastOrbitPoint.date).valueOf() - Date.now())

    return () => clearTimeout(tmr)
  }, [issData])

  useEffect(() => {
    if (!current) return

    getData().catch((e) => console.log(e))
  }, [current])

  const { toggleBottomTabs, toggleIsLandscape } = useContext(TabNavigatorContext)

  useEffect(() => toggleBottomTabs(!isFullScreen), [isFullScreen])
  useEffect(() => toggleIsLandscape(isLandscape), [isLandscape])

  useEffect(() => {
    const backAction = () => {
      toggleBottomTabs(true)
      return false
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)

    return () => backHandler.remove()
  }, [isFullScreen])

  const handleChangeLocation = useCallback(
    async (location: LocationType) => {
      setIsLocation(false)
      setSelectedLocation(location)
      await storage.save("selectedLocation", location)
    },
    [selectedLocation, currentLocation],
  )

  const handleCameraChange = useCallback((coords: [number, number]) => {
    cameraPosition.current = coords
  }, [])

  const headerStyle = { ...(isFullScreen ? $headerStyleOverrideFs : $headerStyleOverride) }
  headerStyle.top = Number(headerStyle.top) + topInset

  const bodyStyle = { ...(isFullScreen ? $bodyStyleOverrideFs : $bodyStyleOverride) }
  if (!isFullScreen) bodyStyle.marginTop = Number(bodyStyle.marginTop) + topInset

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
      <View
        style={[
          $header,
          headerStyle,
          isLandscape &&
            (isFullScreen ? $headerStyleForLandscapeOverrideFs : $headerStyleForLandscapeOverride),
        ]}
      >
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
          <Text text={address} style={$location} ellipsizeMode="tail" numberOfLines={1} />
          <Text text={`${formatDate(currentDateTime, "dd MMM yyyy k:mm:ss")}`} style={$date} />
        </View>
        <IconLinkButton
          accessible
          accessibilityLabel="pin button"
          accessibilityHint="change location"
          icon="pin"
          buttonStyle={isFullScreen && $lightIcon}
          blurIntensity={50}
          onPress={() => setIsLocation(true)}
        />
      </View>
      <View
        style={[
          $body,
          bodyStyle,
          isLandscape &&
            (isFullScreen ? $bodyStyleForLandscapeOverrideFs : $bodyStyleForLandscapeOverride),
        ]}
      >
        {isGlobe && (
          <Globe
            key={isFullScreen.toString() + isLandscape.toString()}
            issPath={issData}
            zoom={zoomLevel + 1}
            defaultCameraPosition={cameraPosition.current}
            marker={current && [current?.location?.lat, current?.location?.lng]}
            onCameraChange={handleCameraChange}
          />
        )}
        {!isGlobe && (
          <MapBox
            issPath={issData}
            style={$flatMap}
            zoom={zoomLevel}
            defaultCameraPosition={cameraPosition.current}
            onCameraChange={handleCameraChange}
            markers={
              current?.location
                ? [{ latitude: current?.location?.lat, longitude: current?.location?.lng }]
                : []
            }
          />
        )}
        <View
          style={[
            $modButtons,
            $modControl,
            isLandscape && (isFullScreen ? $modButtonsOverloadFs : $modButtonsOverload),
          ]}
        >
          <BlurView
            style={[
              $modButtons,
              isLandscape && (isFullScreen ? $modButtonsOverloadFs : $modButtonsOverload),
              { bottom: 0 },
            ]}
          >
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
        <View
          style={[
            $zoomButtons,
            $zoomControl,
            isLandscape && (isFullScreen ? $modButtonsOverloadFs : $modButtonsOverload),
          ]}
        >
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
      <Modal
        isVisible={isLocation}
        onBackdropPress={() => setIsLocation(!isLocation)}
        onSwipeComplete={() => setIsLocation(!isLocation)}
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
        <SelectLocation
          selectedLocation={current}
          onLocationPress={handleChangeLocation}
          onClose={() => setIsLocation(!isLocation)}
        />
      </Modal>
    </Screen>
  )
})

const styles = ({ scale, fontSizes, lineHeights }) => {
  const $containerStyleOverride: ViewStyle = {
    paddingHorizontal: scale(18),
    margin: 0,
  }

  const $containerStyleOverrideFs: ViewStyle = {
    ...$containerStyleOverride,
    paddingHorizontal: 0,
  }

  const $headerStyleOverride: ViewStyle = {
    top: scale(24),
    paddingHorizontal: 0,
    left: scale(18),
  }

  const $headerStyleOverrideFs: ViewStyle = {
    ...$headerStyleOverride,
    paddingHorizontal: scale(18),
    left: 0,
  }

  const $headerStyleForLandscapeOverride: ViewStyle = {
    paddingHorizontal: scale(54),
    left: scale(18),
  }

  const $headerStyleForLandscapeOverrideFs: ViewStyle = {
    paddingHorizontal: scale(18),
    left: 0,
  }

  const $bodyStyleOverride: ViewStyle = {
    marginTop: scale(80),
  }

  const $bodyStyleOverrideFs: ViewStyle = {
    marginTop: 0,
  }

  const $bodyStyleForLandscapeOverride: ViewStyle = {
    marginTop: scale(12),
    marginBottom: scale(12),
    marginHorizontal: scale(36),
  }

  const $bodyStyleForLandscapeOverrideFs: ViewStyle = {
    marginTop: 0,
    marginBottom: 0,
    marginHorizontal: 0,
  }

  const $control: ViewStyle = {
    position: "absolute",
    bottom: scale(18),
  }

  const $controlFs: ViewStyle = {
    ...$control,
    bottom: scale(54),
  }

  const $modControl: ViewStyle = {
    ...$control,
    left: scale(18),
    padding: 0,
  }

  const $zoomControl: ViewStyle = {
    ...$control,
    right: scale(18),
  }

  const $modButtonsOverload: ViewStyle = {
    flexDirection: "row",
    height: "auto",
    bottom: scale(18),
  }

  const $modButtonsOverloadFs: ViewStyle = {
    ...$modButtonsOverload,
    bottom: scale(34),
  }

  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    justifyContent: "space-between",
  }

  const $header: ViewStyle = {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    zIndex: 10,
  }

  const $body: ViewStyle = {
    flex: 1,
    position: "relative",
    backgroundColor: colors.backgroundDark,
    borderRadius: scale(12),
    overflow: "hidden",
  }

  const $flatMap: ViewStyle = {
    flex: 1,
  }

  const $textContainer: ViewStyle = {
    flex: 1,
    paddingHorizontal: scale(10),
  }

  const $lightIcon: ViewStyle = {
    backgroundColor: colors.palette.overlayWhite,
  }

  const $location: TextStyle = {
    width: "100%",
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[20],
    lineHeight: lineHeights[24],
    color: colors.palette.neutral100,
    textAlign: "center",
  }

  const $date: TextStyle = {
    ...$location,
    fontSize: fontSizes[13],
    lineHeight: lineHeights[16],
    textTransform: "uppercase",
  }

  const $zoomButtons: ViewStyle = {
    height: scale(90),
    justifyContent: "space-between",
  }

  const $modButtons: ViewStyle = {
    height: scale(90),
    justifyContent: "space-between",
    padding: scale(2),
    borderRadius: scale(100),
    overflow: "hidden",
    ...$lightIcon,
  }

  const $modButton: ViewStyle = {
    height: scale(40),
    width: scale(40),
    backgroundColor: "transparent",
  }

  const $modButtonText: TextStyle = {
    fontSize: fontSizes[12],
    lineHeight: lineHeights[14],
    fontFamily: typography.primary.medium,
  }

  const $modButtonTextActive: TextStyle = {
    color: colors.palette.buttonBlue,
  }

  const $active: ViewStyle = {
    backgroundColor: colors.palette.neutral100,
  }

  const $disabled: ViewStyle = {
    opacity: 0.25,
  }

  const $modal: ViewStyle = {
    flex: 1,
    justifyContent: "flex-end",
    left: 0,
    margin: 0,
  }

  return {
    $containerStyleOverride,
    $containerStyleOverrideFs,
    $headerStyleOverride,
    $headerStyleOverrideFs,
    $headerStyleForLandscapeOverride,
    $headerStyleForLandscapeOverrideFs,
    $bodyStyleOverride,
    $bodyStyleOverrideFs,
    $bodyStyleForLandscapeOverride,
    $bodyStyleForLandscapeOverrideFs,
    $control,
    $controlFs,
    $modControl,
    $zoomControl,
    $modButtonsOverload,
    $modButtonsOverloadFs,
    $container,
    $header,
    $body,
    $flatMap,
    $textContainer,
    $lightIcon,
    $location,
    $date,
    $zoomButtons,
    $modButtons,
    $modButton,
    $modButtonText,
    $modButtonTextActive,
    $active,
    $disabled,
    $modal,
  }
}
