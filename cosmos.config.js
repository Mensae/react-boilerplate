/**
 * cosmos.config.js
 * @type {{containerQuerySelector: string, webpackConfigPath: string, globalImports: string[]}}
 * @see {@link https://github.com/react-cosmos/react-cosmos#react-boilerplate}
 */
module.exports = {
  containerQuerySelector: '#app',
  webpackConfigPath: './internals/webpack/webpack.dev.babel',
  globalImports: [
    './app/global-styles.js',
  ],
};
