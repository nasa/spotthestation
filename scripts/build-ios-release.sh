#!/bin/bash
set -eo pipefail

switchToSystemRuby() {
  if hash rvm 2>/dev/null; then
    echo "Switching to system Ruby..."
    source $HOME/.rvm/scripts/rvm
    rvm use system
  else
    echo "RVM not found, skipping RVM reconfig"
  fi
}

# Build the app
echo "[spot-the-station-app.production]: Building iOS version..."
./scripts/config-env.sh production

switchToSystemRuby
yarn

cd ios
pod install
export RCT_NO_LAUNCH_PACKAGER=1
xcodebuild -workspace STSApp.xcworkspace -scheme "STSApp" clean
xcodebuild -workspace STSApp.xcworkspace -scheme "STSApp" -configuration Release -destination generic/platform=iOS -archivePath ./STSApp.xcarchive  archive CODE_SIGN_IDENTITY="" CODE_SIGNING_REQUIRED=NO | xcpretty
cd ..
