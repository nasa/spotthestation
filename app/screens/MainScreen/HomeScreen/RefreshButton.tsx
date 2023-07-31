import React, { useEffect, useState } from "react"
import { PressableProps, Animated, Easing, StyleProp, ViewStyle } from "react-native"
import { Icon } from "../../../components"
import { colors } from "../../../theme"

export interface RefreshButtonProps {
  onPress: PressableProps["onPress"],
  inProgress: boolean,
  containerStyle?: StyleProp<ViewStyle>
}


export function RefreshButton({ onPress, inProgress, containerStyle }: RefreshButtonProps) {
  const [spinValue] = useState(new Animated.Value(0))
  const [loop] = useState(Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )
  ))

  useEffect(() => {
    if (!inProgress) {
      loop.stop()
      loop.reset()
    }
    else loop.start()
  }, [inProgress])

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })

  return (
    <Animated.View style={[containerStyle, { transform: [{ rotate: spin }] }]}>
      <Icon
        icon="refresh"
        size={24}
        color={colors.palette.neutral450}
        disabled={inProgress}
        onPress={onPress}
        hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
      />
    </Animated.View>
  )
}