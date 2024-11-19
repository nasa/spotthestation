import React, { memo, useState } from "react"
import { ImageStyle, Linking, StyleProp, Text, TextStyle, View } from "react-native"
import { ChildNode, Element, Text as TextNode } from "domhandler"
import { parseDocument } from "htmlparser2"
import { colors, typography } from "../theme"
import { translate, TxKeyPath } from "../i18n"
import { ElementType } from "domelementtype"
import { AutoImage } from "./AutoImage"
import { StyleFn, useStyles } from "../utils/useStyles"

type RenderHtmlProps = {
  baseStyle: StyleProp<any>
  contentTx: TxKeyPath
}

const BLOCK_ELEMENTS = ["img"]

export const RenderHtml = memo(function RenderHtml({ contentTx, baseStyle }: RenderHtmlProps) {
  const [containerWidth, setContainerWidth] = useState(0)
  const { $image } = useStyles(styles)

  function renderTextNode(textNode: TextNode, index: number, style?: StyleProp<any>) {
    return (
      <Text key={`${textNode.type}-${index}`} style={[baseStyle, style]}>
        {textNode.data}
      </Text>
    )
  }

  function renderElement(element: Element, index: number, style?: StyleProp<any>) {
    if (element.name === "a") {
      const linkStyle = { color: colors.palette.buttonBlue, textDecorationLine: "underline" }

      return (
        <Text
          style={[baseStyle, style]}
          key={`${element.name}-${index}`}
          onPress={() => Linking.openURL(element.attribs.href)}
        >
          {element.children.map((c, i) => renderNode(c, i, linkStyle))}
        </Text>
      )
    }

    if (element.name === "strong") {
      const boldStyle = { fontFamily: typography.primary.bold }

      return (
        <Text
          style={[baseStyle, style]}
          key={`${element.name}-${index}`}
          onPress={() => Linking.openURL(element.attribs.href)}
        >
          {element.children.map((c, i) => renderNode(c, i, boldStyle))}
        </Text>
      )
    }

    if (element.name === "img") {
      return (
        <AutoImage
          key={`${element.name}-${index}`}
          style={$image as ImageStyle}
          maxWidth={containerWidth}
          source={{ uri: element.attribs.src }}
        />
      )
    }

    if (element.name === "br") {
      return <Text key={`${element.name}-${index}`}>{"\n\n"}</Text>
    }

    return null
  }

  function renderNode(node: ChildNode, index: number, style?: StyleProp<any>) {
    switch (node.type) {
      case ElementType.Text:
        return renderTextNode(node, index, style)
      case ElementType.Tag:
        return renderElement(node, index, style)
    }
    return null
  }

  const document = parseDocument(translate(contentTx))
  const nodes = []

  let inlineNodes = []
  let inlineIdx = 0
  document.children.forEach((c, i) => {
    if (c.type === ElementType.Tag && BLOCK_ELEMENTS.includes(c.name)) {
      if (inlineNodes.length > 0) {
        nodes.push(<Text key={`inline-${++inlineIdx}`}>{inlineNodes}</Text>)
        inlineNodes = []
      }
      nodes.push(renderNode(c, i))
    } else {
      inlineNodes.push(renderNode(c, i))
    }
  })

  if (inlineNodes.length > 0) nodes.push(<Text key={`inline-${++inlineIdx}`}>{inlineNodes}</Text>)

  return <View onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}>{nodes}</View>
})

const styles: StyleFn = ({ scale }) => {
  const $image: TextStyle = {
    marginVertical: scale(10),
    backgroundColor: "white",
  }

  return { $image }
}
