/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation, useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useEffect, useCallback } from "react"
import { ViewStyle, TextStyle, ScrollView, Pressable } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Screen, Text } from "../../../components"
import { colors, typography } from "../../../theme"
import { LocationType } from "../../OnboardingScreen/SignupLocation"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import { getCurrentLocation } from "../../../utils/geolocation"
import { useStores } from "../../../models"

export const LocationSettingsScreen = observer(function LocationSettingsScreen() {
  const navigation = useNavigation()
  const route = useRoute()
  const { savedLocations, currentLocation, setCurrentLocation, setSavedLocations } = useStores()
  const topInset = useSafeAreaInsets().top
  const bottomInset = useSafeAreaInsets().bottom

  const $headerStyleOverride: TextStyle = {
    top: topInset + 24,
  }

  const getLocation = async (currentLocation: LocationType) => {
    if (!currentLocation) setCurrentLocation(await getCurrentLocation())
  }

  useEffect(() => {
    getLocation(currentLocation).catch(e => console.log(e))
  }, [currentLocation, route])

  const handleToggle = useCallback((location: LocationType, type: string) => {
    if (type === 'saved') {
      setSavedLocations(savedLocations.map(item => item.title === location.title ? { ...item, alert: !item.alert } : item))
    } else {
      setCurrentLocation({ ...currentLocation, alert: !currentLocation.alert })
    }
    
    getLocation(currentLocation).catch(e => console.log(e))
  }, [currentLocation, savedLocations])

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
        {Boolean(currentLocation) && <ExpandContainer title="homeScreen.selectLocation.current" expandble={false} actionTitle="Alert">
          <ListItem 
            icon="pin"
            title={currentLocation.title} 
            subtitle={currentLocation.subtitle}
            selected={currentLocation.alert}
            onToggle={() => handleToggle(currentLocation, 'current')}
            withSwitch
          />
        </ExpandContainer>}
        {Boolean(savedLocations.length) && <ExpandContainer title="homeScreen.selectLocation.saved" expandble={false} actionTitle="Alert">
          {savedLocations.map(location => <ListItem 
            key={location.title}
            icon="pin"
            title={location.title} 
            subtitle={location.subtitle}
            selected={location.alert}
            onToggle={() => handleToggle(location, 'saved')}
            withSwitch
            onPress={() => navigation.navigate('SettingsScreens' as never, { screen: 'AddNewLocation', defaultLocation: location } as never)}
          />)}
        </ExpandContainer>}
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
  paddingBottom: 10
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
