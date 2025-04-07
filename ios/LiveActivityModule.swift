//
//  LiveActivityModule.swift
//  STSApp
//
//  Created by Олег Скосарєв on 17.05.2023.
//

import Foundation
import UIKit
import AVFoundation
import ActivityKit

@objc(LiveActivityModule)
class LiveActivityModule: NSObject {
  @objc(startLiveActivity:interval:)
  func startLiveActivity(_ location: String, interval: Double) {
    if #available(iOS 16.2, *) {
      let initialContentState = NotificationAttributes.ContentState(intervalInMinutes: interval)
      let activityAttributes = NotificationAttributes(
        title: "Spot the ISS now!",
        subtitle: "ISS is passing above you in \(location)"
      )

      do {
          _ = try Activity.request(
            attributes: activityAttributes,
            content: .init(state: initialContentState, staleDate: nil)
          )
          print("Requested a motification Live Activity.")
      } catch (let error) {
          print("Error requesting motification delivery Live Activity \(error.localizedDescription).")
      }
    }

  }

  @objc(updateLiveActivity:)
  func updateLiveActivity(interval: Double) {
    if #available(iOS 16.2, *) {

      let notificationStatus = NotificationAttributes.NotificationStatus(intervalInMinutes: interval)
      let alertConfiguration = AlertConfiguration(title: "Notification Update", body: "Notification update.", sound: .default)

      Task {
          for activity in Activity<NotificationAttributes>.activities {
              await activity.update(using: notificationStatus, alertConfiguration: alertConfiguration)
          }
      }
    }

  }

  @objc(endLiveActivity:rejecter:)
  func endLiveActivity(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject:RCTPromiseRejectBlock) {
    if #available(iOS 16.2, *) {
      let state = NotificationAttributes.ContentState(intervalInMinutes: 0)
      let notificationStatus = NotificationAttributes.NotificationStatus(intervalInMinutes: 0)


      Task {
          for activity in Activity<NotificationAttributes>.activities {
            let content = ActivityContent(state: state, staleDate: .now)
            await activity.end(content, dismissalPolicy: .immediate)
          }

          resolve(true)
      }
    } else {

    }
  }
}
