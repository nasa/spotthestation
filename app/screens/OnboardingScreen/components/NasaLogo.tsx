import React from "react"
import { Image, ImageStyle } from "react-native"
import { StyleFn, useStyles } from "../../../utils/useStyles"

const nasaLogo = require("../../../../assets/images/nasa-logo.png")

export function NasaLogo() {
  const { $logo } = useStyles(styles)
  return <Image source={nasaLogo} style={$logo as ImageStyle} />
}

const styles: StyleFn = ({ scale }) => {
  const $logo: ImageStyle = {
    width: scale(110),
    height: scale(110),
    marginTop: scale(36),
    marginLeft: scale(36),
  }

  return { $logo }
}
