const paths = require('../config/paths')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const chalk = require('chalk')
const chalkColor = '#3D87C9'

const compile = async () => {
  const message = 'Compiling Bolt rules'
  console.log(chalk.hex(chalkColor).bold(message))

  const bolt = './node_modules/.bin/firebase-bolt'

  try {
    const { stdout, stderr } = await exec(`${bolt} ${paths.bolt}`)
    if (stdout) console.log('stdout', stdout)
    if (stderr) console.log('stderr', stderr)
  } catch (error) {
    console.log(error.stdout)
    console.log(error.stderr)
    throw new Error('Error compiling Bolt: ', error)
  }
}

compile()
