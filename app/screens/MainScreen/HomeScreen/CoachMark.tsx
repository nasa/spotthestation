import React from "react"
import { ViewStyle, View, PressableProps, TextStyle } from "react-native"
import { Button, Icon, IconTypes, Text } from "../../../components"
import { TxKeyPath } from "../../../i18n"
import { typography } from "../../../theme"
import { colors } from "../../../theme/colors"
import { normalizeHeight } from "../../../utils/normalizeHeight"

export interface CoachMarkProps {
  icon?: IconTypes,
  title?: TxKeyPath,
  bodyText?: TxKeyPath,
  stage?: number,
  style?: ViewStyle,
  onPressNext?: PressableProps["onPress"]
  onPressFinish?: PressableProps["onPress"]
}

export function CoachMark({ icon, title, bodyText, stage, style, onPressNext, onPressFinish }: CoachMarkProps) {
  const renderArrow = () => {
    switch (stage) {
      case 1: return <View style={$location}><Icon icon="bigArrow" size={55} /></View>
      case 2: return <View style={$sightings}><Icon icon="bigArrow" size={55} /></View>
      case 3: return <View style={$globe}><Icon icon="bigArrow" size={55} /></View>
      case 4: return <View style={$map}><Icon icon="bigArrow" size={55} /></View>
      case 5: return <View style={$navigation}><Icon icon="bigArrow" size={55} /></View>
      default: return ''
    }
  }

  return (
    <View 
      accessible
      accessibilityLabel="coach mark"
      accessibilityHint="coach mark"
      accessibilityRole="text"
      style={[$modalBodyContainer, style]}
    >
      {renderArrow()}
      <Text text={`${stage}/5`} style={$stage} />
      <Icon icon={icon} size={44} />
      <Text tx={title} style={$title} />
      <Text tx={bodyText} style={$body} />
      {stage === 5 ? <Button
          accessible
          accessibilityLabel="finish button"
          accessibilityHint="finish coach mark"
          tx="homeScreen.coachMarks.finish"
          textStyle={$nextButtonText}
          style={$nextButton}
          pressedStyle={$nextButton}
          onPress={onPressFinish}
        /> : <View style={$buttonsContainer}>
        <Button
          accessible
          accessibilityLabel="skip button"
          accessibilityHint="skip coach mark"
          tx="homeScreen.coachMarks.skip"
          textStyle={$skipButtonText}
          style={$skipButton}
          pressedStyle={$skipButton}
          onPress={onPressFinish}
        />
        <Button
          accessible
          accessibilityLabel="next button"
          accessibilityHint="next coach mark"
          tx="homeScreen.coachMarks.next"
          textStyle={$nextButtonText}
          style={$nextButton}
          pressedStyle={$nextButton}
          onPress={onPressNext}
        />
      </View>}
    </View>
  )
}

const $modalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.buttonBlue,
  borderRadius: 16,
  alignItems: 'center',
  paddingVertical: 36,
  paddingHorizontal: 30,
  width: '100%',
}

const $buttonsContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  alignSelf: 'flex-end'
}

const $skipButton: ViewStyle = {
  backgroundColor: 'transparent',
  borderWidth: 0,
  height: 56,
  minWidth: 140
}

const $skipButtonText: TextStyle = {
  fontFamily: typography.primary.medium,
  fontSize: 18,
  lineHeight: 22,
  color: colors.palette.neutral100,
}

const $nextButton: ViewStyle = {
  height: 56,
  backgroundColor: colors.palette.neutral100,
  borderRadius: 28,
  borderWidth: 0,
  minWidth: 140
}

const $location: ViewStyle = {
  position: "absolute",
  top: -80,
  right: -5,
}
const $sightings: ViewStyle = {
  position: "absolute",
  top: -80,
}
const $globe: ViewStyle = {
  position: "absolute",
  top: -normalizeHeight(.3),
  right: 0,
  transform: [{ rotate: "-130deg" }]
}
const $map: ViewStyle = {
  position: "absolute",
  bottom: -80,
  transform: [{ rotate: "180deg" }]
}
const $navigation: ViewStyle = {
  position: "absolute",
  bottom: -80,
  transform: [{ rotate: "180deg" }]
}

const $nextButtonText: TextStyle = {
  fontFamily: typography.primary.medium,
  fontSize: 18,
  lineHeight: 22,
  color: colors.palette.buttonBlue,
}

const $title: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 24,
  lineHeight: 29,
  color: colors.palette.neutral100,
  paddingBottom: 12,
  paddingTop: 18
}

const $body: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 18,
  lineHeight: 22,
  color: colors.palette.neutral100,
  paddingBottom: 36
}

const $stage: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 16,
  lineHeight: 20,
  color: colors.palette.neutral100,
  position: "absolute",
  top: 0,
  left: 0,
  padding: 24,
  opacity: 0.5
}
