const paths =  require('./config/paths')
const fs = require('fs')

module.exports = function (plop) {
  plop.setActionType('addToIndex', (answers) => {
    return new Promise((resolve, reject) => {
      const exportString = `export ${answers.componentName} from './${answers.componentName}/${answers.componentName}'\n`

      fs.appendFile(`${paths.srcShared}/components/index.js`, exportString, err => {
        if (err) throw reject('Failed to export component from components/index')
        resolve('Added export to components/index')
      })
    })
  })

  plop.setGenerator('React Component', {
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
          type: 'addToIndex'
        })
      }

      return actions
    }
  })
}
