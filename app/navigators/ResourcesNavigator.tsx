import { useRoute } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { EventScreen, EventScreenRouteProps } from "../screens/MainScreen/ResourcesScreen/EventScreen"

export type ResourcesParamList = {
  Event: EventScreenRouteProps
}

export type ResourcesStackScreenProps<T extends keyof ResourcesParamList> = StackScreenProps<
ResourcesParamList,
  T
>

const Stack = createNativeStackNavigator<ResourcesParamList>()

export function ResourcesNavigator() {
  const { params } = useRoute()
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Event"
    >
      <Stack.Screen name="Event" component={EventScreen} initialParams={params}/>
    </Stack.Navigator>
  )
}
