const connection = require('./connection')

function getLocations(db = connection) {
  return db('locations').select()
}

module.exports = {
  getLocations,
}
