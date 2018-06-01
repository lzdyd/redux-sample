const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const development = require('./dev.config');
const production = require('./prod.config');

const { NODE_ENV } = process.env;

const getRootPath = aliasPath => path.join(__dirname, '..', `/src/${aliasPath}`);

require('babel-polyfill');

const common = {
  context: path.join(__dirname, '..', '\\src'),

  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './index'
  ],

  output: {
    path: path.join(__dirname, '..', '/public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      common: getRootPath('components/common')
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      __DEVELOPMENT__: NODE_ENV === 'development',
      __PRODUCTION__: NODE_ENV === 'production',
      __CLIENT__: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, '..', 'src')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  }
};

if (NODE_ENV === 'development') {
  console.log('\x1b[36m%s\x1b[0m', 'DEV BUILD');
  module.exports = merge(development, common);
}

if (NODE_ENV === 'production') {
  console.log('\x1b[36m%s\x1b[0m', 'PROD BUILD');
  module.exports = merge(production, common);
}
