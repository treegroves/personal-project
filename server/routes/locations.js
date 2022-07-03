const express = require('express')

const db = require('../db/locations')

const router = express.Router()

router.get('/', (req, res) => {
  db.getLocations()
    .then((results) => {
      res.json({ locations: results.map((location) => location) })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Server error' })
    })
})

module.exports = router
