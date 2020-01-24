const db = require('../../../data/dbConfig')

const getRecipes = () => db('recipes')

// SQL query:

// SELECT amount, unit, name
// FROM recipe_ingredient_info AS rii
// INNER JOIN amounts AS a
// ON a.amount_id = rii.amount_id
// INNER JOIN measurements AS m
// ON m.measurement_id = rii.measurement_id
// INNER JOIN ingredients AS i
// ON i.ingredient_id = rii.ingredient_id
// WHERE rii.recipe_id = $1;

const getShoppingList = recipe_id =>
  db
    .select('amount', 'unit', 'name')
    .from('recipe_ingredient_info AS rii')
    .innerJoin('amounts AS a', 'a.amount_id', 'rii.amount_id')
    .innerJoin('measurements AS m', 'm.measurement_id', 'rii.measurement_id')
    .innerJoin('ingredients AS i', 'i.ingredient_id', 'rii.ingredient_id')
    .where('rii.recipe_id', recipe_id)

// SQL query

// SELECT recipe, step_number, instruction
// FROM recipes AS r
// INNER JOIN steps AS s
// ON s.recipe_id = r.recipe_id
// WHERE r.recipe_id = $1;

const getInstructions = recipe_id =>
  db
    .select('recipe', 'step_number', 'instruction')
    .from('recipes AS r')
    .innerJoin('steps AS s', 's.recipe_id', 'r.recipe_id')
    .where('r.recipe_id', recipe_id)
    .orderBy('step_number')

module.exports = { getRecipes, getShoppingList, getInstructions }
