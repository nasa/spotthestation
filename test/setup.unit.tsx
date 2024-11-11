// we always make sure 'react-native' gets included first
import '@testing-library/react-native/extend-expect'
import * as ReactNative from "react-native"
import mas from "@react-native-async-storage/async-storage/jest/async-storage-mock"
import i18n from "i18n-js"
import React, { ForwardedRef, ReactNode } from "react"
import mockFile from "./mockFile"

const mockForwardRef = React.forwardRef;

(global as any).ReanimatedDataMock = {
  now: () => 0,
}

i18n.locale = "en"

// libraries to mock
jest.doMock("react-native", () => {
  // Extend ReactNative
  return Object.setPrototypeOf(
    {
      Image: {
        ...ReactNative.Image,
        resolveAssetSource: jest.fn((_source) => mockFile), // eslint-disable-line @typescript-eslint/no-unused-vars
        getSize: jest.fn(
          (
            uri: string, // eslint-disable-line @typescript-eslint/no-unused-vars
            success: (width: number, height: number) => void,
            failure?: (_error: any) => void, // eslint-disable-line @typescript-eslint/no-unused-vars
          ) => success(100, 100),
        ),
      },
    },
    ReactNative,
  )
})

jest.mock("d3-shape", () => ({
  arc: jest.fn()
}))

jest.mock("@sentry/react-native", () => ({
  init: jest.fn()
}))

jest.mock("expo-gl", () => ({
  GLView: <div />
}))

jest.mock("expo-three", () => ({
  Renderer: jest.fn(),
  loadTextureAsync: jest.fn(),
}))

jest.mock("expo-asset", () => ({
  Asset: jest.fn(),
}))

jest.mock("react-native-vision-camera", () => ({
  Camera: <div />,
  useCameraDevice: jest.fn(),
}))

jest.mock("@rnmapbox/maps", () => ({
  MapboxGL: <div />,
}))

jest.mock("react-native-orientation-locker", () => ({
  PORTRAIT: 'p',
  UNLOCK: 'u',
  getInitialOrientation: jest.fn(),
  addOrientationListener: jest.fn(),
  removeOrientationListener: jest.fn()
}))

jest.mock('../app/components/Screen', () => ({ Screen: ({children}) => <div>{children}</div> }))
jest.mock('../app/components/Globe', () => ({ Globe: () => <div /> }))
jest.mock('../app/components/SatelliteView', () => ({ SatelliteView: () => <div /> }))
jest.mock('../app/components/ARView', () => ({ ARView: () => <div /> }))
jest.mock('../app/components/MapBox', () => ({ MapBox: () => <div /> }))
jest.mock('../app/config', () => ({
  GOOGLE_API_TOKEN: 'google'
}))
jest.mock('../app/utils/useSafeAreaInsetsStyle', () => ({
  useSafeAreaInsetsStyle: () => ({})
}))
jest.mock('react-native-snackbar', () => ({
  show: () => ({}),
  dismiss: () => ({}),
  LENGTH_LONG: 'long',
}))
jest.mock("expo-localization", () => ({
  getLocales: () => ([{ regionCode: 'TC' }]),
  getCalendars: () => ([{ timeZone: 'Test/test' }]),
  locale: 'en-US'
}))
jest.mock("react-native-device-info", () => ({
  getVersion: () => "0.0.1",
  getApplicationName: () => "Test",
}))
jest.mock("react-native-permissions", () => ({
  PERMISSIONS: {
    IOS: { CAMERA: ""}
  },
  RESULTS: {
    GRANTED: "granted"
  },
  request: jest.fn(),
  check: jest.fn().mockResolvedValue("granted")
}))
jest.mock("@react-native-camera-roll/camera-roll", () => ({
  Share: jest.fn(),
}))
jest.mock("react-native-share", () => ({
  Share: jest.fn(),
}))
jest.mock("react-native-view-shot", () => ({
  captureScreen: jest.fn(),
}))
jest.mock("react-native-modal-datetime-picker", () => "")

const mockUseEffect = React.useEffect
const mockUseRef = React.useRef
// eslint-disable-next-line react/display-name
jest.mock("react-native-modal", () => ({ children, isVisible, onModalHide }) => {
  const wasVisible = mockUseRef(false)
  mockUseEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (!isVisible && wasVisible.current) onModalHide()
    wasVisible.current = isVisible
  }, [isVisible])
  return (
    <>
      {isVisible && children}
    </>
  )
})

jest.mock("../app/services/api", () => ({
  api: {
    getLocationTimeZone: () => new Promise((resolve) => resolve({ kind: "ok", zone: 'US/Central' }))
  },
}))
jest.mock("@notifee/react-native", () => ({
  createChannel: jest.fn(),
  requestPermission: jest.fn(),
  cancelTriggerNotifications: jest.fn(),
  createTriggerNotification: jest.fn(),
  getNotificationSettings: jest.fn().mockResolvedValue({ android: { alarm: 1 }}),
  TriggerType: { TIMESTAMP: 0 },
  AndroidNotificationSetting: { ENABLED: 1 }
}))

jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({ top: 0 }),
}))
jest.mock("@react-native-firebase/analytics", () => ({}))

jest.mock("react-native-sensors", () => ({
  orientation: { subscribe: jest.fn() },
  magnetometer: { subscribe: jest.fn() },
  SensorTypes: { orientation: null, magnetometer: null },
  setUpdateIntervalForType: jest.fn()
}))

jest.mock("react-native-sensors/src/rnsensors", () => ({
  isAvailable: jest.fn().mockResolvedValue(false)
}))

jest.mock('../app/services/api', () => ({
  api: {
    getPlaces: () => new Promise((resolve) => resolve({ kind: 'ok', places: [] })),
    reverseGeocode: jest.fn(),
    getLocationAddress: jest.fn(),
    sendMail: jest.fn(() => new Promise((resolve) => resolve("send"))),
    getISSSightings: () => new Promise((resolve) => resolve({ ok: true, data: {
        lastSightingOrbitPointAt: '2023-12-12',
        sightings: [{
          maxAltitude: 10,
          maxAzimuth: 0,
          minAltitude: 10,
          minAzimuth: 120,
          date: "date",
          dayStage: 1,
          disappears: "10",
          maxHeight: 12,
          notify: true,
          visible: 6,
        }]
      }})),
    getISSData: jest.fn().mockResolvedValue({ ok: true, data: { points: [], shadowIntervals: [] }}),
    getAstronauts: jest.fn().mockResolvedValue({ ok: true, data: [] }),
    getLocationTimeZone: () => new Promise((resolve) => resolve({ kind: 'ok', zone: "US/Central" })),
    getFeed: jest.fn().mockResolvedValue({ ok: true, places: `
      <?xml version="1.0" encoding="UTF-8"?>
      <rss version="2.0"
       xmlns:content="http://purl.org/rss/1.0/modules/content/"
       xmlns:wfw="http://wellformedweb.org/CommentAPI/"
       xmlns:dc="http://purl.org/dc/elements/1.1/"
       xmlns:atom="http://www.w3.org/2005/Atom"
       xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
       xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
      >
      <channel>
        <item></item>
      </channel>
     </rss>
    ` })
  }
}))
jest.mock('react-native-geolocation-service', () => ({
  requestAuthorization: jest.fn(),
  getCurrentPosition: jest.fn(),
}))

jest.mock('react-native-geolocation-service', () => ({
  requestAuthorization: jest.fn(),
  getCurrentPosition: jest.fn(),
}));

(global as any).XMLHttpRequest = jest.fn(() => ({
  open: jest.fn(),
  addEventListener: jest.fn(),
  setRequestHeader: jest.fn(),
  send: jest.fn(),
  getResponseHeader: jest.fn(),
  upload: {
    addEventListener: jest.fn(),
  },
  abort: jest.fn(),
}))

const mockAsyncStorage = mas
jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage)

jest.mock("i18n-js", () => ({
  currentLocale: () => "en",
  t: (key: string, params: Record<string, string>) => {
    return `${key} ${JSON.stringify(params)}`
  },
}))

jest.mock("@react-native-firebase/analytics", () => () => ({
  setUserId: jest.fn().mockResolvedValue(null),
  logTutorialBegin: jest.fn().mockResolvedValue(null)
}))

jest.mock("@expo-google-fonts/space-grotesk", () => ({}))

jest.mock('expo-blur', () => ({
  BlurView: ({children}) => <div>{children}</div>,
}))

jest.mock('react-native-webview', () => ({
  WebView: mockForwardRef(function WebView({ children }: { children: ReactNode }, ref: ForwardedRef<HTMLDivElement>) {
    return <div ref={ref}>{children}</div>
  }),
}))

declare const tron // eslint-disable-line @typescript-eslint/no-unused-vars

declare global {
  let __TEST__
}
