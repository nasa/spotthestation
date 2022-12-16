import React from "react"
import { Image, ImageStyle } from "react-native"

const nasaLogo = require("../../../../assets/images/nasa-logo.png")

export function NasaLogo() {
  return <Image source={nasaLogo} style={$logo} />
}

const $logo: ImageStyle = {
  width: 110,
  height: 110,
  marginTop: 36,
  marginLeft: 36
}