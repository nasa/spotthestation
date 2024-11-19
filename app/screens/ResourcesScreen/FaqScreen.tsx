import { StyleFn, useStyles } from "../../utils/useStyles"
import React from "react"
import { ViewStyle, ScrollView } from "react-native"
import { Template } from "./Template"
import { AccordionItem } from "../../components/AccordionItem"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import { TxKeyPath } from "../../i18n"

const NUMBER_OF_QUESTIONS = 30

export interface FaqScreenRouteProps {}

export function FaqScreen() {
  const { $contentContainer } = useStyles(styles)
  const bottomInset = useSafeAreaInsetsStyle(["bottom"], "padding")

  return (
    <Template headerTitleTx="resources.faq.title">
      <ScrollView style={$contentContainer} contentContainerStyle={bottomInset}>
        {Array(NUMBER_OF_QUESTIONS)
          .fill(null)
          .map((_, idx) => (
            <AccordionItem
              key={idx.toString()}
              titleTx={`resources.faq.questions.question${idx + 1}` as TxKeyPath}
              contentTx={`resources.faq.questions.answer${idx + 1}` as TxKeyPath}
            />
          ))}
      </ScrollView>
    </Template>
  )
}

const styles: StyleFn = ({ scale }) => {
  const $contentContainer: ViewStyle = {
    width: "100%",
    paddingHorizontal: scale(18),
    paddingBottom: scale(24),
  }

  return {
    $contentContainer,
  }
}
