const paths = require('../paths')

module.exports = {
  extensions: ['.mjs', '.js', '.json', '.jsx', '.css'],
  modules: paths.resolveModules,
  alias: {
    'app/ui-kit': `${paths.srcShared}/components/AppUIKit`,
    app: `${paths.srcShared}`,
    '@': `${paths.root}`
  }
}
