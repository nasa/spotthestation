/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getRoot } from "mobx-state-tree"
import { getRootStore } from "../getRootStore"

jest.mock("mobx-state-tree", () => ({
  getRoot: jest.fn(),
}))

describe("getRootStore", () => {
  it("should return the RootStore object", () => {
    const mockSelf = {}
    const mockRootStore: any = {}

    ;(getRoot as any).mockReturnValue(mockRootStore)

    const result = getRootStore(mockSelf)

    expect(getRoot).toHaveBeenCalledWith(mockSelf)
    expect(result).toBe(mockRootStore)
  })
})
