import { types } from "mobx-state-tree"

export const Sighting = types.model("Sighting", {
  date: types.optional(types.string, ""),
  maxHeight: types.maybeNull(types.number),
  appears: types.optional(types.string, ""),
  disappears: types.optional(types.string, ""),
  visible: types.maybeNull(types.number),
  notify: types.maybeNull(types.boolean),
  dayStage: types.maybeNull(types.number),
})
