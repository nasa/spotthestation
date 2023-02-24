import { intervalToDuration, formatDuration } from "date-fns"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useState } from "react"
import { ViewStyle } from "react-native"
import Modal from "react-native-modal"
import { Screen } from "../../../components"
import { api, ISSSighting } from "../../../services/api"
import { colors } from "../../../theme"
import { formatDate } from "../../../utils/formatDate"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { FlatMap } from "../components/FlatMap"
import { Globe } from "../components/Globe"
import { HomeHeader } from "./HomeHeader"
import { SelectLocation } from "./SelectLocation"
import { Sightings } from "./Signitings"

export const HomeScreen = observer(function HomeScreen() {
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")
  const [isLocation, setIsLocation] = useState(false)
  const [isSightings, setIsSightings] = useState(false)
  const [sightings, setSightings] = useState<ISSSighting[]>([])
  const [currentSightning, setCurrentSightning] = useState<ISSSighting>({ date: '2023-03-08T11:47:42.000000', visible: 0, maxHeight: 0, appears: '', disappears: '' })
  const [countdown, setCountdown] = useState("00:00:00")

  const formatTimer = (diff: string): string => {
    const result = diff.split(",").map(item => {
      const value = item.split(" ")[0]
      return value.length === 1 ? `0${value}` : value
    }).join(":")

    if (result.length === 0) return `00:00:00`
    if (result.length === 2) return `00:00:${result}`
    if (result.length === 5) return `00:${result}`

    return result
  }
  
  const timeDiff = useCallback((callback: (diff: string) => void) => {
    const result = sightings.filter((sighting) => new Date(sighting.date) > new Date(new Date().getTime() - 1800000))
   
    if (result.length === 0) return
    if (result.length > 0) setCurrentSightning(result[0])

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

  useEffect(() => {
    api.getISSSightings({ zone: 'US/Central', lat: 32.766996932, lon: -98.29249883 })
    .then((res) => setSightings(res as ISSSighting[]))
    .catch(e => console.log(e))
  }, [])

  return (
    <Screen preset="scroll" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      <HomeHeader 
        user={{ firstName: "John", address: "7th Avenue, Phoenix, AZ" }} 
        onLocationPress={() => setIsLocation(true)}
        onSightingsPress={() => setIsSightings(true)}
        sighting={formatDate(currentSightning.date)}
        countdown={countdown}
      />
      <Globe zoom={550} marker={[0,0]} />
      <FlatMap style={$flatMap} />
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
        <SelectLocation onClose={() => setIsLocation(!isLocation)} />
      </Modal>
      <Modal
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
        <Sightings onClose={() => setIsSightings(!isSightings)} sightings={sightings} />
      </Modal>
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
