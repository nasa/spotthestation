import i18n from "i18n-js"
import React from "react"
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native"
import { isRTL, translate, TxKeyPath } from "../i18n"
import { colors, typography } from "../theme"
import { StyleFn, useStyles } from "../utils/useStyles"

type Sizes = "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs"
type Weights = keyof typeof typography.primary
type Presets = "default" | "bold" | "heading" | "subheading" | "formLabel" | "formHelper"

export interface TextProps extends RNTextProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: i18n.TranslateOptions
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * One of the different types of text presets.
   */
  preset?: Presets
  /**
   * Text weight modifier.
   */
  weight?: Weights
  /**
   * Text size modifier.
   */
  size?: Sizes
  /**
   * Children components.
   */
  children?: React.ReactNode
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Text.md)
 */
export function Text(props: TextProps) {
  const { weight, size, tx, txOptions, text, children, style: $styleOverride, ...rest } = props

  const $sizeStyles = useStyles(sizeStyles)
  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const $baseStyle: StyleProp<TextStyle> = [
    $sizeStyles.sm,
    $fontWeightStyles.normal,
    { color: colors.text },
  ]

  const $presets = {
    default: $baseStyle,

    bold: [$baseStyle, $fontWeightStyles.bold] as StyleProp<TextStyle>,

    heading: [$baseStyle, $sizeStyles.xxl, $fontWeightStyles.bold] as StyleProp<TextStyle>,

    subheading: [$baseStyle, $sizeStyles.lg, $fontWeightStyles.medium] as StyleProp<TextStyle>,

    formLabel: [$baseStyle, $fontWeightStyles.medium] as StyleProp<TextStyle>,

    formHelper: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.normal] as StyleProp<TextStyle>,
  }

  const preset: Presets = $presets[props.preset] ? props.preset : "default"
  const $styles = [
    $rtlStyle,
    $presets[preset],
    $fontWeightStyles[weight],
    $sizeStyles[size],
    $styleOverride,
  ]

  return (
    <RNText allowFontScaling={false} {...rest} style={$styles}>
      {content}
    </RNText>
  )
}

const sizeStyles: StyleFn = ({ scale, lineHeights }) => {
  const $sizeStyles = {
    xxl: { fontSize: scale(36, true), lineHeight: lineHeights[44] } as TextStyle,
    xl: { fontSize: scale(24, true), lineHeight: scale(34) } as TextStyle,
    lg: { fontSize: scale(20, true), lineHeight: scale(32) } as TextStyle,
    md: { fontSize: scale(18, true), lineHeight: scale(26) } as TextStyle,
    sm: { fontSize: scale(16, true), lineHeight: scale(24) } as TextStyle,
    xs: { fontSize: scale(14, true), lineHeight: lineHeights[21] } as TextStyle,
    xxs: { fontSize: scale(12, true), lineHeight: scale(18) } as TextStyle,
  }

  return { ...$sizeStyles }
}

const $fontWeightStyles = Object.entries(typography.primary).reduce((acc, [weight, fontFamily]) => {
  return { ...acc, [weight]: { fontFamily } }
}, {}) as Record<Weights, TextStyle>

const $rtlStyle: TextStyle = isRTL ? { writingDirection: "rtl" } : {}
