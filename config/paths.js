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
  root: appDirectory,
  nodeModules: resolveApp('node_modules'),
  srcClient: resolveApp('src/client'),
  srcServer: resolveApp('src/server'),
  srcShared: resolveApp('src/shared'),
  components: resolveApp('src/shared/components'),
  pages: resolveApp('src/shared/pages'),
  publicPath: '/public/',
  bolt: resolveApp('src/shared/api/firebase/securityRules/bolt/rules.bolt'),
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
