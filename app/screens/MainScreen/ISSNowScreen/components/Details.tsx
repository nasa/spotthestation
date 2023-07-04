import React, { useEffect, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Text, Toggle } from "../../../../components"
import { colors, fontSizes, scale, spacing } from "../../../../theme"
import { convertToImperial } from "../../../../utils/convertToImperial"
import { formatDate } from "../../../../utils/formatDate"

const locationDetails = {
  latitude: 100,
  longitude: 100,
  altitude: 400,
  speed: 27000,
}

export function Details() {
  const [isImperial, setIsImperial] = useState(false)
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toISOString())

  useEffect(() => {
    const secTimer = setInterval(() => {
      setCurrentDateTime(new Date().toISOString())
    }, 1000)

    return () => clearInterval(secTimer)
  }, [])

  return (
    <View style={$container}>
      <View style={[$rowContainer, $centered]}>
        <Text text={`${formatDate(currentDateTime, "dd MMM yyyy, k:mm:ss")} (EST)`} style={$text} />
      </View>
      <View style={$rowContainer}>
        <View style={$columnContainer}>
          <Text tx="issNowTab.details.latitude" style={$label} />
          <Text text={`${locationDetails.latitude} S`} style={$text} />
        </View>
        <View style={$columnContainer}>
          <Text tx="issNowTab.details.longitude" style={$label} />
          <Text text={`${locationDetails.longitude} W`} style={$text} />
        </View>
        <View style={$columnContainer}>
          <Text tx="issNowTab.details.altitude" style={$label} />
          <Text
            text={`${
              isImperial
                ? `${convertToImperial(locationDetails.altitude, "distance")} mi`
                : `${locationDetails.altitude} km"`
            }`}
            style={$text}
          />
        </View>
        <View style={$columnContainer}>
          <Text tx="issNowTab.details.speed" style={$label} />
          <Text
            text={`${
              isImperial
                ? `${convertToImperial(locationDetails.speed, "speed")} mi/h`
                : `${locationDetails.speed} km/h`
            }`}
            style={$text}
          />
        </View>
      </View>
      <View style={[$rowContainer, $centered]}>
        <Text tx="issNowTab.details.switchLabel" style={[$text, $margin]} />
        <Toggle variant="switch" onValueChange={setIsImperial} value={isImperial} />
      </View>
    </View>
  )
}

const $container: ViewStyle = {
  display: "flex",
  width: "100%",
  height: "23%",
  backgroundColor: colors.backgroundDark,
  padding: scale(spacing.medium),
}

const $centered: ViewStyle = {
  justifyContent: "center",
}

const $margin: ViewStyle = {
  marginRight: scale(spacing.extraSmall),
}

const $rowContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: scale(spacing.medium),
}

const $columnContainer: ViewStyle = {
  display: "flex",
  alignItems: "flex-start",
}

const $text: TextStyle = {
  fontSize: fontSizes[18],
  color: colors.palette.neutral100,
}

const $label: TextStyle = {
  fontSize: fontSizes[16],
  fontWeight: "bold",
  color: colors.palette.neutral100,
}
