/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('locations', function (table) {
    table.increments('id')
    table.string('name')
    table.text('description')
    table.text('address')
    table.text('opening_hours')
    table.text('website_url')
    table.integer('wheelchair_compatible')
    table.integer('ramps')
    table.integer('elevator')
    table.integer('accessible_toilets')
    table.integer('region_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('locations')
}
