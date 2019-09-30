const paths = require('../../paths')
const fs = require('fs')

module.exports = (answers) => {
  return new Promise((resolve, reject) => {
    const exportString = `export ${answers.pageName} from './${answers.pageName}/${answers.pageName}'\n`

    fs.appendFile(`${paths.pages}/index.js`, exportString, err => {
      if (err) throw reject(new Error('Failed to export page from pages/index'))
      resolve('Added export to pages/index')
    })
  })
}
