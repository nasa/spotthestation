import React from "react"
import { ViewStyle, View, Pressable, PressableProps, TextStyle, ScrollView } from "react-native"

import { Icon, Text, Button } from "../../../components"
import { colors, typography } from "../../../theme"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { isToday, isTomorrow } from "date-fns"
import { formatDate } from "../../../utils/formatDate"
import { ISSSighting } from "../../../services/api"

export interface SightingsProps {
  sightings: ISSSighting[]
  onClose?: PressableProps["onPress"]
}

export function Sightings({ onClose, sightings }: SightingsProps) {
  const $marginTop = useSafeAreaInsetsStyle(["top"], "margin")
  const $paddingBottom = useSafeAreaInsetsStyle(["bottom"], "padding")

  const formatedDate = (date: string): string => {
    if (isToday(new Date(date))) return `Today, ${formatDate(date, "H:mm aa")}`
    if (isTomorrow(new Date(date))) return `Tomorrow, ${formatDate(date, "H:mm aa")}`
    return formatDate(date, "eeee, MMM d, H:mm aa")
  }

  return (
    <View style={[$modalBodyContainer, $marginTop, $paddingBottom]}>
      <Pressable
        accessible
        accessibilityLabel="x button"
        accessibilityHint="close modal"
        accessibilityRole="button"
        style={$close}
        onPress={onClose}
      >
        <Icon icon="x" color={colors.palette.neutral450} />
      </Pressable>
      <Text
        accessible
        accessibilityLabel="title"
        accessibilityHint="title"
        accessibilityRole="text"
        tx="homeScreen.selectSightings.title" 
        style={$title}
      />
      <ScrollView
        accessible
        accessibilityLabel="Sightings scrollable area"
        accessibilityHint="Sightings scrollable area"
        accessibilityRole="scrollbar"
        style={$scrollContainer}
      >
        <ExpandContainer title="homeScreen.selectSightings.signites" expandble={false}>
          {sightings.map((sighting: ISSSighting) => 
            <ListItem
              key={sighting.date}
              icon="clock" 
              title={formatedDate(sighting.date)} 
              subtitle={`Visible for ${sighting.visible} min`} 
            />
          )}
        </ExpandContainer>
      </ScrollView>
      <View style={$scrollContainer}>
        <Button
          accessible
          accessibilityLabel="notify button"
          accessibilityHint="title"
          tx="homeScreen.selectSightings.button"
          style={$button}
          textStyle={$buttonText}
          pressedStyle={$button}
        />
      </View>
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
  padding: 18
}

const $title: TextStyle = {
  marginTop: 36,
  marginBottom: 10,
  fontFamily: typography.primary?.normal,
  fontSize: 36,
  lineHeight: 44,
  color: colors.palette.neutral250,
  paddingHorizontal: 36,
}

const $button: ViewStyle = {
  width: "100%",
  height: 64,
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: 28,
  borderWidth: 0,
  marginVertical: 24
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 21,
}
