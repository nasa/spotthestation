import * as Localization from "expo-localization"
import i18n from "i18n-js"
import { I18nManager } from "react-native"

// if English isn't your default language, move Translations to the appropriate language file.
import en, { Translations } from "./en"
import de from "./de"
import es from "./es"
import fr from "./fr"
import hi from "./hi"
import it from "./it"
import ja from "./ja"
import nl from "./nl"
import sv from "./sv"
import uk from "./uk"

i18n.fallbacks = true
/**
 * we need always include "*-US" for some valid language codes because when you change the system language,
 * the language code is the suffixed with "-US". i.e. if a device is set to English ("en"),
 * if you change to another language and then return to English language code is now "en-US".
 */
i18n.translations = { en, "en-US": en, de, es, fr, hi, it, ja, nl, sv, uk }

i18n.locale = Localization.locale.split("-")[0]

type LocaleListener = (locale: string) => void

const localeListeners: LocaleListener[] = []

export const addLocaleListener = (listener: LocaleListener) => {
  localeListeners.push(listener)
}
export const removeLocaleListener = (listener: LocaleListener) => {
  const idx = localeListeners.indexOf(listener)
  if (idx >= 0) localeListeners.splice(idx, 1)
}

export const setLocale = (locale: string) => {
  i18n.locale = locale
  localeListeners.forEach((listener) => listener(locale))
}

// handle RTL languages
export const isRTL = Localization.isRTL
I18nManager.allowRTL(isRTL)
I18nManager.forceRTL(isRTL)

/**
 * Builds up valid keypaths for translations.
 */
export type TxKeyPath = RecursiveKeyOf<Translations>

// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>
}[keyof TObj & (string | number)]

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >
}[keyof TObj & (string | number)]

type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
  ? Text
  : TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text
