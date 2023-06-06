import React from "react"
import { ViewStyle, View, TextStyle } from "react-native"
import { Text } from "../../../components"
import { fontSizes, lineHeights, scale, typography } from "../../../theme"
import { colors } from "../../../theme/colors"
import { normalizeHeight } from "../../../utils/normalizeHeight"

export function InitLoader() {
  return (
    <View 
      accessible
      accessibilityLabel="coach mark"
      accessibilityHint="coach mark"
      accessibilityRole="text"
      style={$modalBodyContainer}
    >
      <Text tx="homeScreen.initLoader.message" style={$title} />
    </View>
  )
}

const $modalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: scale(16),
  alignItems: 'center',
  paddingVertical: 36,
  paddingHorizontal: 30,
  width: '100%',
  alignSelf: 'center',
  marginTop: normalizeHeight(.28)
}

const $title: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: fontSizes[24],
  lineHeight: lineHeights[29],
  color: colors.palette.neutral100,
  paddingBottom: 12,
  paddingTop: 18
}
