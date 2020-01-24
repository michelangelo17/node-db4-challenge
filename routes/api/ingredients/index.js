const router = require('express-promise-router')()
const db = require('./model')

module.exports = router

router.get('/:id/recipes', async (req, res) => {
  const recipes = await db.getRecipes(req.params.id)
  if (recipes.length === 0) {
    throw new Error('No recipes for ingredients with that id.')
  }
  res.json(recipes)
})

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'An error has occured', error: err.message })
)
