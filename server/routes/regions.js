const express = require('express')

const db = require('../db/regions')

const router = express.Router()

router.get('/', (req, res) => {
  db.getRegions()
    .then((results) => {
      res.json({ regions: results.map((region) => region) })
      return null
    })
    .catch(() => {
      res.status(500).json({ message: 'Server error' })
    })
})

module.exports = router
