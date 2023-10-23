import { StyleFn, useStyles } from "../../utils/useStyles"
import React, { ErrorInfo } from "react"
import { ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text } from "../../components"
import { colors, spacing } from "../../theme"

export interface ErrorDetailsProps {
  error: Error
  errorInfo: ErrorInfo
  onReset(): void
}

export function ErrorDetails({ onReset, error, errorInfo }: ErrorDetailsProps) {
  const {
    $contentContainer,
    $topSection,
    $heading,
    $errorSection,
    $errorSectionContentContainer,
    $errorContent,
    $errorBacktrace,
    $resetButton,
  } = useStyles(styles)

  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={$contentContainer}
    >
      <View style={$topSection}>
        <Icon icon="ladybug" size={64} />
        <Text style={$heading} preset="subheading" tx="errorScreen.title" />
        <Text tx="errorScreen.friendlySubtitle" />
      </View>

      <ScrollView style={$errorSection} contentContainerStyle={$errorSectionContentContainer}>
        <Text style={$errorContent} weight="bold" text={`${String(error)}`.trim()} />
        <Text selectable style={$errorBacktrace} text={`${errorInfo.componentStack}`.trim()} />
      </ScrollView>

      <Button preset="reversed" style={$resetButton} onPress={onReset} tx="errorScreen.reset" />
    </Screen>
  )
}

const styles: StyleFn = ({ scale }) => {
  const $contentContainer: ViewStyle = {
    alignItems: "center",
    paddingHorizontal: scale(spacing.large),
    paddingTop: spacing.extraLarge,
    flex: 1,
  }

  const $topSection: ViewStyle = {
    flex: 1,
    alignItems: "center",
  }

  const $heading: TextStyle = {
    color: colors.error,
    marginBottom: scale(spacing.medium),
  }

  const $errorSection: ViewStyle = {
    flex: 2,
    backgroundColor: colors.separator,
    marginVertical: scale(spacing.medium),
    borderRadius: scale(6),
  }

  const $errorSectionContentContainer: ViewStyle = {
    padding: scale(spacing.medium),
  }

  const $errorContent: TextStyle = {
    color: colors.error,
  }

  const $errorBacktrace: TextStyle = {
    marginTop: scale(spacing.medium),
    color: colors.textDim,
  }

  const $resetButton: ViewStyle = {
    backgroundColor: colors.error,
    paddingHorizontal: scale(spacing.huge),
  }

  return {
    $contentContainer,
    $topSection,
    $heading,
    $errorSection,
    $errorSectionContentContainer,
    $errorContent,
    $errorBacktrace,
    $resetButton,
  }
}
