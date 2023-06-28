#!/bin/bash
set -euo pipefail

# Build the app
echo "[spot-the-station-app.production]: Building Android version..."
./scripts/config-env.sh production
yarn install
npx jetifier

cd android
./gradlew --no-daemon clean bundleRelease

cd ..

# Send Slack message
# SLACK_TITLE="Android" ./scripts/send-slack-msg.sh
