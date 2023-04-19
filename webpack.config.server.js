/* eslint-disable prettier/prettier */
// const nodeExternals = require('webpack-node-externals');
const config = require('./webpack.common').createConfig({
  target: 'server',
});
// const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  ...config,
  // name: 'server',
  // entry: {
  //   server: path.resolve(__dirname, 'server/server.tsx'),
  // },
  // mode: 'production',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: '[name].js',
  // },
  // resolve: {
  //   extensions: ['.ts', '.tsx'],
  // },
  // externals: [nodeExternals()],
  // target: 'node',
  // node: {
  //   __dirname: false,
  // },
  externals: {
    'express': 'commonjs express',
    'react': 'commonjs react',
    'react-dom/server': 'commonjs react-dom/server',
    'react-router': 'commonjs react-router',
    'react-router-dom': 'commonjs react-router-dom'
  },
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.s[ac]ss$/i,
        use: 'null-loader',
        // loader: 'ts-loader',
        // options: {
        //   configFile: 'tsconfig.server.json',
        // },
      },
    ],
  },
  // plugins: [
  //   new CopyPlugin({
  //     patterns: [{ context: 'server', from: 'views', to: 'views' }],
  //   }),
  // ],
};
