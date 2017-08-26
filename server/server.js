'use strict'
require('./config/db.config.js')
const express = require('express')
const app = express()
const routes = require('./api/routes.main')
const PORT = process.env.PORT || 3000
// Middleware
require('./config/middleware')

// Routes
app.use('/api', routes)

app.listen(PORT, () => {
  console.log('SERVER listening on port: ', PORT)
})

module.exports = app
