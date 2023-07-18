import { Dimensions, PixelRatio } from "react-native"
import i18n from "i18n-js"

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")

// size based on figma design size (430 x 932)
const BASE_WIDTH = 430
const BASE_HEIGHT = 932

enum LanguageScaling {
  en = 1,
  fr = 0.8,
  uk = 1,
  ja = 1,
  es = 0.8,
  it = 1,
  nl = 1,
  ru = 1,
  sv = 1,
  hi = 1,
  de = 1,
  nb = 1,
}

export const scale = (size: number, isFontScale?: boolean) => {
  const widthScale = SCREEN_WIDTH / BASE_WIDTH
  const heightScale = SCREEN_HEIGHT / BASE_HEIGHT
  const scale = Math.min(widthScale, heightScale)

  const newSize = isFontScale ? size * scale * (LanguageScaling[i18n.locale] ?? 1) : size * scale 
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const spacing = {
  micro: 2,
  tiny: 4,
  extraSmall: 8,
  small: 12,
  medium: 16,
  large: 24,
  extraLarge: 32,
  huge: 48,
  massive: 64,
} as const

export const fontSizes = {
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

export const lineHeights = {
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

export type Spacing = keyof typeof spacing
