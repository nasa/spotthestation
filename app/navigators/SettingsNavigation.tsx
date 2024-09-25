import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { ContactUsScreen } from "../screens/SettingsScreen/ContactUsScreen"
import { TermsAndConditionsScreen } from "../screens/SettingsScreen/TermsAndConditionsScreen"
import { NotificationSettingsScreen } from "../screens/SettingsScreen/NotificationSettingsScreen"
import {
  LocationSettingsScreen,
  LocationSettingsScreenParams,
} from "../screens/SettingsScreen/LocationSettingsScreen"
import {
  AddNewLocationScreen,
  AddNewLocationScreenParams,
} from "../screens/SettingsScreen/AddNewLocationScreen"
import { useRoute } from "@react-navigation/native"
import { AddNewLocationMapScreen } from "../screens/SettingsScreen/AddNewLocationMapScreen"

export type SettingsParamList = {
  TermsAndConditions: undefined
  ContactUs: undefined
  LocationSettings: LocationSettingsScreenParams
  NotificationSettings: undefined
  AddNewLocation: AddNewLocationScreenParams
  AddNewLocationMap: undefined
}

export type SettingsStackScreenProps<T extends keyof SettingsParamList> = StackScreenProps<
  SettingsParamList,
  T
>

const Stack = createNativeStackNavigator<SettingsParamList>()

export function SettingsNavigator() {
  const { params } = useRoute()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TermsAndConditions">
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} />
      <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
      <Stack.Screen
        name="LocationSettings"
        component={LocationSettingsScreen}
        initialParams={params}
      />
      <Stack.Screen name="AddNewLocation" component={AddNewLocationScreen} initialParams={params} />
      <Stack.Screen name="AddNewLocationMap" component={AddNewLocationMapScreen} />
    </Stack.Navigator>
  )
}
