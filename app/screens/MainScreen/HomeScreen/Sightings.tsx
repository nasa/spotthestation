import React from "react"
import { ViewStyle, View, PressableProps, TextStyle, ScrollView } from "react-native"

import { Icon, Text, IconTypes } from "../../../components"
import { colors, typography } from "../../../theme"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { isToday, isTomorrow } from "date-fns"
import { formatDate } from "../../../utils/formatDate"
import { ISSSighting } from "../../../services/api"
import { getCalendars } from 'expo-localization'

export interface SightingsProps {
  sightings: ISSSighting[]
  isUS?: boolean
  onClose?: PressableProps["onPress"]
  onToggle?: (values: ISSSighting) => void
}

export function Sightings({ onClose, sightings, onToggle, isUS }: SightingsProps) {
  const $marginTop = useSafeAreaInsetsStyle(["top"], "margin")
  const $paddingBottom = useSafeAreaInsetsStyle(["bottom"], "padding")

  const formatedDate = (date: string): string => {
    const timeFormat = getCalendars()[0].uses24hourClock ? "H:mm" : "h:mm aa"
    
    if (isToday(new Date(date))) return `Today, ${formatDate(date, timeFormat)}`
    if (isTomorrow(new Date(date))) return `Tomorrow, ${formatDate(date, timeFormat)}`
    return formatDate(date, `${isUS ? "MMM dd, yyyy" : "dd MMM yyyy"}, ${timeFormat}`)
  }

  const setStageIcon = (stage): IconTypes => {
    switch(stage) {
      case 0: return 'moon'
      case 1: return 'sunset'
      case 2: return 'sun'
      default: return 'sunset'
    }
  }

  return (
    <View style={[$modalBodyContainer, $marginTop, $paddingBottom]}>
      <Icon icon="x" 
        accessible
        accessibilityLabel="x button"
        accessibilityHint="close modal"
        accessibilityRole="button"
        color={colors.palette.neutral450} 
        onPress={onClose} 
        containerStyle={$close} 
      />
      <Text
        accessible
        accessibilityLabel="title"
        accessibilityHint="title"
        accessibilityRole="text"
        tx="homeScreen.selectSightings.title"
        style={$title}
      />
      <Text
        accessible
        accessibilityLabel="title"
        accessibilityHint="title"
        accessibilityRole="text"
        tx="homeScreen.selectSightings.selectMessage"
        style={$selectMessageText}
      />
      <ScrollView
        accessible
        accessibilityLabel="Sightings scrollable area"
        accessibilityHint="Sightings scrollable area"
        accessibilityRole="scrollbar"
        style={$scrollContainer}
      >
        <ExpandContainer title="homeScreen.selectSightings.sightings" expandble={false}>
          {[...sightings].filter(item => new Date(item.date) > new Date(new Date().getTime() - (24 * 60 * 60 * 1000))).map((sighting: ISSSighting) =>
            <ListItem
              key={sighting.date}
              icon="clock"
              secondIcon={setStageIcon(sighting.dayStage)}
              title={formatedDate(sighting.date)}
              selected={sighting.notify}
              subtitle={`Visible for ${sighting.visible} min`}
              withSwitch
              onToggle={() => onToggle(sighting)}
            />
          )}
        </ExpandContainer>
      </ScrollView>
    </View>
  )
}

const $modalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  borderTopLeftRadius: 18,
  borderTopRightRadius: 18,
  flex: 1
}

const $scrollContainer: ViewStyle = {
  paddingHorizontal: 36
}

const $close: ViewStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: 18,
  zIndex: 5
}

const $title: TextStyle = {
  marginTop: 10,
  marginBottom: 10,
  fontFamily: typography.primary?.normal,
  fontSize: 28,
  lineHeight: 44,
  color: colors.palette.neutral250,
  paddingHorizontal: 36,
}

const $selectMessageText: TextStyle = {
  width: "95%",
  fontFamily: typography.primary?.normal,
  fontSize: 18,
  lineHeight: 22,
  color: colors.palette.neutral100,
  paddingHorizontal: 36,
}
