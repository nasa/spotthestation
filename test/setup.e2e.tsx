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

jest.mock("react-native-push-notification", () => ({
  createChannel: jest.fn(),
  configure: jest.fn(),
  cancelAllLocalNotifications: jest.fn(),
  localNotificationSchedule: jest.fn()
}))

jest.mock("@react-native-community/push-notification-ios", () => ({
  removeAllPendingNotificationRequests: jest.fn(),
  addNotificationRequest: jest.fn(),
}))

jest.mock("@react-native-firebase/analytics", () => ({}))
