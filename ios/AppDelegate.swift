import UIKit
import Firebase
import React
import React_RCTAppDelegate
import RNBootSplash
import CodePush
import Expo
import ReactAppDependencyProvider
import UserNotifications

@main
class AppDelegate: ExpoAppDelegate, UNUserNotificationCenterDelegate {
  var window: UIWindow?
 
  var reactNativeDelegate: ReactNativeDelegate?
  var reactNativeFactory: RCTReactNativeFactory?

  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {

    // Configure Firebase
    FirebaseApp.configure()

    // Assign Google Maps API key if needed
    let mapsApiKey = RNCConfig.env(for: "GOOGLE_API_TOKEN")

    // Setup notification delegate
    UNUserNotificationCenter.current().delegate = self

    let delegate = ReactNativeDelegate()
    let factory = RCTReactNativeFactory(delegate: delegate)
    delegate.dependencyProvider = RCTAppDependencyProvider()
     
    reactNativeDelegate = delegate
    reactNativeFactory = factory
     
    window = UIWindow(frame: UIScreen.main.bounds)
     
    factory.startReactNative(
      withModuleName: "STSApp",
      in: window,
      launchOptions: launchOptions
    )
    
    return true
  }

  // Handle orientation via react-native-orientation
  override func application(_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask {
    return Orientation.getOrientation()
  }

  // Foreground push notification presentation
  func userNotificationCenter(_ center: UNUserNotificationCenter,
                              willPresent notification: UNNotification,
                              withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
    completionHandler([.alert, .sound, .badge])
  }
}


class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {
  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }
 
  override func bundleURL() -> URL? {
    #if DEBUG
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
    #else
    return CodePush.bundleURL()
    #endif
  }
  
  override func customize(_ rootView: RCTRootView) {
    super.customize(rootView)
    RNBootSplash.initWithStoryboard("BootSplash", rootView: rootView) // ⬅️ initialize the splash screen
  }
}
