const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: [...getDefaultConfig(__dirname).resolver.assetExts, "bin", "db", "mp3", "ttf", "obj", "png", "jpg", "obj", "mtl"]
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);