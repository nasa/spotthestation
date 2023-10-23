import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps, useRoute } from "@react-navigation/native"
import React, { useMemo, useState } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Text } from "../components"
import {
  ISSNowScreen,
  HomeScreen,
  HomeScreenRouteProps,
  ISSViewScreen,
  Resources,
  SettingsScreen,
} from "../screens"
import { colors } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { StyleFn, useStyles } from "../utils/useStyles"
import { TabNavigatorContext } from "./navigationUtilities"

export type TabParamList = {
  Home: HomeScreenRouteProps
  ISSView: undefined
  ISSNow: undefined
  Resources: undefined
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
  const { $tabBar, $tabBarItem, $tabBarPortrait, $tabBarLandscape, $tab } = useStyles(styles)
  const { params } = useRoute()
  const { bottom } = useSafeAreaInsets()
  const [isTabsVisible, setIsTabsVisible] = useState(true)
  const [isLandscape, setIsLandscape] = useState(false)

  const tabBar = { ...(isLandscape ? $tabBarLandscape : $tabBarPortrait) }
  if (!isLandscape) tabBar.height = Number(tabBar.height) + bottom

  const context = useMemo(
    () => ({
      toggleBottomTabs: setIsTabsVisible,
      toggleIsLandscape: setIsLandscape,
    }),
    [setIsLandscape, setIsTabsVisible],
  )

  const getTabStyle = (focused: boolean, color: string) => ({
    color: focused ? color : "transparent",
  })

  return (
    <TabNavigatorContext.Provider value={context}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.palette.neutral100,
          tabBarStyle: [
            $tabBar,
            tabBar,
            {
              display: isTabsVisible ? "flex" : "none",
            },
          ],
          tabBarItemStyle: $tabBarItem,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          initialParams={params}
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text tx="tabNavigator.homeTab" style={[$tab, getTabStyle(focused, color)]} />
            ),
            tabBarIcon: ({ color, size }) => <Icon icon="home" color={color} size={size} />,
            unmountOnBlur: true,
          }}
        />

        <Tab.Screen
          name="ISSView"
          component={ISSViewScreen}
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text tx="tabNavigator.issViewTab" style={[$tab, getTabStyle(focused, color)]} />
            ),
            tabBarIcon: ({ color, size }) => <Icon icon="globe" color={color} size={size} />,
            unmountOnBlur: true,
          }}
        />

        <Tab.Screen
          name="ISSNow"
          component={ISSNowScreen}
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text tx="tabNavigator.issNowTab" style={[$tab, getTabStyle(focused, color)]} />
            ),
            tabBarIcon: ({ color, size }) => <Icon icon="tv" color={color} size={size} />,
            unmountOnBlur: true,
          }}
        />

        <Tab.Screen
          name="Resources"
          component={Resources}
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text tx="tabNavigator.resourcesTab" style={[$tab, getTabStyle(focused, color)]} />
            ),
            tabBarIcon: ({ color, size }) => <Icon icon="book" color={color} size={size} />,
            unmountOnBlur: true,
          }}
        />

        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text tx="tabNavigator.settingsTab" style={[$tab, getTabStyle(focused, color)]} />
            ),
            tabBarIcon: ({ color, size }) => <Icon icon="settings" color={color} size={size} />,
            unmountOnBlur: true,
          }}
        />
      </Tab.Navigator>
    </TabNavigatorContext.Provider>
  )
}

const styles: StyleFn = ({ scale, fontSizes }) => {
  const $tabBar: ViewStyle = {
    backgroundColor: colors.backgroundDark,
    borderTopColor: colors.transparent,
  }

  const $tabBarPortrait: ViewStyle = {
    height: scale(70),
  }

  const $tabBarLandscape: ViewStyle = {
    height: scale(80),
  }

  const $tabBarItem: ViewStyle = {
    padding: 0,
    margin: 0,
    flexDirection: "column",
  }

  const $tab: TextStyle = {
    textTransform: "uppercase",
    fontSize: fontSizes[12],
    marginTop: -scale(20),
  }

  return { $tabBar, $tabBarItem, $tabBarPortrait, $tabBarLandscape, $tab }
}
