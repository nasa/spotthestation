import { intervalToDuration, formatDuration } from "date-fns"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { BackHandler, Platform, ViewStyle } from "react-native"
import { Screen } from "../../../components"
import { LocationType, OrbitPoint } from "../../../services/api"
import { colors } from "../../../theme"
import { formatDateWithTZ, getCurrentTimeZone, getShortTZ } from "../../../utils/formatDate"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import * as storage from "../../../utils/storage"
import { FlatMap } from "../components/FlatMap"
import { Globe } from "../components/Globe"
import { HomeHeader } from "./HomeHeader"
import { SelectLocation } from "./SelectLocation"
import { Sightings } from "./Sightings"
import { formatTimer } from "../components/helpers"
import { useStores } from "../../../models"
import { useNavigation } from "@react-navigation/native"
import { InitLoader } from "./InitLoader"
import { TrajectoryError } from "./TrajectoryError"
import MyModal from "./MyModal"
import { StyleFn, useStyles } from "../../../utils/useStyles"
import { translate } from "../../../i18n"
import i18n from "i18n-js"
import { navigationRef } from "../../../navigators/navigationUtilities"
import { getCalendars } from "expo-localization"
import { useCurrentSighting } from "../../../utils/useCurrentSighting"
import { Tutorial } from "./Tutorial"

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

function calcAddress(selectedLocation: LocationType, currentLocation: LocationType) {
  if (selectedLocation) return selectedLocation.subtitle
  if (currentLocation) return currentLocation.subtitle
  return null
}

export const HomeScreen = observer(function HomeScreen() {
  const { $container, $modal, $popupModal, $flatMap } = useStyles(styles)
  const navigation = useNavigation()
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")
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
  } = useStores()
  const intervalRef = useRef<NodeJS.Timeout>(null)
  const [globeVisible, setGlobeVisible] = useState(false)

  const [isCurrentSightingLoaded, setIsCurrentSightingLoaded] = useState<boolean>(false)
  const [countdown, setCountdown] = useState("- 00:00:00:00")
  const [address, setAddress] = useState("")
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
    setAddress(calcAddress(selectedLocation, currentLocation))
  }, [selectedLocation?.subtitle, currentLocation?.subtitle])

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

    const lastOrbitPoint = (issData as OrbitPoint[]).find((point: OrbitPoint, idx: number) => {
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

  const timeDiff = useCallback(
    (callback: (diff: string) => void) => {
      if (!currentSighting.date) {
        setCountdown("- 00:00:00:00")
        setIsCurrentSightingLoaded(true)
        return
      }

      setTimeout(() => setIsCurrentSightingLoaded(true), 1000)
      const duration = intervalToDuration({
        start: new Date(currentSighting.date),
        end: new Date(),
      })
      const diff = formatDuration(duration, { delimiter: "," })
      callback(
        formatTimer(
          diff,
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

  const getCoach = async () => {
    const coachCompleted = await storage.load("coachCompleted")
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
    await storage.save("coachCompleted", true)
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

  const formatedDate = (date: string): string => {
    const timeFormat = getCalendars()[0].uses24hourClock ? "H:mm" : "h:mm aa"
    const timezone = current?.timezone || getCurrentTimeZone()
    const shortTZ = getShortTZ(current?.timezone || getCurrentTimeZone())
    return `${formatDateWithTZ(
      date,
      `${i18n.locale === "en" ? "MMM dd" : "dd MMM"}, ${timeFormat}`,
      timezone,
    )} ${shortTZ}`
  }

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={$container}
      style={[$topInset, { backgroundColor: colors.palette.neutral900 }]}
      statusBarStyle="light"
    >
      <HomeHeader
        user={{ firstName: "User", address }}
        onLocationPress={() => requestOpenModal("location")}
        onSightingsPress={() => current && requestOpenModal("sightings")}
        sighting={currentSighting.date ? formatedDate(currentSighting.date) : "-"}
        countdown={`${translate("units.time")} ${countdown}`}
        timezone={current?.timezone || getCurrentTimeZone()}
      />
      {globeVisible && (
        <Globe zoom={1.5} marker={location} issPath={issData} defaultCameraPosition={location} />
      )}
      <FlatMap style={$flatMap} issPath={issData} currentLocation={location} />
      <MyModal
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
      </MyModal>
      <MyModal
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
          onClose={() => requestCloseModal("sightings")}
          location={current}
          sightings={current ? getFilteredSightings(current) : []}
          timeOfDay={current?.filterTimeOfDay || ""}
          duration={current?.filterDuration || ""}
          maxHeight={current?.filterMaxHeight || ""}
          onTimeOfDayChange={handleChangeTimeOfDay}
          onDurationChange={handleChangeDuration}
          onMaxHeightChange={handleChangeMaxHeight}
          onToggle={handleSetSightingNotification}
          onToggleAll={handleSetSightingNotificationToAll}
          isUS={i18n.locale === "en"}
          isNotifyAll={current && current?.sightings.every((item) => item.notify)}
          timezone={current?.timezone || getCurrentTimeZone()}
          lastSightingOrbitPointAt={current?.lastSightingOrbitPointAt}
        />
      </MyModal>
      <MyModal
        name="loader"
        useNativeDriver={false}
        useNativeDriverForBackdrop
        backdropOpacity={0.85}
        style={[$modal, $popupModal, Platform.OS === "ios" && $topInsetMargin]}
      >
        <InitLoader />
      </MyModal>
      <MyModal
        name="trajectoryError"
        useNativeDriver={false}
        useNativeDriverForBackdrop
        backdropOpacity={0.85}
        style={[$modal, $popupModal, Platform.OS === "ios" && $topInsetMargin]}
      >
        <TrajectoryError
          kind={trajectoryErrorKind}
          onDismiss={() => {
            setTrajectoryError(false)
          }}
        />
      </MyModal>
      <MyModal
        name="coach"
        useNativeDriver={false}
        useNativeDriverForBackdrop
        backdropOpacity={0.4}
        style={[$modal, $popupModal, Platform.OS === "ios" && $topInsetMargin]}
      >
        <Tutorial onComplete={handleSetCoachCompleted} />
      </MyModal>
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
