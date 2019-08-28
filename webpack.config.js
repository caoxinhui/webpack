const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const APP_PATH = path.resolve(__dirname, 'app')
const BUILD_PATH = path.resolve(__dirname, 'build')
module.exports = {
  entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', APP_PATH],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'hello world app'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}