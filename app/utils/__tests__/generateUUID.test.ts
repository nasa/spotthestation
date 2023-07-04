import { getUserId } from "../generateUUID"

describe("getUserId", () => {
  it("should return a string", () => {
    const userId = getUserId()

    expect(typeof userId).toBe("string")
  })

  it("should return a unique identifier", () => {
    const userId1 = getUserId()
    const userId2 = getUserId()

    expect(userId1).not.toBe(userId2)
  })
})
