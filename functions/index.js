const functions = require('firebase-functions')

exports.app = functions.https.onRequest((req, res) => {
  const app = require('./build/server/server.js')
  return app(req, res)
})
