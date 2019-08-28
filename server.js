const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')
const app = express(),
  PORT = 9090,
  compiler = webpack(webpackConfig)
let devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

let hotMiddleware = webpackHotMiddleware(compiler, {
  log: false,
  heartbeat: 2000
})
app.use(devMiddleware)
app.use(hotMiddleware)
app.listen(PORT, function () {
  console.log('成功启动：localhost: ' + PORT)
})