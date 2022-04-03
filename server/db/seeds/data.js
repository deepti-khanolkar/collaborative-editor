/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('data')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('data').insert([
        {
          id: '1234',
          content: 'Hi, welcome'
        }
      ])
    })
}