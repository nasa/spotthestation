/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useNavigation, useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useState } from "react"
import { ActivityIndicator, FlatList, ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { XMLParser } from 'fast-xml-parser'
import { Accessory, Button, Icon, Screen, Text, TextField } from "../../../components"
import { api } from "../../../services/api"
import { colors, typography } from "../../../theme"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { ExpandContainer } from "../components/ExpandContainer"
import { FeedItem } from "../components/FeedItem"
import { FeedSearchResultItem } from "../components/FeedSearchResultItem"

const items = [{
  tags: ['history'],
  title: "Expedition 68 Welcomes Crew-6 Members Aboard Station",
  date: "2023-03-03T00:00:00.000000",
  image: "https://blogs.nasa.gov/spacestation/wp-content/uploads/sites/240/2023/03/blog_crew_crew_greeting.jpg",
  type: "event",
  link: 'https://blogs.nasa.gov/spacestation/2023/03/03/expedition-68-welcomes-crew-6-members-aboard-station/'
}, {
  tags: ['history'],
  title: "International Space Station Facts and Figures",
  date: "2023-01-04T00:00:00.000000",
  image: "https://www.nasa.gov/sites/default/files/thumbnails/image/iss-blowout_updated_view-web-version-010323.png",
  type: "event",
  link: 'https://www.nasa.gov/feature/facts-and-figures'
}]

const suggestions = ['NASA Upcoming Missons', 'Interviews of the Week', 'ARTEMIS II']

export interface ResourcesScreenRouteProps {
  toggleBottomTabs: (value: boolean) => void
}

export const Resources = observer(function HomeScreen() {
  const navigation = useNavigation()
  const route: ResourcesScreenRouteProps = useRoute().params as ResourcesScreenRouteProps
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")
  const [isSearch, setIsSearch] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [type, setType] = useState('about')
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)

  const fetchData = useCallback((paged = 1) => {
    setIsLoading(true)
    api.getFeed(+paged).then(res => {
      const parser = new XMLParser()
      const jObj = parser.parse(res.places)
      setNews([...news, ...jObj.rss.channel.item])
      setIsLoading(false)
    }).catch(e => {
      setIsLoading(false)
      console.log(e)
    })
  }, [news])

  useEffect(() => {
    fetchData()
  }, [])

  const renderFooter = () => {
    if (isLoading) {
      return (
        <View style={{ paddingVertical: 20 }}>
          <ActivityIndicator size="large" />
        </View>
      )
    } else {
      return null
    }
  }

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
          {items.map(item => <FeedItem
                      key={item.title}
                      onPress={() => navigation.navigate('ResourcesScreens' as never, { screen: 'Events', item: item.link } as never)}
                      tags={item.tags} 
                      title={item.title}
                      date={(new Date(item.date)).toISOString()}
                      image={item.image}
                    />)}
        </View>
      </ScrollView>
    )
  }

  const renderSearch = useCallback(() => {
    if (searchQuery) {
      return <ExpandContainer title="resources.searchResults" itemsCount={items.length} expandble={false}>
        <FlatList 
          data={[...news].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))} 
          renderItem={({item}) => <FeedSearchResultItem
            key={item.title}
            onPress={() => navigation.navigate('ResourcesScreens' as never, { screen: 'Events', item: item.guid } as never)}
            // tags={item.tags}
            title={item.title}
            type={item.type}
            image={/<img.*?src="([^"]*)"/.exec(item["content:encoded"]) ? /<img.*?src="([^"]*)"/.exec(item["content:encoded"])[1] : ''}
          />}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ paddingBottom: 200 }}
        />
      </ExpandContainer>
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
              {suggestions.map(suggestion => (<View key={suggestion} style={$suggestionContainer}>
                <Icon icon='search' size={28} />
                <Text
                  accessible
                  accessibilityLabel="suggestion"
                  accessibilityHint={suggestion}
                  accessibilityRole="text"
                  text={suggestion} 
                  style={$suggestion}
                />
              </View>))}
            </ExpandContainer>
          </View>
        </ScrollView>
      )
    }
  }, [searchQuery, news])

  const renderBody = useCallback(() => {
    if (isSearch) {
      route.toggleBottomTabs(false)
      return renderSearch()
    } else {
      route.toggleBottomTabs(true)
      return (
        <FlatList 
          data={news} 
          renderItem={({item}) => <FeedItem
                      key={item.title}
                      onPress={() => navigation.navigate('ResourcesScreens' as never, { screen: 'Events', item: item.guid } as never)} 
                      // tags={item.tags} 
                      title={item.title}
                      date={(new Date(item.pubDate)).toISOString()}
                      image={/<img.*?src="([^"]*)"/.exec(item["content:encoded"]) ? /<img.*?src="([^"]*)"/.exec(item["content:encoded"])[1] : ''}
                    />}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between'}}
          onEndReached={() => {
            setPage(page + 1)
            fetchData(page + 1)
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      )
    }
  }, [isSearch, renderSearch, news])

  return (
    <Screen preset="fixed" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      <View style={$headerContainer}>
        {isSearch ? (<View style={{ flex: 1, marginRight: 18 }}>
          <TextField
            accessible
            accessibilityLabel="search"
            accessibilityHint="type to search events"
            accessibilityRole="search"
            value={searchQuery}
            inputWrapperStyle={$searchField}
            placeholderTx="resources.searchPlaceholder"
            onChangeText={setSearchQuery}
            renderLeftAccessory={({ style }) => (
              <Accessory 
                icon="search"
                color={colors.palette.neutral450}
                style={style}
              />
            )}
          />
        </View>)
         : <Text 
            accessible
            accessibilityLabel="header"
            accessibilityHint="header"
            accessibilityRole="text"
            tx="resources.header" 
            style={$header} 
          />}
        <Icon icon={isSearch ? 'x' : 'search'} size={24} containerStyle={[$searchButton, isSearch && $xButton]} onPress={() => setIsSearch(!isSearch)} />
      </View>
      <View style={$horizontalScrollContainer}>
        <ScrollView horizontal style={$horizontalScrollContainer}>
          {['about', 'news'].map(item => <Button
            key={item}
            accessible
            accessibilityLabel={`${item} button`}
            accessibilityHint={`show ${item} view`}
            text={item}
            style={[$button, item === type && $active]}
            textStyle={$buttonText}
            pressedStyle={$button}
            onPress={() => setType(item)}
          />)}
        </ScrollView>
      </View>
      {type === 'news' ? renderBody() : renderStatic()}
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  paddingHorizontal: 18
}

const $headerContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const $searchButton: ViewStyle = {
  width: 42, 
  height: 42, 
  borderRadius: 24, 
  backgroundColor: colors.palette.neutral350,
  alignItems: 'center',
  justifyContent: 'center'
}

const $xButton: ViewStyle = {
  ...$searchButton,
  width: 56, 
  height: 56, 
  borderRadius: 36,
  backgroundColor: colors.palette.neutral550,
}

const $bodyContainer: ViewStyle = {
  justifyContent: "space-between",
  flexDirection: 'row',
  flexWrap: "wrap",
  paddingBottom: 200
}

const $suggestionContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: 24
}

const $header: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 36,
  lineHeight: 44,
  color: colors.palette.neutral250,
}

const $suggestion: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 18,
  lineHeight: 21,
  color: colors.palette.neutral250,
  paddingLeft: 12
}

const $scrollContainer: ViewStyle = { 
  flex: 1,
}

const $horizontalScrollContainer: ViewStyle = { 
  width: '100%',
  height: 80,
  marginTop: 10
}

const $searchField: ViewStyle = {
  borderWidth: 1.5,
  borderColor: "transparent",
  borderRadius: 28,
  height: 56,
  backgroundColor: colors.palette.neutral550,
  overflow: "hidden",
}

const $button: ViewStyle = {
  width: '40%',
  height: 46,
  minHeight: 40,
  backgroundColor: 'transparent',
  borderRadius: 28,
  borderWidth: 0,
  marginRight: 24,
  paddingHorizontal: 20
}

const $active: ViewStyle = {
  backgroundColor: colors.palette.neutral550
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 18,
  fontFamily: typography.primary.medium,
  lineHeight: 22,
  textTransform: 'capitalize'
}
