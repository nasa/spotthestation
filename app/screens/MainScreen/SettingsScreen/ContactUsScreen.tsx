import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import React, { useCallback, useState } from "react"
import {
  ViewStyle,
  TextStyle,
  ScrollView,
  Pressable,
  View,
  Platform,
  ActivityIndicator,
} from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import Modal from "react-native-modal"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import DeviceInfo from "react-native-device-info"
import Snackbar from "react-native-snackbar"
import { Button, Icon, Screen, Text, TextField } from "../../../components"
import { colors, spacing, typography } from "../../../theme"
import { translate } from "../../../i18n"
import { api } from "../../../services/api"
import { normalizeHeight } from "../../../utils/normalizeHeight"
import { StyleFn, useStyles } from "../../../utils/useStyles"

export const ContactUsScreen = observer(function ContactUsScreen() {
  const {
    $headerStyleOverride,
    $container,
    $backButton,
    $modal,
    $scrollContentContainerStyle,
    $scrollContainer,
    $backButtonText,
    $header,
    $dropdown,
    $inputMargin,
    $inputWithoutPadding,
    $disabled,
    $multiline,
    $dropdownContainer,
    $dropdownPlaceholder,
    $dropdownSelected,
    $dropdownText,
    $dropdownRightAccessory,
    $button,
    $buttonText,
    $modalBodyContainer,
    $modalText,
    $nextButton,
    $nextButtonText,
    $loader,
  } = useStyles(styles)

  const navigation = useNavigation()
  const topInset = useSafeAreaInsets().top
  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  const [thanksModal, setThanksModal] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleSend = useCallback(() => {
    setIsSending(true)
    api
      .sendMail(
        `Spot the Station Mobile App: ${title}`,
        `This email includes feedback received on the NASA SpotTheStation Mobile App version ${DeviceInfo.getVersion()}. Please forward this email to the relevant responsible individual, so that an appropriate response is provided.\nFeedback Category: ${title}\nFeedback Comments: ${comments}\n\nBuild Number: ${DeviceInfo.getBuildNumber()}\nOS: ${
          Platform.OS
        } ${
          Platform.OS === "android" ? `sdk ${Platform.Version}` : Platform.Version
        }\nBrand: ${DeviceInfo.getBrand()}\nModel: ${
          Platform.OS === "ios"
            ? `${DeviceInfo.getModel()} (device id: ${DeviceInfo.getDeviceId()})`
            : DeviceInfo.getModel()
        }\n\nThank you.\nSpotTheStation Mobile App`,
      )
      .then((data) => {
        if (typeof data === "string") {
          setThanksModal(true)
        } else {
          Snackbar.show({
            text: data.message,
            duration: Snackbar.LENGTH_LONG,
            action: {
              text: translate("snackBar.ok"),
              textColor: "red",
              onPress: () => {
                Snackbar.dismiss()
              },
            },
          })
        }
        setIsSending(false)
      })
      .catch((e) => {
        Snackbar.show({
          text: e,
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: translate("snackBar.ok"),
            textColor: "red",
            onPress: () => {
              Snackbar.dismiss()
            },
          },
        })

        setIsSending(false)
      })
  }, [title, comments])

  const headerStyle = { ...$headerStyleOverride }
  headerStyle.top = Number(headerStyle.top) + topInset

  return (
    <Screen
      preset="fixed"
      contentContainerStyle={[$container, headerStyle]}
      style={{ backgroundColor: colors.palette.neutral900 }}
      statusBarStyle="light"
    >
      <ScrollView
        accessible
        accessibilityLabel="Contact scrollable us area"
        accessibilityHint="Contact scrollable us area"
        accessibilityRole="scrollbar"
        style={$scrollContainer}
        scrollEnabled
        contentContainerStyle={$scrollContentContainerStyle}
      >
        <Pressable
          accessible
          accessibilityLabel="Back button"
          accessibilityHint="Navigates to the previous screen"
          accessibilityRole="button"
          onPress={() => navigation.goBack()}
          style={$backButton}
        >
          <Icon icon="caretLeft" color={colors.palette.neutral250} size={24} />
          <Text tx="settings.contactUsData.backButton" style={$backButtonText} />
        </Pressable>
        <Text
          accessible
          accessibilityLabel="title"
          accessibilityHint="title"
          accessibilityRole="text"
          tx="settings.contactUsData.title"
          style={$header}
        />
        <Dropdown
          accessibilityLabel="title select"
          style={[$dropdown, $inputMargin]}
          placeholderStyle={[$dropdownText, $dropdownPlaceholder]}
          selectedTextStyle={[$dropdownText, $dropdownSelected]}
          placeholder={translate("settings.contactUsData.titlePlaceholder")}
          data={[
            {
              label: translate("settings.contactUsData.contactUsOptions.reportAnIssue"),
              value: "Report an Issue",
            },
            {
              label: translate("settings.contactUsData.contactUsOptions.improvementIdeas"),
              value: "Improvement Ideas",
            },
            {
              label: translate("settings.contactUsData.contactUsOptions.generalQuestions"),
              value: "General Questions",
            },
            {
              label: translate("settings.contactUsData.contactUsOptions.comments"),
              value: "Comments",
            },
          ]}
          itemContainerStyle={{
            backgroundColor: colors.palette.neutral350,
          }}
          containerStyle={$dropdownContainer}
          itemTextStyle={$dropdownText}
          activeColor={colors.palette.neutral450}
          value={title}
          labelField="label"
          valueField="value"
          onChange={({ value }) => {
            setTitle(value as string)
          }}
          renderRightIcon={() => (
            <Icon
              icon="chevronDown"
              size={28}
              color={colors.palette.neutral450}
              containerStyle={$dropdownRightAccessory}
            />
          )}
        />
        <TextField
          accessible
          accessibilityLabel="comments input"
          accessibilityHint="comments input"
          accessibilityRole="text"
          value={comments}
          multiline
          numberOfLines={20}
          textAlignVertical="top"
          placeholderTx="settings.contactUsData.commentsPlaceholder"
          inputWrapperStyle={[$inputMargin, $multiline]}
          style={[$multiline, $inputWithoutPadding]}
          onChangeText={setComments}
        />
        {!isSending && (
          <Button
            accessible
            accessibilityLabel="send button"
            accessibilityHint="Navigates to the mail app"
            tx="settings.contactUsData.sendButton"
            textStyle={$buttonText}
            style={!title || !comments ? [$button, $disabled] : $button}
            pressedStyle={$button}
            onPress={handleSend}
            disabled={!title || !comments}
          ></Button>
        )}
        {isSending && <ActivityIndicator style={$loader} color={colors.palette.neutral100} />}
      </ScrollView>
      <Modal
        isVisible={thanksModal}
        useNativeDriver
        useNativeDriverForBackdrop
        backdropOpacity={0.5}
        style={$modal}
      >
        <View
          accessible
          accessibilityLabel="coach mark"
          accessibilityHint="coach mark"
          accessibilityRole="text"
          style={$modalBodyContainer}
        >
          <Text tx="thanksModal.body" style={$modalText} />
          <Button
            accessible
            accessibilityLabel="dismiss button"
            accessibilityHint="dismiss coach mark"
            tx="thanksModal.dismiss"
            textStyle={$nextButtonText}
            style={$nextButton}
            pressedStyle={$nextButton}
            onPress={() => {
              setThanksModal(false)
              setComments("")
              setTitle("")
            }}
          />
        </View>
      </Modal>
    </Screen>
  )
})

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $headerStyleOverride: TextStyle = {
    top: scale(24),
  }

  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    height: "100%",
  }

  const $backButton: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: scale(11),
  }

  const $modal: ViewStyle = {
    flex: 1,
    left: 0,
    margin: 0,
    paddingHorizontal: 18,
    justifyContent: "flex-start",
  }

  const $scrollContentContainerStyle: ViewStyle = {
    flexGrow: 1,
    paddingBottom: scale(60),
  }

  const $scrollContainer: ViewStyle = {
    paddingHorizontal: scale(18),
  }

  const $text: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
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

  const $header: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[36],
    lineHeight: lineHeights[44],
    color: colors.palette.neutral250,
  }

  const $dropdown: ViewStyle = {
    borderRadius: scale(28),
    height: scale(56),
    backgroundColor: colors.palette.neutral350,
    overflow: "hidden",
  }

  const $inputMargin: ViewStyle = {
    marginTop: scale(18),
  }

  const $inputWithoutPadding: ViewStyle = {
    paddingTop: 0,
  }

  const $disabled: ViewStyle = {
    opacity: 0.5,
  }

  const $multiline: TextStyle = {
    height: "auto",
    textAlignVertical: "top",
    paddingVertical: scale(10),
  }

  const $dropdownContainer: ViewStyle = {
    backgroundColor: colors.palette.neutral350,
    borderRadius: scale(10),
    marginTop: -scale(40),
    borderWidth: 0,
  }

  const $dropdownPlaceholder: TextStyle = {
    color: colors.palette.neutral450,
  }

  const $dropdownSelected: TextStyle = {
    color: colors.palette.neutral250,
  }

  const $dropdownText: TextStyle = {
    flex: 1,
    // alignSelf: "stretch",
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[18],
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginHorizontal: scale(spacing.small),
    textAlignVertical: "center",
    color: colors.palette.neutral250,
  }

  const $dropdownRightAccessory: ViewStyle = {
    marginEnd: scale(spacing.large),
    height: scale(56),
    justifyContent: "center",
    alignItems: "center",
  }

  const $button: ViewStyle = {
    width: "100%",
    height: scale(64),
    backgroundColor: colors.palette.buttonBlue,
    borderRadius: scale(28),
    borderWidth: 0,
    marginVertical: scale(24),
    alignItems: "center",
  }

  const $loader: ViewStyle = {
    marginVertical: scale(24),
    height: scale(64),
  }

  const $buttonText: TextStyle = {
    color: colors.palette.neutral100,
    fontSize: fontSizes[18],
    fontFamily: typography.primary.medium,
    lineHeight: lineHeights[21],
  }

  const $modalBodyContainer: ViewStyle = {
    backgroundColor: colors.palette.buttonBlue,
    borderRadius: scale(16),
    alignItems: "center",
    paddingVertical: 36,
    paddingHorizontal: 30,
    width: "100%",
    alignSelf: "center",
    marginTop: normalizeHeight(0.28),
  }

  const $modalText: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[24],
    lineHeight: lineHeights[29],
    color: colors.palette.neutral100,
    paddingBottom: 12,
    paddingTop: 18,
  }

  const $nextButton: ViewStyle = {
    height: scale(56),
    backgroundColor: colors.palette.neutral100,
    borderRadius: scale(28),
    borderWidth: 0,
    width: scale(140),
    alignSelf: "center",
    marginTop: 24,
  }

  const $nextButtonText: TextStyle = {
    fontFamily: typography.primary.medium,
    fontSize: fontSizes[18],
    lineHeight: lineHeights[22],
    color: colors.palette.buttonBlue,
  }

  return {
    $headerStyleOverride,
    $container,
    $backButton,
    $modal,
    $scrollContentContainerStyle,
    $scrollContainer,
    $text,
    $backButtonText,
    $header,
    $dropdown,
    $inputMargin,
    $inputWithoutPadding,
    $disabled,
    $multiline,
    $dropdownContainer,
    $dropdownPlaceholder,
    $dropdownSelected,
    $dropdownText,
    $dropdownRightAccessory,
    $button,
    $buttonText,
    $modalBodyContainer,
    $modalText,
    $nextButton,
    $nextButtonText,
    $loader,
  }
}
