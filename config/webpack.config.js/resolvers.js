const paths = require('../paths')

module.exports = {
  extensions: ['.js', '.mjs', '.json', '.jsx', '.css'],
  modules: paths.resolveModules,
  alias: {
    'app/styles': `${paths.srcShared}/styles/index`,
    'app/ui-kit': `${paths.srcShared}/components/AppUIKit`,
    'app/components': `${paths.srcShared}/components`,
    'app/utilities': `${paths.srcShared}/Utilities`,
    'app/firebase-services': `${paths.srcShared}/firebase/services`,
    'app/store': `${paths.srcShared}/store`
  }
}
