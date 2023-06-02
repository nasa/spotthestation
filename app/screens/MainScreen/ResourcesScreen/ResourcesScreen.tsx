/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useNavigation, useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { ActivityIndicator, FlatList, Pressable, ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { XMLParser } from 'fast-xml-parser'
import { Accessory, Button, Icon, Screen, Text, TextField } from "../../../components"
import { api } from "../../../services/api"
import { colors, fontSizes, lineHeights, scale, typography } from "../../../theme"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"
import { ExpandContainer } from "../components/ExpandContainer"
import { FeedItem } from "../components/FeedItem"
import { FeedSearchResultItem } from "../components/FeedSearchResultItem"
import { useStores } from "../../../models"
import { autorun } from "mobx"
import { LocationType } from "../../OnboardingScreen/SignupLocation"
import { Details } from "../SkyViewScreen/Details"

const items = [
  {
    tags: [],
    title: "ISS Overview",
    image: "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/iss_05-12-23b.jpg?itok=JEHUinxe",
    type: "event",
    link: 'https://www.nasa.gov/mission_pages/station/overview/index.html'
  },
  {
    tags: ['history'],
    title: "International Space Station Facts and Figures",
    date: "2023-01-04T00:00:00.000000",
    image: "https://www.nasa.gov/sites/default/files/thumbnails/image/iss-blowout_updated_view-web-version-010323.png",
    type: "event",
    link: 'https://www.nasa.gov/feature/facts-and-figures'
  },
  {
    tags: ['history'],
    title: "ISS Crews and Expeditions",
    date: "2023-01-04T00:00:00.000000",
    image: "https://www.nasa.gov/sites/default/files/thumbnails/image/jsc2021e064218_alt.jpg",
    type: "event",
    link: 'https://www.nasa.gov/mission_pages/station/expeditions/index.html'
  }
]

const suggestions = ['NASA Upcoming Missons', 'Interviews of the Week', 'ARTEMIS II']

export interface ResourcesScreenRouteProps {
  toggleBottomTabs: (value: boolean) => void
}

export const Resources = observer(function HomeScreen() {
  const navigation = useNavigation()
  const route: ResourcesScreenRouteProps = useRoute().params as ResourcesScreenRouteProps
  const { currentLocation, selectedLocation, issData, getISSData } = useStores()
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")
  const [isSearch, setIsSearch] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [type, setType] = useState('news')
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)
  const [isFocus, setIsFocus] = useState(false)
  const [location, setLocation] = useState<[number, number]>(null)

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

  const [issMarkerIndex, setIssMarkerIndex] = useState(0)
  const updateTimer = useRef<NodeJS.Timer>()

  function updateIssPath() {
    let currentPositionIdx = 0

    if (issData.length === 0) {
      clearTimeout(updateTimer.current)
      return
    }

    issData.forEach((point, idx) => {
      if (Math.abs(new Date(point.date).valueOf() - new Date().valueOf()) < Math.abs(new Date(issData[currentPositionIdx].date).valueOf() - new Date().valueOf())) {
        currentPositionIdx = idx
      }
    })

    setIssMarkerIndex(currentPositionIdx)

    clearTimeout(updateTimer.current)
    updateTimer.current = setTimeout(updateIssPath, 30000)
  }

  useEffect(() => {
    autorun(() => updateIssPath())
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
    getLocation(selectedLocation, currentLocation)
  }, [currentLocation, selectedLocation])

  useEffect(() => {
    if (!location) return
    getData().catch(e => console.log(e))
  }, [location])

  const renderFooter = useCallback(() => {
    if (isLoading) {
      return (
        <View style={{ paddingVertical: scale(20) }}>
          <ActivityIndicator size="large" />
        </View>
      )
    } else {
      return null
    }
  }, [isLoading])

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
                      image={item.image}
                    />)}
        </View>
      </ScrollView>
    )
  }

  const renderSearch = useCallback(() => {
    if (searchQuery) {
      const searchRes = [...news].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
      return <ExpandContainer title="resources.searchResults" itemsCount={searchRes.length} expandble={false}>
        <FlatList 
          data={searchRes}
          renderItem={({item}) => <FeedSearchResultItem
            key={item.title}
            onPress={() => navigation.navigate('ResourcesScreens' as never, { screen: 'Events', item: item.guid } as never)}
            title={item.title}
            type={item.type}
            image={/<img.*?src="([^"]*)"/.exec(item["content:encoded"]) ? /<img.*?src="([^"]*)"/.exec(item["content:encoded"])[1] : ''}
          />}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ paddingBottom: scale(200) }}
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
  }, [isSearch, renderSearch, renderFooter, news])

  const renderDetails = useCallback(() => {
      return <ScrollView 
                accessible
                accessibilityLabel="recent results"
                accessibilityHint="recent results"
                accessibilityRole="scrollbar"
                style={$scrollContainer}
              >
                <Pressable>
                  <Details 
                    issData={issData[issMarkerIndex] || { date: new Date().toDateString(), latitude: 0, longitude: 0, azimuth: 0, elevation: 0, altitude: 0 } } 
                    observer={location} 
                  />
                </Pressable>
              </ScrollView>
  }, [issData, issMarkerIndex, location])

  const renderTab = (type: string) => {
    switch (type) {
      case 'about': return renderStatic()
      case 'news': return renderBody()
      case 'details': return renderDetails()
      default: return renderStatic()
    }
  }

  return (
    <Screen preset="fixed" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      <View style={$headerContainer}>
        {isSearch ? (<View style={{ flex: 1, marginRight: scale(18) }}>
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
              <Accessory 
                icon="search"
                color={colors.palette.neutral450}
                style={style}
              />
            )}
            renderRightAccessory={({ style }) => isFocus && searchQuery && (
              <Accessory 
                style={style}
                icon={"xCircle"}
                onPress={() => setSearchQuery("")}
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
          {['news', 'about', 'details'].map(item => <Button
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
      {renderTab(type)}
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  paddingHorizontal: scale(18)
}

const $headerContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const $searchButton: ViewStyle = {
  width: scale(42), 
  height: scale(42), 
  borderRadius: scale(24),
  backgroundColor: colors.palette.neutral350,
  alignItems: 'center',
  justifyContent: 'center'
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
  flexDirection: 'row',
  flexWrap: "wrap",
  paddingBottom: scale(200)
}

const $suggestionContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: scale(24)
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
  paddingLeft: scale(12)
}

const $scrollContainer: ViewStyle = { 
  flex: 1,
}

const $horizontalScrollContainer: ViewStyle = { 
  // width: '100%',
  height: scale(80),
  marginTop: scale(10)
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
  width: 'auto',
  height: scale(46),
  minHeight: scale(40),
  backgroundColor: 'transparent',
  borderRadius: scale(28),
  borderWidth: 0,
  marginRight: scale(24),
  paddingHorizontal: scale(20)
}

const $active: ViewStyle = {
  backgroundColor: colors.palette.neutral550
}

const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: fontSizes[18],
  fontFamily: typography.primary.medium,
  lineHeight: lineHeights[22],
  textTransform: 'capitalize',
  textAlignVertical: 'center'
}
