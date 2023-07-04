import { Dimensions } from "react-native"

const { height } = Dimensions.get("window")

export const normalizeHeight = (size) => height * size
