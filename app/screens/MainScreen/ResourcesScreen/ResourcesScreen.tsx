/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useNavigation, useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useState } from "react"
import { FlatList, ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { XMLParser } from 'fast-xml-parser'
import { Accessory, Button, Icon, Screen, Text, TextField } from "../../../components"
import { api } from "../../../services/api"
import { colors, typography } from "../../../theme"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { ExpandContainer } from "../components/ExpandContainer"
import { FeedItem } from "../components/FeedItem"
import { FeedSearchResultItem } from "../components/FeedSearchResultItem"

const items = [{
  tags: ['launch', 'live'],
  title: "title",
  subtitle: "subtitle",
  date: "2023-03-08T11:47:42.000000",
  image: "https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg",
  type: "event",
  body: `Pretium venenatis elementum faucibus lectus eu adipiscing commodo est et. Scelerisque pellentesque placerat fermentum eget id adipiscing mauris id. Pretium gravida rhoncus vel cursus non odio tortor ut accumsan. Scelerisque duis eleifend laoreet donec risus in suspendisse eu tincidunt.
  Consequat tellus nunc eu in dui. Nibh quis dolor sit rhoncus massa viverra faucibus arcu. Libero varius et ultrices ut ac. Scelerisque nunc tempor volutpat eleifend tellus risus sit. Massa mauris elementum sagittis mattis. Metus pretium morbi leo nullam mattis mauris scelerisque feugiat sit. Tortor facilisi vel egestas volutpat molestie. Sed pretium tempus vulputate ut mattis sit ultrices lacinia. Ultrices nullam amet quis eget vel aliquet ut.`,
  details: [{
    key: 'Launch Date & Time',
    value: '2023-03-08T11:47:42.000000',
  }, {
    key: 'Duration',
    value: '30 min',
  }]
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
  const [searchQuery, setSearchQuery] = useState('')
  const [type, setType] = useState('about')
  const [news, setNews] = useState([])

  useEffect(() => {
    api.getFeed().then(res => {
      const parser = new XMLParser()
      const jObj = parser.parse(res.places)
      setNews(jObj.rss.channel.item)
      
    }).catch(e => console.log(e))
  }, [])

  const renderSearch = useCallback(() => {
    if (searchQuery) {
      return <ExpandContainer title="resources.searchResults" itemsCount={items.length} expandble={false}>
        {items.map(item => (
          <FeedSearchResultItem
            key={item.title}
            onPress={() => navigation.navigate('ResourcesScreens' as never, { screen: 'Events', item } as never)} 
            tags={item.tags}
            title={item.title}
            type={item.type}
            image={item.image}
          />
        ))}
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
            <ExpandContainer title="resources.recentSearches" expandble={false}>
              {items.map(item => (
                <FeedSearchResultItem
                  key={item.title}
                  onPress={() => navigation.navigate('ResourcesScreens' as never, { screen: 'Events', item } as never)} 
                  tags={item.tags}
                  title={item.title}
                  type={item.type}
                  image={item.image}
                />
              ))}
            </ExpandContainer>
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
  }, [searchQuery])

  const renderBody = useCallback(() => {
    if (isSearch) {
      route.toggleBottomTabs(false)
      return renderSearch()
    } else {
      route.toggleBottomTabs(true)
      return (
        <ScrollView 
          accessible
          accessibilityLabel="feed"
          accessibilityHint="feed"
          accessibilityRole="scrollbar"
          style={$scrollContainer}
        >
          <View style={[$scrollContainer, $bodyContainer]}>
            {news.map(item => (<FeedItem
                key={item.title}
                onPress={() => navigation.navigate('ResourcesScreens' as never, { screen: 'Events', item: item.guid } as never)} 
                // tags={item.tags} 
                title={item.title}
                date={(new Date(item.pubDate)).toISOString()}
                image={/<img.*?src="([^"]*)"/.exec(item["content:encoded"])[1]}
              />))}
          </View>
        </ScrollView>
        // <FlatList 
        //   data={news} 
        //   renderItem={({item}) => <FeedItem
        //             key={item.title}
        //             onPress={() => navigation.navigate('ResourcesScreens' as never, { screen: 'Events', item: item.guid } as never)} 
        //             // tags={item.tags} 
        //             title={item.title}
        //             date={(new Date(item.pubDate)).toISOString()}
        //             image={/<img.*?src="([^"]*)"/.exec(item["content:encoded"])[1]}
        //           />}
        //   contentContainerStyle={$bodyContainer}
        // />
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
      {renderBody()}
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
  flexWrap: "wrap"
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
  height: 60
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
  height: 48,
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
