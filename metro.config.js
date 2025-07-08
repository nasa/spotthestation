const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const ALIASES = {
  tslib: path.resolve(__dirname, "node_modules/tslib/tslib.es6.js"),
};

const config = {
  resolver: {
    assetExts: [...getDefaultConfig(__dirname).resolver.assetExts, "bin", "db", "mp3", "ttf", "obj", "png", "jpg", "obj", "mtl"],
    resolveRequest: (context, moduleName, platform) => {
      // Ensure you call the default resolver.
      return context.resolveRequest(
        context,
        // Use an alias if one exists.
        ALIASES[moduleName] ?? moduleName,
        platform
      );
    }
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
