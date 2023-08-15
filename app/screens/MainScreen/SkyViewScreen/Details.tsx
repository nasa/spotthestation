import { StyleFn, useStyles } from "../../../utils/useStyles"
import React, { useEffect, useState } from "react"
import { ViewStyle, View, PressableProps, TextStyle } from "react-native"
import { translate } from "../../../i18n"
import { Icon, Text } from "../../../components"
import { OrbitPoint } from "../../../services/api/api.types"
import { typography } from "../../../theme"
import { colors } from "../../../theme/colors"
import { calculateOrbitalSpeed } from "../components/helpers"

export interface DetailsProps {
  /**
   * A function for closing modal.
   */
  onClose?: PressableProps["onPress"]
  issData: OrbitPoint[]
  observer: [number, number]
}

export function Details({ onClose, issData }: DetailsProps) {
  const {
    $modalBodyContainer,
    $contentContainer,
    $buttonsContainer,
    $close,
    $title,
    $detailBox,
    $detailTitle,
    $detailValue,
    $detailRow,
    $detailRowTitle,
    $detailRowValue,
  } = useStyles(styles)

  const [currentPosition, setCurrentPosition] = useState<OrbitPoint>(null)

  useEffect(() => {
    if (!issData) {
      setCurrentPosition(null)
      return undefined
    }

    const interpolate = (t: number, p1: number, p2: number) => (p2 - p1) * t + p1
    const interpolateLongitude = (t: number, p1: number, p2: number) => {
      if (p1 > 90 && p1 <= 180 && p2 >= -180 && p2 < -90) {
        const res = interpolate(t, p1, p2 + 360)
        return res > 180 ? res - 360 : res
      }

      if (p2 > 90 && p2 <= 180 && p1 >= -180 && p1 < -90) {
        const res = interpolate(t, p1 + 360, p2)
        return res > 180 ? res - 360 : res
      }

      return interpolate(t, p1, p2)
    }

    const interpolateAzimuth = (t: number, p1: number, p2: number) => {
      if (p1 > 270 && p1 <= 360 && p2 >= 0 && p2 < 90) {
        const res = interpolate(t, p1 - 360, p2)
        return res < 0 ? 360 + res : res
      }

      if (p2 > 270 && p2 <= 360 && p1 >= 0 && p1 < 90) {
        const res = interpolate(t, p1, p2 - 360)
        return res < 0 ? 360 + res : res
      }

      return interpolate(t, p1, p2)
    }

    const update = () => {
      if (!issData.length) return

      const idx = issData.findIndex((point) => {
        return new Date().valueOf() < new Date(point.date).valueOf()
      })

      if (idx < 1) return

      const pt1 = issData[idx - 1]
      const pt2 = issData[idx]
      const t =
        (Date.now() - new Date(pt1.date).valueOf()) /
        (new Date(pt2.date).valueOf() - new Date(pt1.date).valueOf())

      setCurrentPosition({
        altitude: interpolate(t, pt1.altitude, pt2.altitude),
        latitude: interpolate(t, pt1.latitude, pt2.latitude),
        longitude: interpolateLongitude(t, pt1.longitude, pt2.longitude),
        elevation: interpolate(t, pt1.elevation, pt2.elevation),
        azimuth: interpolateAzimuth(t, pt1.azimuth, pt2.azimuth),
        date: new Date().toDateString(),
      })
    }
    update()

    const timeout = setInterval(update, 10000)
    return () => {
      clearInterval(timeout)
    }
  }, [issData])

  if (!currentPosition) return null

  return (
    <View style={$modalBodyContainer}>
      {Boolean(onClose) && (
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
      )}
      <View style={$contentContainer}>
        <Text
          accessible
          accessibilityLabel="modal title"
          accessibilityHint="modal title"
          accessibilityRole="text"
          tx="issView.details.title"
          style={$title}
        />
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
            <Text
              text={
                currentPosition.altitude
                  ? `${currentPosition.altitude.toFixed(2)} ${translate("units.kilometer")}`
                  : `"0 ${translate("units.kilometer")}"`
              }
              style={$detailValue}
            />
          </View>
          <View
            accessible
            accessibilityLabel="orbital Speed"
            accessibilityHint="orbital Speed"
            accessibilityRole="text"
            style={$detailBox}
          >
            <Text tx="issView.details.orbitalSpeed" style={$detailTitle} />
            <Text
              text={`${calculateOrbitalSpeed(
                currentPosition.latitude,
                currentPosition.azimuth,
                currentPosition.elevation,
              )} ${translate("units.metersPerSecond")}`}
              style={$detailValue}
            />
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
            <Text text={`462,000 ${translate("units.kilogram")}`} style={$detailRowValue} />
          </View>
          <View
            accessible
            accessibilityLabel="Estimated dimensions"
            accessibilityHint="Estimated dimensions"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.dimensions" style={$detailRowTitle} />
            <Text tx="issView.details.dimensionsValue" style={$detailRowValue} />
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
    </View>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $modalBodyContainer: ViewStyle = {
    backgroundColor: colors.palette.neutral350,
    borderTopLeftRadius: scale(18),
    borderTopRightRadius: scale(18),
  }

  const $contentContainer: ViewStyle = {
    width: "100%",
    paddingHorizontal: scale(36),
    paddingBottom: scale(52),
  }

  const $buttonsContainer: ViewStyle = {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }

  const $close: ViewStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    padding: scale(18),
    zIndex: 5,
  }

  const $title: TextStyle = {
    color: colors.palette.neutral250,
    width: "95%",
    fontSize: fontSizes[32],
    fontFamily: typography.primary.normal,
    lineHeight: lineHeights[44],
    paddingBottom: scale(36),
    marginTop: scale(36),
  }

  const $detailBox: ViewStyle = {
    backgroundColor: colors.palette.overlayWhite,
    width: "48%",
    borderRadius: scale(10),
    padding: scale(8),
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

  return {
    $modalBodyContainer,
    $contentContainer,
    $buttonsContainer,
    $close,
    $title,
    $detailBox,
    $detailTitle,
    $detailValue,
    $detailRow,
    $detailRowTitle,
    $detailRowValue,
  }
}
