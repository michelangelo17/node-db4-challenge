exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('amounts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('amounts').insert([
        { amount: 1 },
        { amount: 0.5 },
        { amount: 2 },
      ])
    })
}
