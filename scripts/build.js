const webpack = require('webpack')
const rimraf = require('rimraf')

const dotenv = require('dotenv')

const webpackConfig = require('../config/webpack.config.js')(
  process.env.NODE_ENV || 'production'
)
const paths = require('../config/paths')
const { logMessage, compilerPromise } = require('./utils')

dotenv.config({
  path: `${paths.dotenv}.${process.env.NODE_ENV}`,
  systemvars: true
})

const build = async () => {
  rimraf.sync(paths.clientBuild)
  rimraf.sync(paths.serverBuild)

  const [clientConfig, serverConfig] = webpackConfig
  const multiCompiler = webpack([clientConfig, serverConfig])

  const clientCompiler = multiCompiler.compilers.find(
    compiler => compiler.name === 'client'
  )
  const serverCompiler = multiCompiler.compilers.find(
    compiler => compiler.name === 'server'
  )

  const clientPromise = compilerPromise('client', clientCompiler)
  const serverPromise = compilerPromise('server', serverCompiler)

  serverCompiler.watch({}, (error, stats) => {
    if (!error && !stats.hasErrors()) {
      console.log(stats.toString(serverConfig.stats))
    }
  })

  clientCompiler.watch({}, (error, stats) => {
    if (!error && !stats.hasErrors()) {
      console.log(stats.toString(clientConfig.stats))
    }
  })

  try {
    await serverPromise
    await clientPromise
    logMessage('Done!', 'info')
    process.exit(0)
  } catch (error) {
    logMessage(error, 'error')
    process.exit(1)
  }
}

build()
