import { useRoute } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { WebScreen, WebScreenRouteProps } from "../screens/MainScreen/ResourcesScreen/WebScreen"

import {
  AstronautsScreen,
  AstronautsScreenRouteProps,
} from "../screens/MainScreen/ResourcesScreen/AstonautsScreen"

import { NewsScreen, NewsScreenRouteProps } from "../screens/MainScreen/ResourcesScreen/NewsScreen"

import {
  AboutScreen,
  AboutScreenRouteProps,
} from "../screens/MainScreen/ResourcesScreen/AboutScreen"

import {
  DetailsScreen,
  DetailsScreenRouteProps,
} from "../screens/MainScreen/ResourcesScreen/DetailsScreen"

import { LiveScreen, LiveScreenRouteProps } from "../screens/MainScreen/ResourcesScreen/LiveScreen"

import {
  VideosScreen,
  VideosScreenRouteProps,
} from "../screens/MainScreen/ResourcesScreen/VideosScreen"

export type ResourcesParamList = {
  Web: WebScreenRouteProps
  Astronauts: AstronautsScreenRouteProps
  News: NewsScreenRouteProps
  About: AboutScreenRouteProps
  Details: DetailsScreenRouteProps
  Live: LiveScreenRouteProps
  Videos: VideosScreenRouteProps
}

export type ResourcesStackScreenProps<T extends keyof ResourcesParamList> = StackScreenProps<
  ResourcesParamList,
  T
>

const Stack = createNativeStackNavigator<ResourcesParamList>()

export function ResourcesNavigator() {
  const { params } = useRoute()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Web">
      <Stack.Screen name="Web" component={WebScreen} initialParams={params} />
      <Stack.Screen name="Astronauts" component={AstronautsScreen} initialParams={params} />
      <Stack.Screen name="News" component={NewsScreen} initialParams={params} />
      <Stack.Screen name="About" component={AboutScreen} initialParams={params} />
      <Stack.Screen name="Details" component={DetailsScreen} initialParams={params} />
      <Stack.Screen name="Live" component={LiveScreen} initialParams={params} />
      <Stack.Screen name="Videos" component={VideosScreen} initialParams={params} />
    </Stack.Navigator>
  )
}
