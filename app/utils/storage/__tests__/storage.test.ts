import AsyncStorage from "@react-native-async-storage/async-storage"
import { load, loadString, save, saveString, clear, remove, KEYS } from "../storage"

// fixtures
const VALUE_OBJECT = { x: 1 }
const VALUE_STRING = JSON.stringify(VALUE_OBJECT)

beforeEach(() => (AsyncStorage.getItem as jest.Mock).mockReturnValue(Promise.resolve(VALUE_STRING)))
afterEach(() => jest.clearAllMocks())

test("load", async () => {
  const value = await load(KEYS.SOMETHING)
  expect(value).toEqual(JSON.parse(VALUE_STRING))
})

test("loadString", async () => {
  const value = await loadString(KEYS.SOMETHING)
  expect(value).toEqual(VALUE_STRING)
})

test("save", async () => {
  await save(KEYS.SOMETHING, VALUE_OBJECT)
  expect(AsyncStorage.setItem).toHaveBeenCalledWith(KEYS.SOMETHING, VALUE_STRING)
})

test("saveString", async () => {
  await saveString(KEYS.SOMETHING, VALUE_STRING)
  expect(AsyncStorage.setItem).toHaveBeenCalledWith(KEYS.SOMETHING, VALUE_STRING)
})

test("remove", async () => {
  await remove(KEYS.SOMETHING)
  expect(AsyncStorage.removeItem).toHaveBeenCalledWith(KEYS.SOMETHING)
})

test("clear", async () => {
  await clear()
  expect(AsyncStorage.clear).toHaveBeenCalledWith()
})
