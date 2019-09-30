const paths = require('../../paths')
const fs = require('fs')

module.exports = (answers) => {
  return new Promise((resolve, reject) => {
    const exportString = `export ${answers.componentName} from './${answers.componentName}/${answers.componentName}'\n`

    fs.appendFile(`${paths.components}/index.js`, exportString, err => {
      if (err) throw reject(new Error('Failed to export component from components/index'))
      resolve('Added export to components/index')
    })
  })
}
