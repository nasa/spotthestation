import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { View, ViewStyle } from "react-native"
import MapboxGL, { MapState } from "@rnmapbox/maps"
import Config from "../../../config"
import { LatLng } from "react-native-maps"
import { colors } from "../../../theme"
import { computeOld, toGeoJSON } from "../../../utils/terminator"
import { Vector3 } from "three"
import { useISSPathCurve } from "../../../utils/useISSPathCurve"
import { OrbitPoint } from "../../../services/api"
import { CameraRef } from "@rnmapbox/maps/lib/typescript/components/Camera"

const positionMarker = require("../../../../assets/icons/position.png")
const pinMarker = require("../../../../assets/icons/fi_map-pin.png")

interface MapBoxProps {
  style?: ViewStyle
  withNightOverlay?: boolean
  zoom?: number
  zoomEnabled?: boolean
  issPath?: OrbitPoint[]
  onPress?: (params: any) => void
  markers?: LatLng[]
  onCameraChange?: (coords: [number, number]) => void
  defaultCameraPosition?: [number, number]
}

export function MapBox({
  style,
  withNightOverlay = true,
  zoomEnabled = false,
  zoom = 0,
  issPath = [],
  onPress,
  markers = [],
  onCameraChange,
  defaultCameraPosition,
}: MapBoxProps) {
  const [terminatorCoords, setTerminatorCoords] = useState<any>(null)
  const [loading, setLoading] = useState<any>(true)
  const [issCoords2D, setIssCoords2D] = useState<[number, number]>(null)
  const cameraRef = useRef<CameraRef>()

  const mapper = useCallback((p: [number, number]) => {
    return new Vector3(p[0], p[1], 0)
  }, [])

  const { curve, curveStartsAt, curveEndsAt, updateCurve } = useISSPathCurve(issPath, mapper)

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

      if (point.x > 180) return updateCurve()
      setIssCoords2D([point.x, point.y])
    }
    update()

    const timeout = setInterval(update, 10000)
    return () => {
      clearInterval(timeout)
    }
  }, [curve])

  useEffect(() => {
    MapboxGL.setAccessToken(Config.MAPBOX_API_TOKEN)
      .then(() => {
        MapboxGL.setTelemetryEnabled(false)
        setLoading(false)
      })
      .catch((e) => console.log(e))
  }, [])

  useEffect(() => {
    const update = () => setTerminatorCoords(toGeoJSON(computeOld(new Date())))
    update()

    const timeout = setInterval(update, 10000)
    return () => {
      clearInterval(timeout)
    }
  }, [])

  useEffect(() => {
    if (!cameraRef.current || !defaultCameraPosition) return

    cameraRef.current.setCamera({
      centerCoordinate: [defaultCameraPosition[1], defaultCameraPosition[0]],
    })
  }, [defaultCameraPosition?.[0], defaultCameraPosition?.[1]])

  const issPathCoords2D = useMemo(
    () => (curve ? curve.getPoints(200).map((p) => [p.x, p.y]) : []),
    [curve],
  )

  const handleCameraChange = useCallback(
    (state: MapState) => {
      if (!onCameraChange) return
      onCameraChange([state.properties.center[1], state.properties.center[0]])
    },
    [onCameraChange],
  )

  return !loading ? (
    <MapboxGL.MapView
      onCameraChanged={handleCameraChange}
      style={style}
      logoEnabled={false}
      styleURL="mapbox://styles/mapbox/satellite-streets-v11"
      attributionEnabled={false}
      zoomEnabled={zoomEnabled}
      scaleBarEnabled={false}
      onPress={onPress}
      pitchEnabled={false}
      rotateEnabled={false}
      projection="mercator"
    >
      {withNightOverlay && (
        <MapboxGL.ShapeSource id="daynight-layer" shape={terminatorCoords}>
          <MapboxGL.FillLayer
            id="daynight"
            sourceID="daynight-layer"
            style={{ fillOpacity: 0.5, fillColor: colors.palette.buttonBlue }} // eslint-disable-line react-native/no-inline-styles
          />
        </MapboxGL.ShapeSource>
      )}
      <MapboxGL.Camera
        ref={cameraRef}
        animationDuration={0}
        animationMode="none"
        zoomLevel={zoom}
        defaultSettings={
          defaultCameraPosition
            ? {
                zoomLevel: zoom,
                centerCoordinate: [defaultCameraPosition[1], defaultCameraPosition[0]],
              }
            : markers.length && {
                zoomLevel: zoom,
                centerCoordinate: [markers[0].longitude, markers[0].latitude],
              }
        }
      />
      {Boolean(issPathCoords2D?.length) && (
        <>
          <MapboxGL.ShapeSource
            id="myShapeSource"
            shape={{
              type: "LineString",
              coordinates: issPathCoords2D
                .filter((item) => item[1] < issCoords2D[1])
                .map((item) => [...item].reverse()),
            }}
          >
            <MapboxGL.LineLayer
              id="myLineLayer"
              style={{ lineColor: colors.palette.green, lineWidth: 3 }} // eslint-disable-line react-native/no-inline-styles
            />
          </MapboxGL.ShapeSource>
          <MapboxGL.ShapeSource
            id="myShapeSourceDashed"
            shape={{
              type: "LineString",
              coordinates: issPathCoords2D
                .filter((item) => item[1] > issCoords2D[1])
                .map((item) => [...item].reverse()),
            }}
          >
            <MapboxGL.LineLayer
              id="myLineLayerDashed"
              style={{ lineColor: colors.palette.neutral450, lineWidth: 3, lineDasharray: [3, 2] }} // eslint-disable-line react-native/no-inline-styles
            />
          </MapboxGL.ShapeSource>
        </>
      )}
      {Boolean(issCoords2D) && (
        <MapboxGL.ShapeSource
          id="myShapeSourceMarker"
          shape={{ type: "Point", coordinates: [...issCoords2D].reverse() }}
        >
          <MapboxGL.Images images={{ marker: positionMarker }} />
          <MapboxGL.SymbolLayer
            id="myShapeSourceMarker"
            style={{ iconImage: "marker", iconSize: 0.5 }} // eslint-disable-line react-native/no-inline-styles
          />
        </MapboxGL.ShapeSource>
      )}
      {Boolean(markers.length) &&
        markers.map((marker) => (
          <MapboxGL.ShapeSource
            key={marker.latitude.toString()}
            id="myShapeSourceMarkerPosition"
            shape={{ type: "Point", coordinates: [marker.longitude, marker.latitude] }}
          >
            <MapboxGL.Images images={{ pin: pinMarker }} />
            <MapboxGL.SymbolLayer
              id="myShapeSourceMarkerPosition"
              style={{ iconImage: "pin", iconSize: 0.25, iconAnchor: "bottom" }} // eslint-disable-line react-native/no-inline-styles
            />
          </MapboxGL.ShapeSource>
        ))}
    </MapboxGL.MapView>
  ) : (
    <View />
  )
}
