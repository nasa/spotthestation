import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React from "react"
import { ScrollView, ViewStyle } from "react-native"
import { StyleFn, useStyles } from "../../../utils/useStyles"
import { SettingsItem } from "../components/SettingsItem"
import { Template } from "./Template"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"

export const Resources = observer(function HomeScreen() {
  const { $container, $itemsContainer } = useStyles(styles)

  const navigation = useNavigation()
  const bottomInset = useSafeAreaInsetsStyle(["bottom"], "padding")

  const handleNavigate = (screen, params = {}) =>
    navigation.navigate("ResourcesScreens" as never, { screen, ...params } as never)

  return (
    <Template style={$container} hasBackButton={false} headerTitleTx="resources.header">
      <ScrollView style={$itemsContainer} contentContainerStyle={bottomInset}>
        <SettingsItem
          title="resources.spotTheStation.title"
          onPress={() =>
            handleNavigate("Web", { url: "https://spotthestation.nasa.gov/message_example.cfm" })
          }
        />
        <SettingsItem title="resources.news.title" onPress={() => handleNavigate("News")} />
        <SettingsItem title="resources.about.title" onPress={() => handleNavigate("About")} />
        <SettingsItem title="resources.details.title" onPress={() => handleNavigate("Details")} />
        <SettingsItem
          title="resources.faq.title"
          onPress={() =>
            handleNavigate("Web", {
              url: "https://www.nasa.gov/international-space-station-frequently-asked-questions",
            })
          }
        />
        <SettingsItem
          title="resources.astronauts.title"
          onPress={() => handleNavigate("Astronauts")}
        />
        <SettingsItem title="resources.live.title" onPress={() => handleNavigate("Live")} />
        <SettingsItem
          title="resources.tour.title"
          onPress={() =>
            handleNavigate("Web", {
              url: "https://esamultimedia.esa.int/multimedia/virtual-tour-iss/",
              webViewBackButton: true,
            })
          }
        />
        <SettingsItem title="resources.videos.title" onPress={() => handleNavigate("Videos")} />
        <SettingsItem
          title="resources.gallery.title"
          onPress={() =>
            handleNavigate("Web", {
              url: "https://www.nasa.gov/international-space-station/space-station-gallery",
            })
          }
        />
      </ScrollView>
    </Template>
  )
})

const styles: StyleFn = ({ scale }) => {
  const $container = {
    paddingTop: scale(24),
  }

  const $itemsContainer: ViewStyle = {
    flex: 1,
    paddingHorizontal: scale(18),
  }

  return {
    $itemsContainer,
    $container,
  }
}
