const webpack = require('webpack');
const config = require('./webpack.common').createConfig({
  target: 'client',
});
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  ...config,
  // name: 'client',
  // entry: {
  //   client: path.resolve(__dirname, 'src/main.tsx'),
  // },
  // mode: 'production',
  // output: {
  //   path: path.resolve(__dirname + '/dist/static'),
  //   filename: '[name].[contenthash].js',
  //   publicPath: '',
  // },
  // resolve: {
  //   extensions: ['.ts', '.tsx', '.js'],
  // },
  // target: 'web',
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        // loader: 'ts-loader',
        // options: {
        //   configFile: 'tsconfig.client.json',
        // },
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
