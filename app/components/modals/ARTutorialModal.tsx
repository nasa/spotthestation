import { CoachMark } from ".."
import React, { useCallback, useState } from "react"

import { NativeMethods, View, ViewStyle } from "react-native"
import { StyleFn, useStyles } from "../../utils/useStyles"

export interface ARTutorialModalItemLayout {
  x: number
  y: number
  width: number
  height: number
}
export interface ARTutorialModalItemsLayout {
  compass?: ARTutorialModalItemLayout
  circle?: ARTutorialModalItemLayout
  info?: ARTutorialModalItemLayout
  trajectory?: ARTutorialModalItemLayout
  fullScreen?: ARTutorialModalItemLayout
  share?: ARTutorialModalItemLayout
  screenshot?: ARTutorialModalItemLayout
  video?: ARTutorialModalItemLayout
}

export interface ARTutorialModalProps {
  onComplete: () => void
  itemsLayout: ARTutorialModalItemsLayout
}

export const arTutorialTotalStages = 8

export function ARTutorialModal({ onComplete, itemsLayout }: ARTutorialModalProps) {
  const { $container, $mark, $arrow, $left, $right, $scale60, $scale90 } = useStyles(styles)
  const [stage, setStage] = useState(1)
  const [containerLayout, setContainerLayout] = useState<ARTutorialModalItemLayout>()

  const containerPadding = $container.paddingHorizontal as number

  const renderCoachMarks = useCallback(() => {
    if (Object.keys(itemsLayout).length < arTutorialTotalStages || !containerLayout) return null
    switch (stage) {
      case 1:
        return (
          <CoachMark
            title="issView.coachMarks.circleTitle"
            bodyText="issView.coachMarks.circleData"
            style={[
              $mark,
              { marginTop: itemsLayout.circle.y - containerLayout.y + itemsLayout.circle.height },
            ]}
            stage={stage}
            arrowStyle={[
              $arrow,
              {
                top: -($scale60.width as number) + 10,
                left: itemsLayout.circle.x - containerPadding - 20,
                transform: [{ rotate: "45deg" }],
              },
            ]}
            onPressFinish={onComplete}
            onPressNext={() => setStage(stage + 1)}
            totalStages={arTutorialTotalStages}
          />
        )
      case 2:
        return (
          <CoachMark
            title="issView.coachMarks.compassTitle"
            bodyText="issView.coachMarks.compassData"
            style={[
              $mark,
              {
                marginTop:
                  itemsLayout.compass.y -
                  containerLayout.y +
                  itemsLayout.compass.height +
                  ($scale90.width as number),
              },
            ]}
            arrowStyle={[
              $arrow,
              {
                top: -($scale60.width as number),
              },
            ]}
            stage={stage}
            onPressFinish={onComplete}
            onPressNext={() => setStage(stage + 1)}
            totalStages={arTutorialTotalStages}
          />
        )
      case 3:
        return (
          <CoachMark
            title="issView.coachMarks.infoTitle"
            bodyText="issView.coachMarks.infoData"
            style={[
              $mark,
              {
                bottom:
                  containerLayout.height -
                  (itemsLayout.info.y - containerLayout.y) +
                  ($scale60.width as number),
              },
            ]}
            arrowStyle={[$arrow, $left]}
            stage={stage}
            onPressFinish={onComplete}
            onPressNext={() => setStage(stage + 1)}
            totalStages={arTutorialTotalStages}
          />
        )
      case 4:
        return (
          <CoachMark
            title="issView.coachMarks.trajectoryTitle"
            bodyText="issView.coachMarks.trajectoryData"
            style={[
              $mark,
              {
                bottom:
                  containerLayout.height -
                  (itemsLayout.trajectory.y - containerLayout.y) +
                  ($scale60.width as number),
              },
            ]}
            arrowStyle={[$arrow, $left]}
            stage={stage}
            onPressFinish={onComplete}
            onPressNext={() => setStage(stage + 1)}
            totalStages={arTutorialTotalStages}
          />
        )
      case 5:
        return (
          <CoachMark
            title="issView.coachMarks.arTitle"
            bodyText="issView.coachMarks.arData"
            style={[
              $mark,
              {
                bottom:
                  containerLayout.height -
                  (itemsLayout.fullScreen.y - containerLayout.y) +
                  ($scale60.width as number),
              },
            ]}
            arrowStyle={[$arrow, $left]}
            stage={stage}
            onPressFinish={onComplete}
            onPressNext={() => setStage(stage + 1)}
            totalStages={arTutorialTotalStages}
          />
        )
      case 6:
        return (
          <CoachMark
            title="issView.coachMarks.shareTitle"
            bodyText="issView.coachMarks.shareData"
            style={[
              $mark,
              {
                bottom:
                  containerLayout.height -
                  (itemsLayout.share.y - containerLayout.y) +
                  ($scale60.width as number),
              },
            ]}
            arrowStyle={[$arrow, $right]}
            stage={stage}
            onPressFinish={onComplete}
            onPressNext={() => setStage(stage + 1)}
            totalStages={arTutorialTotalStages}
          />
        )
      case 7:
        return (
          <CoachMark
            title="issView.coachMarks.screenshotTitle"
            bodyText="issView.coachMarks.screenshotData"
            style={[
              $mark,
              {
                bottom:
                  containerLayout.height -
                  (itemsLayout.screenshot.y - containerLayout.y) +
                  ($scale60.width as number),
              },
            ]}
            arrowStyle={[$arrow, $right]}
            stage={stage}
            onPressFinish={onComplete}
            onPressNext={() => setStage(stage + 1)}
            totalStages={arTutorialTotalStages}
          />
        )
      case 8:
        return (
          <CoachMark
            title="issView.coachMarks.videoTitle"
            bodyText="issView.coachMarks.videoData"
            style={[
              $mark,
              {
                bottom:
                  containerLayout.height -
                  (itemsLayout.video.y - containerLayout.y) +
                  ($scale60.width as number),
              },
            ]}
            arrowStyle={[$arrow, $right]}
            stage={stage}
            onPressFinish={onComplete}
            onPressNext={() => setStage(stage + 1)}
            totalStages={arTutorialTotalStages}
          />
        )
      default:
        return null
    }
  }, [stage, itemsLayout, containerLayout, $scale60, $scale90])

  return (
    <View
      onLayout={(e) => {
        e.persist()
        setTimeout(() => {
          ;(e.target as unknown as NativeMethods).measureInWindow((x, y, width, height) => {
            setContainerLayout({ width, height, x, y })
          })
        }, 50)
      }}
      style={$container}
    >
      {renderCoachMarks()}
    </View>
  )
}

const styles: StyleFn = ({ scale }) => {
  const $container: ViewStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingHorizontal: 18,
  }

  const $arrow: ViewStyle = {
    position: "absolute",
  }

  const $left = {
    left: 0,
    bottom: scale(-70),
    transform: [{ rotate: "180deg" }],
  }

  const $right = {
    right: 0,
    bottom: scale(-55) - 10,
    transform: [{ rotate: "180deg" }],
  }

  const $mark: ViewStyle = {
    position: "absolute",
    alignSelf: "center",
  }

  const $scale60: ViewStyle = {
    width: scale(55) + 16,
  }

  const $scale90: ViewStyle = {
    width: scale(90),
  }

  return {
    $container,
    $mark,
    $arrow,
    $left,
    $right,
    $scale60,
    $scale90,
  }
}
