/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect, useMemo, useState } from "react"
import { ViewStyle, View, Image, ImageStyle } from "react-native"
import { Svg, Polygon, Polyline } from "react-native-svg"
import { Icon } from "../../../components"
import { colors } from "../../../theme"
import { compute, latLonTo2D } from "../../../utils/terminator"
const map = require('../../../../assets/images/World-Map.jpg')

interface FlatMapProps {
  style?: ViewStyle,
  issPathCoords?: [number, number][]
  issMarkerPosition?: [number, number]
  currentLocation?: [number, number]
}

export function FlatMap({ style, issPathCoords = [], issMarkerPosition, currentLocation }: FlatMapProps) {
  const [layout, setLayout] = useState({ width: 0, height: 0 })
  const [terminatorCoords2D, setTerminatorCoords2D] = useState<[number, number][]>([])

  useEffect(() => {
    const update = () => setTerminatorCoords2D(compute(new Date()).map((latLon) => latLonTo2D(latLon)))
    update()

    const timeout = setInterval(update, 10000)
    return () => {
      clearInterval(timeout)
    }
  }, [])

  const issPathCoords2D = useMemo(
    () => issPathCoords.map((latLon) => latLonTo2D(latLon)),
    [issPathCoords]
  )

  const issCoords2D = issMarkerPosition ?  latLonTo2D(issMarkerPosition) : []
  const currentLocation2D = currentLocation ?  latLonTo2D(currentLocation) : []

  return (
      <View style={style}>
        <Image source={map} style={$map} />
        <Svg
          style={$overlay}
          onLayout={({ nativeEvent }) => setLayout(nativeEvent.layout)}
        >
          <Polygon
            fillOpacity={0.5}
            points={terminatorCoords2D.map((c) => [c[0] * layout.width, c[1] * layout.height].toString()).join(' ')}
            fill={colors.palette.buttonBlue}
          />

          {Boolean(issPathCoords2D.length) && (
            <Polyline
              points={issPathCoords2D.filter((c) => c[0] < issCoords2D[0]).map((c) => [c[0] * layout.width, c[1] * layout.height].toString()).join(' ')}
              stroke={colors.palette.green}
              fill="transparent"
              strokeWidth={3}
            />
          )}

          {Boolean(issPathCoords2D.length) && (
            <Polyline
              points={issPathCoords2D.filter((c) => c[0] >= issCoords2D[0]).map((c) => [c[0] * layout.width, c[1] * layout.height].toString()).join(' ')}
              stroke={colors.palette.neutral450}
              fill="transparent"
              strokeDasharray={"5, 5"}
              strokeWidth={3}
            />
          )}
        </Svg>
        {Boolean(issMarkerPosition) && (
          // eslint-disable-next-line react-native/no-inline-styles
          <View style={{
            position: 'absolute',
            left: issCoords2D[0] * layout.width - 18,
            top: issCoords2D[1] * layout.height - 18
          }}>
            <Icon icon="position" size={36} />
          </View>
        )}
        {Boolean(currentLocation) && (
          // eslint-disable-next-line react-native/no-inline-styles
          <View style={{
            position: 'absolute',
            left: currentLocation2D[0] * layout.width,
            top: currentLocation2D[1] * layout.height - 15
          }}>
            <Icon icon="fiMapPin" size={15} />
          </View>
        )}
      </View>
  )
}

const $map: ImageStyle = {
  width: '100%',
  height: '100%' ,
  position: 'absolute'
}

const $overlay: ViewStyle = {
  width: '100%',
  height: '100%'
}