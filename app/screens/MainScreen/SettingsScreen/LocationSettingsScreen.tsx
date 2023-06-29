/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation, useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useEffect, useCallback, useState } from "react"
import { ViewStyle, TextStyle, ScrollView, Pressable, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Screen, Text } from "../../../components"
import { colors, fontSizes, lineHeights, scale, typography } from "../../../theme"
import { LocationType } from "../../OnboardingScreen/SignupLocation"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import { getCurrentLocation } from "../../../utils/geolocation"
import { useStores } from "../../../models"
import { Sightings } from "../HomeScreen/Sightings"
import Modal from "react-native-modal/dist/modal"
import { ISSSighting } from "../../../services/api/api.types"
import { getCurrentTimeZome } from "../../../utils/formatDate"
import { RemoveLocationModal } from "./RemoveLocationModal"
import { SettingsItem } from "../components/SettingsItem"
import { openSettings } from "react-native-permissions"

export const LocationSettingsScreen = observer(function LocationSettingsScreen() {
  const navigation = useNavigation()
  const route = useRoute()
  const { savedLocations, currentLocation, setCurrentLocation, setSavedLocations, setISSSightings } = useStores()
  const topInset = useSafeAreaInsets().top
  const bottomInset = useSafeAreaInsets().bottom

  const [isSightings, setIsSightings] = useState(false)
  const [current, setCurrent] = useState<LocationType>(null)
  const [currentTimeZone, setCurrentTimeZone] = useState({ timeZone: 'US/Central', regionFormat: 'US' })
  const [isRemove, setIsRemove] = useState(false)
  const [toRemove, setToRemove] = useState<LocationType>(null)
  const [locationPermission, setLocationPermission] = useState<boolean>(false)

  const $headerStyleOverride: TextStyle = {
    top: topInset + scale(24),
  }

  const getLocation = async () => {
    setCurrentLocation(await getCurrentLocation(() => ({}), setLocationPermission)).catch(e => console.log(e))
  }

  useEffect(() => {
    getLocation().catch(e => console.log(e))
  }, [route])

  const handleToggle = useCallback((location: LocationType, type: string) => {
    if (type === 'saved') {
      setSavedLocations(savedLocations.map(item => item.title === location.title ? { ...item, alert: !item.alert } : item))
    } else {
      setCurrentLocation({ ...currentLocation, alert: !currentLocation.alert }).catch(e => console.log(e))
    }
    
    getLocation().catch(e => console.log(e))
  }, [currentLocation, savedLocations])

  const handleSetSightingNotification = useCallback((value: ISSSighting) => {
    const updated = {...current, sightings: current.sightings.map(item => {
      if (item.date === value.date) {
        return {...item, notify: !item.notify}
      }
      return item
    })}
    setISSSightings(updated)
    setCurrent(updated)
  }, [current])

  const handleSetSightingNotificationToAll = useCallback((notify: boolean) => {
    const updated = {...current, sightings: current.sightings.map(item => ({...item, notify}))}
    setISSSightings(updated)
    setCurrent(updated)
  }, [current])

  const handleCtaPress = (item: LocationType) => {
    setCurrent(item)
    setIsSightings(true)
  }

  const getTimeZone = async (location: LocationType) => {
    const { timeZone, regionFormat } = await getCurrentTimeZome(location)
    setCurrentTimeZone({ timeZone, regionFormat })
  }

  useEffect(() => {
    if (!current) return
    
    getTimeZone(current).catch(e => console.log(e))
  }, [current])

  const handleRemove = useCallback((location: LocationType) => {
    setSavedLocations(savedLocations.filter(item => item.title !== location.title))
    setIsRemove(false)
  }, [savedLocations])

  return (
    <Screen
      preset="fixed" 
      contentContainerStyle={[$container, $headerStyleOverride]} 
      style={{backgroundColor: colors.palette.neutral900}} 
      statusBarStyle="light"
    >
      <View style={{ flex: 1, paddingBottom: scale(120) }}>
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
            <Icon icon="caretLeft" color={colors.palette.neutral250} size={24} />
            <Text tx="settings.locationSettingsData.backButton" style={$backButtonText} />
          </Pressable>
          <Text tx="settings.locationSettingsData.generalTitle" style={$title} />
          {
            !locationPermission && <SettingsItem
              icon="pin" 
              title="settings.locationSettingsData.locationPermission" 
              onPress={() => {
                openSettings().catch(e => console.log(e))
              }}
              withUnderline={false}
            />
          }
          {Boolean(currentLocation) && <ExpandContainer title="homeScreen.selectLocation.current" expandble={false} actionTitle="Alert">
            <ListItem 
              icon="pin"
              title={currentLocation.title} 
              subtitle={currentLocation.subtitle}
              selected={currentLocation.alert}
              onToggle={() => handleToggle(currentLocation, 'current')}
              withSwitch
              ctaTx="settings.locationSettingsData.cta"
              onCtaPress={() => handleCtaPress(currentLocation)}
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
              // onPress={() => navigation.navigate('SettingsScreens' as never, { screen: 'AddNewLocation', defaultLocation: location } as never)}
              ctaTx="settings.locationSettingsData.cta"
              onCtaPress={() => handleCtaPress(location)}
              editable
              onDelete={() => {
                setIsRemove(true)
                setToRemove(location)
              }}
              onEdit={() =>{ 
                navigation.navigate('SettingsScreens' as never, { screen: 'AddNewLocation', defaultLocation: location } as never)
              }}
            />)}
          </ExpandContainer>}
        </ScrollView>
      </View>
      <IconLinkButton
        icon="plusCircle" 
        buttonStyle={[$addButton, { position: 'absolute', bottom: bottomInset + scale(64) }]} 
        viewStyle={$addButton} 
        iconColor={colors.palette.neutral250} 
        iconSize={28} 
        onPress={() => navigation.navigate('SettingsScreens' as never, { screen: 'AddNewLocation' } as never)}
      />
      {isSightings && <Modal
        isVisible={isSightings}
        onBackdropPress={() => setIsSightings(!isSightings)}
        onSwipeComplete={() => setIsSightings(!isSightings)}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        swipeDirection="down"
        useNativeDriver
        useNativeDriverForBackdrop
        hideModalContentWhileAnimating
        propagateSwipe
        backdropOpacity={0.65}
        style={$modal}
      >
        <Sightings 
          onClose={() => setIsSightings(!isSightings)} 
          sightings={current ? current.sightings : []}
          onToggle={handleSetSightingNotification}
          onToggleAll={handleSetSightingNotificationToAll}
          isUS={currentTimeZone.regionFormat === 'US'}
          isNotifyAll={current && current.sightings.every(item => item.notify)}
          timezone={currentTimeZone?.timeZone}
        />
      </Modal>}
      <Modal
          isVisible={isRemove}
          onBackdropPress={() => setIsRemove(!isRemove)}
          onSwipeComplete={() => setIsRemove(!isRemove)}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          swipeDirection="down"
          useNativeDriver
          useNativeDriverForBackdrop
          hideModalContentWhileAnimating
          propagateSwipe
          backdropOpacity={0.65}
          style={$modal}
        >
          <RemoveLocationModal onClose={() => setIsRemove(!isRemove)} onRemove={() => handleRemove(toRemove)} location={toRemove} />
        </Modal>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  height: '100%'
}

const $modal: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-end',
  left: 0,
  margin: 0
}

const $scrollContentContainerStyle: ViewStyle = { 
  flexGrow: 1,
  paddingBottom: scale(60)
}

const $scrollContainer: ViewStyle = { 
  paddingHorizontal: scale(18),
  paddingBottom: scale(10)
}

const $backButton: ViewStyle = {
  flexDirection: "row",
  alignItems: 'center',
  paddingBottom: 11
}

const $addButton: ViewStyle = {
  width: scale(64),
  height: scale(64),
  backgroundColor: colors.palette.buttonBlue,
  alignSelf: 'center'
}

const $text: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: fontSizes[18],
  lineHeight: lineHeights[22],
  color: colors.palette.neutral450,
  textAlign: 'left',
  paddingBottom: scale(24)
}

const $backButtonText: TextStyle = {
  ...$text,
  color: colors.palette.neutral250,
  paddingBottom: 0,
  paddingLeft: scale(5)
}

const $title: TextStyle = {
  ...$text,
  fontSize: fontSizes[36],
  lineHeight: lineHeights[44],
  color: colors.palette.neutral250,
}
