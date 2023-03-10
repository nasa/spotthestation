/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react'
import { View, Text, Image, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { magnetometer, SensorTypes, setUpdateIntervalForType } from 'react-native-sensors'
import { Icon } from '../../../components'
import { colors } from '../../../theme'
const compassLine = require('../../../../assets/icons/compass-line.png')

setUpdateIntervalForType(SensorTypes.magnetometer, 100)

const RAD_TO_DEG = 180 / Math.PI

const getAzimuth = (x: number, y: number): number => {
  const angle = Math.atan2(y, x) * RAD_TO_DEG
  return angle - 90 >= 0 ? angle - 90 : 360 + (angle - 90)
}

const LINE_LENGTH = 260
const LETTER_OFFSET = 10

export const Compass = ({ issPosition, isFullScreen }) => {
  const topInset = useSafeAreaInsets().top
  const [orientation, setOrientation] = useState(0)

  const left = orientation - 45
  const right = orientation + 45

  const letterPositions = [
    { letter: 'N', offset: 0 },
    { letter: 'E', offset: 90 },
    { letter: 'S', offset: 180 },
    { letter: 'W', offset: 270 },
    { letter: 'N', offset: 360 },
  ].filter(letter => letter.offset >= left && letter.offset <= right)

  useEffect(() => {
    const subscription = magnetometer.subscribe(({ x, y }) => {
      setOrientation(getAzimuth(x, y))
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const issVisible = issPosition >= left && issPosition <= right

  return (
    <View style={[$container, { marginTop: isFullScreen ? topInset + 24 : 0 }]}>
      <Image source={compassLine} style={$line} />
      {issVisible && <Icon icon="iss" size={24} containerStyle={[$issIcon, { marginLeft: ((issPosition - left) / 90) * LINE_LENGTH }]} />}
      <View style={$lettersContainer}>
        {letterPositions.map(({ letter, offset }) => {
          const letterPosition = ((offset - left) / 90) * LINE_LENGTH
          return (
            <View key={letter} style={[$letterContainer, { marginLeft: letterPosition }]}>
              <Text
                key={letter}
                style={$letter}
              >
                {letter}
              </Text>
              <View style={$verticalLine} />
            </View>
          )
        })}
      </View>
    </View>
  )
}

const $container: ViewStyle = {
  height: 20,
  position: 'relative',
  width: LINE_LENGTH
}

const $issIcon: ViewStyle = {
  bottom: -10,
  position: 'absolute'
}

const $letter: TextStyle = {
  color: colors.palette.neutral100,
  marginBottom: 5,
  textAlign: 'left'
}

const $letterContainer: ViewStyle = {
  alignItems: 'center',
  marginBottom: 2
}

const $lettersContainer: ViewStyle = {
  bottom: -10,
  flexDirection: 'row',
  height: 'auto',
  left: 0,
  marginTop: -LETTER_OFFSET
}

const $line: ImageStyle = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  width: LINE_LENGTH,
}

const $verticalLine: ViewStyle = {
  borderColor: colors.palette.neutral100,
  borderWidth: 1,
  height: 6,
  width: 1
}
