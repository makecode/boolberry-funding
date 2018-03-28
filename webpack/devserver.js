const webpack = require('webpack');

module.exports = function () {
  return {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      './app.js'
    ],

    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
      hot: true,
      contentBase: './build',
      stats: 'errors-only',
      port: '8080'
    }
  }
};