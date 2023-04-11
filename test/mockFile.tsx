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
  Button: ({children}) => <div>{children}</div>,
  Toggle: ({children}) => <div>{children}</div>,
}))
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