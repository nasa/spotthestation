import { CoachMark } from ".."
import React, { useCallback, useState } from "react"

import { normalizeHeight } from "../../utils/normalizeHeight"
import { Platform, ViewStyle } from "react-native"
import { StyleFn, useStyles } from "../../utils/useStyles"

export interface HomeTutorialModalProps {
  onComplete: () => void
}

const totalStages = 5

export function HomeTutorialModal({ onComplete }: HomeTutorialModalProps) {
  const { $location, $sightings, $globe, $map, $navigation, $mark5 } = useStyles(styles)
  const [stage, setStage] = useState(1)

  const renderCoachMarks = useCallback(() => {
    switch (stage) {
      case 1:
        return (
          <CoachMark
            icon="mapPinOutlined"
            title="homeScreen.coachMarks.locationTitle"
            bodyText="homeScreen.coachMarks.locationData"
            style={{ marginTop: normalizeHeight(0.18) }}
            stage={stage}
            onPressFinish={onComplete}
            onPressNext={() => setStage(stage + 1)}
            totalStages={totalStages}
            arrowStyle={$location}
          />
        )
      case 2:
        return (
          <CoachMark
            icon="clock"
            title="homeScreen.coachMarks.sightingsTitle"
            bodyText="homeScreen.coachMarks.sightingsData"
            style={{ marginTop: normalizeHeight(0.28) }}
            stage={stage}
            onPressFinish={onComplete}
            onPressNext={() => setStage(stage + 1)}
            totalStages={totalStages}
            arrowStyle={$sightings}
          />
        )
      case 3:
        return (
          <CoachMark
            icon="globe"
            title="homeScreen.coachMarks.globeTitle"
            bodyText="homeScreen.coachMarks.globeData"
            style={{ marginTop: normalizeHeight(0.43) }}
            stage={stage}
            onPressFinish={onComplete}
            onPressNext={() => setStage(stage + 1)}
            totalStages={totalStages}
            arrowStyle={$globe}
          />
        )
      case 4:
        return (
          <CoachMark
            icon="map"
            title="homeScreen.coachMarks.mapTitle"
            bodyText="homeScreen.coachMarks.mapData"
            style={{
              marginTop: Platform.OS === "ios" ? normalizeHeight(0.15) : normalizeHeight(0.28),
            }}
            stage={stage}
            onPressFinish={onComplete}
            onPressNext={() => setStage(stage + 1)}
            totalStages={totalStages}
            arrowStyle={$map}
          />
        )
      case 5:
        return (
          <CoachMark
            icon="list"
            title="homeScreen.coachMarks.navigationTitle"
            bodyText="homeScreen.coachMarks.navigationData"
            style={$mark5}
            stage={stage}
            onPressFinish={onComplete}
            onPressNext={() => setStage(stage + 1)}
            totalStages={totalStages}
            arrowStyle={$navigation}
          />
        )
      default:
        return null
    }
  }, [stage])

  return renderCoachMarks()
}

const styles: StyleFn = ({ scale }) => {
  const $location: ViewStyle = {
    position: "absolute",
    top: -scale(80),
    right: -scale(5),
  }

  const $sightings: ViewStyle = {
    position: "absolute",
    top: -scale(80),
  }

  const $globe: ViewStyle = {
    position: "absolute",
    top: -normalizeHeight(0.2),
    right: 0,
    transform: [{ rotate: "-130deg" }],
  }

  const $map: ViewStyle = {
    position: "absolute",
    bottom: -scale(80),
    transform: [{ rotate: "180deg" }],
  }

  const $navigation: ViewStyle = {
    position: "absolute",
    bottom: -scale(80),
    transform: [{ rotate: "180deg" }],
  }

  const $mark5: ViewStyle = {
    position: "absolute",
    alignSelf: "center",
    bottom: scale(160),
  }

  return {
    $location,
    $sightings,
    $globe,
    $map,
    $navigation,
    $mark5,
  }
}
