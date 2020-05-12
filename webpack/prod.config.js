/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge')

const baseConfig = require('./base.config')
const rendererConfig = require('./renderer.config')
const mainConfig = require('./main.config')

const finalRendererConfig = merge(baseConfig, rendererConfig)
const finalMainConfig = merge(baseConfig, mainConfig)

module.exports = [finalRendererConfig, finalMainConfig]
