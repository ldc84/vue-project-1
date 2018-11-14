const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vue-project-1/' : '/',
  lintOnSave: true,
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
      .set('~!',resolve('src/assets'))
      .set('~@',resolve('src/components'))
      .set('layout',resolve('src/layout'))
      .set('base',resolve('src/base'))
      .set('static',resolve('src/static'))
  }
}