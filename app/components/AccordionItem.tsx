import React, { memo, useState, useEffect, useRef } from "react"
import { TextStyle, View, ViewStyle, useAnimatedValue, Animated } from "react-native"
import { StyleFn, useStyles } from "../utils/useStyles"
import { Icon } from "./Icon"
import { colors } from "../theme"
import { SettingsItem } from "./SettingsItem"
import { RenderHtml } from "./RenderHtml"
import { TxKeyPath } from "../i18n"

type AccordionItemProps = {
  titleTx: TxKeyPath
  contentTx: TxKeyPath
  open?: boolean
}

export const AccordionItem = memo(function AccordionItem({
  titleTx,
  contentTx,
  open: forceOpen = undefined,
}: AccordionItemProps) {
  const [height, setHeight] = useState(0)
  const [open, setOpen] = useState(forceOpen || false)
  const [fullyClosed, setFullyClosed] = useState(!open)
  const timingRef = useRef<Animated.CompositeAnimation>(null)
  const heightAnim = useAnimatedValue(open ? 1 : 0)
  const { $animatedView, $wrapper, $text } = useStyles(styles)

  const onPress = () => {
    setOpen(!open)
    if (!open) setFullyClosed(false)
  }

  useEffect(() => {
    if (timingRef.current) timingRef.current.stop()

    if (open) {
      timingRef.current = Animated.timing(heightAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      })
    } else {
      timingRef.current = Animated.timing(heightAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      })
    }

    timingRef.current.start(onAnimationFinished)
  }, [open])

  const onAnimationFinished = () => {
    timingRef.current = null
    setFullyClosed(!open)
  }

  return (
    <View>
      <SettingsItem
        title={titleTx}
        onPress={onPress}
        rightControl={
          open ? <Icon icon="caretDown" size={24} color={colors.palette.neutral550} /> : undefined
        }
      >
        <Animated.View
          style={[
            $animatedView,
            {
              height: heightAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, height],
              }),
            },
          ]}
        >
          <View
            onLayout={(e) => {
              setHeight(e.nativeEvent.layout.height)
            }}
            style={$wrapper}
          >
            {!fullyClosed && <RenderHtml baseStyle={$text} contentTx={contentTx} />}
          </View>
        </Animated.View>
      </SettingsItem>
    </View>
  )
})

const styles: StyleFn = ({ fontSizes, lineHeights, scale }) => {
  const $text: TextStyle = {
    color: colors.palette.neutral250,
    fontSize: fontSizes[20],
    lineHeight: lineHeights[28],
  }

  const $wrapper: ViewStyle = {
    width: "100%",
    position: "absolute",
    display: "flex",
    padding: scale(10),
    paddingBottom: scale(20),
  }

  const $animatedView: ViewStyle = {
    width: "100%",
    overflow: "hidden",
  }

  return {
    $wrapper,
    $animatedView,
    $text,
  }
}
