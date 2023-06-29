/* eslint-disable react/display-name */
import React from "react"

export default {
  height: 100,
  width: 100,
  scale: 2.0,
  uri: "https://placekitten.com/200/200",
}

jest.mock('../app/components', () => ({
  Screen: ({children}) => <div>{children}</div>,
  Icon: ({children}) => <div>{children}</div>,
  Text: ({children}) => <div>{children}</div>,
  TextField: ({children}) => <div>{children}</div>,
  Button: ({children}) => <div>{children}</div>,
  Toggle: ({children}) => <div>{children}</div>,
}))
jest.mock('../app/screens/MainScreen/components/Globe', () => ({ Globe: () => <div /> }))
jest.mock('../app/screens/MainScreen/components/ARView', () => ({ ARView: () => <div /> }))
jest.mock('../app/screens/MainScreen/components/MapBox', () => ({ MapBox: () => <div /> }))
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
  getCalendars: () => ([{ timeZone: 'Test/test' }])
}))
jest.mock("react-native-device-info", () => ({
  getVersion: () => "0.0.1",
  getApplicationName: () => "Test",
}))
jest.mock("react-native-permissions", () => ({
  check: jest.fn(), 
  request: jest.fn(), 
  PERMISSIONS: '', 
  RESULTS: ''
}))
jest.mock("@react-native-community/cameraroll", () => ({
  Share: jest.fn(),
}))
jest.mock("react-native-share", () => ({
  Share: jest.fn(),
}))
jest.mock("react-native-view-shot", () => ({
  captureScreen: jest.fn(),
}))
jest.mock("react-native-modal-datetime-picker", () => "")
jest.mock("../app/services/api", () => ({
  api: { 
    getLocationTimeZone: () => new Promise((resolve) => resolve({ kind: "ok", zone: { timeZoneId: 'US/Central' } }))
  },
}))
jest.mock("react-native-push-notification", () => ({
  createChannel: jest.fn(),
  configure: jest.fn(),
  cancelAllLocalNotifications: jest.fn(),
  localNotificationSchedule: jest.fn()
}))
jest.mock("react-native-orientation-locker", () => ({
  getInitialOrientation: jest.fn(),
  addOrientationListener: jest.fn(),
  removeOrientationListener: jest.fn()
}))
jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({ top: 0 }),
}))
jest.mock("@react-native-firebase/analytics", () => ({}))
