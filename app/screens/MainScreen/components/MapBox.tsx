/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect, useState } from "react"
import { Platform, ViewStyle } from "react-native"
import MapboxGL from "@rnmapbox/maps"
import Config from "../../../config"
import { LatLng } from "react-native-maps"
import { colors } from "../../../theme"
import { computeOld, toGeoJSON } from "../../../utils/terminator"

const positionMarker = require("../../../../assets/icons/position.png")
const pinMarker = require("../../../../assets/icons/fi_map-pin.png")

// eslint-disable-next-line @typescript-eslint/no-floating-promises
MapboxGL.setAccessToken(Config.MAPBOX_API_TOKEN)
MapboxGL.setTelemetryEnabled(false)
if (Platform.OS === 'android') {
  MapboxGL.setConnected(true)
  MapboxGL.setWellKnownTileServer('Mapbox')
}

interface MapBoxProps {
  style?: ViewStyle,
  withNightOverlay?: boolean,
  zoom?: number,
  zoomEnabled?: boolean,
  issPathCoords?: [number, number][]
  issMarkerPosition?: [number, number]
  onPress?: (params: any) => void
  markers?: LatLng[]
}

export function MapBox({ style, withNightOverlay = true, zoomEnabled=false, zoom = 0, issPathCoords = [], issMarkerPosition, onPress, markers = [] }: MapBoxProps) {
  const [terminatorCoords, setTerminatorCoords] = useState<any>(null)
  
  useEffect(() => {
    const update = () => setTerminatorCoords(toGeoJSON(computeOld(new Date())))
    update()

    const timeout = setInterval(update, 10000)
    return () => {
      clearInterval(timeout)
    }
  }, [])

  return (
    <MapboxGL.MapView 
      style={style}
      logoEnabled={false}
      styleURL={Platform.OS === 'android' ? "mapbox://styles/mapbox/satellite-streets-v12" : "mapbox://styles/mapbox/satellite-streets-v11"}
      attributionEnabled={false}
      zoomEnabled={zoomEnabled}
      scaleBarEnabled={false}
      onPress={onPress}
      pitchEnabled={false}
      rotateEnabled={false}
      projection="mercator"
    >
      {withNightOverlay &&
        <MapboxGL.ShapeSource id="daynight-layer" shape={terminatorCoords}>
          <MapboxGL.FillLayer id="daynight" sourceID="daynight-layer" style={{ fillOpacity: 0.5, fillColor: colors.palette.buttonBlue }} />
        </MapboxGL.ShapeSource>
      }
      <MapboxGL.Camera zoomLevel={zoom} defaultSettings={markers.length && { centerCoordinate: [markers[0].longitude, markers[0].latitude] }}/>
      {Boolean(issPathCoords?.length) &&
        <>
          <MapboxGL.ShapeSource id="myShapeSource" shape={{type: 'LineString', coordinates: issPathCoords.filter(item => item[1] < issMarkerPosition[1]).map(item => [...item].reverse())}}>
            <MapboxGL.LineLayer id="myLineLayer" style={{lineColor: colors.palette.green, lineWidth: 3}} />
          </MapboxGL.ShapeSource>
          <MapboxGL.ShapeSource id="myShapeSourceDashed" shape={{type: 'LineString',  coordinates: issPathCoords.filter(item => item[1] > issMarkerPosition[1]).map(item => [...item].reverse())}}>
            <MapboxGL.LineLayer id="myLineLayerDashed" style={{lineColor: colors.palette.neutral450, lineWidth: 3, lineDasharray: [3, 2]}} />
          </MapboxGL.ShapeSource>
        </>
      }
      {Boolean(issMarkerPosition) && 
        <MapboxGL.ShapeSource id="myShapeSourceMarker" shape={{type: 'Point', coordinates: [...issMarkerPosition].reverse()}}>
          <MapboxGL.SymbolLayer
            id="myShapeSourceMarker"
            style={{
              iconImage: positionMarker,
              iconSize: 0.5,
            }}
          />
        </MapboxGL.ShapeSource>
      }
      {Boolean(markers.length) && 
        markers.map(marker => (
          <MapboxGL.ShapeSource key={marker.latitude.toString()} id="myShapeSourceMarkerPosition" shape={{type: 'Point', coordinates: [marker.longitude, marker.latitude]}}>
            <MapboxGL.SymbolLayer
              id="myShapeSourceMarkerPosition"
              style={{
                iconImage: pinMarker,
                iconSize: .25,
              }}
            />
          </MapboxGL.ShapeSource>
        ))
      }
    </MapboxGL.MapView>
  )
}
