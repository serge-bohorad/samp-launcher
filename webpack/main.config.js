/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const PATH_ROOT = resolve(__dirname, '../')
const PATH_SRC = resolve(PATH_ROOT, 'packages/main')
const PATH_OUTPUT = resolve(PATH_ROOT, 'dist')
const PATH_SHARED = resolve(PATH_SRC, '../shared')
const PATH_TS_CONFIG = resolve(PATH_SRC, 'tsconfig.json')

module.exports = {
  target: 'electron-main',
  entry: {
    main: PATH_SRC
  },
  output: {
    filename: '[name].js',
    path: PATH_OUTPUT
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsConfigPathsPlugin({ configFile: PATH_TS_CONFIG })]
  },
  externals: [nodeExternals()],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [PATH_SRC, PATH_SHARED],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new ForkTsCheckerPlugin({ tsconfig: PATH_TS_CONFIG })]
}
