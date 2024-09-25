import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react"
import { View, PanResponder, LayoutRectangle, ViewProps } from "react-native"
import { Camera } from "three"
import { CameraControls } from "../utils/cameraControls"

export interface ControlsViewProps extends ViewProps {
  camera: Camera
  onPositionChange?: () => void
}

export interface ControlsRef {
  getControls: () => CameraControls
}

export const ControlsView = forwardRef(
  ({ camera, onPositionChange, ...props }: ControlsViewProps, ref: ForwardedRef<ControlsRef>) => {
    const [size, setSize] = useState<LayoutRectangle | null>(null)

    const controls: CameraControls = useMemo(() => {
      if (camera) {
        return new CameraControls(camera)
      }
      return null
    }, [camera])

    useEffect(() => {
      if (!controls || !onPositionChange) return undefined

      controls.addEventListener("change", onPositionChange)
      return () => controls.removeEventListener("change", onPositionChange)
    }, [controls, onPositionChange])

    useImperativeHandle(
      ref,
      () => ({
        getControls() {
          return controls
        },
      }),
      [controls],
    )

    const responder = useMemo(() => {
      if (!controls) return null
      return PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant({ nativeEvent }) {
          return controls.onTouchStart(nativeEvent)
        },
        onPanResponderMove({ nativeEvent }) {
          return controls.onTouchMove(nativeEvent)
        },
        onPanResponderRelease({ nativeEvent }) {
          return controls.onTouchEnd(nativeEvent)
        },
        onPanResponderTerminate({ nativeEvent }) {
          return controls.onTouchEnd(nativeEvent)
        },
      })
    }, [controls])

    useEffect(() => {
      if (!controls || !size) return

      controls.width = size.width
      controls.height = size.height
    }, [size, controls])

    return (
      <View
        {...props}
        {...responder?.panHandlers}
        onLayout={(event) => {
          if (props.onLayout) {
            props.onLayout(event)
          }
          setSize(event.nativeEvent.layout)
        }}
      />
    )
  },
)

ControlsView.displayName = "ControlsView"
