const paths = require('../paths')

module.exports = {
  extensions: ['.js', '.mjs', '.json', '.jsx', '.css'],
  modules: paths.resolveModules,
  alias: {
    'app/ui-kit': `${paths.srcShared}/components/AppUIKit`,
    'app': `${paths.srcShared}`
  }
}
