const paths = require('../config/paths')
const DEPLOY_ENV = process.argv[2] || process.env.DEPLOY_ENV
require('dotenv').config({ path: `${paths.dotenv}.${DEPLOY_ENV}` })
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const chalk = require('chalk')

const chalkColor = '#3D87C9'

const firebaseUse = async () => {
  const message = `Using Firebase project: ${DEPLOY_ENV}`
  console.log(chalk.hex(chalkColor).bold(message))

  const { stdout, stderr } = await exec(`./node_modules/.bin/firebase use ${DEPLOY_ENV}`)
  if (stdout) console.log('stdout', stdout)
  if (stderr) console.log('stderr', stderr)
}

const firebaseDeploy = async () => {
  const message = `Deploying to Firebase`
  console.log(chalk.hex(chalkColor).bold(message))

  const { stdout, stderr } = await exec(`./node_modules/.bin/firebase deploy --only hosting,functions`)
  if (stdout) console.log('stdout', stdout)
  if (stderr) console.log('stderr', stderr)
}

const deploy = async () => {
  const message = `Deploying to: ${DEPLOY_ENV}`
  console.log(chalk.hex(chalkColor).bold(message))

  await firebaseUse()
  await firebaseDeploy()
}

deploy()
