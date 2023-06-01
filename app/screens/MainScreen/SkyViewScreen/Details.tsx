import React from "react"
import { ViewStyle, View, PressableProps, TextStyle } from "react-native"
import { Icon, Text } from "../../../components"
import { OrbitPoint } from "../../../services/api/api.types"
import { fontSizes, lineHeights, scale, typography } from "../../../theme"
import { colors } from "../../../theme/colors"
import { calculateDistance, calculateOrbitalSpeed } from "../components/helpers"

export interface DetailsProps {
  /**
   * A function for closing modal.
   */
  onClose?: PressableProps["onPress"],
  issData: OrbitPoint
  observer: [number, number]
}

export function Details({ onClose, issData, observer }: DetailsProps) {
  const distance = (data: OrbitPoint): number => {
    if (data) {
      return Math.round(calculateDistance(observer[0], observer[1], 0, data?.latitude, data?.longitude, data?.elevation)/1000)
    }
    return 0
  }
  return (
    <View style={$modalBodyContainer}>
      {Boolean(onClose) && <Icon icon="x" 
        accessible
        accessibilityLabel="x button"
        accessibilityHint="close modal"
        accessibilityRole="button"
        color={colors.palette.neutral450} 
        onPress={onClose} 
        containerStyle={$close} 
        size={36}
      />}
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
            accessibilityLabel="distance"
            accessibilityHint="distance"
            accessibilityRole="text"
            style={$detailBox}
          >
            <Text tx="issView.details.distance" style={$detailTitle} />
            <Text text={`${distance(issData)} km`} style={$detailValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="orbital Speed"
            accessibilityHint="orbital Speed"
            accessibilityRole="text"
            style={$detailBox}
          >
            <Text tx="issView.details.orbitalSpeed" style={$detailTitle} />
            <Text text={`${calculateOrbitalSpeed(issData.latitude, issData.azimuth, issData.elevation)} M/S`} style={$detailValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="longitude"
            accessibilityHint="longitude"
            accessibilityRole="text"
            style={$detailBox}
          >
            <Text tx="issView.details.longitude" style={$detailTitle} />
            <Text text={issData.longitude ? issData.longitude.toFixed(2) : "0"} style={$detailValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="latitude"
            accessibilityHint="latitude"
            accessibilityRole="text"
            style={$detailBox}
          >
            <Text tx="issView.details.latitude" style={$detailTitle} />
            <Text text={issData.latitude ? issData.latitude.toFixed(2) : "0"} style={$detailValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="altitude"
            accessibilityHint="altitude"
            accessibilityRole="text"
            style={$detailBox}
          >
            <Text tx="issView.details.altitude" style={$detailTitle} />
            <Text text={issData.altitude ? issData.altitude.toFixed(2) : "0"} style={$detailValue} />
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
            <Text text="20 November 1998" style={$detailRowValue} />
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
            <Text text="462,000 kg" style={$detailRowValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="Estimated dimensions"
            accessibilityHint="Estimated dimensions"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.dimensions" style={$detailRowTitle} />
            <Text text="109m wide x 73m long x 14m tall" style={$detailRowValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="orbital Period"
            accessibilityHint="orbital Period"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.orbitalPeriod" style={$detailRowTitle} />
            <Text text="92.9 min" style={$detailRowValue} />
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
          <View 
            accessible
            accessibilityLabel="Orbital Decay"
            accessibilityHint="Orbital Decay"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.orbitalDecay" style={$detailRowTitle} />
            <Text text="2 km / month" style={$detailRowValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="No. of orbits"
            accessibilityHint="No. of orbits"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.noOfOrbits" style={$detailRowTitle} />
            <Text text={`133,312\n(as of June 2022)`} style={$detailRowValue} />
          </View>
        </View>
      </View>
    </View>
  )
}

const $modalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  borderTopLeftRadius: scale(18),
  borderTopRightRadius: scale(18),
}

const $contentContainer: ViewStyle = {
  width: "100%",
  paddingHorizontal: scale(36),
  paddingBottom: scale(52)
}

const $buttonsContainer: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between"
}

const $close: ViewStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: scale(18),
  zIndex: 5
}

const $title: TextStyle = {
  color: colors.palette.neutral250,
  width: "95%",
  fontSize: fontSizes[32],
  fontFamily: typography.primary.normal,
  lineHeight: lineHeights[44],
  paddingBottom: scale(36),
  marginTop: scale(36)
}

const $detailBox: ViewStyle = {
  backgroundColor: colors.palette.overlayWhite,
  width: "48%",
  borderRadius: scale(10),
  padding: scale(8),
  marginBottom: scale(18)
}

const $detailTitle: TextStyle = {
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral450,
  fontSize: fontSizes[13],
  lineHeight: lineHeights[16],
  textAlign: "center",
  textTransform: "uppercase"
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
  justifyContent: "space-between"
}

const $detailRowTitle: TextStyle = {
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral450,
  fontSize: fontSizes[18],
  lineHeight: lineHeights[21],
  textAlign: "left",
}

const $detailRowValue: TextStyle = {
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral100,
  fontSize: fontSizes[18],
  lineHeight: lineHeights[21],
  textAlign: "right",
  maxWidth: scale(155)
}
