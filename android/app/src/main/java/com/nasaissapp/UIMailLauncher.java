package com.nasaissapp;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.content.Intent;

public class UIMailLauncher extends ReactContextBaseJavaModule {
  UIMailLauncher(ReactApplicationContext context) {
    super(context);
  }

  @Override
  public String getName() {
    return "UIMailLauncher";
  }

  @ReactMethod
  public void launchMailApp() {
    Intent intent = new Intent(Intent.ACTION_MAIN);
    intent.addCategory(Intent.CATEGORY_APP_EMAIL);
    getCurrentActivity().startActivity(intent);
  }
}