const router = require('express-promise-router')()
const db = require('./model')

module.exports = router

router.get('/', async (req, res) => {
  const recipes = await db.getRecipes()
  res.json(recipes)
})

router.get('/:id/shoppingList', async (req, res) => {
  const shoppingList = await db.getShoppingList(req.params.id)
  if (shoppingList.length === 0) {
    throw new Error('No ingredients for recipes with that id.')
  }
  res.json(shoppingList)
})

router.get('/:id/instructions', async (req, res) => {
  const instructions = await db.getInstructions(req.params.id)
  if (instructions.length === 0) {
    throw new Error('No instructions for recipes with that id.')
  }
  res.json(instructions)
})

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'An error has occured', error: err.message })
)
