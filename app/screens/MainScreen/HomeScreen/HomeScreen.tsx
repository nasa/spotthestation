import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { View, ViewStyle } from "react-native"
import Modal from "react-native-modal"
// import MapboxGL from "@rnmapbox/maps"
// import GeoJSONTerminator from "@webgeodatavore/geojson.terminator"
// import Config from "../../../config"
// import MapView, { Circle, LatLng, PROVIDER_GOOGLE, MapCircle } from "react-native-maps"
import { Screen } from "../../../components"
import { colors } from "../../../theme"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { FlatMap } from "../components/FlatMap"
import { Globe } from "../components/Globe"
import { HomeHeader } from "./HomeHeader"
import { VerifyEmail } from "./VerifyEmail"
import { SelectLocation } from "./SelectLocation"
import { Sightings } from "./Signitings"
import { Globe } from "../components/Globe"

export const HomeScreen = observer(function HomeScreen() {
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")
  const [isVerify, setIsVerify] = useState(false)
  const [isLocation, setIsLocation] = useState(false)
  const [isSightings, setIsSightings] = useState(false)

  return (
    <Screen preset="scroll" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      <HomeHeader 
        user={{ firstName: "John", address: "7th Avenue, Phoenix, AZ" }} 
        onLocationPress={() => setIsLocation(true)}
        onSightingsPress={() => setIsSightings(true)}
      />
      <Globe zoom={550} />
      <View style={$flatMap} />
      <Modal
        isVisible={isVerify}
        onBackdropPress={() => setIsVerify(!isVerify)}
        onSwipeComplete={() => setIsVerify(!isVerify)}
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
        <VerifyEmail onClose={() => setIsVerify(!isVerify)} />
      </Modal>
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
        <Sightings onClose={() => setIsSightings(!isSightings)} />
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
  height: 200
}
