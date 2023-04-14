/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps, useRoute } from "@react-navigation/native"
import React, { useState } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Text } from "../components"
import { ISSNowScreen, HomeScreen, ISSNowScreenRouteProps, ISSViewScreenRouteProps, HomeScreenRouteProps, ISSViewScreen, Resources, SettingsScreen } from "../screens"
import { ResourcesScreenRouteProps } from "../screens/MainScreen/ResourcesScreen/ResourcesScreen"
import { colors, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"

export type TabParamList = {
  Home: HomeScreenRouteProps
  ISSView: ISSViewScreenRouteProps
  ISSNow: ISSNowScreenRouteProps
  Resources: ResourcesScreenRouteProps
  Settings: undefined
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
  const { params } = useRoute()
  const { bottom } = useSafeAreaInsets()
  const [isTabsVisible, setIsTabsVisible] = useState(true)
  const [isLandscape, setIsLandscape] = useState(false)
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.palette.neutral100,
        tabBarStyle: [$tabBar, { height: isLandscape ? 80 : bottom + 70, display: isTabsVisible ? "flex" : "none" }],
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={params}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text tx="tabNavigator.homeTab" style={{ color: focused ? color : "transparent", marginTop: -20 }} />
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="home" color={color} size={size} />
          ),
          unmountOnBlur: true
        }}
      />

      <Tab.Screen
        name="ISSView"
        component={ISSViewScreen}
        initialParams={{
          toggleBottomTabs: setIsTabsVisible,
          toggleIsLandscape: setIsLandscape
        }}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text tx="tabNavigator.issViewTab" style={{ color: focused ? color : "transparent", marginTop: -20 }} />
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="globe" color={color} size={size} />
          ),
          unmountOnBlur: true
        }}
      />

      <Tab.Screen
        name="ISSNow"
        component={ISSNowScreen}
        initialParams={{
          toggleBottomTabs: setIsTabsVisible,
          toggleIsLandscape: setIsLandscape
        }}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text tx="tabNavigator.issNowTab" style={{ color: focused ? color : "transparent", marginTop: -20 }} />
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="tv" color={ color } size={size} />
          ),
          unmountOnBlur: true
        }}
      />

      <Tab.Screen
        name="Resources"
        component={Resources}
        initialParams={{
          toggleBottomTabs: setIsTabsVisible
        }}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text tx="tabNavigator.resourcesTab" style={{ color: focused ? color : "transparent", marginTop: -20 }} ellipsizeMode="tail" numberOfLines={1} />
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="book" color={ color } size={size} />
          ),
          unmountOnBlur: true
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text tx="tabNavigator.settingsTab" style={{ color: focused ? color : "transparent", marginTop: -20 }} />
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="settings" color={ color } size={size} />
          ),
          unmountOnBlur: true
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.backgroundDark,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  padding: 0,
  margin: 0,
  flexDirection: 'column'
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1
}
