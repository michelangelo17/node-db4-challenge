exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient_info')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipe_ingredient_info').insert([
        { amount_id: 1, measurement_id: 1, ingredient_id: 1, recipe_id: 1 },
        { amount_id: 3, measurement_id: 1, ingredient_id: 1, recipe_id: 1 },
        { amount_id: 2, measurement_id: 3, ingredient_id: 3, recipe_id: 3 },
      ])
    })
}
