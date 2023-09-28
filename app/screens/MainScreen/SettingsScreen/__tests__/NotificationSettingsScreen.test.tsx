/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import { NotificationSettingsScreen } from "../NotificationSettingsScreen"
import { render } from "@testing-library/react-native"
import { NavigationContainer } from "@react-navigation/native"

jest.useFakeTimers("modern").setSystemTime(new Date("12-12-2012 10:10:10"))

it("renders correctly", () => {
  const tree = render(
    <NavigationContainer>
      <NotificationSettingsScreen />
    </NavigationContainer>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
