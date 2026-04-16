import { Text, ModalContainer, TrajectoryErrorModal } from "../../components"
import { StyleFn, useStyles } from "../../utils/useStyles"
import React, { useEffect, useState } from "react"
import { ViewStyle, View, TextStyle, ActivityIndicator } from "react-native"
import { observer } from "mobx-react-lite"
import { translate } from "../../i18n"

import { LocationType, OrbitPoint } from "../../services/api/api.types"
import { typography } from "../../theme"
import { colors } from "../../theme/colors"
import { useISSPosition } from "../../utils/useISSPosition"
import { useStores } from "../../models"
import { Template } from "./Template"
import { getOrbitalSpeed } from "../../utils/satellite"
import { kgToLbs, kmToMiles, msToMph, mToFt } from "../../utils/units"

export interface DetailsScreenRouteProps {}

const ISS_WIDTH = 109
const ISS_LENGTH = 73
const ISS_HEIGHT = 14
const ISS_WEIGHT = 462000

export const DetailsScreen = observer(function DetailsScreen() {
  const {
    $contentContainer,
    $buttonsContainer,
    $detailBox,
    $detailTitle,
    $detailValue,
    $detailRow,
    $detailRowTitle,
    $detailRowValue,
    $modal,
    $popupModal,
  } = useStyles(styles)

  const {
    currentLocation,
    selectedLocation,
    issData,
    getISSData,
    trajectoryError,
    trajectoryErrorKind,
    requestOpenModal,
    requestCloseModal,
    setTrajectoryError,
    units,
  } = useStores()

  const [location, setLocation] = useState<[number, number]>(null)
  const currentPosition = useISSPosition(issData as OrbitPoint[])

  const getLocation = (selectedLocation: LocationType, currentLocation: LocationType) => {
    let lat: number
    let lng: number
    if (selectedLocation) {
      lat = selectedLocation.location.lat
      lng = selectedLocation.location.lng
    } else {
      if (currentLocation) {
        lat = currentLocation.location.lat
        lng = currentLocation.location.lng
      }
    }
    if (lat && lng) setLocation([lat, lng])
  }

  const getData = async () => {
    await getISSData({ lat: location[0], lon: location[1] })
  }

  useEffect(() => {
    if (!location || !issData?.length) return undefined

    const lastOrbitPoint = issData[issData.length - 1] as OrbitPoint
    if (!lastOrbitPoint) return undefined
    const diff = new Date(lastOrbitPoint.date).valueOf() - Date.now()
    if (diff <= 0) return undefined

    const tmr = setTimeout(() => {
      getData().catch((e) => console.log(e))
    }, diff)

    return () => clearTimeout(tmr)
  }, [issData])

  useEffect(() => {
    getLocation(selectedLocation, currentLocation)
  }, [currentLocation, selectedLocation])

  useEffect(() => {
    if (!location) return
    getData().catch((e) => console.log(e))
  }, [location])

  useEffect(() => {
    if (trajectoryError) requestOpenModal("trajectoryError")
    else requestCloseModal("trajectoryError")
  }, [trajectoryError])

  const formatAltitude = () => {
    const uom = units === "imperial" ? translate("units.mile") : translate("units.kilometer")
    const altitude =
      units === "imperial"
        ? kmToMiles(currentPosition.altitude || 0)
        : currentPosition.altitude || 0
    return `${altitude.toFixed(2)} ${uom}`
  }

  const formatOrbitalSpeed = () => {
    const uom =
      units === "imperial" ? translate("units.milesPerHour") : translate("units.metersPerSecond")
    const msSpeed = getOrbitalSpeed(
      currentPosition.latitude,
      currentPosition.azimuth,
      currentPosition.elevation,
    )

    const speed = units === "imperial" ? msToMph(msSpeed) : msSpeed
    return `${speed.toFixed(2)} ${uom}`
  }

  const formatMass = () => {
    const uom = units === "imperial" ? translate("units.pound") : translate("units.kilogram")
    const mass = units === "imperial" ? Math.round(kgToLbs(ISS_WEIGHT)) : ISS_WEIGHT
    return `${mass.toLocaleString("en-US")} ${uom}`
  }

  const formatDimension = (dimension: number) => {
    const uom = units === "imperial" ? translate("units.foot") : translate("units.meter")
    const mass = units === "imperial" ? Math.round(mToFt(dimension)) : dimension
    return `${mass.toLocaleString("en-US")} ${uom}`
  }

  return (
    <Template dismissKeyboardOnPress headerTitleTx="resources.details.title">
      {!currentPosition ? (
        <ActivityIndicator />
      ) : (
        <View style={$contentContainer}>
          <View style={$buttonsContainer}>
            <View
              accessible
              accessibilityLabel="latitude"
              accessibilityHint="latitude"
              accessibilityRole="text"
              style={$detailBox}
            >
              <Text tx="issView.details.latitude" style={$detailTitle} />
              <Text
                text={currentPosition.latitude ? currentPosition.latitude.toFixed(2) : "0"}
                style={$detailValue}
              />
            </View>
            <View
              accessible
              accessibilityLabel="longitude"
              accessibilityHint="longitude"
              accessibilityRole="text"
              style={$detailBox}
            >
              <Text tx="issView.details.longitude" style={$detailTitle} />
              <Text
                text={currentPosition.longitude ? currentPosition.longitude.toFixed(2) : "0"}
                style={$detailValue}
              />
            </View>
            <View
              accessible
              accessibilityLabel="altitude"
              accessibilityHint="altitude"
              accessibilityRole="text"
              style={$detailBox}
            >
              <Text tx="issView.details.altitude" style={$detailTitle} />
              <Text text={formatAltitude()} style={$detailValue} />
            </View>
            <View
              accessible
              accessibilityLabel="orbital Speed"
              accessibilityHint="orbital Speed"
              accessibilityRole="text"
              style={$detailBox}
            >
              <Text tx="issView.details.orbitalSpeed" style={$detailTitle} />
              <Text text={formatOrbitalSpeed()} style={$detailValue} />
            </View>
          </View>
          <View style={$buttonsContainer}>
            <View
              accessible
              accessibilityLabel="Assembly Began"
              accessibilityHint="Assembly Began"
              accessibilityRole="text"
              style={$detailRow}
            >
              <Text tx="issView.details.launched" style={$detailRowTitle} />
              <Text tx="issView.details.launchedValue" style={$detailRowValue} />
            </View>
            <View
              accessible
              accessibilityLabel="crew On board"
              accessibilityHint="crew On board"
              accessibilityRole="text"
              style={$detailRow}
            >
              <Text tx="issView.details.crewOnboard" style={$detailRowTitle} />
              <Text text="7" style={$detailRowValue} />
            </View>
            <View
              accessible
              accessibilityLabel="Estimated mass"
              accessibilityHint="Estimated mass"
              accessibilityRole="text"
              style={$detailRow}
            >
              <Text tx="issView.details.mass" style={$detailRowTitle} />
              <Text text={formatMass()} style={$detailRowValue} />
            </View>
            <View
              accessible
              accessibilityLabel="Estimated dimensions"
              accessibilityHint="Estimated dimensions"
              accessibilityRole="text"
              style={$detailRow}
            >
              <Text tx="issView.details.dimensions" style={$detailRowTitle} />
              <Text
                tx="issView.details.dimensionsValue"
                txOptions={{
                  width: formatDimension(ISS_WIDTH),
                  length: formatDimension(ISS_LENGTH),
                  height: formatDimension(ISS_HEIGHT),
                }}
                style={$detailRowValue}
              />
            </View>
            <View
              accessible
              accessibilityLabel="orbital Period"
              accessibilityHint="orbital Period"
              accessibilityRole="text"
              style={$detailRow}
            >
              <Text tx="issView.details.orbitalPeriod" style={$detailRowTitle} />
              <Text text={`92.9 ${translate("units.minute")}`} style={$detailRowValue} />
            </View>
            <View
              accessible
              accessibilityLabel="orbits Per Day"
              accessibilityHint="orbits Per Day"
              accessibilityRole="text"
              style={$detailRow}
            >
              <Text tx="issView.details.orbitsPerDay" style={$detailRowTitle} />
              <Text text="15.49" style={$detailRowValue} />
            </View>
          </View>
        </View>
      )}

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
    </Template>
  )
})

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $contentContainer: ViewStyle = {
    width: "100%",
    paddingHorizontal: scale(24),
    paddingBottom: scale(24),
  }

  const $buttonsContainer: ViewStyle = {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }

  const $detailBox: ViewStyle = {
    backgroundColor: colors.palette.overlayWhite,
    width: "48%",
    borderRadius: scale(10),
    paddingVertical: scale(8),
    marginBottom: scale(18),
  }

  const $detailTitle: TextStyle = {
    fontFamily: typography.primary.normal,
    color: colors.palette.neutral450,
    fontSize: fontSizes[13],
    lineHeight: lineHeights[16],
    textAlign: "center",
    textTransform: "uppercase",
  }

  const $detailValue: TextStyle = {
    fontFamily: typography.primary.normal,
    color: colors.palette.neutral250,
    fontSize: fontSizes[22],
    lineHeight: lineHeights[28],
    textAlign: "center",
  }

  const $detailRow: ViewStyle = {
    width: "100%",
    marginBottom: scale(18),
    flexDirection: "row",
    justifyContent: "space-between",
  }

  const $detailRowTitle: TextStyle = {
    fontFamily: typography.primary.normal,
    color: colors.palette.neutral450,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[21],
    maxWidth: "80%",
    textAlign: "left",
  }

  const $detailRowValue: TextStyle = {
    fontFamily: typography.primary.normal,
    color: colors.palette.neutral100,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[21],
    textAlign: "right",
    maxWidth: scale(155),
  }

  const $modal: ViewStyle = {
    justifyContent: "flex-end",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 0,
  }

  const $popupModal: ViewStyle = { paddingHorizontal: 18, justifyContent: "flex-start" }

  return {
    $contentContainer,
    $buttonsContainer,
    $detailBox,
    $detailTitle,
    $detailValue,
    $detailRow,
    $detailRowTitle,
    $detailRowValue,
    $modal,
    $popupModal,
  }
}
