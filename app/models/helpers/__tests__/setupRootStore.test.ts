/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { applySnapshot, onSnapshot } from "mobx-state-tree"
import * as storage from "../../../utils/storage"
import { setupRootStore } from "../setupRootStore"

jest.mock("mobx-state-tree", () => ({
  applySnapshot: jest.fn(),
  onSnapshot: jest.fn(),
}))

jest.mock("../../../utils/storage", () => ({
  load: jest.fn(),
  save: jest.fn(),
}))

describe("setupRootStore", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should load and apply snapshot from storage", async () => {
    const mockRootStore: any = {}
    const mockRestoredState: any = { data: "snapshot" }

    ;(storage.load as any).mockResolvedValue(mockRestoredState)

    await setupRootStore(mockRootStore)

    expect(storage.load).toHaveBeenCalledWith("root-v1")
    expect(applySnapshot).toHaveBeenCalledWith(mockRootStore, mockRestoredState)
  })

  it("should handle error while loading snapshot from storage", async () => {
    const mockRootStore: any = {}
    const mockErrorMessage = "Failed to load snapshot"
    const mockError = new Error(mockErrorMessage)

    ;(storage.load as any).mockRejectedValue(mockError)
    console.tron = { error: jest.fn() } as any

    await setupRootStore(mockRootStore)

    expect(storage.load).toHaveBeenCalledWith("root-v1")
    expect(console.tron.error).toHaveBeenCalledWith(mockErrorMessage, null)
  })

  it("should track changes and save snapshot to storage", async () => {
    const mockRootStore: any = {}
    const mockSnapshot = { data: "snapshot" }

    ;(onSnapshot as any).mockImplementation((_, callback) => {
      callback(mockSnapshot)
      return jest.fn()
    })

    const result = await setupRootStore(mockRootStore)

    expect(onSnapshot).toHaveBeenCalledWith(mockRootStore, expect.any(Function))
    expect(storage.save).toHaveBeenCalledWith("root-v1", mockSnapshot)
    expect(result).toEqual({
      rootStore: mockRootStore,
      restoredState: undefined,
      unsubscribe: expect.any(Function),
    })
  })

  it("should unsubscribe from tracking changes", async () => {
    const mockRootStore: any = {}

    ;(onSnapshot as any).mockReturnValue(jest.fn())

    const result = await setupRootStore(mockRootStore)
    result.unsubscribe()

    expect(result.unsubscribe).toEqual(expect.any(Function))
    expect((onSnapshot as any).mock.calls[0][0]).toEqual(mockRootStore)
  })
})
