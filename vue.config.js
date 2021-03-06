const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'colors': path.resolve(__dirname, './src/assets/styles/colors.scss'),
        'media': path.resolve(__dirname, './src/assets/styles/media.scss')
      }
    }
  }
}
