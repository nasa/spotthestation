/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from "react"
import { render, act } from "@testing-library/react"
import { RootStoreProvider, useStores, useInitialRootStore } from "../.."

describe("RootStoreProvider", () => {
  test("provides the RootStore to children", () => {
    const TestComponent = () => {
      const rootStore: any = useStores()
      return <div>{rootStore.someProperty}</div>
    }

    const rootStore: any = { someProperty: "Test Property" }
    const { getAllByText } = render(
      <RootStoreProvider value={rootStore}>
        <TestComponent />
      </RootStoreProvider>,
    )

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    expect(getAllByText("Test Property")).toHaveLength(1)
  })
})

describe("useInitialRootStore", () => {
  test("calls the callback and sets rehydrated state", async () => {
    const callback = jest.fn()

    await act(async () => {
      await act(async () => {
        render(<TestComponent callback={callback} />)
      })
    })

    expect(callback).not.toHaveBeenCalled()
  })

  const TestComponent = ({ callback }) => {
    const { rehydrated } = useInitialRootStore(callback)
    return <div>{rehydrated ? "Ready" : "Loading"}</div>
  }
})
