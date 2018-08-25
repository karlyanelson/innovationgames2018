const path = require('path')

module.exports = {
  outputDir: 'docs',
  baseUrl: '/innovationgames2018/',
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,

  css: {
    modules: true,
    sourceMap: true
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/main.scss'),
      ]
    }
  }
}
