import React from "react"
import { PermissionsAndroid, Alert, MeasureInWindowOnSuccessCallback, Platform } from "react-native"
import { NavigationContainer, useRoute } from "@react-navigation/native"
import { ISSViewScreen } from "../index"
import { act, fireEvent, render, userEvent, waitFor } from "@testing-library/react-native"
import { TabNavigatorContext } from "../../../navigators"
import { RootStoreModel, RootStoreProvider } from "../../../models"
import { api } from "../../../services/api"
import issData200min from "../../../../test/mockISSData200min.json"
import issDataFull from "../../../../test/mockISSDataFull.json"
import { check, openSettings, PERMISSIONS, request, RESULTS } from "react-native-permissions"
import MockDate from "mockdate"
import { isAvailable } from "react-native-sensors/src/rnsensors"
import * as storage from "../../../utils/storage"
import * as orientation from "../../../utils/orientation"
import { AccuracyWatcherFunc } from "../../../utils/orientation"
import Orientation, { OrientationType } from "react-native-orientation-locker"
import { ReactTestInstance } from "react-test-renderer"
import { captureScreen } from "react-native-view-shot"
import { CameraRoll } from "@react-native-camera-roll/camera-roll"
import Snackbar from "react-native-snackbar"
import RecordScreen, { RecordingResult } from "react-native-record-screen"
import Share from "react-native-share"

const mockNavigate = jest.fn()
jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useNavigation: jest.fn(() => ({ navigate: mockNavigate, setParams: jest.fn() })),
  useRoute: jest.fn(),
}))

const waitForLoad = async (duration = 200) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, duration))
  })
}

const mockHighAccuracy = () => {
  jest.spyOn(orientation, "watchCalibrationState").mockImplementation((fn) => {
    setTimeout(() => fn(2), 50)
    return jest.fn()
  })
}

const fireLayoutEvent = (element: ReactTestInstance) => {
  fireEvent(element, "layout", {
    target: {
      measureInWindow: jest.fn((f: MeasureInWindowOnSuccessCallback) => {
        f(1, 2, 3, 4)
      }),
    },
    persist: jest.fn(),
  })
}

const completeStartupRequirements = async () => {
  ;(request as jest.Mock).mockResolvedValue(RESULTS.GRANTED)
  ;(check as jest.Mock).mockResolvedValue(RESULTS.GRANTED)
  ;(isAvailable as jest.Mock).mockResolvedValue(true)
  mockHighAccuracy()
  await storage.save(storage.KEYS.AR_COACH_COMPLETED, true)
  await storage.save(storage.KEYS.SAFETY_ACKNOWLEDGED, true)
}

const renderWithStore = (store: ReturnType<typeof RootStoreModel.create>) => {
  return render(
    <TabNavigatorContext.Provider
      value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
    >
      <NavigationContainer>
        <RootStoreProvider value={store}>
          <ISSViewScreen />
        </RootStoreProvider>
      </NavigationContainer>
    </TabNavigatorContext.Provider>,
  )
}

describe("ISSViewScreen", () => {
  beforeEach(async () => {
    MockDate.set(issData200min.points[0].date)
    jest.clearAllMocks()
    await storage.clear()
    ;(useRoute as jest.Mock).mockReturnValue({ params: {} })
  })

  afterEach(() => {
    MockDate.reset()
  })

  it("renders correctly", async () => {
    const component = render(
      <TabNavigatorContext.Provider
        value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
      >
        <NavigationContainer>
          <ISSViewScreen />
        </NavigationContainer>
      </TabNavigatorContext.Provider>,
    )

    await waitForLoad()
    expect(component.toJSON()).toMatchSnapshot()
  })

  it("renders correctly in landscape mode", async () => {
    let listener: (orientation: OrientationType) => void
    ;(Orientation.addOrientationListener as jest.Mock).mockImplementation((l) => {
      listener = l
    })

    const tree = render(
      <TabNavigatorContext.Provider
        value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
      >
        <NavigationContainer>
          <ISSViewScreen />
        </NavigationContainer>
      </TabNavigatorContext.Provider>,
    )

    await waitForLoad()
    await act(() => {
      listener(OrientationType["LANDSCAPE-LEFT"])
    })

    expect(tree.toJSON()).toMatchSnapshot()
  })

  describe("with ISS data", () => {
    let rootStore: ReturnType<typeof RootStoreModel.create>

    beforeEach(() => {
      rootStore = RootStoreModel.create({
        selectedLocation: {
          title: "Houston, TX",
          location: { lat: 29.7751019, lng: -95.3740024 },
        },
        currentLocation: {
          title: "Phoenix, AZ",
          location: { lat: 33.5155817, lng: -112.1563736 },
        },
        savedLocations: [
          {
            title: "Houston, TX",
            location: { lat: 29.7751019, lng: -95.3740024 },
          },
          {
            title: "NASA Headquarters, DC",
            location: { lat: 38.8830649, lng: -77.0188535 },
          },
        ],
        initLoading: true,
        sightingsLoaded: false,
        issData: [],
      })
      ;(api.getISSData as jest.Mock).mockImplementation(
        (params) =>
          new Promise((resolve) =>
            resolve({ ok: true, data: params.to ? issData200min : issDataFull }),
          ),
      )
    })

    it("renders correctly", async () => {
      const component = renderWithStore(rootStore)
      expect(
        await component.findByText("00:01:10:36", { exact: false }, { timeout: 4000 }),
      ).toBeVisible()
      expect(component.toJSON()).toMatchSnapshot()
    })

    it("renders error modal if api responds with error", async () => {
      ;(api.getISSData as jest.Mock).mockResolvedValue({ ok: false, data: "error" })
      const component = renderWithStore(rootStore)

      await waitFor(() => {
        expect(
          component.queryByText("homeScreen.initLoader.trajectoryError", { exact: false }),
        ).not.toBeNull()
      })
    })

    it("switches to selected location if specified in screen params", async () => {
      ;(useRoute as jest.Mock).mockReturnValue({
        params: { location: { lat: 29.7751019, lng: -95.3740024 } },
      })
      const component = renderWithStore(rootStore)
      expect(
        await component.findByText("00:01:10:36", { exact: false }, { timeout: 4000 }),
      ).toBeVisible()
    })

    it("switches to current location if specified in screen params", async () => {
      ;(useRoute as jest.Mock).mockReturnValue({
        params: { location: { lat: 33.5155817, lng: -112.1563736 } },
      })
      const component = renderWithStore(rootStore)
      expect(
        await component.findByText("00:02:43:26", { exact: false }, { timeout: 4000 }),
      ).toBeVisible()
    })

    it("switches to saved location if specified in screen params", async () => {
      ;(useRoute as jest.Mock).mockReturnValue({
        params: { location: { lat: 38.8830649, lng: -77.0188535 } },
      })
      const component = renderWithStore(rootStore)
      expect(
        await component.findByText("01:00:23:36", { exact: false }, { timeout: 4000 }),
      ).toBeVisible()
    })

    describe("camera permission", () => {
      ;["android", "ios"].forEach((platform: "android" | "ios") => {
        describe(platform, () => {
          beforeEach(() => {
            Platform.OS = platform
            ;(request as jest.Mock).mockResolvedValue(RESULTS.GRANTED)
            ;(check as jest.Mock).mockResolvedValue(RESULTS.GRANTED)
          })

          it("checks if camera access is already granted", async () => {
            const component = renderWithStore(rootStore)

            await waitFor(() => {
              expect(
                component.queryByText("issView.cameraPermissionText", { exact: false }),
              ).not.toBeNull()
            })

            await waitFor(() => {
              expect(check).toBeCalledWith(PERMISSIONS[Platform.OS.toUpperCase()].CAMERA)
              expect(request).not.toBeCalled()
            })

            await waitFor(() => {
              expect(
                component.queryByText("issView.cameraPermissionText", { exact: false }),
              ).toBeNull()
            })
          })

          it("asks for camera permission if not already granted", async () => {
            ;(check as jest.Mock).mockResolvedValue(RESULTS.DENIED)
            ;(request as jest.Mock).mockResolvedValue(RESULTS.GRANTED)
            const component = renderWithStore(rootStore)

            await waitFor(() => {
              expect(
                component.queryByText("issView.cameraPermissionText", { exact: false }),
              ).not.toBeNull()
            })

            await waitFor(() => {
              expect(check).toBeCalledWith(PERMISSIONS[Platform.OS.toUpperCase()].CAMERA)
              expect(request).toBeCalledWith(PERMISSIONS[Platform.OS.toUpperCase()].CAMERA)
            })

            await waitFor(() => {
              expect(
                component.queryByText("issView.cameraPermissionText", { exact: false }),
              ).toBeNull()
            })
          })

          it("keeps permission text if permission request is denied", async () => {
            ;(check as jest.Mock).mockResolvedValue(RESULTS.DENIED)
            ;(request as jest.Mock).mockResolvedValue(RESULTS.BLOCKED)
            const component = renderWithStore(rootStore)

            await waitFor(() => {
              expect(
                component.queryByText("issView.cameraPermissionText", { exact: false }),
              ).not.toBeNull()
            })

            await waitFor(() => {
              expect(check).toBeCalledWith(PERMISSIONS[Platform.OS.toUpperCase()].CAMERA)
              expect(request).toBeCalledWith(PERMISSIONS[Platform.OS.toUpperCase()].CAMERA)
            })

            await waitForLoad()
            expect(
              component.queryByText("issView.cameraPermissionText", { exact: false }),
            ).not.toBeNull()
          })

          it("opens settings app when permission text is pressed", async () => {
            ;(check as jest.Mock).mockResolvedValue(RESULTS.DENIED)
            ;(request as jest.Mock).mockResolvedValue(RESULTS.BLOCKED)
            const component = renderWithStore(rootStore)

            await userEvent.press(
              await component.findByText("issView.cameraPermissionText", { exact: false }),
            )

            await waitFor(() => {
              expect(openSettings).toBeCalled()
            })
          })
        })
      })
    })

    describe("sensors availability", () => {
      beforeEach(() => {
        ;(request as jest.Mock).mockResolvedValue(RESULTS.GRANTED)
        ;(check as jest.Mock).mockResolvedValue(RESULTS.GRANTED)
        ;(isAvailable as jest.Mock).mockResolvedValue(true)
        jest.spyOn(Alert, "alert")
      })

      it("shows error popup if magnetometer is not available", async () => {
        ;(isAvailable as jest.Mock).mockImplementation(
          (s) =>
            new Promise((resolve, reject) =>
              s === "magnetometer" ? reject(Error()) : resolve(true),
            ),
        )
        renderWithStore(rootStore)

        await waitFor(() => {
          expect(Alert.alert).toBeCalledWith(
            expect.stringContaining("issView.arNotSupported"),
            expect.stringContaining("issView.noMagnetometerSensor"),
          )
        })
      })

      it("shows error popup if noOrientationSensor sensor is not available", async () => {
        ;(isAvailable as jest.Mock).mockImplementation(
          (s) =>
            new Promise((resolve, reject) =>
              s === "orientation" ? reject(Error()) : resolve(true),
            ),
        )
        renderWithStore(rootStore)

        await waitFor(() => {
          expect(Alert.alert).toBeCalledWith(
            expect.stringContaining("issView.arNotSupported"),
            expect.stringContaining("issView.noOrientationSensor"),
          )
        })
      })

      it("does not show alert if both sensors are available", async () => {
        renderWithStore(rootStore)
        await waitForLoad()
        expect(Alert.alert).not.toBeCalled()
      })
    })

    describe("safety reminder", () => {
      beforeEach(() => {
        ;(request as jest.Mock).mockResolvedValue(RESULTS.GRANTED)
        ;(check as jest.Mock).mockResolvedValue(RESULTS.GRANTED)
        ;(isAvailable as jest.Mock).mockResolvedValue(true)
      })

      it("shows safety reminder on android", async () => {
        Platform.OS = "android"
        const component = renderWithStore(rootStore)
        expect(
          await component.findByText("issView.safetyReminder.title", { exact: false }),
        ).toBeVisible()
        await userEvent.press(
          await component.findByText("issView.safetyReminder.ok", { exact: false }),
        )
        await waitFor(() => {
          expect(storage.load(storage.KEYS.SAFETY_ACKNOWLEDGED)).toBeTruthy()
        })
      })

      it("does not show safety reminder if it was already acknowledged", async () => {
        Platform.OS = "android"
        await storage.save(storage.KEYS.SAFETY_ACKNOWLEDGED, true)
        const component = renderWithStore(rootStore)
        await waitForLoad()
        expect(component.queryByText("issView.safetyReminder.title", { exact: false })).toBeNull()
      })

      it("redirects to home screen if user dismisses reminder", async () => {
        Platform.OS = "android"
        const component = renderWithStore(rootStore)
        expect(
          await component.findByText("issView.safetyReminder.title", { exact: false }),
        ).toBeVisible()
        await userEvent.press(
          await component.findByText("issView.safetyReminder.home", { exact: false }),
        )
        await waitFor(async () => {
          expect(mockNavigate).toBeCalledWith("Home")
          expect(await storage.load(storage.KEYS.SAFETY_ACKNOWLEDGED)).toBeFalsy()
        })
      })

      it("does not show safety reminder on ios", async () => {
        Platform.OS = "ios"
        const component = renderWithStore(rootStore)
        await waitForLoad()
        expect(component.queryByText("issView.safetyReminder.title", { exact: false })).toBeNull()
      })
    })

    describe("calibration modal", () => {
      beforeEach(() => {
        ;(request as jest.Mock).mockResolvedValue(RESULTS.GRANTED)
        ;(check as jest.Mock).mockResolvedValue(RESULTS.GRANTED)
        ;(isAvailable as jest.Mock).mockResolvedValue(true)
      })

      it("shows calibration modal if magnetometer accuracy is not high", async () => {
        jest.spyOn(orientation, "watchCalibrationState").mockImplementation((fn) => {
          setTimeout(() => fn(1), 50)
          return jest.fn()
        })

        const component = renderWithStore(rootStore)
        expect(
          await component.findByText("settings.calibrateCompassData.instructions", {
            exact: false,
          }),
        ).toBeVisible()
      })

      it("hides calibration modal as soon as magnetometer accuracy becomes high", async () => {
        let listener: AccuracyWatcherFunc
        jest.spyOn(orientation, "watchCalibrationState").mockImplementation((fn) => {
          listener = fn
          setTimeout(() => fn(1), 50)
          return jest.fn()
        })

        const component = renderWithStore(rootStore)
        expect(
          await component.findByText("settings.calibrateCompassData.instructions", {
            exact: false,
          }),
        ).toBeVisible()

        await act(() => {
          listener(2)
        })

        await waitFor(() => {
          expect(
            component.queryByText("settings.calibrateCompassData.instructions", { exact: false }),
          ).toBeNull()
        })
      })
    })

    describe("tutorial", () => {
      beforeEach(() => {
        ;(request as jest.Mock).mockResolvedValue(RESULTS.GRANTED)
        ;(check as jest.Mock).mockResolvedValue(RESULTS.GRANTED)
        ;(isAvailable as jest.Mock).mockResolvedValue(true)
        mockHighAccuracy()
      })

      it("shows tutorial on first load", async () => {
        const component = renderWithStore(rootStore)
        await waitForLoad()

        fireLayoutEvent(await component.findByAccessibilityHint("compass"))
        fireLayoutEvent(await component.findByAccessibilityHint("direction circle"))
        fireLayoutEvent(await component.findByAccessibilityHint("enable/disable path line"))
        fireLayoutEvent(await component.findByAccessibilityHint("open information modal"))
        fireLayoutEvent(await component.findByAccessibilityHint("enable full screen"))
        fireLayoutEvent(await component.findByAccessibilityHint("open share modal"))
        fireLayoutEvent(await component.findByAccessibilityHint("take a photo"))
        fireLayoutEvent(await component.findByAccessibilityHint("record a video"))
        fireLayoutEvent(await component.findByAccessibilityHint("tutorial modal"))

        expect(
          await component.findByText("issView.coachMarks.circleTitle", { exact: false }),
        ).toBeVisible()
        await userEvent.press(await component.findByAccessibilityHint("next coach mark"))

        expect(
          await component.findByText("issView.coachMarks.compassTitle", { exact: false }),
        ).toBeVisible()
        await userEvent.press(await component.findByAccessibilityHint("next coach mark"))

        expect(
          await component.findByText("issView.coachMarks.infoTitle", { exact: false }),
        ).toBeVisible()
        await userEvent.press(await component.findByAccessibilityHint("next coach mark"))

        expect(
          await component.findByText("issView.coachMarks.trajectoryTitle", { exact: false }),
        ).toBeVisible()
        await userEvent.press(await component.findByAccessibilityHint("next coach mark"))

        expect(
          await component.findByText("issView.coachMarks.arTitle", { exact: false }),
        ).toBeVisible()
        await userEvent.press(await component.findByAccessibilityHint("next coach mark"))

        expect(
          await component.findByText("issView.coachMarks.shareTitle", { exact: false }),
        ).toBeVisible()
        await userEvent.press(await component.findByAccessibilityHint("next coach mark"))

        expect(
          await component.findByText("issView.coachMarks.screenshotTitle", { exact: false }),
        ).toBeVisible()
        await userEvent.press(await component.findByAccessibilityHint("next coach mark"))

        expect(
          await component.findByText("issView.coachMarks.videoTitle", { exact: false }),
        ).toBeVisible()
        await userEvent.press(await component.findByAccessibilityHint("finish coach mark"))

        await waitFor(async () => {
          expect(await storage.load(storage.KEYS.AR_COACH_COMPLETED)).toBeTruthy()
        })
      })

      it("does not show tutorial if already completed", async () => {
        await storage.save(storage.KEYS.AR_COACH_COMPLETED, true)
        const component = renderWithStore(rootStore)
        await waitForLoad()

        fireLayoutEvent(await component.findByAccessibilityHint("compass"))
        fireLayoutEvent(await component.findByAccessibilityHint("direction circle"))
        fireLayoutEvent(await component.findByAccessibilityHint("enable/disable path line"))
        fireLayoutEvent(await component.findByAccessibilityHint("open information modal"))
        fireLayoutEvent(await component.findByAccessibilityHint("enable full screen"))
        fireLayoutEvent(await component.findByAccessibilityHint("open share modal"))
        fireLayoutEvent(await component.findByAccessibilityHint("take a photo"))
        fireLayoutEvent(await component.findByAccessibilityHint("record a video"))

        return expect(component.findByAccessibilityHint("tutorial modal")).rejects.toBeTruthy()
      })
    })

    describe("info modal", () => {
      beforeEach(completeStartupRequirements)

      it("shows info modal when 'info' = true in screen props", async () => {
        ;(useRoute as jest.Mock).mockReturnValue({ params: { info: true } })
        const component = renderWithStore(rootStore)
        expect(await component.findByText("issView.details.title", { exact: false })).toBeVisible()
      })

      it("does not show info modal when 'info' != true in screen props", async () => {
        ;(useRoute as jest.Mock).mockReturnValue({ params: {} })
        const component = renderWithStore(rootStore)
        return expect(
          component.findByText("issView.details.title", { exact: false }),
        ).rejects.toBeTruthy()
      })

      it("shows info modal when info button is pressed", async () => {
        const component = renderWithStore(rootStore)
        await userEvent.press(await component.findByAccessibilityHint("open information modal"))
        expect(await component.findByText("issView.details.title", { exact: false })).toBeVisible()
      })

      it("redirects to FAQ when link is pressed", async () => {
        const component = renderWithStore(rootStore)
        await userEvent.press(await component.findByAccessibilityHint("open information modal"))
        expect(await component.findByText("issView.details.title", { exact: false })).toBeVisible()
        await userEvent.press(await component.findByText("How Do I Spot The Station?"))

        await waitFor(() => {
          expect(mockNavigate).toBeCalledWith("ResourcesScreens", {
            screen: "Web",
            url: "https://spotthestation.nasa.gov/message_example.cfm",
          })
        })
      })
    })

    describe("take a photo button", () => {
      beforeEach(completeStartupRequirements)

      afterEach(() => {
        Platform.OS = "ios"
      })

      it("captures photo and saves to gallery", async () => {
        ;(captureScreen as jest.Mock).mockResolvedValueOnce("file:///whatever")
        ;(CameraRoll.save as jest.Mock).mockResolvedValueOnce(true)

        const component = renderWithStore(rootStore)
        await userEvent.press(await component.findByAccessibilityHint("take a photo"))

        await waitFor(() => {
          expect(CameraRoll.save).toBeCalledWith("file:///whatever", { type: "photo" })
          expect(Snackbar.show).toBeCalledWith(
            expect.objectContaining({
              text: expect.stringContaining("Photo snackBar.savedToGallery"),
            }),
          )
        })
      })

      it("shows error snackbar if failed to capture", async () => {
        ;(captureScreen as jest.Mock).mockRejectedValueOnce(false)
        const component = renderWithStore(rootStore)
        await userEvent.press(await component.findByAccessibilityHint("take a photo"))

        await waitFor(() => {
          expect(Snackbar.show).toBeCalledWith(
            expect.objectContaining({ text: expect.stringContaining("issView.screenshotError") }),
          )
          expect(CameraRoll.save).not.toBeCalled()
        })
      })

      it("requests external storage permissions on android", async () => {
        Platform.OS = "android"
        ;(captureScreen as jest.Mock).mockResolvedValueOnce("file:///whatever")
        ;(CameraRoll.save as jest.Mock).mockResolvedValueOnce(true)
        jest
          .spyOn(PermissionsAndroid, "request")
          .mockResolvedValueOnce(PermissionsAndroid.RESULTS.GRANTED)

        const component = renderWithStore(rootStore)
        await userEvent.press(await component.findByAccessibilityHint("take a photo"))

        await waitFor(() => {
          expect(PermissionsAndroid.request).toBeCalledWith(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            expect.anything(),
          )
          expect(CameraRoll.save).toBeCalledWith("file:///whatever", { type: "photo" })
        })
      })

      it("requests READ_MEDIA_IMAGES and READ_MEDIA_VIDEO permissions on android SDK >= 33", async () => {
        jest.spyOn(Platform, "Version", "get").mockReturnValueOnce("33")
        Platform.OS = "android"
        ;(captureScreen as jest.Mock).mockResolvedValueOnce("file:///whatever")
        ;(CameraRoll.save as jest.Mock).mockResolvedValueOnce(true)
        jest.spyOn(PermissionsAndroid, "requestMultiple").mockResolvedValueOnce({
          [PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES]: PermissionsAndroid.RESULTS.GRANTED,
          [PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO]: PermissionsAndroid.RESULTS.GRANTED,
        } as unknown as ReturnType<typeof PermissionsAndroid.requestMultiple>)

        const component = renderWithStore(rootStore)
        await userEvent.press(await component.findByAccessibilityHint("take a photo"))

        await waitFor(() => {
          expect(PermissionsAndroid.requestMultiple).toBeCalledWith([
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
          ])

          expect(CameraRoll.save).toBeCalledWith("file:///whatever", { type: "photo" })
        })
      })

      it("does not save photo to gallery if permissions are denied", async () => {
        Platform.OS = "android"
        ;(captureScreen as jest.Mock).mockResolvedValueOnce("file:///whatever")
        ;(CameraRoll.save as jest.Mock).mockResolvedValueOnce(true)
        jest
          .spyOn(PermissionsAndroid, "request")
          .mockResolvedValueOnce(PermissionsAndroid.RESULTS.DENIED)

        const component = renderWithStore(rootStore)
        await userEvent.press(await component.findByAccessibilityHint("take a photo"))

        await waitFor(() => {
          expect(PermissionsAndroid.request).toBeCalledWith(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            expect.anything(),
          )
          expect(CameraRoll.save).not.toBeCalled()
        })
      })
    })

    describe("record a video", () => {
      beforeEach(completeStartupRequirements)
      ;["android", "ios"].forEach((platform: "android" | "ios") => {
        describe(platform, () => {
          beforeEach(() => {
            Platform.OS = platform
            jest
              .spyOn(PermissionsAndroid, "request")
              .mockResolvedValue(PermissionsAndroid.RESULTS.GRANTED)
          })

          it("captures video with audio and saves to gallery", async () => {
            ;(RecordScreen.startRecording as jest.Mock).mockResolvedValue(true)
            ;(RecordScreen.stopRecording as jest.Mock).mockResolvedValue({
              status: "success",
              result: { outputURL: "file:///whatever" },
            })
            ;(CameraRoll.save as jest.Mock).mockResolvedValue(true)

            const component = renderWithStore(rootStore)
            await userEvent.press(await component.findByAccessibilityHint("record a video"))
            await userEvent.press(await component.findByAccessibilityHint("stop recording"))

            await waitFor(() => {
              expect(RecordScreen.startRecording).toBeCalledWith({ mic: true })
              expect(CameraRoll.save).toBeCalledWith("file:///whatever", { type: "video" })
              expect(Snackbar.show).toBeCalledWith(
                expect.objectContaining({
                  text: expect.stringContaining("Video snackBar.savedToGallery"),
                }),
              )
            })
          })

          it("captures video without audio and saves to gallery", async () => {
            ;(check as jest.Mock).mockImplementation(
              (permission) =>
                new Promise((resolve) => {
                  if (
                    permission === PERMISSIONS.ANDROID.RECORD_AUDIO ||
                    permission === PERMISSIONS.IOS.MICROPHONE
                  )
                    resolve(RESULTS.DENIED)
                  else resolve(RESULTS.GRANTED)
                }),
            )
            ;(request as jest.Mock).mockImplementation(
              (permission) =>
                new Promise((resolve) => {
                  if (
                    permission === PERMISSIONS.ANDROID.RECORD_AUDIO ||
                    permission === PERMISSIONS.IOS.MICROPHONE
                  )
                    resolve(RESULTS.DENIED)
                  else resolve(RESULTS.GRANTED)
                }),
            )
            ;(RecordScreen.startRecording as jest.Mock).mockResolvedValue(true)
            ;(RecordScreen.stopRecording as jest.Mock).mockResolvedValue({
              status: "success",
              result: { outputURL: "file:///whatever" },
            })
            ;(CameraRoll.save as jest.Mock).mockResolvedValue(true)

            const component = renderWithStore(rootStore)
            await userEvent.press(await component.findByAccessibilityHint("record a video"))
            await userEvent.press(await component.findByAccessibilityHint("stop recording"))

            await waitFor(() => {
              expect(RecordScreen.startRecording).toBeCalledWith({ mic: false })
              expect(CameraRoll.save).toBeCalledWith("file:///whatever", { type: "video" })
              expect(Snackbar.show).toBeCalledWith(
                expect.objectContaining({
                  text: expect.stringContaining("Video snackBar.savedToGallery"),
                }),
              )
            })
          })
        })
      })

      it("shows error snackbar if record screen permission is denied", async () => {
        ;(RecordScreen.startRecording as jest.Mock).mockResolvedValue(
          RecordingResult.PermissionError,
        )

        const component = renderWithStore(rootStore)
        await userEvent.press(await component.findByAccessibilityHint("record a video"))

        await waitFor(() => {
          expect(RecordScreen.startRecording).toBeCalledWith({ mic: true })
          expect(Snackbar.show).toBeCalledWith(
            expect.objectContaining({ text: RecordingResult.PermissionError }),
          )
          expect(component.queryByAccessibilityHint("stop recording")).toBeNull()
        })
      })

      it("shows error snackbar if screen recording failed to start", async () => {
        ;(RecordScreen.startRecording as jest.Mock).mockRejectedValue("error")

        const component = renderWithStore(rootStore)
        await userEvent.press(await component.findByAccessibilityHint("record a video"))

        await waitFor(() => {
          expect(RecordScreen.startRecording).toBeCalledWith({ mic: true })
          expect(Snackbar.show).toBeCalledWith(expect.objectContaining({ text: "error" }))
          expect(component.queryByAccessibilityHint("stop recording")).toBeNull()
        })
      })
    })

    describe("share button", () => {
      beforeEach(completeStartupRequirements)

      it("shares screenshot", async () => {
        ;(captureScreen as jest.Mock).mockResolvedValueOnce("file:///photo")
        ;(CameraRoll.save as jest.Mock).mockResolvedValueOnce(true)
        ;(Share.open as jest.Mock).mockResolvedValueOnce({ success: true })

        const component = renderWithStore(rootStore)
        await userEvent.press(await component.findByAccessibilityHint("take a photo"))
        await userEvent.press(await component.findByAccessibilityHint("open share modal"))

        await waitFor(() => {
          expect(Share.open).toBeCalledWith(expect.objectContaining({ url: "file:///photo" }))
          expect(Snackbar.show).toBeCalledWith(
            expect.objectContaining({ text: expect.stringContaining("snackBar.shared") }),
          )
        })
      })

      it("takes new screenshot if user didn't", async () => {
        ;(captureScreen as jest.Mock).mockResolvedValueOnce("file:///whatever")
        ;(Share.open as jest.Mock).mockResolvedValueOnce({ success: true })

        const component = renderWithStore(rootStore)
        await userEvent.press(await component.findByAccessibilityHint("open share modal"))

        await waitFor(() => {
          expect(Share.open).toBeCalledWith(expect.objectContaining({ url: "file:///whatever" }))
          expect(Snackbar.show).toBeCalledWith(
            expect.objectContaining({ text: expect.stringContaining("snackBar.shared") }),
          )
        })
      })

      it("shares video", async () => {
        ;(RecordScreen.startRecording as jest.Mock).mockResolvedValue(true)
        ;(RecordScreen.stopRecording as jest.Mock).mockResolvedValue({
          status: "success",
          result: { outputURL: "file:///video" },
        })
        ;(CameraRoll.save as jest.Mock).mockResolvedValue(true)
        ;(Share.open as jest.Mock).mockResolvedValueOnce({ success: true })

        const component = renderWithStore(rootStore)
        await userEvent.press(await component.findByAccessibilityHint("record a video"))
        await userEvent.press(await component.findByAccessibilityHint("stop recording"))
        await userEvent.press(await component.findByAccessibilityHint("open share modal"))

        await waitFor(() => {
          expect(Share.open).toBeCalledWith(expect.objectContaining({ url: "file:///video" }))
          expect(Snackbar.show).toBeCalledWith(
            expect.objectContaining({ text: expect.stringContaining("snackBar.shared") }),
          )
        })
      })

      it("shows error snackbar failed to share", async () => {
        ;(captureScreen as jest.Mock).mockResolvedValueOnce("file:///whatever")
        ;(Share.open as jest.Mock).mockRejectedValueOnce("error")

        const component = renderWithStore(rootStore)
        await userEvent.press(await component.findByAccessibilityHint("open share modal"))

        await waitFor(() => {
          expect(Snackbar.show).toBeCalledWith(expect.objectContaining({ text: "error" }))
        })
      })
    })
  })
})
