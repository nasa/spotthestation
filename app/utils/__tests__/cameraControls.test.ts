import { Camera, Vector3, Spherical } from "three"
import { CameraControls } from "../cameraControls"

type CameraType = CameraControls["object"]

describe("CameraControls", () => {
  let camera: CameraType
  let controls: CameraControls

  beforeEach(() => {
    camera = new Camera() as CameraType
    camera.position.set(0, 0, 5) // Initialize camera position
    camera.updateProjectionMatrix = jest.fn()
    controls = new CameraControls(camera)
  })

  it("should initialize with default properties", () => {
    expect(controls.enabled).toBe(true)
    expect(controls.minDistance).toBe(0)
    expect(controls.maxDistance).toBe(Infinity)
    expect(controls.target).toBeInstanceOf(Vector3)
    expect(controls.spherical).toBeInstanceOf(Spherical)
  })

  it("should set the target correctly", () => {
    const newTarget = new Vector3(1, 1, 1)
    controls.setTarget(newTarget)
    expect(controls.target).toEqual(newTarget)
  })

  it("should save and reset state correctly", () => {
    const newTarget = controls.target.set(10, 10, 10)
    const newPosition = camera.position.set(20, 20, 20)

    controls.saveState()
    controls.reset()

    expect(controls.target).toEqual(newTarget)
    expect(camera.position).toEqual(newPosition)
    expect(controls.state).toBe(-1) // STATE.NONE
  })

  it("should handle rotation updates", () => {
    const initialTheta = controls.spherical.theta

    controls.rotateLeft(Math.PI / 4) // Rotate 45 degrees
    controls.update()

    expect(controls.spherical.theta).toBeCloseTo(initialTheta - Math.PI / 4, 5)
  })

  it("should dispatch events on touch move", () => {
    const touchStart = {
      x: 0,
      y: 0,
      absoluteX: 0,
      absoluteY: 0,
      translationX: 0,
      translationY: 0,
      velocityX: 0,
      velocityY: 0,
      oldState: null,
      handlerTag: 0,
      numberOfPointers: 1,
      state: 4 as const,
      pointerType: 0,
    }

    const touchEnd = {
      x: 10,
      y: 10,
      absoluteX: 10,
      absoluteY: 10,
      translationX: 10,
      translationY: 10,
      velocityX: 10,
      velocityY: 10,
      oldState: null,
      handlerTag: 0,
      numberOfPointers: 1,
      state: 4 as const,
      pointerType: 0,
    }

    const touchStartEvent = touchStart
    const touchMoveEvent = touchEnd

    const changeListener = jest.fn()

    controls.addEventListener("change", changeListener)

    controls.onTouchStart(touchStartEvent)
    controls.onTouchMove(touchMoveEvent)
    expect(changeListener).toHaveBeenCalledTimes(1)
  })

  it("should handle touch rotation", () => {
    const rotateStart = {
      x: 0,
      y: 0,
      absoluteX: 0,
      absoluteY: 0,
      translationX: 0,
      translationY: 0,
      velocityX: 0,
      velocityY: 0,
      oldState: null,
      handlerTag: 0,
      numberOfPointers: 1,
      state: 4 as const,
      pointerType: 0,
    }
    const rotateEnd = {
      x: 10,
      y: 10,
      absoluteX: 10,
      absoluteY: 10,
      translationX: 10,
      translationY: 10,
      velocityX: 10,
      velocityY: 10,
      oldState: null,
      handlerTag: 0,
      numberOfPointers: 1,
      state: 4 as const,
      pointerType: 0,
    }

    controls.handleTouchStartRotate(rotateStart)
    controls.handleTouchMoveRotate(rotateEnd)

    expect(controls.rotateDelta.x).toBeGreaterThan(0)
    expect(controls.rotateDelta.y).toBeGreaterThan(0)
  })
})
