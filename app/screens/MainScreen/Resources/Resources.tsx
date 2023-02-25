/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { observer } from "mobx-react-lite"
import React, { useCallback, useEffect, useState } from "react"
import { ScrollView, TextStyle, View, ViewStyle } from "react-native"
import Snackbar from "react-native-snackbar"
import { Screen, Text } from "../../../components"
import { api, ISSSighting, ISSSightingResponse } from "../../../services/api"
import { colors } from "../../../theme"
import { useSafeAreaInsetsStyle } from "../../../utils/useSafeAreaInsetsStyle"


export const Resources = observer(function HomeScreen() {
  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")
  const [sightings, setSightings] = useState<any>([])
 
  const getSightings = useCallback(() => {
    api.getISSSightings({ zone: 'US/Central', lat: 32.766996932, lon: -98.29249883 })
    .then(({ ok, data }: ISSSightingResponse) => {
      if (ok) {
        setSightings(data as ISSSighting[])
      } else {
        Snackbar.show({
          text: data as string,
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: 'Dismiss',
            textColor: 'red',
            onPress: () => {
              Snackbar.dismiss()
            },
          },
        })
      }
      
    })
    .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    getSightings()
  }, [])

  return (
    <Screen preset="fixed" contentContainerStyle={$container} style={[$topInset, {backgroundColor: colors.palette.neutral900}]} statusBarStyle="light">
      <Text style={$title}>Austin TX</Text>
      <ScrollView style={$scrollContainer}>
        {sightings.map(item => (
          // eslint-disable-next-line react/jsx-key
          <View style={$scrollContainer}>
            <Text style={$title}>{`Date: ${item.date}`}</Text>
            <Text style={$title}>{`Visible: ${item.visible}`}</Text>
            <Text style={$title}>{`MaxHeight: ${item.maxHeight}`}</Text>
            <Text style={$title}>{`Appears: ${item.appears}`}</Text>
            <Text style={$title}>{`Disappears: ${item.disappears}`}</Text>
          </View>
        ))}
      </ScrollView>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  justifyContent: "space-between"
}

const $title: TextStyle = {
  color: colors.palette.neutral100,
}

const $scrollContainer: ViewStyle = { 
  padding: 10,
}
