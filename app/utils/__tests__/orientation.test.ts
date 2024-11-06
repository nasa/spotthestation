import { orientation, OrientationData, SensorAccuracy } from "react-native-sensors"
import { watchCalibrationState } from "../orientation"

describe("watchCalibrationState", () => {
  it("should call watcher once calibration state is stable", () => {
    const watcher = jest.fn((_: SensorAccuracy) => {})

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    ;(orientation.subscribe as any).mockImplementationOnce(
      (fn: (value: OrientationData) => void) => {
        const dummyOrientation = {
          qx: 0,
          qz: 0,
          qw: 0,
          qy: 0,
          timestamp: Date.now(),
          pitch: 0,
          roll: 0,
          yaw: 0,
        }
        fn({ accuracy: 0, ...dummyOrientation })
        fn({ accuracy: 1, ...dummyOrientation })
        fn({ accuracy: 0, ...dummyOrientation })
        fn({ accuracy: 1, ...dummyOrientation })
        fn({ accuracy: 1, ...dummyOrientation })
        fn({ accuracy: 1, ...dummyOrientation })
        fn({ accuracy: 2, ...dummyOrientation })
        fn({ accuracy: 2, ...dummyOrientation })
        fn({ accuracy: 2, ...dummyOrientation })
        fn({ accuracy: 2, ...dummyOrientation })
      },
    )

    watchCalibrationState(watcher)
    expect(watcher).toBeCalledTimes(1)
    expect(watcher).toBeCalledWith(2)
  })
})
