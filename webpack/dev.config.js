/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const merge = require('webpack-merge')
const { SourceMapDevToolPlugin } = require('webpack')
const { ElectronAutoReloadPlugin } = require('electron-auto-reload-webpack-plugin')

const baseConfig = require('./base.config')
const rendererConfig = require('./renderer.config')
const mainConfig = require('./main.config')

const devConfig = {
  devtool: 'cheap-eval-source-map',
  plugins: [
    new SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
}

const finalRendererConfig = merge(baseConfig, devConfig, rendererConfig, {
  devServer: {
    port: 4040,
    writeToDisk: (path) => /main\.js$/.test(path),
    overlay: {
      warnings: true,
      errors: true
    },
    watchOptions: {
      ignored: /\.d\.ts$/
    }
  }
})
const finalMainConfig = merge(baseConfig, devConfig, mainConfig, {
  plugins: [new ElectronAutoReloadPlugin()]
})

module.exports = [finalRendererConfig, finalMainConfig]
