import {
  Accessory,
  Icon,
  Text,
  TextField,
  FeedItem,
  ExpandContainer,
  FeedSearchResultItem,
} from "../../components"
import { useNavigation } from "@react-navigation/native"
import React, { useCallback, useEffect, useState } from "react"
import { ViewStyle, TextStyle, View, FlatList, ActivityIndicator, ScrollView } from "react-native"

import { colors, typography } from "../../theme"
import { StyleFn, useStyles } from "../../utils/useStyles"

import { api } from "../../services/api"
import { XMLParser } from "fast-xml-parser"
import { formatDate } from "../../utils/datetime"
import en from "date-fns/locale/en-US"

import { Template } from "./Template"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"

type NewsType = {
  "content:encoded": string
  title: string
  type: string
  pubDate: string
}

const suggestions = ["NASA Upcoming Missions", "Interviews of the Week", "ARTEMIS II"]

export interface NewsScreenRouteProps {}

export const NewsScreen = function NewsScreen() {
  const navigation = useNavigation()

  const {
    $justifyCenter,
    $footer,
    $searchButton,
    $searchFieldContainer,
    $searchField,
    $bodyContainer,
    $suggestion,
    $suggestionContainer,
    $xButton,
    $flex,
  } = useStyles(styles)

  const bottomInset = useSafeAreaInsetsStyle(["bottom"], "padding")
  const [isSearch, setIsSearch] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [news, setNews] = useState<NewsType[]>([])
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [isFocus, setIsFocus] = useState(false)

  const link = (item: any) => {
    navigation.navigate("ResourcesScreens" as never, { screen: "Web", url: item.link } as never)
  }

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

  const renderSearch = useCallback(() => {
    if (searchQuery) {
      const searchRes = [...news].filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      return (
        <ExpandContainer
          title="resources.news.searchResults"
          itemsCount={searchRes.length}
          expandble={false}
          containerStyle={$flex}
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
            contentContainerStyle={bottomInset}
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
        >
          <View style={$bodyContainer}>
            <ExpandContainer
              title="resources.news.suggestions"
              expandble={false}
              containerStyle={$flex}
            >
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

  return (
    <Template
      dismissKeyboardOnPress
      headerTitleTx="resources.news.title"
      renderHeaderTitle={
        isSearch
          ? () => (
              <View style={$searchFieldContainer}>
                <TextField
                  accessible
                  accessibilityLabel="search"
                  accessibilityHint="type to search events"
                  accessibilityRole="search"
                  value={searchQuery}
                  inputWrapperStyle={$searchField}
                  placeholderTx="resources.news.searchPlaceholder"
                  onChangeText={setSearchQuery}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  renderLeftAccessory={({ style }) => (
                    <Accessory icon="search" color={colors.palette.neutral450} style={style} />
                  )}
                  renderRightAccessory={({ style }) =>
                    isFocus &&
                    searchQuery && (
                      <Accessory
                        style={style}
                        icon={"xCircle"}
                        accessibilityHint="clear"
                        onPress={() => setSearchQuery("")}
                      />
                    )
                  }
                />
              </View>
            )
          : null
      }
      renderHeaderIcon={() => (
        <Icon
          icon={isSearch ? "x" : "search"}
          size={24}
          containerStyle={[$searchButton, isSearch && $xButton]}
          accessibilityHint={isSearch ? "cancel" : "search"}
          onPress={() => setIsSearch(!isSearch)}
        />
      )}
    >
      {isSearch ? (
        renderSearch()
      ) : (
        <FlatList
          data={news}
          renderItem={({ item }) => (
            <FeedItem
              key={item.title}
              onPress={() => link(item)}
              title={item.title}
              subtitle={formatDate(new Date(item.pubDate).toISOString(), "MMM d, yyyy", {
                locale: en,
              })}
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
          contentContainerStyle={bottomInset}
        />
      )}
    </Template>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $justifyCenter: ViewStyle = { justifyContent: "space-between" }

  const $footer: ViewStyle = { paddingVertical: scale(20) }

  const $searchButton: ViewStyle = {
    width: scale(42),
    height: scale(42),
    borderRadius: scale(24),
    backgroundColor: colors.palette.neutral350,
    alignItems: "center",
    justifyContent: "center",
  }

  const $searchFieldContainer = { flex: 1, marginRight: scale(18) }

  const $searchField: ViewStyle = {
    borderWidth: scale(1.5),
    borderColor: "transparent",
    borderRadius: scale(28),
    height: scale(56),
    backgroundColor: colors.palette.neutral550,
    overflow: "hidden",
  }

  const $bodyContainer: ViewStyle = {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  }

  const $suggestion: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[21],
    color: colors.palette.neutral250,
    paddingLeft: scale(12),
  }

  const $suggestionContainer: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: scale(24),
  }

  const $xButton: ViewStyle = {
    ...$searchButton,
    width: scale(56),
    height: scale(56),
    borderRadius: scale(36),
    backgroundColor: colors.palette.neutral550,
  }

  const $flex = { flex: 1 }

  return {
    $justifyCenter,
    $footer,
    $searchButton,
    $searchFieldContainer,
    $searchField,
    $bodyContainer,
    $suggestion,
    $suggestionContainer,
    $xButton,
    $flex,
  }
}
