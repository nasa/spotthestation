import { StyleFn, useStyles } from "../../../utils/useStyles"
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useMemo } from "react"
import { ViewStyle, View, useWindowDimensions, PixelRatio } from "react-native"
import Svg, { Path } from "react-native-svg"
import { arc as d3Arc } from "d3-shape"
import { degToRad } from "../../../utils/geometry"

const arc = d3Arc()

export const DirectionCircle = ({ screenX, screenY, setIsSpotted }) => {
  const { $container, $innerCircle, $outerCircle } = useStyles(styles)

  const dimensions = useWindowDimensions()
  const width = useMemo(() => dimensions.width * PixelRatio.get(), [dimensions])
  const height = useMemo(() => dimensions.height * PixelRatio.get(), [dimensions])

  const x = useMemo(() => screenX - width / 2, [screenX, width])
  const y = useMemo(() => screenY - height / 2, [screenY, height])
  const arrowAngle = useMemo(() => Math.atan2(x, -y), [x, y])
  const alignDistance = useMemo(() => Math.abs(x), [x])
  const viewDistance = useMemo(() => Math.max(0, alignDistance - width / 2), [alignDistance, width])
  const distance = useMemo(() => Math.sqrt(x * x + y * y), [x, y])
  const isSpotted = distance <= 70

  setIsSpotted(isSpotted)

  const outerArc = useMemo(() => {
    return arc({
      outerRadius: 45,
      innerRadius: 42,
      startAngle: 0,
      endAngle: degToRad(360),
    })
  }, [])

  const viewArc = useMemo(() => {
    const spread = degToRad(Math.max(0, 180 - Math.floor(viewDistance / 4)))
    return arc({
      outerRadius: 45,
      innerRadius: 42,
      startAngle: arrowAngle - spread,
      endAngle: arrowAngle + spread,
    })
  }, [viewDistance, arrowAngle])

  const alignArc = useMemo(() => {
    const spread =
      alignDistance < 20
        ? 180
        : degToRad(Math.min(180, Math.max(0, 210 - Math.floor(alignDistance / 2))))
    return arc({
      outerRadius: 45,
      innerRadius: isSpotted ? 30 : 42,
      startAngle: arrowAngle - spread,
      endAngle: arrowAngle + spread,
    })
  }, [alignDistance, arrowAngle, isSpotted])

  return (
    <View style={$container}>
      {distance > 150 && (
        <Svg
          width={22}
          height={24}
          transform={[{ rotate: `${arrowAngle}rad` }, { translateY: -65 }]}
        >
          <Path
            d="M 10.436 1.683 L 19.923 21.895 C 19.965 22.01 19.974 22.135 19.948 22.255 C 19.922 22.375 19.862 22.485 19.775 22.572 C 19.688 22.659 19.578 22.719 19.458 22.745 C 19.338 22.772 19.213 22.763 19.098 22.72 L 10.436 19.833 L 1.774 22.72 C 1.658 22.763 1.533 22.772 1.413 22.745 C 1.293 22.719 1.183 22.659 1.096 22.572 C 1.009 22.485 0.949 22.375 0.923 22.255 C 0.897 22.135 0.906 22.01 0.949 21.895 L 10.436 1.683 Z"
            fill={viewDistance === 0 ? "#11CE69" : "#fff"}
            stroke={viewDistance === 0 ? "#11CE69" : "#fff"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      )}
      <Svg style={$outerCircle} width={150} height={150}>
        <Path x={75} y={75} d={outerArc} fill="#ffffff44" />
        <Path x={75} y={75} d={viewArc} fill="#fff" />
        {viewDistance === 0 && <Path x={75} y={75} d={alignArc} fill={"#11CE69"} />}
      </Svg>
      {!isSpotted && <View style={$innerCircle}></View>}
    </View>
  )
}

const styles: StyleFn = ({ scale }) => {
  const $container: ViewStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  }

  const $innerCircle: ViewStyle = {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50),
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#fff",
  }

  const $outerCircle: ViewStyle = {
    position: "absolute",
    alignSelf: "center",
    width: scale(70),
    height: scale(70),
  }

  return { $container, $innerCircle, $outerCircle }
}
