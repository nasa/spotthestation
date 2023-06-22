#!/bin/bash
set -eo pipefail

# Build the app and upload to app center for both platforms
yarn install
yarn update-build

# Upload to CodePush. If this release should be marked mandatory, add -m
appcenter codepush release-react -a Ensemble/Spot-the-Station-iOS -d Staging -m -p ios/STSApp-staging-Info.plist
appcenter codepush release-react -a Ensemble/Spot-the-Station-Android -d Staging -m
