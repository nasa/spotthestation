import { Icon, Screen, Text } from "../../components"
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from "react-native"

import { colors, typography } from "../../theme"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { StyleFn, useStyles } from "../../utils/useStyles"
import { TxKeyPath } from "../../i18n"

export interface TemplateProps {
  style?: StyleProp<any>
  dismissKeyboardOnPress?: boolean
  children: React.ReactNode
  hasBackButton?: boolean
  backButtonTx?: TxKeyPath
  onBack?: () => void
  hasHeader?: boolean
  headerTitleTx?: TxKeyPath
  subheaderTitleTx?: TxKeyPath
  headerTitle?: string
  subheaderTitle?: string
  renderHeaderTitle?: () => React.ReactNode
  renderHeaderIcon?: () => React.ReactNode
}

export function Template({
  style,
  children,
  headerTitle,
  subheaderTitle,
  subheaderTitleTx,
  headerTitleTx,
  renderHeaderTitle,
  renderHeaderIcon,
  onBack,
  dismissKeyboardOnPress = false,
  hasHeader = true,
  backButtonTx = "resources.header",
  hasBackButton = true,
}: TemplateProps) {
  const navigation = useNavigation()
  const topInset = useSafeAreaInsets().top

  const { $container, $backButton, $backButtonText, $headerContainer, $header, $subheader, $flex } =
    useStyles(styles)

  const styleOverride: StyleProp<any> = style ? { ...style } : {}
  if (typeof styleOverride.paddingTop === "number") {
    styleOverride.paddingTop = (styleOverride.paddingTop as number) + topInset
  }

  return (
    <Screen
      dismissKeyboardOnPress={dismissKeyboardOnPress}
      style={[
        $container,
        { paddingTop: topInset, backgroundColor: colors.palette.neutral900 },
        styleOverride,
      ]}
      statusBarStyle="light"
      preset="fixed"
      contentContainerStyle={$flex}
    >
      {Boolean(hasBackButton) && (
        <Pressable
          accessible
          accessibilityLabel="Back button"
          accessibilityHint="Navigates to the previous screen"
          accessibilityRole="button"
          onPress={onBack || (() => navigation.goBack())}
          style={$backButton}
        >
          <Icon icon="caretLeft" color={colors.palette.neutral250} size={24} />
          <Text tx={backButtonTx} style={$backButtonText} />
        </Pressable>
      )}

      {Boolean(hasHeader) && (
        <View style={$headerContainer}>
          {renderHeaderTitle ? (
            renderHeaderTitle()
          ) : (
            <View>
              <Text
                accessible
                accessibilityLabel="header"
                accessibilityHint="header"
                accessibilityRole="text"
                tx={headerTitleTx}
                text={headerTitle}
                style={$header}
              />
              {Boolean(subheaderTitle) && (
                <Text
                  accessible
                  accessibilityLabel="subheader"
                  accessibilityHint="subheader"
                  accessibilityRole="text"
                  tx={subheaderTitleTx}
                  text={subheaderTitle}
                  style={$subheader}
                />
              )}
            </View>
          )}

          {Boolean(renderHeaderIcon) && renderHeaderIcon()}
        </View>
      )}
      {children}
    </Screen>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $container: ViewStyle = {
    paddingHorizontal: scale(18),
    backgroundColor: colors.backgroundDark,
    flex: 1,
  }

  const $flex = { flex: 1 }

  const $backButton: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    zIndex: 999,
    backgroundColor: colors.backgroundDark,
    width: "100%",
    paddingBottom: scale(11),
  }

  const $backButtonText: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[24],
    color: colors.palette.neutral250,
    textAlign: "left",
    paddingLeft: scale(5),
  }

  const $bodyContainer: ViewStyle = {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  }

  const $headerContainer: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }

  const $header: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[36],
    lineHeight: lineHeights[44],
    color: colors.palette.neutral250,
    paddingBottom: scale(24),
  }

  const $subheader: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[24],
    color: colors.palette.neutral450,
    textAlign: "left",
    paddingBottom: scale(24),
  }

  return {
    $backButton,
    $backButtonText,
    $container,
    $bodyContainer,
    $header,
    $headerContainer,
    $flex,
    $subheader,
  }
}
