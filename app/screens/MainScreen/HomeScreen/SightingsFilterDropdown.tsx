import { colors, spacing, typography } from "../../../theme"
import { TextStyle, View, ViewStyle } from "react-native"
import { Icon, Text } from "../../../components"
import { Dropdown } from "react-native-element-dropdown"
import React, { ReactNode } from "react"
import { StyleFn, useStyles } from "../../../utils/useStyles"
import { TxKeyPath } from "../../../i18n"

type Option = {
  value: string
  label: ReactNode | string
}

type SightingsFilterDropdownProps = {
  title: TxKeyPath
  options: Option[]
  value?: any
  onChange: (value: Option) => void
}

export function SightingsFilterDropdown({
  title,
  options,
  value,
  onChange,
}: SightingsFilterDropdownProps) {
  const {
    $dropdown,
    $dropdownContainer,
    $dropdownPlaceholder,
    $dropdownSelected,
    $dropdownText,
    $dropdownRightAccessory,
    $title,
    $container,
    $dropdownItemContainer,
  } = useStyles(styles)

  return (
    <View style={$container}>
      <Text
        accessible
        accessibilityLabel="title"
        accessibilityHint={title}
        accessibilityRole="text"
        tx={title}
        style={$title}
      />
      <Dropdown
        accessibilityLabel="select"
        style={$dropdown}
        placeholderStyle={[$dropdownText, $dropdownPlaceholder]}
        selectedTextStyle={[$dropdownText, $dropdownSelected]}
        data={options}
        containerStyle={$dropdownContainer}
        itemTextStyle={$dropdownText}
        activeColor="transparent"
        value={value}
        labelField="label"
        valueField="value"
        onChange={onChange}
        itemAccessibilityLabelField="value"
        itemTestIDField="sss"
        renderItem={(item: Option) => (
          <View style={$dropdownItemContainer}>
            {React.isValidElement(item.label) ? (
              item.label
            ) : (
              <Text style={$dropdownText}>{item.label}</Text>
            )}
          </View>
        )}
        renderRightIcon={() => (
          <Icon
            icon="chevronDown"
            size={28}
            color={colors.palette.neutral450}
            containerStyle={$dropdownRightAccessory}
          />
        )}
      />
    </View>
  )
}

const styles: StyleFn = ({ scale, fontSizes, lineHeights }) => {
  const $dropdown: ViewStyle = {
    borderRadius: scale(28),
    height: scale(56),
    backgroundColor: colors.palette.neutral550,
    overflow: "hidden",
    marginTop: scale(10),
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
    marginHorizontal: scale(spacing.small),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
  }

  const $dropdownText: TextStyle = {
    fontFamily: typography.primary.normal,
    fontSize: fontSizes[18],
    paddingVertical: 0,
    paddingHorizontal: 0,
    color: colors.palette.neutral250,
  }

  const $dropdownRightAccessory: ViewStyle = {
    height: scale(56),
    marginRight: scale(spacing.small),
    justifyContent: "center",
    alignItems: "center",
  }

  const $title: TextStyle = {
    fontFamily: typography.primary?.normal,
    fontSize: fontSizes[13],
    lineHeight: lineHeights[16],
    color: colors.palette.neutral450,
    textTransform: "uppercase",
  }

  const $dropdownItemContainer: ViewStyle = {
    height: scale(56),
    justifyContent: "center",
    marginHorizontal: scale(spacing.small),
  }

  const $container = {
    flex: 1,
    marginHorizontal: scale(5),
  }

  return {
    $dropdown,
    $dropdownContainer,
    $dropdownPlaceholder,
    $dropdownSelected,
    $dropdownText,
    $dropdownItemContainer,
    $dropdownRightAccessory,
    $title,
    $container,
  }
}
