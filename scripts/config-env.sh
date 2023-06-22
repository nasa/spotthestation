#!/bin/bash
set -eo pipefail

# Run this script from project root folder

if [ "$1" == "staging" ]; then
  ENVFILE="./scripts/config/.env.staging"
  GOOGLE_ANDROID="./scripts/config/google-services.staging.json"
  GOOGLE_IOS="./scripts/config/GoogleService-Info.staging.plist"
elif [ "$1" == "production" ]; then
  ENVFILE="./scripts/config/.env.production"
  GOOGLE_ANDROID="./scripts/config/google-services.production.json"
  GOOGLE_IOS="./scripts/config/GoogleService-Info.production.plist"
else
  echo "Invalid environment name: Run 'config-env.sh <ENV>' to configure ENV for [staging/production]"
  exit 1
fi

echo "Configuring .env file for [$1]..."
cp $ENVFILE ./.env

echo "Switching the Google environment..."
cp $GOOGLE_ANDROID "./android/app/google-services.json"
cp $GOOGLE_IOS "./ios/GoogleService-Info.plist"
