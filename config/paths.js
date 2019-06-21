const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)
const cdn = process.env.CDN || ''

const paths = {
  clientBuild: resolveApp('public/build'),
  serverBuild: resolveApp('functions/build/server'),
  manifest: resolveApp('functions/build/client/public'),
  manifestLocal: resolveApp('build/client/public'),
  dotenv: resolveApp('config/.env'),
  src: resolveApp('src'),
  nodeModules: resolveApp('node_modules'),
  srcClient: resolveApp('src/client'),
  srcServer: resolveApp('src/server'),
  srcShared: resolveApp('src/shared'),
  publicPath: '/public/',
  cdn
}

paths.resolveModules = [
  paths.srcClient,
  paths.srcServer,
  paths.srcShared,
  paths.src,
  paths.nodeModules
]

module.exports = paths
