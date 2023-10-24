# Welcome to the STSApp

This project was bootstraped using Ignite CLI v8.4.2 (React Native v0.69.7).

Currently includes:

- React Native
- React Navigation
- MobX State Tree
- TypeScript
- And more!

## Getting Started

### Prerequisites

Before you can run this project, you will need to have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [yarn](https://classic.yarnpkg.com/) (v1.x)
- [React Native CLI](https://reactnative.dev/docs/environment-setup?guide=native)

### Installation

1. Copy sample env file to the config directory:
    ```
    cp .env.example scripts/config/.env.staging
    ```
2. In `scripts/config/.env.staging` file, provide values for the following variables:
   - `API_URL` - url of your backend, for example: http://localhost:5000/.
   - `GOOGLE_API_TOKEN` - your Google Maps API token. Learn how to obtain it [here](https://developers.google.com/maps/documentation/javascript/get-api-key).
   - `MAPBOX_API_TOKEN` - your Mapbox token. Learn how to obtain it [here](#how-to-obtain-mapbox-token).
   - You can leave other variables unchanged
3. Run `config-env.sh` script
    ```
    ./scripts/config-env.sh staging
    ```
4. Create `.netrc` file in your home directory (not project directory) with the following content:
   ```
   machine api.mapbox.com
   login mapbox
   password YOUR_SECRET_MAPBOX_ACCESS_TOKEN
   ```
   Replace `YOUR_SECRET_MAPBOX_ACCESS_TOKEN` with your Mapbox token.   
5. Change `.netrc` file permissions 
   ```
   sudo chmod 0600 ~/.netrc
   ```
6. Create `.gradle/gradle.properties` file in your home directory (not project directory) with the following content:
   ```
   MAPBOX_DOWNLOADS_TOKEN=YOUR_SECRET_MAPBOX_ACCESS_TOKEN
   ```
   Replace `YOUR_SECRET_MAPBOX_ACCESS_TOKEN` with your Mapbox token.
7. Install project dependencies:
    ```
    yarn install
    ```

### Running on iOS device
1. Open `ios/STSApp.xcworkspace` in Xcode.
2. Go to `Signing & Capabilities` tab.
3. Tick `Automatically manage signing` checkbox.
4. Select development team. Note: because this project uses push notifications, personal development teams will NOT work.
5. Change bundle identifier to any value.
6. Click Start icon to build and run the app on your device.

### Running on Android device
Run the following command:
```
yarn android
```
If build succeeds, you might need to open the app manually on your device.

## Project Structure

The Ignite boilerplate project's structure will look similar to this:

```
ignite-project
├── app
│   ├── components
│   ├── config
│   ├── i18n
│   ├── models
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── utils
│   ├── app.tsx
├── test
│   ├── __snapshots__
│   ├── mockFile.ts
│   ├── setup.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── index.js
├── ios
│   ├── IgniteProject
│   ├── IgniteProject-tvOS
│   ├── IgniteProject-tvOSTests
│   ├── IgniteProject.xcodeproj
│   └── IgniteProjectTests
├── .env
└── package.json

```

### ./app directory

Included in an Ignite boilerplate project is the `app` directory. This is a directory you would normally have to create when using vanilla React Native.

The inside of the `app` directory looks similar to the following:

```
app
├── components
├── config
├── i18n
├── models
├── navigators
├── screens
├── services
├── theme
├── utils
├── app.tsx
```

**components**
This is where your reusable components live which help you build your screens.

**i18n**
This is where your translations will live if you are using `react-native-i18n`.

**models**
This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**navigators**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truly shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

### ./test directory

This directory will hold your Jest configs and mocks.

## How to obtain Mapbox token?
1. Create a Mapbox account [here](https://account.mapbox.com/auth/signup/)
2. Go to [Access tokens page](https://account.mapbox.com/access-tokens/)
3. Click `Create a token`
4. Name your token, tick all Public scopes checkboxes, tick the following Secret scopes checkboxes:
   - styles:download
   - downloads:read
   - vision:download
   - navigation:download
5. Click `Create token` and copy your token. It should start with `sk.`