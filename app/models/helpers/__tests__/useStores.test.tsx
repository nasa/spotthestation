/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from "react"
import { render } from "@testing-library/react-native"
import { RootStoreProvider, useStores } from "../.."
import { Text } from "react-native"

describe("RootStoreProvider", () => {
  test("provides the RootStore to children", () => {
    const TestComponent = () => {
      const rootStore: any = useStores()
      return <Text>{rootStore.someProperty}</Text>
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
