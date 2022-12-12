import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
import { translate } from "../i18n"
import { ISSNowScreen } from "../screens"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"

export type TabParamList = {
  Home: undefined
  SkyView: undefined
  ISSNow: undefined
  Resources: undefined
  Account: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<TabParamList>()

export function TabNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      initialRouteName="ISSNow"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000000',
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Home"
        component={ISSNowScreen}
        options={{
          tabBarLabel: translate("tabNavigator.homeTab"),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="components" color={color} size={size} />
          ),
        }}
        listeners={{
          tabPress: e => {
            // add your conditions here
            e.preventDefault(); // <-- this function blocks navigating to screen
          },
        }}
      />

      <Tab.Screen
        name="SkyView"
        component={ISSNowScreen}
        options={{
          tabBarLabel: translate("tabNavigator.skyViewTab"),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="components" color={color} size={size} />
          ),
        }}
        listeners={{
          tabPress: e => {
            // add your conditions here
            e.preventDefault(); // <-- this function blocks navigating to screen
          },
        }}
      />

      <Tab.Screen
        name="ISSNow"
        component={ISSNowScreen}
        options={{
          tabBarLabel: translate("tabNavigator.issNowTab"),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="components" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Resources"
        component={ISSNowScreen}
        options={{
          tabBarLabel: translate("tabNavigator.resourcesTab"),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="components" color={color} size={size} />
          ),
        }}
        listeners={{
          tabPress: e => {
            // add your conditions here
            e.preventDefault(); // <-- this function blocks navigating to screen
          },
        }}
      />

      <Tab.Screen
        name="Account"
        component={ISSNowScreen}
        options={{
          tabBarLabel: translate("tabNavigator.accountTab"),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="components" color={color} size={size} />
          ),
        }}
        listeners={{
          tabPress: e => {
            // add your conditions here
            e.preventDefault(); // <-- this function blocks navigating to screen
          },
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.medium,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}
