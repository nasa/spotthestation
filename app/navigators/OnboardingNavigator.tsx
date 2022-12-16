import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { Login } from "../screens/OnboardingScreen/Login"
import { NewPassword } from "../screens/OnboardingScreen/NewPassword"
import { Signup } from "../screens/OnboardingScreen/Signup"
import { SignupOTP } from "../screens/OnboardingScreen/SignupOTP"
import { SignupCompleteProfile } from "../screens/OnboardingScreen/SignupCompleteProfile"
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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SignupOTP" component={SignupOTP} />
      <Stack.Screen name="SignupCompleteProfile" component={SignupCompleteProfile} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  )
}
