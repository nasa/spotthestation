import { useNavigation, useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useRef, useState } from "react"
import { ViewStyle } from "react-native"
import { WebView } from "react-native-webview"
import { StyleFn, useStyles } from "../../../utils/useStyles"
import { Template } from "./Template"

export interface WebScreenRouteProps {
  url: any
}

export const WebScreen = observer(function WebScreen() {
  const navigation = useNavigation()
  const {
    params: { url, webViewBackButton },
  } = useRoute<any>()

  const { $container, $webViewContainer } = useStyles(styles)

  const [currentUrl, setCurrentUrl] = useState("")

  const webViewRef = useRef<WebView>()

  const back = () => {
    if (currentUrl === url || !webViewBackButton) navigation.goBack()
    else webViewRef.current.goBack()
  }

  return (
    <Template
      hasHeader={false}
      onBack={back}
      backButtonTx={
        currentUrl === url || !webViewBackButton ? "resources.header" : "resources.goBack"
      }
      style={$container}
    >
      <WebView
        ref={webViewRef}
        source={{ uri: url }}
        containerStyle={$webViewContainer}
        onNavigationStateChange={(s) => setCurrentUrl(s.url)}
      />
    </Template>
  )
})

const styles: StyleFn = () => {
  const $container: ViewStyle = {
    paddingHorizontal: 0,
  }

  const $webViewContainer: ViewStyle = {
    flex: 1,
  }

  return { $container, $webViewContainer }
}
