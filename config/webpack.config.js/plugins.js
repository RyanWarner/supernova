const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const paths = require('../paths')
const Dotenv = require('dotenv-webpack')

const deployEnv = process.env.DEPLOY_ENV || 'development'

const shared = []

const client = [
  new CaseSensitivePathsPlugin(),
  new Dotenv({
    path: `${paths.dotenv}.${deployEnv}`
  }),
  new webpack.DefinePlugin({
    __SERVER__: 'false',
    __BROWSER__: 'true'
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new ManifestPlugin({ fileName: paths.manifest + '/manifest.json' })
]

const server = [
  new Dotenv({
    path: `${paths.dotenv}.${deployEnv}`
  }),
  new webpack.DefinePlugin({
    __SERVER__: 'true',
    __BROWSER__: 'false'
  })
]

module.exports = {
  shared,
  client,
  server
}
