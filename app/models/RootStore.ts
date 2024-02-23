import { Instance, SnapshotOut, types } from "mobx-state-tree"
import RootStoreActions from "./actions"
import { Location } from "./Location"
import { Modal } from "./Modal"

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
    currentModal: types.maybeNull(Modal),
    modalsQueue: types.optional(types.array(types.string), []),
    isCurrentLocationUpdating: types.optional(types.boolean, false),
  })
  .props({})
  .actions(RootStoreActions)

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
