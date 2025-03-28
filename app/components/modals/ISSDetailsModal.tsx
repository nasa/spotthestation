import { Icon, Text } from ".."
import { StyleFn, useStyles } from "../../utils/useStyles"
import React, { memo } from "react"
import { ViewStyle, View, PressableProps, TextStyle, ScrollView, Pressable } from "react-native"

import { colors, typography } from "../../theme"
import { translate } from "../../i18n"
import { useISSPosition } from "../../utils/useISSPosition"
import { LocationType, OrbitPoint } from "../../services/api"
import { useCurrentSighting } from "../../utils/useCurrentSighting"
import { formatDateWithTZ, getCurrentTimeZone, getShortTZ } from "../../utils/datetime"
import i18n from "i18n-js"
import { getOrbitalSpeed } from "../../utils/satellite"
import { headingToCompass, sphericalDistance } from "../../utils/geometry"
import { kmToMiles, msToMph } from "../../utils/units"

export interface ISSDetailsModalProps {
  onClose?: PressableProps["onPress"]
  issData: OrbitPoint[]
  location: LocationType
  onLinkPress?: PressableProps["onPress"]
  timeFormat: string
  units: string
}

export const ISSDetailsModal = memo(function DetailsModal({
  issData,
  location,
  timeFormat,
  units,
  onClose,
  onLinkPress,
}: ISSDetailsModalProps) {
  const {
    $modalBodyContainer,
    $modalBody,
    $contentContainer,
    $modalHeader,
    $close,
    $title,
    $buttonsContainer,
    $detailBox,
    $detailTitle,
    $detailValue,
    $detailRow,
    $detailRowTitle,
    $detailRowValue,
    $center,
    $subtitle,
    $link,
  } = useStyles(styles)

  const currentPosition = useISSPosition(issData)
  const currentSighting = useCurrentSighting(location)

  const distance = (data: OrbitPoint): number => {
    if (data) {
      return (
        sphericalDistance(
          location.location.lat,
          location.location.lng,
          0,
          data.latitude,
          data.longitude,
          data.altitude * 1000,
        ) / 1000
      )
    }
    return 0
  }

  const formatedDate = (date: string): string => {
    const tf = timeFormat === "24hour" ? "H:mm" : "h:mm aa"
    const shortTZ = getShortTZ(location.timezone || getCurrentTimeZone())
    return `${formatDateWithTZ(
      date,
      `${i18n.locale === "en" ? "MMM dd, yyyy" : "dd MMM yyyy"}, ${tf}`,
      location.timezone || getCurrentTimeZone(),
    )} ${shortTZ}`
  }

  const formatAltitude = () => {
    if (!currentPosition) return "-"
    const uom = units === "imperial" ? translate("units.mile") : translate("units.kilometer")
    const altitude =
      units === "imperial" ? kmToMiles(currentPosition.altitude) : currentPosition.altitude
    return `${altitude.toFixed(2)} ${uom}`
  }

  const formatDistance = () => {
    if (!currentPosition) return "-"

    const uom = units === "imperial" ? translate("units.mile") : translate("units.kilometer")
    const kmDistance = distance(currentPosition)
    return `${(units === "imperial" ? kmToMiles(kmDistance) : kmDistance).toFixed(2)} ${uom}`
  }

  const formatOrbitalSpeed = () => {
    if (!currentPosition) return "-"

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

  return (
    <View style={$modalBodyContainer}>
      <View style={$modalHeader}>
        <Icon
          icon="x"
          accessible
          accessibilityLabel="x button"
          accessibilityHint="close modal"
          accessibilityRole="button"
          color={colors.palette.neutral450}
          onPress={onClose}
          containerStyle={$close}
          size={36}
        />
        <Text
          accessible
          accessibilityLabel="title"
          accessibilityHint="title"
          accessibilityRole="text"
          tx="issView.details.title"
          style={$title}
        />
      </View>
      <ScrollView style={$modalBody} contentContainerStyle={$contentContainer}>
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
              text={currentPosition?.latitude ? currentPosition.latitude.toFixed(2) : "0"}
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
              text={currentPosition?.longitude ? currentPosition.longitude.toFixed(2) : "0"}
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
            accessibilityLabel="distance"
            accessibilityHint="distance"
            accessibilityRole="text"
            style={$detailBox}
          >
            <Text tx="issView.details.distance" style={$detailTitle} />
            <Text text={formatDistance()} style={$detailValue} />
          </View>
        </View>
        <View style={[$buttonsContainer, $center]}>
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
        <Text
          accessible
          accessibilityLabel="Next Sighting"
          accessibilityHint="Next Sighting"
          accessibilityRole="text"
          tx="issView.details.nextSighting"
          style={$subtitle}
        />
        <View style={$buttonsContainer}>
          <View
            accessible
            accessibilityLabel="Date and Time"
            accessibilityHint="Date and Time"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.dateTime" style={$detailRowTitle} />
            <Text
              text={currentSighting.date ? formatedDate(currentSighting.date) : "-"}
              style={$detailRowValue}
            />
          </View>

          <View
            accessible
            accessibilityLabel="Max Height"
            accessibilityHint="Max Height"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.maxHeight" style={$detailRowTitle} />
            <Text
              text={currentSighting.date ? `${currentSighting.maxHeight}°` : "-"}
              style={$detailRowValue}
            />
          </View>

          <View
            accessible
            accessibilityLabel="Duration Above Horizon"
            accessibilityHint="Duration Above Horizon"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.duration" style={$detailRowTitle} />
            <Text
              text={
                currentSighting.date
                  ? `${currentSighting.visible} ${translate("units.minute")}`
                  : "-"
              }
              style={$detailRowValue}
            />
          </View>

          <View
            accessible
            accessibilityLabel="Appears"
            accessibilityHint="Appears"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.appears" style={$detailRowTitle} />
            <Text
              text={
                currentSighting.date
                  ? `${currentSighting.minAltitude}° ${translate(
                      `homeScreen.selectSightings.compass.${headingToCompass(
                        currentSighting.minAzimuth,
                      )}`,
                    )}`
                  : "-"
              }
              style={$detailRowValue}
            />
          </View>

          <View
            accessible
            accessibilityLabel="Disappears"
            accessibilityHint="Disappears"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.disappears" style={$detailRowTitle} />
            <Text
              text={
                currentSighting.date
                  ? `${currentSighting.maxAltitude}° ${translate(
                      `homeScreen.selectSightings.compass.${headingToCompass(
                        currentSighting.maxAzimuth,
                      )}`,
                    )}`
                  : "-"
              }
              style={$detailRowValue}
            />
          </View>
        </View>
        <Pressable onPress={onLinkPress}>
          <Text style={$link} text="How Do I Spot The Station?" />
        </Pressable>
      </ScrollView>
    </View>
  )
})

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $modalBodyContainer: ViewStyle = {
    backgroundColor: colors.palette.overlay80,
    borderRadius: scale(18),
    maxHeight: "100%",
  }

  const $modalHeader: ViewStyle = {
    flexDirection: "row",
    paddingHorizontal: scale(36),
    paddingBottom: scale(15),
  }

  const $modalBody: ViewStyle = {
    width: "100%",
    maxHeight: "100%",
  }

  const $contentContainer: ViewStyle = {
    paddingBottom: scale(24),
    paddingHorizontal: scale(36),
  }

  const $close: ViewStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    padding: scale(18),
    zIndex: 5,
  }

  const $title: TextStyle = {
    marginTop: scale(10),
    marginBottom: scale(10),
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[28],
    lineHeight: lineHeights[44],
    color: colors.palette.neutral250,
  }

  const $subtitle: TextStyle = {
    marginTop: scale(10),
    marginBottom: scale(10),
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[22],
    lineHeight: lineHeights[39],
    color: colors.palette.neutral250,
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
  }

  const $center: TextStyle = {
    justifyContent: "center",
  }

  const $link: TextStyle = {
    color: colors.palette.neutral100,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[21],
    textDecorationLine: "underline",
    textAlign: "center",
  }

  return {
    $modalBodyContainer,
    $modalBody,
    $contentContainer,
    $modalHeader,
    $close,
    $title,
    $subtitle,
    $buttonsContainer,
    $detailBox,
    $detailTitle,
    $detailValue,
    $detailRow,
    $detailRowTitle,
    $detailRowValue,
    $center,
    $link,
  }
}
