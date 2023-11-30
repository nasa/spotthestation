import {
  FlatList, Keyboard,
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
import { v4 as uuidv4 } from "uuid"
import { api, PlaceDetails } from "../services/api"
import { StyleFn, useStyles } from "../utils/useStyles"
import { Gesture, GestureDetector } from "react-native-gesture-handler"

interface LocationAutocompleteProps extends Omit<TextFieldProps, "ref"> {
  placeholder?: string
  textInputProps: TextInputProps
  styles: any
  renderRow: (item: { description: string }) => ReactNode
  onPress: (item: PlaceDetails) => void
}

const tap = Gesture.Tap().onEnd(Keyboard.dismiss)

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

  const [results, setResults] = useState<PlaceDetails[]>([])
  const inputRef = useRef<TextInput>()
  const [autocompleteToken, setAutocompleteToken] = useState(uuidv4())

  const handleSearch = useMemo(
    () =>
      debounce((value: string) => {
        if (value.length < 3) {
          setResults([])
          return
        }

        api
          .getPlaces(value, autocompleteToken)
          .then((res) => {
            if (res.kind === "ok") setResults(res.places)
          })
          .catch(console.error)
      }, 400),
    [autocompleteToken],
  )

  const handlePress = useCallback(async (item: PlaceDetails) => {
    let details = item
    if (details.google_place_id) {
      const res = await api.getGoogleLocationDetails(item.google_place_id, autocompleteToken)
      if (res.kind !== "ok") return
      details = res.place
    }

    onPress(details)
    setResults([])
    setAutocompleteToken(uuidv4())
  }, [])

  const renderItem = useCallback(({ item }: { item: PlaceDetails }) => {
    return (
      <TouchableOpacity style={[customStyles.row, $row]} onPress={() => handlePress(item)}>
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
    <GestureDetector gesture={tap}>
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
    </GestureDetector>
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
