/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { ViewStyle, View, Image, ImageStyle } from "react-native"
import { Svg, Polygon, Polyline } from "react-native-svg"
import { Icon } from "../../../components"
import { colors, scale } from "../../../theme"
import { compute, latLonTo2D } from "../../../utils/terminator"
import { Vector3 } from "three"
import { OrbitPoint } from "../../../services/api"
import { useISSPathCurve } from "../../../utils/useISSPathCurve"
const map = require("../../../../assets/images/World-Map.jpg")

interface FlatMapProps {
  style?: ViewStyle
  issPath?: OrbitPoint[]
  currentLocation?: [number, number]
}

export function FlatMap({ style, issPath = [], currentLocation }: FlatMapProps) {
  const [layout, setLayout] = useState({ width: 0, height: 0 })
  const [terminatorCoords2D, setTerminatorCoords2D] = useState<[number, number][]>([])
  const [issCoords2D, setIssCoords2D] = useState<[number, number]>(null)
  const mapper = useCallback((p: [number, number]) => {
    const coords = latLonTo2D([p[0], p[1]])
    return new Vector3(coords[0], coords[1], 0)
  }, [])

  const { curve, curveStartsAt, curveEndsAt, updateCurve } = useISSPathCurve(issPath, mapper)

  useEffect(() => {
    const update = () => {
      setTerminatorCoords2D(compute(new Date()).map((latLon) => latLonTo2D(latLon)))
    }
    update()

    const timeout = setInterval(update, 10000)
    return () => {
      clearInterval(timeout)
    }
  }, [])

  useEffect(() => {
    if (!curve) {
      setIssCoords2D(null)
      return undefined
    }
    const update = () => {
      if (!issPath?.length || new Date(issPath[issPath.length - 1].date) < new Date()) return
      const t = (Date.now() - curveStartsAt) / (curveEndsAt - curveStartsAt)
      if (t > 1) return updateCurve()

      let point: Vector3
      try {
        point = curve.getPoint(t)
      } catch (e) {
        console.error(e)
        return
      }

      if (point.x > 1) return updateCurve()
      setIssCoords2D([point.x, point.y])
    }
    update()

    const timeout = setInterval(update, 10000)
    return () => {
      clearInterval(timeout)
    }
  }, [curve])

  const issPathCoords2D = useMemo(
    () => (curve ? curve.getPoints(200).map((p) => [p.x, p.y]) : []),
    [curve],
  )

  const currentLocation2D = currentLocation ? latLonTo2D(currentLocation) : []

  return (
    <View style={style} testID="flat-map">
      <Image source={map} style={$map} />
      <Svg style={$overlay} onLayout={({ nativeEvent }) => setLayout(nativeEvent.layout)}>
        <Polygon
          fillOpacity={0.5}
          points={terminatorCoords2D
            .map((c) => [c[0] * layout.width, c[1] * layout.height].toString())
            .join(" ")}
          fill={colors.palette.buttonBlue}
        />

        {Boolean(issPathCoords2D.length) && Boolean(issCoords2D) && (
          <Polyline
            testID="iss-path-polyline"
            points={issPathCoords2D
              .filter((c) => c[0] < issCoords2D[0])
              .map((c) => [c[0] * layout.width, c[1] * layout.height].toString())
              .join(" ")}
            stroke={colors.palette.green}
            fill="transparent"
            strokeWidth={3}
          />
        )}

        {Boolean(issPathCoords2D.length) && Boolean(issCoords2D) && (
          <Polyline
            points={issPathCoords2D
              .filter((c) => c[0] >= issCoords2D[0])
              .map((c) => [c[0] * layout.width, c[1] * layout.height].toString())
              .join(" ")}
            stroke={colors.palette.neutral450}
            fill="transparent"
            strokeDasharray={"5, 5"}
            strokeWidth={3}
          />
        )}
      </Svg>
      {Boolean(issCoords2D) && (
        // eslint-disable-next-line react-native/no-inline-styles
        <View
          testID="iss-marker"
          style={{
            position: "absolute",
            left: issCoords2D[0] * layout.width - scale(18),
            top: issCoords2D[1] * layout.height - scale(18),
          }}
        >
          <Icon icon="position" size={36} />
        </View>
      )}
      {Boolean(currentLocation) && (
        // eslint-disable-next-line react-native/no-inline-styles
        <View
          testID="current-location-marker"
          style={{
            position: "absolute",
            left: currentLocation2D[0] * layout.width,
            top: currentLocation2D[1] * layout.height - scale(15),
          }}
        >
          <Icon icon="fiMapPin" size={15} />
        </View>
      )}
    </View>
  )
}

const $map: ImageStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
}

const $overlay: ViewStyle = {
  width: "100%",
  height: "100%",
}
