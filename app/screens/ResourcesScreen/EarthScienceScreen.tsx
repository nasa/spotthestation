import { FeedItem } from "../../components"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { ViewStyle, View, ScrollView, ImageStyle } from "react-native"
import { StyleFn, useStyles } from "../../utils/useStyles"

import { Template } from "./Template"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"

const items = [
  {
    tags: [],
    title: "Earth Information Center",
    image: "https://earth.gov/meta/meta-image.png",
    type: "event",
    link: "https://earth.gov",
  },
  {
    tags: [],
    title: "Eyes on the Earth",
    image: "https://eyes.nasa.gov/apps/earth/og_img.jpg",
    type: "event",
    link: "https://eyes.nasa.gov/apps/earth/#/",
  },
]

export interface EarthScienceRouteProps {}

export const EarthScienceScreen = function EarthScienceScreen() {
  const navigation = useNavigation()
  const bottomInset = useSafeAreaInsetsStyle(["bottom"], "padding")

  const { $bodyContainer, $imageStyle } = useStyles(styles)

  const link = (item: any) => {
    navigation.navigate("ResourcesScreens" as never, { screen: "Web", url: item.link } as never)
  }

  return (
    <Template dismissKeyboardOnPress headerTitleTx="resources.earthScience.title">
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
              imageStyle={$imageStyle}
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

  const $imageStyle: ImageStyle = {
    aspectRatio: 16 / 9,
  }

  return {
    $bodyContainer,
    $imageStyle,
  }
}
