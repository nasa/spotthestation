import React from "react"
import { ResourcesScreen } from "../index"
import { NavigationContainer } from "@react-navigation/native"
import { act, render, userEvent } from "@testing-library/react-native"
import { TabNavigatorContext } from "../../../navigators"

const mockNavigate = jest.fn()

jest.mock("@react-navigation/native", () => ({
  ...Object.assign({}, jest.requireActual("@react-navigation/native")),
  useNavigation: jest.fn(() => ({ navigate: mockNavigate })),
  useRoute: () => ({
    params: {
      id: 1,
    },
  }),
}))
it("renders correctly", async () => {
  const component = render(
    <TabNavigatorContext.Provider
      value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
    >
      <NavigationContainer>
        <ResourcesScreen />
      </NavigationContainer>
    </TabNavigatorContext.Provider>,
  )

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100))
  })

  expect(component.toJSON()).toMatchSnapshot()
})

it("navigates to correct pages on link press", async () => {
  const component = render(
    <TabNavigatorContext.Provider
      value={{ toggleBottomTabs: jest.fn(), toggleIsLandscape: jest.fn() }}
    >
      <NavigationContainer>
        <ResourcesScreen />
      </NavigationContainer>
    </TabNavigatorContext.Provider>,
  )

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100))
  })

  await userEvent.press(
    await component.findByText("resources.spotTheStation.title", { exact: false }),
  )
  expect(mockNavigate).toBeCalledWith("ResourcesScreens", {
    screen: "Web",
    url: "https://spotthestation.nasa.gov/message_example.cfm",
  })

  await userEvent.press(await component.findByText("resources.news.title", { exact: false }))
  expect(mockNavigate).toBeCalledWith("ResourcesScreens", { screen: "News" })

  await userEvent.press(await component.findByText("resources.about.title", { exact: false }))
  expect(mockNavigate).toBeCalledWith("ResourcesScreens", { screen: "About" })

  await userEvent.press(await component.findByText("resources.details.title", { exact: false }))
  expect(mockNavigate).toBeCalledWith("ResourcesScreens", { screen: "Details" })

  await userEvent.press(await component.findByText("resources.faq.title", { exact: false }))
  expect(mockNavigate).toBeCalledWith("ResourcesScreens", { screen: "Faq" })

  await userEvent.press(await component.findByText("resources.astronauts.title", { exact: false }))
  expect(mockNavigate).toBeCalledWith("ResourcesScreens", { screen: "Astronauts" })

  await userEvent.press(await component.findByText("resources.live.title", { exact: false }))
  expect(mockNavigate).toBeCalledWith("ResourcesScreens", { screen: "Live" })

  await userEvent.press(await component.findByText("resources.videos.title", { exact: false }))
  expect(mockNavigate).toBeCalledWith("ResourcesScreens", { screen: "Videos" })

  await userEvent.press(await component.findByText("resources.gallery.title", { exact: false }))
  expect(mockNavigate).toBeCalledWith("ResourcesScreens", {
    screen: "Web",
    url: "https://www.nasa.gov/international-space-station/space-station-gallery",
  })
})
