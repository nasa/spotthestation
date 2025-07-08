import { FeedItem } from "../../components"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import React from "react"
import { ViewStyle, View, ScrollView } from "react-native"
import { StyleFn, useStyles } from "../../utils/useStyles"

import { Template } from "./Template"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"

const items = [
  {
    tags: [],
    title: "International Space Station Overview",
    image:
      "https://www.nasa.gov/wp-content/uploads/2021/08/44911459904-375bc02163-k-0.jpg?resize=1200,800",
    type: "event",
    link: "https://www.nasa.gov/reference/international-space-station",
  },
  {
    tags: ["history"],
    title: "International Space Station Facts and Figures",
    date: "2023-01-04T00:00:00.000000",
    image: "https://www.nasa.gov/wp-content/uploads/2023/05/iss-blowout-updated-view-2023-300.png",
    type: "event",
    link: "https://www.nasa.gov/international-space-station/space-station-facts-and-figures",
  },
  {
    tags: ["history"],
    title: "International Space Station Crews and Expeditions",
    date: "2023-01-04T00:00:00.000000",
    image: "https://www.nasa.gov/wp-content/uploads/2023/05/exp70-portrait.jpg?w=1000",
    type: "event",
    link: "https://www.nasa.gov/international-space-station/expedition-missions",
  },
  {
    tags: [],
    title: "International Space Station International Cooperation",
    date: "2023-01-04T00:00:00.000000",
    image: "https://www.nasa.gov/wp-content/uploads/2023/03/ops-map.png",
    type: "event",
    link: "https://www.nasa.gov/international-space-station/space-station-international-cooperation",
  },
  {
    tags: [],
    title: "International Space Station Spacewalks",
    date: "2023-01-04T00:00:00.000000",
    image: "https://www.nasa.gov/wp-content/uploads/2023/05/sts102-314-003.jpg",
    type: "event",
    link: "https://www.nasa.gov/international-space-station/space-station-spacewalks",
  },
  {
    tags: [],
    title: "International Space Station Research and Technology",
    date: "2023-01-04T00:00:00.000000",
    image: "https://www.nasa.gov/wp-content/uploads/2023/03/iss064e015250.jpg",
    type: "event",
    link: "https://www.nasa.gov/international-space-station/space-station-research-and-technology",
  },
]

export interface AboutScreenRouteProps {}

export const AboutScreen = function AboutScreen() {
  const navigation = useNavigation<NavigationProp<any>>()
  const bottomInset = useSafeAreaInsetsStyle(["bottom"], "padding")

  const { $bodyContainer } = useStyles(styles)

  const link = (item: any) => {
    navigation.navigate("ResourcesScreens", { screen: "Web", url: item.link })
  }

  return (
    <Template dismissKeyboardOnPress headerTitleTx="resources.about.title">
      <ScrollView
        accessible
        accessibilityLabel="recent results"
        accessibilityHint="recent results"
        accessibilityRole="scrollbar"
        contentContainerStyle={bottomInset}
      >
        <View style={$bodyContainer}>
          {items.map((item) => (
            <FeedItem
              key={item.title}
              onPress={() => link(item)}
              tags={item.tags}
              title={item.title}
              image={item.image}
            />
          ))}
        </View>
      </ScrollView>
    </Template>
  )
}

const styles: StyleFn = ({ scale }) => {
  const $bodyContainer: ViewStyle = {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: scale(60),
  }

  return {
    $bodyContainer,
  }
}
