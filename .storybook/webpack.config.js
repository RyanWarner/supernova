const resolvers = require('../config/webpack.config.js/resolvers')

module.exports = async ({ config, mode }) => {
  config.resolve.modules = config.resolve.modules.concat(resolvers.modules)

  config.resolve.alias = {
    ...config.resolve.alias,
    ...resolvers.alias
  }

  return config
}
