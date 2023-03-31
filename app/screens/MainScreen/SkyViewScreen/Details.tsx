import React from "react"
import { ViewStyle, View, PressableProps, TextStyle } from "react-native"
import { Icon, Text } from "../../../components"
import { typography } from "../../../theme"
import { colors } from "../../../theme/colors"

export interface DetailsProps {
  /**
   * A function for closing modal.
   */
  onClose?: PressableProps["onPress"]
}

export function Details({ onClose }: DetailsProps) {
  
  return (
    <View style={$modalBodyContainer}>
      <Icon icon="x" color={colors.palette.neutral450} onPress={onClose} containerStyle={$close} />
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
            <Text text="125 km" style={$detailValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="orbital Speed"
            accessibilityHint="orbital Speed"
            accessibilityRole="text"
            style={$detailBox}
          >
            <Text tx="issView.details.orbitalSpeed" style={$detailTitle} />
            <Text text="125 km" style={$detailValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="longitude"
            accessibilityHint="longitude"
            accessibilityRole="text"
            style={$detailBox}
          >
            <Text tx="issView.details.longitude" style={$detailTitle} />
            <Text text="125 km" style={$detailValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="latitude"
            accessibilityHint="latitude"
            accessibilityRole="text"
            style={$detailBox}
          >
            <Text tx="issView.details.latitude" style={$detailTitle} />
            <Text text="125 km" style={$detailValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="altitude"
            accessibilityHint="altitude"
            accessibilityRole="text"
            style={$detailBox}
          >
            <Text tx="issView.details.altitude" style={$detailTitle} />
            <Text text="125 km" style={$detailValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="crew On board"
            accessibilityHint="crew On board"
            accessibilityRole="text"
            style={$detailBox}
          >
            <Text tx="issView.details.crewOnboard" style={$detailTitle} />
            <Text text="7" style={$detailValue} />
          </View>
        </View>
        <View style={$buttonsContainer}>
          <View 
            accessible
            accessibilityLabel="launched"
            accessibilityHint="launched"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.launched" style={$detailRowTitle} />
            <Text text="20 November 1998 (23 yrs ago)" style={$detailRowValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="mass"
            accessibilityHint="mass"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.mass" style={$detailRowTitle} />
            <Text text="444,615 kg" style={$detailRowValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="length"
            accessibilityHint="length"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.length" style={$detailRowTitle} />
            <Text text="73.0 m" style={$detailRowValue} />
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
            accessibilityLabel="launched"
            accessibilityHint="launched"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.launched" style={$detailRowTitle} />
            <Text text="2 km / month" style={$detailRowValue} />
          </View>
          <View 
            accessible
            accessibilityLabel="launched"
            accessibilityHint="launched"
            accessibilityRole="text"
            style={$detailRow}
          >
            <Text tx="issView.details.launched" style={$detailRowTitle} />
            <Text text={`133,312\n(as of June 2022)`} style={$detailRowValue} />
          </View>
        </View>
      </View>
    </View>
  )
}

const $modalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  borderTopLeftRadius: 18,
  borderTopRightRadius: 18,
}

const $contentContainer: ViewStyle = {
  width: "100%",
  paddingHorizontal: 36,
  paddingBottom: 52
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
  padding: 18
}

const $title: TextStyle = {
  color: colors.palette.neutral250,
  width: "95%",
  fontSize: 36,
  fontFamily: typography.primary.normal,
  lineHeight: 44,
  paddingBottom: 36,
  marginTop: 36
}

const $detailBox: ViewStyle = {
  backgroundColor: colors.palette.overlayWhite,
  width: "48%",
  borderRadius: 10,
  padding: 8,
  marginBottom: 18
}

const $detailTitle: TextStyle = {
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral450,
  fontSize: 13,
  lineHeight: 16,
  textAlign: "center",
  textTransform: "uppercase"
}

const $detailValue: TextStyle = {
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral250,
  fontSize: 32,
  lineHeight: 39,
  textAlign: "center",
}

const $detailRow: ViewStyle = {
  width: "100%",
  marginBottom: 18,
  flexDirection: "row",
  justifyContent: "space-between"
}

const $detailRowTitle: TextStyle = {
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral450,
  fontSize: 18,
  lineHeight: 21,
  textAlign: "left",
}

const $detailRowValue: TextStyle = {
  fontFamily: typography.primary.normal,
  color: colors.palette.neutral100,
  fontSize: 18,
  lineHeight: 21,
  textAlign: "right",
  maxWidth: 155
}
