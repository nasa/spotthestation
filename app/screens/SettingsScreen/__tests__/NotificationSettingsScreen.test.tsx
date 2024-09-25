import React from "react"
import { NotificationSettingsScreen } from "../NotificationSettingsScreen"
import { act, render } from "@testing-library/react-native"
import { NavigationContainer } from "@react-navigation/native"
import * as MockDate from "mockdate"

describe("NotificationSettingsScreen", () => {
  beforeEach(() => {
    MockDate.set("12-12-2012 10:10:10")
  })

  afterEach(() => {
    MockDate.reset()
  })

  it("renders correctly", async () => {
    const component = render(
      <NavigationContainer>
        <NotificationSettingsScreen />
      </NavigationContainer>,
    )

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100))
    })

    expect(component.toJSON()).toMatchSnapshot()
  })
})
