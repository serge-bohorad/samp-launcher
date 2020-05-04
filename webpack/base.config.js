/* eslint-disable @typescript-eslint/no-var-requires */
const { DefinePlugin } = require('webpack')

const { NODE_ENV } = process.env

module.exports = {
  mode: NODE_ENV,
  plugins: [
    new DefinePlugin({
      DEVELOPMENT: NODE_ENV === 'development'
    })
  ],
  stats: { modules: false, children: false },
  performance: { hints: false }
}
