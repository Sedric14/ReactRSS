const config = require('./webpack.common').createConfig({
  target: 'client',
});
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  ...config,
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    ...config.plugins,
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
  ],
};
