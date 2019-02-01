var path = require('path')
function resolve (dir) {
  window.console.log(__dirname)
  return path.join(__dirname, dir)
}
module.default = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'public',
  devServer: {
    open: true,
    host: '0,0,0,0',
    port: '8080',
    proxy: {
      '/api': {
        target: 'http://rap2api.taobao.org/repository/get?id=:87128/', //跨域地址
        ws: true, // 是否跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('css', resolve('public/css')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@', resolve('src'))
  }
}