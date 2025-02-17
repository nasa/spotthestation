/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useRef } from "react"
import { AppState, PixelRatio, Platform, useColorScheme, ViewStyle } from "react-native"
import * as storage from "../utils/storage"
import Config from "../config"
import { TabNavigator, TabParamList } from "./TabNavigator"
import { OnboardingNavigator, OnboardingParamList } from "./OnboardingNavigator"
import { navigationRef, skipOnboarding, useBackButtonHandler } from "./navigationUtilities"
import { SettingsNavigator, SettingsParamList } from "./SettingsNavigation"
import { ResourcesNavigator, ResourcesParamList } from "./ResourcesNavigator"
import Snackbar from "react-native-snackbar"
import { translate } from "../i18n"
import * as notifications from "../utils/notifications"
import notifee, { EventType } from "@notifee/react-native"
import { FontSizeModal } from "../components/modals/FontSizeModal"
import { ModalContainer } from "../components"
import { StyleFn, useStyles } from "../utils/useStyles"
import { useStores } from "../models"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Main: NavigatorScreenParams<TabParamList>
  Onboarding: NavigatorScreenParams<OnboardingParamList>
  SettingsScreens: NavigatorScreenParams<SettingsParamList>
  ResourcesScreens: NavigatorScreenParams<ResourcesParamList>
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const navigateToAR = async (location) => {
  let retries = 3
  while (retries > 0) {
    if (navigationRef.isReady() && navigationRef.current.getRootState()) {
      navigationRef.navigate(
        "Main" as never,
        {
          screen: "ISSView",
          params: { info: true, location },
        } as never,
      )
      break
    }

    console.log("navigator not initialized, retrying in 500ms")
    await new Promise((resolve) => setTimeout(resolve, 500))
    --retries
  }
}

const AppStack = observer(function AppStack() {
  const { $modal } = useStyles(styles)

  const prevAppState = useRef<string>()
  const { requestOpenModal, requestCloseModal } = useStores()

  useEffect(() => {
    Promise.all([
      storage.load(storage.KEYS.IS_SETTINGS_COMPLETED),
      notifications.getInitialNotification(),
    ])
      .then(([isSettingsCompleted, initialNotification]) => {
        if (isSettingsCompleted) skipOnboarding()
        if (initialNotification) return navigateToAR(initialNotification.notification.data)
        return undefined
      })
      .catch((err) =>
        Snackbar.show({
          text: err as string,
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: translate("snackBar.dismiss"),
            textColor: "red",
            onPress: () => {
              Snackbar.dismiss()
            },
          },
        }),
      )

    const checkFontScale = async () => {
      if ((await storage.load(storage.KEYS.LAST_FONT_SIZE_KEY)) !== PixelRatio.getFontScale()) {
        await storage.remove(storage.KEYS.FONT_SIZE_MODAL_CLOSED_KEY)
      }

      if (
        PixelRatio.getFontScale() > 1.5 &&
        !(await storage.load(storage.KEYS.FONT_SIZE_MODAL_CLOSED_KEY))
      ) {
        requestOpenModal("fontSize")
      } else {
        requestCloseModal("fontSize")
      }

      await storage.save(storage.KEYS.LAST_FONT_SIZE_KEY, PixelRatio.getFontScale())
    }
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        nextAppState === "active" &&
        prevAppState.current &&
        prevAppState.current !== nextAppState
      ) {
        if (Platform.OS === "android") {
          notifications
            .getInitialNotification()
            .then((initialNotification) => {
              if (initialNotification) return navigateToAR(initialNotification.notification.data)
              return undefined
            })
            .catch((e) => console.error(e))
        }

        checkFontScale().catch(console.error)
      }

      prevAppState.current = nextAppState
    })

    checkFontScale().catch(console.error)

    return () => {
      subscription.remove()
    }
  }, [])

  useEffect(() => {
    if (Platform.OS !== "ios") return undefined
    return notifee.onForegroundEvent(({ type, detail }) => {
      if (type === EventType.PRESS) {
        navigateToAR(detail?.notification?.data).catch(console.error)
      }
    })
  }, [])

  const handleFontSizeModalClose = useCallback(async (canceled: boolean) => {
    requestCloseModal("fontSize")
    if (canceled) await storage.save(storage.KEYS.FONT_SIZE_MODAL_CLOSED_KEY, true)
  }, [])

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Onboarding"}>
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="SettingsScreens" component={SettingsNavigator} />
        <Stack.Screen name="ResourcesScreens" component={ResourcesNavigator} />
      </Stack.Navigator>
      <ModalContainer
        name="fontSize"
        useNativeDriver={false}
        useNativeDriverForBackdrop
        backdropOpacity={0.85}
        style={$modal}
      >
        <FontSizeModal onClose={handleFontSizeModalClose} />
      </ModalContainer>
    </>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})

const styles: StyleFn = ({ scale }) => {
  const $modal: ViewStyle = {
    left: 0,
    margin: 0,
    justifyContent: "center",
    marginHorizontal: scale(24),
  }

  return { $modal }
}
