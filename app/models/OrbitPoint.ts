import { types } from "mobx-state-tree"

export const OrbitPoint = types.model("OrbitPoint", {
  date: types.string,
  latitude: types.number,
  longitude: types.number,
  azimuth: types.number,
  elevation: types.number,
})
