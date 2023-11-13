import { useNavigation, useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useState, useMemo } from "react"
import { ViewStyle, TextStyle, ScrollView, Pressable, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Screen, Text } from "../../../components"
import { colors, typography } from "../../../theme"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"
import { getCurrentLocation, getLocationTimeZone } from "../../../utils/geolocation"
import { useStores } from "../../../models"
import { Sightings } from "../HomeScreen/Sightings"
import Modal from "react-native-modal/dist/modal"
import { RemoveLocationModal } from "./RemoveLocationModal"
import { SettingsItem } from "../components/SettingsItem"
import { openSettings } from "react-native-permissions"
import { RefreshButton } from "../HomeScreen/RefreshButton"
import { StyleFn, useStyles } from "../../../utils/useStyles"
import i18n from "i18n-js"
import { LocationType } from "../../../services/api"
import { getCurrentTimeZone } from "../../../utils/formatDate"

export interface LocationSettingsScreenParams {
  fromHomeScreen?: boolean
}

export const LocationSettingsScreen = observer(function LocationSettingsScreen() {
  const {
    $headerStyleOverride,
    $container,
    $modal,
    $scrollContentContainerStyle,
    $scrollContainer,
    $backButton,
    $addButton,
    $backButtonText,
    $title,
    $scrollWrapper,
    $addButtonContainer,
    $refreshButton,
  } = useStyles(styles)

  const navigation = useNavigation()
  const route = useRoute()
  const routeParams = route.params as LocationSettingsScreenParams
  const {
    savedLocations,
    selectedLocation,
    currentLocation,
    isCurrentLocationUpdating,
    setCurrentLocation,
    setSelectedLocation,
    setIsCurrentLocationUpdating,
    setSavedLocations,
    setISSSightings,
    setNotifications,
    setSightingsTimeOfDay,
    setSightingsDuration,
    getFilteredSightings,
  } = useStores()
  const topInset = useSafeAreaInsets().top
  const bottomInset = useSafeAreaInsets().bottom

  const [isSightings, setIsSightings] = useState(false)
  const [currentTitle, setCurrentTitle] = useState<string>(null)

  const saved = savedLocations.find((loc) => loc.title === currentTitle)
  const current = useMemo(() => {
    if (!currentTitle) return null
    if (selectedLocation && selectedLocation.title === currentTitle) return selectedLocation
    if (currentLocation && currentLocation.title === currentTitle) return currentLocation
    return saved
  }, [currentTitle, selectedLocation, currentLocation, saved])

  const [isRemove, setIsRemove] = useState(false)
  const [toRemove, setToRemove] = useState<LocationType>(null)
  const [locationPermission, setLocationPermission] = useState<boolean>(false)

  const getLocation = useCallback(async () => {
    setIsCurrentLocationUpdating(true)
    try {
      const location = await getCurrentLocation(() => ({}), setLocationPermission)
      const isSameLocation =
        location?.location.lat === currentLocation?.location.lat &&
        location?.location.lng === currentLocation?.location.lng
      if (!location || isSameLocation) return setIsCurrentLocationUpdating(false)
      await setCurrentLocation(location)
    } catch (e) {
      setIsCurrentLocationUpdating(false)
      console.log(e)
    }
  }, [currentLocation])

  const handleToggle = useCallback(
    (location: LocationType, type: string) => {
      const { title } = location
      const isNotifyAll = location.sightings.every((item) => item.notify)
      if (type === "saved") {
        setSavedLocations(
          savedLocations.map((item) =>
            item.title === location.title
              ? {
                  ...item,
                  sightings: item.sightings.map((s) => ({ ...s, notify: !isNotifyAll })),
                }
              : item,
          ),
        )
      } else {
        setCurrentLocation(
          {
            ...currentLocation,
            sightings: currentLocation.sightings.map((s) => ({ ...s, notify: !isNotifyAll })),
          },
          true,
        ).catch((e) => console.log(e))
      }

      if (selectedLocation && selectedLocation.title === title) {
        setSelectedLocation(
          {
            ...selectedLocation,
            sightings: selectedLocation.sightings.map((s) => ({ ...s, notify: !isNotifyAll })),
          },
          true,
        ).catch((e) => console.log(e))
      }

      setNotifications()
    },
    [currentLocation, selectedLocation, savedLocations],
  )

  const handleSetSightingNotification = useCallback(
    (value: string) => {
      const updated = {
        ...current,
        sightings: current.sightings.map((item) => {
          if (item.date === value) {
            return { ...item, notify: !item.notify }
          }
          return item
        }),
      }
      setISSSightings(updated)
    },
    [current],
  )

  const handleSetSightingNotificationToAll = useCallback(
    (notify: boolean) => {
      const updated = {
        ...current,
        sightings: current.sightings.map((item) => ({ ...item, notify })),
      }
      setISSSightings(updated)
    },
    [current],
  )

  const handleCtaPress = async (item: LocationType) => {
    if (item.title !== selectedLocation?.title && item.title !== currentLocation?.title) {
      const saved = savedLocations.find((loc) => loc.title === item.title)
      let tz = null

      try {
        if (!saved.timezone) {
          const { kind, zone } = await getLocationTimeZone(saved.location, Date.now() / 1000)
          if (kind === "ok" && zone) tz = zone.timeZoneId
          console.log("tz updated!", tz)
        }
      } catch (e) {
        console.error(e)
      }

      setSavedLocations(
        savedLocations.map((l) =>
          item.title === l.title
            ? {
                ...l,
                timezone: tz,
              }
            : l,
        ),
      )

      setSavedLocations(savedLocations)
    }

    setCurrentTitle(item.title)
    setIsSightings(true)
  }

  const handleRemove = useCallback(
    (location: LocationType) => {
      setSavedLocations(savedLocations.filter((item) => item.title !== location.title))
      setIsRemove(false)
    },
    [savedLocations],
  )

  const handleChangeTimeOfDay = useCallback(
    (value: string) => {
      setSightingsTimeOfDay(current, value)
    },
    [current],
  )

  const handleChangeDuration = useCallback(
    (value: string) => {
      setSightingsDuration(current, value)
    },
    [current],
  )

  const headerStyle = { ...$headerStyleOverride }
  headerStyle.top = Number(headerStyle.top) + topInset

  const addButtonContainer = { ...$addButtonContainer }
  addButtonContainer.bottom = Number(addButtonContainer.bottom) + bottomInset

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={[$container, headerStyle]}
      style={{ backgroundColor: colors.palette.neutral900 }}
      statusBarStyle="light"
    >
      <View style={$scrollWrapper}>
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
            <Text
              tx={`settings.locationSettingsData.${
                routeParams?.fromHomeScreen ? "goBack" : "backToSettings"
              }`}
              style={$backButtonText}
            />
          </Pressable>
          <Text tx="settings.locationSettingsData.generalTitle" style={$title} />
          {!locationPermission && (
            <SettingsItem
              icon="pin"
              title="settings.locationSettingsData.locationPermission"
              onPress={() => {
                openSettings().catch((e) => console.log(e))
              }}
              withUnderline={false}
            />
          )}
          {Boolean(currentLocation) && (
            <ExpandContainer
              title="homeScreen.selectLocation.current"
              expandble={false}
              actionTitle="homeScreen.selectLocation.actionTitle"
              button={
                <RefreshButton
                  inProgress={isCurrentLocationUpdating}
                  containerStyle={$refreshButton}
                  onPress={getLocation}
                />
              }
            >
              <ListItem
                icon="pin"
                title={currentLocation.title}
                subtitle={currentLocation.subtitle}
                selected={currentLocation.sightings.every((item) => item.notify)}
                onToggle={() => handleToggle(currentLocation, "current")}
                withSwitch
                ctaTx="settings.locationSettingsData.cta"
                onCtaPress={() => handleCtaPress(currentLocation)}
                disabled={isCurrentLocationUpdating}
              />
            </ExpandContainer>
          )}
          {Boolean(savedLocations.length) && (
            <ExpandContainer
              title="homeScreen.selectLocation.saved"
              expandble={false}
              actionTitle="homeScreen.selectLocation.actionTitle"
            >
              {savedLocations.map((location) => (
                <ListItem
                  key={location.title}
                  icon="pin"
                  title={location.title}
                  subtitle={location.subtitle}
                  selected={location.sightings.every((item) => item.notify)}
                  onToggle={() => handleToggle(location, "saved")}
                  withSwitch
                  // onPress={() => navigation.navigate('SettingsScreens' as never, { screen: 'AddNewLocation', defaultLocation: location } as never)}
                  ctaTx="settings.locationSettingsData.cta"
                  onCtaPress={() => handleCtaPress(location)}
                  editable
                  onDelete={() => {
                    setIsRemove(true)
                    setToRemove(location)
                  }}
                  onEdit={() => {
                    navigation.navigate(
                      "SettingsScreens" as never,
                      { screen: "AddNewLocation", defaultLocation: location } as never,
                    )
                  }}
                />
              ))}
            </ExpandContainer>
          )}
        </ScrollView>
      </View>
      <IconLinkButton
        icon="plusCircle"
        style={addButtonContainer}
        buttonStyle={$addButton}
        viewStyle={$addButton}
        iconColor={colors.palette.neutral250}
        iconSize={28}
        onPress={() =>
          navigation.navigate("SettingsScreens" as never, { screen: "AddNewLocation" } as never)
        }
      />
      {isSightings && (
        <Modal
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
            sightings={current ? getFilteredSightings(current) : []}
            timeOfDay={current?.filterTimeOfDay || ""}
            duration={current?.filterDuration || ""}
            onTimeOfDayChange={handleChangeTimeOfDay}
            onDurationChange={handleChangeDuration}
            onToggle={handleSetSightingNotification}
            onToggleAll={handleSetSightingNotificationToAll}
            isUS={i18n.locale === "en"}
            isNotifyAll={current && current.sightings.every((item) => item.notify)}
            timezone={current?.timezone || getCurrentTimeZone()}
            lastSightingOrbitPointAt={current?.lastSightingOrbitPointAt}
          />
        </Modal>
      )}
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
        <RemoveLocationModal
          onClose={() => setIsRemove(!isRemove)}
          onRemove={() => handleRemove(toRemove)}
          location={toRemove}
        />
      </Modal>
    </Screen>
  )
})

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $headerStyleOverride: TextStyle = {
    top: scale(24),
  }

  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    height: "100%",
  }

  const $modal: ViewStyle = {
    flex: 1,
    justifyContent: "flex-end",
    left: 0,
    margin: 0,
  }

  const $scrollContentContainerStyle: ViewStyle = {
    flexGrow: 1,
    paddingBottom: scale(60),
  }

  const $scrollContainer: ViewStyle = {
    paddingHorizontal: scale(18),
    paddingBottom: scale(10),
  }

  const $backButton: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 11,
  }

  const $addButton: ViewStyle = {
    width: scale(64),
    height: scale(64),
    backgroundColor: colors.palette.buttonBlue,
  }

  const $addButtonContainer: ViewStyle = {
    position: "absolute",
    alignSelf: "center",
    bottom: scale(64),
  }

  const $text: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.neutral450,
    textAlign: "left",
    paddingBottom: scale(24),
  }

  const $backButtonText: TextStyle = {
    ...$text,
    color: colors.palette.neutral250,
    paddingBottom: 0,
    paddingLeft: scale(5),
  }

  const $title: TextStyle = {
    ...$text,
    fontSize: fontSizes[36],
    lineHeight: lineHeights[44],
    color: colors.palette.neutral250,
  }

  const $scrollWrapper = { flex: 1, paddingBottom: scale(120) }
  const $refreshButton = { marginLeft: 5 }

  return {
    $headerStyleOverride,
    $container,
    $modal,
    $scrollContentContainerStyle,
    $scrollContainer,
    $backButton,
    $addButton,
    $text,
    $backButtonText,
    $title,
    $scrollWrapper,
    $addButtonContainer,
    $refreshButton,
  }
}
