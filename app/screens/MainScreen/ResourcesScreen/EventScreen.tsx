import { useNavigation, useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React from "react"
import { ViewStyle, TextStyle, Pressable, View, } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Text } from "../../../components"
import { colors, fontSizes, lineHeights, scale, typography } from "../../../theme"
import { WebView } from 'react-native-webview'


export interface EventScreenRouteProps {
  item: any
}

export const EventScreen = observer(function EventScreen() {
  const navigation = useNavigation()
  const { params: { item } } = useRoute<any>()
  
  const topInset = useSafeAreaInsets().top

  const $headerStyleOverride: TextStyle = {
    paddingTop: topInset,
    backgroundColor: colors.backgroundDark,
    flex: 1,
  }

  return <View style={$headerStyleOverride}>
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
          <WebView source={{ uri: item }} containerStyle={$webViewContainer} />
        </View>
})

const $backButton: ViewStyle = {
  flexDirection: "row",
  alignItems: 'center',
  zIndex: 999,
  backgroundColor: colors.backgroundDark,
  width: "100%",
  paddingBottom: scale(11)
}

const $webViewContainer: ViewStyle = {
  flex: 1
}

const $text: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: fontSizes[18],
  lineHeight: lineHeights[24],
  color: colors.palette.neutral450,
  textAlign: 'left',
  paddingBottom: scale(24)
}

const $backButtonText: TextStyle = {
  ...$text,
  color: colors.palette.neutral250,
  paddingBottom: 0,
  paddingLeft: scale(5)
}
