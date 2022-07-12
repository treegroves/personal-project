// const knex = require('knex')
// const config = require('./knexfile').development
// const db = knex(config)
const connection = require('./connection')

function getLocations(db = connection) {
  return db('locations').select(
    'id',
    'name',
    'description',
    'address',
    'opening_hours as openingHours',
    'website_url as websiteUrl',
    'wheelchair_compatible as wheelchairCompatible',
    'ramps',
    'elevator',
    'accessible_toilets as accessibleToilets',
    'region_id as regionId'
  )
}

//add location
function addNewLocation(location, db = connection) {
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
  } = location
  return db('locations')
    .insert({
      name,
      description,
      address,
      opening_hours: openingHours,
      website_url: websiteUrl,
      wheelchair_compatible: wheelchairCompatible,
      ramps,
      elevator,
      accessible_toilets: accessibleToilets,
      region_id: regionId,
    })
    .then(([id]) => {
      return {
        id,
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
      }
    })
}

//update location
module.exports = {
  getLocations,
  addNewLocation,
}
