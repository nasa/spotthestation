/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { RootStoreModel } from "../RootStore"
import { LocationType } from "../../screens/OnboardingScreen/SignupLocation"
import notifications from "../../utils/notifications"

jest.mock("../../utils/notifications", () => ({
  setNotifications: jest.fn(),
}))

test("getISSSightings should update the store incorrectly", async () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: null,
    currentLocation: null,
    savedLocations: [],
    issData: [],
    initLoading: false,
    sightingsLoaded: false,
    isLocalCalculations: false,
  })

  const mockParams = { zone: "testZone", lat: 0, lon: 0 }

  await rootStore.getISSSightings(mockParams)

  expect(rootStore.selectedLocation).toBeNull()
  expect(rootStore.currentLocation).toBeNull()
  expect(rootStore.savedLocations).toEqual([])
})

test("getISSSightings should update the store correctly", async () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: {
      title: "Test selected",
      subtitle: "",
      location: { lat: 0, lng: 0 },
      sightings: [],
    },
    currentLocation: {},
    savedLocations: [],
    issData: [],
    initLoading: false,
    sightingsLoaded: false,
    isLocalCalculations: false,
  })

  const mockParams = { zone: "testZone", lat: 0, lon: 0 }

  await rootStore.getISSSightings(mockParams)

  expect(rootStore.selectedLocation).toEqual({
    title: "Test selected",
    subtitle: "",
    location: { lat: 0, lng: 0 },
    sightings: [
      {
        maxAltitude: 10,
        maxAzimuth: 0,
        minAltitude: 10,
        minAzimuth: 120,
        date: "date",
        dayStage: 1,
        maxHeight: 12,
        notify: true,
        visible: 6,
      },
    ],
    lastSightingOrbitPointAt: "2023-12-12",
  })
  expect(rootStore.savedLocations).toEqual([
    {
      title: "Test selected",
      subtitle: "",
      location: { lat: 0, lng: 0 },
      sightings: [
        {
          maxAltitude: 10,
          maxAzimuth: 0,
          minAltitude: 10,
          minAzimuth: 120,
          date: "date",
          dayStage: 1,
          maxHeight: 12,
          notify: true,
          visible: 6,
        },
      ],
      lastSightingOrbitPointAt: "2023-12-12",
    },
  ])
})

test("setCurrentLocation should update the store correctly", async () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: null,
    currentLocation: {},
    savedLocations: [],
    issData: [],
    initLoading: false,
    sightingsLoaded: false,
    isLocalCalculations: false,
  })

  const mockValue = {
    title: "New Location",
    location: { lat: 0, lng: 0 },
    sightings: [],
    subtitle: "sub",
    lastSightingOrbitPointAt: "2023-12-12",
  } as LocationType

  await rootStore.setCurrentLocation(mockValue)

  expect(rootStore.currentLocation).toEqual({
    ...mockValue,
    sightings: [
      {
        maxAltitude: 10,
        maxAzimuth: 0,
        minAltitude: 10,
        minAzimuth: 120,
        date: "date",
        dayStage: 1,
        maxHeight: 12,
        notify: true,
        visible: 6,
      },
    ],
  })
})

test("setISSSightings should update the store correctly", () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: {},
    currentLocation: {},
    savedLocations: [],
    issData: [],
    initLoading: false,
    isLocalCalculations: false,
    sightingsLoaded: false,
  })

  const mockValue = {
    title: "New Location",
    location: { lat: 0, lng: 0 },
    lastSightingOrbitPointAt: "2023-12-12",
    sightings: [],
    subtitle: "sub",
  } as LocationType

  rootStore.setISSSightings(mockValue)

  expect(rootStore.selectedLocation).toEqual(mockValue)
})

test("setISSSightings should update the store incorrectly", () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: null,
    currentLocation: {
      title: "New Location",
      location: { lat: 0, lng: 0 },
      lastSightingOrbitPointAt: "2023-12-12",
      sightings: [],
      subtitle: "sub",
    },
    savedLocations: [],
    issData: [],
    initLoading: false,
    sightingsLoaded: false,
    isLocalCalculations: false,
  })

  const mockValue = {
    title: "New Location",
    location: { lat: 0, lng: 0 },
    lastSightingOrbitPointAt: "2023-12-12",
    sightings: [
      {
        maxAltitude: 10,
        maxAzimuth: 0,
        minAltitude: 10,
        minAzimuth: 120,
        date: "date",
        dayStage: 1,
        maxHeight: 12,
        notify: true,
        visible: 6,
      },
    ],
    subtitle: "sub",
  } as LocationType

  rootStore.setISSSightings(mockValue)

  expect(rootStore.selectedLocation).toEqual(mockValue)
})

test("setSelectedLocation should update the store correctly", async () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: {},
    currentLocation: null,
    savedLocations: [],
    issData: [],
    initLoading: false,
    sightingsLoaded: false,
    isLocalCalculations: false,
  })

  const mockValue = {
    title: "New Location",
    location: { lat: 0, lng: 0 },
    lastSightingOrbitPointAt: "2023-12-12",
    sightings: [],
    subtitle: "sub",
  } as LocationType

  await rootStore.setSelectedLocation(mockValue)

  expect(rootStore.selectedLocation).toEqual({
    ...mockValue,
    sightings: [
      {
        maxAltitude: 10,
        maxAzimuth: 0,
        minAltitude: 10,
        minAzimuth: 120,
        date: "date",
        dayStage: 1,
        maxHeight: 12,
        notify: true,
        visible: 6,
      },
    ],
  })
})

test("setNewSavedLocation should update the store correctly", async () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: {},
    currentLocation: null,
    savedLocations: [],
    issData: [],
    initLoading: false,
    sightingsLoaded: false,
    isLocalCalculations: false,
  })

  const mockValue = {
    title: "New Location",
    location: { lat: 0, lng: 0 },
    lastSightingOrbitPointAt: "2023-12-12",
    sightings: [],
    subtitle: "sub",
  } as LocationType

  await rootStore.setNewSavedLocation(mockValue)

  expect(rootStore.savedLocations).toEqual([
    {
      ...mockValue,
      sightings: [
        {
          maxAltitude: 10,
          maxAzimuth: 0,
          minAltitude: 10,
          minAzimuth: 120,
          date: "date",
          dayStage: 1,
          maxHeight: 12,
          notify: true,
          visible: 6,
        },
      ],
    },
  ])
})

test("setSavedLocations should update the store correctly", () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: {},
    currentLocation: {},
    savedLocations: [],
    issData: [],
    initLoading: false,
    sightingsLoaded: false,
    isLocalCalculations: false,
  })

  const mockValue = {
    title: "New Location",
    location: { lat: 0, lng: 0 },
    lastSightingOrbitPointAt: "2023-12-12",
    sightings: [],
    subtitle: "sub",
  } as LocationType

  rootStore.setSavedLocations([mockValue])

  expect(rootStore.savedLocations).toEqual([mockValue])
})

test("setInitLoading should update the store correctly", () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: null,
    currentLocation: null,
    savedLocations: [],
    issData: [],
    initLoading: false,
    sightingsLoaded: false,
    isLocalCalculations: false,
  })

  rootStore.setInitLoading(false)

  expect(rootStore.initLoading).toBeFalsy()
})

test("setSightingsLoaded should update the store correctly", () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: null,
    currentLocation: null,
    savedLocations: [],
    issData: [],
    initLoading: false,
    sightingsLoaded: false,
    isLocalCalculations: false,
  })

  rootStore.setSightingsLoaded(true)

  expect(rootStore.sightingsLoaded).toBeTruthy()
})

test("setIssDataLoaded should update the store correctly", () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: null,
    currentLocation: null,
    savedLocations: [],
    issData: [],
    initLoading: false,
    sightingsLoaded: false,
    isLocalCalculations: false,
  })

  rootStore.setNotifications()

  expect(notifications.setNotifications).toBeCalled()
})

test("setIssDataLoaded should update the store correctly", () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: null,
    currentLocation: null,
    savedLocations: [],
    issData: [],
    initLoading: false,
    sightingsLoaded: false,
    isLocalCalculations: false,
  })

  rootStore.setIssDataLoaded(true)

  expect(rootStore.issDataLoaded).toBeTruthy()
})

test("setIssDataLoaded should update the store correctly", async () => {
  const rootStore = RootStoreModel.create({
    selectedLocation: null,
    currentLocation: null,
    savedLocations: [],
    issData: [],
    initLoading: false,
    sightingsLoaded: false,
    isLocalCalculations: false,
  })

  const mockValue = {
    title: "New Location",
    location: { lat: 0, lng: 0 },
    lastSightingOrbitPointAt: "2023-12-12",
    sightings: [],
    subtitle: "sub",
  } as LocationType
  await rootStore.getISSData(mockValue)

  expect(rootStore.issData).toEqual(["data"])
})
