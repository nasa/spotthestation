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
import React, { useEffect, useRef } from "react"
import { AppState, Platform, useColorScheme } from "react-native"
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

const AppStack = observer(function AppStack() {
  const prevAppState = useRef<string>()

  useEffect(() => {
    Promise.all([
      storage.load(storage.KEYS.IS_SETTINGS_COMPLETED),
      notifications.hasInitialNotification(),
    ])
      .then(([isSettingsCompleted, hasInitialNotification]) => {
        if (isSettingsCompleted) skipOnboarding()
        if (hasInitialNotification) {
          navigationRef.navigate(
            "Main" as never,
            { screen: "ISSView", params: { info: true } } as never,
          )
        }
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

    if (Platform.OS === "android") {
      const subscription = AppState.addEventListener("change", (nextAppState) => {
        if (
          nextAppState === "active" &&
          prevAppState.current &&
          prevAppState.current !== nextAppState
        )
          notifications
            .hasInitialNotification()
            .then((hasInitialNotification) => {
              if (hasInitialNotification)
                navigationRef.navigate(
                  "Main" as never,
                  { screen: "ISSView", params: { info: true } } as never,
                )
            })
            .catch((e) => console.error(e))
        prevAppState.current = nextAppState
      })

      return () => {
        subscription.remove()
      }
    } else {
      return notifee.onForegroundEvent(({ type }) => {
        if (type === EventType.PRESS) {
          navigationRef.navigate(
            "Main" as never,
            { screen: "ISSView", params: { info: true } } as never,
          )
        }
      })
    }
  }, [])

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Onboarding"}>
      <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="SettingsScreens" component={SettingsNavigator} />
      <Stack.Screen name="ResourcesScreens" component={ResourcesNavigator} />
    </Stack.Navigator>
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
