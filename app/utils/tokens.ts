import * as Keychain from "react-native-keychain"
import { api, Token } from "../services/api"
import * as storage from "./storage"

const TOKENS_UPDATE_INTERVAL = 1000 * 60 * 60 * 24 * 7
const TOKENS_UPDATE_COOLDOWN_INTERVAL = 1000 * 60 * 60

async function fetchTokens() {
  const lastRequestStr: string = await storage.load(storage.KEYS.LAST_TOKENS_REQUESTED_AT)
  const lastRequest = lastRequestStr ? new Date(lastRequestStr) : null

  if (
    lastRequest &&
    new Date().getTime() - lastRequest.getTime() < TOKENS_UPDATE_COOLDOWN_INTERVAL
  ) {
    throw Error("Cooldown period for fetching tokens has not passed yet")
  }

  await storage.save(storage.KEYS.LAST_TOKENS_REQUESTED_AT, new Date().toISOString())
  const res = await api.getTokens()
  if (!res.ok) {
    throw Error("Unable to fetch tokens")
  }

  await Promise.all(
    Object.entries(res.data).map(async ([key, value]) =>
      Keychain.setGenericPassword(key, value, { service: key }).catch(console.error),
    ),
  )
}

async function getTokenFromStorage(name: Token): Promise<string> {
  const credentials = await Keychain.getGenericPassword({ service: name })
  if (!credentials || !credentials.password) {
    throw Error(`${name} not available in keychain`)
  }

  return credentials.password
}

export async function getToken(name: Token): Promise<string> {
  const lastUpdateStr: string = await storage.load(storage.KEYS.LAST_TOKENS_UPDATED_AT)
  const lastUpdate = lastUpdateStr ? new Date(lastUpdateStr) : null

  try {
    if (!lastUpdate || new Date().getTime() - lastUpdate.getTime() > TOKENS_UPDATE_INTERVAL) {
      console.log("Refetching tokens")
      await fetchTokens()
      await storage.save(storage.KEYS.LAST_TOKENS_UPDATED_AT, new Date().toISOString())
    } else if (!(await Keychain.hasGenericPassword({ service: name }))) {
      await fetchTokens()
    }
  } catch (e) {
    console.log(e)
  }

  return getTokenFromStorage(name)
}
