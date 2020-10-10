// vue.config.js webpack配置
const path = require('path') // 配置@相对路径
const resolve = dir => {
  return path.join(__dirname, dir)
}
const port = process.env.port || process.env.npm_config_port || 1024 // dev port

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}
