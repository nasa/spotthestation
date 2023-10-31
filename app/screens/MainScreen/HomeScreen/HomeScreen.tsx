import { intervalToDuration, formatDuration } from "date-fns"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { BackHandler, Platform, ViewStyle } from "react-native"
import { Screen } from "../../../components"
import { LocationType, OrbitPoint } from "../../../services/api"
import { colors } from "../../../theme"
import { formatDateWithTZ, getCurrentTimeZome } from "../../../utils/formatDate"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import * as storage from "../../../utils/storage"
import { FlatMap } from "../components/FlatMap"
import { Globe } from "../components/Globe"
import { HomeHeader } from "./HomeHeader"
import { SelectLocation } from "./SelectLocation"
import { Sightings } from "./Sightings"
import { CoachMark } from "./CoachMark"
import { normalizeHeight } from "../../../utils/normalizeHeight"
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
  const { $container, $modal, $popupModal, $flatMap, $mark5 } = useStyles(styles)
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
    setTrajectoryError,
    requestCloseModal,
    requestOpenModal,
    setSightingsTimeOfDay,
    setSightingsDuration,
    getFilteredSightings,
  } = useStores()
  const intervalRef = useRef<NodeJS.Timeout>(null)
  const [globeVisible, setGlobeVisible] = useState(false)

  const [isCurrentSightingLoaded, setIsCurrentSightingLoaded] = useState<boolean>(false)
  const [countdown, setCountdown] = useState("- 00:00:00:00")
  const [address, setAddress] = useState("")
  const [stage, setStage] = useState(1)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [currentTimeZone, setCurrentTimeZone] = useState({
    timeZone: "US/Central",
    regionFormat: "US",
  })

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
      return true
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)

    return () => backHandler.remove()
  }, [])

  const events = useMemo(
    () => current?.sightings?.filter((item) => item.notify) || [],
    [current?.sightings],
  )
  const eventsList = useMemo(
    () => (events?.length ? events : current?.sightings || []),
    [current?.sightings, events],
  )

  const [currentSightingIdx, setCurrentSightingIdx] = useState(-1)

  const updateCurrentSighting = useCallback(() => {
    const idx = eventsList.findIndex(
      (sighting) =>
        new Date(sighting.date) >
        new Date(new Date().getTime() - Math.max(sighting.visible, 10) * 60 * 1000),
    )

    setCurrentSightingIdx(idx)
  }, [eventsList])

  useEffect(() => {
    updateCurrentSighting()
  }, [eventsList])

  const currentSighting = useMemo(
    () =>
      eventsList.length > currentSightingIdx && eventsList[currentSightingIdx]
        ? eventsList[currentSightingIdx]
        : {
            date: null,
            visible: 0,
            maxHeight: 0,
            minAzimuth: 0,
            maxAzimuth: 0,
            minAltitude: 0,
            maxAltitude: 0,
            notify: false,
            dayStage: 0,
          },
    [currentSightingIdx, eventsList],
  )

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

      if (
        new Date().getTime() - new Date(currentSighting.date).getTime() >
        Math.max(currentSighting.visible, 10) * 60 * 1000
      ) {
        updateCurrentSighting()
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

    getCurrentTimeZome()
      .then(({ timeZone, regionFormat }) => setCurrentTimeZone({ timeZone, regionFormat }))
      .catch((e) => console.log(e))

    getData().catch((e) => console.log(e))
  }, [location?.[0], location?.[1]])

  const handleSetCoachCompleted = async () => {
    requestCloseModal("coach")
    await storage.save("coachCompleted", true)
  }

  const handleChangeLocation = useCallback(
    async (location: LocationType) => {
      requestCloseModal("location")
      if (
        current &&
        current.location.lat === location.location.lat &&
        current.location.lng === location.location.lng
      )
        return

      setInitLoading(true)
      setIsCurrentSightingLoaded(false)
      setIssDataLoaded(false)
      setSightingsLoaded(false)
      setSelectedLocation(location).catch((e) => console.log(e))
      await storage.save("selectedLocation", location)
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

  const renderCoachMarks = useCallback(() => {
    switch (stage) {
      case 1:
        return (
          <CoachMark
            icon="mapPinOutlined"
            title="homeScreen.coachMarks.locationTitle"
            bodyText="homeScreen.coachMarks.locationData"
            style={{ marginTop: normalizeHeight(0.18) }}
            stage={stage}
            onPressFinish={handleSetCoachCompleted}
            onPressNext={() => setStage(stage + 1)}
          />
        )
      case 2:
        return (
          <CoachMark
            icon="clock"
            title="homeScreen.coachMarks.sightingsTitle"
            bodyText="homeScreen.coachMarks.sightingsData"
            style={{ marginTop: normalizeHeight(0.28) }}
            stage={stage}
            onPressFinish={handleSetCoachCompleted}
            onPressNext={() => setStage(stage + 1)}
          />
        )
      case 3:
        return (
          <CoachMark
            icon="globe"
            title="homeScreen.coachMarks.globeTitle"
            bodyText="homeScreen.coachMarks.globeData"
            style={{ marginTop: normalizeHeight(0.4) }}
            stage={stage}
            onPressFinish={handleSetCoachCompleted}
            onPressNext={() => setStage(stage + 1)}
          />
        )
      case 4:
        return (
          <CoachMark
            icon="map"
            title="homeScreen.coachMarks.mapTitle"
            bodyText="homeScreen.coachMarks.mapData"
            style={{
              marginTop: Platform.OS === "ios" ? normalizeHeight(0.15) : normalizeHeight(0.28),
            }}
            stage={stage}
            onPressFinish={handleSetCoachCompleted}
            onPressNext={() => setStage(stage + 1)}
          />
        )
      case 5:
        return (
          <CoachMark
            icon="list"
            title="homeScreen.coachMarks.navigationTitle"
            bodyText="homeScreen.coachMarks.navigationData"
            style={$mark5}
            stage={stage}
            onPressFinish={handleSetCoachCompleted}
            onPressNext={() => setStage(stage + 1)}
          />
        )
      default:
        return ""
    }
  }, [stage])

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
        sighting={
          currentSighting.date
            ? formatDateWithTZ(
                currentSighting.date,
                i18n.locale === "en" ? "MMM dd, yyyy" : "dd MMM yyyy",
                currentTimeZone.timeZone,
              )
            : "-"
        }
        countdown={`${translate("units.time")} ${countdown}`}
        timezone={currentTimeZone?.timeZone}
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
          onLocationPress={handleChangeLocation}
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
          sightings={current ? getFilteredSightings(current) : []}
          timeOfDay={current?.filterTimeOfDay || ""}
          duration={current?.filterDuration || ""}
          onTimeOfDayChange={handleChangeTimeOfDay}
          onDurationChange={handleChangeDuration}
          onToggle={handleSetSightingNotification}
          onToggleAll={handleSetSightingNotificationToAll}
          isUS={i18n.locale === "en"}
          isNotifyAll={current && current?.sightings.every((item) => item.notify)}
          timezone={currentTimeZone?.timeZone}
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
        {renderCoachMarks()}
      </MyModal>
    </Screen>
  )
})

const styles: StyleFn = ({ scale }) => {
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

  const $mark5: ViewStyle = {
    position: "absolute",
    alignSelf: "center",
    bottom: scale(160),
  }

  return { $container, $modal, $popupModal, $flatMap, $mark5 }
}
