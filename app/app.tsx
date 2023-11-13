/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import { addLocaleListener, removeLocaleListener, setLocale } from "./i18n"
import "./utils/ignoreWarnings"
import { useFonts } from "expo-font"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import codePush from "react-native-code-push"
import * as Linking from "expo-linking"
import * as Sentry from "@sentry/react-native"
import { RootStoreProvider, useInitialRootStore } from "./models"
import { AppNavigator, useNavigationPersistence } from "./navigators"
import { ErrorBoundary } from "./screens/ErrorScreen/ErrorBoundary"
import * as storage from "./utils/storage"
import { customFontsToLoad } from "./theme"
import { setupReactotron } from "./services/reactotron"
import Config from "./config"
import { enableLatestRenderer } from "react-native-maps"
import i18n from "i18n-js"
import { AppState, Platform, ViewStyle } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"

const codePushConfig = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESTART,
}

Sentry.init({
  dsn: Config.SENTRY_DSN,
  environment: Config.SENTRY_ENVIRONMENT,
})

enableLatestRenderer()

// Set up Reactotron, which is a free desktop app for inspecting and debugging
// React Native apps. Learn more here: https://github.com/infinitered/reactotron
setupReactotron({
  // clear the Reactotron window when the app loads/reloads
  clearOnLoad: true,
  // generally going to be localhost
  host: "localhost",
  // Reactotron can monitor AsyncStorage for you
  useAsyncStorage: true,
  // log the initial restored state from AsyncStorage
  logInitialState: true,
  // log out any snapshots as they happen (this is useful for debugging but slow)
  logSnapshots: false,
})

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

// Web linking configuration
const prefix = Linking.createURL("/")
const config = {
  screens: {
    Login: {
      path: "",
    },
    Welcome: "welcome",
    Demo: {
      screens: {
        DemoShowroom: {
          path: "showroom/:queryIndex?/:itemIndex?",
        },
        DemoDebug: "debug",
        DemoPodcastList: "podcast",
        DemoCommunity: "community",
      },
    },
  },
}

interface AppProps {
  hideSplashScreen: () => Promise<void>
}

/**
 * This is the root component of our app.
 */
function App(props: AppProps) {
  const { hideSplashScreen } = props
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(NAVIGATION_PERSISTENCE_KEY)

  const [areFontsLoaded] = useFonts(customFontsToLoad)
  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false)
  const [isTZUpdated, setIsTZUpdated] = useState(false)
  const prevAppState = useRef<string>()

  const { rootStore, rehydrated } = useInitialRootStore(() => {
    // This runs after the root store has been initialized and rehydrated.

    // If your initialization scripts run very fast, it's good to show the splash screen for just a bit longer to prevent flicker.
    // Slightly delaying splash screen hiding for better UX; can be customized or removed as needed,
    // Note: (vanilla Android) The splash-screen will not appear if you launch your app via the terminal or Android Studio. Kill the app and launch it normally by tapping on the launcher icon. https://stackoverflow.com/a/69831106
    // Note: (vanilla iOS) You might notice the splash-screen logo change size. This happens in debug/development mode. Try building the app for release.
    setTimeout(hideSplashScreen, 500)
  })

  const updateLocationAddresses = useCallback(() => {
    rootStore.updateLocationAddresses().catch(console.log)
  }, [])

  useEffect(() => {
    if (!rootStore || Platform.OS !== "ios") return undefined

    rootStore.setNotifications()
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        nextAppState === "active" &&
        prevAppState.current &&
        prevAppState.current !== nextAppState
      )
        rootStore.setNotifications()
      prevAppState.current = nextAppState
    })

    return () => {
      subscription.remove()
    }
  }, [rootStore])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    if (Config.DISABLE_YELLOWBOX) console.warn = () => {}
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const locale = await storage.load("locale")
        if (locale) setLocale(locale as string)
        else {
          const prevSystemLocale = await storage.load("prevSystemLocale")
          if (prevSystemLocale && prevSystemLocale !== i18n.locale) updateLocationAddresses()
        }

        await storage.save("prevSystemLocale", i18n.locale)
        setIsLocaleLoaded(true)
      } catch {
        setIsLocaleLoaded(true)
      }
    })().catch(() => null)
  }, [])

  useEffect(() => {
    if (!isLocaleLoaded) return undefined

    addLocaleListener(updateLocationAddresses)
    return () => removeLocaleListener(updateLocationAddresses)
  }, [isLocaleLoaded, updateLocationAddresses])

  useEffect(() => {
    if (!rehydrated || !rootStore) return
    ;(async () => {
      if (rootStore.selectedLocation && !rootStore.selectedLocation.timezone) {
        await rootStore.setSelectedLocation(rootStore.selectedLocation, true).catch(() => null)
      } else if (rootStore.currentLocation && !rootStore.currentLocation.timezone) {
        await rootStore.setCurrentLocation(rootStore.currentLocation, true).catch(() => null)
      }

      setIsTZUpdated(true)
    })().catch(() => null)
  }, [rehydrated, rootStore])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.
  if (
    !rehydrated ||
    !isNavigationStateRestored ||
    !areFontsLoaded ||
    !isLocaleLoaded ||
    !isTZUpdated
  )
    return null

  const linking = {
    prefixes: [prefix],
    config,
  }

  // otherwise, we're ready to render the app
  return (
    <RootStoreProvider value={rootStore}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ErrorBoundary catchErrors={Config.catchErrors}>
          <GestureHandlerRootView style={$flex}>
            <AppNavigator
              linking={linking}
              initialState={initialNavigationState}
              onStateChange={onNavigationStateChange}
            />
          </GestureHandlerRootView>
        </ErrorBoundary>
      </SafeAreaProvider>
    </RootStoreProvider>
  )
}

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default codePush(codePushConfig)(Sentry.wrap(App))

const $flex: ViewStyle = {
  flex: 1,
}
