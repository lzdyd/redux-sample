const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  mode: 'development',

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: 'cheap-inline-module-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new OpenBrowserPlugin({url: `http://localhost:${process.env.PORT || '8080'}/`})
  ],

  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  }
};
