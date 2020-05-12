/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

const DEVELOPMENT = process.env.NODE_ENV === 'development'

const PATH_ROOT = resolve(__dirname, '../')
const PATH_SRC = resolve(PATH_ROOT, 'packages/renderer')
const PATH_SHARED = resolve(PATH_SRC, '../shared')
const PATH_OUTPUT = resolve(PATH_ROOT, 'dist')
const PATH_POSTCSS_CONFIG = resolve(PATH_SRC, 'postcss.config.js')
const PATH_TS_CONFIG = resolve(PATH_SRC, 'tsconfig.json')

module.exports = {
  target: 'electron-renderer',
  entry: {
    renderer: PATH_SRC
  },
  output: {
    filename: '[name].js',
    path: PATH_OUTPUT,
    publicPath: DEVELOPMENT ? '/' : './'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsConfigPathsPlugin({ configFile: PATH_TS_CONFIG })]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [PATH_SRC, PATH_SHARED],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        include: PATH_SRC,
        use: [
          'style-loader',
          {
            loader: 'dts-css-modules-loader',
            options: {
              namedExport: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: DEVELOPMENT ? '[path][name]__[local]' : '[sha1:hash:hex:5]'
              },
              localsConvention: 'camelCaseOnly'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: PATH_POSTCSS_CONFIG
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|ttf|otf|woff)$/,
        include: PATH_SRC,
        loader: 'url-loader',
        options: {
          limit: 10000000
        }
      },
      {
        test: /\.svg$/,
        include: PATH_SRC,
        loader: 'react-svg-loader'
      }
    ]
  },
  plugins: [
    new ForkTsCheckerPlugin({ tsconfig: PATH_TS_CONFIG }),
    new HtmlPlugin({
      hash: false,
      template: `${PATH_SRC}/app/index.html`,
      filename: 'index.html'
    })
  ]
}
