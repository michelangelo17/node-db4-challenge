exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('steps').insert([
        { step_number: 1, instruction: 'boil water', recipe_id: 1 },
        { step_number: 2, instruction: 'add noodles', recipe_id: 1 },
        { step_number: 3, instruction: 'stir occassionally', recipe_id: 1 },
      ])
    })
}
