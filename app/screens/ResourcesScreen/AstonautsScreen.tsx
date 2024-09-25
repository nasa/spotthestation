import { FeedItem } from "../../components"
import { useNavigation } from "@react-navigation/native"
import React, { useCallback, useEffect, useState } from "react"
import { ViewStyle, View, FlatList, ActivityIndicator } from "react-native"
import { StyleFn, useStyles } from "../../utils/useStyles"

import { api } from "../../services/api"
import { Template } from "./Template"
import { translate } from "../../i18n"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"

export interface AstronautsScreenRouteProps {}

export const AstronautsScreen = function Astonauts() {
  const navigation = useNavigation()
  const bottomInset = useSafeAreaInsetsStyle(["bottom"], "padding")

  const { $justifyCenter, $footer } = useStyles(styles)

  const [isLoading, setIsLoading] = useState(false)
  const [astronauts, setAstronauts] = useState([])

  const link = (item: any) => {
    navigation.navigate("ResourcesScreens" as never, { screen: "Web", url: item.link } as never)
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
      headerTitleTx="resources.astronauts.title"
      subheaderTitle={
        isLoading ? null : `${translate("resources.astronauts.number")} ${astronauts.length}`
      }
    >
      <FlatList
        data={astronauts}
        contentContainerStyle={bottomInset}
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
        ListFooterComponent={renderFooter}
      />
    </Template>
  )
}

const styles: StyleFn = ({ scale }) => {
  const $justifyCenter: ViewStyle = { justifyContent: "space-between" }

  const $footer: ViewStyle = { paddingVertical: scale(20) }

  return {
    $justifyCenter,
    $footer,
  }
}
