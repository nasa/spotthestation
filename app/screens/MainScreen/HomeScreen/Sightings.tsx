import React, { useCallback, useEffect, useState } from "react"
import { ViewStyle, View, PressableProps, TextStyle, ScrollView } from "react-native"

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
  onNotify?: (values: ISSSighting[]) => void
}

export function Sightings({ onClose, sightings, onNotify }: SightingsProps) {
  const $marginTop = useSafeAreaInsetsStyle(["top"], "margin")
  const $paddingBottom = useSafeAreaInsetsStyle(["bottom"], "padding")
  const [sightingsForUpdate, setSightingsForUpdate] = useState<ISSSighting[]>([])

  const formatedDate = (date: string): string => {
    if (isToday(new Date(date))) return `Today, ${formatDate(date, "H:mm aa")}`
    if (isTomorrow(new Date(date))) return `Tomorrow, ${formatDate(date, "H:mm aa")}`
    return formatDate(date, "eeee, MMM d, H:mm aa")
  }

  const isSelected = useCallback((sighting: ISSSighting) => {
    if (sightingsForUpdate.length) {
      const res: ISSSighting = sightingsForUpdate.find(item => item.date === sighting.date)
      return res?.notify
    }
    return false
  }, [sightingsForUpdate])

  useEffect(() => {
    setSightingsForUpdate([...sightings])
  }, [])

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
          {sightings.filter(item => new Date(item.date) > new Date(new Date().getTime() - (24 * 60 * 60 * 1000))).map((sighting: ISSSighting) =>
            <ListItem
              key={sighting.date}
              icon="clock"
              title={formatedDate(sighting.date)}
              selected={isSelected(sighting)}
              subtitle={`Visible for ${sighting.visible} min`}
              withSwitch
              onToggle={() => {
                setSightingsForUpdate(sightingsForUpdate.map(item => {
                  if (item.date === sighting.date) {
                    return {...item, notify: !item.notify}
                  }
                  return item
                }))
              }}
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
          onPress={() => onNotify(sightingsForUpdate)}
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

const $selectMessageText: TextStyle = {
  width: "95%",
  fontFamily: typography.primary?.normal,
  fontSize: 18,
  lineHeight: 22,
  color: colors.palette.neutral100,
  paddingHorizontal: 36,
}
