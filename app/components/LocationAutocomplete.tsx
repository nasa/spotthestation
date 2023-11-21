import {
  FlatList,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import debounce from "lodash/debounce"
import { TextField, TextFieldProps } from "./TextField"
import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"
import { api, OSMSearchResult } from "../services/api"
import { StyleFn, useStyles } from "../utils/useStyles"

interface LocationAutocompleteProps extends Omit<TextFieldProps, "ref"> {
  placeholder?: string
  textInputProps: TextInputProps
  styles: any
  renderRow: (item: { description: string }) => ReactNode
  onPress: (item: OSMSearchResult) => void
}

export const LocationAutocomplete = forwardRef(function LocationAutocomplete(
  {
    placeholder,
    textInputProps,
    styles: customStyles,
    renderRow,
    onPress,
    renderLeftAccessory,
    renderRightAccessory,
  }: LocationAutocompleteProps,
  ref,
) {
  const { $list, $row, $container } = useStyles(styles)

  const [results, setResults] = useState<OSMSearchResult[]>([])
  const inputRef = useRef<TextInput>()

  const handleSearch = useMemo(
    () =>
      debounce((value: string) => {
        if (value.length < 3) {
          setResults([])
          return
        }

        api
          .getPlaces(value)
          .then((res) => {
            if (res.kind === "ok") setResults(res.places)
          })
          .catch(console.error)
      }, 400),
    [],
  )

  const renderItem = useCallback(({ item }: { item: OSMSearchResult }) => {
    return (
      <TouchableOpacity
        style={[customStyles.row, $row]}
        onPress={() => {
          onPress(item)
          setResults([])
        }}
      >
        {renderRow({ description: item.display_name })}
      </TouchableOpacity>
    )
  }, [])

  useImperativeHandle(ref, () => ({
    clear: () => {
      inputRef.current.clear()
      setResults([])
    },
  }))

  return (
    <View style={$container}>
      <TextField
        ref={inputRef}
        accessible
        accessibilityLabel="search location"
        accessibilityHint="type for search location"
        accessibilityRole="search"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTx="homeScreen.selectLocation.inputPlaceholder"
        style={customStyles.textInput}
        inputWrapperStyle={customStyles.textInputContainer}
        placeholder={placeholder}
        renderLeftAccessory={renderLeftAccessory}
        renderRightAccessory={renderRightAccessory}
        {...textInputProps}
        onChangeText={(val) => {
          handleSearch(val)
          if (textInputProps.onChangeText) textInputProps.onChangeText(val)
        }}
      />
      {results.length > 0 && (
        <FlatList
          data={results}
          renderItem={renderItem}
          keyboardShouldPersistTaps="always"
          style={[$list, customStyles.listView]}
        />
      )}
    </View>
  )
})

const styles: StyleFn = ({ scale }) => {
  const $container = {
    zIndex: 1,
  }

  const $list: ViewStyle = {
    position: "absolute",
    top: "100%",
    width: "100%",
    maxHeight: scale(300),
  }

  const $row: ViewStyle = { padding: 10 }
  return { $list, $row, $container }
}
