import { useNavigation } from "@react-navigation/native"
import React, { useCallback, useEffect, useState } from "react"
import { ViewStyle, TextStyle, Pressable, View, FlatList, ActivityIndicator } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Text } from "../../../components"
import { colors, typography } from "../../../theme"
import { StyleFn, useStyles } from "../../../utils/useStyles"
import { FeedItem } from "../components/FeedItem"
import { api } from "../../../services/api"

export interface AstronautsScreenRouteProps {}

export const AstronautsScreen = function Astonauts() {
  const navigation = useNavigation()

  const {
    $container,
    $headerStyleOverride,
    $backButton,
    $justifyCenter,
    $backButtonText,
    $text,
    $footer,
    $title,
  } = useStyles(styles)

  const topInset = useSafeAreaInsets().top
  const [isLoading, setIsLoading] = useState(false)
  const [astronauts, setAstronauts] = useState([])

  const link = (item: any) => {
    navigation.navigate("ResourcesScreens" as never, { screen: "Event", item: item.link } as never)
  }

  const fetchData = useCallback(() => {
    if (isLoading) return
    setIsLoading(true)
    api
      .getAstronauts()
      .then((res) => {
        if (!res.ok) return setIsLoading(false)
        setAstronauts(res.data)
        setIsLoading(false)
      })
      .catch((e) => {
        setIsLoading(false)
        console.log(e)
      })
  }, [isLoading])

  useEffect(() => {
    fetchData()
  }, [])

  const renderHeader = useCallback(() => {
    return (
      <>
        <Text
          accessible
          accessibilityLabel="modal title"
          accessibilityHint="modal title"
          accessibilityRole="text"
          text="Who is in The Station Now?"
          style={$title}
        />
        {!isLoading && (
          <Text
            accessible
            accessibilityLabel="modal title"
            accessibilityHint="modal title"
            accessibilityRole="text"
            text={`Number of people: ${astronauts.length}`}
            style={$text}
          />
        )}
      </>
    )
  }, [astronauts, isLoading])

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
    <View style={[$container, $headerStyleOverride, { paddingTop: topInset }]}>
      <Pressable
        accessible
        accessibilityLabel="Back button"
        accessibilityHint="Navigates to the previous screen"
        accessibilityRole="button"
        onPress={() => navigation.goBack()}
        style={$backButton}
      >
        <Icon icon="caretLeft" color={colors.palette.neutral250} size={24} />
        <Text tx="resources.header" style={$backButtonText} />
      </Pressable>

      <FlatList
        data={astronauts}
        renderItem={({ item }) => (
          <FeedItem
            key={item.name}
            onPress={() => link(item)}
            title={item.name}
            subtitle={item.title}
            image={item.image}
          />
        )}
        numColumns={2}
        columnWrapperStyle={$justifyCenter}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </View>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $container: ViewStyle = {
    paddingHorizontal: scale(18),
  }

  const $headerStyleOverride: TextStyle = {
    backgroundColor: colors.backgroundDark,
    flex: 1,
  }

  const $backButton: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    zIndex: 999,
    backgroundColor: colors.backgroundDark,
    width: "100%",
    paddingBottom: scale(11),
  }

  const $title: TextStyle = {
    color: colors.palette.neutral250,
    width: "100%",
    fontSize: fontSizes[32],
    fontFamily: typography.primary.normal,
    lineHeight: lineHeights[44],
    paddingTop: scale(24),
    paddingBottom: scale(10),
  }

  const $text: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[24],
    color: colors.palette.neutral450,
    textAlign: "left",
    paddingBottom: scale(24),
  }

  const $backButtonText: TextStyle = {
    ...$text,
    color: colors.palette.neutral250,
    paddingBottom: 0,
    paddingLeft: scale(5),
  }

  const $justifyCenter: ViewStyle = { justifyContent: "space-between" }

  const $footer: ViewStyle = { paddingVertical: scale(20) }

  return {
    $headerStyleOverride,
    $backButton,
    $title,
    $text,
    $backButtonText,
    $justifyCenter,
    $footer,
    $container,
  }
}
