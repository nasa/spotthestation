import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { ContactUsScreen } from "../screens/MainScreen/SettingsScreen/ContactUsScreen"
import { TermsAndConditionsScreen } from "../screens/MainScreen/SettingsScreen/TermsAndConditionsScreen"

export type SettingsParamList = {
  TermsAndConditions: undefined
  ContactUs: undefined
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
    </Stack.Navigator>
  )
}
