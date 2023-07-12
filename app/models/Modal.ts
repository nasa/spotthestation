import { types } from "mobx-state-tree"
export const Modal = types.model("Modal", {
  name: types.optional(types.string, ""),
  state: types.optional(types.string, ""),
})
