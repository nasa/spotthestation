import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useContext, useEffect, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  ScrollView,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { XMLParser } from "fast-xml-parser"
import { Accessory, Button, Icon, Screen, Text, TextField } from "../../../components"
import { api, LocationType, OrbitPoint } from "../../../services/api"
import { colors, typography } from "../../../theme"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { ExpandContainer } from "../components/ExpandContainer"
import { FeedItem } from "../components/FeedItem"
import { FeedSearchResultItem } from "../components/FeedSearchResultItem"
import { useStores } from "../../../models"
import { Details } from "../SkyViewScreen/Details"
import { Live } from "./Live"
import { StyleFn, useStyles } from "../../../utils/useStyles"
import { TabNavigatorContext } from "../../../navigators/navigationUtilities"

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
]

const suggestions = ["NASA Upcoming Missons", "Interviews of the Week", "ARTEMIS II"]

type NewsType = {
  "content:encoded": string
  title: string
  type: string
  pubDate: string
}

export const Resources = observer(function HomeScreen() {
  const {
    $container,
    $headerContainer,
    $searchButton,
    $xButton,
    $bodyContainer,
    $suggestionContainer,
    $header,
    $suggestion,
    $scrollContainer,
    $liveContainer,
    $horizontalScrollContainer,
    $searchField,
    $button,
    $active,
    $buttonText,
    $footer,
    $searchResultsContainer,
    $searchFieldContainer,
    $justifyCenter,
  } = useStyles(styles)

  const navigation = useNavigation()
  const { currentLocation, selectedLocation, issData, getISSData } = useStores()
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")
  const [isSearch, setIsSearch] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [type, setType] = useState("news")
  const [news, setNews] = useState<NewsType[]>([])
  const [page, setPage] = useState(1)
  const [isFocus, setIsFocus] = useState(false)
  const [location, setLocation] = useState<[number, number]>(null)

  const fetchData = useCallback(
    (paged = 1) => {
      if (isLoading) return
      setIsLoading(true)
      setPage(paged)
      api
        .getFeed(+paged)
        .then((res) => {
          if (!res.ok) return setIsLoading(false)
          const parser = new XMLParser()
          const jObj = parser.parse(res.places)
          setNews([...news, ...jObj.rss.channel.item])
          setIsLoading(false)
        })
        .catch((e) => {
          setIsLoading(false)
          console.log(e)
        })
    },
    [news, isLoading],
  )

  useEffect(() => {
    fetchData()
  }, [])

  const getLocation = (selectedLocation: LocationType, currentLocation: LocationType) => {
    let lat: number
    let lng: number
    if (selectedLocation) {
      lat = selectedLocation.location.lat
      lng = selectedLocation.location.lng
    } else {
      if (currentLocation) {
        lat = currentLocation.location.lat
        lng = currentLocation.location.lng
      }
    }
    if (lat && lng) setLocation([lat, lng])
  }

  const getData = async () => {
    await getISSData({ lat: location[0], lon: location[1] })
  }

  useEffect(() => {
    if (!location || !issData?.length) return undefined

    const lastOrbitPoint = issData[issData.length - 1] as OrbitPoint
    if (!lastOrbitPoint) return undefined
    const diff = new Date(lastOrbitPoint.date).valueOf() - Date.now()
    if (diff <= 0) return undefined

    const tmr = setTimeout(() => {
      getData().catch((e) => console.log(e))
    }, diff)

    return () => clearTimeout(tmr)
  }, [issData])

  useEffect(() => {
    getLocation(selectedLocation, currentLocation)
  }, [currentLocation, selectedLocation])

  useEffect(() => {
    if (!location) return
    getData().catch((e) => console.log(e))
  }, [location])

  const { toggleBottomTabs } = useContext(TabNavigatorContext)

  const renderFooter = useCallback(() => {
    if (isLoading) {
      return (
        <View style={$footer}>
          <ActivityIndicator size="large" />
        </View>
      )
    } else {
      return null
    }
  }, [isLoading])

  const link = (item: any) =>
    navigation.navigate("ResourcesScreens" as never, { screen: "Events", item: item.link } as never)

  const renderStatic = () => {
    return (
      <ScrollView
        accessible
        accessibilityLabel="recent results"
        accessibilityHint="recent results"
        accessibilityRole="scrollbar"
        style={$scrollContainer}
      >
        <View style={[$scrollContainer, $bodyContainer]}>
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
    )
  }

  const renderSearch = useCallback(() => {
    if (searchQuery) {
      const searchRes = [...news].filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      return (
        <ExpandContainer
          title="resources.searchResults"
          itemsCount={searchRes.length}
          expandble={false}
        >
          <FlatList
            data={searchRes}
            renderItem={({ item }) => (
              <FeedSearchResultItem
                key={item.title}
                onPress={() => link(item)}
                title={item.title}
                type={item.type}
                image={
                  /<img.*?src="([^"]*)"/.exec(item["content:encoded"])
                    ? /<img.*?src="([^"]*)"/.exec(item["content:encoded"])[1]
                    : ""
                }
              />
            )}
            numColumns={2}
            columnWrapperStyle={$justifyCenter}
            contentContainerStyle={$searchResultsContainer}
          />
        </ExpandContainer>
      )
    } else {
      return (
        <ScrollView
          accessible
          accessibilityLabel="recent results"
          accessibilityHint="recent results"
          accessibilityRole="scrollbar"
          style={$scrollContainer}
        >
          <View style={[$scrollContainer, $bodyContainer]}>
            <ExpandContainer title="resources.suggestions" expandble={false}>
              {suggestions.map((suggestion) => (
                <View key={suggestion} style={$suggestionContainer}>
                  <Icon icon="search" size={28} />
                  <Text
                    accessible
                    accessibilityLabel="suggestion"
                    accessibilityHint={suggestion}
                    accessibilityRole="text"
                    text={suggestion}
                    style={$suggestion}
                  />
                </View>
              ))}
            </ExpandContainer>
          </View>
        </ScrollView>
      )
    }
  }, [searchQuery, news])

  useEffect(() => {
    toggleBottomTabs(!isSearch)
  }, [isSearch])

  const renderBody = useCallback(() => {
    if (isSearch) {
      return renderSearch()
    } else {
      return (
        <FlatList
          data={news}
          renderItem={({ item }) => (
            <FeedItem
              key={item.title}
              onPress={() => link(item)}
              title={item.title}
              date={new Date(item.pubDate).toISOString()}
              image={
                /<img.*?src="([^"]*)"/.exec(item["content:encoded"])
                  ? /<img.*?src="([^"]*)"/.exec(item["content:encoded"])[1]
                  : ""
              }
            />
          )}
          numColumns={2}
          columnWrapperStyle={$justifyCenter}
          onEndReached={() => {
            fetchData(page + 1)
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      )
    }
  }, [isSearch, renderSearch, renderFooter, news])

  const renderDetails = useCallback(() => {
    return (
      <ScrollView
        accessible
        accessibilityLabel="recent results"
        accessibilityHint="recent results"
        accessibilityRole="scrollbar"
        style={$scrollContainer}
      >
        <Pressable>
          <Details issData={issData} observer={location} />
        </Pressable>
      </ScrollView>
    )
  }, [issData, location])

  const renderLive = useCallback(() => {
    return (
      <ScrollView
        accessible
        accessibilityLabel="recent results"
        accessibilityHint="recent results"
        accessibilityRole="scrollbar"
        contentContainerStyle={$liveContainer}
        style={$scrollContainer}
      >
        <Live />
      </ScrollView>
    )
  }, [issData, location])

  const renderTab = (type: string) => {
    switch (type) {
      case "about":
        return renderStatic()
      case "news":
        return renderBody()
      case "details":
        return renderDetails()
      case "live":
        return renderLive()
      default:
        return renderStatic()
    }
  }

  return (
    <Screen
      dismissKeyboardOnPress={type !== "live"}
      preset="fixed"
      contentContainerStyle={$container}
      style={[$topInset, { backgroundColor: colors.palette.neutral900 }]}
      statusBarStyle="light"
    >
      <View style={$headerContainer}>
        {isSearch ? (
          <View style={$searchFieldContainer}>
            <TextField
              accessible
              accessibilityLabel="search"
              accessibilityHint="type to search events"
              accessibilityRole="search"
              value={searchQuery}
              inputWrapperStyle={$searchField}
              placeholderTx="resources.searchPlaceholder"
              onChangeText={setSearchQuery}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              renderLeftAccessory={({ style }) => (
                <Accessory icon="search" color={colors.palette.neutral450} style={style} />
              )}
              renderRightAccessory={({ style }) =>
                isFocus &&
                searchQuery && (
                  <Accessory style={style} icon={"xCircle"} onPress={() => setSearchQuery("")} />
                )
              }
            />
          </View>
        ) : (
          <Text
            accessible
            accessibilityLabel="header"
            accessibilityHint="header"
            accessibilityRole="text"
            tx="resources.header"
            style={$header}
          />
        )}
        <Icon
          icon={isSearch ? "x" : "search"}
          size={24}
          containerStyle={[$searchButton, isSearch && $xButton]}
          onPress={() => setIsSearch(!isSearch)}
        />
      </View>
      <View style={$horizontalScrollContainer}>
        <ScrollView horizontal style={$horizontalScrollContainer}>
          {["news", "about", "details", "live"].map((item) => (
            <Button
              key={item}
              accessible
              accessibilityLabel={`${item} button`}
              accessibilityHint={`show ${item} view`}
              tx={`resources.tabs.${(item as "news") || "about" || "details" || "live"}`}
              style={[$button, item === type && $active]}
              textStyle={$buttonText}
              pressedStyle={$button}
              onPress={() => setType(item)}
            />
          ))}
        </ScrollView>
      </View>
      {renderTab(type)}
    </Screen>
  )
})

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    paddingHorizontal: scale(18),
  }

  const $headerContainer: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }

  const $searchButton: ViewStyle = {
    width: scale(42),
    height: scale(42),
    borderRadius: scale(24),
    backgroundColor: colors.palette.neutral350,
    alignItems: "center",
    justifyContent: "center",
  }

  const $xButton: ViewStyle = {
    ...$searchButton,
    width: scale(56),
    height: scale(56),
    borderRadius: scale(36),
    backgroundColor: colors.palette.neutral550,
  }

  const $bodyContainer: ViewStyle = {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: scale(200),
  }

  const $suggestionContainer: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: scale(24),
  }

  const $header: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[36],
    lineHeight: lineHeights[44],
    color: colors.palette.neutral250,
  }

  const $suggestion: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[21],
    color: colors.palette.neutral250,
    paddingLeft: scale(12),
  }

  const $scrollContainer: ViewStyle = {
    flex: 1,
  }

  const $horizontalScrollContainer: ViewStyle = {
    // width: '100%',
    height: scale(80),
    marginTop: scale(10),
  }

  const $searchField: ViewStyle = {
    borderWidth: scale(1.5),
    borderColor: "transparent",
    borderRadius: scale(28),
    height: scale(56),
    backgroundColor: colors.palette.neutral550,
    overflow: "hidden",
  }

  const $button: ViewStyle = {
    width: "auto",
    height: scale(46),
    minHeight: scale(40),
    backgroundColor: "transparent",
    borderRadius: scale(28),
    borderWidth: 0,
    marginRight: scale(0),
    paddingHorizontal: scale(16),
  }

  const $active: ViewStyle = {
    backgroundColor: colors.palette.neutral550,
  }

  const $buttonText: TextStyle = {
    color: colors.palette.neutral100,
    fontSize: fontSizes[17],
    fontFamily: typography.primary.medium,
    lineHeight: lineHeights[22],
    textTransform: "capitalize",
    textAlignVertical: "center",
  }

  const $footer: ViewStyle = { paddingVertical: scale(20) }

  const $searchResultsContainer = { paddingBottom: scale(200) }

  const $searchFieldContainer = { flex: 1, marginRight: scale(18) }

  const $justifyCenter: ViewStyle = { justifyContent: "space-between" }

  const $liveContainer: ViewStyle = { flexGrow: 1 }

  return {
    $container,
    $headerContainer,
    $searchButton,
    $xButton,
    $bodyContainer,
    $suggestionContainer,
    $header,
    $suggestion,
    $scrollContainer,
    $horizontalScrollContainer,
    $searchField,
    $button,
    $active,
    $buttonText,
    $footer,
    $searchResultsContainer,
    $searchFieldContainer,
    $justifyCenter,
    $liveContainer,
  }
}
