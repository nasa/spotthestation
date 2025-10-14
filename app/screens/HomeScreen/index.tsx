import {
  Screen,
  FlatMap,
  Globe,
  HomeHeader,
  SelectLocation,
  Sightings,
  InitLoaderModal,
  TrajectoryErrorModal,
  ModalContainer,
  HomeTutorialModal,
} from "../../components"
import { observer } from "mobx-react-lite"
import * as Sentry from "@sentry/react-native"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { BackHandler, Platform, ViewStyle } from "react-native"

import { LocationType, OrbitPoint } from "../../services/api"
import { colors } from "../../theme"
import {
  formatDateWithTZ,
  getCurrentTimeZone,
  getShortTZ,
  formatDuration,
} from "../../utils/datetime"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import * as storage from "../../utils/storage"

import { useStores } from "../../models"
import { useNavigation } from "@react-navigation/native"
import { StyleFn, useStyles } from "../../utils/useStyles"
import { translate } from "../../i18n"
import i18n from "i18n-js"
import { navigationRef } from "../../navigators/navigationUtilities"
import { useCurrentSighting } from "../../utils/useCurrentSighting"
import { startActivity, endActivity } from "../../components/LiveActivity"

export interface HomeScreenRouteProps {
  showSightings: boolean
}

function calcLocation(
  selectedLocation: LocationType,
  currentLocation: LocationType,
): [number, number] {
  if (selectedLocation) return [selectedLocation.location.lat, selectedLocation.location.lng]
  if (currentLocation) return [currentLocation.location.lat, currentLocation.location.lng]
  return null
}

export const HomeScreen = observer(function HomeScreen() {
  const { $container, $modal, $popupModal, $flatMap } = useStyles(styles)
  const navigation = useNavigation()
  const $topInset = useSafeAreaInsetsStyle(["top"], "padding")
  const $topInsetMargin = useSafeAreaInsetsStyle(["top", "bottom"], "margin")
  const {
    issData,
    getISSData,
    setISSSightings,
    initLoading,
    setInitLoading,
    setIssDataLoaded,
    setSightingsLoaded,
    currentLocation,
    selectedLocation,
    setSelectedLocation,
    sightingsLoaded,
    issDataLoaded,
    trajectoryError,
    trajectoryErrorKind,
    setTrajectoryError,
    requestCloseModal,
    requestOpenModal,
    setSightingsTimeOfDay,
    setSightingsDuration,
    setSightingsMaxHeight,
    getFilteredSightings,
    currentModal,
    setSightingsCloudCover,
    timeFormat,
  } = useStores()
  const intervalRef = useRef<NodeJS.Timeout>(null)
  const sightingsModalTimerRef = useRef<NodeJS.Timeout>(null)
  const liveActivityTimerRef = useRef<NodeJS.Timeout>(null)
  const [globeVisible, setGlobeVisible] = useState(false)

  const [isCurrentSightingLoaded, setIsCurrentSightingLoaded] = useState<boolean>(false)
  const [countdown, setCountdown] = useState("- 00:00:00:00")
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  const current = useMemo(
    () => selectedLocation || currentLocation,
    [selectedLocation, currentLocation],
  )
  const location = useMemo(
    () => calcLocation(selectedLocation, currentLocation),
    [selectedLocation, currentLocation],
  )

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp()
      return true
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)

    return () => backHandler.remove()
  }, [])

  const currentSighting = useCurrentSighting(current)

  useEffect(() => {
    if (!location || !issData?.length) return undefined

    const lastLongitudePoint = (issData as OrbitPoint[]).find((point: OrbitPoint, idx: number) => {
      return (
        new Date().valueOf() < new Date(point.date).valueOf() &&
        idx < issData.length - 1 &&
        point.longitude > 0 &&
        issData[idx + 1].longitude < 0
      )
    })

    const lastOrbitPoint = issData[issData.length - 1] as OrbitPoint

    // query new data when less than half of orbit available or ISS reached 180 degrees longitude
    const updateAt = Math.min(
      lastLongitudePoint ? new Date(lastLongitudePoint.date).valueOf() : Infinity,
      new Date(lastOrbitPoint.date).valueOf() - 50 * 60 * 1000,
    )

    const tmr = setTimeout(() => {
      getData().catch((e) => console.log(e))
    }, updateAt - Date.now())

    return () => clearTimeout(tmr)
  }, [issData])

  const timeDiff = useCallback(
    (callback: (diff: string) => void) => {
      if (!currentSighting.date) {
        setCountdown("- 00:00:00:00")
        setIsCurrentSightingLoaded(true)
        return
      }

      setTimeout(() => setIsCurrentSightingLoaded(true), 1000)
      callback(
        formatDuration(
          {
            start: new Date(currentSighting.date),
            end: new Date(),
          },
          new Date(currentSighting.date).toISOString() >= new Date().toISOString() ? "- " : "+ ",
        ),
      )
    },
    [currentSighting],
  )

  const startCountdown = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    timeDiff(setCountdown)
    intervalRef.current = setInterval(() => timeDiff(setCountdown), 1000)
  }, [currentSighting, timeDiff])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    startCountdown()
  }, [currentSighting, startCountdown, timeDiff])

  useEffect(() => {
    if (Platform.OS !== "ios") return undefined

    const date = currentSighting?.date

    const stop = async () => {
      clearTimeout(liveActivityTimerRef.current)
      await endActivity()
    }

    const start = async () => {
      await stop()
      const timeDiff = new Date(date).getTime() - Date.now()
      startActivity(
        translate("notifications.push.title"),
        `${translate("notifications.push.subTitleIos")} ${current.title}`,
        translate("notifications.timeLeft"),
        timeDiff / 1000,
      )
      liveActivityTimerRef.current = setTimeout(stop, timeDiff)
    }

    if (!date) {
      stop().catch(console.error)
      return undefined
    }

    const timeDiff = new Date(date).getTime() - Date.now()
    if (timeDiff < 0) {
      stop().catch(console.error)
      return undefined
    }

    if (timeDiff < 3 * 60 * 60 * 1000) {
      start().catch(console.error)
      return undefined
    }

    stop().catch(console.error)
    const tmr = setTimeout(start, timeDiff - 3 * 60 * 60 * 1000)
    return () => clearTimeout(tmr)
  }, [currentSighting?.date])

  const getCoach = async () => {
    const coachCompleted = await storage.load(storage.KEYS.COACH_COMPLETED)
    if (coachCompleted) requestCloseModal("coach")
    else requestOpenModal("coach")
  }

  useEffect(() => {
    if (initLoading) requestOpenModal("loader")
    else requestCloseModal("loader")
  }, [initLoading])

  useEffect(() => {
    if (trajectoryError) requestOpenModal("trajectoryError")
    else requestCloseModal("trajectoryError")
  }, [trajectoryError])

  useEffect(() => {
    if (initLoading && sightingsLoaded && issDataLoaded && isCurrentSightingLoaded) {
      console.log("initialized")
      setInitLoading(false)
    }
    if (sightingsLoaded && issDataLoaded && isCurrentSightingLoaded) {
      getCoach().catch((e) => console.log(e))
    }
  }, [issDataLoaded, initLoading, sightingsLoaded, isCurrentSightingLoaded])

  useEffect(() => {
    setTimeout(() => setGlobeVisible(true), 500)
  }, [])

  useEffect(() => {
    // Clear the initialParams prop when the screen is unmounted
    return () => {
      if (!navigationRef.isReady()) return
      navigation.setParams({ showSightings: false } as never)
    }
  }, [navigation])

  const getData = async () => {
    await getISSData({ lat: location[0], lon: location[1] })
  }

  useEffect(() => {
    if (!isInitialLoad || !current) return
    setSelectedLocation(current).catch((e) => console.log(e))
    setIsInitialLoad(false)
  }, [current, isInitialLoad])

  useEffect(() => {
    if (!location) return
    getData().catch((e) => console.log(e))
  }, [location?.[0], location?.[1]])

  const handleSetCoachCompleted = async () => {
    requestCloseModal("coach")
    await storage.save(storage.KEYS.COACH_COMPLETED, true)
  }

  const handleChangeLocation = useCallback(
    (location: LocationType) => {
      requestCloseModal("location")
      if (
        current &&
        current.location.lat === location.location.lat &&
        current.location.lng === location.location.lng
      )
        return

      setIssDataLoaded(false)
      setSightingsLoaded(false)
      setInitLoading(true)
      setIsCurrentSightingLoaded(false)
      setSelectedLocation(location).catch((e) => console.log(e))
    },
    [current],
  )

  const handleSetSightingNotification = useCallback(
    (value: string) => {
      const updated = {
        ...current,
        sightings: current.sightings.map((item) => {
          if (item.date === value) {
            return { ...item, notify: !item.notify }
          }
          return item
        }),
      }
      setISSSightings(updated)
    },
    [current],
  )

  const handleSetSightingNotificationToAll = useCallback(
    (notify: boolean) => {
      const updated = {
        ...current,
        sightings: current.sightings.map((item) => ({ ...item, notify })),
      }
      setISSSightings(updated)
    },
    [current],
  )

  const handleChangeTimeOfDay = useCallback(
    (value: string) => {
      setSightingsTimeOfDay(current, value)
    },
    [current],
  )

  const handleChangeDuration = useCallback(
    (value: string) => {
      setSightingsDuration(current, value)
    },
    [current],
  )

  const handleChangeMaxHeight = useCallback(
    (value: string) => {
      setSightingsMaxHeight(current, value)
    },
    [current],
  )

  const handleChangeCloudCover = useCallback(
    (value: string) => {
      setSightingsCloudCover(current, value)
    },
    [current],
  )

  const formatedDate = (date: string): string => {
    const tf = timeFormat === "24hour" ? "H:mm" : "h:mm aa"
    const timezone = current?.timezone || getCurrentTimeZone()
    const shortTZ = getShortTZ(current?.timezone || getCurrentTimeZone())
    return `${formatDateWithTZ(
      date,
      `${i18n.locale === "en" ? "MMM dd" : "dd MMM"}, ${tf}`,
      timezone,
    )} ${shortTZ}`
  }

  const onSightingsPress = () => {
    if (current) {
      if (currentModal?.name !== "sightings" || currentModal?.state !== "open") {
        if (sightingsModalTimerRef.current) clearTimeout(sightingsModalTimerRef.current)
        sightingsModalTimerRef.current = setTimeout(() => {
          Sentry.captureMessage("Sightings modal is not open after 5 seconds")
        }, 5000)
      }
      requestOpenModal("sightings")
    }
  }

  useEffect(() => {
    if (currentModal?.name === "sightings" && currentModal?.state === "open") {
      clearTimeout(sightingsModalTimerRef.current)
      sightingsModalTimerRef.current = null
    }
  }, [currentModal?.name])

  const onSightingsClose = useCallback(() => {
    if (sightingsModalTimerRef.current) clearTimeout(sightingsModalTimerRef.current)
    requestCloseModal("sightings")
  }, [])

  const filteredSightings = useMemo(() => (current ? getFilteredSightings(current) : []), [current])

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={$container}
      style={[$topInset, { backgroundColor: colors.palette.neutral900 }]}
      statusBarStyle="light"
      KeyboardAvoidingViewProps={{ behavior: undefined }} // kbd avoiding view messes with 3d globe, and we don't really need it here
    >
      <HomeHeader
        location={current}
        onLocationPress={() => requestOpenModal("location")}
        onSightingsPress={onSightingsPress}
        sighting={currentSighting.date ? formatedDate(currentSighting.date) : "-"}
        countdown={`${translate("units.time")} ${countdown}`}
        timezone={current?.timezone || getCurrentTimeZone()}
      />
      {globeVisible && (
        <Globe zoom={1.5} marker={location} issPath={issData} defaultCameraPosition={location} />
      )}
      <FlatMap style={$flatMap} issPath={issData} currentLocation={location} />
      <ModalContainer
        name="location"
        onBackdropPress={() => requestCloseModal("location")}
        onSwipeComplete={() => requestCloseModal("location")}
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
          onChangeLocation={handleChangeLocation}
          onClose={() => requestCloseModal("location")}
        />
      </ModalContainer>
      <ModalContainer
        name="sightings"
        onBackdropPress={() => requestCloseModal("sightings")}
        onSwipeComplete={() => requestCloseModal("sightings")}
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
        <Sightings
          onClose={onSightingsClose}
          location={current}
          timeFormat={timeFormat}
          sightings={filteredSightings}
          timeOfDay={current?.filterTimeOfDay || ""}
          duration={current?.filterDuration || ""}
          maxHeight={current?.filterMaxHeight || ""}
          cloudCover={current?.filterCloudCover || ""}
          onCloudCoverChange={handleChangeCloudCover}
          onTimeOfDayChange={handleChangeTimeOfDay}
          onDurationChange={handleChangeDuration}
          onMaxHeightChange={handleChangeMaxHeight}
          onToggle={handleSetSightingNotification}
          onToggleAll={handleSetSightingNotificationToAll}
          isUS={i18n.locale === "en"}
          isNotifyAll={current && current?.sightings.every((item) => item.notify)}
          timezone={current?.timezone || getCurrentTimeZone()}
          lastSightingOrbitPointAt={current?.lastSightingOrbitPointAt}
          hasPastSightings
        />
      </ModalContainer>
      <ModalContainer
        name="loader"
        useNativeDriver={false}
        useNativeDriverForBackdrop
        backdropOpacity={0.85}
        style={[$modal, $popupModal, Platform.OS === "ios" && $topInsetMargin]}
      >
        <InitLoaderModal />
      </ModalContainer>
      <ModalContainer
        name="trajectoryError"
        useNativeDriver={false}
        useNativeDriverForBackdrop
        backdropOpacity={0.85}
        style={[$modal, $popupModal, Platform.OS === "ios" && $topInsetMargin]}
      >
        <TrajectoryErrorModal
          kind={trajectoryErrorKind}
          onDismiss={() => {
            setTrajectoryError(false)
          }}
        />
      </ModalContainer>
      <ModalContainer
        name="coach"
        useNativeDriver={false}
        useNativeDriverForBackdrop
        backdropOpacity={0.4}
        style={[$modal, $popupModal, Platform.OS === "ios" && $topInsetMargin]}
      >
        <HomeTutorialModal onComplete={handleSetCoachCompleted} />
      </ModalContainer>
    </Screen>
  )
})

const styles: StyleFn = () => {
  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    justifyContent: "space-between",
  }

  const $modal: ViewStyle = {
    flex: 1,
    justifyContent: "flex-end",
    left: 0,
    margin: 0,
  }

  const $popupModal: ViewStyle = { paddingHorizontal: 18, justifyContent: "flex-start" }

  const $flatMap: ViewStyle = {
    width: "100%",
  }

  return { $container, $modal, $popupModal, $flatMap }
}
