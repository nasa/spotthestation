import React from "react"
import { ViewStyle, View, PressableProps, TextStyle, ScrollView } from "react-native"

import { Icon, Text, IconTypes, Toggle } from "../../../components"
import { colors, fontSizes, lineHeights, scale, typography } from "../../../theme"
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
  isNotifyAll?: boolean
  timezone?: string
  onClose?: PressableProps["onPress"]
  onToggle?: (values: ISSSighting) => void
  onToggleAll?: (value: boolean) => void
}

export function Sightings({ onClose, sightings, onToggle, onToggleAll, isUS, isNotifyAll, timezone }: SightingsProps) {
  const $marginTop = useSafeAreaInsetsStyle(["top"], "margin")
  const $paddingBottom = useSafeAreaInsetsStyle(["bottom"], "padding")

  const formatedDate = (date: string): string => {
    const timeFormat = getCalendars()[0].uses24hourClock ? "H:mm" : "h:mm aa"
    
    if (isToday(new Date(date))) return `Today, ${formatDate(date, timeFormat)} ${timezone}`
    if (isTomorrow(new Date(date))) return `Tomorrow, ${formatDate(date, timeFormat)} ${timezone}`
    return `${formatDate(date, `${isUS ? "MMM dd, yyyy" : "dd MMM yyyy"}, ${timeFormat}`)} ${timezone}`
  }

  const setStageIcon = (stage): { icon: IconTypes, color: string} => {
    switch(stage) {
      case 0: return { icon: 'moon', color: colors.palette.neutral450 }
      case 1: return { icon: 'sunset', color: colors.palette.nasaOrange }
      case 2: return { icon: 'sun', color: colors.palette.yellow }
      default: return { icon: 'sunset', color: colors.palette.nasaOrange }
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
        size={36}
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
      <View style={$switchContainer}>
        <Text tx="homeScreen.selectSightings.switch" style={$label} />
        <Toggle
          accessible
          accessibilityLabel="switch button"
          accessibilityHint="toggle notifications"
          variant="switch" 
          value={isNotifyAll} 
          onValueChange={() => {
            onToggleAll(!isNotifyAll)
          }}
        />
      </View>
      <View style={$scrollContainer}>
        <ExpandContainer title="homeScreen.selectSightings.sightings" expandble={false} reverseTitle>
          <ScrollView
            accessible
            accessibilityLabel="Sightings scrollable area"
            accessibilityHint="Sightings scrollable area"
            accessibilityRole="scrollbar"
          >
            {[...sightings].filter(item => new Date(item.date) > new Date(new Date().getTime() - (24 * 60 * 60 * 1000))).map((sighting: ISSSighting) =>
              <ListItem
                key={sighting.date}
                icon="clock"
                secondIcon={setStageIcon(sighting.dayStage)}
                title={formatedDate(sighting.date)}
                selected={sighting.notify}
                subtitle={`Above the horizon ${sighting.visible} min`}
                withSwitch
                onToggle={() => onToggle(sighting)}
              />
            )}
          </ScrollView>
        </ExpandContainer>
      </View>
    </View>
  )
}

const $modalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  borderTopLeftRadius: scale(18),
  borderTopRightRadius: scale(18),
  flex: 1
}

const $scrollContainer: ViewStyle = {
  paddingHorizontal: scale(36),
  flex: 1,
  paddingBottom: scale(30)
}

const $close: ViewStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: scale(18),
  zIndex: 5
}

const $title: TextStyle = {
  marginTop: scale(10),
  marginBottom: scale(10),
  fontFamily: typography.primary?.normal,
  fontSize: fontSizes[28],
  lineHeight: lineHeights[44],
  color: colors.palette.neutral250,
  paddingHorizontal: scale(36),
}

const $selectMessageText: TextStyle = {
  width: "95%",
  fontFamily: typography.primary?.normal,
  fontSize: fontSizes[18],
  lineHeight: lineHeights[22],
  color: colors.palette.neutral100,
  paddingHorizontal: scale(36),
}

const $switchContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  borderBottomColor: colors.palette.neutral350,
  paddingHorizontal: scale(36),
  paddingTop: scale(15),
}

const $label: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: fontSizes[16],
  fontFamily: typography.primary.normal,
  lineHeight: lineHeights[21],
  width: '80%'
}
