const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)
const connection = require('./connection')

function getLocations(db = connection) {
  return db('locations').select()
}

//add location
function addNewLocation(location) {
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
  } = location
  return db('locations')
    .insert({
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
    .then(([id]) => {
      return {
        id,
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
      }
    })
    .catch((err) => {
      console.error(err)
      throw err
    })
}

//update location
module.exports = {
  getLocations,
  addNewLocation,
}
