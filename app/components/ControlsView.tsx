import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react"
import { View, LayoutRectangle, ViewProps } from "react-native"
import { Camera } from "three"
import { CameraControls } from "../utils/cameraControls"
import { Gesture, GestureDetector } from "react-native-gesture-handler"

export interface ControlsViewProps extends ViewProps {
  camera: Camera
  onCameraChange?: () => void
  enableZoom?: boolean
  minZoom?: number
  maxZoom?: number
}

export interface ControlsRef {
  getControls: () => CameraControls
}

export const ControlsView = forwardRef(
  (
    {
      camera,
      onCameraChange,
      enableZoom = true,
      minZoom = 1,
      maxZoom = 6,
      ...props
    }: ControlsViewProps,
    ref: ForwardedRef<ControlsRef>,
  ) => {
    const [size, setSize] = useState<LayoutRectangle | null>(null)

    const pinchGesture = Gesture.Pinch()
      .onStart((e) => {
        controls.onPinchStart(e)
      })
      .onUpdate((event) => {
        controls.onPinch(event)
      })
      .runOnJS(true)

    const panGesture = Gesture.Pan()
      .onStart((e) => {
        controls.onTouchStart(e)
      })
      .onUpdate((e) => {
        controls.onTouchMove(e)
      })
      .onEnd((e) => {
        controls.onTouchEnd(e)
      })
      .runOnJS(true)

    const controls: CameraControls = useMemo(() => {
      if (camera) {
        const ctrl = new CameraControls(camera)
        ctrl.enableZoom = enableZoom
        ctrl.minZoom = minZoom
        ctrl.maxZoom = maxZoom
        return ctrl
      }
      return null
    }, [camera, enableZoom])

    useEffect(() => {
      if (!controls || !onCameraChange) return undefined

      controls.addEventListener("change", onCameraChange)
      return () => controls.removeEventListener("change", onCameraChange)
    }, [controls, onCameraChange])

    useImperativeHandle(
      ref,
      () => ({
        getControls() {
          return controls
        },
      }),
      [controls],
    )

    useEffect(() => {
      if (!controls || !size) return

      controls.width = size.width
      controls.height = size.height
    }, [size, controls])

    return (
      <GestureDetector gesture={Gesture.Race(panGesture, pinchGesture)}>
        <View
          {...props}
          onLayout={(event) => {
            if (props.onLayout) {
              props.onLayout(event)
            }
            setSize(event.nativeEvent.layout)
          }}
        />
      </GestureDetector>
    )
  },
)

ControlsView.displayName = "ControlsView"
