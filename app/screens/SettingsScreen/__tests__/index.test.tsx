import React from "react"
import { useNavigation } from "@react-navigation/native"
import { SettingsScreen } from "../index"
import { render, userEvent, waitFor } from "@testing-library/react-native"
import { jest } from "@jest/globals"
import Share from "react-native-share"
import { Alert, MeasureInWindowOnSuccessCallback, View } from "react-native"
import { isAvailable } from "react-native-sensors/src/rnsensors"
import i18n from "i18n-js"

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
  createNavigationContainerRef: jest.fn(),
}))

describe("SettingsScreen", () => {
  const mockNavigation = {
    navigate: jest.fn(),
    reset: jest.fn(),
  }

  beforeEach(() => {
    jest.mocked(useNavigation).mockReturnValue(mockNavigation)
    jest.spyOn(Alert, "alert")
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders correctly", () => {
    const tree = render(<SettingsScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders header correctly", () => {
    const { getByText } = render(<SettingsScreen />)
    const header = getByText("settings.header undefined")
    expect(header).toBeTruthy()
  })

  it("navigates to LocationSettings screen", async () => {
    const component = render(<SettingsScreen />)
    await userEvent.press(await component.findByText("settings.locationSettings", { exact: false }))
    expect(mockNavigation.navigate).toHaveBeenCalledWith("SettingsScreens", {
      screen: "LocationSettings",
    })
  })

  it("navigates to NotificationSettings screen", async () => {
    const component = render(<SettingsScreen />)
    await userEvent.press(
      await component.findByText("settings.notificationSettings", { exact: false }),
    )
    expect(mockNavigation.navigate).toHaveBeenCalledWith("SettingsScreens", {
      screen: "NotificationSettings",
    })
  })

  it("navigates to TermsAndConditions screen", async () => {
    const component = render(<SettingsScreen />)
    await userEvent.press(
      await component.findByText("settings.termsAndConditions", { exact: false }),
    )
    expect(mockNavigation.navigate).toHaveBeenCalledWith("SettingsScreens", {
      screen: "TermsAndConditions",
    })
  })

  it("navigates to ContactUs screen", async () => {
    const component = render(<SettingsScreen />)
    await userEvent.press(await component.findByText("settings.contactUs", { exact: false }))
    expect(mockNavigation.navigate).toHaveBeenCalledWith("SettingsScreens", {
      screen: "ContactUs",
    })
  })

  it("opens share dialog", async () => {
    const component = render(<SettingsScreen />)
    await userEvent.press(await component.findByText("settings.share", { exact: false }))

    expect(Share.open).toBeCalledWith({
      message: "settings.shareLink undefined: https://onelink.to/nasa-sts-app",
      failOnCancel: false,
      type: undefined,
    })
  })

  describe("compass calibration popup", () => {
    it("shows error popup if magnetometer is not available", async () => {
      ;(isAvailable as jest.Mock).mockImplementation(
        (s) =>
          new Promise((resolve, reject) =>
            s === "magnetometer" ? reject(Error()) : resolve(true),
          ),
      )

      const component = render(<SettingsScreen />)
      await userEvent.press(
        await component.findByText("settings.calibrateCompass", { exact: false }),
      )

      await waitFor(() => {
        expect(Alert.alert).toBeCalledWith(
          expect.stringContaining("issView.arNotSupported"),
          expect.stringContaining("issView.noMagnetometerSensor"),
        )
      })
    })

    it("shows calibration popup if magnetometer is available", async () => {
      ;(isAvailable as jest.Mock).mockImplementation(
        () => new Promise((resolve, reject) => reject(Error())),
      )

      const component = render(<SettingsScreen />)
      await userEvent.press(
        await component.findByText("settings.calibrateCompass", { exact: false }),
      )

      await waitFor(() => {
        expect(Alert.alert).toBeCalledWith(
          expect.stringContaining("issView.arNotSupported"),
          expect.stringContaining("issView.noMagnetometerSensor"),
        )
      })
    })

    it("opens compass calibration dialog", async () => {
      ;(isAvailable as jest.Mock).mockResolvedValue(true as never)

      const component = render(<SettingsScreen />)
      await userEvent.press(
        await component.findByText("settings.calibrateCompass", { exact: false }),
      )

      expect(
        await component.findByText("settings.calibrateCompassData.instructions", {
          exact: false,
        }),
      ).toBeVisible()
    })
  })

  describe("tutorials popup", () => {
    it("redirects to HomeScreen", async () => {
      const component = render(<SettingsScreen />)
      await userEvent.press(await component.findByText("settings.tutorials", { exact: false }))
      await userEvent.press(await component.findByAccessibilityHint("home page"))

      expect(mockNavigation.navigate).toBeCalledWith("Home")
    })

    it("redirects to ISSViewScreen", async () => {
      const component = render(<SettingsScreen />)
      await userEvent.press(await component.findByText("settings.tutorials", { exact: false }))
      await userEvent.press(await component.findByAccessibilityHint("AR page"))

      expect(mockNavigation.navigate).toBeCalledWith("ISSView")
    })
  })

  describe("language dropdown", () => {
    const originalMeasureInWindow = View.prototype.measureInWindow
    beforeEach(() => {
      View.prototype.measureInWindow = jest.fn((f: MeasureInWindowOnSuccessCallback) => {
        f(1, 2, 3, 4)
      })
    })

    afterEach(() => {
      View.prototype.measureInWindow = originalMeasureInWindow
      i18n.locale = "en"
    })

    it("changes locale when user selects language", async () => {
      const component = render(<SettingsScreen />)
      const dropdown = await component.findByText("English")

      await userEvent.press(dropdown)
      await userEvent.press(await component.findByText("Deutsch", { exact: false }))
      expect(i18n.locale).toBe("de")
    })
  })
})
