import { StyleFn, useStyles } from "../../utils/useStyles"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { ViewStyle, ScrollView, View } from "react-native"
import { Template } from "./Template"
import { AccordionItem } from "../../components/AccordionItem"
import { Accessory, Icon, TextField } from "../../components"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import { translate, TxKeyPath } from "../../i18n"
import { colors } from "../../theme"
import debounce from "lodash/debounce"

const NUMBER_OF_QUESTIONS = 30

const FAQ_ITEMS: { titleTx: TxKeyPath; contentTx: TxKeyPath }[] = Array.from(
  { length: NUMBER_OF_QUESTIONS },
  (_, idx) => ({
    titleTx: `resources.faq.questions.question${idx + 1}` as TxKeyPath,
    contentTx: `resources.faq.questions.answer${idx + 1}` as TxKeyPath,
  }),
)

export interface FaqScreenRouteProps {}

export function FaqScreen() {
  const { $contentContainer, $searchButton, $searchFieldContainer, $searchField, $xButton } =
    useStyles(styles)
  const bottomInset = useSafeAreaInsetsStyle(["bottom"], "padding")
  const [isSearch, setIsSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isFocus, setIsFocus] = useState(false)
  const [filteredItems, setFilteredItems] = useState([])

  const handleSearchChange = useMemo(
    () =>
      debounce((query: string) => {
        const q = query.trim().toLowerCase()
        if (!q || q.length <= 3) {
          setFilteredItems([])
          return
        }

        const items = FAQ_ITEMS.filter(({ titleTx, contentTx }) => {
          const title = translate(titleTx).toLowerCase()
          const content = translate(contentTx)
            .replace(/<[^>]*>/g, "")
            .toLowerCase()
          return title.includes(q) || content.includes(q)
        })

        setFilteredItems(items)
      }, 300),
    [],
  )

  useEffect(() => {
    handleSearchChange(searchQuery)
  }, [searchQuery])

  const renderQuestions = useCallback(
    () => (
      <ScrollView style={$contentContainer} contentContainerStyle={bottomInset}>
        {FAQ_ITEMS.map(({ titleTx, contentTx }) => (
          <AccordionItem key={`search-${titleTx}`} titleTx={titleTx} contentTx={contentTx} />
        ))}
      </ScrollView>
    ),
    [$contentContainer, bottomInset],
  )

  const renderSearch = useCallback(
    () => (
      <ScrollView style={$contentContainer} contentContainerStyle={bottomInset}>
        {filteredItems.map(({ titleTx, contentTx }) => (
          <AccordionItem key={titleTx} titleTx={titleTx} contentTx={contentTx} open />
        ))}
      </ScrollView>
    ),
    [$contentContainer, bottomInset, filteredItems],
  )

  return (
    <Template
      dismissKeyboardOnPress
      headerTitleTx="resources.faq.title"
      renderHeaderTitle={
        isSearch
          ? () => (
              <View style={$searchFieldContainer}>
                <TextField
                  autoFocus
                  accessible
                  accessibilityLabel="search"
                  accessibilityHint="type to search questions"
                  accessibilityRole="search"
                  value={searchQuery}
                  inputWrapperStyle={$searchField}
                  placeholderTx="resources.faq.searchPlaceholder"
                  onChangeText={setSearchQuery}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  renderLeftAccessory={({ style }) => (
                    <Accessory icon="search" color={colors.palette.neutral450} style={style} />
                  )}
                  renderRightAccessory={({ style }) =>
                    isFocus &&
                    searchQuery && (
                      <Accessory
                        style={style}
                        icon="xCircle"
                        accessibilityHint="clear"
                        onPress={() => setSearchQuery("")}
                      />
                    )
                  }
                />
              </View>
            )
          : null
      }
      renderHeaderIcon={() => (
        <Icon
          icon={isSearch ? "x" : "search"}
          size={24}
          containerStyle={[$searchButton, isSearch && $xButton]}
          accessibilityHint={isSearch ? "cancel" : "search"}
          onPress={() => setIsSearch(!isSearch)}
        />
      )}
    >
      {isSearch ? renderSearch() : renderQuestions()}
    </Template>
  )
}

const styles: StyleFn = ({ scale }) => {
  const $contentContainer: ViewStyle = {
    width: "100%",
    paddingHorizontal: scale(18),
    paddingBottom: scale(24),
  }

  const $searchButton: ViewStyle = {
    width: scale(42),
    height: scale(42),
    borderRadius: scale(24),
    backgroundColor: colors.palette.neutral350,
    alignItems: "center",
    justifyContent: "center",
  }

  const $searchFieldContainer: ViewStyle = {
    flex: 1,
    marginRight: scale(18),
  }

  const $searchField: ViewStyle = {
    borderWidth: scale(1.5),
    borderColor: "transparent",
    borderRadius: scale(28),
    height: scale(56),
    backgroundColor: colors.palette.neutral550,
    overflow: "hidden",
  }

  const $xButton: ViewStyle = {
    ...$searchButton,
    width: scale(56),
    height: scale(56),
    borderRadius: scale(36),
    backgroundColor: colors.palette.neutral550,
  }

  return {
    $contentContainer,
    $searchButton,
    $searchFieldContainer,
    $searchField,
    $xButton,
  }
}
