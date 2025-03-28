import { Text } from "."

import { formatDate } from "../utils/datetime"
import React, { useEffect, useState } from "react"
import { StyleFn, useStyles } from "../utils/useStyles"
import { TextStyle } from "react-native"
import { colors, typography } from "../theme"

export function CurrentTime({ timeFormat }: { timeFormat: string }) {
  const { $date } = useStyles(styles)
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toISOString())
  const tf = timeFormat === "24hour" ? "k:mm:ss" : "h:mm:ss aa"

  useEffect(() => {
    const secTimer = setInterval(() => {
      setCurrentDateTime(new Date().toISOString())
    }, 1000)

    return () => clearInterval(secTimer)
  }, [])

  return <Text text={`${formatDate(currentDateTime, `dd MMM yyyy ${tf}`)}`} style={$date} />
}
const styles: StyleFn = ({ fontSizes, lineHeights }) => {
  const $date: TextStyle = {
    width: "100%",
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[13],
    lineHeight: lineHeights[16],
    color: colors.palette.neutral100,
    textAlign: "center",
    textTransform: "uppercase",
  }

  return {
    $date,
  }
}
