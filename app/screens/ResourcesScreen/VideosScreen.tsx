import { FeedItem } from "../../components"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import React from "react"
import { ViewStyle, View, ScrollView, ImageStyle } from "react-native"
import { StyleFn, useStyles } from "../../utils/useStyles"

import { Template } from "./Template"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"

const items = [
  {
    tags: [],
    title: "Station Videos",
    image: "https://i.ytimg.com/vi/iKnAQMUWnJI/hqdefault.jpg",
    link: "https://www.youtube.com/playlist?list=PLTXQuaxXBKKwtqw9fmVw9YnMKxz6FcmWf",
  },
  {
    tags: [],
    title: "Station Sunrise Timelapse",
    image: "https://img.youtube.com/vi/6jq8-UjhHh4/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=6jq8-UjhHh4&ab_channel=NASA",
  },
  {
    tags: [],
    title: "Station Sunset Timelapse",
    image: "https://img.youtube.com/vi/oOxFoeXiiSA/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=oOxFoeXiiSA&ab_channel=NASA",
  },
  {
    tags: [],
    title: "Station Fisheye Fly-Through",
    image: "https://i.ytimg.com/vi/DhmdyQdu96M/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=DhmdyQdu96M&ab_channel=NASA",
  },
  {
    tags: [],
    title: "Space Walk Action Cam",
    image: "https://i.ytimg.com/vi/Wfoy_OvNDvw/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=Wfoy_OvNDvw&ab_channel=NASA",
  },
  {
    tags: [],
    title: "Space Walk 85",
    image: "https://i.ytimg.com/vi/VFnE1bCQEyY/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=VFnE1bCQEyY&ab_channel=NASA",
  },
  {
    tags: [],
    title: "Space Walk 87",
    image: "https://i.ytimg.com/vi/wS4z42KaeGk/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=wS4z42KaeGk&ab_channel=NASA",
  },
  {
    tags: [],
    title: "Station Tour of Orbital Laboratory",
    image: "https://i.ytimg.com/vi/doN4t5NKW-k/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=doN4t5NKW-k&ab_channel=NASA",
  },
  {
    tags: [],
    title: "Station Tour of Tranquility",
    image: "https://i.ytimg.com/vi/tBVUTFPate0/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=tBVUTFPate0&ab_channel=NASAJohnson",
  },
]

export interface VideosScreenRouteProps {}

export const VideosScreen = function VideosScreen() {
  const navigation = useNavigation<NavigationProp<any>>()

  const { $bodyContainer, $imageStyle } = useStyles(styles)
  const bottomInset = useSafeAreaInsetsStyle(["bottom"], "padding")

  const link = (item: any) => {
    navigation.navigate("ResourcesScreens", { screen: "Web", url: item.link })
  }

  return (
    <Template dismissKeyboardOnPress headerTitleTx="resources.videos.title">
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

const styles: StyleFn = () => {
  const $bodyContainer: ViewStyle = {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  }

  const $imageStyle: ImageStyle = {
    aspectRatio: 16 / 9,
  }

  return {
    $bodyContainer,
    $imageStyle,
  }
}
