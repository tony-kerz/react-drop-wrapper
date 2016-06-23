const ProvidePlugin = require('webpack/lib/ProvidePlugin')
var DedupePlugin = require('webpack/lib/optimize/DedupePlugin')
const dbg = require('debug')('webpack:config:common')
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))

dbg('argv=%o', argv)

module.exports = {
  entry: {
    app: [
      path.join(__dirname, '../src/index.jsx')
    ]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.coffee'],
    alias: {
      underscore: 'lodash'
    }
  },
  plugins: [
    new DedupePlugin(),
    new ProvidePlugin(
      {
        jQuery: 'jquery'
      }
    )
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            //'es2015-native-modules',
            'es2015',
            'stage-0',
            'react'
          ],
          plugins: [
            'transform-decorators-legacy'
          ]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        query: {
          mimetype: 'image/png'
        }
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader',
        query: {
          mimetype: 'image/jpg',
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.(ttf|eot|svg|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  eslint: {
    test: /\.jsx?$/,
    loaders: ['eslint-loader'],
    exclude: /node_modules/
  }
}
