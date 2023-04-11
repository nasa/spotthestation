/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-native/no-inline-styles */
import { intervalToDuration, formatDuration } from "date-fns"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { Platform, ViewStyle } from "react-native"
import Modal from "react-native-modal"
import { Screen } from "../../../components"
import { ISSSighting } from "../../../services/api"
import { colors } from "../../../theme"
import { formatDate, getCurrentTimeZome } from "../../../utils/formatDate"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import * as storage from "../../../utils/storage"
import { FlatMap } from "../components/FlatMap"
import { Globe } from "../components/Globe"
import { HomeHeader } from "./HomeHeader"
import { SelectLocation } from "./SelectLocation"
import { Sightings } from "./Sightings"
import { CoachMark } from "./CoachMark"
import { normalizeHeight } from "../../../utils/normalizeHeight"
import { LocationType } from "../../OnboardingScreen/SignupLocation"
import { formatTimer } from "../components/helpers"
import { useStores } from "../../../models"
import { autorun } from "mobx"

export const HomeScreen = observer(function HomeScreen() {
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")
  const $topInsetMargin = useSafeAreaInsetsStyle(["top"], "margin")
  const { sightings, issData, getISSSightings, getISSData, setISSSightings } = useStores()

  const [isLocation, setIsLocation] = useState(false)
  const [isSightings, setIsSightings] = useState(false)
  const [currentSightning, setCurrentSightning] = useState<ISSSighting>({ date: null, visible: 0, maxHeight: 0, appears: '', disappears: '', dayStage: 0 })
  const [countdown, setCountdown] = useState("T - 00:00:00:00")
  const [address, setAddress] = useState("")
  const [location, setLocation] = useState<[number, number]>(null)
  const [coachVisible, setCoachVisible] = useState(false)
  const [stage, setStage] = useState(1)
  const [currentLocation, setCurrentLocation] = useState<LocationType>(null)
  const [currentTimeZone, setCurrentTimeZone] = useState({ timeZone: 'US/Central', regionFormat: 'US' })

  const timeDiff = useCallback((callback: (diff: string) => void) => {
    const events: ISSSighting[] = sightings.filter(item => item.notify)
    const eventsList = events?.length ? events : sightings
    const result: ISSSighting[] = eventsList.filter((sighting) => new Date(sighting.date) > new Date(new Date().getTime() - 1800000))
    
    if (result.length === 0) return
    if (result.length > 0) setCurrentSightning(result[0])

    const duration = intervalToDuration({ start: new Date(result[0].date), end: new Date() })
    const diff = formatDuration(duration, { delimiter: ',' })

    callback(formatTimer(diff, new Date(result[0].date).getTime() >= new Date().getTime() ? 'T - ' : 'T + '))
  }, [sightings])

  const startCountdown = useCallback(() => {
    timeDiff(setCountdown)
    setInterval(() => timeDiff(setCountdown), 1000)
  }, [countdown, sightings])

  useEffect(() => {
    startCountdown()
  }, [sightings])

  const [issPathCoords, setIssPathCoords] = useState([])
  const [pastIssPathCoords, setPastIssPathCoords] = useState([])
  const [futureIssPathCoords, setFutureIssPathCoords] = useState([])
  const [issMarkerPosition, setIssMarkerPosition] = useState(null)
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

    let startPositionIdx = currentPositionIdx
    for (; startPositionIdx > 0; startPositionIdx -= 1) {
      if (issData[startPositionIdx].longitude < issData[startPositionIdx - 1].longitude) {
        break
      }
    }

    let endPositionIdx = currentPositionIdx
    for (; endPositionIdx < issData.length - 1; endPositionIdx += 1) {
      if (issData[endPositionIdx].longitude > issData[endPositionIdx + 1].longitude) {
        break
      }
    }

    setIssPathCoords(issData.slice(startPositionIdx, endPositionIdx + 1).map((p) => [p.latitude, p.longitude]))
    setPastIssPathCoords(issData
      .filter((point) => {
        const diff = new Date().valueOf() - new Date(point.date).valueOf()
        return diff >= 0 && diff < 60 * 60 * 1000
      })
      .map((p) => [p.latitude, p.longitude])
    )

    setFutureIssPathCoords(issData
      .filter((point) => {
        const diff = new Date().valueOf() - new Date(point.date).valueOf()
        return diff < 0 && diff > -60 * 60 * 1000
      })
      .map((p) => [p.latitude, p.longitude])
    )

    setIssMarkerPosition([issData[currentPositionIdx].latitude, issData[currentPositionIdx].longitude])

    clearTimeout(updateTimer.current)
    updateTimer.current = setTimeout(updateIssPath, 30000)
  }

  useEffect(() => {
    autorun(() => updateIssPath())
  }, [])

  const getCoach = async () => {
    setCoachVisible(!(await storage.load('coachCompleted')))
  }

  useEffect(() => {
    getCoach().catch((e) => console.log(e))
  }, [])

  const getLocation = async () => {
    let lat: number
    let lng: number
    let subtitle: string
    const selected: LocationType = await storage.load('selectedLocation')
    if (selected) {
      lat = selected.location.lat
      lng = selected.location.lng
      subtitle = selected.subtitle
      setCurrentLocation(selected)
    } else {
      const current: LocationType = await storage.load('currentLocation')
      lat = current.location.lat
      lng = current.location.lng
      subtitle = current.subtitle
      setCurrentLocation(current)
    }
    setAddress(subtitle)
    if (lat && lng) setLocation([lat, lng])
  }

  const getSightings = async (value: [number,number]) => {
    const { timeZone, regionFormat } = await getCurrentTimeZome()
    setCurrentTimeZone({ timeZone, regionFormat })
    await getISSSightings({ zone: timeZone, lat: value[0], lon: value[1] })
  }

  const getData = async () => {
    await getISSData({ lat: location[0], lon: location[1] })
  }

  useEffect(() => {
    getLocation().catch((e) => console.log(e))
  }, [])

  useEffect(() => {
    if (!location) return

    getSightings(location).catch(e => console.log(e))
    getData().catch(e => console.log(e))
  }, [location])

  const handleSetCoachCompleted = async () => {
    setCoachVisible(false)
    await storage.save('coachCompleted', true)
  }

  const handleChangeLocation = async (location: LocationType) => {
    setAddress(location.subtitle)
    setCurrentLocation(location)
    setIsLocation(false)
    await storage.save('selectedLocation', location)
    await getLocation()
  }

  const handleSetSightingNotification = (value: ISSSighting) => {
    setISSSightings(sightings.map(item => {
      if (item.date === value.date) {
        return {...item, notify: !item.notify}
      }
      return item
    }))
  }

  const renderCoachMarks = useCallback(() => {
    switch (stage) {
      case 1: return <CoachMark
        icon="mapPinOutlined"
        title="homeScreen.coachMarks.locationTitle"
        bodyText="homeScreen.coachMarks.locationData"
        style={{ marginTop: normalizeHeight(.18) }}
        stage={stage} 
        onPressFinish={handleSetCoachCompleted} 
        onPressNext={() => setStage(stage + 1)} 
      />
      case 2: return <CoachMark
        icon="clock"
        title="homeScreen.coachMarks.sightingsTitle"
        bodyText="homeScreen.coachMarks.sightingsData"
        style={{ marginTop: normalizeHeight(.28) }}
        stage={stage} 
        onPressFinish={handleSetCoachCompleted} 
        onPressNext={() => setStage(stage + 1)} 
      />
      case 3: return <CoachMark
        icon="globe"
        title="homeScreen.coachMarks.globeTitle"
        bodyText="homeScreen.coachMarks.globeData"
        style={{ marginTop: normalizeHeight(.5) }}
        stage={stage} 
        onPressFinish={handleSetCoachCompleted} 
        onPressNext={() => setStage(stage + 1)} 
      />
      case 4: return <CoachMark
        icon="map"
        title="homeScreen.coachMarks.mapTitle"
        bodyText="homeScreen.coachMarks.mapData"
        style={{ marginTop: Platform.OS === 'ios' ? normalizeHeight(.05) : normalizeHeight(.18) }}
        stage={stage} 
        onPressFinish={handleSetCoachCompleted} 
        onPressNext={() => setStage(stage + 1)} 
      />
      case 5: return <CoachMark
        icon="list"
        title="homeScreen.coachMarks.navigationTitle"
        bodyText="homeScreen.coachMarks.navigationData"
        style={{ marginTop: Platform.OS === 'ios' ? normalizeHeight(.33) : normalizeHeight(.45) }}
        stage={stage} 
        onPressFinish={handleSetCoachCompleted} 
        onPressNext={() => setStage(stage + 1)} 
      />
      default: return ''
    }
  }, [stage])

  return (
    <Screen preset="fixed" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      <HomeHeader 
        user={{ firstName: "User", address }}
        onLocationPress={() => setIsLocation(true)}
        onSightingsPress={() => setIsSightings(true)}
        sighting={currentSightning.date ? formatDate(currentSightning.date, currentTimeZone.regionFormat === 'US' ? "MMM dd, yyyy" : "dd MMM yyyy") : '-'}
        countdown={countdown}
        timezone={currentTimeZone?.timeZone}
      />
      {pastIssPathCoords.length > 0 && futureIssPathCoords.length > 0 && (
        <Globe
          zoom={1.5}
          marker={location}
          pastIssPathCoords={pastIssPathCoords}
          futureIssPathCoords={futureIssPathCoords}
          issMarkerPosition={issMarkerPosition} />
      )}
      <FlatMap style={$flatMap} issPathCoords={issPathCoords} issMarkerPosition={issMarkerPosition} currentLocation={location} />
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
          selectedLocation={currentLocation}
          onLocationPress={handleChangeLocation}
          onClose={() => setIsLocation(!isLocation)}
        />
      </Modal>
      {isSightings && <Modal
        isVisible={isSightings}
        onBackdropPress={() => setIsSightings(!isSightings)}
        onSwipeComplete={() => setIsSightings(!isSightings)}
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
          onClose={() => setIsSightings(!isSightings)} 
          sightings={[...sightings]} 
          onToggle={handleSetSightingNotification}
          isUS={currentTimeZone.regionFormat === 'US'}
        />
      </Modal>}
      {coachVisible && <Modal
        isVisible={coachVisible}
        useNativeDriver
        useNativeDriverForBackdrop
        backdropOpacity={.4}
        style={[$modal, { paddingHorizontal: 18, justifyContent: 'flex-start' }, Platform.OS === 'ios' && $topInsetMargin]}
      >
        {renderCoachMarks()}
      </Modal>}
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  justifyContent: "space-between"
}

const $modal: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-end',
  left: 0,
  margin: 0
}

const $flatMap: ViewStyle = {
  width: "100%",
  height: 200
}
