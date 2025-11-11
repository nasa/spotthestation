import {
  Camera,
  EventDispatcher,
  Spherical,
  TOUCH,
  Vector2,
  Vector3,
  BaseEvent,
  Quaternion,
} from "three"
import {
  GestureStateChangeEvent,
  GestureUpdateEvent,
  PinchGestureHandlerEventPayload,
} from "react-native-gesture-handler"
import { PanGestureHandlerEventPayload } from "react-native-screens"

const STATE = {
  NONE: -1,
  TOUCH_ROTATE: 3,
}

export class CameraControls extends EventDispatcher {
  object: Camera & {
    fov: number
    top: number
    right: number
    left: number
    bottom: number
    zoom: number
    updateProjectionMatrix: () => void
    isOrthographicCamera?: boolean
    isPerspectiveCamera?: boolean
  }

  enabled: boolean
  target: Vector3
  minDistance: number
  maxDistance: number
  minPolarAngle: number
  maxPolarAngle: number
  minAzimuthAngle: number
  maxAzimuthAngle: number
  enableRotate: boolean
  enableZoom: boolean
  minZoom: number
  maxZoom: number
  rotateSpeed: number
  touches: { ONE: TOUCH }
  target0: Vector3
  position0: Vector3
  quat: Quaternion
  update: () => boolean
  private changeEvent: BaseEvent
  state
  spherical: Spherical
  private sphericalDelta: Spherical
  private panOffset: Vector3
  rotateStart: Vector2
  rotateEnd: Vector2
  rotateDelta: Vector2
  updateObjectUp: () => void
  saveState: () => void
  setTarget: (target: Vector3) => void
  reset: () => void
  rotateLeft: (angle: number) => void
  rotateUp: (angle: number) => void
  width: number
  getElementWidth: () => number
  height: number
  getElementHeight: () => number
  handleTouchStartRotate: (event: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => void
  handleTouchMoveRotate: (event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => void
  onTouchStart: (event: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => void
  onTouchMove: (event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => void
  onTouchEnd: (event: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => void
  onPinch: (event: GestureUpdateEvent<PinchGestureHandlerEventPayload>) => void
  onPinchStart: (event: GestureUpdateEvent<PinchGestureHandlerEventPayload>) => void
  lastScale: number

  constructor(object) {
    super()
    this.object = object
    this.enabled = true
    this.target = new Vector3()
    this.minDistance = 0
    this.maxDistance = Infinity
    this.minPolarAngle = 0 // radians
    this.maxPolarAngle = Math.PI // radians
    this.minAzimuthAngle = -Infinity // radians
    this.maxAzimuthAngle = Infinity // radians
    this.enableRotate = true
    this.enableZoom = true
    this.rotateSpeed = 0.5
    this.touches = { ONE: TOUCH.ROTATE }
    this.changeEvent = { type: "change" }
    this.state = STATE.NONE
    this.spherical = new Spherical()
    this.sphericalDelta = new Spherical()
    this.panOffset = new Vector3()
    this.rotateStart = new Vector2()
    this.rotateEnd = new Vector2()
    this.rotateDelta = new Vector2()
    this.quat = new Quaternion()
    this.lastScale = 1
    this.minZoom = 1
    this.maxZoom = 6

    this.setTarget = (target) => {
      this.target = target
    }

    this.updateObjectUp = () => {
      this.quat = new Quaternion().setFromUnitVectors(this.object.up, new Vector3(0, 1, 0))
    }

    this.saveState = () => {
      this.target0.copy(this.target)
      this.position0.copy(this.object.position)
    }

    this.reset = () => {
      this.target.copy(this.target0)
      this.object.position.copy(this.position0)
      this.object.updateProjectionMatrix()
      this.update()
      this.state = STATE.NONE
    }

    this.rotateLeft = (angle) => {
      this.sphericalDelta.theta -= angle
    }

    this.rotateUp = (angle) => {
      this.sphericalDelta.phi -= angle
    }

    this.width = 0
    this.getElementWidth = () => {
      return this.width
    }
    this.height = 0
    this.getElementHeight = () => {
      return this.height
    }

    this.handleTouchStartRotate = (e) => {
      const x = e.absoluteX - e.translationX
      const y = e.absoluteY - e.translationY
      this.rotateStart.set(x, y)
    }

    this.handleTouchMoveRotate = (e) => {
      const x = e.absoluteX
      const y = e.absoluteY
      this.rotateEnd.set(x, y)
      this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart).multiplyScalar(this.rotateSpeed)
      this.rotateLeft((2 * Math.PI * this.rotateDelta.x) / this.getElementHeight())
      this.rotateUp((2 * Math.PI * this.rotateDelta.y) / this.getElementHeight())
      this.rotateStart.copy(this.rotateEnd)
    }

    this.onTouchStart = (event) => {
      if (this.enabled === false) return

      switch (this.touches.ONE) {
        case TOUCH.ROTATE:
          if (this.enableRotate === false) return
          this.handleTouchStartRotate(event)
          this.state = STATE.TOUCH_ROTATE
          break
        default:
          this.state = STATE.NONE
      }
    }

    this.onTouchMove = (event) => {
      if (this.enabled === false) return

      switch (this.state) {
        case STATE.TOUCH_ROTATE:
          if (this.enableRotate === false) return
          this.handleTouchMoveRotate(event)
          this.update()
          break
        default:
          this.state = STATE.NONE
      }
    }

    this.onTouchEnd = () => {
      if (this.enabled === false) return

      this.state = STATE.NONE
    }

    this.onPinch = (event) => {
      if (!this.enableZoom) return

      this.object.zoom = Math.max(
        this.minZoom,
        Math.min(this.maxZoom, this.lastScale * event.scale),
      )
      this.object.updateProjectionMatrix()

      this.update()
    }

    this.onPinchStart = () => {
      if (!this.enableZoom) return

      this.lastScale = this.object.zoom
    }

    this.target0 = this.target.clone()
    this.position0 = this.object.position.clone()

    this.update = (() => {
      const offset = new Vector3()
      return () => {
        const position = this.object.position
        offset.copy(position).sub(this.target)
        offset.applyQuaternion(this.quat)

        this.spherical.setFromVector3(offset)

        this.spherical.theta += this.sphericalDelta.theta
        this.spherical.phi += this.sphericalDelta.phi

        this.spherical.theta = Math.max(
          this.minAzimuthAngle,
          Math.min(this.maxAzimuthAngle, this.spherical.theta),
        )
        this.spherical.phi = Math.max(
          this.minPolarAngle,
          Math.min(this.maxPolarAngle, this.spherical.phi),
        )
        this.spherical.makeSafe()
        this.spherical.radius = Math.max(
          this.minDistance,
          Math.min(this.maxDistance, this.spherical.radius),
        )
        this.target.add(this.panOffset)

        offset.setFromSpherical(this.spherical)

        offset.applyQuaternion(this.quat.clone().invert())
        position.copy(this.target).add(offset)
        this.object.lookAt(this.target)
        this.sphericalDelta.set(0, 0, 0)
        this.panOffset.set(0, 0, 0)

        this.dispatchEvent(this.changeEvent)

        return false
      }
    })()

    this.update()
  }
}
