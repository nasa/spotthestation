/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-native/no-inline-styles */
import { intervalToDuration, formatDuration } from "date-fns"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Platform, ViewStyle } from "react-native"
import Modal from "react-native-modal"
import { Screen } from "../../../components"
import { ISSSighting } from "../../../services/api"
import { colors, scale } from "../../../theme"
import { formatDate, getCurrentTimeZome, getShortTZ } from "../../../utils/formatDate"
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
import { useNavigation } from "@react-navigation/native"
import { autorun } from "mobx"

export interface HomeScreenRouteProps {
  showSightings: boolean
}

export const HomeScreen = observer(function HomeScreen() {
  const navigation = useNavigation()
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")
  const $topInsetMargin = useSafeAreaInsetsStyle(["top"], "margin")
  const { 
    issData, getISSSightings, getISSData, setISSSightings,
    currentLocation, selectedLocation, setSelectedLocation
  } = useStores()
  const intervalRef = useRef<NodeJS.Timeout>(null)
  
  const [isLocation, setIsLocation] = useState(false)
  const [isSightings, setIsSightings] = useState(false)
  const [currentSightning, setCurrentSightning] = useState<ISSSighting>({ date: null, visible: 0, maxHeight: 0, appears: '', disappears: '', dayStage: 0 })
  const [countdown, setCountdown] = useState("T - 00:00:00:00")
  const [address, setAddress] = useState("")
  const [location, setLocation] = useState<[number, number]>(null)
  const [coachVisible, setCoachVisible] = useState(false)
  const [stage, setStage] = useState(1)
  const [current, setCurrent] = useState<LocationType>(null)
  const [currentTimeZone, setCurrentTimeZone] = useState({ timeZone: 'US/Central', regionFormat: 'US' })
  
  const events = useMemo(() => current?.sightings?.filter(item => item.notify) || [], [current?.sightings])
  const eventsList = useMemo(() => events?.length ? events : (current?.sightings || []), [current?.sightings, events])

  const result = useMemo(() => eventsList.filter((sighting) => new Date(sighting.date) > new Date(new Date().getTime() - 1800000)), [eventsList])
  
  const timeDiff = useCallback((callback: (diff: string) => void) => {
    if (result.length === 0) {
      setCurrentSightning({ date: null, visible: 0, maxHeight: 0, appears: '', disappears: '', dayStage: 0 })
      setCountdown("T - 00:00:00:00")
      return
    }
    setCurrentSightning(result[0])
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
    // Clear the initialParams prop when the screen is unmounted
    return () => {
      navigation.setParams({ showSightings: false } as never)
    }
  }, [navigation])

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

  const getLocation = useCallback(() => {
    let lat: number
    let lng: number
    let subtitle: string
    if (selectedLocation) {
      lat = selectedLocation.location.lat
      lng = selectedLocation.location.lng
      subtitle = selectedLocation.subtitle
      setCurrent(JSON.parse(JSON.stringify(selectedLocation)) as LocationType)
    } else {
      if (currentLocation) {
        lat = currentLocation.location.lat
        lng = currentLocation.location.lng
        subtitle = currentLocation.subtitle
        setCurrent(JSON.parse(JSON.stringify(currentLocation)) as LocationType)
      }
    }
    setAddress(subtitle)
    
    if (lat && lng) setLocation([lat, lng])
  }, [selectedLocation, currentLocation])

  const getSightings = async (value: [number,number]) => {
    const { timeZone, regionFormat } = await getCurrentTimeZome()
    setCurrentTimeZone({ timeZone, regionFormat })
    await getISSSightings({ zone: timeZone, lat: value[0], lon: value[1] })
  }

  const getData = async () => {
    await getISSData({ lat: location[0], lon: location[1] })
  }

  useEffect(() => {
    getLocation()
  }, [selectedLocation, currentLocation, getLocation])

  useEffect(() => {
    if (!location) return
    
    getSightings(location).catch(e => console.log(e))
    getData().catch(e => console.log(e))
  }, [location])

  const handleSetCoachCompleted = async () => {
    setCoachVisible(false)
    await storage.save('coachCompleted', true)
  }

  const handleChangeLocation = useCallback(async (location: LocationType) => {
    setAddress(location.subtitle)
    setCurrent(JSON.parse(JSON.stringify(location)) as LocationType)
    setIsLocation(false)
    setLocation([location.location.lat, location.location.lng])
    setSelectedLocation(location).then(() => getLocation()).catch((e) => console.log(e))
    await storage.save('selectedLocation', location)
  }, [getLocation])

  const handleSetSightingNotification = useCallback((value: ISSSighting) => {
    const updated = {...current, sightings: current.sightings.map(item => {
      if (item.date === value.date) {
        return {...item, notify: !item.notify}
      }
      return item
    })}
    setISSSightings(updated)
    setCurrent(updated)
  }, [current])

  const handleSetSightingNotificationToAll = useCallback((notify: boolean) => {
    const updated = {...current, sightings: current.sightings.map(item => ({...item, notify}))}
    setISSSightings(updated)
    setCurrent(updated)
  }, [current])

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
        style={{ marginTop: normalizeHeight(.4) }}
        stage={stage} 
        onPressFinish={handleSetCoachCompleted} 
        onPressNext={() => setStage(stage + 1)} 
      />
      case 4: return <CoachMark
        icon="map"
        title="homeScreen.coachMarks.mapTitle"
        bodyText="homeScreen.coachMarks.mapData"
        style={{ marginTop: Platform.OS === 'ios' ? normalizeHeight(.15) : normalizeHeight(.28) }}
        stage={stage} 
        onPressFinish={handleSetCoachCompleted} 
        onPressNext={() => setStage(stage + 1)} 
      />
      case 5: return <CoachMark
        icon="list"
        title="homeScreen.coachMarks.navigationTitle"
        bodyText="homeScreen.coachMarks.navigationData"
        style={{ marginTop: Platform.OS === 'ios' ? normalizeHeight(.38) : normalizeHeight(.52) }}
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
          selectedLocation={current}
          onLocationPress={handleChangeLocation}
          onClose={() => setIsLocation(!isLocation)}
        />
      </Modal>
      {isSightings && Boolean(current) && <Modal
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
          sightings={current ? current?.sightings : []}
          onToggle={handleSetSightingNotification}
          onToggleAll={handleSetSightingNotificationToAll}
          isUS={currentTimeZone?.regionFormat === 'US'}
          isNotifyAll={current && current?.sightings.every(item => item.notify)}
          timezone={getShortTZ(currentTimeZone?.timeZone)}
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
  height: scale(200)
}
