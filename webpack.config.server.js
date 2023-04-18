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
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.css$/,
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
