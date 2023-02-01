import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { CompleteProfile } from "../screens/OnboardingScreen/CompleteProfile"
import { Splash } from "../screens/OnboardingScreen/Splash"

export type OnboardingParamList = {
  Splash: undefined
  Login: undefined
  Signup: undefined
  SignupOTP: undefined
  SignupCompleteProfile: undefined
  NewPassword: undefined
}

export type OnboardingStackScreenProps<T extends keyof OnboardingParamList> = StackScreenProps<
  OnboardingParamList,
  T
>

const Stack = createNativeStackNavigator<OnboardingParamList>()

export function OnboardingNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignupCompleteProfile" component={CompleteProfile} />
    </Stack.Navigator>
  )
}
