import React from "react"
import { ViewStyle, View, Pressable, PressableProps, TextStyle } from "react-native"
import { Icon, Text } from "../../../components"
import { typography } from "../../../theme"
import { colors } from "../../../theme/colors"
import { IconLinkButton } from "../../OnboardingScreen/components/IconLinkButton"

export interface ShareProps {
  /**
   * A function for closing modal.
   */
  onClose?: PressableProps["onPress"]
}

export function Share({ onClose }: ShareProps) {
  
  return (
    <View style={$modalBodyContainer}>
      <Pressable
        style={$close}
        onPress={onClose}
      >
        <Icon icon="x" color={colors.palette.neutral450} />
      </Pressable>
      <View style={$contentContainer}>
        <Text tx="skyView.share.title" style={$title} />
        <Text tx="skyView.share.subtitle" style={$subtitle} />
        <View style={$buttonsContainer}>
          <Pressable onPress={onClose} style={$pressable}>
            <IconLinkButton icon="brandFacebook" buttonStyle={$button} iconColor={colors.palette.neutral250} iconSize={28} />
            <Text text="Facebook" style={$label} />
          </Pressable>
          <Pressable onPress={onClose} style={$pressable}>
            <IconLinkButton icon="brandTwitter" buttonStyle={$button} iconColor={colors.palette.neutral250} iconSize={28} />
            <Text text="Twitter" style={$label} />
          </Pressable>
          <Pressable onPress={onClose} style={$pressable}>
            <IconLinkButton icon="brandInstagram" buttonStyle={$button} iconColor={colors.palette.neutral250} iconSize={28} />
            <Text text="Instagram" style={$label} />
          </Pressable>
          <Pressable onPress={onClose} style={$pressable}>
            <IconLinkButton icon="brandLinkedin" buttonStyle={$button} iconColor={colors.palette.neutral250} iconSize={28} />
            <Text text="Linked In" style={$label} />
          </Pressable>
          <Pressable onPress={onClose} style={$pressable}>
            <IconLinkButton icon="brandWhatsapp" buttonStyle={$button} iconColor={colors.palette.neutral250} iconSize={28} />
            <Text text="Whatsapp" style={$label} />
          </Pressable>
          <Pressable onPress={onClose} style={$pressable}>
            <IconLinkButton icon="mail" buttonStyle={$button} iconColor={colors.palette.neutral250} iconSize={28} />
            <Text text="Mail" style={$label} />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const $modalBodyContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral350,
  borderTopLeftRadius: 18,
  borderTopRightRadius: 18,
}

const $contentContainer: ViewStyle = {
  width: "100%",
  paddingHorizontal: 36,
  paddingBottom: 52
}

const $buttonsContainer: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between"
}

const $close: ViewStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: 18
}

const $title: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 36,
  fontFamily: typography.primary.normal,
  lineHeight: 44,
  paddingBottom: 12,
  marginTop: 36
}

const $subtitle: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: 18,
  fontFamily: typography.primary.normal,
  lineHeight: 22, 
  marginBottom: 36
}

const $label: TextStyle = {
  color: colors.palette.neutral250,
  fontSize: 16,
  fontFamily: typography.primary.normal,
  lineHeight: 19, 
  marginTop: 16
}

const $button: ViewStyle = {
  width: 64,
  height: 64,
  backgroundColor: colors.palette.neutral550,
}

const $pressable: ViewStyle = {
  // flex: 1,
  alignItems: "center",
  marginBottom: 36,
  paddingHorizontal: 10
}
