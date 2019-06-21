module.exports = function (plop) {
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
        })
      }

      return actions
    }
  })
}
