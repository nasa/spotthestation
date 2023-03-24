/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect, useMemo, useRef, useState } from "react"
import { ViewStyle } from "react-native"
// import MapboxGL from "@rnmapbox/maps"
// import GeoJSONTerminator from "@webgeodatavore/geojson.terminator"
// import Config from "../../../config"
import MapView, { Circle, LatLng, PROVIDER_GOOGLE, MapCircle, Polyline, Marker } from "react-native-maps"
import { Icon } from "../../../components"
import { colors } from "../../../theme"
import { NightOverlay } from "../components/NightOverlay"

// eslint-disable-next-line @typescript-eslint/no-floating-promises
// MapboxGL.setAccessToken(Config.MAPBOX_API_TOKEN)
// MapboxGL.setTelemetryEnabled(false)
// MapboxGL.setConnected(true)
// MapboxGL.setWellKnownTileServer('Mapbox')

interface GoogleMapProps {
  style?: ViewStyle,
  withNightOverlay?: boolean,
  zoom?: number,
  issPathCoords?: [number, number][]
  issMarkerPosition?: [number, number]
  onPress?: (params: any) => void
  markers?: LatLng[]
}

export function GoogleMap({ style, withNightOverlay = true, zoom = 3, issPathCoords = [], issMarkerPosition, onPress, markers = [] }: GoogleMapProps) {
  const [nightOverlayCenter, setNightOverlayCenter] = useState<LatLng>({ latitude: 0, longitude: 0 })
  const [nightOverlayRadius, setNightOverlayRadius] = useState(0)
  const mapRef = useRef<MapView | null>(null)
  const circleRef = useRef<MapCircle | null>(null)
  let nightOverlay: NightOverlay

  if (withNightOverlay) {
    nightOverlay = useMemo(() => {
      return new NightOverlay()
    }, [])
  }

  useEffect(() => {
    mapRef.current?.getCamera().then((cam) => {
      cam.zoom = zoom
      mapRef.current?.setCamera(cam)
    }).catch(e => console.log(e))
  }, [zoom])

  useEffect(() => {
    let timeout: NodeJS.Timer

    if (withNightOverlay) {
      setNightOverlayCenter(nightOverlay.getShadowPosition())
      setNightOverlayRadius(nightOverlay.getShadowRadiusFromAngle(1))
      timeout = setInterval(() => {
        setNightOverlayCenter(nightOverlay.getShadowPosition())
        setNightOverlayRadius(nightOverlay.getShadowRadiusFromAngle(1))
        circleRef.current && circleRef.current.setNativeProps({ fillColor: "rgba(11, 61, 145, 0.5)" })
      }, 10000)
    }

    return () => {
      clearInterval(timeout)
    }
  }, [])

  return (
    <>
      {/* <MapboxGL.MapView 
          style={$GoogleMap}
          logoEnabled={false}
          styleURL="mapbox://styles/mapbox/satellite-streets-v12"
          attributionEnabled={false}
          // zoomEnabled={false}
          scaleBarEnabled={false}
        >
          <MapboxGL.ShapeSource id="daynight-layer" shape={geoJSON}>
            <MapboxGL.FillLayer id="daynight" sourceID="daynight-layer" style={{ fillOpacity: 0.5, fillColor: colors.palette.buttonBlue }} />
          </MapboxGL.ShapeSource>
          <MapboxGL.Camera zoomLevel={0} centerCoordinate={[-122.4473, 37.7535]} />
        </MapboxGL.MapView> */}
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={style}
        mapType="satellite"
        zoomEnabled={false}
        initialRegion={{
          latitude: 28.999,
          longitude: 28.999,
          latitudeDelta: 120,
          longitudeDelta: 120,
        }}
        onPress={onPress}
      >
        {withNightOverlay && (
          <Circle
            ref={circleRef}
            center={nightOverlayCenter}
            radius={nightOverlayRadius}
            fillColor="rgba(11, 61, 145, 0.5)"
            strokeWidth={1}
          />
        )}
        {Boolean(issPathCoords.length) && <Polyline
          coordinates={issPathCoords.map((p) => ({ latitude: p[0], longitude: p[1] }))}
          strokeColor={colors.palette.green}
          strokeWidth={3}
        />}
        {Boolean(issMarkerPosition) && <Marker coordinate={{ latitude: issMarkerPosition[0], longitude: issMarkerPosition[1] }}>
          <Icon icon="iss" size={36} />
        </Marker>}
        {Boolean(markers.length) && markers.map(marker => <Marker key={marker.longitude} coordinate={marker} />)}
      </MapView>
    </>
  )
}
