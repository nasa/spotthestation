import { Instance, SnapshotOut, types } from "mobx-state-tree"
import RootStoreActions from "./actions"
import { Location } from "./Location"
import { Sighting } from "./Sightings"
import { OrbitPoint } from "./OrbitPoint"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore", {
  savedLocations: types.optional(types.array(Location), []),
  selectedLocation: types.maybeNull(Location),
  currentLocation: types.maybeNull(Location),
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
