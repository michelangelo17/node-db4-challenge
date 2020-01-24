const db = require('../../../data/dbConfig')

// SQL query:

// SELECT recipe, name
// FROM recipes AS r
// INNER JOIN recipe_ingredient_info AS rii
// ON rii.recipe_id = r.recipe_id
// INNER JOIN ingredients AS i
// ON rii.ingredient_id = i.ingredient_id
// WHERE rii.ingredient_id = $1;

const getRecipes = ingredient_id =>
  db
    .select('recipe', 'name')
    .from('recipes AS r')
    .innerJoin('recipe_ingredient_info AS rii', 'rii.recipe_id', 'r.recipe_id')
    .innerJoin('ingredients AS i', 'rii.ingredient_id', 'i.ingredient_id')
    .where('rii.ingredient_id', ingredient_id)

module.exports = { getRecipes }
