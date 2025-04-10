/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { NativeModules } from 'react-native'

const { LiveActivityModule } = NativeModules

export function startActivity(interval: number) {
  return LiveActivityModule?.startLiveActivity(interval)
}

export function endActivity() {
  return LiveActivityModule?.endLiveActivity()
}

export function updateActivity(interval: number) {
  return LiveActivityModule?.updateLiveActivity(interval)
}
