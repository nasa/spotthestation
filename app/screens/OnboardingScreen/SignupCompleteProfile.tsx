import { useNavigation } from "@react-navigation/native"
import React, { useCallback, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { typography } from "../../theme"
import { colors } from "../../theme/colors"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import { IconLinkButton } from "./components/IconLinkButton"
import { SignupLocation } from "./SignupLocation"
import { SignupNotificationSettings } from "./SignupNotificationSettings"
import { FieldTypes, SignupProfile } from "./SignupProfile"

export function SignupCompleteProfile() {
  const navigation = useNavigation()

  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")

  const [step, setStep] = useState(1)
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    city: ""
  })
  const [notifications, setNotifications] = useState(false)
  const [location, setLocation] = useState({
    title: "",
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

  const handleChangeProfile = useCallback((value: string, field: FieldTypes) => {
    setProfileData({...profileData, [field]: value })
  }, [profileData])

  const renderBody = useCallback(() => {
    switch(step) {
      case 2: return <SignupNotificationSettings value={notifications} onValueChange={setNotifications} onAction={handleNext} />
      case 3: return <SignupLocation value={location} onValueChange={setLocation} onAction={handleDone} />
      default: return <SignupProfile value={profileData} onValueChange={handleChangeProfile} onAction={handleNext} />
    }
  }, [step, profileData, notifications, location])

  return (
    <Screen preset="fixed" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      <IconLinkButton icon="back" onPress={handleBack} buttonStyle={$back} />
      <View style={$contentContainer}>
        <Text text={`${step} of 3`} style={$step} />
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
