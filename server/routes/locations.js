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
  //console.log(req.body)
  const {
    name,
    description,
    address,
    opening_hours,
    website_url,
    wheelchair_compatible,
    ramps,
    elevator,
    accessible_toilets,
    region_id,
  } = req.body.location
  return db
    .addNewLocation({
      name,
      description,
      address,
      opening_hours,
      website_url,
      wheelchair_compatible,
      ramps,
      elevator,
      accessible_toilets,
      region_id,
    })
    .then((newLocation) => {
      //console.log(newLocation)
      res.json(newLocation)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
})
//add post route
//db function to insert
//react to web api
module.exports = router
