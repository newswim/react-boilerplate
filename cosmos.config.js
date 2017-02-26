// cosmos.config.js
module.exports = {
  componentPaths: [
    'app/components',
    'app/containers',
  ],
  ignore: ['tests'],
  webpackConfigPath: './internals/webpack/webpack.dev.babel',
};
