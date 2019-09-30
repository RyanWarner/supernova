const paths = require('../../paths')

module.exports = {
  description: 'Create a React page',
  prompts: [{
    type: 'prompt',
    name: 'pageName',
    message: 'Name of your page:'
  }],
  actions: () => {
    return [{
      type: 'add',
      path: `${paths.pages}/{{properCase pageName}}/{{properCase pageName}}.js`,
      templateFile: './config/plop/page/page.styled.js.plop'
    }, {
      type: 'add',
      path: `${paths.pages}/{{properCase pageName}}/styles.js`,
      templateFile: './config/plop/page/styles.js.plop'
    }, {
      type: 'addPageToIndex'
    }]
  }
}
