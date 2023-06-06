import { Instance, SnapshotOut, types } from "mobx-state-tree"
import RootStoreActions from "./actions"
import { Location } from "./Location"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore", {
  savedLocations: types.optional(types.array(Location), []),
  selectedLocation: types.maybeNull(Location),
  currentLocation: types.maybeNull(Location),
  issData: types.optional(types.frozen(), []),
  initLoading: types.optional(types.boolean, false),
}).props({})
  .actions(RootStoreActions)

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
