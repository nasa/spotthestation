/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { RootStoreModel } from "../RootStore"
import { LocationType } from "../../screens/OnboardingScreen/SignupLocation"

const rootStore = RootStoreModel.create({
  selectedLocation: null,
  currentLocation: null,
  savedLocations: [],
  issData: [],
  initLoading: false,
  sightingsLoaded: false,
})

test("getISSSightings should update the store correctly", async () => {
  const mockParams = { zone: "testZone", lat: 0, lon: 0 }

  await rootStore.getISSSightings(mockParams)

  expect(rootStore.selectedLocation).toBeNull()
  expect(rootStore.currentLocation).toBeNull()
  expect(rootStore.savedLocations).toEqual([])
})

test("setCurrentLocation should update the store correctly", async () => {
  const mockValue = {
    title: "New Location",
    location: { lat: 0, lng: 0 },
    alert: true,
    sightings: [],
    subtitle: "sub",
  } as LocationType

  await rootStore.setCurrentLocation(mockValue)

  expect(rootStore.currentLocation).toEqual(mockValue)
})

test("setISSSightings should update the store correctly", () => {
  const mockValue = {
    title: "New Location",
    location: { lat: 0, lng: 0 },
    alert: true,
    sightings: [],
    subtitle: "sub",
  } as LocationType

  rootStore.setISSSightings(mockValue)

  expect(rootStore.currentLocation).toEqual(mockValue)
})

test("setSelectedLocation should update the store correctly", () => {
  const mockValue = {
    title: "New Location",
    location: { lat: 0, lng: 0 },
    alert: true,
    sightings: [],
    subtitle: "sub",
  } as LocationType

  rootStore.setSelectedLocation(mockValue)

  expect(rootStore.selectedLocation).toEqual(mockValue)
})

test("setSavedLocations should update the store correctly", () => {
  const mockValue = {
    title: "New Location",
    location: { lat: 0, lng: 0 },
    alert: true,
    sightings: [],
    subtitle: "sub",
  } as LocationType

  rootStore.setSavedLocations([mockValue])

  expect(rootStore.savedLocations).toEqual([mockValue])
})

test("setInitLoading should update the store correctly", () => {
  rootStore.setInitLoading(false)

  expect(rootStore.initLoading).toBeFalsy()
})

test("setSightingsLoaded should update the store correctly", () => {
  rootStore.setSightingsLoaded(true)

  expect(rootStore.sightingsLoaded).toBeTruthy()
})

test("setIssDataLoaded should update the store correctly", () => {
  rootStore.setIssDataLoaded(true)

  expect(rootStore.issDataLoaded).toBeTruthy()
})

test("setIssDataLoaded should update the store correctly", () => {
  const mockValue = {
    title: "New Location",
    location: { lat: 0, lng: 0 },
    alert: true,
    sightings: [],
    subtitle: "sub",
  } as LocationType
  rootStore.getISSData(mockValue)

  expect(rootStore.issData).toEqual([])
})
