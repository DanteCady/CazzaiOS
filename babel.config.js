module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin", // Add React Native Reanimated plugin
      // Add any other necessary plugins here
    ],
  };
};
