import { Instance, SnapshotOut, types } from "mobx-state-tree"
import RootStoreActions from "./actions"
import { Location } from "./Location"
import { Modal } from "./Modal"
import { getCalendars } from "expo-localization"

const WeatherData = types.model("WeatherData", {
  timestamp: types.number,
  data: types.frozen(),
})

/**
 * A RootStore model.
 */
export const RootStoreModel = types
  .model("RootStore", {
    savedLocations: types.optional(types.array(Location), []),
    selectedLocation: types.maybeNull(Location),
    currentLocation: types.maybeNull(Location),
    issData: types.optional(types.frozen(), []),
    initLoading: types.optional(types.boolean, false),
    trajectoryError: types.optional(types.boolean, false),
    trajectoryErrorKind: types.optional(types.string, ""),
    issDataLoaded: types.optional(types.boolean, false),
    sightingsLoaded: types.optional(types.boolean, false),
    sightingsHistoryLoading: types.optional(types.boolean, false),
    currentModal: types.maybeNull(Modal),
    modalsQueue: types.optional(types.array(types.string), []),
    isCurrentLocationUpdating: types.optional(types.boolean, false),
    weatherCache: types.optional(types.map(WeatherData), {}),
    timeFormat: types.optional(
      types.enumeration(["24hour", "12hour"]),
      getCalendars()[0].uses24hourClock ? "24hour" : "12hour",
    ),
    units: types.optional(types.enumeration(["metric", "imperial"]), "metric"),
  })
  .props({})
  .actions(RootStoreActions)
  .views((self) => ({
    get isNotifyAll() {
      return (
        self.currentLocation?.sightings.every((item) => item.notify) &&
        self.savedLocations.every((location) => location.sightings.every((item) => item.notify))
      )
    },
  }))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
