import { useRoute } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { WebScreen, WebScreenRouteProps } from "../screens/ResourcesScreen/WebScreen"

import {
  AstronautsScreen,
  AstronautsScreenRouteProps,
} from "../screens/ResourcesScreen/AstonautsScreen"

import { NewsScreen, NewsScreenRouteProps } from "../screens/ResourcesScreen/NewsScreen"

import { AboutScreen, AboutScreenRouteProps } from "../screens/ResourcesScreen/AboutScreen"

import { DetailsScreen, DetailsScreenRouteProps } from "../screens/ResourcesScreen/DetailsScreen"

import { LiveScreen, LiveScreenRouteProps } from "../screens/ResourcesScreen/LiveScreen"

import { VideosScreen, VideosScreenRouteProps } from "../screens/ResourcesScreen/VideosScreen"

import { FaqScreen, FaqScreenRouteProps } from "../screens/ResourcesScreen/FaqScreen"

export type ResourcesParamList = {
  Web: WebScreenRouteProps
  Astronauts: AstronautsScreenRouteProps
  News: NewsScreenRouteProps
  About: AboutScreenRouteProps
  Details: DetailsScreenRouteProps
  Live: LiveScreenRouteProps
  Videos: VideosScreenRouteProps
  Faq: FaqScreenRouteProps
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
      <Stack.Screen name="Faq" component={FaqScreen} initialParams={params} />
    </Stack.Navigator>
  )
}
