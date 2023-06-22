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
echo "[nasa-iss.staging]: Building iOS version..."
./scripts/config-env.sh staging

yarn run update-build
switchToSystemRuby
yarn

cd ios
pod install
export RCT_NO_LAUNCH_PACKAGER=1
xcodebuild -workspace STSApp.xcworkspace -scheme "STSApp-staging" clean
xcodebuild -workspace STSApp.xcworkspace -scheme "STSApp-staging" -configuration Release -destination generic/platform=iOS -archivePath ./STSApp-staging.xcarchive  archive | xcpretty
rm -Rf IPA
mkdir IPA
xcodebuild -exportArchive -archivePath ./STSApp-staging.xcarchive -exportPath ./IPA -exportOptionsPlist ../scripts/exportOptions.plist

# Upload to Firebase App Distribution
IPA_PATH="./IPA/STSApp-staging.ipa"
GOOGLE_APP_ID=$(defaults read $(pwd)/GoogleService-Info GOOGLE_APP_ID)
firebase appdistribution:distribute $IPA_PATH --app $GOOGLE_APP_ID --groups "ios-testers"
cd ..

# Send Slack message
# SLACK_TITLE="iOS" ./scripts/send-slack-msg.sh
