//
//  NotificationWidget.swift
//  NotificationWidget
//
//  Created by Олег Скосарєв on 17.05.2023.
//

import WidgetKit
import SwiftUI

struct LockScreenView: View {
  let context: ActivityViewContext<NotificationAttributes>
    var body: some View {
      VStack(alignment: .center) {
        HStack(alignment: .center) {
          LeadingIconView()
          ContentView(context: context)
          TrailingIconView()
        }
        ActionButtontView(context: context)
      }.padding()
        .background(Color.black)
    }
}

struct ContentView: View {
  let context: ActivityViewContext<NotificationAttributes>
    var body: some View {
      VStack(alignment: .center) {
        Text(context.attributes.title)
          .foregroundColor(.white)
          .font(.system(size: 17))
          .bold()
        Text(context.attributes.subtitle)
          .foregroundColor(.init(red: 255/255, green: 255/255, blue: 255/255, opacity: 0.6))
          .font(.system(size: 17))
          .fixedSize(horizontal: false, vertical: true)
          .multilineTextAlignment(.center)
      }
      .frame(maxWidth: .infinity)
    }
}


struct LeadingIconCompactView: View {
  var body: some View {
      HStack(alignment: .center) {
        Image("256")
          .resizable()
          .aspectRatio(contentMode: .fit)
          .frame(width: 20, height: 20)
      }
  }
}

struct TrailingIconCompactView: View {
  var body: some View {
      HStack(alignment: .center) {
          Image(systemName: "location.fill")
      }
      .rotationEffect(.degrees(-90))
  }
}

struct LeadingIconView: View {
  var body: some View {
      HStack(alignment: .center) {
        Image("256")
          .resizable()
          .aspectRatio(contentMode: .fit)
          .frame(width: 60, height: 60)
      }
  }
}

struct TrailingIconView: View {
  var body: some View {
      HStack(alignment: .center) {
          Image(systemName: "location.circle.fill")
            .rotationEffect(.degrees(-90))
      }
  }
}

struct ActionButtontView: View {
  let context: ActivityViewContext<NotificationAttributes>
  
  var body: some View {
    HStack {
      VStack(alignment: .center) {
        Text(context.attributes.timeLeftTitle)
          .foregroundColor(.init(red: 173/255, green: 173/255, blue: 174/255))
          .font(.system(size: 12))
          .bold()
            
        Text(timerInterval: Date.now...Date(timeInterval: context.state.intervalInMinutes, since: .now))
          .foregroundColor(.init(red: 222/255, green: 221/255, blue: 222/255))
          .font(.system(size: 24))
          .multilineTextAlignment(.center)
      }
      .frame(maxWidth: .infinity)
      .padding(10)
    }
    .background(Color(red: 255/255, green: 255/255, blue: 255/255, opacity: 0.2))
    .cornerRadius(16)
    .frame(maxWidth: .infinity)
    .padding(.bottom, 10)
  }
}

struct NotificationWidget: Widget {

    var body: some WidgetConfiguration {
      ActivityConfiguration(for: NotificationAttributes.self) { context in
        // Create the view that appears on the Lock Screen and as a
        // banner on the Home Screen of devices that don't support the
        // Dynamic Island.
        LockScreenView(context: context)
      } dynamicIsland: { context in
        // Create the views that appear in the Dynamic Island.
        DynamicIsland {
          // Create the expanded view.
          DynamicIslandExpandedRegion(.leading) {
            LeadingIconView()
          }

          DynamicIslandExpandedRegion(.trailing) {
            TrailingIconView()
          }

          DynamicIslandExpandedRegion(.center) {
            ContentView(context: context)
          }

          DynamicIslandExpandedRegion(.bottom) {
            ActionButtontView(context: context)
          }
        } compactLeading: {
          // Create the compact leading view.
          LeadingIconCompactView()
        } compactTrailing: {
          // Create the compact trailing view.
          TrailingIconCompactView()
        } minimal: {
          // Create the minimal view.
          LeadingIconCompactView()
        }
        .keylineTint(.yellow)
      }
    }
}

struct NotificationWidget_Previews: PreviewProvider {
    static var previews: some View {
      LeadingIconCompactView()
            .previewContext(WidgetPreviewContext(family: .systemSmall))
    }
}
