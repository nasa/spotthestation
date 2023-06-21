#!/bin/bash
set -eo pipefail

# Build the app and upload to app center for both platforms
yarn
yarn update-build

# Upload to CodePush. If this release should be marked mandatory, add -m
appcenter codepush release-react -a <user>/<app> -d Production -p ios/NasaIssApp/Info.plist
appcenter codepush release-react -a <user>/<app> -d Production
