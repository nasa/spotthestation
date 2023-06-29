import React, { useEffect, useState } from "react"
import { ViewStyle, View, PressableProps, TextStyle, ScrollView } from "react-native"
import Modal from "react-native-modal"
import { Button, Icon, Text, IconTypes, Toggle } from "../../../components"
import { colors, fontSizes, lineHeights, scale, typography } from "../../../theme"
import { ExpandContainer } from "../components/ExpandContainer"
import { ListItem } from "../components/ListItem"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { addDays } from "date-fns"
import { formatDateWithTZ, getShortTZ } from "../../../utils/formatDate"
import { ISSSighting } from "../../../services/api"
import { getCalendars } from 'expo-localization'
import * as storage from "../../../utils/storage"
import { normalizeHeight } from "../../../utils/normalizeHeight"

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
  const [sightingsCoachVisible, setSightingsCoachVisible] = useState(false)

  const formatedDate = (date: string): string => {
    const timeFormat = getCalendars()[0].uses24hourClock ? "H:mm" : "h:mm A"
    const shortTZ = getShortTZ(timezone)
    if (formatDateWithTZ(date, `YYYY-MM-DD`, { timeZone: timezone }) === formatDateWithTZ(new Date().toISOString(), `YYYY-MM-DD`, { timeZone: timezone })) return `Today, ${formatDateWithTZ(date, timeFormat, { timeZone: timezone })} ${shortTZ}`
    if (formatDateWithTZ(date, `YYYY-MM-DD`, { timeZone: timezone }) === formatDateWithTZ(addDays(new Date(), 1).toISOString(), `YYYY-MM-DD`, { timeZone: timezone })) return `Tomorrow, ${formatDateWithTZ(date, timeFormat, { timeZone: timezone })} ${shortTZ}`
    return `${formatDateWithTZ(date, `${isUS ? "MMM DD, YYYY" : "DD MMM YYYY"}, ${timeFormat}`, { timeZone: timezone })} ${shortTZ}`
  }

  const setStageIcon = (stage): { icon: IconTypes, color: string} => {
    switch(stage) {
      case 0: return { icon: 'moon', color: colors.palette.neutral450 }
      case 1: return { icon: 'sunset', color: colors.palette.nasaOrange }
      case 2: return { icon: 'sun', color: colors.palette.yellow }
      default: return { icon: 'sunset', color: colors.palette.nasaOrange }
    }
  }

  const getCoach = async () => {
    setSightingsCoachVisible(!(await storage.load('sightingsCoachVisible')))
  }

  useEffect(() => {
    getCoach().catch((e) => console.log(e))
  }, [])

  const handleSetSightingsCoachVisible = async () => {
    setSightingsCoachVisible(false)
    await storage.save('sightingsCoachVisible', true)
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
            {[...sightings].filter(item => new Date(item.date) > new Date()).map((sighting: ISSSighting) =>
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
      {sightingsCoachVisible && <Modal
        isVisible={sightingsCoachVisible}
        useNativeDriver
        useNativeDriverForBackdrop
        backdropOpacity={.4}
        style={$modal}
      >
        <View 
          accessible
          accessibilityLabel="coach mark"
          accessibilityHint="coach mark"
          accessibilityRole="text"
          style={[$coachModalBodyContainer, { marginTop: normalizeHeight(.2) }]}
        >
          <View style={$legend}>
            <Icon icon="sun" size={44} color={colors.palette.yellow} />
            <Text tx="homeScreen.selectSightings.coach.sun" style={$body} />
          </View>
          <View style={$legend}>
            <Icon icon="sunset" size={44} color={colors.palette.nasaOrange} />
            <Text tx="homeScreen.selectSightings.coach.sunset" style={$body} />
          </View>
          <View style={$legend}>
            <Icon icon="moon" size={44} color={colors.palette.neutral450} />
            <Text tx="homeScreen.selectSightings.coach.moon" style={$body} />
          </View>
          <Button
            accessible
            accessibilityLabel="dismiss button"
            accessibilityHint="dismiss coach mark"
            tx="homeScreen.coachMarks.dismiss"
            textStyle={$nextButtonText}
            style={$nextButton}
            pressedStyle={$nextButton}
            onPress={handleSetSightingsCoachVisible}
          />
        </View>
      </Modal>}
    </View>
  )
}

const $modalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  borderTopLeftRadius: scale(18),
  borderTopRightRadius: scale(18),
  flex: 1
}

const $coachModalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: scale(16),
  paddingVertical: 36,
  paddingHorizontal: 30,
  width: '100%',
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

const $modal: ViewStyle = {
  flex: 1,
  left: 0,
  margin: 0,
  paddingHorizontal: 18,
  justifyContent: 'flex-start',
}

const $legend: ViewStyle = {
  flexDirection: "row",
  margin: 0,
  justifyContent: "space-between",
  width: "80%"
}

const $body: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: fontSizes[18],
  lineHeight: lineHeights[22],
  color: colors.palette.neutral100,
  paddingBottom: 10,
  paddingLeft: 5
}

const $nextButton: ViewStyle = {
  height: scale(56),
  backgroundColor: colors.palette.neutral100,
  borderRadius: scale(28),
  borderWidth: 0,
  width: scale(140),
  alignSelf: 'center',
  marginTop: 24
}

const $nextButtonText: TextStyle = {
  fontFamily: typography.primary.medium,
  fontSize: fontSizes[18],
  lineHeight: lineHeights[22],
  color: colors.palette.buttonBlue,
}
