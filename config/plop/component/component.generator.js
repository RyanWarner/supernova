const paths = require('../../paths')

module.exports = {
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
    },
    {
      type: 'list',
      name: 'componentType',
      message: 'Select component type',
      choices: ['class', 'function']
    }
  ],
  actions: answers => {
    const actions = []

    const componentTemplates = {
      defaultClass: {
        type: 'add',
        path: `${
          paths.components
        }/{{properCase componentName}}/{{properCase componentName}}.js`,
        templateFile: './config/plop/component/class/component.js.plop'
      },
      defaultFunction: {
        type: 'add',
        path: `${
          paths.components
        }/{{properCase componentName}}/{{properCase componentName}}.js`,
        templateFile: './config/plop/component/function/component.js.plop'
      },
      styledClass: [
        {
          type: 'add',
          path: `${
            paths.components
          }/{{properCase componentName}}/{{properCase componentName}}.js`,
          templateFile: './config/plop/component/class/component.styled.js.plop'
        },
        {
          type: 'add',
          path: `${paths.components}/{{properCase componentName}}/styles.js`,
          templateFile: './config/plop/component/styles.js.plop'
        },
        {
          type: 'addComponentToIndex'
        }
      ],
      styledFunction: [
        {
          type: 'add',
          path: `${
            paths.components
          }/{{properCase componentName}}/{{properCase componentName}}.js`,
          templateFile:
            './config/plop/component/function/component.styled.js.plop'
        },
        {
          type: 'add',
          path: `${paths.components}/{{properCase componentName}}/styles.js`,
          templateFile: './config/plop/component/styles.js.plop'
        },
        {
          type: 'addComponentToIndex'
        }
      ]
    }

    if (answers.componentType === 'class') {
      answers.styledComponents
        ? actions.push(...componentTemplates.styledClass)
        : actions.push(componentTemplates.defaultClass)
    } else {
      answers.styledComponents
        ? actions.push(...componentTemplates.styledFunction)
        : actions.push(componentTemplates.defaultFunction)
    }

    actions.push({
      type: 'add',
      path: `${
        paths.components
      }/{{properCase componentName}}/{{properCase componentName}}.stories.mdx`,
      templateFile: './config/plop/component/component.story.mdx.plop'
    })

    return actions
  }
}
