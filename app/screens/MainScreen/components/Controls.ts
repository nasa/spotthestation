import { Camera, EventDispatcher, Spherical, TOUCH, Vector2, Vector3, BaseEvent } from "three"
import { NativeTouchEvent } from "react-native"

const STATE = {
  NONE: -1,
  TOUCH_ROTATE: 3,
}

export class Controls extends EventDispatcher {
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
  rotateSpeed: number
  touches: { ONE: TOUCH }
  target0: Vector3
  position0: Vector3
  update: () => boolean
  private changeEvent: BaseEvent
  private startEvent: BaseEvent
  private endEvent: BaseEvent
  private state
  private spherical: Spherical
  private sphericalDelta: Spherical
  private scale
  private panOffset: Vector3
  private rotateStart: Vector2
  private rotateEnd: Vector2
  private rotateDelta: Vector2
  saveState: () => void
  reset: () => void
  private rotateLeft: (angle: number) => void
  private rotateUp: (angle: number) => void
  width: number
  getElementWidth: () => number
  height: number
  getElementHeight: () => number
  private handleTouchStartRotate: (event: NativeTouchEvent) => void
  private handleTouchMoveRotate: (event: NativeTouchEvent) => void
  onTouchStart: (event: NativeTouchEvent) => void
  onTouchMove: (event: NativeTouchEvent) => void
  onTouchEnd: (event: NativeTouchEvent) => void

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
    this.rotateSpeed = 0.5
    this.touches = { ONE: TOUCH.ROTATE }
    this.changeEvent = { type: "change" }
    this.startEvent = { type: "start" }
    this.endEvent = { type: "end" }
    this.state = STATE.NONE
    this.spherical = new Spherical()
    this.sphericalDelta = new Spherical()
    this.scale = 1
    this.panOffset = new Vector3()
    this.rotateStart = new Vector2()
    this.rotateEnd = new Vector2()
    this.rotateDelta = new Vector2()

    this.saveState = () => {
      this.target0.copy(this.target)
      this.position0.copy(this.object.position)
    }

    this.reset = () => {
      this.target.copy(this.target0)
      this.object.position.copy(this.position0)
      this.object.updateProjectionMatrix()
      this.dispatchEvent(this.changeEvent)
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

    this.handleTouchStartRotate = ({ touches }) => {
      if (touches.length === 1) {
        this.rotateStart.set(touches[0].pageX, touches[0].pageY)
      } else {
        const x = 0.5 * (touches[0].pageX + touches[1].pageX)
        const y = 0.5 * (touches[0].pageY + touches[1].pageY)
        this.rotateStart.set(x, y)
      }
    }

    this.handleTouchMoveRotate = ({ touches }) => {
      if (touches.length === 1) {
        this.rotateEnd.set(touches[0].pageX, touches[0].pageY)
      } else {
        const x = 0.5 * (touches[0].pageX + touches[1].pageX)
        const y = 0.5 * (touches[0].pageY + touches[1].pageY)
        this.rotateEnd.set(x, y)
      }
      this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart).multiplyScalar(this.rotateSpeed)
      this.rotateLeft((2 * Math.PI * this.rotateDelta.x) / this.getElementHeight())
      this.rotateUp((2 * Math.PI * this.rotateDelta.y) / this.getElementHeight())
      this.rotateStart.copy(this.rotateEnd)
    }

    this.onTouchStart = (event) => {
      if (this.enabled === false) return

      switch (event.touches.length) {
        case 1:
          switch (this.touches.ONE) {
            case TOUCH.ROTATE:
              if (this.enableRotate === false) return
              this.handleTouchStartRotate(event)
              this.state = STATE.TOUCH_ROTATE
              break
            default:
              this.state = STATE.NONE
          }
          break
        default:
          this.state = STATE.NONE
      }
      if (this.state !== STATE.NONE) {
        this.dispatchEvent(this.startEvent)
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
      this.dispatchEvent(this.endEvent)
      this.state = STATE.NONE
    }

    this.target0 = this.target.clone()
    this.position0 = this.object.position.clone()

    this.update = (() => {
      const offset = new Vector3()
      return () => {
        const position = this.object.position
        offset.copy(position).sub(this.target)

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
        this.spherical.radius *= this.scale
        this.spherical.radius = Math.max(
          this.minDistance,
          Math.min(this.maxDistance, this.spherical.radius),
        )
        this.target.add(this.panOffset)

        offset.setFromSpherical(this.spherical)

        position.copy(this.target).add(offset)
        this.object.lookAt(this.target)
        this.sphericalDelta.set(0, 0, 0)
        this.panOffset.set(0, 0, 0)
        this.scale = 1

        return false
      }
    })()

    this.update()
  }
}
