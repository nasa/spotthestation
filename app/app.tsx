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
import { addLocaleListener, removeLocaleListener, setLocale, translate } from "./i18n"
import "./utils/ignoreWarnings"
import { useFonts } from "expo-font"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import * as Linking from "expo-linking"
import * as Sentry from "@sentry/react-native"
import { RootStoreProvider, useInitialRootStore } from "./models"
import { AppNavigator, useNavigationPersistence } from "./navigators"
import { ErrorBoundary } from "./components/ErrorBoundary"
import * as storage from "./utils/storage"
import { customFontsToLoad } from "./theme"
import Config from "./config"
import * as StoreReview from "expo-store-review"
import i18n from "i18n-js"
import { Alert, AppState, Platform, ViewStyle } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import VersionCheck from "react-native-version-check"
import * as notifications from "./utils/notifications"
import { ensureExactAlarmPermissions, hasExactAlarmPermissions } from "./utils/notifications"
import { LocationType } from "./services/api"
import { initCrashReporting } from "./utils/crashReporting"
import { initPolyfills } from "./utils/datetime"

initPolyfills()
initCrashReporting()

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

const MIN_LAUNCH_DURATION = 10000
const REVIEW_MIN_LAUNCHES = 10
const REVIEW_MAX_REQUESTS = 3
const REVIEW_REQUEST_INTERVAL = 14 * 24 * 60 * 60 * 1000

/**
 * This is the root component of our app.
 */
function App(props: AppProps) {
  const { hideSplashScreen } = props
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage.KEYS.NAVIGATION_PERSISTENCE_KEY)

  const [areFontsLoaded] = useFonts(customFontsToLoad)
  const [isLocaleLoaded, setIsLocaleLoaded] = useState(false)
  const [isTZUpdated, setIsTZUpdated] = useState(false)
  const prevAppState = useRef<string>()
  const launchTimer = useRef<NodeJS.Timeout | null>(null)

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

  const handleLaunchReview = useCallback(async () => {
    const reviewRequestedAt = (await storage.load(storage.KEYS.LAST_REVIEW_REQUESTED_AT_KEY)) as
      | string
      | null
    if (!reviewRequestedAt) {
      await storage.save(storage.KEYS.LAST_REVIEW_REQUESTED_AT_KEY, new Date().toISOString())
      return
    }

    let launches = Number((await storage.load(storage.KEYS.NUMBER_OF_LAUNCHES_KEY)) || 0)
    const reviewRequests = Number(
      (await storage.load(storage.KEYS.NUMBER_OF_REVIEW_REQUESTS_KEY)) || 0,
    )

    if (
      new Date().getTime() - new Date(reviewRequestedAt).getTime() > REVIEW_REQUEST_INTERVAL &&
      launches > REVIEW_MIN_LAUNCHES &&
      reviewRequests < REVIEW_MAX_REQUESTS
    ) {
      if (await StoreReview.hasAction()) {
        await StoreReview.requestReview()
        await storage.save(storage.KEYS.LAST_REVIEW_REQUESTED_AT_KEY, new Date().toISOString())
        await storage.save(storage.KEYS.NUMBER_OF_REVIEW_REQUESTS_KEY, reviewRequests + 1)
      }
      launches = 0
    }

    // increment number of app launches
    await storage.save(storage.KEYS.NUMBER_OF_LAUNCHES_KEY, launches + 1)
  }, [])

  useEffect(() => {
    notifications.initialize()
  }, [])

  useEffect(() => {
    if (!rehydrated || !rootStore) return undefined

    const handler = async () => {
      const locations: LocationType[] = [...rootStore.savedLocations, rootStore.currentLocation]

      const hasNotifications = locations.some((location: LocationType) => {
        return (location?.sightings || []).some(
          (sighting) => sighting.notify && Date.now() <= new Date(sighting.date).getTime(),
        )
      })

      if (hasNotifications && Platform.OS === "android") {
        const fromAlarmPermissionSettings = await storage.load(
          storage.KEYS.FROM_ALARM_PERMISSION_SETTINGS,
        )
        if (fromAlarmPermissionSettings) {
          const permitted = await hasExactAlarmPermissions()
          if (!permitted) await rootStore.disableAllNotifications()
          await storage.remove(storage.KEYS.FROM_ALARM_PERMISSION_SETTINGS)
        } else {
          const permitted = await ensureExactAlarmPermissions()
          if (permitted === null)
            await storage.save(storage.KEYS.FROM_ALARM_PERMISSION_SETTINGS, true)
          if (permitted === false) await rootStore.disableAllNotifications()
        }
      }

      rootStore.setNotifications()
    }

    handler().catch(console.error)
    launchTimer.current = setTimeout(handleLaunchReview, MIN_LAUNCH_DURATION)

    const subscription = AppState.addEventListener("change", (nextAppState) => {
      clearTimeout(launchTimer.current)
      launchTimer.current = null

      if (
        nextAppState === "active" &&
        prevAppState.current &&
        prevAppState.current !== nextAppState
      ) {
        handler().catch(console.error)
        launchTimer.current = setTimeout(handleLaunchReview, MIN_LAUNCH_DURATION)
      }
      prevAppState.current = nextAppState
    })

    return () => {
      clearTimeout(launchTimer.current)
      launchTimer.current = null
      subscription.remove()
    }
  }, [rootStore, rehydrated])

  //
  // useEffect(() => {
  //   // eslint-disable-next-line @typescript-eslint/no-empty-function
  //   if (Config.DISABLE_YELLOWBOX) console.warn = () => {}
  // }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const locale = await storage.load(storage.KEYS.LOCALE)
        if (locale) setLocale(locale as string)
        else {
          const prevSystemLocale = await storage.load(storage.KEYS.PREV_SYSTEM_LOCALE)
          if (prevSystemLocale && prevSystemLocale !== i18n.locale) updateLocationAddresses()
        }

        await storage.save(storage.KEYS.PREV_SYSTEM_LOCALE, i18n.locale)
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

  useEffect(() => {
    VersionCheck.needUpdate()
      .then((res) => {
        if (!res?.isNeeded) return
        Alert.alert(
          translate("outdatedModal.title"),
          `${translate("outdatedModal.body")} ${
            Platform.OS === "android" ? "Google Play" : "App Store"
          }.`,
          [
            {
              text: translate("outdatedModal.buttonPositive"),
              onPress: () => Linking.openURL(res.storeUrl),
            },
            {
              text: translate("outdatedModal.buttonNegative"),
              style: "cancel",
            },
          ],
          { cancelable: true },
        )
      })
      .catch(console.error)
  }, [])

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
export default Sentry.wrap(App)

const $flex: ViewStyle = {
  flex: 1,
}
