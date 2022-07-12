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

router.post('/', (req, res) => {
  const {
    name,
    description,
    address,
    openingHours,
    websiteUrl,
    wheelchairCompatible,
    ramps,
    elevator,
    accessibleToilets,
    regionId,
  } = req.body.location
  return db
    .addNewLocation({
      name,
      description,
      address,
      openingHours,
      websiteUrl,
      wheelchairCompatible,
      ramps,
      elevator,
      accessibleToilets,
      regionId,
    })
    .then((newLocation) => {
      res.json(newLocation)
      return null
    })
    .catch(() => {
      res.sendStatus(500)
    })
})
//add post route
//db function to insert
//react to web api
module.exports = router
