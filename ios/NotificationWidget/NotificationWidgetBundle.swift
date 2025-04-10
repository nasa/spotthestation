//
//  NotificationWidgetBundle.swift
//  NotificationWidget
//
//  Created by Олег Скосарєв on 17.05.2023.
//

import WidgetKit
import SwiftUI

@main
struct NotificationWidgetBundle: WidgetBundle {
    var body: some Widget {
        NotificationWidget()
        NotificationWidgetLiveActivity()
    }
}
