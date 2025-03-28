jest.mock('react-native-dotenv', () => ({
  API_URL: 'https://backend.spotthestation.org',
}))

jest.mock('react-native-snackbar', () => ({
  show: () => ({}),
  dismiss: () => ({}),
  LENGTH_LONG: 'long',
}))

jest.mock('react-native-geolocation-service', () => ({
  requestAuthorization: jest.fn(),
  getCurrentPosition: jest.fn(),
}))

jest.mock("@react-native-async-storage/async-storage", () => ({}))

jest.mock("@notifee/react-native", () => ({
  createChannel: jest.fn(),
  requestPermission: jest.fn(),
  cancelTriggerNotifications: jest.fn(),
  createTriggerNotification: jest.fn(),
  getNotificationSettings: jest.fn().mockResolvedValue({ android: { alarm: 1 }}),
  TriggerType: { TIMESTAMP: 0 },
  AndroidNotificationSetting: { ENABLED: 1 }
}))
jest.mock("@react-native-firebase/analytics", () => ({}))

jest.mock("expo-localization", () => ({
  getLocales: () => ([{ regionCode: 'TC' }]),
  getCalendars: () => ([{ timeZone: 'Test/test' }]),
  locale: 'en-US'
}))

jest.mock("expo-calendar", () => ({}))


jest.setTimeout(30000)
