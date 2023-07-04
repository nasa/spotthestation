import React from "react"
import { Image, ImageStyle } from "react-native"
import { scale } from "../../../theme"

const nasaLogo = require("../../../../assets/images/nasa-logo.png")

export function NasaLogo() {
  return <Image source={nasaLogo} style={$logo} />
}

const $logo: ImageStyle = {
  width: scale(110),
  height: scale(110),
  marginTop: scale(36),
  marginLeft: scale(36),
}
