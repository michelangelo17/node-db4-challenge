const router = require('express-promise-router')()
const recipesRouter = require('./recipes')
const ingredientsRouter = require('./ingredients')

module.exports = [
  router.use('/recipes', recipesRouter),
  router.use('/ingredients', ingredientsRouter),
]
