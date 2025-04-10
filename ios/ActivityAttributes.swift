//
//  ActivityAttributes.swift
//  STSApp
//
//  Created by Олег Скосарєв on 17.05.2023.
//

import Foundation
import ActivityKit

struct NotificationAttributes: ActivityAttributes {
  public typealias NotificationStatus = ContentState

  public struct ContentState: Codable, Hashable {
    var intervalInMinutes: Double
  }

  var title: String
  var subtitle: String
}
