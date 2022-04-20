const path = require('path');

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-postcss",
    "@storybook/addon-actions",
  ],
  framework: "@storybook/react",
  babel: async (options) => ({
    ...options,
  }),
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/assets": path.resolve(__dirname, "../src/assets/"),
        "@/components": path.resolve(__dirname, "../src/components/"),
        "@/constants": path.resolve(__dirname, "../src/constants/"),
        "@/context": path.resolve(__dirname, "../src/context/"),
        "@/src": path.resolve(__dirname, "../src/"),
        "@/stories": path.resolve(__dirname, "../src/stories/"),
        "@/hooks": path.resolve(__dirname, "../src/hooks/"),
        "@/utils": path.resolve(__dirname, "../src/utils/"),
        "@/theme": path.resolve(__dirname, "../src/theme/"),
    };

    return config;
  }
};
