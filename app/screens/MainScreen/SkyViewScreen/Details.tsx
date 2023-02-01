import React from "react"
import { ViewStyle, View, Pressable, PressableProps, TextStyle } from "react-native"
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
      <Pressable
        style={$close}
        onPress={onClose}
      >
        <Icon icon="x" color={colors.palette.neutral450} />
      </Pressable>
      <View style={$contentContainer}>
        <Text tx="skyView.details.title" style={$title} />
        <View style={$buttonsContainer}>
          <View style={$detailBox}>
            <Text tx="skyView.details.distance" style={$detailTitle} />
            <Text text="125 km" style={$detailValue} />
          </View>
          <View style={$detailBox}>
            <Text tx="skyView.details.orbitalSpeed" style={$detailTitle} />
            <Text text="125 km" style={$detailValue} />
          </View>
          <View style={$detailBox}>
            <Text tx="skyView.details.longitude" style={$detailTitle} />
            <Text text="125 km" style={$detailValue} />
          </View>
          <View style={$detailBox}>
            <Text tx="skyView.details.latitude" style={$detailTitle} />
            <Text text="125 km" style={$detailValue} />
          </View>
          <View style={$detailBox}>
            <Text tx="skyView.details.altitude" style={$detailTitle} />
            <Text text="125 km" style={$detailValue} />
          </View>
          <View style={$detailBox}>
            <Text tx="skyView.details.crewOnboard" style={$detailTitle} />
            <Text text="7" style={$detailValue} />
          </View>
        </View>
        <View style={$buttonsContainer}>
          <View style={$detailRow}>
            <Text tx="skyView.details.launched" style={$detailRowTitle} />
            <Text text="20 November 1998 (23 yrs ago)" style={$detailRowValue} />
          </View>
          <View style={$detailRow}>
            <Text tx="skyView.details.mass" style={$detailRowTitle} />
            <Text text="444,615 kg" style={$detailRowValue} />
          </View>
          <View style={$detailRow}>
            <Text tx="skyView.details.length" style={$detailRowTitle} />
            <Text text="73.0 m" style={$detailRowValue} />
          </View>
          <View style={$detailRow}>
            <Text tx="skyView.details.orbitalPeriod" style={$detailRowTitle} />
            <Text text="92.9 min" style={$detailRowValue} />
          </View>
          <View style={$detailRow}>
            <Text tx="skyView.details.orbitsPerDay" style={$detailRowTitle} />
            <Text text="15.49" style={$detailRowValue} />
          </View>
          <View style={$detailRow}>
            <Text tx="skyView.details.launched" style={$detailRowTitle} />
            <Text text="2 km / month" style={$detailRowValue} />
          </View>
          <View style={$detailRow}>
            <Text tx="skyView.details.launched" style={$detailRowTitle} />
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