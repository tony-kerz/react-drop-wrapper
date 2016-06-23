var commonConfig = require('./webpack.common.config')
var _ = require('lodash')
var DefinePlugin = require('webpack/lib/DefinePlugin')

const config = _.extend(
  commonConfig,
  {
    entry: undefined,
    output: {
      libraryTarget: 'commonjs2'
    },
    plugins: [
      ...commonConfig.plugins,
      new DefinePlugin(
        {
          'process.env.NODE_ENV': '"test"'
        }
      )
    ]
  }
)

module.exports = config
