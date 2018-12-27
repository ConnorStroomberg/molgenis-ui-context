// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.externals({
      'vue': 'Vue',
      'jquery': 'jQuery',
      'bootstrap': 'bootstrap',
      'popper.js': 'Popper.js'
    })
  },
  devServer: {
    proxy: 'http://localhost:8080'
  }
}