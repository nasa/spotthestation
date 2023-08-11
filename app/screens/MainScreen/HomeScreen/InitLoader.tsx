import React from "react"
import { ViewStyle, View, TextStyle } from "react-native"
import { Text } from "../../../components"
import { typography } from "../../../theme"
import { colors } from "../../../theme/colors"
import { normalizeHeight } from "../../../utils/normalizeHeight"
import { StyleFn, useStyles } from "../../../utils/useStyles"

export function InitLoader() {
  const { $modalBodyContainer, $title } = useStyles(styles)
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

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $modalBodyContainer: ViewStyle = {
    backgroundColor: colors.palette.buttonBlue,
    borderRadius: scale(16),
    alignItems: "center",
    paddingVertical: 36,
    paddingHorizontal: 30,
    width: "100%",
    alignSelf: "center",
    marginTop: normalizeHeight(0.28),
  }

  const $title: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[24],
    lineHeight: lineHeights[29],
    color: colors.palette.neutral100,
    paddingBottom: 12,
    paddingTop: 18,
  }

  return { $modalBodyContainer, $title }
}
