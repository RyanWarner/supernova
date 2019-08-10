/*
  This script deploys the project to Firebase.
  The Firebase project is chosen based on one
  of two possible arguments, --branch or --env.

  When executing from CI, there must be an
  env var FIREBASE_DEPLOY_TOKEN
*/

const paths = require('../config/paths')
const argv = require('yargs').argv

const util = require('util')
const exec = util.promisify(require('child_process').exec)
const chalk = require('chalk')
const chalkColor = '#3D87C9'

const gitBranchToFirebaseMap = {
  master: 'production',
  staging: 'staging',
  develop: 'develop'
}

const firebaseProject = gitBranchToFirebaseMap[argv.branch]

const { FIREBASE_DEPLOY_TOKEN } = process.env

const DEPLOY_ENV = firebaseProject || process.argv[2] || process.env.DEPLOY_ENV
require('dotenv').config({ path: `${paths.dotenv}.${DEPLOY_ENV}` })

const firebaseUse = async () => {
  const message = `Using Firebase project: ${DEPLOY_ENV}`
  console.log(chalk.hex(chalkColor).bold(message))

  const { stdout, stderr } = await exec(`./node_modules/.bin/firebase use ${DEPLOY_ENV} --token ${FIREBASE_DEPLOY_TOKEN}`)
  if (stdout) console.log('stdout', stdout)
  if (stderr) console.log('stderr', stderr)
}

const firebaseDeploy = async () => {
  const message = `Deploying to Firebase`
  console.log(chalk.hex(chalkColor).bold(message))

  try {
    const { stdout, stderr } = await exec(`./node_modules/.bin/firebase deploy --only hosting,functions --token ${FIREBASE_DEPLOY_TOKEN}`)
    if (stdout) console.log('stdout', stdout)
    if (stderr) console.log('stderr', stderr)
  } catch (error) {
    console.log(error.stdout)
    console.log(error.stderr)
    throw new Error('Error deploying Firebase: ', error)
  }
}

const deploy = async () => {
  const message = `Deploying to: ${DEPLOY_ENV}`
  console.log(chalk.hex(chalkColor).bold(message))

  try {
    await firebaseUse()
    await firebaseDeploy()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

deploy()
