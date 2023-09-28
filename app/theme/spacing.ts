import { Dimensions, PixelRatio } from "react-native"
import i18n from "i18n-js"

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")

// size based on figma design size (430 x 932)
const BASE_WIDTH = 430
const BASE_HEIGHT = 932

enum LanguageScaling {
  en = 1,
  fr = 1,
  uk = 0.9,
  ru = 1,
  ja = 1,
  es = 0.9,
  it = 0.9,
  nl = 1,
  sv = 0.9,
  hi = 1,
  de = 0.9,
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
