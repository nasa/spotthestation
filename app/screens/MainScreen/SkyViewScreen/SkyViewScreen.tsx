import { useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useEffect, useState } from "react"
import { ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Screen } from "../../../components"
import { colors } from "../../../theme"
import { ARView } from "../components/ARView"

export interface SkyViewScreenRouteProps {
  toggleBottomTabs: (value: boolean) => void
}

export const SkyViewScreen = observer(function ISSNowScreen() {
  const route: SkyViewScreenRouteProps  = useRoute().params as SkyViewScreenRouteProps
  const topInset = useSafeAreaInsets().top
  const [isFullScreen, setIsFullScreen] = useState(false)

  const $containerStyleOverride: ViewStyle = {
    paddingHorizontal: isFullScreen ? 0 : 18
  }

  const $headerStyleOverride: ViewStyle = {
    top: topInset + 24, 
    paddingHorizontal: isFullScreen ? 18 : 0, 
    left: isFullScreen ? 0 : 18
  }

  const $bodyStyleOverride: ViewStyle = {
    marginTop: isFullScreen ? 0 : topInset + 80
  }

  useEffect(() => route.toggleBottomTabs(!isFullScreen), [isFullScreen])

  return (
    <Screen 
      preset="fixed" 
      contentContainerStyle={[$container, $containerStyleOverride]} 
      style={{backgroundColor: colors.palette.neutral900}} 
      statusBarStyle="light"
    >
      <ARView />
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  justifyContent: "space-between"
}

const $header: ViewStyle = {
  position: "absolute",
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  zIndex: 10
}

const $body: ViewStyle = {
  flex: 1,
  position: "relative",
  backgroundColor: colors.backgroundDark,
  borderRadius: 12,
  overflow: "hidden"
}
