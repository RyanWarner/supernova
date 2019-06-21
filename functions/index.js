const functions = require('firebase-functions')

const app = require('./build/server/server.js')

exports.app = functions.https.onRequest(app)
