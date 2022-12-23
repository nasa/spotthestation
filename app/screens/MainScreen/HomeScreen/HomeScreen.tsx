import { observer } from "mobx-react-lite"
import React from "react"
import { ViewStyle } from "react-native"
import { Screen } from "../../../components"
import { colors } from "../../../theme"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { Globe } from "../components/Globe"

export const HomeScreen = observer(function HomeScreen() {
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")

  return (
    <Screen preset="fixed" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      <Globe />
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  justifyContent: "space-between"
}