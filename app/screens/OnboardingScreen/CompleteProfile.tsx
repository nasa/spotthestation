import { useNavigation } from "@react-navigation/native"
import React, { useCallback, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { typography } from "../../theme"
import { colors } from "../../theme/colors"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import { IconLinkButton } from "./components/IconLinkButton"
import { LocationType, SignupLocation } from "./SignupLocation"
import { SignupNotificationSettings } from "./SignupNotificationSettings"
import * as storage from "../../utils/storage"

export function CompleteProfile() {
  const navigation = useNavigation()

  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")

  const [step, setStep] = useState(1)
  const [notifications, setNotifications] = useState(false)
  const [location, setLocation] = useState({
    title: "",
    subtitle: "",
    location: {
      lat: null,
      lng: null
    }
  })

  const handleBack = useCallback(() => {
    if (step === 1) navigation.goBack()
    else setStep(step - 1)
  }, [step])

  const handleNext = useCallback(() => setStep(step + 1), [step])

  const handleDone = () => navigation.navigate("Main" as never)

  const handleLocationChange = async (location: LocationType) => {
    setLocation(location)
    await storage.save('currentLocation', location)
  }

  const renderBody = useCallback(() => {
    switch(step) {
      case 2: return <SignupLocation value={location} onValueChange={handleLocationChange} onAction={handleDone} />
      default: return <SignupNotificationSettings value={notifications} onValueChange={setNotifications} onAction={handleNext} />
    }
  }, [step, notifications, location])

  return (
    <Screen preset="scroll" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      <IconLinkButton 
        icon="back"
        accessible
        accessibilityLabel="Back button"
        accessibilityHint="Navigates to the previous screen"
        onPress={handleBack} 
        buttonStyle={$back} 
      />
      <View style={$contentContainer}>
        <Text
          accessible
          accessibilityLabel="Step counter"
          accessibilityHint="Display current step"
          accessibilityRole="text"
          text={`${step} of 2`} 
          style={$step}
        />
        {renderBody()}
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral900,
  paddingTop: 24
}

const $contentContainer: ViewStyle = {
  flex: 1,
  paddingHorizontal: 36,
  paddingBottom: 52
}

const $back: ViewStyle = {
  marginLeft: 18
}

const $step: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: 18,
  fontFamily: typography.primary.normal,
  lineHeight: 22,
  paddingBottom: 18,
  paddingTop: 36
}
