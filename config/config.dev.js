const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./config.base')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    progress: true,
    hot: true,
    hotOnly: true
  }
})
