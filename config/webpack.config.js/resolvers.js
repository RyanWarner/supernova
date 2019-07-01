const paths = require('../paths')

module.exports = {
  extensions: ['.js', '.mjs', '.json', '.jsx', '.css'],
  modules: paths.resolveModules,
  alias: {
    'app/ui-kit': `${paths.srcShared}/components/AppUIKit`,
    'app': `${paths.srcShared}`,
    'app/components': `${paths.srcShared}/components`,
    'app/styles': `${paths.srcShared}/styles/index`,
    'app/store': `${paths.srcShared}/store`
  }
}
