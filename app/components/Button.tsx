import { StyleFn, useStyles } from "../utils/useStyles"
import React, { ReactNode } from "react"
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native"
import { colors, spacing, typography } from "../theme"
import { Text, TextProps } from "./Text"

type Presets = "default" | "filled" | "reversed"

export interface ButtonAccessoryProps {
  style: StyleProp<any>
  pressableState: PressableStateCallbackType
}

export interface ButtonProps extends PressableProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TextProps["tx"]
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: TextProps["text"]
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TextProps["txOptions"]
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  /**
   * An optional style override for the "pressed" state.
   */
  pressedStyle?: StyleProp<ViewStyle>
  /**
   * An optional style override for the button text.
   */
  textStyle?: StyleProp<TextStyle>
  /**
   * An optional style override for the button text when in the "pressed" state.
   */
  pressedTextStyle?: StyleProp<TextStyle>
  /**
   * One of the different types of button presets.
   */
  preset?: Presets
  /**
   * An optional component to render on the right side of the text.
   */
  renderRightAccessory?: (props: { style: StyleProp<any> }) => ReactNode
  /**
   * An optional component to render on the left side of the text.
   */
  renderLeftAccessory?: (props: { style: StyleProp<any> }) => ReactNode
  /**
   * Children components.
   */
  children?: React.ReactNode
}

/**
 * A component that allows users to take actions and make choices.
 * Wraps the Text component with a Pressable component.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Button.md)
 */
export function Button(props: ButtonProps) {
  const { $baseViewStyle, $baseTextStyle, $rightAccessoryStyle, $leftAccessoryStyle } =
    useStyles(styles)

  const $viewPresets = {
    default: [
      $baseViewStyle,
      {
        borderWidth: 1,
        borderColor: colors.palette.neutral400,
        backgroundColor: colors.palette.neutral100,
      },
    ] as StyleProp<ViewStyle>,

    filled: [
      $baseViewStyle,
      { backgroundColor: colors.palette.neutral300 },
    ] as StyleProp<ViewStyle>,

    reversed: [
      $baseViewStyle,
      { backgroundColor: colors.palette.neutral800 },
    ] as StyleProp<ViewStyle>,
  }

  const $textPresets: Record<Presets, StyleProp<TextStyle>> = {
    default: $baseTextStyle,
    filled: $baseTextStyle,
    reversed: [$baseTextStyle, { color: colors.palette.neutral100 }],
  }

  const $pressedViewPresets: Record<Presets, StyleProp<ViewStyle>> = {
    default: { backgroundColor: colors.palette.neutral200 },
    filled: { backgroundColor: colors.palette.neutral400 },
    reversed: { backgroundColor: colors.palette.neutral700 },
  }

  const $pressedTextPresets: Record<Presets, StyleProp<TextStyle>> = {
    default: { opacity: 0.9 },
    filled: { opacity: 0.9 },
    reversed: { opacity: 0.9 },
  }

  const {
    tx,
    text,
    txOptions,
    style: $viewStyleOverride,
    pressedStyle: $pressedViewStyleOverride,
    textStyle: $textStyleOverride,
    pressedTextStyle: $pressedTextStyleOverride,
    children,
    renderRightAccessory,
    renderLeftAccessory,
    ...rest
  } = props

  const preset: Presets = $viewPresets[props.preset] ? props.preset : "default"
  function $viewStyle({ pressed }) {
    return [
      $viewPresets[preset],
      $viewStyleOverride,
      !!pressed && [$pressedViewPresets[preset], $pressedViewStyleOverride],
    ]
  }
  function $textStyle({ pressed }) {
    return [
      $textPresets[preset],
      $textStyleOverride,
      !!pressed && [$pressedTextPresets[preset], $pressedTextStyleOverride],
    ]
  }

  return (
    <Pressable style={$viewStyle} accessibilityRole="button" {...rest}>
      {(state) => (
        <>
          {!!renderLeftAccessory && renderLeftAccessory({ style: $leftAccessoryStyle })}

          <Text tx={tx} text={text} txOptions={txOptions} style={$textStyle(state)}>
            {children}
          </Text>

          {!!renderRightAccessory && renderRightAccessory({ style: $rightAccessoryStyle })}
        </>
      )}
    </Pressable>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $baseViewStyle: ViewStyle = {
    minHeight: scale(56),
    borderRadius: scale(4),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: scale(spacing.small),
    paddingHorizontal: scale(spacing.small),
    overflow: "hidden",
  }

  const $baseTextStyle: TextStyle = {
    fontSize: fontSizes[16],
    lineHeight: lineHeights[20],
    fontFamily: typography.primary.medium,
    textAlign: "center",
    flexShrink: 1,
    flexGrow: 0,
    zIndex: 2,
  }

  const $rightAccessoryStyle: ViewStyle = { marginStart: scale(spacing.extraSmall), zIndex: 1 }

  const $leftAccessoryStyle: ViewStyle = { marginEnd: scale(spacing.extraSmall), zIndex: 1 }

  return { $baseViewStyle, $baseTextStyle, $rightAccessoryStyle, $leftAccessoryStyle }
}
