exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe: 'mac and cheese' },
        { recipe: 'garlic bread' },
        { recipe: 'fried chicken' },
      ])
    })
}
