/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { NativeModules } from "react-native"

const { LiveActivityModule } = NativeModules

export function startActivity(
  title: string,
  subtitle: string,
  timeLeftTitle: string,
  interval: number,
) {
  return LiveActivityModule?.startLiveActivity(title, subtitle, timeLeftTitle, interval)
}

export async function endActivity() {
  await LiveActivityModule?.endLiveActivity()
}

export function updateActivity(interval: number) {
  return LiveActivityModule?.updateLiveActivity(interval)
}
