package gov.nasa.hq.spotthestation

import android.os.Bundle
import android.content.Intent
import android.content.res.Configuration

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.zoontek.rnbootsplash.RNBootSplash

class MainActivity : ReactActivity() {
    companion object {
        var currentLocale: String? = null
    }

    override fun onConfigurationChanged(newConfig: Configuration) {
        super.onConfigurationChanged(newConfig)
        val intent = Intent("onConfigurationChanged")
        intent.putExtra("newConfig", newConfig)
        sendBroadcast(intent)

        val locale = newConfig.locale.toString()
        if (MainActivity.currentLocale != locale) {
            MainActivity.currentLocale = locale
            val instanceManager = reactInstanceManager
            instanceManager.recreateReactContextInBackground()
        }
    }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "STSApp"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    RNBootSplash.init(this, R.style.BootTheme)  // <- initialize the splash screen
    super.onCreate(null)     // or super.onCreate(savedInstanceState) when not using react-native-screens
    MainActivity.currentLocale = resources.configuration.locale.toString()
  }
}
