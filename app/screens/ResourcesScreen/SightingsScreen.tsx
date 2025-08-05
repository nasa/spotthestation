import { InitLoaderModal, ModalContainer, Sightings, TrajectoryErrorModal } from "../../components"
import { StyleFn, useStyles } from "../../utils/useStyles"
import React, { useCallback, useEffect, useMemo } from "react"
import { ViewStyle, Platform, View } from "react-native"
import { observer } from "mobx-react-lite"

import { useStores } from "../../models"
import { Template } from "./Template"
import i18n from "i18n-js"
import { getCurrentTimeZone } from "../../utils/datetime"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"

export interface SightingsScreenRouteProps {}

export const SightingsScreen = observer(function DetailsScreen() {
  const { $modal, $popupModal, $sightings, $sightingsContainer } = useStyles(styles)

  const $topInsetMargin = useSafeAreaInsetsStyle(["top", "bottom"], "margin")

  const {
    currentLocation,
    selectedLocation,
    trajectoryError,
    trajectoryErrorKind,
    requestOpenModal,
    requestCloseModal,
    setTrajectoryError,
    timeFormat,
    getFilteredSightings,
    setSightingsTimeOfDay,
    setSightingsDuration,
    setSightingsMaxHeight,
    setSightingsCloudCover,
    setISSSightings,
    getISSSightings,
  } = useStores()

  const current = useMemo(
    () => selectedLocation || currentLocation,
    [selectedLocation, currentLocation],
  )

  useEffect(() => {
    if (
      !current.lastUpdatedAt ||
      new Date().valueOf() - new Date(current.lastUpdatedAt).valueOf() > 24 * 60 * 60 * 1000
    ) {
      requestOpenModal("loader")
      getISSSightings(current)
        .then(() => requestCloseModal("loader"))
        .catch(console.error)
    }
  }, [current])

  const filteredSightings = useMemo(() => (current ? getFilteredSightings(current) : []), [current])

  useEffect(() => {
    if (trajectoryError) requestOpenModal("trajectoryError")
    else requestCloseModal("trajectoryError")
  }, [trajectoryError])

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

  const handleChangeMaxHeight = useCallback(
    (value: string) => {
      setSightingsMaxHeight(current, value)
    },
    [current],
  )

  const handleChangeCloudCover = useCallback(
    (value: string) => {
      setSightingsCloudCover(current, value)
    },
    [current],
  )

  return (
    <Template dismissKeyboardOnPress hasHeader={false}>
      <View style={$sightingsContainer}>
        <Sightings
          style={$sightings}
          location={current}
          timeFormat={timeFormat}
          sightings={filteredSightings}
          timeOfDay={current?.filterTimeOfDay || ""}
          duration={current?.filterDuration || ""}
          maxHeight={current?.filterMaxHeight || ""}
          cloudCover={current?.filterCloudCover || ""}
          onCloudCoverChange={handleChangeCloudCover}
          onTimeOfDayChange={handleChangeTimeOfDay}
          onDurationChange={handleChangeDuration}
          onMaxHeightChange={handleChangeMaxHeight}
          onToggle={handleSetSightingNotification}
          onToggleAll={handleSetSightingNotificationToAll}
          isUS={i18n.locale === "en"}
          isNotifyAll={current && current?.sightings.every((item) => item.notify)}
          timezone={current?.timezone || getCurrentTimeZone()}
          lastSightingOrbitPointAt={current?.lastSightingOrbitPointAt}
          hasPastSightings
          hasCloseButton={false}
        />
      </View>

      <ModalContainer
        name="trajectoryError"
        useNativeDriver={false}
        useNativeDriverForBackdrop
        backdropOpacity={0.85}
        style={[$modal, $popupModal]}
      >
        <TrajectoryErrorModal
          kind={trajectoryErrorKind}
          onDismiss={() => {
            setTrajectoryError(false)
          }}
        />
      </ModalContainer>

      <ModalContainer
        name="loader"
        useNativeDriver={false}
        useNativeDriverForBackdrop
        backdropOpacity={0.85}
        style={[$modal, $popupModal, Platform.OS === "ios" && $topInsetMargin]}
      >
        <InitLoaderModal />
      </ModalContainer>
    </Template>
  )
})

const styles: StyleFn = ({ scale }) => {
  const $modal: ViewStyle = {
    flex: 1,
    justifyContent: "flex-end",
    left: 0,
    margin: 0,
  }

  const $popupModal: ViewStyle = { paddingHorizontal: 18, justifyContent: "flex-start" }

  const $sightings: ViewStyle = {
    backgroundColor: "transparent",
    marginTop: 0,
  }

  const $sightingsContainer = {
    flex: 1,
    marginHorizontal: -scale(18),
  }

  return {
    $modal,
    $popupModal,
    $sightings,
    $sightingsContainer,
  }
}
