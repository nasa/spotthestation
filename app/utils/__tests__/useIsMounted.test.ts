import { useIsMounted } from "../useIsMounted"
import { renderHook } from "@testing-library/react-hooks"

it("should return true if component is mounted", () => {
  const { result } = renderHook(() => useIsMounted())

  expect(result.current()).toBe(true)
})

it("should return false if component is unmounted", () => {
  const { result, unmount } = renderHook(() => useIsMounted())

  unmount()

  expect(result.current()).toBe(false)
})

it("should always return the same function reference", () => {
  const { result, rerender } = renderHook(() => useIsMounted())
  const initialFunction = result.current

  rerender()

  expect(result.current).toBe(initialFunction)
})
