exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('measurements')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('measurements').insert([
        { unit: 'cups' },
        { unit: 'grams' },
        { unit: 'tablespoons' },
      ])
    })
}
