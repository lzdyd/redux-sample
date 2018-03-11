const webpack = require('webpack');

module.exports = {
  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: 'cheap-inline-module-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  }
};
