import { StyleFn, useStyles } from "../../../utils/useStyles"
import React, { useEffect, useState } from "react"
import {
  PressableProps,
  Animated,
  Easing,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native"
import { Icon, Text } from "../../../components"
import { colors, typography } from "../../../theme"

export interface RefreshButtonProps {
  onPress: PressableProps["onPress"]
  inProgress: boolean
  containerStyle?: StyleProp<ViewStyle>
}

export function RefreshButton({ onPress, inProgress, containerStyle }: RefreshButtonProps) {
  const { $container, $text } = useStyles(styles)

  const [spinValue] = useState(new Animated.Value(0))
  const [loop] = useState(
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ),
  )

  useEffect(() => {
    if (!inProgress) {
      loop.stop()
      loop.reset()
    } else loop.start()
  }, [inProgress])

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  })

  return (
    <TouchableOpacity
      disabled={inProgress}
      onPress={onPress}
      hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
      style={[$container, containerStyle]}
    >
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Icon icon="refresh" size={24} color={colors.palette.neutral450} />
      </Animated.View>
      <Text style={$text} tx="homeScreen.selectLocation.refresh" />
    </TouchableOpacity>
  )
}

const styles: StyleFn = ({ fontSizes }) => {
  const $container: ViewStyle = {
    flexDirection: "row",
  }

  const $text = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[12],
    color: colors.palette.neutral450,
    marginLeft: 3,
  }

  return { $container, $text }
}
