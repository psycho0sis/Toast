const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../src'),
    
    externals: {
      react: "commonjs react",
      "react-dom": "commonjs react-dom",
    },
    output: {
      libraryTarget: 'commonjs2'
    },
  });
  

  config.resolve.alias = {
    "@/assets": path.resolve(__dirname, "../src/assets/"),
    "@/components": path.resolve(__dirname, "../src/components/"),
    "@/constants": path.resolve(__dirname, "../src/constants/"),
    "@/context": path.resolve(__dirname, "../src/context/"),
    "@/src": path.resolve(__dirname, "../src/"),
    "@/stories": path.resolve(__dirname, "../src/stories/"),
    "@/hooks": path.resolve(__dirname, "../src/hooks/"),
    "@/utils": path.resolve(__dirname, "../src/utils/"),
    "@/theme": path.resolve(__dirname, "../src/theme/"),
  }

  return config;
};