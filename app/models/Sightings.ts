import { types } from "mobx-state-tree"

export const Sighting = types.model("Sighting", {
  date: types.optional(types.string, ""),
  maxHeight: types.maybeNull(types.number),
  minAzimuth: types.maybeNull(types.number),
  maxAzimuth: types.maybeNull(types.number),
  minAltitude: types.maybeNull(types.number),
  maxAltitude: types.maybeNull(types.number),
  visible: types.maybeNull(types.number),
  notify: types.maybeNull(types.boolean),
  dayStage: types.maybeNull(types.number),
})
