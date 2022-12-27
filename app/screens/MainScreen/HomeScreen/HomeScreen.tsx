import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { ViewStyle, View } from "react-native"
import Modal from "react-native-modal"
import { Screen } from "../../../components"
import { colors } from "../../../theme"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { Globe } from "../components/Globe"
import { HomeHeader } from "./HomeHeader"
import { VerifyEmail } from "./VerifyEmail"

export const HomeScreen = observer(function HomeScreen() {
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")
  const [isVerify, setIsVerify] = useState(true)

  return (
    <Screen preset="scroll" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      <HomeHeader user={{ firstName: "John", address: "7th Avenue, Phoenix, AZ" }} />
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
