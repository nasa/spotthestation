import { Instance, SnapshotOut, types } from "mobx-state-tree"
import RootStoreActions from "./actions"
import { Sighting } from "./Sightings"
import { OrbitPoint } from "./OrbitPoint"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore", {
  sightings: types.optional(types.array(Sighting), []),
  issData: types.optional(types.array(OrbitPoint), []),
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
