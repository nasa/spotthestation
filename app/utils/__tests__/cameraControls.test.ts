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

  it("should dispatch events on touch start, move, and end", () => {
    const touchStart = {
      pageX: 0,
      pageY: 0,
      changedTouches: [],
      identifier: "1",
      locationX: 0,
      locationY: 0,
      target: null,
      timestamp: Date.now(),
      touches: [],
    }

    const touchEnd = {
      pageX: 10,
      pageY: 10,
      changedTouches: [],
      identifier: "2",
      locationX: 10,
      locationY: 10,
      target: null,
      timestamp: Date.now(),
      touches: [],
    }

    const touchStartEvent = { ...touchStart, touches: [touchStart] }
    const touchMoveEvent = { ...touchEnd, touches: [touchEnd] }

    const startListener = jest.fn()
    const changeListener = jest.fn()
    const endListener = jest.fn()

    controls.addEventListener("start", startListener)
    controls.addEventListener("change", changeListener)
    controls.addEventListener("end", endListener)

    controls.onTouchStart(touchStartEvent)
    expect(startListener).toHaveBeenCalledTimes(1)

    controls.onTouchMove(touchMoveEvent)
    expect(changeListener).toHaveBeenCalledTimes(1)

    controls.onTouchEnd(null)
    expect(endListener).toHaveBeenCalledTimes(1)
  })

  it("should handle touch rotation", () => {
    const rotateStart = {
      pageX: 0,
      pageY: 0,
      changedTouches: [],
      identifier: "1",
      locationX: 0,
      locationY: 0,
      target: null,
      timestamp: Date.now(),
      touches: [],
    }
    const rotateEnd = {
      pageX: 10,
      pageY: 10,
      changedTouches: [],
      identifier: "2",
      locationX: 10,
      locationY: 10,
      target: null,
      timestamp: Date.now(),
      touches: [],
    }

    controls.handleTouchStartRotate({
      ...rotateStart,
      touches: [rotateStart],
    })
    controls.handleTouchMoveRotate({
      ...rotateEnd,
      touches: [rotateEnd],
    })

    expect(controls.rotateDelta.x).toBeGreaterThan(0)
    expect(controls.rotateDelta.y).toBeGreaterThan(0)
  })
})
