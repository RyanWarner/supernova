const resolvers = require('../config/webpack.config.js/resolvers')
const plugins = require('../config/webpack.config.js/plugins')

module.exports = async ({ config, mode }) => {
  config.resolve.modules = config.resolve.modules.concat(resolvers.modules)

  config.resolve.alias = {
    ...config.resolve.alias,
    ...resolvers.alias
  }

  config.plugins = config.plugins.concat(plugins.client)

  return config
}
