import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes

  /**
   * An optional tint color for the icon
   */
  color?: string

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"]
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image
        style={[
          $imageStyle,
          color && { tintColor: color },
          size && { width: size, height: size },
          $imageStyleOverride,
        ]}
        source={iconRegistry[icon]}
      />
    </Wrapper>
  )
}

export const iconRegistry = {
  back: require("../../assets/icons/back.png"),
  bell: require("../../assets/icons/bell.png"),
  caretLeft: require("../../assets/icons/caretLeft.png"),
  caretRight: require("../../assets/icons/caretRight.png"),
  check: require("../../assets/icons/check.png"),
  community: require("../../assets/icons/community.png"),
  components: require("../../assets/icons/components.png"),
  heart: require("../../assets/icons/heart.png"),
  hidden: require("../../assets/icons/hidden.png"),
  ladybug: require("../../assets/icons/ladybug.png"),
  lock: require("../../assets/icons/lock.png"),
  menu: require("../../assets/icons/menu.png"),
  more: require("../../assets/icons/more.png"),
  pin: require("../../assets/icons/pin.png"),
  settings: require("../../assets/icons/settings.png"),
  view: require("../../assets/icons/view.png"),
  x: require("../../assets/icons/x.png"),
  brandFacebook: require("../../assets/icons/brand-facebook.png"),
  brandTwitter: require("../../assets/icons/brand-twitter.png"),
  brandGoogle: require("../../assets/icons/brand-google.png"),
  brandInstagram: require("../../assets/icons/brand-instagram.png"),
  brandLinkedin: require("../../assets/icons/brand-linkedin.png"),
  brandWhatsapp: require("../../assets/icons/brand-whatsapp.png"),
  delete: require("../../assets/icons/delete.png"),
  mail: require("../../assets/icons/mail.png"),
  mailAccepted: require("../../assets/icons/mail-accepted.png"),
  changePassword: require("../../assets/icons/change-password.png"),
  smartphone: require("../../assets/icons/smartphone.png"),
  currentLocation: require("../../assets/icons/current-location.png"),
  globe: require("../../assets/icons/globe.png"),
  map: require("../../assets/icons/map.png"),
  search: require("../../assets/icons/search.png"),
  trash: require("../../assets/icons/trash.png"),
  tv: require("../../assets/icons/tv.png"),
  user: require("../../assets/icons/user.png"),
  xCircle: require("../../assets/icons/x-circle.png"),
  chevronDown: require("../../assets/icons/chevron-down.png"),
  book: require("../../assets/icons/book.png"),
  home: require("../../assets/icons/home.png"),
  emailVerify: require("../../assets/icons/email-verify.png"),
  emailVerified: require("../../assets/icons/email-verified.png"),
  clock: require("../../assets/icons/clock.png"),
  maximize: require("../../assets/icons/maximize.png"),
  capture: require("../../assets/icons/capture.png"),
  compass: require("../../assets/icons/compass.png"),
  line: require("../../assets/icons/line.png"),
  share: require("../../assets/icons/share.png"),
  video: require("../../assets/icons/video.png"),
}

const $imageStyle: ImageStyle = {
  resizeMode: "contain",
}
