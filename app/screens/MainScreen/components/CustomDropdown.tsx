import React, { useMemo, useState } from 'react'
import { View, TextStyle, ViewStyle } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { Icon, TextField } from '../../../components'
import { colors, typography, spacing } from '../../../theme'
import { useStyles, StyleFn } from '../../../utils/useStyles'
import { translate } from '../../../i18n'

export interface CustomDropdownProps {
  data: { label: string, value: number }[]
  onValueChange: (value: string) => void
  value: number
}

export const CustomDropdown = ({ data, onValueChange, value }: CustomDropdownProps) => {
  const {
    $dropdown,
    $inputMargin,
    $dropdownContainer,
    $dropdownPlaceholder,
    $dropdownSelected,
    $dropdownText,
    $dropdownRightAccessory,
    $input
  } = useStyles(styles)
  const [isCustom, setIsCustom] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const options = useMemo(() => {
    const customOption = { label: `${value} ${translate("units.minute")}`, value }
    const updatedOptions = [...data]

    if (value && !data.some(item => item.value === value)) {
      updatedOptions.push(customOption)
    }

    return [...updatedOptions, { label: translate("settings.notificationSettingsData.customOption"), value: 'custom' }]
  }, [value, data])

  const handleDropdownChange = (value: string) => {
    if (value === 'custom') {
      setIsCustom(true)
    } else {
      onValueChange(value)
      setIsCustom(false)
    }
  }

  const handleInputChange = (value: string) => {
    if (/^\d+$/.test(value)) {
      let valueNumber = parseInt(value, 10)

      if (valueNumber < 1) valueNumber = 1
      else if (valueNumber > 120) valueNumber = 120

      setInputValue(valueNumber.toString())
    } else if (value === '') {
        setInputValue('')
    }
  }

  return (
    <View>
      {isCustom ? (
        <View>
          <TextField
            accessible
            accessibilityLabel="custom period input"
            accessibilityHint="custom period input"
            accessibilityRole="text"
            placeholder={translate("settings.notificationSettingsData.rangeInputPlaceholder")}
            value={inputValue}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleInputChange}
            inputWrapperStyle={$input}
            renderRightAccessory={({ style }) =>
              <>
                <Icon
                  icon="xCircle"
                  size={28}
                  color={colors.palette.neutral450}
                  style={style}
                  onPress={() => {
                    setIsCustom(false)
                    setInputValue('')
                  }}
                />
                {inputValue && (
                  <Icon
                    icon="check"
                    size={28}
                    color={colors.palette.neutral450}
                    style={style}
                    onPress={() => {
                      setIsCustom(false)
                      setInputValue('')
                      onValueChange(inputValue)
                    }}
                  />
                )}
              </>
            }
          />    
        </View>
      ) : (
        <Dropdown
          data={options}
          onChange={({ value }: { value: string }) => handleDropdownChange(value)}
          accessibilityLabel="period select"
          style={[$dropdown, $inputMargin]}
          placeholderStyle={[$dropdownText, $dropdownPlaceholder]}
          selectedTextStyle={[$dropdownText, $dropdownSelected]}
          placeholder={translate("settings.contactUsData.titlePlaceholder")}
          itemContainerStyle={{
            backgroundColor: colors.palette.neutral350,
          }}
          containerStyle={$dropdownContainer}
          itemTextStyle={$dropdownText}
          activeColor={colors.palette.neutral450}
          value={value}
          labelField="label"
          valueField="value"
          renderRightIcon={() => (
            <Icon
              icon="chevronDown"
              size={28}
              color={colors.palette.neutral450}
              containerStyle={$dropdownRightAccessory}
            />
          )}
        />
      )}
    </View>
  )
}

const styles: StyleFn = ({ scale, fontSizes }) => {
  const $dropdown: ViewStyle = {
    borderRadius: scale(28),
    height: scale(56),
    backgroundColor: colors.palette.neutral350,
    overflow: "hidden",
  }

  const $inputMargin: ViewStyle = {
    marginBottom: scale(18),
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

  const $input: ViewStyle = {
    borderWidth: scale(1.5),
    borderColor: "transparent",
    borderRadius: scale(28),
    height: scale(56),
    backgroundColor: colors.palette.neutral350,
    overflow: "hidden",
    marginBottom: scale(18),
  }

  return {
    $dropdown,
    $inputMargin,
    $dropdownContainer,
    $dropdownPlaceholder,
    $dropdownSelected,
    $dropdownText,
    $dropdownRightAccessory,
    $input
  }
}
