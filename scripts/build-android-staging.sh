#!/bin/bash
set -euo pipefail

# Build the app
echo "[spot-the-station-app.staging]: Building Android version..."
./scripts/config-env.sh staging
yarn install
yarn update-build
npx jetifier

cd android
./gradlew --no-daemon clean assembleRelease

# Upload to Firebase App Distribution
APK_PATH="./app/build/outputs/apk/release/app-release.apk"
GOOGLE_APP_ID=$(node -pe "require('./app/google-services.json').client[0].client_info.mobilesdk_app_id")
firebase appdistribution:distribute $APK_PATH --app $GOOGLE_APP_ID --groups "android-testers"
cd ..

# Send Slack message
# SLACK_TITLE="Android" ./scripts/send-slack-msg.sh
