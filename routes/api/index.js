const router = require('express-promise-router')()
const recipesRouter = require('./recipes')

module.exports = [router.use('/recipes', recipesRouter)]
