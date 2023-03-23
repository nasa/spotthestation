/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react'
import { View, Text, Image, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CompassHeading from 'react-native-compass-heading'
import { Icon } from '../../../components'
import { colors } from '../../../theme'
const compassLine = require('../../../../assets/icons/compass-line.png')

const LINE_LENGTH = 260
const LETTER_OFFSET = 10

const normalizeHeading = (heading: number) => {
  if (heading < 0) return 360 + heading
  if (heading > 360) return heading - 360
  return heading
}

const isInHeadingRange = (left, right, heading) => {
  if (right < left) return heading > left || heading < right
  return heading >= left && heading <= right
}

const headingOffset = (h1, h2) => {
  if (h2 < h1) return h2 - (h1 - 360)
  return h2 - h1
}

export const Compass = ({ issPosition, isFullScreen }) => {
  const topInset = useSafeAreaInsets().top
  const [heading, setHeading] = useState(0)

  const left = normalizeHeading(heading - 45)
  const right = normalizeHeading(heading + 45)

  const letterPositions = [
    { letter: 'N', offset: 0 },
    { letter: 'E', offset: 90 },
    { letter: 'S', offset: 180 },
    { letter: 'W', offset: 270 },
  ].filter(letter => isInHeadingRange(left, right, letter.offset))

  useEffect(() => {
    CompassHeading.start(1, (result) => {
      setHeading(Number(result.heading))
    }).catch((err) => {
      console.log(err)
    })

    return () => {
      CompassHeading.stop().catch((err) => {
        console.log(err)
      })
    }
  }, [])

  const issVisible = isInHeadingRange(left, right, issPosition)

  return (
    <View style={[$container, { marginTop: isFullScreen ? topInset + 24 : 0 }]}>
      <Image source={compassLine} style={$line} />
      {issVisible && <Icon icon="iss" size={24} containerStyle={[$issIcon, { marginLeft: (headingOffset(left, issPosition) / 90) * LINE_LENGTH }]} />}
      <View style={$lettersContainer}>
        {letterPositions.map(({ letter, offset }) => {
          const letterPosition = (headingOffset(left, offset) / 90) * LINE_LENGTH
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
  position: 'absolute',
  top: 0,
  alignSelf: 'center',
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
