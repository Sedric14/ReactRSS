/* eslint-disable prettier/prettier */
const config = require('./webpack.common').createConfig({
  target: 'server',
});

module.exports = {
  ...config,
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
      },
    ],
  },
};
