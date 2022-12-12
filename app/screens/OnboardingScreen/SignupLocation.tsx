import React from "react"
import { ViewStyle } from "react-native";
import { Screen } from "../../components"
import { colors } from "../../theme/colors";

export function SignupLocation() {
  return (
    <Screen preset="fixed" contentContainerStyle={$container} statusBarStyle="light" />
  );
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral900
}