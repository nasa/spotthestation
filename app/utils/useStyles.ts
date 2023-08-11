import { FlexStyle } from "react-native"
import { useEffect, useMemo, useState } from "react"
import { scale } from "../theme"
import i18n from "i18n-js"
import { addLocaleListener, removeLocaleListener } from "../i18n"

export type StyleFn = (args: {
  scale: (size: number, isFontScale?: boolean) => number
  fontSizes: Record<number, number>
  lineHeights: Record<number, number>
}) => Record<string, FlexStyle>

export function useStyles(fn: StyleFn) {
  const [locale, setLocale] = useState(i18n.locale)

  useEffect(() => {
    addLocaleListener(setLocale)
    return () => removeLocaleListener(setLocale)
  }, [])

  return useMemo(() => {
    const fontSizes = {
      10: scale(10, true),
      12: scale(12, true),
      13: scale(13, true),
      14: scale(14, true),
      15: scale(15, true),
      16: scale(16, true),
      18: scale(18, true),
      20: scale(20, true),
      22: scale(22, true),
      24: scale(24, true),
      28: scale(28, true),
      32: scale(32, true),
      36: scale(36, true),
      48: scale(48, true),
    } as const

    const lineHeights = {
      14: scale(14),
      15: scale(15),
      16: scale(16),
      17: scale(17),
      19: scale(19),
      20: scale(20),
      21: scale(21),
      22: scale(22),
      24: scale(24),
      26: scale(26),
      28: scale(28),
      29: scale(29),
      34: scale(34),
      39: scale(39),
      42: scale(42),
      44: scale(44),
      64: scale(64),
    } as const

    return fn({ scale, fontSizes, lineHeights })
  }, [locale])
}
