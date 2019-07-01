const paths =  require('./config/paths')
const fs = require('fs')

module.exports = function (plop) {
  plop.setActionType('addComponentToIndex', (answers) => {
    return new Promise((resolve, reject) => {
      const exportString = `export ${answers.componentName} from './${answers.componentName}/${answers.componentName}'\n`

      fs.appendFile(`${paths.srcShared}/components/index.js`, exportString, err => {
        if (err) throw reject('Failed to export component from components/index')
        resolve('Added export to components/index')
      })
    })
  })

  plop.setActionType('addPageToIndex', (answers) => {
    return new Promise((resolve, reject) => {
      const exportString = `export ${answers.pageName} from './${answers.pageName}/${answers.pageName}'\n`

      fs.appendFile(`${paths.srcShared}/pages/index.js`, exportString, err => {
        if (err) throw reject('Failed to export component from components/index')
        resolve('Added export to pages/index')
      })
    })
  })

  plop.setGenerator('Component', {
    description: 'Create a React component',
    prompts: [
      {
        type: 'prompt',
        name: 'componentName',
        message: 'Name of your component:'
      },
      {
        type: 'confirm',
        name: 'styledComponents',
        message: 'Do you want the component to be styled with Styled Components?',
        default: true
      }
    ],
    actions: (answers) => {
      const actions = []

      if (!answers.styledComponents) {
        actions.push({
          type: 'add',
          path: './src/shared/components/{{properCase componentName}}/{{properCase componentName}}.js',
          templateFile: './config/plop/component/component.js.plop'
        })
      } else {
        actions.push({
          type: 'add',
          path: './src/shared/components/{{properCase componentName}}/{{properCase componentName}}.js',
          templateFile: './config/plop/component/component.styled.js.plop'
        }, {
          type: 'add',
          path: './src/shared/components/{{properCase componentName}}/styles.js',
          templateFile: './config/plop/component/styles.js.plop'
        }, {
          type: 'addComponentToIndex'
        })
      }

      return actions
    }
  })

  plop.setGenerator('Page', {
    description: 'Create a React page',
    prompts: [
      {
        type: 'prompt',
        name: 'pageName',
        message: 'Name of your page:'
      }
    ],
    actions: () => {
      return [{
        type: 'add',
        path: './src/shared/pages/{{properCase pageName}}/{{properCase pageName}}.js',
        templateFile: './config/plop/page/page.styled.js.plop'
      }, {
        type: 'add',
        path: './src/shared/pages/{{properCase pageName}}/styles.js',
        templateFile: './config/plop/page/styles.js.plop'
      }, {
        type: 'addPageToIndex'
      }]
    }
  })
}
