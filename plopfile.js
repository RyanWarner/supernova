const componentGenerator = require('./config/plop/component/component.generator')
const componentIndexAction = require('./config/plop/component/exportFromIndex')
const pageGenerator = require('./config/plop/page/page.generator')
const pageIndexAction = require('./config/plop/page/exportFromIndex')

module.exports = function (plop) {
  plop.setHelper('curlyWrap', t => `{${t}}`)

  plop.setActionType('addComponentToIndex', componentIndexAction)
  plop.setActionType('addPageToIndex', pageIndexAction)

  plop.setGenerator('Component', componentGenerator)
  plop.setGenerator('Page', pageGenerator)
}
