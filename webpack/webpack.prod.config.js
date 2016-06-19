var commonConfig = require('./webpack.common.config')
var _ = require('lodash')
var DefinePlugin = require('webpack/lib/DefinePlugin')

var config = _.extend(
  commonConfig,
  {
  },
  {
    plugins: [
      ...commonConfig.plugins,
      new DefinePlugin(
        {
          'process.env.NODE_ENV': '"production"'
        }
      )
    ]
  }
)

module.exports = config
