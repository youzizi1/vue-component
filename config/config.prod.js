const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./config.base')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build'),
    library: 'ugu-vue-component',
    libraryTarget: 'umd'
  },
  externals: {
    vue: 'vue'
  }
})
