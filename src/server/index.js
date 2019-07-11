const express = require('express')

const isDev = process.env.NODE_ENV === 'development'

require('dotenv').config()

const app = module.exports = express()

const initializeApp = () => {
  const cors = require('cors')
  const path = require('path')
  const manifestHelpers = require('express-manifest-helpers').default
  const bodyParser = require('body-parser')
  const configureStore = require('../shared/store').configureStore
  const serverRender = require('./render').default
  const paths = require('../../config/paths')
  const cookieParser = require('cookie-parser')

  if (isDev) {
    app.use(paths.publicPath, express.static(paths.clientBuild))
    app.use('/favicon.ico', (req, res) => {
      res.send('')
    })
  }

  app.use(cors())

  app.use(bodyParser.json())
  app.use(cookieParser())

  app.use((req, res, next) => {
    const initialState = (req.cookies && req.cookies.__session) ? JSON.parse(req.cookies.__session) : {}
    req.store = configureStore({
      initialState
    })
    return next()
  })

  const manifestBase = isDev ? paths.manifest : paths.manifestLocal
  const manifestPath = `${manifestBase}/manifest.json`

  app.use(manifestHelpers({ manifestPath }))

  app.use(serverRender())

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    return res.status(404).json({
      status: 'error',
      message: err.message,
      stack:
        // print a nicer stack trace by splitting line breaks and making them array items
        process.env.NODE_ENV === 'development' &&
        (err.stack || '')
          .split('\n')
          .map((line) => line.trim())
          .map((line) => line.split(path.sep).join('/'))
          .map((line) =>
            line.replace(
              process
                .cwd()
                .split(path.sep)
                .join('/'),
              '.'
            )
          )
    })
  })

  if (isDev) {
    const chalk = require('chalk')
    app.listen(process.env.PORT || 8080, () => {
      console.log(
        `[${new Date().toISOString()}]`,
        chalk.hex('#88DEF3')(`🔥 App is running:`),
        chalk.bold.hex('#A8ED4F')(`http://localhost:${process.env.PORT || 8080}`)
      )
    })
  }
}

initializeApp()
