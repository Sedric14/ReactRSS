module.exports = {
  presets: ['@babel/env', '@babel/react', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-async-to-generator',
    '@babel/transform-arrow-functions',
    '@babel/proposal-object-rest-spread',
    '@babel/proposal-class-properties',
    'transform-class-properties',
    'istanbul',
  ],
};
