/* eslint-disable react-native/no-color-literals */
import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { magnetometer, SensorTypes, setUpdateIntervalForType } from 'react-native-sensors'

setUpdateIntervalForType(SensorTypes.magnetometer, 500) // defaults to 100ms

const RAD_TO_DEG = 180 / Math.PI

const getAzimuth = (x: number, y: number): number => {
  const angle = Math.atan2(y, x) * RAD_TO_DEG
  return angle >= 0 ? angle : 360 + angle
}

const LINE_LENGTH = 200 // довжина лінії
const LETTER_OFFSET = 50 // зміщення букв відносно центру
const LETTER_WIDTH = 30 // ширина букв

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  letter: {
    color: 'white',
    textAlign: 'center',
    width: LETTER_WIDTH,
  },
  letterContainer: {
    left: '50%',
    marginTop: -LETTER_OFFSET,
    position: 'absolute',
    top: '50%', // зміщуємо букви відносно центру
  },
  line: {
    backgroundColor: 'white',
    height: 1,
    left: '50%',
    marginLeft: -LINE_LENGTH / 2,
    position: 'absolute',
    top: '50%',
    width: LINE_LENGTH, // фіксуємо лінію по центру
  },
})

const Ruler = () => {
  const [orientation, setOrientation] = useState(0)
  const letterPositions = [
    { letter: 'N', offset: 0 },
    { letter: 'E', offset: 90 },
    { letter: 'S', offset: 180 },
    { letter: 'W', offset: 270 },
  ]

  useEffect(() => {
    const subscription = magnetometer.subscribe(({ x, y }) =>
      setOrientation(getAzimuth(x, y))
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.letterContainer}>
        {letterPositions.map(({ letter, offset }) => {
          const letterPosition = ((offset - orientation) / 360) * LINE_LENGTH
          return (
            <Text
              key={letter}
              style={[styles.letter, { marginLeft: letterPosition }]}
            >
              {letter}
            </Text>
          )
        })}
      </View>
    </View>
  )
}

export default Ruler
