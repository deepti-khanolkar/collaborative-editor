exports.up = function (knex) {
  return knex.schema.createTable('data', (table) => {
    table.increments('id').primary()
    table.blob('content').notNullable()
  })
}
exports.down = function (knex) {
  return knex.schema.dropTable('data')
}
