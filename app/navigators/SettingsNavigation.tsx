import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { ContactUsScreen } from "../screens/MainScreen/SettingsScreen/ContactUsScreen"
import { TermsAndConditionsScreen } from "../screens/MainScreen/SettingsScreen/TermsAndConditionsScreen"
import { NotificationSettingsScreen } from "../screens/MainScreen/SettingsScreen/NotificationSettingsScreen"
import { LocationSettingsScreen } from "../screens/MainScreen/SettingsScreen/LocationSettingsScreen"
import { AddNewLocationScreen } from "../screens/MainScreen/SettingsScreen/AddNewLocationScreen"

export type SettingsParamList = {
  TermsAndConditions: undefined
  ContactUs: undefined
  LocationSettings: undefined
  NotificationSettings: undefined
  AddNewLocation: undefined
}

export type SettingsStackScreenProps<T extends keyof SettingsParamList> = StackScreenProps<
  SettingsParamList,
  T
>

const Stack = createNativeStackNavigator<SettingsParamList>()

export function SettingsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TermsAndConditions"
    >
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} />
      <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
      <Stack.Screen name="LocationSettings" component={LocationSettingsScreen} />
      <Stack.Screen name="AddNewLocation" component={AddNewLocationScreen} />
    </Stack.Navigator>
  )
}
