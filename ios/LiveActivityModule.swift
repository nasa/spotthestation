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
  @objc(startLiveActivity:)
  func startLiveActivity(interval: Double) {
    if #available(iOS 16.1, *) {
      let initialContentState = NotificationAttributes.ContentState(intervalInMinutes: interval)
      let activityAttributes = NotificationAttributes(title: "Spot the ISS now!", subtitle: "ISS is passing above you...")

      do {
          _ = try Activity.request(attributes: activityAttributes, contentState: initialContentState)
          print("Requested a motification Live Activity.")
      } catch (let error) {
          print("Error requesting motification delivery Live Activity \(error.localizedDescription).")
      }
    }

  }

  @objc(updateLiveActivity:)
  func updateLiveActivity(interval: Double) {
    if #available(iOS 16.1, *) {

      let notificationStatus = NotificationAttributes.NotificationStatus(intervalInMinutes: interval)
      let alertConfiguration = AlertConfiguration(title: "Notification Update", body: "Notification update.", sound: .default)

      Task {
          for activity in Activity<NotificationAttributes>.activities {
              await activity.update(using: notificationStatus, alertConfiguration: alertConfiguration)
          }
      }
    }

  }

  @objc
  func endLiveActivity() {
    if #available(iOS 16.1, *) {
      let notificationStatus = NotificationAttributes.NotificationStatus(intervalInMinutes: 0)


      Task {
          for activity in Activity<NotificationAttributes>.activities {
              await activity.end(using:notificationStatus, dismissalPolicy: .default)
          }
      }
    } else {

    }
  }
}
