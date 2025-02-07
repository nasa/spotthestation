import { Text } from "../../components"
import { StyleFn, useStyles } from "../../utils/useStyles"
import React, { useCallback, useEffect, useState } from "react"
import YoutubePlayer from "react-native-youtube-iframe"
import { ViewStyle, View, TextStyle, Text as RNText, ActivityIndicator } from "react-native"

import { typography } from "../../theme"
import { colors } from "../../theme/colors"
import { Template } from "./Template"
import { api } from "../../services/api"

export interface LiveScreenRouteProps {}

export function LiveScreen() {
  const { $contentContainer, $description, $text, $flex } = useStyles(styles)

  const [videoHeight, setVideoHeight] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [streamId, setStreamId] = useState(null)

  const fetchData = useCallback(() => {
    api
      .getLivestreamId()
      .then((res) => {
        if (!res.ok) return setIsLoading(false)
        setStreamId(res.data.id)
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

  return (
    <Template headerTitleTx="resources.live.title">
      <View style={$contentContainer}>
        <RNText
          accessible
          accessibilityLabel="modal text"
          accessibilityHint="modal text"
          accessibilityRole="text"
          style={$description}
        >
          <Text style={$text} tx="resources.live.description" />
        </RNText>

        <View style={$flex} />

        { isLoading && (
          <ActivityIndicator size="large" />
        )}

        { !isLoading && Boolean(streamId) && (
          <View
            onLayout={(e) => {
              setVideoHeight((e.nativeEvent.layout.width * 9) / 16)
            }}
          >
            {videoHeight > 0 && <YoutubePlayer height={videoHeight} videoId={streamId} />}
          </View>
        )}
      </View>
    </Template>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $contentContainer: ViewStyle = {
    width: "100%",
    paddingHorizontal: scale(18),
    paddingBottom: scale(24),
  }

  const $title: TextStyle = {
    color: colors.palette.neutral250,
    width: "100%",
    fontSize: fontSizes[32],
    fontFamily: typography.primary.normal,
    lineHeight: lineHeights[44],
    paddingBottom: scale(24),
  }

  const $description: TextStyle = {
    paddingBottom: scale(36),
  }

  const $text: TextStyle = {
    color: colors.palette.neutral250,
    fontSize: fontSizes[20],
    lineHeight: lineHeights[28],
  }

  const $flex: ViewStyle = {
    flex: 1,
  }

  return {
    $contentContainer,
    $title,
    $description,
    $text,
    $flex,
  }
}
