const express = require('express')
const path = require('path')
const regions = require('./routes/regions')
const locations = require('./routes/locations')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/regions', regions)
server.use('/api/v1/locations', locations)
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})
module.exports = server
