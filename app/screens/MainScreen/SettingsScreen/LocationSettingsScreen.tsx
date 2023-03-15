/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useEffect, useState } from "react"
import { ViewStyle, TextStyle, ScrollView, Pressable } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Screen, Text } from "../../../components"
import { colors, typography } from "../../../theme"
import { LocationType } from "../../OnboardingScreen/SignupLocation"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import * as storage from "../../../utils/storage"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"

export const LocationSettingsScreen = observer(function LocationSettingsScreen() {
  const navigation = useNavigation()
  const topInset = useSafeAreaInsets().top
  const bottomInset = useSafeAreaInsets().bottom
  const [current, setCurrent] = useState<LocationType | null>(null)
  const [saved, setSaved] = useState<LocationType[]>([])

  const $headerStyleOverride: TextStyle = {
    top: topInset + 24,
  }

  const getCurrentLocation = async () => {
    setCurrent(await storage.load('currentLocation') as LocationType)
  }

  const getSavedLocation = async () => {
    const res = await storage.load('savedLocations')
    if (res) setSaved(res as LocationType[] || [])
  }

  useEffect(() => {
    getCurrentLocation().catch(e => console.log(e))
    getSavedLocation().catch(e => console.log(e))
  })

  return (
    <Screen
      preset="fixed" 
      contentContainerStyle={[$container, $headerStyleOverride]} 
      style={{backgroundColor: colors.palette.neutral900}} 
      statusBarStyle="light"
    >
      <ScrollView
        accessible
        accessibilityLabel="Location settings scrollable us area"
        accessibilityHint="Location settings scrollable us area"
        accessibilityRole="scrollbar"
        style={$scrollContainer} 
        scrollEnabled 
        contentContainerStyle={$scrollContentContainerStyle}
      >
        <Pressable 
          accessible
          accessibilityLabel="Back button"
          accessibilityHint="Navigates to the previous screen"
          accessibilityRole="button"
          onPress={() => navigation.goBack()} 
          style={$backButton}
        >
          <Icon icon="caretLeft" color={colors.palette.neutral250} />
          <Text tx="settings.locationSettingsData.backButton" style={$backButtonText} />
        </Pressable>
        <Text tx="settings.locationSettingsData.generalTitle" style={$title} />
        {Boolean(current) && <ExpandContainer title="homeScreen.selectLocation.current" expandble={false} actionTitle="Alert">
          <ListItem 
            icon="pin"
            title={current.title} 
            subtitle={current.subtitle}
            withSwitch
          />
        </ExpandContainer>}
        <ExpandContainer title="homeScreen.selectLocation.saved" expandble={false} actionTitle="Alert">
          {saved.map(location => <ListItem 
            key={location.subtitle}
            icon="pin"
            title={location.title} 
            subtitle={location.subtitle}
            withSwitch
          />)}
        </ExpandContainer>
        <IconLinkButton 
          icon="plusCircle" 
          buttonStyle={[$addButton, { position: 'absolute', bottom: bottomInset + 64 }]} 
          viewStyle={$addButton} 
          iconColor={colors.palette.neutral250} 
          iconSize={28} 
          onPress={() => navigation.navigate('SettingsScreens' as never, { screen: 'AddNewLocation' } as never)}
        />
      </ScrollView>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  height: '100%'
}

const $scrollContentContainerStyle: ViewStyle = { 
  flexGrow: 1,
  paddingBottom: 60
}

const $scrollContainer: ViewStyle = { 
  paddingHorizontal: 18,
}

const $backButton: ViewStyle = {
  flexDirection: "row",
  alignItems: 'center',
  paddingBottom: 11
}

const $addButton: ViewStyle = {
  width: 64,
  height: 64,
  backgroundColor: colors.palette.buttonBlue,
  alignSelf: 'center'
}

const $text: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 18,
  lineHeight: 22,
  color: colors.palette.neutral450,
  textAlign: 'left',
  paddingBottom: 24
}

const $backButtonText: TextStyle = {
  ...$text,
  color: colors.palette.neutral250,
  paddingBottom: 0,
  paddingLeft: 5
}

const $title: TextStyle = {
  ...$text,
  fontSize: 36,
  lineHeight: 44,
  color: colors.palette.neutral250,
}
