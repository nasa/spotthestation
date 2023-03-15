import { Instance, SnapshotOut, types } from "mobx-state-tree"
import RootStoreActions from "./actions"
import { Sighting } from "./Sightings"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore", {
  sightings: types.optional(types.array(Sighting), []),
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
