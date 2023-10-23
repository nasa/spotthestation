import { jest } from "@jest/globals"
import { applySnapshot, onSnapshot } from "mobx-state-tree"
import * as storage from "../../../utils/storage"
import { setupRootStore } from "../setupRootStore"
import { RootStoreModel } from "../../RootStore"

jest.mock("mobx-state-tree", () => {
  const actual: object = jest.requireActual("mobx-state-tree")
  return {
    ...actual,
    applySnapshot: jest.fn(),
    onSnapshot: jest.fn(),
  }
})

jest.mock("../../../utils/storage", () => ({
  load: jest.fn(),
  save: jest.fn(),
}))

describe("setupRootStore", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should load and apply snapshot from storage", async () => {
    const mockRootStore = RootStoreModel.create()
    const mockRestoredState = { data: "snapshot" }

    jest.mocked(storage.load).mockResolvedValue(mockRestoredState)

    await setupRootStore(mockRootStore)

    expect(storage.load).toHaveBeenCalledWith("root-v1")
    expect(applySnapshot).toHaveBeenCalledWith(mockRootStore, mockRestoredState)
  })

  it("should handle error while loading snapshot from storage", async () => {
    const mockRootStore = RootStoreModel.create()
    const mockErrorMessage = "Failed to load snapshot"
    const mockError = new Error(mockErrorMessage)

    ;(storage.load as unknown as jest.Mock<typeof storage.load>).mockRejectedValue(
      mockError as never,
    )
    console.tron = { error: jest.fn() } as any

    await setupRootStore(mockRootStore)

    expect(storage.load).toHaveBeenCalledWith("root-v1")
    expect(console.tron.error).toHaveBeenCalledWith(mockErrorMessage, null)
  })

  it("should track changes and save snapshot to storage", async () => {
    const mockRootStore = RootStoreModel.create()
    const mockSnapshot = { data: "snapshot" }
    /* prettier-ignore */
    const onMockSnapshot = onSnapshot as typeof onSnapshot<typeof mockSnapshot>
    jest.mocked(onMockSnapshot).mockImplementation((_, callback) => {
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
    const mockRootStore = RootStoreModel.create()

    jest.mocked(onSnapshot).mockReturnValue(jest.fn())

    const result = await setupRootStore(mockRootStore)
    result.unsubscribe()

    expect(result.unsubscribe).toEqual(expect.any(Function))
    expect(jest.mocked(onSnapshot).mock.calls[0][0]).toEqual(mockRootStore)
  })
})
