const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/main.js'),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html'
    })
  ]
})
