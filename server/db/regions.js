const connection = require('./connection')

function getRegions(db = connection) {
  return db('regions').select()
}

module.exports = {
  getRegions,
}
