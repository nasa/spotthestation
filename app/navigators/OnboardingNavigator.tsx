import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { CompleteProfileScreen } from "../screens/OnboardingScreen/CompleteProfileScreen"
import { SplashScreen } from "../screens/OnboardingScreen/SplashScreen"

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
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignupCompleteProfile" component={CompleteProfileScreen} />
    </Stack.Navigator>
  )
}
