import * as Keychain from "react-native-keychain"
import { api, Token } from "../services/api"
import * as storage from "./storage"

async function fetchTokens() {
  const res = await api.getTokens()
  if (!res.ok) throw Error("Unable to fetch tokens")

  await Promise.all(
    Object.entries(res.data).map(async ([key, value]) =>
      Keychain.setGenericPassword(key, value, { service: key }).catch(console.error),
    ),
  )
}

async function fetchTokensVersion() {
  const res = await api.getTokensVersion()
  if (!res.ok) return storage.load(storage.KEYS.TOKENS_VERSION)

  return res.data.version
}

async function getTokenFromStorage(name: Token): Promise<string> {
  const credentials = await Keychain.getGenericPassword({ service: name })
  if (!credentials) {
    throw Error("No credentials found")
  }

  return credentials.password
}

export async function getToken(name: Token): Promise<string> {
  const newVersion = await fetchTokensVersion()
  const currentVersion = await storage.load(storage.KEYS.TOKENS_VERSION)

  if (newVersion !== currentVersion) {
    console.log(`Refetching tokens, current version: ${currentVersion}, new version: ${newVersion}`)
    await fetchTokens()
    await storage.save(storage.KEYS.TOKENS_VERSION, newVersion)
  } else if (!(await Keychain.hasGenericPassword({ service: name }))) {
    await fetchTokens()
  }

  return getTokenFromStorage(name)
}
