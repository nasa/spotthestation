/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useNavigation, useRoute } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React from "react"
import { ViewStyle, TextStyle, ScrollView, Pressable, View, Image, ImageStyle } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Screen, Text } from "../../../components"
import { colors, typography } from "../../../theme"
import { Tag } from "../components/Tag"
import { WebView } from 'react-native-webview'


export interface EventScreenRouteProps {
  item: any
}

export const EventScreen = observer(function EventScreen() {
  const navigation = useNavigation()
  const { params: { item } } = useRoute()
  
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
            <Icon icon="caretLeft" color={colors.palette.neutral250} />
            <Text tx="resources.header" style={$backButtonText} />
          </Pressable>
          <WebView source={{ uri: item }} containerStyle={{ flex: 1 }} />
        </View>
  //   <Pressable
  //     accessible
  //     accessibilityLabel="Back button"
  //     accessibilityHint="Navigates to the previous screen"
  //     accessibilityRole="button"
  //     onPress={() => navigation.goBack()} 
  //     style={$backButton}
  //   >
  //     <Icon icon="caretLeft" color={colors.palette.neutral250} />
  //     <Text tx="resources.header" style={$backButtonText} />
  //   </Pressable>
  // </WebView>
  // (
  //   <Screen
  //     preset="fixed" 
  //     contentContainerStyle={[$container, $headerStyleOverride]} 
  //     style={{backgroundColor: colors.palette.neutral900}} 
  //     statusBarStyle="light"
  //   >
  //     <Pressable 
  //       accessible
  //       accessibilityLabel="Back button"
  //       accessibilityHint="Navigates to the previous screen"
  //       accessibilityRole="button"
  //       onPress={() => navigation.goBack()} 
  //       style={$backButton}
  //     >
  //       <Icon icon="caretLeft" color={colors.palette.neutral250} />
  //       <Text tx="resources.header" style={$backButtonText} />
  //     </Pressable>
  //     <Text><WebView source={{ uri: 'https://reactnative.dev/' }} /></Text>
  //     <ScrollView 
  //       accessible
  //       accessibilityLabel="event scrollable us area"
  //       accessibilityHint="event scrollable us area"
  //       accessibilityRole="scrollbar"
  //       style={$scrollContainer}
  //     >
  //       <View>
  //         <Pressable 
  //           accessible
  //           accessibilityLabel="Back button"
  //           accessibilityHint="Navigates to the previous screen"
  //           accessibilityRole="button"
  //           onPress={() => navigation.goBack()} 
  //           style={$backButton}
  //         >
  //           <Icon icon="caretLeft" color={colors.palette.neutral250} />
  //           <Text tx="resources.header" style={$backButtonText} />
  //         </Pressable>
  //         <Text
  //           accessible
  //           accessibilityLabel="title"
  //           accessibilityHint="title"
  //           accessibilityRole="text"
  //           text={item?.title} 
  //           style={$title}
  //         />
  //         <View
  //           accessible
  //           accessibilityLabel="tags"
  //           accessibilityHint="tags"
  //           accessibilityRole="text"
  //           style={$tagsContainer}
  //         >
  //           {item?.tags?.map(tag => <Tag key={tag} title={tag} />)}
  //         </View>
  //         <Image 
  //           accessible
  //           accessibilityLabel="image"
  //           accessibilityHint="image"
  //           accessibilityRole="image"
  //           source={{ uri: item?.image }} 
  //           style={$imageContainer} 
  //           resizeMode="cover"
  //         />
  //         <Text 
  //           accessible
  //           accessibilityLabel="Details title"
  //           accessibilityHint="Details title"
  //           accessibilityRole="text"
  //           text={`${item?.type} Details`} 
  //           style={$subtitle}
  //         />
  //         <View style={$detailsContainer}>
  //           {item?.details?.map(({ key, value}) => (
  //             <View 
  //               accessible
  //               accessibilityLabel={key}
  //               accessibilityHint={key}
  //               accessibilityRole="text"
  //               key={key} 
  //               style={$detailsRow}
  //             >
  //               <Text text={key} style={$detailKey} />
  //               <Text text={value} style={$detailValue} />
  //             </View>
  //           ))}
  //         </View>
  //         <View
  //           accessible
  //           accessibilityLabel="body"
  //           accessibilityHint="Event body text"
  //           accessibilityRole="text"
  //         >
  //           <Text text={item?.subtitle} style={$subtitle}/>
  //           <Text text={item?.body} style={$text} />
  //         </View>
  //       </View>
  //     </ScrollView>
  //   </Screen>
  // )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.backgroundDark,
  height: '100%'
}

const $detailsContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  width: '100%',
  borderRadius: 10,
  marginBottom: 36,
  padding: 24
}

const $backButton: ViewStyle = {
  flexDirection: "row",
  alignItems: 'center',
  zIndex: 999,
  backgroundColor: colors.backgroundDark,
  width: "100%",
  paddingBottom: 11
}

const $detailsRow: ViewStyle = {
  flexDirection: "row",
  justifyContent: 'space-between',
  paddingBottom: 16
}

const $scrollContainer: ViewStyle = { 
  paddingHorizontal: 18,
  flex: 1
}

const $title: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 36,
  lineHeight: 44,
  color: colors.palette.neutral250,
  textAlign: 'left',
  paddingBottom: 12,
  textTransform: 'capitalize'
}

const $subtitle: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 24,
  lineHeight: 29,
  color: colors.palette.neutral250,
  textAlign: 'left',
  paddingBottom: 16,
  textTransform: 'capitalize'
}

const $text: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 18,
  lineHeight: 24,
  color: colors.palette.neutral450,
  textAlign: 'left',
  paddingBottom: 24
}

const $detailValue: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 18,
  lineHeight: 21,
  color: colors.palette.neutral100,
  textAlign: 'right',
  width: '40%'
}

const $detailKey: TextStyle = {
  fontFamily: typography.primary?.normal,
  fontSize: 18,
  lineHeight: 21,
  color: colors.palette.neutral450,
  textAlign: 'left',
}

const $backButtonText: TextStyle = {
  ...$text,
  color: colors.palette.neutral250,
  paddingBottom: 0,
  paddingLeft: 5
}

const $tagsContainer: ViewStyle = {
  flexDirection: 'row',
  paddingBottom: 24
}

const $imageContainer: ImageStyle = {
  width: "100%",
  aspectRatio: 1,
  borderRadius: 12,
  marginBottom: 12
}
