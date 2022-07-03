exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('regions')
    .del()
    .then(function () {
      return knex('regions').insert([
        { id: 1, region_name: 'North' },
        { id: 2, region_name: 'South' },
        { id: 3, region_name: 'Central' },
        { id: 4, region_name: 'East' },
        { id: 5, region_name: 'West' },
      ])
    })
}
