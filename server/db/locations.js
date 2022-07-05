const connection = require('./connection')

function getLocations(db = connection) {
  return db('locations').select()
}

//add location

//update location
module.exports = {
  getLocations,
}
